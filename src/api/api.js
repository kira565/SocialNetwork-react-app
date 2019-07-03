import * as axios from "axios";
// DAL LOGIC (SERVER API)
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": 'b2ed0cd7-1d26-446b-ad8a-a1ed766e42bc' //настройки безопасности
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
export const headerAPI = {
    getUserAuthData () {
       return instance.get(`auth/me`)
            .then(response => {
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
    inputStatus (userId) {
        return instance.put(`profile/status/${userId}`)
            .then(response => {
                return response
            })
    }
};