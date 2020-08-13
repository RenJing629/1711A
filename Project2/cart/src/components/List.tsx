import React from 'react'
import { IItem } from '../util/interface';

interface IProps {
    list: Array<IItem>,
    handleChange: (e: React.SyntheticEvent, id: number)=>void,
    handleNumChange: (type: string, id:number)=>void
}
class List extends React.Component<IProps>{
    render() {
        return <div className="goods">{
            this.props.list.map(item => {
                return <li key={item.id}>
                    <input type="checkbox" checked={item.checked} onChange={e=>this.props.handleChange(e, item.id)}/>
                    <img src={item.img} alt="" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                        <p>
                            <span>单价：{item.price}</span>
                        </p>
                    </div>
                    <div>
                        <button onClick={()=>this.props.handleNumChange('+', item.id)}>+</button>
                        <span>{item.num}</span>
                        <button onClick={()=>this.props.handleNumChange('-', item.id)}>-</button>
                    </div>
                </li>
            })
        }</div>;
    }
}


export default List;