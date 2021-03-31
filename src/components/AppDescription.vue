<template>
  <div>
    <div class="description">
      <div class="description__content">
        <h1>
          What is it?
        </h1>
        <p>
            Cryptocurrency staking offers a convenient way to earn interest
            on longer-term crypto holdings. The staking programs offered by
            Binance, the biggest cryptocurrency exchange by market cap, are
            usually under high demand and the most lucrative staking options
            are sold out most of the time. Binance doesn’t have a built-in
            system that would notify users about availability of its staking
            options. This bot provides this service by sending email notification
            immediately after a specified staking option, which was previously sold out,
            becomes avaliable. This is possible by constant monitoring of
            the Binance website (
                <a href="https://www.binance.com/en/pos">
                    https://www.binance.com/en/pos
                </a>
            ).
        </p>
        <p>
            Currently it's not possible to track programs with specific length -
            if you follow e.g. BNB currency and it includes staking options for 30, 60 and 90 days,
            you will get notified when any of them becomes available.
        </p>
        <p>
            To take part, just fill in the form below.
        </p>
        <h1>
          About project
        </h1>
        <p>
            The code behind this bot is available on Github:
            <a href="https://github.com/druskacik/binance-staking-notification-bot">
                https://github.com/druskacik/binance-staking-notification-bot
            </a>
        </p>
        <p>
            Providing this bot publicly to everyone may seem anti-purpose,
            but as long as the community using it remains small it will not be a problem.
            If the demand will be too high, I will consider what are my options.
        </p>
        <p>
            If you want to provide any feedback or suggestions, the fastest way to contact me is via Telegram:
            <a href="https://t.me/rdruska">
                https://t.me/rdruska
            </a>
        </p>
        <p>
          Support development of this project:
        </p>
        <div>
            BTC: 1DkQTzGvYvqzjHFYc5Zejx9ZUNE9NbxKBv
        </div>
        <div>
            ETH: 0xa58bccec9364c22d2a6e5e8e30b056ff9a0dfc7c
        </div>
        <div>
            LTC: LViYjGcuqEwRGFrWieL4NwMTXq1Fng5XBM
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-description',
};

</script>

<style scoped>

.description {
  padding: 2rem 0;
  /* good */
  /* background-color: #E0E2E5; */
  background-color: #EBEDEE;
}

.description__content {
  width: 60%;
  margin: auto;
  max-width: 40rem;
}

@media screen and (max-width: 600px) {

  .description__content {
    width: 90%;
  }

}

</style>