import { Button, Menu } from 'antd';
import React from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Header = () => {
  return (
    <Menu
      mode='horizontal'
      style={{
        boxShadow: `1px 2px 3px rgba(0,0,0,0.1)`,
        flexDirection:"column"
      }}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h2>ATools</h2>
        </div>
        <div style={{ display: `flex` }}>
          <Menu.Item key='mail'>
            <Button style={{ width: '150px' }} type='primary'>
              Start free trail
            </Button>
          </Menu.Item>

          <Menu.Item key='alipay'>
            <Button style={{ width: '150px' }} type='info'>
              login
            </Button>
          </Menu.Item>
        </div>
      </div>
    </Menu>
  );
}

export default Header