import axios from "axios";

// const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f1558e56-8f04-4e51-b35f-aecdba3a8ed8",
  },
});

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance
//     .get(`users?page=${currentPage}&count=${pageSize}`)
//     .then((response) => {
//       return response.data;
//     });
// };

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data.resultCode;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data.resultCode;
    });
  },
};
export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  isAuth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
