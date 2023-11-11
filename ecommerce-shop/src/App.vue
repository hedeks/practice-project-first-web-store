<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue';
import Footer from "@/components/Layout/Footer.vue"

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
