<template>
  <div class="container">
    <div class="sponsors">
      <h2 class="heading">Еженедельные выплаты <span>от $100</span></h2>
      <p class="paragraph_xl">На удобную для вас платежную систему из перечисленных ниже</p>
      <div class="sponsors__item">
        <img src="../assets/sponsor1.png" alt="">
        <img src="../assets/sponsor2.png" alt="">
        <img src="../assets/sponsor3.png" alt="">
        <img src="../assets/sponsor4.png" alt="">
        <img src="../assets/sponsor5.png" alt="">
        <img src="../assets/sponsor6.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .sponsors {
    text-align: center;
    padding: 50px 0;
    .heading {
      span {
        color: #2e9adb;
      }
    }
    .paragraph_xl {
      color: #939393;
      margin-top: 20px;
    }
    &__item {
      display: flex;
      align-items: center;
      gap: 50px;
      margin-top: 80px;
      margin-left: 100px;
    }
  }
  @media screen and (max-width: 1200px) {
    .sponsors__item {
      margin-left: 60px;
    }
  }
  @media screen and (max-width: 992px) {
    .sponsors__item {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 375px) {
    .sponsors__item {
      flex-direction: column;
      margin-left: 0;
    }
  }
</style>