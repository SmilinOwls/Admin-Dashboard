import React, { useEffect } from 'react';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../actions/OrderAction';
import { getUser } from '../actions/UserAction';
import { getBlog } from '../actions/BlogAction';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { dateFormat } from '../utils/config';
function Dashboard() {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return '#ffd333';
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };

  const columns = [
    {
      title: "SNo",
      dataIndex: "_id",
    },
    {
      title: "Guest Number",
      dataIndex: "numOfGuest",
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
    },
    {
      title: "Tax Price",
      dataIndex: "taxPrice",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Paid At",
      dataIndex: "paidAt",
    }
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
    dispatch(getUser());
    dispatch(getBlog());
  }, [])

  const orders = useSelector(state => state.orders);
  const users = useSelector(state => state.users);
  const blogs = useSelector(state => state.blogs);
  const revenue = {};
  const diff = {};

  const calculate = () => {
    orders.forEach(order => {
      const year = dayjs(order.paidAt, dateFormat).year();
      const month = dayjs(order.paidAt, dateFormat).month();
      if (typeof revenue[year] === "undefined") {
        revenue[year] = {};
        diff[year] = {};
      }

      if (revenue[year][month] !== undefined) {
        revenue[year][month] += order.totalPrice;
      } else {
        revenue[year][month] = order.totalPrice;
      }

      diff[year][month] = revenue[year][month - 1] === undefined ? 100 : parseFloat(((revenue[year][month] - (revenue[year][month - 1])) / (revenue[year][month - 1])).toFixed(2));
    });
  };

  const styleIndex = (data) => ({
    color: data >= 0 ? 'green' : 'red'
  });

  const arrowOrientation = (data) => {
    return data >= 0 ? <BsArrowUpRight /> : <BsArrowDownRight />;
  };

  return (
    <div>
      {calculate()}
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-content-center gap-3 mb-3'>
        <div className='d-flex flex-grow-1 justify-content-between align-o bg-white rounded-3 p-3'>
          <div>
            <p>Users</p> <h4 className='sub-title'>{users.length}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 style={{ color: 'green' }}> <BsArrowUpRight /> 10%</h6>
            <p className='desc'><Link to='/api/user/admin'>View more</Link></p>
          </div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-o bg-white rounded-3 p-3'>
          <div>
            <p>Blogs</p> <h4 className='sub-title'>{blogs.length}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 style={{ color: 'green' }}> <BsArrowUpRight /> 20%</h6>
            <p className='desc'><Link to='/api/blog/admin'>View more</Link></p>
          </div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-o bg-white rounded-3 p-3'>
          <div>
            <p>Orders</p> <h4 className='sub-title'>{orders.length}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 style={{ color: 'green' }}> <BsArrowUpRight /> 15%</h6>
            <p className='desc'><Link to='/api/book'>View more</Link></p>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between align-content-center gap-3'>
          {Object.entries(revenue).map(([year, value]) => {
            return (
              Object.entries(value).map(([month, data], idx) => (
                <div key ={idx} className='d-flex flex-grow-1 justify-content-between align-o bg-white rounded-3 p-3'>
                  <div>
                    <p>Total</p> <h4 className='sub-title'>{data}</h4>
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <h6 style={styleIndex(diff[year][month])}>{arrowOrientation()} {diff[year][month]}%</h6>
                    <p className='desc'>{new Date(year, month).toLocaleString('default', {month: "long", year: "numeric"})}</p>
                  </div>
                </div>
                  )))
          })}
      </div>

        <div className='mt-3'>
          <h3 className='my-2 title'>Income Statistics</h3>
          <Column {...config} />
        </div>
        <div className='mt-3'>
          <h3 className='my-2 title'>Recent Orders</h3>
          <Table columns={columns} dataSource={orders} />
        </div>
      </div>
      )
}

      export default Dashboard