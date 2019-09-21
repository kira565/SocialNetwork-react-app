import * as axios from "axios";
// DAL LOGIC (SERVER API)
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": '6b6d74ef-66f5-44a7-9a49-81eebabb8a63'
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

};
export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus (status) {
        return instance.put(`profile/status/`, {status:status})
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);

        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    }
};