import React from 'react'

import { Layout } from 'antd';
// 引入自定义组件
import MyHeader from '../../components/layout/MyHeader'
import MyMenu from '../../components/layout/MyMenu'
import MyBreadcrumb from '../../components/layout/MyBreadCrumb'

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
                <MyBreadcrumb></MyBreadcrumb>
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