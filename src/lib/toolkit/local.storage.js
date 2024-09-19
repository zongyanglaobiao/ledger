import {isBlank} from "@/lib/toolkit/util.js";

const TOKEN_NAME = import.meta.env.VITE_REACT_APP_TOKEN_NAME

const getTokenName = () => {
    if (isBlank(TOKEN_NAME)) {
        throw new Error('TOKEN_NAME is null or undefined')
    }
    return TOKEN_NAME
}

const getToken = () => {
    return localStorage.getItem(getTokenName()) || ''
}

const setToken = (token) => {
    localStorage.setItem(getTokenName(), token)
}

const removeToken = () => {
    localStorage.removeItem(getTokenName())
}

const get = (key) => {
    return localStorage.getItem(key);
}

const set = (key,value) => {
    localStorage.setItem(key,value)
}

const remove = (key) => {
    localStorage.removeItem(key)
}

export {getTokenName, getToken, setToken, removeToken, get, set, remove}