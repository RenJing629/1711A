import React, { useState, useEffect } from 'react';
import { Layout, Dropdown, Menu, Modal, Form, Button, Upload, Avatar, Input, Select} from 'antd'
import styles from './MyHeader.module.scss'
import useStore from '../../context/useStore'
import { useObserver } from 'mobx-react-lite';

const { Header } = Layout;
const { useForm } = Form;

const MyHeader: React.FC = () => {
    let { user, consumer, lang } = useStore();
    let [visible, setVisible] = useState<boolean>(true);
    let [avatar, setAvatar] = useState(user.userInfo.avatar);
    let [form] = useForm();

    let logout = () => {
        user.logoutAction()
    }

    // 获取所有身份
    useEffect(()=>{
        consumer.getIdentifyListAction();
    }, []);

    // 监听用户信息的获取
    useEffect(()=>{
        form.setFieldsValue(user.userInfo)
        setAvatar(user.userInfo.avatar)
    }, [user.userInfo]);

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    const menu = (
        <Menu>
            <Menu.Item key="0" onClick={()=>setVisible(true)}>
                    个人中心
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

    const langOverlay = (
        <Menu>
            <Menu.Item key="0" onClick={()=>lang.chanegLocale('zh')}>
                简体中文
            </Menu.Item>
            <Menu.Item key="1" onClick={()=>lang.chanegLocale('en')}>
                English
            </Menu.Item>
        </Menu>
    );

    function handleChange(e: any){
        console.log('e...', e);
        if (e.file.status === 'done'){
            let data = e.file.response.data;
            let index = data.findIndex((item:any)=>item.name==='avatar');
            setAvatar(data[index].path);
        }
    }

    function finish(params:any){
        let data = {...params, avatar}
        user.updateUserInfoAction(data);
        setVisible(false);
    }

    console.log('avatar...', avatar)

    return useObserver(()=><Header className="header">
        <img className={styles.img} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        <Dropdown overlay={langOverlay}>
            <span>{lang.local==='zh'?'简体中文': 'English'}</span>
        </Dropdown>
        <Dropdown overlay={menu}>
            <div>
                <img className={styles.avatar} src={avatar} alt="" />
                <span>{user.userInfo.user_name} | {user.userInfo.identity_text}</span>
            </div>
        </Dropdown>
        <Modal
          title="个人中心"
          visible={visible}
          footer={null}
        //   onOk={this.handleOk}
          onCancel={()=>setVisible(false)}
        >
          <Form 
            form={form}
            {...formItemLayout}
            onFinish={finish}>
              <Form.Item label="用户头像" name="avatar">
                <Upload
                    name="avatar"
                    action="//123.206.55.50:11000/upload"
                    showUploadList={false}  
                    onChange={handleChange}
                    >
                    <Avatar size={40} src={avatar}>头像</Avatar>
                </Upload>
              </Form.Item>
              <Form.Item label="用户昵称" name="user_name" rules={[{required:true, message:'请输入你的用户名'}]}>
                    <Input placeholder="请输入您的用户名"/>
                </Form.Item>
                <Form.Item label="用户 ID" name="user_id">
                    <Input placeholder="您当前的用户ID" disabled/>
                </Form.Item>
                <Form.Item label="用户身份" name="identity_id">
                    <Select>{
                        consumer.identifyList.map((item:any,index)=>{
                            return <Select.Option key={index} value={item.identity_id}>{item.identity_text}</Select.Option>
                    })}</Select>    
                </Form.Item>
                <Form.Item style={{textAlign: 'center'}}>
                    <Button type="primary" htmlType="submit" style={{marginRight: 20}}>确定</Button>
                    <Button >取消</Button>
                </Form.Item>
          </Form>
        </Modal>
    </Header >)
}

export default MyHeader;