import React from 'react'
import menus from './menu'
import { IMenuItem, IRouterItem } from '../utils/interface';


// 引入一级路由
import LoginPage from '../views/login/Login';
import MainPage from '../views/main/Main';
// import Page403 from '../views//403/403';
// import Page404 from '../views/404/404';

// 引入二级菜单

// const LoginPage = React.lazy(() => import('../views/login/LoginPage'));
// const MainPage = React.lazy(() => import('../views/main/MainPage'));
// const Page403 = React.lazy(() => import('../views//403/403'));
// const Page404 = React.lazy(() => import('../views/404/404'));

// export default (myViewAuthority: IRouterItem []) => {
//     // // 格式化菜单到路由
//     // let formatRoutes: any[] = [];
//     // myViewAuthority.forEach((item:any) => {
//     //     formatRoutes = [...formatRoutes, ...item.children];
//     // })
//     return {
//         routes: [{
//             path: '/login',
//             component: LoginPage,
//         // }, {
//         //     path: '/main',
//         //     component: MainPage,
//         //     children: formatRoutes
//         }, {
//             path: '/403',
//             component: Page403
//         }, {
//             path: '/404',
//             component: Page404
//         }, {
//             path: '*',
//             redirect: '/main/addQuestion'
//         }]
//     }

// }

function geneRouter(menus: IMenuItem[]){
    let routes: IRouterItem[] = [];
    menus.forEach(item=>{
        item.children.forEach(value=>value.component = value.meta.component)
        routes = routes.concat(item.children as IRouterItem[]);
    })
    return routes;
}
const routerConfig =  {
    routes: [{
        path: '/login',
        component: LoginPage
    },{
        path: '/main',
        component: MainPage,
        children: geneRouter(menus)
    }]
}

export default routerConfig;