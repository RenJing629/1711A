import React from 'react';
import { Layout, Menu } from 'antd'
import menus from '../../router/menu';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu

const ShowConsumer: React.FC = () => {
  return <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={['0_0']}
      defaultOpenKeys={['0']}
      style={{ height: '100%', borderRight: 0 }}
    >{
        menus.map((item, index) => {
          return <SubMenu key={index} icon={<item.meta.icon/>} title={item.name}>{
            item.children.map((value, key) => {
              return value.meta.show && <Menu.Item key={`${index}_${key}`}>
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

export default ShowConsumer;