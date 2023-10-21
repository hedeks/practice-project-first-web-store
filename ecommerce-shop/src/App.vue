<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
export default {
  components: {
    Header
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
.container {
  max-width: 1440px;
  margin:auto; 
}
</style>
