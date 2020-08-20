import React, { useEffect } from 'react';
import { Row, Col, Tabs, Form, Input, Select, Button } from 'antd';
import useStore from '../../../context/useStore';
import { useObserver } from 'mobx-react-lite';
import { Store } from 'antd/lib/form/interface';

const { TabPane } = Tabs;
const { Option } = Select;
const {useForm} = Form;
const ShowConsumer: React.FC = () => {
    let { consumer } = useStore();

    // 创建form实例
    const [addConsumerForm] = useForm();

    useEffect(() => {
        // 获取数据
        consumer.getConsumerListAction();
        consumer.getApiAuthorityAction();
        consumer.getViewAuthorityAction();
        consumer.getIdentifyListAction();
    }, []);


    return useObserver(() => <div>
        <p>添加用户</p>
        <Row>
            <Col span={8}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="添加用户" key="1">
                        <Form onFinish={consumer.addConsumerAction as unknown as (values:Store)=>void} form={addConsumerForm} initialValues={{
                                identity_id: consumer.identifyList.length && (consumer.identifyList[0] as any).identity_id
                        }}>
                            <Form.Item
                                name="user_name"
                                rules={[{ required: true, message: '请输入用户名' }]} >
                                <Input placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item
                                name="user_pwd"
                                rules={[{ required: true, message: '请输入密码' }]} >
                                <Input placeholder="请输入密码" />
                            </Form.Item>
                            <Form.Item name="identity_id">
                                <Select>{
                                    consumer.identifyList.map((item: any, index) => {
                                        return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                    })
                                }
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{marginRight: 20, width: 100, backgroundImage: `linear-gradient(90deg, #023AFD, #4E75FF)`}}>确定</Button>
                                <Button htmlType="reset" onClick={()=>addConsumerForm.resetFields()}>重置</Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="更新用户" key="2">
                        <Form>
                            <Form.Item name="old_identity_id">
                                <Select defaultValue={consumer.identifyList.length && (consumer.identifyList[0] as any).identity_id}>{
                                    consumer.identifyList.map((item: any, index) => {
                                        return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                    })
                                }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="user_name"
                                rules={[{ required: true, message: '请输入用户名' }]} >
                                <Input placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item
                                name="user_pwd"
                                rules={[{ required: true, message: '请输入密码' }]} >
                                <Input placeholder="请输入密码" />
                            </Form.Item>
                            <Form.Item name="new_identity_id">
                                <Select defaultValue={consumer.identifyList.length && (consumer.identifyList[0] as any).identity_id}>{
                                    consumer.identifyList.map((item: any, index) => {
                                        return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                    })
                                }
                                </Select>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
        </Row>
        <Row>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
        </Row>
    </div>)
}

export default ShowConsumer;