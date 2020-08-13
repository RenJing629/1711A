import React, {useState, useEffect, SyntheticEvent} from 'react'
import Footer from './components/Footer'
import List from './components/List'
import { IItem } from './util/interface';
import axios from 'axios'


export default function (){
  let [list, setList] = useState<IItem []>([])

  // 获取数据
  useEffect(()=>{
    axios.get('/api/list').then(res=>{
      setList(res.data.list);
    })
  }, []);

  // 处理选中和非选中
  function handleChange(e: React.SyntheticEvent, id: number){
    let newList = [...list];
    let index = newList.findIndex(item=>item.id===id);
    newList[index].checked = (e.target as HTMLInputElement).checked;
    setList(newList);
  }

  // 处理商品数量变化
  function handleNumChange(type: string, id:number){
    let newList = [...list];
    let index = newList.findIndex(item=>item.id===id);
    type === '+'?newList[index].num++: newList[index].num>0? newList[index].num--: newList[index].num = 0;
    setList(newList);
  }

  // 处理全选逻辑
  function selectAll(e: SyntheticEvent){
    let newList = [...list];
    let checked = (e.target as HTMLInputElement).checked;
    newList.forEach(item=>item.checked=checked);
    setList(newList);
  }

  return <div>
    <List list={list} handleChange={handleChange} handleNumChange={handleNumChange}></List>
    <Footer list={list} selectAll={selectAll}></Footer>
  </div>
}