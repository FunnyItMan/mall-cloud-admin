import axios from "axios";

//创建axios实例
const axiosInstance = axios.create({
    baseURL: "",
    timeout: 15000
})

//请求拦截器
axiosInstance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})

//响应拦截器
axiosInstance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error);
})

export default axiosInstance;