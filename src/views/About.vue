<template>
  <div class="about">
    <Header />
    <intro />
    <Work />
    <Advantage />
    <Partners />
    <Promotion />
    <Conclusion />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import intro from '../components/intro.vue'
import Work from '../components/Work.vue'
import Advantage from '../components/Advantage.vue'
import Partners from '../components/Partners.vue'
import Conclusion from '../components/Conclusion.vue'
import Footer from '../components/Footer.vue'
import Promotion from '../components/Promotion.vue'


export default {
  name: 'About',
  components: {
    Header,
    intro,
    Work,
    Advantage,
    Partners,
    Promotion,
    Conclusion,
    Footer
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
  
  // Edited styles
  .about {
    overflow-x: hidden;
    .header__menu {
      .link:hover {
        border-top: 2px solid #55B570;
      }
    }
    .work__item {
      .about-none {
        display: none;
      }
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
  }
</style>