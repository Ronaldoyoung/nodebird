import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST } from '../reducers/user';


function loginAPI() {
  //서버에 요청을 보내는 부분
}

function* login() {
  try{
    yield call(loginAPI);
    yield put({
      type:LOG_IN_SUCCESS
    })
  }catch(e){
    console.error(e);
    yield put( {
      type:LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST , login);
}

function signUpAPI() {
  //서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* signUp() {
  try{
    yield call(signUpAPI);
    yield put({
      type:SIGN_UP_SUCCESS
    })
  }catch(e){
    console.error(e);
    yield put( {
      type:SIGN_UP_FAILURE
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