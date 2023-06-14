import React from 'react'
import { Button, Form, Input, Image } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function BlogSummary({ formData, handleChange }) {
    const { title, content, image } = formData;
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 14 },
    };
    const onFinish = (values) => {
        // axios handler goes here (POST)
        console.log('Success:', values);
    };
    return (
        <div className='row'>
            <div className='col-7'>
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
                    <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                        <Button type="primary" htmlType="submit" className='ms-2'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form >
            </div>
            <Image className='col-2' style={{ mixBlendMode: "multiply" }} width={420} src={'https://img.freepik.com/free-vector/blogging-illustration-concept_114360-851.jpg?w=2000'} />
        </div>

    )
}

export default BlogSummary