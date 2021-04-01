<template>
  <div id="app">
    <router-view/>
    <the-footer />
  </div>
</template>

<script>

import TheFooter from './components/TheFooter.vue';

export default {
  name: 'app',
  components: {
    TheFooter,
  },
};
</script>

<style>

@font-face {
  font-family: 'nunito';
  src: url('./assets/Nunito-Regular.ttf');
  /* src: url('./assets/Nunito-SemiBold.ttf'); */
}

#app {
  font-family: 'nunito', Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #3A3A3A;
  background-color: #F7FAFB;
}

</style>
