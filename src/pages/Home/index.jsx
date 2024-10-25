import React from 'react'
import styles from './home.module.css'
import { Button, Inputs, Modal, ToolTip } from '@/components'
//import { Header, Footer, Navbar } from '@/layout'
import { Layout } from 'antd';
import {Sidebar} from '@/layout'; // Import Sidebar component

const { Header, Content } = Layout;
const index = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar /> {/* Sử dụng Sidebar component */}
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Content Area
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};


export default index
