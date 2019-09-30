import {jobsAPI} from "../../../api/api";

/**
 * Created by Kira on 04.06.2019.
 */
const SET_ADS = 'jobs/FOLLOW_USER';
const TOGGLE_FETCHER = 'jobs/TOGGLE_FETCHER';
const SET_ADS_TOTAL_COUNT = 'jobs/SET_ADS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'jobs/SET_CURRENT_PAGE';
const SET_FULL_TIME = 'jobs/SET_FULL_TIME';
const SET_KEYWORDS = 'jobs/SET_KEYWORDS';
const SET_FULLTIME = 'jobs/SET_FULLTIME';
const SET_MIN_SALARY = 'jobs/SET_MIN_SALARY';
const SET_MAX_SALARY = 'jobs/SET_MAX_SALARY';


let initialState = {
    isFetching: false,
    jobsData: [],
    keyWords: '',
    totalAdsCount: 0,
    totalPageSize: 20,
    currentPage: 1,
    minSalary: 0,
    maxSalary: 9999999,
    isFollowingInProgress: [],

};

//Reducer Logic
const jobsReducer = (state = initialState, action) => {// Initial default value
    switch (action.type) {
        case SET_ADS:
            return {
                ...state,
                jobsData: action.ads
            };
        case SET_ADS_TOTAL_COUNT:
            return {
                ...state,
                totalAdsCount: action.count
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_FETCHER:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_FULL_TIME:
            return {
                ...state,
                isFullTime: action.isFullTime ? 1 : 0
            };
        case SET_KEYWORDS:
            return {
                ...state,
                keyWords: action.keyWords,

            };
        case SET_FULLTIME:
            return {
                ...state,
                isFullTime: action.isFullTime
            };
        case SET_MAX_SALARY:
            return {
                ...state,
                maxSalary: Number(action.maxSalary) || 999999999
            };
        case SET_MIN_SALARY:
            return{
                ...state,
                minSalary: Number(action.minSalary) || 0
            };
        default:
            return state
    }

};

//ActionCreators
export const setAds = (ads) => ({type: SET_ADS, ads});
export const setAdsTotalCount = (count) => ({type: SET_ADS_TOTAL_COUNT, count});
export const toggleFetcherJobs = (isFetching) => ({type: TOGGLE_FETCHER, isFetching});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setKeyWords = (keyWords) => ({type: SET_KEYWORDS, keyWords});
export const setMinSalary = (minSalary) => ({type: SET_MIN_SALARY, minSalary});
export const setMaxSalary = (maxSalary) => ({type: SET_MAX_SALARY, maxSalary});


export default jobsReducer


//REDUX-THUNK functions
export const getAds = (currentPage, totalPageSize, keyWords, minSalary, maxSalary) => async (dispatch) => {
    dispatch(toggleFetcherJobs(true));
    let data = await jobsAPI.getAds(currentPage, totalPageSize, keyWords, minSalary, maxSalary);
    dispatch(toggleFetcherJobs(false));
    dispatch(setAds(data.results));
    dispatch(setAdsTotalCount(data.count));
};
