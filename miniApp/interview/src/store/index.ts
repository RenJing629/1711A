import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'

Vue.use(Vuex)

// 引入子模块
import user from './modules/user'


export default new Vuex.Store({
    modules: {
        user
    },
    plugins: [Logger()]
})