import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import VueMatchHeights from 'vue-match-heights';
import moment from 'moment';
import "./global-style.css";


Vue.prototype.moment = moment;

Vue.use(VueMatchHeights);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
