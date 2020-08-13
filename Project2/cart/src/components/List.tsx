import React from 'react'
import { IItem } from '../util/interface';

interface IProps {
    list: Array<IItem>
}
class List extends React.Component<IProps>{
    render() {
        return <div className="goods">{
            this.props.list.map(item => {
                return <li key={item.id}>
                    <input type="checkbox" checked={item.checked} />
                    <img src={item.img} alt="" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                        <p>
                            <span>单价：{item.price}</span>
                        </p>
                    </div>
                    <div>
                        <button>+</button>
                        <span>{item.num}</span>
                        <button>-</button>
                    </div>
                </li>
            })
        }</div>;
    }
}


export default List;