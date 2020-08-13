import React from 'react'
import { IItem } from '../util/interface';
import useStore from '../context/useStore'
import {useObserver} from 'mobx-react-lite'

interface IProps {
    list?: Array<IItem>,
    selectAll?: (e: React.SyntheticEvent)=>void
}
function Footer(props: IProps) {
    let {goods}: {goods: {list: IItem[], selectAll: (e: React.SyntheticEvent)=>void}} = useStore();

    return useObserver(()=><footer>
        <div>
            <input id="all" type="checkbox" checked={goods.list.every(item=>item.checked)} onChange={goods.selectAll}/>
            <label htmlFor="all">全选</label>
        </div>
        <div>
            <span>总价：{goods.list.reduce((pre, item) => pre += item.checked ? item.num * item.price : 0, 0)}</span>
            <span>总量：{goods.list.reduce((pre, item) => pre += item.checked ? item.num : 0, 0)}</span>
        </div>
        <button>支付</button>
    </footer>)
}

export default Footer;