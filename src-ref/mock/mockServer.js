/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// mock goods数据的接口
Mock.mock('/goods',{code:0,data:data.goods});
// mock ratings数据的接口
Mock.mock('/ratings',{code:0,data:data.ratings});
// mock info数据的接口
Mock.mock('/info',{code:0,data:data.info});
