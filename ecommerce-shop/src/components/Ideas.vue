<template>
    <div class="ideas">
        <div class="ideas-info">
            <HeroInformation :title="'It started with a small idea'"
                :description="'A global brand with local beginnings, our story begain in a small studio in South London in early 2014'"
                :backcolor="'darkgray'" 
                :mt="205"
                />
        </div>
        <div class="ideas-img">
            <img src="/img/Ideas_element.jpg" alt="Ideas_element" style="max-height: 100%;">
        </div>
    </div>
</template>
<script>
import HeroInformation from './HeroInformation.vue';

export default {
    components: { HeroInformation }
}
</script>
<style lang="scss" scoped>
.ideas {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    &-info {
        margin-right: 8px;
        background: #2A254B;
        max-width: 630px;
        padding: 64px 75px;
        height: 478px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &-img {
        margin-left: 8px;
        height: 478px;
        width: 630px;
    }
}
</style>