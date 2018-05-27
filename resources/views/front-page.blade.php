@extends('layouts.app')

@section('content')
    <section class="front-page-container">
        <div class="front-view-wrapper">
            <div class="first-view">
                <div class="first-view-contents">
                    <h1 class="kakucho-name"><span>K</span><span>A</span><span>K</span><span>U</span><span>C</span><span>H</span><span>O</span></h1>
                    <div class="first-view-text">
                        <div class="text-anim-wrapper first">
                            <div class="white-block"></div>
                            <p class="front-page-text">現実世界を拡張し、</p>
                        </div>
                        <div class="text-anim-wrapper first">
                            <div class="white-block"></div>
                            <p class="front-page-text">新しい社会の実現を目指す</p>
                        </div>
                    </div>
                    <div class="scroll-ui-wrapper">
                        <div class="scroll-ui"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="front-view-wrapper">
            <div class="second-view">
                <div class="philosophy">
                    <p class="philosophy-letter">現実世界を<br/>拡張し、<br/>新しい社会の<br/>実現を目指す</p>
                </div>
                <div class="philosophy-text-container">
                    <p class="philosophy-text">KAKUCHOは、今私たちの目の前に広がるこの世界を人類史における黎明期だ、と考えます。</p>
                    <p class="philosophy-text">その昔…<br/>私たちは遠くにいる人とコミュニケーションをとる手段を知りませんでした。<br/>遠くに行く方法を知りませんでした。その時々、目の前に広がる世界がすべてでした。</p>
                    <p class="philosophy-text">私たちが暮らすこの世界は、それを新しい次元へ導こうとする多くの人や企業の絶え間ぬ努力によって日々進化を続けております。</p>
                    <p class="philosophy-text">それにもかかわらず、21世紀となる今尚、世界は際限なく成長を続けます。<br/>それくらい私たちの世界は底知れぬ成長ポテンシャルをもっております。</p>
                    <p class="philosophy-text">KAKUCHOは、今私たちの目の前に広がるこの世界をさらに拡張し、誰も目撃したことのない新しい社会の実現を目指し、私たち人類のより豊かな生活を確立します。</p>
                    <a class="front-link" href="/products">サービスを見る</a>
                </div>
            </div>
        </div>
        <svg class="front-view-triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 333.3 397.9">
            <polygon class="cls-1" points="166.6,75 39.3,295.5 294,295.5">
                <animate id="animation-to-long-tri" begin="indefinite" dur="1000ms" fill="freeze" attributeName="points" to="258.8,258.8 98.7,30.8 104.2,375.3 "/>
                {{--<animate id="animation-to-green" begin="indefinite" fill="freeze" attributeName="fill" dur="500ms" to="#53B848"></animate>--}}
            </polygon>
        </svg>
    </section>
@endsection
