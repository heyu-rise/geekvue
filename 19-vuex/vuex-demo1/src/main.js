import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    increment2(state, num) {
      state.count = state.count + num
    }
  },
  actions: {
    increment({state}) {
      setTimeout(() => {
        state.count++
      }, 1000);
    }
  },
  getters: {
    doubleIncrement(state){
      return state.count * 2
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
