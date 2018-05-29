@extends('layouts.app')

@section('content')
    <section class="regular-container news">
        @component('partials.sectionTitle')
            @slot('title')
                News
            @endslot
        @endcomponent
        <div class="contents-wrapper news">
            <p class="section-title">{{ get_the_title() }}</p>
            <p class="leadText">{{ get_field('leadText') }}</p>
            <div class="page-contents">
                @php the_content() @endphp
            </div>
        </div>
    </section>
@endsection
