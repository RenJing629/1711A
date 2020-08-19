import {observable, action} from 'mobx'
import {login, getUserInfo} from '../service'
import {setToken, removeToken} from '../utils'
import {useHistory} from 'react-router-dom'

export default class User{
    @observable
    isLogin:boolean = false;
    @observable
    userInfo:any = {};
    isGetUserInfo = false;

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
}
