@php /* Template Name: Contact */ @endphp
@extends('layouts.app')

@section('content')
    <section class="regular-container contact">
        @component('partials.sectionTitle')
            @slot('title')
                Contact
            @endslot
        @endcomponent
        <div class="contents-wrapper">
            <div class="contents-left">
                <p class="section-title">お問い合わせ</p>
                <div class="page-contents">
                    @while(have_posts()) @php the_post() @endphp
                    @include('partials.content-page')
                    @endwhile
                </div>
            </div>
            <div class="form">
                <?php echo do_shortcode( '[contact-form-7 id="51" title="お問い合わせ"]' ); ?>
            </div>
        </div>
    </section>
@endsection
