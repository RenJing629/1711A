import React from 'react';
import { Layout, Tag } from 'antd'
import useStore from '../../context/useStore'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


const { Header } = Layout;

const ShowConsumer: React.FC = () => {
  let { util } = useStore();
  let location = useLocation();

  return <section>
    <section>{
      util.tags.map((item, index) => {
        return <Tag color={location.pathname === item.path ? 'red' : ''} closable key={item.path} onClose={() => util.removeTag(item)}>
          <NavLink to={item.path}>{item.name}</NavLink>
        </Tag>
      })
    }</section>
  </section>
}

export default ShowConsumer;