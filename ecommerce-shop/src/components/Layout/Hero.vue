<template>
    <div class="hero">
        <div class="hero-info">
            <div class="hero-info-text">
                <h2 class="hero-info__title">Luxury homeware for people who love timeless design quality</h2>
                <span class="hero-info__description">Shop the new Spring 2022 collection today</span>
            </div>
            <div class="hero-info-link"><a href="#" class="hero-info-link__a">View collection</a></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.hero {
    background: url('/img/Hero.jpg');
    height: 704px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
    color: #2A254B;
    &-img {
        max-width: 100%;
    }

    &-info {
        background: #fff;
        max-width: 630px;
        padding: 50px 55px;
        height: 444px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-link {
            padding: 16px 32px;
            background-color: #F9F9F9;
            width: fit-content;
            &__a {
                color: #2A254B;
                text-decoration: none;
                width: auto;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__title {
            font-weight: 400;
            line-height: 1.5;
            font-size: 32px;
            margin: 0 0 20px 0;
        }

        &__description {
            color: #5B5676;
        }
    }
}
</style>