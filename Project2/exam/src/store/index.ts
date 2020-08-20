// 引入数据模块
import User from './user';
import Consumer from './consumer';
import Util from './utils';


export default {
    user: new User(),
    consumer: new Consumer(),
    util: new Util()
}