<template>
    <Hero />
    <AboutBrand />
    <Products />
    <Ideas />
    <SignUp />
</template>
  
<script setup>
import Ideas from '@/components/Ideas.vue';
import AboutBrand from '@/components/Layout/AboutBrand.vue';
import Hero from '@/components/Layout/Hero.vue';
import Products from '@/components/Product4Columns.vue';
import SignUp from '@/components/SignUp.vue';

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomePage'
});

</script>