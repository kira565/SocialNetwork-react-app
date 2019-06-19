/**
 * Created by Kira on 04.06.2019.
 */
const SET_USER_DATA_ILE = 'SET_USER_DATA_ILE';

let initialState = {
    userId: null,
    userLogin: null,
    userEmail: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case SET_USER_DATA_ILE:
            return {
                ...state,
                userId: action.userId,
                userLogin: action.userLogin,
                userEmail: action.userEmail,
                isAuth: true
            };
        default:
            return state

    }
};

export const setUserAuthData = (userId, userLogin, userEmail) => ({type: SET_USER_DATA_ILE, userId, userLogin, userEmail});
export default authReducer


