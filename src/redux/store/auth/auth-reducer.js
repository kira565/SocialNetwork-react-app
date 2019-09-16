import {authAPI} from "../../../api/api";
import {stopSubmit} from 'redux-form'

/**
 * Created by Kira on 04.06.2019.
 */
const SET_USER_DATA = 'auth/SET_USER_DATA_ILE';

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

export const setUserAuthData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
});
export default authReducer


export const getUserAuthData = () => async (dispatch) => {
    let response = await authAPI.getUserAuthData();  // RETURN здесь чтобы вернуть промис
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserAuthData(id, email, login, true));
    }

};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.loginUser(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getUserAuthData())
    }
    if (data.resultCode === 1) {
        let message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong';
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logoutUser();

    if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
};