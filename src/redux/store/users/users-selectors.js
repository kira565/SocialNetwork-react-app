import {createSelector} from "reselect";

const getUsersPagesSelector = (state) => {
    return state.usersPage.userData;
};
export const getUsersPage = createSelector(getUsersPagesSelector, (users) => { //Тестовый реселлект и фейковый фильтр
   return users.filter(u => true)
});


export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
};
export const getTotalPageSize = (state) => {
    return state.usersPage.totalPageSize
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};
export const getFetching = (state) => {
    return state.usersPage.isFetching
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress
};