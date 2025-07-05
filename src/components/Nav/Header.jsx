import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
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
      />
      <Outlet />
    </>
  );
};

export default Header;
