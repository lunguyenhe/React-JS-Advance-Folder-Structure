// components/Sidebar.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;

// Tạo Sider với styled-components
const CustomSider = styled(Sider)`
  background-color: #f0f2f5;  /* Thay đổi màu nền */
  border-right: 1px solid rgba(0, 0, 0, 0.1); /* Thêm viền */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Thêm bóng đổ */
  border-radius: 10px;  /* Bo tròn góc */
  overflow: hidden; /* Đảm bảo nội dung bên trong không tràn ra ngoài */
  
  .ant-menu {
    background-color: #f0f2f5; /* Đồng bộ màu nền của Menu */
  }
  
  .ant-menu-item-selected {
    background-color: #d3d3d3 !important; /* Màu cho item được chọn */
  }
`;

const Sidebar = () => {
  return (
    <CustomSider collapsible>
      <div className="logo" style={{ height: '32px', margin: '16px', color: 'black', textAlign: 'center' }}>
        LOGO
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </CustomSider>
  );
};

export default Sidebar;
