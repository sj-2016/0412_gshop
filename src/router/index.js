/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter);
export default new VueRouter ({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
})
