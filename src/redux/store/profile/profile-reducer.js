import {profileAPI} from "../../../api/api";

/**
 * Created by Kira on 29.05.2019.
 */
const ADD_POST = 'profile/ADD-POST';
const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
export const POST_ADDED_SUCCESSFUL_RESET = 'profile/POST_ADDED_SUCCESSFUL_RESET';

let initialState = {
    profile: null,
    status: null,
    postData: [
        {id: 1, message: 'Hello', like_count: 33},
        {id: 2, message: 'Hello2', like_count: 55},
        {id: 3, message: 'Post3', like_count: 36},
        {id: 4, message: 'Post4', like_count: 35},
        {id: 5, message: 'No', like_count: 32},
        {id: 6, message: 'answer?', like_count: 34}
    ],
};

const profileReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [{id: 9, message: action.post, like_count: 0}, ...state.postData],
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.postId)
            }
        }
        default:
            return state;
    }
};
export const addPost = (post) => ({type: ADD_POST, post});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const postAddedSuccessful = () => ({type: POST_ADDED_SUCCESSFUL_RESET});
export default profileReducer

//redux-thunk

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUsersProfile(response.data));

};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data))

};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
};
