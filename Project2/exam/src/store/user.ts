import {observable, action} from 'mobx'
import {login, getUserInfo} from '../service'
import {setToken, removeToken} from '../utils'
import {useHistory} from 'react-router-dom'
import { getUserViewAuthority, updateUserInfo } from '../service/user';
import menus from '../router/menu';

export default class User{
    @observable
    isLogin:boolean = false;
    @observable
    userInfo:any = {};
    @observable
    userViewAuthority: any = [];    // 用户拥有的视图权限
    @observable
    forbiddenViewAuthority: any = [];   // 未授权的视图权限

    isGetUserInfo = false;
    isGetViewAuthority = false;

    @action 
    async loginAction(user_name: string, user_pwd: string){
        let result = await login(user_name, user_pwd);
        if (result.data){
            setToken(result.data.token)
            this.isLogin = true
            return true;
        }
        return false;
    }

    @action 
    async logoutAction(){
        let history = useHistory();
        removeToken();
        this.isLogin = false;
        history.replace('/user/login');
    }

    @action 
    async getUserInfoAction(){
        if (this.isGetUserInfo){
            return;
        }
        this.isGetUserInfo = true;
        let result = await getUserInfo();
        if (result.data){
            this.userInfo = result.data.data;
            this.isGetUserInfo = false;
        }
    }

    @action 
    async updateUserInfoAction(data:any){
        let result = await updateUserInfo(data);
        console.log('result...', result);
    }

    @action 
    async getUserViewAuthorityAction(){
        if (this.isGetViewAuthority){
            return;
        }
        this.isGetViewAuthority = true;
        let result = await getUserViewAuthority();


        if (result.data){
            // this.userViewAuthority = result.data.data;
            this.isGetViewAuthority = false;
            // 筛选用户拥有的视图权限和未授权的视图权限
            // 1. 拥有的视图权限渲染左边导航菜单
            // 2. 未授权的试图权限重定向到403页面
            var myMenu:any[] = [], forbiddenView:any [] = [];
            menus.forEach(item=>{
                var children:any[] = [];
                item.children.forEach(value=>{
                    if (result.data.data.some((view:any)=>{
                        return view.view_id === value.meta.view_id;
                    })){
                        children.push(value);
                    }else{
                        forbiddenView.push(value)
                    }
                })
                if (children.length){
                    myMenu.push({...item, children});
                }
            })
            this.userViewAuthority = myMenu;
            this.forbiddenViewAuthority = forbiddenView;
        }
    }
}
