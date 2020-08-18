import { action, observable } from "mobx";
import { getConsumerList, getApiAuthority, getIdentifyList, getViewAuthority, getIdentityApiAuthorityRelation, getIdentityViewAuthorityRelation } from '../service/consumer';

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
        let result = await getConsumerList();
        if (result.data){
            this.consumerList = result.data;
        }
    }

    @action
    async getIdentifyListAction(){
        let result = await getIdentifyList();
        if (result.data){
            this.identifyList = result.data;
        }
    }

    @action
    async getApiAuthorityAction(){
        let result = await getApiAuthority();
        if (result.data){
            this.apiAuthorityList = result.data;
        }
    }
   
    @action
    async getViewAuthorityAction(){
        let result = await getViewAuthority();
        if (result.data){
            this.viewAuthorityList = result.data;
        }
    }
    @action
    async getIdentityApiAuthorityRelationAction(){
        let result = await getIdentityApiAuthorityRelation();
        if (result.data){
            this.identityApiAuthorityRelation = result.data;
        }
    }
    @action
    async getIdentityViewAuthorityRelationAction(){
        let result = await getIdentityViewAuthorityRelation();
        if (result.data){
            this.identityViewAuthorityRelation = result.data;
        }
    }
}

export default Consumer;