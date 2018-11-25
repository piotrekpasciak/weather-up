import Vue from 'vue'
import Vuex from 'vuex'

import background from '@/store/background'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    background
  }
})
