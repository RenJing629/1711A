import {login} from '@/services'
import { ActionContext } from 'vuex'

const state = {
    isLogin: false,
    openid: ''
}

const getters = {

}

const mutations = {
    updateLogin(state: any, payload: any){
        state.isLogin = payload.isLogin;
        state.openid = payload.openid;
    }
}

const actions = {
    async login({commit}: ActionContext<any, any>, code: string){
        let result = await login(code);
        if (result.data){
            commit('updateLogin', {isLogin: true, openid: result.data.openid});
        }
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}