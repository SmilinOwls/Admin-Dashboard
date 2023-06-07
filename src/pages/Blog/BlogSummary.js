import React from 'react'
import { Button, Checkbox, Form, Input, Image } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function BlogSummary({ formData, handleChange }) {
    const { title, content, image } = formData;
    const formItemLayout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 10 },
    };
    const onFinish = (values) => {
        // connenct to API here
        console.log('Success:', values);
    };
    return (
        <Form
            name="dynamic_rule"
            style={{
                maxWidth: 1200,
            }}
            initialValues={{
                title: title,
                content: content,
                image: image
            }}
            onFinish={onFinish}
        >
            <Form.Item
                {...formItemLayout}
                name="title"
                label="Blog Title"
            >
                <Input value={title} placeholder={title} readOnly={true} disabled={true} className="ms-2" />
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                name="content"
                label="Blog Content"
                valuePropName={content}
            >
                <div className="ms-2">
                    <TextArea value={content} placeholder={content} rows={8} readOnly={true} disabled={true} />
                    <div dangerouslySetInnerHTML={{ __html: content }} className="my-3"></div>
                </div>
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                name="image"
                label="Blog Image"
            >
                <div className='container'>
                    <div className='row'>
                        {image.map((img, idx) => (
                            <div className='col-3 mb-2'>
                                <Image src={img.thumbUrl} width={80} height={80} key={idx} />
                            </div>
                        )
                        )}
                    </div>
                </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                <Button type="primary" htmlType="submit" className='ms-2'>
                    Submit
                </Button>
            </Form.Item>
        </Form >
    )
}

export default BlogSummary