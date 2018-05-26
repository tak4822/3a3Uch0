@php /* Template Name: Products */ @endphp
@extends('layouts.app')

@section('content')
    @php($data = App\Controllers\PageProducts::products_data())
    <section class="regular-container products">

        <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path class="shape-overlays__path"></path>
            <path class="shape-overlays__path"></path>
        </svg>

        <div class="close-button">
            <div class="bar one"></div>
            <div class="bar two"></div>
        </div>
        <div class="slider-container">
            <div id="slider" class="slider-wrapper">
                <p id="slide-title" class="product-name">{{ $data[0]['title'] }}</p>
                @foreach ($data as $key=>$item)
                    <img id=""  src="{{ $item['image'] }}" alt="">
                @endforeach
            </div>
            <div id="pre" class="control-buttons"><p class="control-buttons-text">PREV</p></div>
            <div id="next" class="control-buttons"><p class="control-buttons-text">NEXT</p></div>

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
                <p id="lead">{!! $data[0]['lead'] !!}</p>
            </div>
            <div class="contents-wrapper">
                <div class="content-left">
                    <img id="subImage" src="{!! $data[0]['subImage'] !!}" alt="">
                </div>
                <div id="description" class="content-right">
                    {!! $data[0]['description']  !!}
                </div>
            </div>
        </div>
    </section>
@endsection
