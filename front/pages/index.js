import React from 'react';
import { Input, Button, Card, Icon , Avatar, Form } from 'antd';

const dummy = {
  isLoggedIn : true,
  imagePaths: [],
  mainPosts : [{
    User:{
      id:1,
      nickname:'제로초',
    },
    content:'첫 번째 게시글',
    img: ''
  }],
}


const Home = () => {
  return (
    <>
      {dummy.isLoggedIn && <Form encType='multipart/form-data'>
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?"></Input.TextArea>
        <div>
          <input type="file" multiple hidden/>
          <Button>이미지 업로드</Button>
          <Button type="primary" style ={{float:'right'}} htmlType="submit">짹짹</Button>
        </div>
        <div>
          {dummy.imagePaths.map((v,i) => {
            return (
              <div key={v} style={{ display : 'inline-block'}}>
                 <img src={'http://localhost:3065/' + v} style={{ width : '200px'}} alt={v} />
                 <div>
                   <Button>제거</Button>
                 </div>
              </div>
            )
          })}
        </div>
      </Form>
      }
      {dummy.mainPosts.map((c) => {
        return (
          <Card
            key={+c.createAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retwwet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />

          </Card>
        )
      })}
    </>
  );
};

export default Home;
