import React, {useState, useEffect} from 'react'
import Footer from './components/Footer'
import List from './components/List'
import { IItem } from './util/interface';

const goods = require('./mock/index.json');

export default function (){
  let [list, setList] = useState<IItem []>()

  // 获取数据
  useEffect(()=>{
    // fetch('./mock/index.json')
    // .then(res=>res.json())
    // .then(result=>console.log);
    setList(goods);
  }, []);



  return <div>
    <List list={list}></List>
    <Footer></Footer>
  </div>
}