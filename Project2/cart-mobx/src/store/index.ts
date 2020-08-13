import { action, observable } from 'mobx'
import { IItem } from '../util/interface';
import axios from 'axios';


class Goods {
    @observable
    list: IItem[] = []

    
    // 获取数据
    @action
    getList = ()=>{
        axios.get('/api/list').then(res => {
            this.list = res.data.list;
        })
    }

    // 处理选中和非选中
    @action
    handleChange = (e: React.SyntheticEvent, id: number)=>{
        let newList = [...this.list];
        let index = newList.findIndex(item => item.id === id);
        newList[index].checked = (e.target as HTMLInputElement).checked;
        this.list = newList
    }

    // 处理商品数量变化
    @action
    handleNumChange = (type: string, id: number)=>{
        let newList = [...this.list];
        let index = newList.findIndex(item => item.id === id);
        type === '+' ? newList[index].num++ : newList[index].num > 0 ? newList[index].num-- : newList[index].num = 0;
        this.list = newList
    }

    // 处理全选逻辑
    @action
    selectAll = (e: React.SyntheticEvent)=>{
        let newList = [...this.list];
        let checked = (e.target as HTMLInputElement).checked;
        newList.forEach(item => item.checked = checked);
        this.list = newList
    }

}


export default {
    goods: new Goods()
}