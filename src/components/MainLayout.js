import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaBloggerB, FaHotel } from 'react-icons/fa';
import { MdBedroomParent, MdPlace } from 'react-icons/md';
import { LuClipboardList } from 'react-icons/lu';
import { BiCategory } from 'react-icons/bi';

import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
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
              Navigate(key);
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
                {
                  key: 'site',
                  icon: <MdPlace className="fs-4" />,
                  label: 'Site'
                }
              ]
            },
            {
              key: 'blog',
              icon: <FaBloggerB className="fs-4" />,
              label: 'Blog',
            },
            {
              key: 'order',
              icon: <LuClipboardList className="fs-4" />,
              label: 'Order',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout