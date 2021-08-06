<template>
  <div class="introduction">
    <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="option"
      />
    <div class="container">
      <h1 class="heading_xl">Мобильная партнерская сеть</h1>
      <div class="introduction__data">
        <div class="introduction__data-item r-border  r-border_first">
          <h3 class="heading">300+</h3>
          <p class="paragraph">офферов по всему миру</p>
        </div>
        <div class="introduction__data-item r-border r-border_second">
          <h3 class="heading">70+</h3>
          <p class="paragraph">активных рекламодателей</p>
        </div>
        <div class="introduction__data-item r-border r-border_third">
          <h3 class="heading">6 лет</h3>
          <p class="paragraph">в аффилейт маркетинге</p>
        </div>
        <div class="introduction__data-item  r-border_fourth">
          <h3 class="heading">10.000+</h3>
          <p class="paragraph">конверсий в день</p>
        </div>
      </div>
      <div class="introduction__card">
        <div class="introduction__card-item">
          <p class="paragraph">Я пользователь соцсетей, блогер, владелец сайта или арбитражник и хочу сотрудничать с топовыми мировыми брендами.</p>
          <button class="btn">
            <span>веб-мастерам</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M10.553 19.7709C10.5532 19.7706 10.5535 19.7704 10.5538 19.7702L14.6163 15.688C14.9206 15.3821 14.9195 14.8875 14.6136 14.5831C14.3078 14.2787 13.8131 14.2799 13.5088 14.5857L10.7813 17.3265L10.7813 0.78125C10.7813 0.349765 10.4315 -1.92866e-07 10 -2.11727e-07C9.56852 -2.30588e-07 9.21875 0.349765 9.21875 0.78125L9.21875 17.3264L6.49125 14.5857C6.18688 14.2799 5.69223 14.2788 5.38641 14.5831C5.08051 14.8875 5.07945 15.3822 5.38375 15.688L9.44625 19.7702C9.44649 19.7704 9.44676 19.7706 9.44699 19.7709C9.75238 20.0769 10.2486 20.0759 10.553 19.7709Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="20" height="20" fill="white" transform="translate(20) rotate(90)"/>
              </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div class="introduction__card-item">
          <p class="paragraph">Я владелец компании или маркетолог и хочу привлечь новых клиентов и увеличить продажи с помощью<br> онлайн-рекламы.</p>
          <button class="btn btn-secondary">
            <span>рекламодателю</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M19.7709 9.44699C19.7706 9.44676 19.7704 9.44648 19.7702 9.44625L15.688 5.38375C15.3821 5.07941 14.8875 5.08054 14.5831 5.3864C14.2787 5.69222 14.2799 6.18687 14.5857 6.49125L17.3265 9.21875H0.78125C0.349766 9.21875 0 9.56851 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812H17.3264L14.5857 13.5087C14.2799 13.8131 14.2788 14.3078 14.5831 14.6136C14.8875 14.9195 15.3822 14.9205 15.688 14.6162L19.7702 10.5537C19.7704 10.5535 19.7706 10.5532 19.7709 10.553C20.0769 10.2476 20.0759 9.75137 19.7709 9.44699Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      option : {
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 4,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }
    }
  }
}
</script>

<style lang="scss">
  .introduction {
    background: url('../assets/introduction-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 200px;
    .heading_xl {
      color: #fff;
      text-align: center;
    }
    #tsparticles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    &__data {
      display: flex;
      margin-top: 100px;
      &-item {
        padding: 50px;
      }
      .heading{
        font-family: Roboto;
        font-weight: 800;
        font-size: 40px;
        line-height: 49px;
        text-align: center;
        color: #FFFFFF;
      }
      .paragraph {
        text-align: center;
        color: #FFFFFF;
      }
      .r-border {
        border-right: 2px solid rgba(255, 255, 255, 0.25);
      }
    }
    &__card {
      position: relative;
      background: #FFFFFF;
      box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      display: flex;
      z-index: 10;
      &-item {
        padding: 58px 50px;
        width: 50%;
      }
      .paragraph {
        text-align: center;
      }
      .btn {
        background: #2E9ADB;
        box-shadow: 0px 10px 20px rgba(78, 170, 224, 0.35);
        border-radius: 40px;
        font-family: Roboto;
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 28px 0;
        padding-left: 85px;
        width: 354px;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0 auto;
        margin-top: 32px;
        &-secondary {
          background: #55B570;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .introduction {
      max-width: 1200px;
      .btn {
        width: 300px;
        padding-left: 55px;
      }
      &__data-item {
        padding: 20px 50px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .introduction {
      max-width: 992px;
      &__data {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .r-border_first {
          border-bottom: 2px solid rgba(255, 255, 255, 0.25);
        }
        .r-border_second {
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.25);
        }
      }
      &__card {
        flex-direction: column;
        &-item {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .introduction {
      padding: 100px 0;
      max-width: 768px;
      #tsparticles {
        height: 900px;
      }
      &__card {
        width: 450px;
        margin: auto;
        .btn {
          width: 270px;
          padding-left: 40px;
        }
      }
    }
  }
  @media screen and (max-width:576px) {
    .introduction {
      max-width: 576px;
      .heading_xl {
        font-weight: 900;
        font-size: 40px;
        line-height: 40px;
      }
      &__data {
        .heading {
          font-size: 30px;
        }
      }
      &__card {
        width: 375px;
        .paragraph {
          font-size: 13px;
        }
        .btn {
          width: 256px;
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width:375px) {
    .introduction {
      max-width: 375px;
      #tsparticles {
        height: 600px;
      }
      &__data {
        &-item {
          padding: 20px 25px;
        }
      }
      &__card {
        width: 350px;
      }
    }
  }
</style>