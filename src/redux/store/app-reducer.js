/**
 * Created by Kira on 04.06.2019.
 */
import {getUserAuthData} from "./auth/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state

    }
};

export const initializedSuccess  = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserAuthData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer