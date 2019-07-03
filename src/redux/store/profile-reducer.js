import {profileAPI} from "../../api/api";

/**
 * Created by Kira on 29.05.2019.
 */
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    profile: null,
    status: null,
    postData: [
        {id: 1, message: 'Hello, bro?', like_count: 33},
        {id: 2, message: 'what about cup of rage??', like_count: 55},
        {id: 3, message: 'flame you hard ha-ha?', like_count: 36},
        {id: 4, message: 'no likes for you?', like_count: 35},
        {id: 5, message: 'yo?', like_count: 32},
        {id: 6, message: 'answer?', like_count: 34}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {id: 9, message: state.newPostText, like_count: 0}],
                newPostText: ''
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.postText
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
        default:
            return state;
    }
};
export const addPost = () => ({type: ADD_POST});
export const updatePostText = (postText) => ({type: UPDATE_POST, postText});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export default profileReducer

//redux-thunk

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            });
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
};