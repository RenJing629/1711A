// import React from 'react'
// import { IItem } from '../util/interface';

// interface IProps {
//     list: Array<IItem>,
//     handleChange: (e: React.SyntheticEvent, id: number)=>void,
//     handleNumChange: (type: string, id:number)=>void
// }
// class List extends React.Component<IProps>{
//     render() {
//         return <div className="goods">{
//             this.props.list.map(item => {
//                 return <li key={item.id}>
//                     <input type="checkbox" checked={item.checked} onChange={e=>this.props.handleChange(e, item.id)}/>
//                     <img src={item.img} alt="" />
//                     <div>
//                         <p>{item.name}</p>
//                         <p>{item.desc}</p>
//                         <p>
//                             <span>单价：{item.price}</span>
//                         </p>
//                     </div>
//                     <div>
//                         <button onClick={()=>this.props.handleNumChange('+', item.id)}>+</button>
//                         <span>{item.num}</span>
//                         <button onClick={()=>this.props.handleNumChange('-', item.id)}>-</button>
//                     </div>
//                 </li>
//             })
//         }</div>;
//     }
// }


// export default List;


// 函数式组件List
import React from 'react'
import useStore from '../context/useStore'
import {useObserver} from 'mobx-react-lite'

export default function List(){
    let {goods} = useStore();

    return useObserver(()=><div className="goods">{
        goods.list.map(item => {
            return <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={e=>goods.handleChange(e, item.id)}/>
                <img src={item.img} alt="" />
                <div>
                    <p>{item.name}</p>
                    <p>{item.desc}</p>
                    <p>
                        <span>单价：{item.price}</span>
                    </p>
                </div>
                <div>
                    <button onClick={()=>goods.handleNumChange('+', item.id)}>+</button>
                    <span>{item.num}</span>
                    <button onClick={()=>goods.handleNumChange('-', item.id)}>-</button>
                </div>
            </li>
        })
    }</div>);
}