import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone, InfoCircleTwoTone, AppstoreTwoTone, PhoneTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  const [current, setCurrent] = useState('h');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      key: 'h',
      icon: <HomeTwoTone />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'about',
      icon: <InfoCircleTwoTone />,
      label: <a href="#about">About</a>,
    },
    {
      key: 'services',
      icon: <AppstoreTwoTone />,
      label: <a href="#services">Services</a>,
    },
    {
      key: 'contact',
      icon: <PhoneTwoTone />,
      label: <a href="#contact">Contact</a>,
    },
    {
      key: 'r',
      icon: <EditTwoTone />,
      label: <Link to="/register">Register</Link>,
      style: { marginLeft: 'auto' },
    },
    {
      key: 'l',
      icon: <CheckCircleTwoTone />,
      label: <Link to="/login">Login</Link>,
    },
  ];

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          backgroundColor: '#7FFF00',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      />
      <Outlet />
    </>
  );
};

export default Header;
