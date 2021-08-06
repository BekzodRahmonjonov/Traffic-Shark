import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
import Particles from "particles.vue";

// this adds the particles plugin to Vue.js
Vue.use(Particles);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
