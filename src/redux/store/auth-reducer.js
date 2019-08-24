import {authAPI} from "../../api/api";
import {stopSubmit} from 'redux-form'

/**
 * Created by Kira on 04.06.2019.
 */
const SET_USER_DATA = 'SET_USER_DATA_ILE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    rememberMe: false   // not realized
};

const authReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state

    }
};

export const setUserAuthData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });
export default authReducer


export const getUserAuthData = () => (dispatch) => {
      return authAPI.getUserAuthData()  // RETURN здесь чтобы вернуть промис
          .then(response => {
              if (response.data.resultCode === 0){
                  let {id, login, email} = response.data.data;
                  dispatch(setUserAuthData(id, email, login, true));
              }
          });
};

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserAuthData())
                }
                if (data.resultCode === 1) {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong';
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        authAPI.logoutUser()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserAuthData(null, null, null, false))
                }
            })
    }
};