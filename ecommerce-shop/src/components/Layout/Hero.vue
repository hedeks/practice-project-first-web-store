<template>
    <div class="hero">
        <div class="hero-info">
            <HeroInformation :title="'Luxury homeware for people who love timeless design quality'" :description="'Shop the new Spring 2022 collection today'" :mt="157" :backcolor="'lightgray'"/>
        </div>
    </div>
</template>
<script>
import HeroInformation from '../HeroInformation.vue';

export default {
    components: {  HeroInformation }
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