<template>
    <div class="about-brand">
        <h3 class="about-brand__title">What makes our brand different</h3>
        <div class="about-brand-elements">
            <div class="about-brand-element">
                <img src="/svg/Delivery.svg" alt="delivery" class="about-brand-element__img">
                <span class="about-brand-element__title">Next day as standard</span>
                <span class="about-brand-element__description">Order before 3pm and get your order the next day as
                    standard</span>
            </div>
            <div class="about-brand-element">
                <object type="image/svg+xml" data="/svg/Checkmark--outline.svg" class="about-brand-element__img">
                    Your browser does not support SVG
                </object>
                <span class="about-brand-element__title">Made by true artisans</span>
                <span class="about-brand-element__description">Handmade crafted goods made with real passion and
                    craftmanship
                </span>
            </div>
            <div class="about-brand-element">
                <img src="/svg/Purchase.svg" alt="Purchase" class="about-brand-element__img">
                <span class="about-brand-element__title">Unbeatable prices</span>
                <span class="about-brand-element__description">For our materials and quality you won’t find better prices
                    anywhere
                </span>
            </div>
            <div class="about-brand-element">
                <img src="/svg/Sprout.svg" alt="Sprout" class="about-brand-element__img">
                <span class="about-brand-element__title">Recycled packaging</span>
                <span class="about-brand-element__description">We use 100% recycled to ensure our footprint is more
                    manageable</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.about-brand {
    padding: 80px 0 130px 0;

    &__title {
        text-align: center;
        font-size: 24px;
        color: #2A254B;
        margin: 0 0 84px 0;
        font-weight: 400;
        line-height: 140%;
    }

    &-elements {
        display: flex;
        justify-content: center;
    }

    &-element {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: #F9F9F9;
        padding: 48px;
        margin: 0 9px;
        width: 305px;

        &__img {
            height: 24px;
            fill: none;
        }

        &__title {
            margin-top: 12px;
            margin-bottom: 12px;
            font-size: 20px;
            line-height: 140%;
            color: #2A254B;
        }

        &__description {
            color: #2A254B;
        }
    }
}
</style>