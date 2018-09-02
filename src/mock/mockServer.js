/*
使用mockjs提供mock数据接口
Mock.mock(rurl?,rtype?,{code:0,data:data.goods});
 */
import Mock from 'mockjs'
import data from './data.json'  //自动解析为js的对象{{goods}，{ratings}，{info}}

// mock goods数据的接口
Mock.mock('/goods',{code:0,data:data.goods});
// mock ratings数据的接口
Mock.mock('/ratings',{code:0,data:data.ratings});
// mock info数据的接口
Mock.mock('/info',{code:0,data:data.info});
//当前模块不需要向外暴露任何数据（因为他是独立的，没有进入打包），
// 只需要被加载运行一次，后面就也可以被读取
//放到入口文件即可
/*
json对象里面是多个key--value
json数组里是多个value
key是字符串（必须用“”），value是string/number/boolean/arry/object
*/
