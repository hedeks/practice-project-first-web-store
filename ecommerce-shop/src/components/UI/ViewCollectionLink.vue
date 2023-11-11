<template>
    <div class="hero-info-link">
        <router-link to="/products" class="hero-info-link__a"
            :class="[{ lightgray: backcolor === 'lightgray' }, { darkgray: backcolor === 'darkgray' }]">View
            collection </router-link> 
    </div>
</template>
<script>
export default {
    props: {
        backcolor: {
            type: String,
        }
    }
}
</script>
<style lang="scss">
.hero-info-link {
    width: fit-content;

    &__a {
        color: #2A254B;
        text-decoration: none;
        width: auto;

        &:hover {
            color: lightgray;
        }
    }
}

.lightgray {
    background-color: #f9f9f9;
    padding: 16px 32px;
    width: fit-content;
}

.darkgray {
    background-color: rgba($color: gray, $alpha: 0.15);
    color: white;
    padding: 16px 32px;
    width: fit-content;
}
</style>