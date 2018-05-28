<article class="member-wrapper">
    <div class="member-pic">
        <div class="clipped-img" >
            {{--<div class="linear-gradient"></div>--}}
            <img src="{{ $image }}" alt="">
        </div>
        <svg height="0" width="0" viewBox="0 0 500 500">
            <defs>
                <clipPath id="member-clip" clipPathUnits="objectBoundingBox">
                    <polygon points="0.8 0.13, 0.99 0.56, 0.55 1, 0.02 0.7, 0.21 0.34, 0.15 0" />
                </clipPath>
            </defs>
        </svg>
    </div>
    <div class="member-contents">
        <p class="member-position">{{ $position }}</p>
        <p class="member-name">{{ $name }}</p>
    </div>
</article>
