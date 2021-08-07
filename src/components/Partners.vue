<template>
  <div class="container">
    <div class="partners">
      <h3 class="heading">Нам доверяют</h3>
      <div class="partners__item">
        <img src="../assets/partners-1.png" alt="Partners Logo">
        <img src="../assets/partners-2.png" alt="Partners Logo">
        <img src="../assets/partners-3.png" alt="Partners Logo">
        <img src="../assets/partners-4.png" alt="Partners Logo">
        <img src="../assets/partners-5.png" alt="Partners Logo">
        <img src="../assets/partners-6.png" alt="Partners Logo">
        <img src="../assets/partners-7.png" alt="Partners Logo">
        <img src="../assets/partners-8.png" alt="Partners Logo">
        <img src="../assets/partners-9.png" alt="Partners Logo">
        <img src="../assets/partners-10.png" alt="Partners Logo">
        <img src="../assets/partners-11.png" alt="Partners Logo">
        <img src="../assets/partners-12.png" alt="Partners Logo">
        <img src="../assets/partners-13.png" alt="Partners Logo">
        <img src="../assets/partners-14.png" alt="Partners Logo">
        <img src="../assets/partners-15.png" alt="Partners Logo">
        <img src="../assets/partners-16.png" alt="Partners Logo">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .partners {
    .heading {
      text-align: center;
    }
    &__item {
      margin-top: 90px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      img {
        justify-content: center;
        margin-top: 50px;
        margin-left: 50px;
      }
    }
  }
  @media screen and (max-width:992px) {
    .partners__item {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 768px) {
    .partners__item {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 576px) {
    .partners__item {
      grid-template-columns: 1fr 1fr;
      img {
        margin-left: 0;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .partners__item {
      grid-template-columns: 1fr;
      img {
        margin-left: 50px;
      }
    }
  }
</style>