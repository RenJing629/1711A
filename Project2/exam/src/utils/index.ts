import Cookie from 'js-cookie'

const key = 'authorization'
export let getToken = ()=>{
    return Cookie.get(key);
}

export let setToken = (value: string)=>{
    Cookie.set(key, value, {expires: new Date(+new Date() + 5*60*60*1000)});
}

export let removeToken = ()=>{
    Cookie.remove(key);
}