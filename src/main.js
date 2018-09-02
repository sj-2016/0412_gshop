/*
webpack打包：从入口文件开始，找所有相关的文件
* 入口文件：
* */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import './mock/mockServer'

//注册全局组件标签
Vue.component('HeaderTop',HeaderTop);
Vue.component(Button.name,Button);

new Vue ({
  el:'#app',
  render:h => h(App),
  router,//配置路由器，所有组件都多了 --》￥router/$route
  store//配置vuex的store --> 所有组建对象都多了一个￥store属性
});
