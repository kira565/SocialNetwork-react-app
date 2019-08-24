export const getUserId = (state) => {
    return state.userAuth.userId;
};
export const getUserLogin = (state) => {
    return state.userAuth.login;
};
export const getUserEmail = (state) => {
    return state.userAuth.email;
};
export const getUserAuth = (state) => {
    return state.userAuth.isAuth;
};