import React from 'react'
import { IItem } from '../util/interface';

interface IProps {
    list: Array<IItem>,
    selectAll: (e: React.SyntheticEvent)=>void
}
function Footer(props: IProps) {
    return <footer>
        <div>
            <input id="all" type="checkbox" checked={props.list.every(item=>item.checked)} onChange={props.selectAll}/>
            <label htmlFor="all">全选</label>
        </div>
        <div>
            <span>总价：{props.list.reduce((pre, item) => pre += item.checked ? item.num * item.price : 0, 0)}</span>
            <span>总量：{props.list.reduce((pre, item) => pre += item.checked ? item.num : 0, 0)}</span>
        </div>
        <button>支付</button>
    </footer>
}

export default Footer;