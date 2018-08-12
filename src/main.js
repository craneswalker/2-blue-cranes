// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMq from 'vue-mq'
import AOS from 'aos'
import'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    mobile: 700,
    tablet: 1000,
    desktop: Infinity,
  }
})

new Vue({
  created(){
    AOS.init();
  },
  el: '#app',
  router,
  VueMq,
  components: { App },
  template: '<App/>'
})
