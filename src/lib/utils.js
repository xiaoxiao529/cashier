/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
const STORAGE_KEY = 'pos-store'
let local = {
  save (value) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))  //value是一个对象，由于存储只能是字符串的值，需要将JSON转化成字符串的json形式，使用JSON.stringify方法
  },
  fetch () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) 
  },
  delete(){
  	localStorage.removeItem(STORAGE_KEY)
  }
}

export default {
  install: function (vm) {
    vm.prototype.$local = local
  }
}
