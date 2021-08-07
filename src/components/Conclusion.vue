<template>
  <div class="conclusion">
    <div class="container">
      <h3 class="heading">Остались вопросы? Готовы ответить!</h3>
      <input class="conclusion__input" type="text" placeholder="Ваше имя">
      <input class="conclusion__input" type="text" placeholder="Ваши контакты">
      <input class="conclusion__input" type="text" placeholder="Ваше предложение">
      <button class="btn">написать нам</button>
    </div>
  </div>
</template>


<style lang="scss">
  .conclusion {
    background: url('../assets/conclusion-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 300px 0;
    .heading {
      color: #fff;
      text-align: center;
      margin-top: 6pc;
      margin-bottom: 20px;
    }
    .btn {
      border: 1px solid #FFFFFF;
      border-radius: 40px;
      font-family: "Roboto";
      font-weight: 900;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      text-transform: uppercase;
      padding: 28px;
      color: #FFFFFF;
      width: 350px;
      background: transparent;
      margin-left: 50%;
      transform: translate(-50%);
      margin-top: 40px;
    }
    &__input {
      background: #FFFFFF;
      border-radius: 40px;
      width: 730px;
      padding: 30px 28px;
      border: none;
      outline: none;
      margin-left: 50%;
      transform: translate(-50%);
      margin-top: 20px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      &::placeholder {
        font-family: "Roboto";
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: rgba(126, 126, 126, 0.5);
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .conclusion {
      .heading {
        margin-top: 0pc;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .conclusion {
      .heading {
        font-size: 20px;
      }
      &__input {
        padding: 20px;
      }
      .btn {
        padding: 20px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .conclusion__input {
      width: 600px;
    }
  }
  @media screen and (max-width: 576px) {
    .conclusion {
      &__input {
        width: 400px;
      }
      .btn {
        width: 280px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .conclusion {
      &__input {
        width: 340px;
      }
      .btn {
        width: 250px;
      }
    }
  }  
</style>