import React , {useEffect} from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useDispatch , useSelector } from 'react-redux';
import {loginAction, logoutACtion,  LOG_IN } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const {user,isLoggedIn}  = useSelector( state => state.user);
  const { mainPosts } = useSelector( state => state.post);

  useEffect( () => {
    // dispatch(loginAction);
    // dispatch(logoutACtion);
    // dispatch(loginAction);

  } , []);

  return (
    <>
      {user ? <div>로그인 했습니다 : {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
      {isLoggedIn && <PostForm/>}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c} post ={c}/>
        )
      })}
    </>
  );
};

export default Home;
