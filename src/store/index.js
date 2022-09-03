import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerAdIsShow:true,
    productNum:JSON.parse(localStorage.getItem("productId"))?JSON.parse(localStorage.getItem("productId")):[]
  },
  getters: {
    productNum(state){
      let num = 0;
      state.productNum.forEach(item=>{
        num += item.num
      })
      return num
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
