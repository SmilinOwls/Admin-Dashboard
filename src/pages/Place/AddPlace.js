import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Form, Input, Upload, Rate, Button } from 'antd';

function AddPlace() {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        identifier: '',
        image: [],
        description: '',
        addition: '',
        rating: ''
    });

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
                offset: 8
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

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setFormData({...values});
    };

    return (
        <div className='container'>
            <h3 className="mb-3">Add A New Place</h3>
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
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Address',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="identifier"
                    label="Identifier"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Identifier',
                        },
                    ]}
                >
                    <Input />
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
                    name="rating"
                    label="Rating"
                    rules={[
                        {
                            required: true,
                            message: 'Please make a rating',
                        },
                    ]}>
                    <Rate />
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
                    name="addition"
                    label="Addition"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Addition',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default AddPlace