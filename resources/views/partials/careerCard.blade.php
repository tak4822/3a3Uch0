<div class="careerCard-container">
    <div class="title-container">
        <div class="deco"></div>
        <div class="position">{{ $positionName }}</div>
    </div>
    <p class="leadDesc">{{ $leadDesc }}</p>
    <div class="detail-container">
        {{ $detail }}
        <a class="cta" href="/contact">
            <p class="buttonText">この職種に応募する</p>
        </a>
    </div>
    <div class="expandButton">
        <p class="buttonText">詳細を見る</p>
        <img class="arrow" src="@asset('images/arrow_expand.svg')" alt="">
    </div>
</div>