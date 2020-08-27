import React from 'react'
import menus from './menu'
import { IMenuItem } from '../utils/interface';
// 引入一级路由
import LoginPage from '../views/login/Login';
import MainPage from '../views/main/Main';
import Page403 from '../views/forbidden/Forbidden';
import Page404 from '../views/notFound/NotFound';

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