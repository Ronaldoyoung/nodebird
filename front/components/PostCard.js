import React , { useState, useCallback } from 'react';
import {Card , Icon, Button, Avatar, Form, List, Comment, Input} from 'antd';
import PropTypes from 'prop-types';
import { useSelector , useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';


const PostCard = ({post}) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);

  }, []);

  const onSubmitComment = useCallback((e) => {
    e.preventDefault();
    if(!me){
      return alert('???? ?????.');
    }
    dispatch({
      type : ADD_COMMENT_REQUEST,
    })
  }, []);

  const onChangeCommnetText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <div>
    <Card
      key={+post.createAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retwwet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" onClick={onToggleComment}/>,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />

    </Card>
      {commentFormOpened && (
        <>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea row={4} value={commentText} onChange={onChangeCommnetText} />
            </Form.Item>
            <Button type='primary' htmlType="submit">??</Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} ??`}
            itemLayout ='horizontal'
            dataSource={post.Comment || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                  datetime={item.createAt}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
  )
}

PostCard.PropTypes = {
  post : PropTypes.shape({
    User : PropTypes.object,
    content : PropTypes.string,
    img: PropTypes.string,
    createAt:PropTypes.object,
  }),
}

export default PostCard;