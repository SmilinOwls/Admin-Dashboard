import React, { useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { List, Card, Avatar, Modal, Button, Popconfirm, Form, Input, InputNumber } from 'antd';

const { Meta } = Card;

function User() {
    const [form] = Form.useForm();
    const [card, setCard] = useState({});
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([{
        key: 1,
        username: `Name I`,
        email: 'email1@gmail.com',
        password: 'password1',
        phone: '0812431293',
        img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',

    },
    {
        key: 2,
        username: `Name II`,
        email: 'email2@gmail.com',
        password: 'password1',
        phone: '0812431213',
        img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: 3,
        username: `Name III`,
        email: 'email3@gmail.com',
        password: 'password1',
        phone: '0812431213',
        img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: 4,
        username: `Name IV`,
        email: 'email4@gmail.com',
        password: 'password1',
        phone: '0812431213',
        img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    ]);

    const updateHandle = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setShowModal(false);
            setConfirmLoading(false);
            // axios handler goes here (PUT)
        }, 2000);
    };

    const deleteHandle = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
        // axios handler goes here (DELETE)
    };

    return (
        <div className='mt-3'>
            <h3 className='my-2'>User List</h3>
            <List
                grid={{ gutter: 16 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            style={{ width: 270 }}
                            hoverable
                            actions={[
                                <EditOutlined onClick={() => {
                                    setShowModal(true);
                                    setCard({ ...item });
                                    form.setFieldsValue({
                                        ...item,
                                    });
                                }} />,
                                <Popconfirm title="Sure to delete?" onConfirm={() => deleteHandle(item.key)}>
                                    <span style={{ cursor: "pointer" }}><DeleteOutlined /></span>
                                </Popconfirm>
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src={item.img} />}
                                title={item.username}
                                description={item.email}
                            />
                        </Card>
                    </List.Item>
                )}
            >
            </List>
            <Modal
                mask={false}
                title="User Updating"
                open={showModal}
                onOk={updateHandle}
                onCancel={() => setShowModal(false)}
                confirmLoading={confirmLoading}
            >
                <Form
                    form={form}
                    style={{ width: 300 }}
                >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your Phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default User