'use client'
import React, { useState } from 'react';
import {
    DashboardOutlined,
  FormOutlined,
  TableOutlined,
  UserOutlined,
  HighlightOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <DashboardOutlined />),
  getItem('Project', '2', <FormOutlined />),
  getItem('Employees', '3', <TableOutlined />, 
  // [
  //   // getItem('Tom', '3'),
  //   // getItem('Bill', '4'),
  //   // getItem('Alex', '5'),
  // ]
  ),
  getItem('Preference', '4', <UserOutlined />, 
  // [getItem('Team 1', '6'), getItem('Team 2', '8')]
  ),
  getItem('Compeliance', '5', <HighlightOutlined />),
];

  
 
  

const siderStyle = {
  textAlign: 'left',
  //lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  

};
const Sidebar = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    
    <div style={{marginLeft:'-100%'}}>
    <Layout
      style={{
        minHeight: '100vh',
        margin:'-85px',
      }}
    >
      <Sider  style={siderStyle}  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
      >
        
        <div  />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{
                height: '100%',
              }} items={items} />
      </Sider>
      
    </Layout>
    </div>
    
  );
};
export default Sidebar;
