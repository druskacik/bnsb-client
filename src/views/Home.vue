<template>
  <div class="home">
    <landing-page-header />
    <app-description />
    <app-form />
  </div>
</template>

<script>

import AppDescription from '../components/AppDescription.vue';
import AppForm from '../components/AppForm.vue';
import LandingPageHeader from '../components/LandingPageHeader.vue';

export default {
  name: 'Home',
  components: {
    LandingPageHeader,
    AppForm,
    AppDescription,
  },
};
</script>
