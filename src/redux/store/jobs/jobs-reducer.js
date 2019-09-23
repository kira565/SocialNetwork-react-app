import {jobsAPI} from "../../../api/api";

/**
 * Created by Kira on 04.06.2019.
 */
const SET_ADS = 'jobs/FOLLOW_USER';
const TOGGLE_FETCHER = 'jobs/TOGGLE_FETCHER';
const SET_ADS_TOTAL_COUNT = 'jobs/SET_ADS_TOTAL_COUNT';
//const SET_CURRENT_PAGE = 'jobs/SET_CURRENT_PAGE';


let initialState = {
    jobsData: [],
    totalAdsCount: 0,
    totalPageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
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
        default:
            return state
    }

};

//ActionCreators
export const setAds = (ads) => ({type: SET_ADS, ads});
export const setAdsTotalCount = (count) => ({type: SET_ADS_TOTAL_COUNT, count});
export const toggleFetcherJobs = (isFetching) => ({type: TOGGLE_FETCHER, isFetching});
//export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

//export default jobsReducer


//REDUX-THUNK functions
export const getAds = (currentPage, totalPageSize, language) => async (dispatch) => {
    dispatch(toggleFetcherJobs(true));
    let data = await jobsAPI.getAds(currentPage, totalPageSize, language);
    dispatch(toggleFetcherJobs(false));
    dispatch(setAds(data.results));
    dispatch(setAdsTotalCount(data.count))
};