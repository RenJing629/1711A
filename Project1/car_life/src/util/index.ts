// 防抖
export function debounce(func: (...reset: any) => any, ms: number= 150) {
    let timer = 0;
    return (...args: any) => {
        window.clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, ms)
    }
}



// 节流
export function throttle(func: (...reset: any) => any, ms: number= 150) {
    let start = +new Date();
    return  (...args: any) => {
        const now = +new Date();
        if (now - start > ms) {
            func(...args);
            start = now;
        }
    }
}
