import {usersAPI} from "../../../api/api";
import {objUpdater} from "../../../utils/obj-helpers";

/**
 * Created by Kira on 04.06.2019.
 */
const FOLLOW_USER = 'users/FOLLOW_USER';
const UNFOLLOW_USER = 'users/UNFOLLOW_USER';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHER = 'users/TOGGLE_FETCHER';
const TOGGLE_FOLLOWING = 'users/TOGGLE_FOLLOWING';

let initialState = {
    userData: [
        /*{
            id: 1,
            firstName: 'Aishe',
            secondName: 'Sen',
            status: 'in love with Kira...',
            location: {
                country: 'Turkey',
                city: 'Lefke'
            },
            avatar: 'https://pp.userapi.com/c845321/v845321041/f5536/71hs5KPpYsk.jpg',
            followed: true
        },
        {
            id: 2,
            firstName: 'Denis',
            secondName: 'Kovalev',
            status: 'in love with the Beer...',
            location: {
                country: 'Russian Federation',
                city: 'Ukhta'
            },
            avatar: 'http://img10.reactor.cc/pics/post/gachimuchi-Billy-Herrington-Mark-Wolff-danny-lee-5053896.jpeg',
            followed: false
        },
        {
            id: 3,
            firstName: 'Nikolay',
            secondName: 'Statsenko',
            status: '8 years past... still no sex',
            location: {
                country: 'Russian Federation',
                city: 'Ukhta'
            },
            avatar: 'https://pp.userapi.com/c637226/v637226625/96eb/mxsfdx7XoCE.jpg',
            followed: false
        },
        {
            id: 4,
            firstName: 'Alexey',
            secondName: 'Filippov',
            status: 'ops, it was my poo',
            location: {
                country: 'Russian Federation',
                city: 'Ukhta'
            },
            avatar: 'https://pp.userapi.com/c849220/v849220377/197f99/WbhCMEjhONE.jpg',
            followed: false
        }*/
    ],
    totalUserCount: 0,
    totalPageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};

//Reducer Logic
const userReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                userData: objUpdater(state.userData, action.id, true)
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                userData: objUpdater(state.userData, action.id, false)
            };
        case SET_USERS:
            return {
                ...state,
                userData: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            };
        case TOGGLE_FETCHER:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state

    }


};

//ActionCreators
export const followSuccesfull = (id) => ({type: FOLLOW_USER, id});
export const unfollowSuccessfull = (id) => ({type: UNFOLLOW_USER, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleFetcher = (isFetching) => ({type: TOGGLE_FETCHER, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId});
export default userReducer


//REDUX-THUNK functions
export const getUsers = (currentPage, totalPageSize) => async (dispatch) => {
    dispatch(toggleFetcher(true));
    let data = await usersAPI.getUsers(currentPage, totalPageSize);
    dispatch(toggleFetcher(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
};
export const follow = (id) => async (dispatch) => {
    followUnfollowFlow(id, dispatch, usersAPI.followUser.bind(usersAPI), followSuccesfull)

};
export const unfollow = (id) => async (dispatch) => {
    followUnfollowFlow(id, dispatch, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccessfull)
};


const followUnfollowFlow = async (id, dispatch, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id));
};