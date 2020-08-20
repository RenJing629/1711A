import React, { useState } from 'react';
import { Layout, Menu } from 'antd'
import menus from '../../router/menu';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import useStore from '../../context/useStore'


const { Sider } = Layout;
const { SubMenu } = Menu

const MyMenu: React.FC = () => {
  let [openKey, setOpenKey] = useState<string>('')
  let [selectKey, setSelectKey] = useState<string>('')

  let {util} = useStore();
  
  let location = useLocation();
  let index = menus.findIndex(item=>{
    return item.children.some(value=>value.path === location.pathname)
  })+'';
  if (index !== openKey){
    setOpenKey(index);
  }
  if (location.pathname !== selectKey){
    setSelectKey(location.pathname);
  }
  console.log('location...', location, openKey);

  return <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      theme="dark"
      // defaultSelectedKeys={[selectKey]}
      selectedKeys={[selectKey]}
      defaultOpenKeys={[openKey]}
      // openKeys={[openKey]}
      style={{ height: '100%', borderRight: 0 }}
    >{
        menus.map((item, index) => {
          return <SubMenu key={index} icon={<item.meta.icon/>} title={item.name}>{
            item.children.map((value, key) => {
              return value.meta.show && <Menu.Item key={`${value.path}`} onClick={()=>util.addTag({name:value.name, path: value.path})}>
                <Link to={value.path}> {value.name}</Link>
              </Menu.Item>
            })
          }
          </SubMenu>
        })
      }
    </Menu>
  </Sider>
}

export default MyMenu;