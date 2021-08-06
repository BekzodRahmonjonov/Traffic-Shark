<template>
  <div class="advantage">
    <div class="container">
      <h3 class="heading">мы всегда в топе!</h3>
      <p class="paragraph_xl">Мы прямой рекламодатель с собственными офферами, которые входят в топ-чарты AppStore и Google Play. </p>
      <div class="advantage__item">
        <div class="advantage__item-card">
          <h2 class="heading_xl">топ</h2>
          <p class="paragraph">Наши офферы входят в ТОПы в AppStore и Google Play</p>
        </div>
        <div class="advantage__item-card">
          <h2 class="heading_xl">офферы</h2>
          <p class="paragraph">Мы делаем собственные белые мобильные офферы, которые вы не найдете ни в одной другой партнерке</p>
        </div>
        <div class="advantage__item-card">
          <h2 class="heading_xl">2.5$</h2>
          <p class="paragraph">Мы платим до $2.5 за инсталл и принимаем трафик со всего мира</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .advantage {
    background: url('../assets/advantage.png');
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    padding: 200px 0;
    &__item {
      display: flex;
      margin: 0 auto;
      margin-top: 80px;
      justify-content: space-between;
      &-card {
        width: 350px;
      }
    }
    .heading {
      color: #fff;
      &_xl {
        color: #fff;
      }
    }
    .paragraph {
      color: #fff;
      margin-top: 30px;
      &_xl {
        color: #fff;
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width:576px) {
    .advantage {
      &__item {
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }
    }
  }
</style>