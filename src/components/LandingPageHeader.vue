<template>
  <div>
        <div class="logo logo--pc">
            Binance Staking Notification Bot
        </div>
        <div class="logo logo--mobile">
            <div>Binance Staking</div>
            <div>Notification Bot</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'landing-page-header',
};
</script>

<style scoped>

.logo {
    padding: 2.5rem 0;
    font-size: 3rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: whitesmoke;
    background-color: #254264;
}

.logo--mobile {
    font-size: 2.3rem;
    display: none;
}

@media screen and (max-width: 600px) {
    .logo--pc {
        display: none;
    }

    .logo--mobile {
        display: block;
    }
}

</style>
