import React from 'react'
import menus from './menu'
import { IMenuItem, IRouterItem } from '../utils/interface';

// 引入一级路由
import LoginPage from '../views/login/Login';
import MainPage from '../views/main/Main';
import Page403 from '../views/forbidden/Forbidden';
import Page404 from '../views/notFound/NotFound';

// 引入store
import store from '../store'

console.log('store...', store.user)

function geneRouter(menus: IMenuItem[]){
    // 判断有没有获取用户已拥有的权限
    if (store.user.userViewAuthority.length){
        menus = store.user.userViewAuthority;
    }
    let routes: IRouterItem[] = [];
    menus.forEach(item=>{
        item.children.forEach(value=>value.component = value.meta.component)
        routes = routes.concat(item.children as unknown as IRouterItem[]);
    })
    // 获取用户未授权的权限
    if (store.user.forbiddenViewAuthority.length){
        store.user.forbiddenViewAuthority.forEach((item:any)=>{
            routes.push({path: item.path, redirect: '/403'});
        })
    }
    return routes;
}
function getFristChild(menus: IMenuItem[]){
    return menus[0].children[0].path;
}
const routerConfig =  {
    routes: [{
        path: '/login',
        component: LoginPage
    },{
        path: '/main',
        component: MainPage,
        children: []
    },{
        path: '/',
        redirect: getFristChild(menus)
    },{
        path: '/403',
        component: Page403
    }, {
        path: '*',
        component: Page404
    }]
}

export default routerConfig;