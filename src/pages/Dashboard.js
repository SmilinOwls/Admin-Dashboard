import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

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
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-content-center gap-3'>
        <div className='d-flex flex-grow-1 justify-content-between align-o bg-white p-3 rounded-3 p-3'>
          <div>
            <p>Total</p> <h4 className='sub-title'>$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 style={{ color: 'red' }}><BsArrowDownRight /> 32%</h6>
            <p className='desc'>Compared to April 2023</p>
          </div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-o bg-white p-3 rounded-3 p-3'>
          <div>
            <p>Total</p> <h4 className='sub-title'>$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 style={{ color: 'green' }}> <BsArrowUpRight /> 32%</h6>
            <p className='desc'>Compared to April 2023</p>
          </div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-o bg-white p-3 rounded-3 p-3'>
          <div>
            <p>Total</p> <h4 className='sub-title'>$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 style={{ color: 'red' }}><BsArrowDownRight /> 32%</h6>
            <p className='desc'>Compared to April 2023</p>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h3 className='my-2 title'>Income Statistics</h3>
        <Column {...config} />
      </div>
      <div className='mt-3'>
        <h3 className='my-2 title'>Recent Orders</h3>
        <Table columns={columns} dataSource={data_}/>
      </div>
    </div>
  )
}

export default Dashboard