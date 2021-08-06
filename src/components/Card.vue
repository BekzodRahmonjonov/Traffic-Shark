<template>
  <div class="container">
    
    <div class="top-card">
      <div class="top-card__item">
        <img src="../assets/topCard1.png">
        <img v-bind="img" style="width:100%;" alt="">
        <h6 class="heading_sm">{{ heading }}</h6>
        <p class="paragraph_sm">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:['heading','paragraph', 'img'],
}
</script>

<style lang="scss">
  .top-card {
    &__item {
      background: url('../assets/topCard-bg.png');
      background-repeat: no-repeat;
      width: 350px;
      padding: 40px;
      box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      .heading_sm {
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 25px;
        margin-top: 87px;
      }
      .paragraph_sm {
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width:400px) {
    .top-card__item {
      width: 290px;
    } 
  }
</style>