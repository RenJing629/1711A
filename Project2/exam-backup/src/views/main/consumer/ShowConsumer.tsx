import React, { useState, useEffect } from 'react';
import {Tabs, Table, Button} from 'antd'
import useStore from '../../../context/useStore';
import { useObserver } from 'mobx-react-lite';
import XLSX from 'xlsx';

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
    let [uploadExcel, setUploadExcel] = useState<{data:any[], columns:any[]}>({data:[], columns:[]});

    // 进入页面请求第一项数据
    useEffect(()=>{
        // consumer.getConsumerListAction();
        consumer[tabs[active].action]()
    }, [active]);

    function callback(active: string){
        setActive(Number(active));
    }

    function exportExcel(){
        // 1.生成worksheet
        let ws = XLSX.utils.json_to_sheet(consumer[tabs[active].list]);
        // 2.创建workbook
        let wb = XLSX.utils.book_new();
        // 3.添加worksheet到workbook中
        XLSX.utils.book_append_sheet(wb, ws, tabs[active].title)
        // 4.导出workbook到本地文件
        XLSX.writeFile(wb, '用户管理.xlsx') 
    }

    function importExcel(e: React.ChangeEvent<HTMLInputElement>){
        if (e.target.files){
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function(e){
                let buffer = new Uint8Array(e.target?.result as unknown as number);
                var workbook = XLSX.read(buffer, {type: 'array'});
                console.log('workbook...', workbook);
                let worksheet = workbook.Sheets['连续两周重点班'];
                let data:any [] = XLSX.utils.sheet_to_json(worksheet);
                let columns = [];
                for (let key in data[0]){
                    columns.push({
                        name: data[0][key],
                        dataIndex: key
                    })
                }
                let uploadExcel = {
                    columns,
                    data: data
                }
                setUploadExcel(uploadExcel);
                console.log('data...', uploadExcel);
            }
        }
    }

    return useObserver(()=><React.Fragment>
        <p>用户展示</p>
        {/* 分类切换 */}
        <Tabs defaultActiveKey="0" onChange={callback}>{
            tabs.map((item, index)=>{
                return <TabPane tab={item.title} key={index}></TabPane>
            })
        }</Tabs>
        
        {/* 表格操作 */}
        <div>
            <Button type="primary" onClick={exportExcel}>导出数据</Button>
            <Button type="primary">
                <input type="file" placeholder="导入数据" onChange={importExcel}/>
            </Button>
        </div>

        {/* 分类数据 */}
        <Table rowKey={tabs[active].key} dataSource={consumer[tabs[active].list]} columns={tabs[active].columns} />

        {/* 读取excel */}
        <Table dataSource={uploadExcel.data} columns={uploadExcel.columns} />
    </React.Fragment>)
}

export default ShowConsumer;