import { all, fork, takeEvery, call, put, delay, Error } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST , SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../reducers/user';


function loginAPI() {
  //서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* login() {
  try{
    // yield call(loginAPI);
    yield delay(2000);
    yield put({
      type:LOG_IN_SUCCESS
    })
  }catch(e){
    console.error(e);
    yield put( {
      type:LOG_IN_FAILURE,
      error: e,
    })
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST , login);
}

function signUpAPI() {
  //서버에 요청을 보내는 부분
}

function* signUp() {
  try{
    // yield call(signUpAPI);
    yield delay(2000);
    throw new Error('에러에러에러');
    yield put({
      type:SIGN_UP_SUCCESS
    })
  }catch(e){
    console.error(e);
    yield put( {
      type:SIGN_UP_FAILURE
      // error: e
    })
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}