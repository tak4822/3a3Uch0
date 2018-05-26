import { TweenLite } from 'gsap/TweenMax';
import * as THREE from 'three';
import charCount from '../util/charCount';

export const displacementSlider = function(opts) {

  let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

  let fragment = `
        
        varying vec2 vUv;

        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform sampler2D disp;

        uniform float dispFactor;
        uniform float effectFactor;

        void main() {

            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;

            vec4 disp = texture2D(disp, uv);

            vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*intensity), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*intensity), uv.y);

            _currentImage = texture2D(currentImage, distortedPosition);
            _nextImage = texture2D(nextImage, distortedPosition2);
           
            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

            gl_FragColor = finalTexture;

        }
    `;

  let images = opts.images, image, sliderImages = [];
  const dispImage = opts.disp;
  const data = opts.data;
  // let canvasWidth = images[0].clientWidth;
  // let canvasHeight = images[0].clientHeight;
  let parent = opts.parent;

  let scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x23272A );
  let camera = new THREE.OrthographicCamera(
    parent.offsetWidth / -2,
    parent.offsetWidth / 2,
    parent.offsetHeight / 2,
    parent.offsetHeight / -2,
    1,
    1000
  );

  camera.position.z = 1;

  let renderer = new THREE.WebGLRenderer({
    antialias: false,
  });

  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setClearColor( 0xffffff, 0.0 );
  renderer.setSize( parent.offsetWidth, parent.offsetHeight );
  parent.appendChild( renderer.domElement );

  let loader = new THREE.TextureLoader();
  loader.crossOrigin = "anonymous";

  var disp = loader.load(dispImage);
  disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

  console.log('images',images);

  images.forEach( ( img ) => {

    image = loader.load( img.getAttribute( 'src' ) + '?v=' + Date.now() );
    image.magFilter = image.minFilter = THREE.LinearFilter;
    image.anisotropy = renderer.capabilities.getMaxAnisotropy();
    sliderImages.push( image );

  });

  let mat = new THREE.ShaderMaterial({
    uniforms: {
      dispFactor: { type: "f", value: 0.0 },
      currentImage: { type: "t", value: sliderImages[0] },
      nextImage: { type: "t", value: sliderImages[1] },
      disp: { type: "t", value: disp },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0,
  });

  let geometry = new THREE.PlaneBufferGeometry(
    parent.offsetWidth,
    parent.offsetHeight,
    1
  );
  let object = new THREE.Mesh(geometry, mat);
  object.position.set(0, 0, 0);
  scene.add(object);

  const animateSlider = (slideId) => {
    mat.uniforms.nextImage.value = sliderImages[slideId];
    mat.uniforms.nextImage.needsUpdate = true;

    TweenLite.to( mat.uniforms.dispFactor, 1, {
      value: 1,
      ease: 'Expo.easeInOut',
      onComplete: function () {
        mat.uniforms.currentImage.value = sliderImages[slideId];
        mat.uniforms.currentImage.needsUpdate = true;
        mat.uniforms.dispFactor.value = 0.0;
        isAnimating = false;
      },
    });
    const nextSlideTitle =data[slideId].title;
    const slideTitleEl = document.getElementById('slide-title');
    const strLen = charCount(data[slideId].title);
    TweenLite.fromTo( slideTitleEl, 0.5,
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
      },
      {
        autoAlpha: 0,
        filter: 'blur(10px)',
        y: 20,
        ease: 'Expo.easeIn',
        onComplete: function () {
          slideTitleEl.innerHTML = nextSlideTitle;
          if(strLen > 9) {
            slideTitleEl.style.fontSize = '2rem';
          } else {
            slideTitleEl.style.fontSize = '3rem';
          }

          TweenLite.to( slideTitleEl, 0.5, {
            autoAlpha: 1,
            filter: 'blur(0px)',
            y: 0,
          })
        },
      });
  }
  let isAnimating = false;
  let addEvents = function(){

    let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));

    pagButtons.forEach( (el) => {

      el.addEventListener('click', function() {

        if( !isAnimating ) {
          isAnimating = true;
          document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
          this.className = 'active';

          let slideId = parseInt( this.dataset.slide, 10 );

          animateSlider(slideId);
        }
      });
    });
  };

  addEvents();

  // window.addEventListener( 'resize' , function(e) {
  //     renderer.setSize(renderW, renderH);
  // });

  let animate = function() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };
  animate();
};
