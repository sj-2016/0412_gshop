import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
}from '../api'
//import {reqShopInfo, reqShopRatings,reqShopGoods} from "../api/index";
export default {
  //异步获取当前地址信息
  async getAddress ({commit,state}){
    //发异步ajax请求
    const {latitude,longitude} = state;
    const geohash = `${latitude},${longitude}`;
    const result = await reqAddress(geohash);
    // 有了结果提交mutation
    const address = result.data;
    commit(RECEIVE_ADDRESS,{address})
  },
  // 异步获取食品分类列表
  async getCategorys ({commit}) {
    // 发异步ajax请求
    const result = await reqCategorys();
    // 有了结果提交mutation
    const categorys = result.data;
    commit(RECEIVE_CATEGORYS, {categorys})
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state;
    const result = await reqShops(longitude, latitude);
    // 有了结果提交mutation
    const shops = result.data;
    commit(RECEIVE_SHOPS, {shops})
  },
//保存user的同步action
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  //异步获取用户信息
  async getUser ({commit}){
    const result = await reqUser();
    if(result.code === 0){
      const user = result.data;
      commit(RECEIVE_USER,{user})
    }
  },
  //异步退出
  async logout({commit}){
    const result = await reqLogout();
    if(result.code===0){
      commit(RESET_USER)
    }
  },
  //异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo();
    if(result.code===0){
      const info = result.data;
      info.score = 3.5;
      commit(RECEIVE_INFO,{info})
    }
  },
  //异步获取商家评价列表
  async getShopRatings({commit}){
    const result = await reqShopRatings();
    if(result.code===0){
      const ratings = result.data;
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  //异步获取商家商品列表
  async getShopGoods({commit},cb){
    const result = await reqShopGoods();
    if(result.code===0){
      const goods = result.data;
      commit(RECEIVE_GOODS,{goods});
      //更新状态之后调用
      cb&&cb();
    }
  },
}
