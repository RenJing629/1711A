import React, {useState} from 'react';
import { Form, Input, DatePicker, Button, Table, Row, Col } from 'antd'

const { RangePicker } = DatePicker;

const columns = [{
    title: '提货编号',
    dataIndex: 'id'
},{
    title: '商品名称',
    dataIndex: 'name'
},{
    title: '地域',
    dataIndex: 'region'
},{
    title: '商家',
    dataIndex: 'shop'
},{
    title: '位置',
    dataIndex: 'location'
},{
    title: '提货量',
    dataIndex: 'total'
},{
    title: '分配量',
    dataIndex: 'sell'
},{
    title: '交货日期',
    dataIndex: 'date'
},{
    title: '提货单状态',
    dataIndex: 'status'
}]

const data = [{
    id: 'T06',
    name: '薯条',
    region: '中国',
    shop: '蜜蜂便利店',
    location: '杭州市文一西路',
    total: 50,
    sell: 50,
    date: '2017-06-20',
    status: '已确认'
},{
    id: 'T07',
    name: '薯条',
    region: '中国',
    shop: '蜜蜂便利店',
    location: '杭州市文一西路',
    total: 50,
    sell: 50,
    date: '2017-06-20',
    status: '已确认'
},{
    id: 'T08',
    name: '薯条',
    region: '中国',
    shop: '蜜蜂便利店',
    location: '杭州市文一西路',
    total: 50,
    sell: 50,
    date: '2017-06-20',
    status: '已确认'
}]

const ShowConsumer: React.FC = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [filter, setFilter] = useState<string>('')

    const rowSelection = {
        onChange: (selectedRowKeys:any, selectedRows:any) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record:any) => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
    };

    function finish(values: any){
        console.log('values..', values);
        if (values.id){
            setFilter(values.id)
        }
    }

    return <div>
        <p>商品提货</p>

        <section>
            <Form onFinish={finish}>
                <Row >
                    <Col span={8}>
                        <Form.Item name="id" label="提货单号" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="note" label="商品名称" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item name="note" label="商家名称" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="note" label="交货日期" >
                            {/* <RangePicker showTime /> */}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="note" >
                    <Button type="primary"  htmlType="submit">查询</Button>
                    <Button>清空</Button>
                </Form.Item>
            </Form>
        </section>

        <section>   
            <Table
                rowSelection={{
                type: selectionType,
                ...rowSelection,
                }}
                columns={columns}
                dataSource={(filter?data.filter(item=>item.id === filter): data) as []}
            />
        </section>
    </div>
}

export default ShowConsumer;