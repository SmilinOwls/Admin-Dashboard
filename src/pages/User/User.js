import React, { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined, UploadOutlined, SearchOutlined } from '@ant-design/icons';
import { List, Card, Avatar, Modal, Popconfirm, Form, Input, Upload, Button, Select, Tag, Row, Col } from 'antd';

const { Meta } = Card;
const dataSource = [{
    key: 1,
    username: `Name I`,
    email: 'email1@gmail.com',
    password: 'password1',
    phone: '0812431293',
    role: 'admin',
    img: [{ thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }],

},
{
    key: 2,
    username: `Name II`,
    email: 'email2@gmail.com',
    password: 'password1',
    phone: '0812431213',
    role: 'user',
    img: [{ thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }],
},
{
    key: 3,
    username: `Name III`,
    email: 'email3@gmail.com',
    password: 'password1',
    phone: '0812431213',
    role: 'user',
    img: [{ thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }],
},
{
    key: 4,
    username: `Name IV`,
    email: 'email4@gmail.com',
    password: 'password1',
    phone: '0812431213',
    role: 'admin',
    img: [{ thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }],
},
];

function User() {
    const [form] = Form.useForm();
    const [card, setCard] = useState({});
    const [disabled, setDisabled] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [role, setRole] = useState('all');
    const [data, setData] = useState(dataSource);
    const [dataClone, setDataClone] = useState(dataSource);

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 8
            }
        },
        wrapperCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 16
            }
        },
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const updateHandle = () => {

        // if it's just to see user info
        if (disabled) {
            setShowModal(false);
            return;
        }

        setConfirmLoading(true);
        setTimeout(() => {
            setShowModal(false);
            setConfirmLoading(false);
            const newData = [...data];
            const index = newData.findIndex((item) => card.key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...card,
                });

            } else {
                newData.push(card);
            }
            setData(newData);
            // axios handler goes here (PUT)
        }, 2000);
    };

    const deleteHandle = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
        // axios handler goes here (DELETE)
    };

    useEffect(() => {
        if (inputValue) {
            const newData = [...data];
            var filteredData = newData.filter(({username, email, phone, }) => `${username}${email}${phone}`.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1);
            if(role !== "all"){
                filteredData = filteredData.filter((item) => item.role === role);
            }
            setDataClone(filteredData.length === 0? [] : filteredData);
        } else{
            setDataClone(role === "all" ? [...data] : data.filter((item) => item.role === role));
        }
    }, [data, role, inputValue]);

    const onSearch = (e) => {
        setInputValue(e.target.value);
    };

    const handleChange = (value) => {
        setRole(value);
        setDataClone(value === "all" ? [...data] : data.filter((item) => item.role === value));
    };

    return (
        <div className='mt-3'>
            <h3 className='my-2'>User List</h3>
            <Row style={{ width: '100%' }} className="mt-3 align-items-center">
                <Col span={2}><b>Search: </b> </Col>
                <Col span={4}>
                    <Input
                        placeholder="input search text"
                        onChange={e => onSearch(e)}
                        allowClear
                        suffix={<SearchOutlined />}
                    />
                </Col>
                <Col span={2} className="ms-3"><b>Role: </b> </Col>
                <Col span={3}>
                    <Select defaultValue="all" onChange={handleChange} style={{ width: '100%' }}>
                        <Select.Option value="admin">Admin</Select.Option>
                        <Select.Option value="user">User</Select.Option>
                        <Select.Option value="all">All</Select.Option>
                    </Select>
                </Col>

            </Row>


            <List
                className='mt-4'
                grid={{ gutter: 16 }}
                dataSource={dataClone}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            style={{ width: 270 }}
                            hoverable
                            onDoubleClick={() => {
                                try {
                                    setCard({ ...item });
                                    setDisabled(true);
                                    form.setFieldsValue({
                                        ...item,
                                    });
                                } catch (error) {

                                }
                                setShowModal(true);
                            }}
                            actions={[
                                <EditOutlined onClick={() => {
                                    try {
                                        setCard({ ...item });
                                        setDisabled(false);
                                        form.setFieldsValue({
                                            ...item,
                                        });
                                    } catch (e) {

                                    }
                                    setShowModal(true);
                                }} />,
                                <Popconfirm title="Sure to delete?" onConfirm={() => deleteHandle(item.key)}>
                                    <span style={{ cursor: "pointer" }}><DeleteOutlined /></span>
                                </Popconfirm>
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src={item.img[0].thumbUrl || URL.createObjectURL(item.img[0].originFileObj)} />}
                                title={item.username}
                                description={item.email}
                            >
                            </Meta>
                            <Tag color={item.role === "admin" ? "gold" : "blue"} className="ms-5 mt-2" key={item.key}>{item.role.toUpperCase()}</Tag>
                        </Card>
                    </List.Item>
                )}
            >
            </List>
            <Modal
                mask={false}
                title={disabled ? "User Info" : "User Updating"}
                open={showModal}
                onOk={updateHandle}
                onCancel={() => setShowModal(false)}
                confirmLoading={confirmLoading}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    style={{ width: 430 }}
                    onValuesChange={(value) => {
                        if (value.img && value.img.length !== 0) {
                            setCard({ ...card, img: [{ ...value.img[0] }] })
                        } else {
                            setCard({ ...card, ...value });
                        }
                    }}
                    disabled={disabled}
                    scrollToFirstError
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
                    <Form.Item
                        name="role"
                        label="Role"
                        rules={[{ required: true, message: 'Please select your Role!' }]}
                    >
                        <Select>
                            <Select.Option value="admin">Admin</Select.Option>
                            <Select.Option value="user">User</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="img"
                        label="Image"
                        valuePropName='fileList'
                        getValueFromEvent={normFile}
                        rules={[
                            {
                                required: true,
                                message: 'Please upload image',
                            },
                        ]}>
                        <Upload
                            listType='picture'
                            beforeUpload={() => false}
                            accept=".png, .jpeg"
                            multiple={false}
                            maxCount={1}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default User