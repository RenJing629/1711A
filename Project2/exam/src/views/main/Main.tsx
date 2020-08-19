import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import {Route} from 'react-router-dom'
// 引入自定义组件
import MyHeader from '../../components/layout/MyHeader'
import MyMenu from '../../components/layout/MyMenu'
// import MyBreadcurmb from '../../components/layout/MyBreadCurmb'
// 引入路由
import ShowConsumer from '../../views/main/consumer/ShowConsumer'

// 引入路由配置
import RouterView from '../../router/RouterView';
import { IRouterItem } from '../../utils/interface';

const {Content} = Layout


interface IProps{
    routes: IRouterItem[]
}
const MainPage: React.FC<IProps> = (props)=>{
    return  <Layout>
        <MyHeader></MyHeader>
        <Layout>
            <MyMenu></MyMenu>
            <Layout style={{ padding: '0 24px 24px' }}>
                {/* <MyBreadcurmb></MyBreadcurmb> */}
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                    {/* <Route path="/main/showConsumer" component={ShowConsumer}></Route> */}
                    <RouterView routes={props.routes}></RouterView>
                </Content>
            </Layout>
        </Layout>
    </Layout>
}

export default MainPage;