import { Button, Menu } from 'antd';
import React from 'react';
import '../Styles/Common.css';
const Header = () => {
  return (
    <Menu
      mode='horizontal'
      className='nav'
      // style={{ boxShadow: ` 1px 2px 3px rgba(0, 0, 0, 0.1)` }}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <div>
          <h2>ATools</h2>
        </div>
        <div style={{ display: `flex` }} className='btn-hide'>
          <Menu.Item>
            <Button style={{ width: '150px' }} type='primary'>
              Start free trail
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button
              style={{
                width: '150px',
              }}
              className='login-btn'
            >
              login
            </Button>
          </Menu.Item>
        </div>
      </div>
    </Menu>
  );
}

export default Header