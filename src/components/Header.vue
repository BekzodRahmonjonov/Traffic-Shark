<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <a href="../views/Home.vue" class="link">
          <img src="../assets/logo.png" alt="Logo Image">
        </router-link>
      </div>
      <ul class="header__menu">
        <li class="list">
          <a href="" class="link">вебмастерам</a>
        </li>
        <li class="list">
          <a href="" class="link">рекламодателям</a>
        </li>
      </ul>
      <ul class="header__authorization">
        <li class="list">
          <a href="" class="link">вход</a>
        </li>
        <li class="list line">|</li>
        <li class="list">
          <a href="" class="link registration">регистрация</a>
        </li>
      </ul>
      <div class="header__lang">
      <input class="header__lang-input" type="radio" checked name="lang" id="ru">
      <label class="header__lang-label" for="ru">RU</label>
      <input class="header__lang-input" type="radio" name="lang" id="en">
      <label class="header__lang-label" for="en">EN</label>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .header {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-logo {
      padding: 15px 0;
    }
    &__menu {
      display: flex;
      align-items: center;
      gap: 50px;
      .link {
        font-family: Roboto;
        font-weight: bold;
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        color: #565656;
        padding: 28px 0;
        &:hover, &:active {
          border-top: 2px solid #2E9ADB;
        }
      }
    }
    &__authorization {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 32px 50px;
      border-left: 2px solid #F4F4F4;
      border-right: 2px solid #F4F4F4;
      .link {
        font-family: Roboto;
        font-weight: 800;
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        color: #55B570;
      }
    }
    &__lang {
      background: #F9F9F9;
      border: 1px solid #EBEBEB;
      border-radius: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      width: 75px;
      height: 30px;
      cursor: pointer;
      &-label {
        font-family: "Roboto";
        font-weight: bold;
        font-size: 11px;
        line-height: 13px;
        color: #919191;
        width: 50px;
      }
      &-input[type="radio"] {
        display: none;
      }
      &-input[type="radio"]:checked + .header__lang-label {
        background: #4EAAE0;
        font-weight: bold;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        border-radius: 14px;
        transition: all .3s;
        padding: 0 14px;
      }
      &-input[type="radio"]:checked + .header__lang {
        justify-content: center;
      }
    }
  }
  @media screen and (max-width:768px) {
    .header {
      .line, .registration {
        display: none;
      }
      &__authorization {
        border-left: none;
        padding-right: 16px;
      }
    }
  }
  @media screen and (max-width:576px) {
    .header {
      &__menu {
        display: none;
      }
      &__authorization {
        padding-right: 90px;
      }
    }
  }
  @media screen and (max-width:375px) {
    .header {
      &__authorization {
        padding-right: 20px;
      }
    }
  }
</style>
