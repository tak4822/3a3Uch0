@php /* Template Name: Products */ @endphp
@extends('layouts.app')

@section('content')
    @php($data = App\Controllers\PageProducts::products_data())
    <section class="regular-container products">
        <div id="productsData" data-products="{{ $data }}"></div>
        <div class="product-layer">

        <div class="slider-container">
            <div class="line-top slider-line"></div>
            <div class="line-bottom slider-line"></div>
            <div class="line-container">
                <div class="white-cover"></div>
            </div>
            <div class="slider-wrapper">
                <p class="product-name">{{ $data[0]['title'] }}</p>
                <img src="{{ $data[0]['image'] }}" alt="">
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
