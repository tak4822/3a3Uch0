@php /* Template Name: About */ @endphp
@extends('layouts.app')

@section('content')
    <div class="regular-container">
        @component('partials.sectionTitle')
            @slot('title')
                Member
            @endslot
        @endcomponent

        {{--<pre>--}}
            {{--{{ print_r($get_news) }}--}}
        {{--</pre>--}}

        @while($get_member->have_posts()) @php($get_member->the_post())
        @component('partials.member', [
            'position' => get_post_meta( get_the_ID(), 'position', true ),
            'name' => get_post_meta( get_the_ID(), 'name', true ),
            'introduction' => get_post_meta( get_the_ID(), 'introduction', true ),
            'image' => get_the_post_thumbnail_url(get_the_ID(), 'full')
        ])
        @endcomponent
        @endwhile

        @component('partials.sectionTitle')
            @slot('title')
                News
            @endslot
        @endcomponent
        <section class="news-container">
            @while($get_news->have_posts()) @php($get_news->the_post())
            @component('partials.news', [
                'title' => get_the_title(),
                'date' => get_the_date( 'Y. m. d', get_the_ID() ),
                'leadText' => get_post_meta( get_the_ID(), 'leadText', true ),
            ])
            @endcomponent
            @endwhile
        </section>

        @component('partials.sectionTitle')
            @slot('title')
                Company Info
            @endslot
        @endcomponent
        @include('partials.companyInfo')
    </div>
@endsection
