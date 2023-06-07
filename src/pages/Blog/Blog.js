import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import { Table } from 'antd';
import AddBlog from './AddBlog';

function Blog() {
    const [isAdd, setIsAdd] = useState(false);

    const columns = [
        {
            title: "SNo",
            dataIndex: "key",
        },
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Content",
            dataIndex: "content",
        },
        {
            title: "Image",
            dataIndex: "img",
        },
    ];

    const data_ = [];
    for (let i = 0; i < 28; i++) {
        data_.push({
            key: i,
            title: `Customer ${i}`,
            content: `STD102`,
            img: `$ ${i}`,
        });
    }
    return (
        <div className='mt-3'>
            {!isAdd ? (
                <>
                    <div className='d-flex justify-content-between mb-3'>
                        <h3 className='my-2'>Blog List</h3>
                        <button className='btn btn-primary rounded-3' onClick={() => setIsAdd(!isAdd)}>Add Blog</button>
                    </div>
                    <Table columns={columns} dataSource={data_} />
                </>
            ) : <AddBlog />}
        </div>
    )
}

export default Blog