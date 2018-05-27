@php /* Template Name: Career */ @endphp
@extends('layouts.app')

@section('content')
    <section class="regular-container career">
        @component('partials.sectionTitle')
            @slot('title')
                Career
            @endslot
        @endcomponent
        <div class="contents-wrapper">
            <div class="contents-left">
                <p class="section-title">採用情報</p>
                <div class="page-contents">
                    @while(have_posts()) @php the_post() @endphp
                    @include('partials.content-page')
                    @endwhile
                </div>
            </div>
            <div class="career-position-container">
                @while($get_career->have_posts()) @php($get_career->the_post())
                @component('partials.careerCard', [
                    'positionName' => get_the_title(),
                    'leadDesc' => get_post_meta( get_the_ID(), 'leadDesc', true ),
                    'detail' => get_post_meta( get_the_ID(), 'detail', true ),
                ])
                @endcomponent
                @endwhile
            </div>
        </div>
    </section>
@endsection
