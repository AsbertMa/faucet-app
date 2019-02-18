import '../static/css/ps2.css';
import 'nes.css/css/nes.css';
import Vue from 'vue';
import App from './App.vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import VueAnalytics from 'vue-analytics';

Vue.use(VueReCaptcha, {
  siteKey: '6LerrJEUAAAAAOw6G07D1CZ87gRmrEmXO9m-BYAX',
  loaderOptions: {
    useRecaptchaNet: true,
  },
});
Vue.use(VueAnalytics, {
  id: 'UA-132391998-2',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
  },
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
