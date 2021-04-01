<template>
  <div class="app-header">
        <div class="logo">
            BinanceStaking<span class="app-header__logo--black">Watcher</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
};
</script>

<style scoped>

.app-header {
    text-align: left;
    background-color: #F7FAFB;
}

.logo {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #20BEAD;
    margin: 1rem 0 1rem 2rem;
    font-weight: 700;
    font-size: 1.3rem;
}

.app-header__logo--black {
    color: #000000;
}

@media screen and (max-width: 600px) {
  .logo {
    margin-left: 1.3rem;
  }
}

</style>
