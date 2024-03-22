<script setup>
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import PortfolioView from './views/PortfolioView.vue';
import PricingView from './views/PricingView.vue';
import TestimonialsView from './views/TestimonialsView.vue';
</script>

<template>

  <HomeView id="home"></HomeView>
  <PortfolioView id="portfolio"> </PortfolioView>
  <TestimonialsView id="testimonials"></TestimonialsView>
  <PricingView id="pricing"></PricingView>
  <AboutView id="about"></AboutView>
  <ContactView id="contact"></ContactView>




</template>

<style scoped>

</style>
