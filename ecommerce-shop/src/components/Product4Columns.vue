<template>
    <div class="products">
        <Product v-for="product in products" 
        :key="product.id" :img="product.img" 
        :title="product.title"
        :price="product.price" />
    </div>
    <ViewCollectionLink style="margin: auto; margin-top: 64px;"
    :backcolor="'lightgray'"
    />
</template>
<script>
import Product from './Product.vue';
import ViewCollectionLink from './UI/ViewCollectionLink.vue';

export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    img: '/img/Chair.jpg',
                    title: 'The Dandy chair',
                    price: 250
                },
                {
                    id: 2,
                    img: '/img/Vase__set.jpg',
                    title: 'Rustic Vase Set',
                    price: 155
                },
                {
                    id: 3,
                    img: '/img/Silky__vase.jpg',
                    title: 'The Silky Vase',
                    price: 125
                },
                {
                    id: 4,
                    img: '/img/Lucy__Lamp.jpg',
                    title: 'The Lucy Lamp',
                    price: 399
                },
            ]
        }
    },
    components: {
    Product,
    ViewCollectionLink
}
}
</script>
<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: auto;
    column-gap: 20px;
}
</style>