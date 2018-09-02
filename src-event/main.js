import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import HeaderTop from './components/HeaderTop/HeaderTop.vue'

Vue.component('HeaderTop',HeaderTop);

new Vue ({
  el:'#app',
  render:h => h(App),
  router,//配置路由器，所有组件都多了 --》￥router/$route
  store//配置vuex的store --> 所有组建对象都多了一个￥store属性
});
