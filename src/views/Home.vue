<template>
  <div class="home">
    <Header />
    <Introduction />
    <Work />
    <Advantage />
    <Sponsors />
    <div class="container">
      <h3 class="heading card_heading">Топовые вертикали</h3>
      <div class="card-wrapper">
        <Card v-for="(item, index) in cardArr" :key="index" :heading="item.heading" :paragraph="item.paragraph" />
      </div>
    </div>
    <Partners />
    <Conclusion />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Introduction from '../components/Introduction.vue'
import Work from '../components/Work.vue'
import Advantage from '../components/Advantage.vue'
import Sponsors from '../components/Sponsors.vue'
import Card from '../components/Card.vue'
import Partners from '../components/Partners.vue'
import Conclusion from '../components/Conclusion.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Introduction,
    Work,
    Advantage,
    Sponsors,
    Card,
    Partners,
    Conclusion,
    Footer
  },
  data () {
    return {
      cardArr: [
    {
      heading: 'Installs',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      img: 'https://picsum.photos/200/300'
    },
    {
      heading: 'Utilities',
      paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      heading: 'APK',
      paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      heading: 'Addons',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    },
    {
      heading: 'Gambling/Betting ',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    },
    {
      heading: 'Новые вертикали',
      paragraph: 'Мы всегда в поиске новых трендовых вертикалей для наших вебмастеров'
    }
  ]
    }
  }
}
</script>

<style lang="scss">
  // Import Font
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  // Styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .home {
    overflow-x: hidden;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .link {
    text-decoration: none;
    cursor: pointer;
  }
  .list {
    list-style: none;
  }
  .heading_xl {
    font-family: "Roboto";
    font-weight: 900;
    font-size: 60px;
    line-height: 75px;
    text-transform: uppercase;
  }
  .heading {
    font-family: "Roboto";
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    text-transform: uppercase;
  }
  .heading_sm {
    font-family: "Roboto";
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
  }
  .paragraph_xl {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  .paragraph {
    font-family: "Roboto";
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .paragraph_sm {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 80px;
  }
  .card_heading {
    text-align: center;
    margin: 80px 0;
  }
  @media screen and (max-width:1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media screen and (max-width:992px) {
    .container {
      max-width: 960px;
    }
  }
  @media screen and (max-width:768px) {
    .container {
      max-width: 720px;
    }
  }
  @media screen and (max-width:576px) {
    .container {
      max-width: 540px;
    }
  }
  @media screen and (max-width:375px) {
    .container {
      max-width: 350px;
    }
  }
</style>