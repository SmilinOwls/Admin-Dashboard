import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { MdOutlineRestore } from 'react-icons/md';
import { connect } from 'react-redux';
import * as OrderAction from '../../actions/OrderAction.js';
import { bindActionCreators } from 'redux';
import { dateFormat, formItemLayout, tailFormItemLayout } from '../../utils/config';
import { Form, Input, Select, Space, DatePicker, Button, Modal, Row, Col, Image, InputNumber, Divider } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
function OrderDetail({ actions }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { order } = state || {};
  const [form] = Form.useForm();
  const [isModal, setModal] = useState(false);
  const [book, setBook] = useState({ ...order })
  const [cart, setCart] = useState(order.cart);
  const backUpCart = order.cart.slice(0);

  const styleConfig = {
    className: 'rounded-2 p-3 bg-opacity-75 bg-white',
    style: {
      border: "1px solid #DCDCDC",
      marginBottom: "15px",
    }
  };

  useEffect(() => {
    form.setFieldsValue(
      {
        ...book,
        ["range-time-picker"]: [dayjs(order.checkIn, dateFormat), dayjs(order.checkOut, dateFormat)]
      }
    );
  }, []);

  useEffect(() => {
    form.setFieldValue("cart", [ ...cart ]);
  }, [cart]);

  const deleteCartItem = (cartItemID) => {
    book.cart = [...order.cart].filter((item) => item.key !== cartItemID);
    setCart(book.cart);
  };

  const restoreCartItem = () => {
    book.cart = [...backUpCart];
    setCart(backUpCart);
  };

  const onFinish = (values) => {
    setModal(true);
    const rangeTimeValue = values['range-time-picker'];
    delete values['range-time-picker'];

    const values_ = {
      ...values,
      paidAt: typeof values["paidAt"] === 'string' ? values["paidAt"] : values["paidAt"].format(dateFormat),
      checkIn: rangeTimeValue[0].format(dateFormat),
      checkOut: rangeTimeValue[1].format(dateFormat)
    }

    console.log('Received values of form: ', values_);

    actions.updateOrder(values_);

    //  axios handler goes here (PUT)
  };

  return (
    <div className='container'>
      <div
        className='text-primary mb-3 d-flex align-items-center'
        style={{ cursor: "pointer" }}
      >
        <ArrowLeftOutlined /><Link to='/api/admin/book' className='ms-2 text-decoration-none'>Back to Order List</Link>
      </div>
      <h3 className="mb-3">Update Order</h3>
      <div className='row'>
        <div className='col-7'>
          <Form
            {...formItemLayout}
            form={form}

            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
            <div {...styleConfig}>
              <h4 className='mb-3'>User Info</h4>
              <Form.Item
                name="user"
                label="User ID"
              >
                <span>{order.user}</span>
              </Form.Item>
              <Form.Item
                label="Full Name"
                name={['userInfo', 'fullName']}
                rules={[
                  {
                    required: true,
                    message: 'Please input Full Name',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name={['userInfo', 'phone']}
                rules={[
                  {
                    required: true,
                    message: 'Please input Phone',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Identify Card"
                name={['userInfo', 'IdentifyCard']}
                rules={[
                  {
                    required: true,
                    message: 'Please input Identify Card',
                  },
                ]}
              >
                <Input />
              </Form.Item>

            </div>
            <div {...styleConfig}>
              <h4 className='mb-3'>Order Info</h4>
              <Form.Item
                name="key"
                label="Order ID"
              >
                <span>{book.key}</span>
              </Form.Item>
              <Form.Item
                name="place"
                label="Place ID"
              >
                <span>{book.place}</span>
              </Form.Item>
              <Form.Item
                name="range-time-picker"
                label="Check[in][out]"
                rules={[{
                  required: true,
                  type: 'array',
                  message: 'Please select Time'
                }]}
              >
                <RangePicker showTime format={dateFormat} />
              </Form.Item>
              <Form.Item
                name="paymentMethod"
                label="Payment Method"
                rules={[
                  {
                    required: true,
                    message: 'Please input Payment Method',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="numOfGuest"
                label="Guest Number"
                rules={[
                  {
                    required: true,
                    type: 'number',
                    message: 'Please input number of Guests',
                  },
                ]}
              >
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item
                name="orderStatus"
                label="Order Status"
                rules={[
                  {
                    required: true,
                    message: 'Please select Order Status',
                  },
                ]}
              >
                <Select style={{ width: '100%' }}>
                  <Select.Option value="Processing">Processing</Select.Option>
                  <Select.Option value="Approval">Approval</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="taxPrice"
                label="Tax Price"
                rules={[
                  {
                    required: true,
                    type: 'number',
                    message: 'Please input Tax Price',
                  },

                ]}
              >
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item
                name="totalPrice"
                label="Total Price"
                rules={[
                  {
                    required: true,
                    type: 'number',
                    message: 'Please input Total Price',
                  },
                ]}
              >
                <InputNumber min={0} />
              </Form.Item>
              <Form.Item
                name="paidAt"
                label="Paid At"
                rules={[
                  {
                    required: true,
                    message: 'Please select Time To Paid',
                  },
                ]}
                getValueProps={(value) => ({ value: dayjs(value) })}
              >
                <DatePicker showTime format={dateFormat} />
              </Form.Item>
            </div>
            <div
              {...styleConfig}
            >
              <span className='d-flex justify-content-between mb-3'>
                <h4>Cart</h4>
                <div>
                  <p className='text-end'>Items: <b>{book.cart.length}</b></p>
                  <Button icon={<MdOutlineRestore />} onClick={restoreCartItem}>Restore</Button>
                </div>
              </span>
              <Form.List
                name="cart"
              >
                {(fields) => (
                  fields.map(({ key, name, ...restField }) => (

                    <Space key={key} direction="vertical" style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Row gutter={3}>
                        <Col span={8}>
                          <Image className='col-5' style={{ mixBlendMode: "multiply" }} src={order.cart.image || 'https://img.freepik.com/free-vector/hotel-room-with-bed-interior-design-background-window-with-curtains-bed-with-pillows-towels-lamp-happy-holiday-vacation-staying-modern-hotel-with-view-city_575670-2063.jpg'} />
                        </Col>
                        <Col span={16}>
                          <Form.Item
                            {...restField}
                            label="Room ID"
                            name={[name, 'room']}
                          >
                            <Input placeholder="Room ID" readOnly />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label="Title"
                            name={[name, 'title']}
                            rules={[
                              {
                                required: true,
                                message: 'Please input Title',
                              },
                            ]}
                          >
                            <Input placeholder="Title" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label="Price"
                            name={[name, 'price']}
                            rules={[
                              {
                                required: true,
                                type: 'number',
                                message: 'Please input Price',
                              },
                            ]}
                          >
                            <InputNumber placeholder="Price" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label="Day(s)"
                            name={[name, 'numOfDays']}
                            rules={[
                              {
                                required: true,
                                type: 'number',
                                message: 'Please input Number of Days',
                              },
                            ]}
                          >
                            <InputNumber placeholder="Days" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label="Quantity"
                            name={[name, 'qnt']}
                            rules={[
                              {
                                required: true,
                                type: 'number',
                                message: 'Please input Quantity',
                              },
                            ]}
                          >
                            <InputNumber placeholder="Quantity" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label="Max Guests"
                            name={[name, 'maxGuests']}
                            rules={[
                              {
                                required: true,
                                type: 'number',
                                message: 'Please input Max Guests',
                              },
                            ]}
                          >
                            <InputNumber placeholder="Max Guests" />
                          </Form.Item>
                          <Form.Item wrapperCol={{ offset: 6, span: 5 }}>
                            <Button icon={<DeleteOutlined />} onClick={() => deleteCartItem(order.cart[key].key)} />
                          </Form.Item>
                        </Col>
                        <Divider />
                      </Row>
                    </Space>
                  )
                  )
                )}
              </Form.List>
            </div>


            <Form.Item {...tailFormItemLayout}>
              <Row gutter={8}>
                <Col span={6}>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Col>
                <Col span={6}>
                  <Button onClick={() => actions.deleteOrder(book.key)}>
                    Delete
                  </Button>
                </Col>
              </Row>

            </Form.Item>
          </Form>
        </div>
        <Image className='col-5' style={{ mixBlendMode: "multiply" }} width={420} src='https://img.freepik.com/premium-vector/illustration-reservation-booking-order-purchases-hotel-room-apartment-mobile-apps-services-traveling-trip_4968-762.jpg' />
      </div>

      <Modal title="System Message" open={isModal} onCancel={() => setModal(false)} footer={[
        <Button onClick={() => navigate('/api/admin/book')} key="link">
          Return
        </Button>,
        <Button key="btn" onClick={() => setModal(false)} type="primary">OK</Button>,
      ]}
      >
        <p>Update Order Successfully..</p>
        <p>Come back to the list to see any changes or continue to add another one!</p>
      </Modal>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(OrderAction, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OrderDetail);
