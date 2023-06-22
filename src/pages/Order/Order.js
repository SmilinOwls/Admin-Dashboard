import React, { useEffect, useState } from 'react';
import { FaReceipt, FaUser } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FcApproval, FcProcess } from 'react-icons/fc';
import { List, Card, Form, Select, Row, Col, Popconfirm } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as OrderAction from '../../actions/OrderAction.js';
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';

function Order({ orders, actions }) {
    const navigate = useNavigate();
    const [data, setData] = useState(orders);
    const [status, setStatus] = useState('All');

    useEffect(() => {
        actions.getOrder();
    }, []);

    useEffect(() => {
        setData(status === "All" ? [...orders] : orders.filter((item) => item.orderStatus === status));
    }, [status, orders]);

    const style = {
        className: 'me-2 mb-1',
    };

    return (
        <div className='mt-3'>
            <h3 className='my-2'>User List</h3>
            <Row style={{ width: '100%' }} className="mt-3 align-items-center">
                <Col span={2} className="ms-3"><b>Status: </b> </Col>
                <Col span={3}>
                    <Select defaultValue="All" onChange={(value) => setStatus(value)} style={{ width: '100%' }}>
                        <Select.Option value="All">All</Select.Option>
                        <Select.Option value="Processing"><FcProcess {...style} />Processing</Select.Option>
                        <Select.Option value="Approval"><FcApproval  {...style} />Approval</Select.Option>
                    </Select>
                </Col>

            </Row>

            <List
                className='mt-4'
                grid={{ gutter: 16 }}
                dataSource={data}
                pagination={{
                    pageSize: 10,
                }}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            style={{ width: 300, backgroundColor: (item.orderStatus === "Processing") ? "#87CEFA" : "#FFE87C" }}
                            hoverable
                            extra={
                                <div className='d-flex flex-column align-items-end fst-italic'>
                                    <div>{dayjs(item.paidAt).format('MM/DD/YYYY')}</div>
                                    <div>{dayjs(item.paidAt).format('HH:mm')}</div>
                                </div>}
                            title={
                                <div className='border-dark border-opacity-25 bg-body w-75 rounded-3 px-2'>
                                    {item.orderStatus === "Processing" ? <FcProcess  {...style} /> : <FcApproval  {...style} />}
                                    {item.orderStatus}
                                </div>}
                            actions={[
                                <EditOutlined onClick={() => {
                                    navigate(`/api/admin/book/${item.key}`, { state: { order: item } });
                                }}></EditOutlined>
                                ,
                                <Popconfirm title="Sure to delete?" onConfirm={() => actions.deleteOrder(item.key)}>
                                    <span style={{ cursor: "pointer" }}><DeleteOutlined /></span>
                                </Popconfirm>
                            ]}
                        >
                            <Form
                                labelCol={{
                                    span: 10,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                style={{
                                    maxWidth: 270,
                                    border: "1px solid #DCDCDC",
                                    marginBottom: "15px",
                                }}
                                className="bg-body rounded-3 p-2"
                            >
                                <Form.Item
                                    name="key"
                                    label={<span><FaReceipt {...style} /><b>Order ID</b></span>}
                                >
                                    <span>{item.key}</span>
                                </Form.Item>
                                <Form.Item
                                    name="key"
                                    label={<span><FaUser {...style} /><b>User ID</b></span>}
                                >
                                    <span>{item.user}</span>
                                </Form.Item>
                            </Form>
                            <div className='d-flex flex-column footer'>
                                <div className='btn align-self-end border-dark border-opacity-25 fw-bold bg-body'>{item.totalPrice}<RiMoneyDollarCircleFill className='mx-2 mb-1 fs-5' color='#87d068' /></div>
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
        actions: bindActionCreators(OrderAction, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);
