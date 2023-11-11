<template>
    <div class="page_header">
        <h1 class="page_header__h1">All Products</h1>
    </div>
    <div class="products">
        <div class="products_filters">
            <div class="products_filters_container">
                <div class="products_filters_container_type">
                    <span class="products_filters_container_type__header">Product type</span>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="Furniture" style="margin: 0 12px 0 0;" />
                        <label for="Furniture">Furniture</label>
                    </div>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="Homeware" style="margin: 0 12px 0 0;" />
                        <label for="Homeware">Homeware</label>
                    </div>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="Sofas" style="margin: 0 12px 0 0;" />
                        <label for="Sofas">Sofas</label>
                    </div>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="fittings" style="margin: 0 12px 0 0;" />
                        <label for="fittings">Light fittings</label>
                    </div>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="Accessories" style="margin: 0 12px 0 0;" />
                        <label for="Accessories">Accessories</label>
                    </div>
                </div>
                <div class="products_filters_container_price">
                    <span class="products_filters_container_type__header">Price</span>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="beforehundread" style="margin: 0 12px 0 0;" />
                        <label for="beforehundread">0-100</label>
                    </div>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="afterhundread" style="margin: 0 12px 0 0;" />
                        <label for="afterhundread">101-250</label>
                    </div>
                    <div class="products_filters_container_type__checkbox">
                        <input type="checkbox" id="afterafterhundread" style="margin: 0 12px 0 0;" />
                        <label for="afterafterhundread">250 +</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="products_listing">
            <div class="product_item" v-for="product in store.products" :key="product.id"
                @click="goToProductPage(product.id)">
                <img style="height: 350px;" :src="product.thumbnail" :alt="product.title">
                <span style="margin-top: 24px"> {{ product.title }}</span>
                <p style="margin-top: 12px">£{{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { productsStore } from "@/stores/productsStore";
// import { useRouter } from 'vue-router'

// const router = useRouter();
const store = productsStore();

// const goToProductPage = (id) => {
// router.push({name: 'ProductView', params: {id}})
// }

onMounted(() => {
    store.fetchProductsFromDB();
});

</script>

<style lang="scss" scoped>
.page_header {
    height: 209px;
    background: url("@/assets/page_header_png.jpg") lightgray 50% / cover no-repeat;
    padding: 36px 80px;
    display: flex;

    &__h1 {
        color: white;
        font-family: Clash Display;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin: auto 0 0 0;
    }
}

;

.products {
    display: flex;
    padding: 36px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    &_filters {
        width: 385px;

        &_container {

            &_type {
                display: flex;
                flex-direction: column;

                &__header {
                    margin-bottom: 20px;
                }

                &__checkbox {
                    margin: 12px 0 0 0;
                }
            }

            &_price {
                margin-top: 48px;
            }
        }

    }

    &_listing {
        max-width: 975px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

.product_item {
    width: 305px;
    height: 462px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    margin: 10px;
    color: #2A254B;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
</style>
