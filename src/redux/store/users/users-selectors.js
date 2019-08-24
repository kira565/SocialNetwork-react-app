export const getUsersPages = (state) => {
    return state.usersPage.userData;
};
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