import request from "@/http/http.request.js";

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo() {
    return request.get(`/api/user/getUserInfo`);
}

/**
 * 注册
 * @param {object} params UserEntity_REGISTER
 * @param {string} params.nickname
 * @param {string} params.password
 * @param {string} params.mail
 * @returns
 */
export function register(params) {
    return request.post(`/api/auth/register`, params);
}

/**
 * 登录
 * @param {object} params UserEntity_LOGIN
 * @param {string} params.password
 * @param {string} params.mail
 * @returns
 */
export function userLogin(params) {
    return request.post(`/api/auth/login`, params);
}