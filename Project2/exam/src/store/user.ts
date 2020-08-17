import {observable, action} from 'mobx'
import {login} from '../service'
import {setToken, removeToken} from '../utils'
import {useHistory} from 'react-router-dom'

export default class User{
    @observable
    isLogin:boolean = false;

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
}
