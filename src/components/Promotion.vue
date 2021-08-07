<template>
  <div class="container">
    <div class="promotion">
      <h3 class="heading">направления нашей деятельности</h3>
      <div class="promotion__item">
        <h2 class="heading_xl">Продвижение</h2>
        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img class="promotion__item-line" src="../assets/line.png" alt="">
        <h2 class="heading heading_r">Рекламные форматы</h2>
        <div class="marketing-card">
          <MarketingCard v-for="(item, index) in marketingCardArr" :key="index" :img="item.img" :title="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketingCard from '../components/MarketingCard.vue'
export default {
  components: {
    MarketingCard
  },
  data () {
    return {
      marketingCardArr: [
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        },
        {
          img: 'https://www.iconpacks.net/icons/2/free-facebook-icon-2868-thumb.png',
          title: 'Facebook'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .promotion {
    padding: 120px 0 80px;
    .heading {
      text-align: center;
    }
    .heading_r {
      margin-top: 60px;
    }
    &__item {
      background: #FFFFFF;
      box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      padding: 60px;
      margin-top: 80px;
      text-align: center;
      .heading_xl {
        color: #2E9ADB;
      }
      .paragraph {
        font-weight: 500;
        color: #939393;
        margin-top: 20px;
      }
      &-line {
        margin-top: 40px;
      }
    }
  }
</style>