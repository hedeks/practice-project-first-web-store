<template>
  <div class="container">
    <Header />
    <Hero />
    <AboutBrand />
    <Products />
  </div>
</template>

<script>
import AboutBrand from './components/Layout/AboutBrand.vue';
import Header from './components/Layout/Header.vue';
import Hero from './components/Layout/Hero.vue';
import Products from './components/Product4Columns.vue';
import {ref} from 'vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Header, Hero,
    AboutBrand,
    Products
  },
}
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/satoshi');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  color: #22202e;
  font-weight: 400;
  line-height: 150%;
}

img {
  max-width: 100%;
}

.container {
  max-width: 1440px;
  margin: auto;
}
</style>
