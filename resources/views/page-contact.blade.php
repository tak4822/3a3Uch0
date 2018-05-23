@php /* Template Name: Contact */ @endphp
@extends('layouts.app')

@section('content')
    <section class="regular-container contact">
        @component('partials.sectionTitle')
            @slot('title')
                Contact
            @endslot
        @endcomponent

        <p class="section-title">お問い合わせ</p>

        <div class="page-contents">
            @while(have_posts()) @php the_post() @endphp
            @include('partials.content-page')
            @endwhile
        </div>
    </section>
@endsection
