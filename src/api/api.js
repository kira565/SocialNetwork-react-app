import * as axios from "axios";
// DAL LOGIC (SERVER API)
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": '10087455-f409-4415-bd6b-c34792abf90f'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, totalPageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${totalPageSize}`)
            .then(response => { 
                return response.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }

};
export const authAPI = {
    getUserAuthData () {
       return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    loginUser (email, password, rememberMe ) {
     return instance.post(`auth/login`, {email:email, password:password, rememberMe:rememberMe })
         .then(response => {
             return response.data
         })
    },
    logoutUser() {
        return instance.post(`auth/logout`)
            .then(response => {
                return response.data
            })
    },
    getCapcha () {
        return instance.get(`security/get-captcha-url`)
            .then(response =>{
                return response.data
            })
    }

};
export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response
            })
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response
            })
    },
    updateUserStatus (status) {
        return instance.put(`profile/status/`, {status:status})
            .then(response => {
                return response
            })
    }
};