import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Form, Input, Upload, Rate, Button, Modal, Row, Col, Image, InputNumber } from 'antd';

function AddPlace() {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: [],
        type: '',
        offer: '',
        service: '',
        checkin: '',
        checkout: Date(Date.now()).toLocaleString(),
        bedroom: Date(Date.now()).toLocaleString(),
        guest: ''
    });
    const [isModal, setModal] = useState(false);

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 5
            }
        },

        wrapperCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 16
            }
        }
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 5
            }
        }
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const anotherHandle = () => {
        form.resetFields();
        setModal(false);
    };

    const onFinish = (values) => {
        setModal(true);
        console.log('Received values of form: ', values);
        setFormData({ ...values });

        //  axios handler goes here (POST)
    };

    return (
        <div className='container'>

            <h3 className="mb-3">Add A New Room</h3>
            <div className='row'>
            <div className='col-7'>
            <Form
                {...formItemLayout}
                form={form}
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Description',
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
                <Form.Item
                    name="image"
                    label="Image"
                    valuePropName='fileList'
                    getValueFromEvent={normFile}
                    rules={[
                        {
                            required: true,
                            message: 'Please upload image',
                        },
                    ]}
                >
                    <Upload.Dragger listType='picture'
                        beforeUpload={() => false}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Type',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="offer"
                    label="Offer"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Offer',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="service"
                    label="Service"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Service',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="cost"
                    label="Cost"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Cost',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="bedroom"
                    label="Bedroom Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input number of Bedroom',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="guest"
                    label="Guest Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input number of Guest',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Row gutter={8}>
                        <Col span={4}>
                            <Button type="primary" htmlType="submit">
                                Add
                            </Button>
                        </Col>
                        <Col span={4}>
                            <Button type="default" onClick={() => form.resetFields()}>
                                Reset
                            </Button>
                        </Col>
                    </Row>

                </Form.Item>
            </Form>
            </div>
            <Image className='col-5' style={{mixBlendMode: "multiply"}}  width={420} src='https://img.freepik.com/free-vector/lifestyle-hotel-illustration_335657-398.jpg?w=2000'/>
            </div>
            
            <Modal title="System Message" open={isModal} footer={[
                <Button href='/admin/place' key="link">
                    Return
                </Button>,
                <Button key="another" onClick={anotherHandle} type="primary">Add A New One</Button>,
            ]}
            >
                <p>Add New Room Successfully..</p>
                <p>Come back to the list to see any changes or continue to add another one!</p>
            </Modal>
        </div>
    )
}

export default AddPlace