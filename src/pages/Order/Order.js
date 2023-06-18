import React, { useEffect, useState } from 'react';
import {FaReceipt, FaUser} from 'react-icons/fa';
import { List, Card, Form, Select, Tag, Row, Col } from 'antd';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { deleteOrder } from '../../actions';

const dateFormat = "MM/DD/YYYY HH:mm";
const dataSource = [{
    key: 1,
    payment: `Name I`,
    user: 'User ID',
    userInfo: {
        fullName: "FullName I",
        phone: "0987773321",
        IdentifyCard: "1234567890"
    },
    cart: [{
        title: "Title I",
        image: "",
        price: 1,
        numOfDays: 7,
        maxGuests: 2,
        qnt: 1,
        room: "Room ID",
        key: 1,
    }],
    checkIn: dayjs('07/12/2023 12:00', dateFormat),
    checkOut: dayjs('08/12/2023 12:00', dateFormat),
    paymentMethod: "Paypal",
    numOfGuest: 1,
    orderStatus: "Processing",
    taxPrice: 0,
    totalPrice: 10,
    paidAt: dayjs('06/12/2023 12:00', dateFormat),
},
{
    key: 2,
    payment: `Name II`,
    user: 'User ID',
    userInfo: {
        fullName: "FullName II",
        phone: "0987773321",
        IdentifyCard: "1234567890"
    },
    cart: [{
        title: "Title II",
        image: "",
        price: 1,
        numOfDays: 7,
        maxGuests: 2,
        qnt: 1,
        room: "Room ID",
        key: 1,
    }],
    checkIn: dayjs('07/12/2023 12:00', dateFormat),
    checkOut: dayjs('08/12/2023 12:00', dateFormat),
    paymentMethod: "Paypal",
    numOfGuest: 1,
    orderStatus: "Processing",
    taxPrice: 0,
    totalPrice: 10,
    paidAt: dayjs('06/12/2023 12:00', dateFormat),
},
{
    key: 3,
    payment: `Name III`,
    user: 'User ID',
    userInfo: {
        fullName: "FullName III",
        phone: "0987773321",
        IdentifyCard: "1234567890"
    },
    cart: [{
        title: "Title III",
        image: "",
        price: 1,
        numOfDays: 7,
        maxGuests: 2,
        qnt: 1,
        room: "Room ID",
        key: 1,
    }],
    checkIn: dayjs('07/12/2023 12:00', dateFormat),
    checkOut: dayjs('08/12/2023 12:00', dateFormat),
    paymentMethod: "Paypal",
    numOfGuest: 1,
    orderStatus: "Approval",
    taxPrice: 0,
    totalPrice: 10,
    paidAt: dayjs('06/12/2023 12:00', dateFormat),
},
];

function Order() {
    const [card, setCard] = useState({});
    const [status, setStatus] = useState('all');
    const [data, setData] = useState(dataSource);
    const [dataClone, setDataClone] = useState(dataSource);
    
    const handleChange = (value) => {
        setStatus(value);
        setDataClone(value === "all" ? [...data] : data.filter((item) => item.role === value));
    };

    return (
        <div className='mt-3'>
            <h3 className='my-2'>User List</h3>
            <Row style={{ width: '100%' }} className="mt-3 align-items-center">
                <Col span={2} className="ms-3"><b>Status: </b> </Col>
                <Col span={3}>
                    <Select defaultValue="all" onChange={handleChange} style={{ width: '100%' }}>
                        <Select.Option value="processing">Processing</Select.Option>
                        <Select.Option value="approval">Approval</Select.Option>
                        <Select.Option value="all">All</Select.Option>
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
                            extra={item.paidAt.toDate().toLocaleString()}
                            title={item.orderStatus}
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
                                <Form.Item
                                    name="key"
                                    label={<span><FaUser className='me-2'/><b>User</b></span>}
                                >
                                    <span>{item.user}</span>
                                </Form.Item>
                            </Form>
                            <div className='d-flex flex-column footer'>
                                <div className='btn align-self-end'>{item.totalPrice}</div>
                            </div>
                        </Card>
                    </List.Item>
                )}
            >
            </List>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      orders: state.orders
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onDelete: id => {
        dispatch(deleteOrder(id));
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Order);
