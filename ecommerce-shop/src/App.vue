<template>
  <div class="container">
    <Header />
    <Hero />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Hero from './components/Layout/Hero.vue';

export default {
  components: {
    Header, Hero
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
} 
img {
  max-width: 100%;
}
.container {
  max-width: 1440px;
  margin:auto; 
}
</style>
