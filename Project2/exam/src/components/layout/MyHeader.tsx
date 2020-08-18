import React from 'react';
import { Layout, Dropdown, Menu } from 'antd'
import styles from './MyHeader.module.scss'
import useStore from '../../context/useStore'


const { Header } = Layout;

const MyHeader: React.FC = () => {
    let {user} = useStore();

    let logout = ()=>{
        user.logoutAction()
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    个人中心
            </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    我的班级
            </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                设置
          </Menu.Item>
            <Menu.Item key="3">
                <span onClick={logout}>退出登陆</span>
          </Menu.Item>
        </Menu>
    );

    return <Header className="header">
        <img className={styles.img} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        <Dropdown overlay={menu}>
            <div>
                <img className={styles.avatar} src="" alt="" />
                <span>chenmanjie</span>
            </div> 
        </Dropdown>
    </Header >
}

export default MyHeader;