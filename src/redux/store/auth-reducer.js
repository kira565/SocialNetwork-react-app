import {authAPI} from "../../api/api";
import {stopSubmit} from 'redux-form'

/**
 * Created by Kira on 04.06.2019.
 */
const SET_USER_DATA_ILE = 'SET_USER_DATA_ILE';
const LOGIN_SET_ID = 'LOGIN_SET_ID';

let initialState = {
    userId: null,
    userLogin: null,
    userEmail: null,
    isAuth: false,
    rememberMe: false   // not realized
};

const authReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case SET_USER_DATA_ILE:
            return {
                ...state,
                userId: action.userId,
                userLogin: action.userLogin,
                userEmail: action.userEmail,
                isAuth: action.isAuth,
            };
        case LOGIN_SET_ID: {
            return {
                ...state,
                userId: action.userId,
                userEmail: action.userEmail,
                isAuth: true
            }
        }
        default:
            return state

    }
};

export const setUserAuthData = (userId, userLogin, userEmail, isAuth) => ({type: SET_USER_DATA_ILE, userId, userLogin, userEmail, isAuth});
export const loginSetId = (userId, email) => ({type: LOGIN_SET_ID, userId, email});
export default authReducer


export const getUserAuthData = () => {
  return (dispatch) => {
      authAPI.getUserAuthData()
          .then(data => {
              if (data.resultCode === 0){
                  let id = data.data.id;
                  let login = data.data.login;
                  let email = data.data.email;
                  dispatch(setUserAuthData(id, login, email, true));
              }
          });
  }
};

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(loginSetId(data.data.userId, email))
                }
                if (data.resultCode === 10) {
                    authAPI.getCapcha();
                    alert('u got a capcha. Coming soon, pls use for re-login https://social-network.samuraijs.com')
                }
                if (data.resultCode === 1) {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong';
                    let action = stopSubmit("login", {_error: message});
                    dispatch(action);
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