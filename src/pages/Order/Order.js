import React, { useEffect, useState } from 'react';
import {FaReceipt} from 'react-icons/fa';
import { List, Card, Form, Select, Tag, Row, Col } from 'antd';
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
{
    key: 2,
    payment: `Name II`,
    user: 'User II',
    room: 'Room II',
    money: '13',
    date: dayjs('06/16/2023 12:00', dateFormat),
},
{
    key: 3,
    payment: `Name III`,
    user: 'User III',
    room: 'Room III',
    money: '12',
    date: dayjs('06/09/2023 12:00', dateFormat),
},
];

function Order() {
    const [card, setCard] = useState({});
    const [status, setStatus] = useState('all');
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
                <Col span={2} className="ms-3"><b>Status: </b> </Col>
                <Col span={3}>
                    <Select defaultValue="all" onChange={handleChange} style={{ width: '100%' }}>

                    </Select>
                </Col>

            </Row>

            <List
                className='mt-4'
                grid={{ gutter: 16 }}
                dataSource={dataClone}
                pagination={{
                    pageSize: 10,
                  }}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            style={{ width: 270 }}
                            hoverable
                            extra={item.date.toDate().toLocaleString()}
                            title={<div>Status</div>}
                            onClick={() => setCard(item)}
                        >
                            <Form
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: 300,
                                }}
                            >
                                <Form.Item
                                    name="key"
                                    label={<span><FaReceipt className='me-2'/><b>ID</b></span>}
                                >
                                    <span>{item.key}</span>
                                </Form.Item>
                            </Form>
                            <div className='d-flex flex-column footer'>
                                <div className='btn align-self-end'>{item.money}</div>
                            </div>
                        </Card>
                    </List.Item>
                )}
            >
            </List>

        </div>
    )
}

export default Order