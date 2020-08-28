import { action, observable } from "mobx";

class Lang{
    @observable
    local = 'en'

    @action 
    chanegLocale(local: string){
        this.local = local;
    }
}

export default Lang;