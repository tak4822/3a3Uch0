@extends('layouts.app')

@section('content')
    <div class="regular-container">
        @component('partials.sectionTitle')
            @slot('title')
                Member
            @endslot
        @endcomponent

        {{--<pre>--}}
            {{--{{ print_r($get_member) }}--}}
        {{--</pre>--}}

        @while($get_member->have_posts()) @php($get_member->the_post())
        @component('partials.member', [
        'position' => get_post_meta( get_the_ID(), 'position', true ),
        'name' => get_post_meta( get_the_ID(), 'name', true ),
        'introduction' => get_post_meta( get_the_ID(), 'introduction', true ),

        ])

        @endcomponent
        @endwhile
        {{--@include('partials.news')--}}
        {{--@include('partials.companyInfo')--}}
    </div>
@endsection
