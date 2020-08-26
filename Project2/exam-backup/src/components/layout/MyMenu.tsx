import React, { useState } from 'react';
import { Layout, Menu } from 'antd'
import menus from '../../router/menu';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import useStore from '../../context/useStore'
import { useObserver } from 'mobx-react-lite';
import {injectIntl} from 'react-intl'


const { Sider } = Layout;
const { SubMenu } = Menu

const MyMenu: React.FC<any> = (props) => {
  let {formatMessage} = props.intl;

  let [openKey, setOpenKey] = useState<string>('')
  let [selectKey, setSelectKey] = useState<string>('')

  let {util, user} = useStore();
  
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

  function getMyMenu(){
    return user.userViewAuthority.length? user.userViewAuthority: menus;
  }

  return useObserver(()=><Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      theme="dark"
      // defaultSelectedKeys={[selectKey]}
      selectedKeys={[selectKey]}
      defaultOpenKeys={[openKey]}
      // openKeys={[openKey]}
      style={{ height: '100%', borderRight: 0 }}
    >{
      getMyMenu().map((item:any, index:number) => {
          return <SubMenu key={index} icon={<item.meta.icon/>} title={formatMessage({id: item.name, defaultMessage: item.name})}>{
            item.children.map((value:any) => {
              return value.meta.show && <Menu.Item key={`${value.path}`} onClick={()=>util.addTag({name:value.name, path: value.path})}>
                <Link to={value.path}>{formatMessage({id: value.name, defaultMessage: value.name})}</Link>
              </Menu.Item>
            })
          }
          </SubMenu>
        })
      }
    </Menu>
  </Sider>)
}

export default injectIntl(MyMenu);