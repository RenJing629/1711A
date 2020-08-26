import { action, observable } from "mobx";
import { getConsumerList, getApiAuthority, getIdentifyList, getViewAuthority, getIdentityApiAuthorityRelation, getIdentityViewAuthorityRelation, addConsumer } from '../service/consumer';

class Consumer{
    [key: string]: any

    @observable
    consumerList = [];
    @observable
    identifyList = [];
    @observable
    apiAuthorityList = [];
    @observable
    viewAuthorityList = [];
    @observable
    identityApiAuthorityRelation = [];
    @observable
    identityViewAuthorityRelation = [];

    @action
    async getConsumerListAction(){
        if (this.consumerList.length){
            return;
        }
        let result = await getConsumerList();
        if (result.data){
            this.consumerList = result.data.data;
        }
    }

    @action
    async getIdentifyListAction(){
        if (this.identifyList.length){
            return;
        }
        let result = await getIdentifyList();
        if (result.data){
            this.identifyList = result.data.data;
        }
    }

    @action
    async getApiAuthorityAction(){
        if (this.apiAuthorityList.length){
            return;
        }
        let result = await getApiAuthority();
        if (result.data){
            this.apiAuthorityList = result.data.data;
        }
    }
   
    @action
    async getViewAuthorityAction(){
        if (this.viewAuthorityList.length){
            return;
        }
        let result = await getViewAuthority();
        if (result.data){
            this.viewAuthorityList = result.data.data;
        }
    }
    @action
    async getIdentityApiAuthorityRelationAction(){
        let result = await getIdentityApiAuthorityRelation();
        if (result.data){
            this.identityApiAuthorityRelation = result.data.data;
        }
    }
    @action
    async getIdentityViewAuthorityRelationAction(){
        let result = await getIdentityViewAuthorityRelation();
        if (result.data){
            this.identityViewAuthorityRelation = result.data.data;
        }
    }

    @action 
    async addConsumerAction(values: {user_name:string, user_pwd: string, identity_id: string}){
        let result = await addConsumer(values.user_name, values.user_pwd, values.identity_id);
        return result;
    }
}

export default Consumer;