@php /* Template Name: Products */ @endphp
@extends('layouts.app')

@section('content')
    @php($data = App\Controllers\PageProducts::products_data())
    <section class="regular-container products">
        <div class="product-layer">

        <div class="slider-container">
            {{--<div class="line-top slider-line"></div>--}}
            {{--<div class="line-bottom slider-line"></div>--}}
            <div class="line-container">
                <div class="white-cover"></div>
            </div>
            <div id="slider" class="slider-wrapper">
                <p id="slide-title" class="product-name">{{ $data[0]['title'] }}</p>
                @foreach ($data as $item)
                    <img src="{{ $item['image'] }}" alt="">
                @endforeach
            </div>
            <div id="pre" style="position: absolute; top: 80%; left: 10%;">pre</div>
            <div id="next" style="position: absolute; top: 80%; right: 10%;">next</div>

            <div id="pagination" style="">
                @for ($i = 0; $i < count($data); $i++)
                    @if($i === 0 )
                        <button class="active" data-slide="{{ $i }}"></button>
                    @else
                        <button data-slide="{{ $i }}"></button>
                    @endif
                @endfor
            </div>
        </div>

        <div class="contents-container">
            <div class="content-top">
                <p>{!! $data[0]['lead'] !!}</p>
            </div>
            <div class="content-left">
                <img src="{!! $data[0]['subImage'] !!}" alt="">
            </div>
            <div class="content-right">
                {!! $data[0]['description']  !!}
            </div>
        </div>

        </div>
    </section>
@endsection
