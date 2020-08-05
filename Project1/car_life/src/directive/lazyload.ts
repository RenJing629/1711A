import Vue from 'vue';
import {throttle} from '@/util/index'

function isIntoView(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return !(rect.top > window.innerHeight || rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth)
}
function isLoad(el: HTMLImageElement) {
    return el.src === el.dataset.src;
}
function getAllImage(el: string) {
    return Array.from(document.getElementsByClassName(el)[0].querySelectorAll('img'));
}
function scollEvent(el: string): any {
    console.log('scroll event')
    const imgs = getAllImage(el);
    imgs.forEach((item) => {
        if (isIntoView(item)) {
            if (!isLoad(item as HTMLImageElement)) {
                (item as HTMLImageElement).src = item.dataset.src as string;
            }
        }
    })
}
const scrollEventWrap = throttle(scollEvent);
// 注册一个全局自定义指令 `v-focus`
Vue.directive('lazy', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted(el, {value}, Vnode) {
        // 判断当前元素是否出现在视口中
        if (isIntoView(el)) {
            if (!isLoad(el as HTMLImageElement)) {
                (el as HTMLImageElement).src = el.dataset.src as string;
            }
        }
        const wrap = document.getElementsByClassName(value)[0];

        (wrap as HTMLElement).onscroll =  scrollEventWrap.bind(null, value); ;
    },
    update(el, {value}, Vnode) {
        // 聚焦元素
        if (isIntoView(el)) {
            if (!isLoad(el as HTMLImageElement)) {
                (el as HTMLImageElement).src = el.dataset.src as string;
            }
        }
    },
})
