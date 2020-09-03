import {login} from '@/services'
import { ActionContext } from 'vuex'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async login(context: ActionContext<any, any>, code: string){
        let result = await login(code);
        console.log('result...', result)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}