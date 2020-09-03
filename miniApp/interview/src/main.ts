import Vue from 'vue'
import App from './App.vue'

// 挂在vuex
import store from '@/store/index'

Vue.prototype.$store = store
Vue.config.productionTip = false

new App().$mount()
