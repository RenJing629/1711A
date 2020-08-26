import { action, observable } from "mobx";

class Lang{
    @observable
    local = 'zh'

    @action 
    chanegLocale(local: string){
        this.local = local;
    }
}

export default Lang;