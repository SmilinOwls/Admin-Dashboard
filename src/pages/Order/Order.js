import React, { useEffect, useState } from 'react';
import {FaReceipt, FaUser} from 'react-icons/fa';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import { List, Card, Form, Select, Row, Col } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as OrderAction from '../../actions/OrderAction.js';

function Order({orders, actions}) {
    const [data, setData] = useState(orders);
    const [status, setStatus] = useState('All');
    
    useEffect(() => {
        // actions.getOrder();
    }, []);

    useEffect(() => {
        setData(status === "All" ? [...orders] : orders.filter((item) => item.orderStatus === status));
    }, [status, orders]);

    return (
        <div className='mt-3'>
            <h3 className='my-2'>User List</h3>
            <Row style={{ width: '100%' }} className="mt-3 align-items-center">
                <Col span={2} className="ms-3"><b>Status: </b> </Col>
                <Col span={3}>
                    <Select defaultValue="All" onChange={(value) => setStatus(value)} style={{ width: '100%' }}>
                        <Select.Option value="Processing">Processing</Select.Option>
                        <Select.Option value="Approval">Approval</Select.Option>
                        <Select.Option value="All">All</Select.Option>
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
                            style={{ width: 300, backgroundColor: "#87CEFA" }}
                            hoverable
                            extra={
                            <div className='d-flex flex-column align-items-end'>
                                <div>{item.paidAt.format('MM/DD/YYYY')}</div>
                                <div>{item.paidAt.format('HH:mm')}</div>
                            </div>}
                            title={<div className='border-dark border-opacity-25 bg-body w-50'>{item.orderStatus}</div>}
                            onClick={() => actions.deleteOrder(item.key)}
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
                                    border: "1px solid #DCDCDC",
                                    borderRadius: "3%",
                                    marginBottom: "15px",
                                }}
                                className="bg-body"
                            >
                                <Form.Item
                                    name="key"
                                    label={<span><FaReceipt className='me-2 mb-1'/><b>ID</b></span>}
                                >
                                    <span>{item.key}</span>
                                </Form.Item>
                                <Form.Item
                                    name="key"
                                    label={<span><FaUser className='me-2 mb-1'/><b>User</b></span>}
                                >
                                    <span>{item.user}</span>
                                </Form.Item>
                            </Form>
                            <div className='d-flex flex-column footer'>
                                <div className='btn align-self-end border-dark border-opacity-25 fw-bold bg-body'>{item.totalPrice}<RiMoneyDollarCircleFill className='mx-2 mb-1 fs-5' color='#87d068'/></div>
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
