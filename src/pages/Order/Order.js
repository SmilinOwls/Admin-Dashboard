import React, { useState } from 'react'
import { List, Card, Avatar, Modal, Popconfirm, Form, Input, Upload, Button, Select, Tag, Row, Col } from 'antd';
import dayjs from 'dayjs';

const dateFormat = "MM/DD/YYYY HH:mm";
const dataSource = [{
    key: 1,
    payment: `Name I`,
    user: 'User I',
    room: 'Room I',
    money: '10',
    date: dayjs('07/12/2023 12:00', dateFormat),
},
];

function Order() {
    const [card, setCard] = useState({});
    const [role, setRole] = useState('all');
    const [data, setData] = useState(dataSource);
    const [dataClone, setDataClone] = useState(dataSource);

    const handleChange = (value) => {
        setRole(value);
        setDataClone(value === "all" ? [...data] : data.filter((item) => item.role === value));
    };

    return (
        <div className='mt-3'>
            <h3 className='my-2'>User List</h3>
            <Row style={{ width: '100%' }} className="mt-3 align-items-center">
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
                            color='gold'
                        >
                            
                        </Card>
                    </List.Item>
                )}
            >
            </List>
            
        </div>
    )
}

export default Order