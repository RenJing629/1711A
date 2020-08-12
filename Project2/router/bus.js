class Bus{
    store={}
    on(event, func){
        if (this.store[event]){
            this.store[event].push(func);
        }else{
            this.store[event]= [func];
        }
    }
    emit(event, payload){
        if (this.store[event]){
            this.store[event].forEach(item=>{
                item(payload)
            })
        }
    }
    off(){

    }
    once(){

    }
}

window.bus = new Bus();