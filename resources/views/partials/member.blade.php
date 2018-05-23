<article class="member-container">
    <div class="member-pic">
        <div class="clipped-img" >
            <img src="{{ $image }}" alt="">
        </div>
        <svg height="0" width="0" viewBox="0 0 500 500">
            <defs>
                <clipPath id="member-clip" clipPathUnits="objectBoundingBox">
                    <polygon points="0.7 0.12, 0.83 0.63, 0.51 1, 0.16 0.72, 0.32 0.39, 0.33 0" />
                </clipPath>
            </defs>
        </svg>
    </div>
    <div class="member-contents">
        <div class="header">
            <p class="position">{{ $position }}</p>
            <p class="name">{{ $name }}</p>
        </div>
        <p class="introduction">{{ $introduction }}</p>
    </div>
</article>
