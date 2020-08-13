import React, {useState, useEffect, SyntheticEvent} from 'react'
import Footer from './components/Footer'
import List from './components/List'
import useStore from './context/useStore'
import {useObserver} from 'mobx-react-lite'

export default function (){

  let {goods} = useStore();
  console.log('goods...', goods);

  useEffect(()=>{
    goods.getList();
  }, []);

  return useObserver(()=><div>
    {/* <List list={goods.list} handleChange={goods.handleChange} handleNumChange={goods.handleNumChange}></List> */}
    <List></List>
    <Footer></Footer>
  </div>)
}