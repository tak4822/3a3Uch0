<!doctype html>
<html @php language_attributes() @endphp>
  @include('partials.head')
  <body @php body_class() @endphp>
  <div class="transition-overlay"></div>
  <div id="site-wrap" style="opacity: 0;">
    @php do_action('get_header') @endphp
    @include('partials.header')

    <div class="mouse-container">
      <div class="cursor-out hover"></div>
      {{--<div class="cursor-core"></div>--}}
    </div>

    <div id="barba-wrapper" class="wrap container" role="document">
      <div class="barba-container" data-namespace="{{ $current_template }}">
        <div class="content">
          <main class="main">
            @yield('content')
          </main>
          @if (App\display_sidebar())
            <aside class="sidebar">
              @include('partials.sidebar')
            </aside>
          @endif
        </div>
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
  </div>
    @php wp_footer() @endphp
  </body>
</html>
