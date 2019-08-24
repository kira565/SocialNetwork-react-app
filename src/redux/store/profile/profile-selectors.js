export const getProfilePage = (state) => {
    return state.profilePage.profile;
};
export const getUserStatus = (state) => {
    return state.profilePage.status;
};
export const getUserId = (state) => {
    return state.userAuth.userId;
};

export const getPostData = (state) => {
  return state.profilePage.postData;
};