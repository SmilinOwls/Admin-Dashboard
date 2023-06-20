import React, { useState } from 'react'
import { useNavigate, Outlet, Link } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaBloggerB, FaHotel } from 'react-icons/fa';
import { MdBedroomParent } from 'react-icons/md';
import { LuClipboardList } from 'react-icons/lu';
import { BiCategory } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';

import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate();;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {collapsed ?
            <div className='text-white text-center py-3 fs-5'>B4T</div>
            :
            <div className='text-white text-center py-3 fs-5'>Booking4T</div>
          }
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === "signout") {

            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className="fs-4" />,
              label: 'Dashboard',
            },
            {
              key: 'user',
              icon: <UserOutlined className="fs-4" />,
              label: 'User',
            },
            {
              key: 'catalog',
              icon: <BiCategory className="fs-4" />,
              label: 'Catalog',
              children: [
                {
                  key: 'place',
                  icon: <FaHotel className="fs-4" />,
                  label: 'Place'
                },
                {
                  key: 'room',
                  icon: <MdBedroomParent className="fs-4" />,
                  label: 'Room'
                },
              ]
            },
            {
              key: 'blog',
              icon: <FaBloggerB className="fs-4" />,
              label: 'Blog',
            },
            {
              key: 'book',
              icon: <LuClipboardList className="fs-4" />,
              label: 'Order',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between ps-1 pe-3'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <div className='admin-box-container'>
            <div className="row">
              <div className="col col-md-auto position-relative d-flex justify-content-end" style={{ cursor: 'pointer' }}>
                <IoIosNotifications className="fs-2 mt-4" />
                <span className='badge bg-warning rounded-circle p-1 position-absolute' style={{ top: '20px', right: '10px' }}>3</span>
              </div>
              <div className="col col-md-auto">
                <UserOutlined className="fs-2" />
              </div>
              <div className="col col-md-auto">
                <h6 className='mt-2'>Admin</h6>
                <h6>admin01@gmail.com</h6>
              </div>
              <div className='col col-md-auto dropdown'>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1 z-2"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/api/admin"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1 z-2"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/signout"
                    >
                      Signout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout >
  );
};

export default MainLayout