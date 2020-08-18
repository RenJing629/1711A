import React, { useState, useEffect } from 'react';
import {Tabs, Table} from 'antd'
import useStore from '../../../context/useStore';
import { useObserver } from 'mobx-react-lite';
const { TabPane } = Tabs;

const tabs = [{
    title: '用户数据',
    list: 'consumerList',
    key: 'user_id',
    action: 'getConsumerListAction',
    columns: [{
        title: '姓名',
        dataIndex: 'user_name',
    },{
        title: '密码',
        dataIndex: 'user_pwd',
    },{
        title: '身份',
        dataIndex: 'identity_text',
    }, ]
},{
    title: '身份数据',
    list: 'consumerList',
    action: 'getConsumerListAction'
},{
    title: 'api接口权限',
    list: 'consumerList',
    action: 'getConsumerListAction'
},{
    title: '身份和api接口关系',
    list: 'consumerList',
    action: 'getConsumerListAction'
},{
    title: '视图接口权限',
    list: 'consumerList',
    action: 'getConsumerListAction'
},{
    title: '身份和视图权限关系',
    list: 'consumerList',
    action: 'getConsumerListAction'
}]
const ShowConsumer: React.FC = ()=>{
    const {consumer} = useStore();
    let [active, setActive] = useState<number>(0);

    // 进入页面请求第一项数据
    useEffect(()=>{
        // consumer.getConsumerListAction();
        consumer[tabs[active].action]()
    }, [active]);

    function callback(active: string){
        setActive(Number(active));
    }

    return useObserver(()=><React.Fragment>
        <p>用户展示</p>
        {/* 分类切换 */}
        <Tabs defaultActiveKey="0" onChange={callback}>{
            tabs.map((item, index)=>{
                return <TabPane tab={item.title} key={index}></TabPane>
            })
        }</Tabs>
        {/* 分类数据 */}
        <Table rowKey={tabs[active].key} dataSource={consumer[tabs[active].list]} columns={tabs[active].columns} />;
    </React.Fragment>)
}

export default ShowConsumer;