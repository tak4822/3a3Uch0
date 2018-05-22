<header class="banner">
  <div class="container">
    <a class="brand" href="{{ home_url('/') }}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="11916.675 5896.406 81.264 33.89" class="logo-svg">
        <path id="Path_26" data-name="Path 26" class="cls-1" d="M4922.332,2117.042l-39.992,18.644,72.263,10.506" transform="translate(7042.976 3781.63)"/>
      </svg>
    </a>
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
        {!!
         wp_nav_menu(
            array (
                'menu'            => 'main-menu',
                'theme_location' => 'primary_navigation',
                'container'       => FALSE,
                'container_id'    => FALSE,
                'menu_class'      => 'nav',
                'menu_id'         => FALSE,
                'depth'           => 1,
                'walker'          => new Description_Walker
            )
          );
         !!}
      @endif
    </nav>
  </div>
</header>
