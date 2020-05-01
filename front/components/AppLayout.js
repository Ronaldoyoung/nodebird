import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col} from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const dummy = {
  nickname:'지미',
  Post : [],
  Following: [],
  Followers: [],
  isLoggedIn: false,
}

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn?
            <UserProfile />
          :
            <LoginForm/>}
            {/* <Link href="/signup"><a><Button>회원가입</Button></a></Link> */}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
            Made by Jimmy
        </Col>
      </Row>
    </div>
  );
};

AppLayout.PropTypes = {
  children : PropTypes.node,
}

export default AppLayout;
