<template>
    <div class="hero-info-text" :class="{fontwhite: backcolor === 'darkgray'}">
        <h2 class="hero-info__title">{{ title }}</h2>
        <span class="hero-info__description" :class="{fontwhite: backcolor === 'darkgray'}">{{ description }}</span>
        <ViewCollectionLink :backcolor="backcolor" :class="[{mt157: mt === 157}, {mt205: mt === 205}]"/>
    </div>
</template>
<script>
import ViewCollectionLink from './UI/ViewCollectionLink.vue';

export default {
    props: {
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: false,
        },
        backcolor: {
            type: String
        },
        mt: {
            type: Number
        }
    },
    components: { ViewCollectionLink }
}
</script>
<style lang="scss" scoped>
.mt157{
    margin-top: 157px;
}
.mt205 {
    margin-top: 205px;
}
.hero-info__title {
    font-weight: 400;
    line-height: 1.5;
    font-size: 32px;
    margin: 0 0 20px 0;
}

.hero-info__description {
    color: #5B5676;
}
.fontwhite {
    color: white;
}
</style>