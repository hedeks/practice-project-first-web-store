<template>
    <div class="product">
        <a href="#">
            <img :src="img" :alt="title" class="product-image">
        </a>
        <a href="#" class="product-name">{{ title }}</a>
        <span class="product-price"> £{{ price }}</span>
    </div>
</template>
<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    }
}
</script>
<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    margin: auto;
    &-image {
        display: block;
        margin-bottom: 24px;
    }

    &-name {
        color: #2A254B;
        text-decoration: none;
        margin-bottom: 8px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 1px;
        &:hover {
            text-decoration: underline;
        }
    }
    &-price {
        font-size: 18px;
    }
}
</style>