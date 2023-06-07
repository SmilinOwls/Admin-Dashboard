import React from 'react'
import { Table } from 'antd';

function Place() {
    const columns = [
        {
            title: "SNo",
            dataIndex: "key",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Room",
            dataIndex: "room",
        },
        {
            title: "Expense",
            dataIndex: "expense",
        },
        {
            title: "Date",
            dataIndex: "date",
        }
    ];

    const data_ = [];
    for (let i = 0; i < 28; i++) {
        data_.push({
            key: i,
            name: `Customer ${i}`,
            room: `STD102`,
            expense: `$ ${i}`,
            date: new Date().toLocaleString()
        });
    }
    return (
        <div className='mt-3'>
            <h3 className='my-2'>Place List</h3>
            <Table columns={columns} dataSource={data_} />
        </div>
    )
}

export default Place