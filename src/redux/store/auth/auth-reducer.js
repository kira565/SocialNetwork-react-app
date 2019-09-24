import {authAPI} from "../../../api/api";
import {stopSubmit} from 'redux-form'

/**
 * Created by Kira on 04.06.2019.
 */
const SET_USER_DATA = 'auth/SET_USER_DATA_ILE';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA:
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
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA, payload:{captchaUrl}});
export default authReducer


export const getUserAuthData = () => async (dispatch) => {
    let response = await authAPI.getUserAuthData();
    if (response.data.resultCode === 0) {
        let {id, login, email, captcha} = response.data.data;
        dispatch(setUserAuthData(id, email, login, true, captcha));
    }

};

export const loginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.loginUser(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(getUserAuthData())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Something went wrong';
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logoutUser();

    if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await authAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl))
};