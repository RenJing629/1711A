import loading from '@/components/loading.vue';
import Vue from 'vue'

const LoadingConstructor = Vue.extend(loading);
const instance = new LoadingConstructor({
    el: document.createElement('div')
});
document.body.appendChild(instance.$el);

console.log('loading...', loading, LoadingConstructor, instance);

// function showLoading() {
//     const instance = new LoadingConstructor({
//         el: document.createElement('div')
//     });
//     document.body.appendChild(instance.$el);
// }
export default instance as {[key: string]: any};
