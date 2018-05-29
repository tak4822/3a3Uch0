@php /* Template Name: About */ @endphp
@extends('layouts.app')

@section('content')
    <div class="regular-container about">
        @component('partials.sectionTitle')
            @slot('title')
                Member
            @endslot
        @endcomponent
        <section class="member-container">
            @while($get_member->have_posts()) @php($get_member->the_post())
            @component('partials.member', [
                'position' => get_post_meta( get_the_ID(), 'position', true ),
                'name' => get_the_title(),
                'image' => get_the_post_thumbnail_url(get_the_ID(), 'full')
            ])
            @endcomponent
            @endwhile
        </section>
        @component('partials.sectionTitle')
            @slot('title')
                News
            @endslot
        @endcomponent
        <section class="news-container">
            <div class="news-box">
                @php($i = 0) @while($get_news->have_posts() && $i < 5) @php($get_news->the_post())
                @component('partials.news', [
                    'link' => get_permalink(),
                    'title' => get_the_title(),
                    'date' => get_the_date( 'Y. m. d', get_the_ID() ),
                    'leadText' => $leadText = get_field('leadText'),
                ])
                @endcomponent
                @php($i += 1) @endwhile
            </div>
        </section>

        @component('partials.sectionTitle')
            @slot('title')
                Company Info
            @endslot
        @endcomponent
        @include('partials.companyInfo')
    </div>
@endsection
