const dummyUser = {
  nickname:'지미',
  Post : [],
  Following: [],
  Followers: [],
  isLoggedIn: false,
}

export const initialState = {
  isLoggedIn: false,
  user : null,
};

export const LOG_IN = 'LOG_IN'; //액션의 이름
export const LOG_OUT = 'LOG_OUT';


export const loginAction = {
  type : LOG_IN,
  data : {
    nickname: '제로초',
  }
};

export const logoutACtion = {
  type : LOG_OUT,
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case LOG_IN : {
      return {
        ...state,
        isLoggedIn:true,
        user: dummyUser,
      }
    }
    case LOG_OUT : {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    default : {
      return {
        ...state,
      };
    }
  }
}

export default reducer;