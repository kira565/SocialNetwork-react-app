import {usersAPI} from "../../api/api";

/**
 * Created by Kira on 04.06.2019.
 */
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHER = 'TOGGLE_FETCHER';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

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

//Reduxer Logic
const userReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                userData: state.userData.map(el => {
                    if (el.id === action.id) return {
                        ...el,
                        followed: true
                    };
                    return el
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                userData: state.userData.map(el => {
                    if (el.id === action.id) return {
                        ...el,
                        followed: false
                    };
                    return el
                })
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
export const getUsers = (currentPage, totalPageSize) => {
    return (dispatch) => {
        dispatch(toggleFetcher(true));
        usersAPI.getUsers(currentPage, totalPageSize)
            .then(data => {
                dispatch(toggleFetcher(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            });
    }
};
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccesfull(id))
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
};
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccessfull(id))
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
};