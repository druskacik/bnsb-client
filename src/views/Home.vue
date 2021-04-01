<template>
  <div class="home">
    <app-header />
    <div class="home__description-and-form">
      <div class="home__description-and-form__element">
        <app-description />
      </div>
      <div class="home__description-and-form__element">
        <app-form />
      </div>
    </div>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader.vue';
import AppDescription from '../components/AppDescription.vue';
import AppForm from '../components/AppForm.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppDescription,
    AppForm,
  },
};
</script>

<style scoped>

.home__description-and-form {
  display: flex;
  flex-direction: row;
}

.home__description-and-form__element {
  width: 50%;
}

@media screen and (max-width: 900px) {

  .home__description-and-form {
    flex-direction: column;
  }

  .home__description-and-form__element {
    width: 100%;
  }
}

</style>
