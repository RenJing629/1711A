import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// 重置浏览器样式
import '@/scss/_reset.scss';
// 引入composition-api
import CompositionApi from '@vue/composition-api'
// 引入vant
import Vant, { Toast } from 'vant';
import 'vant/lib/index.css';
// loading组件
import loading from '@/components/loading.ts'
// 在原型链上挂载
Vue.prototype.$loading = loading;

Vue.use(Vant);
Vue.use(CompositionApi)
Vue.config.productionTip = false;

// 错误处理
Vue.config.errorHandler = function(err) {
  console.log('err...', err);
  Toast(err.toString())
}
// 警告处理
Vue.config.warnHandler = function(err) {
  console.log('warn...', err);
  Toast(err.toString())
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
