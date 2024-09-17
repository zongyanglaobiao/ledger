import {useEffect, useState} from "react";
import {isNullOrUndefined} from "@/lib/toolkit/util.js";
import {debounce} from "@/lib/toolkit/debounce.js";

/**
 * 用于请求的HOOK
 * @param requestMethod 请求方法
 * @param initResp 初始响应
 * @param debounceTime 接口防抖时间
 * @returns response 请求返回值
 * @returns error 请求的错误
 * @returns setProxyMethodParam  设置代理请求方法的参数
 */
const useFetch = (requestMethod,initResp = null,debounceTime = 300) =>{
    //请求返回值
    const [response, setResponse] = useState(initResp)
    //代理方法的请求参数
    const [requestMethodParam, setRequestMethodParam] = useState(null)
    //捕获异常
    const [error, setError] = useState(null)
    //是否在请求中
    const [loading, setLoading] = useState(false)
    // 接口请求设置防抖
    const debouncedSetRequestMethodParam = debounce(setRequestMethodParam, debounceTime)
    //如果为NULL表示代理的方法不需要参数
    const setProxyMethodParam = (...param) => {
        debouncedSetRequestMethodParam(param.length === 0 ? [] : [...param]);
    }

    useEffect(() => {
        try {
            //避免初次渲染出现发送请求
            if (isNullOrUndefined(requestMethodParam)) {
                return
            }
            (async () => {
                setLoading(true)
                const resp = requestMethodParam.length === 0 ? await requestMethod() : await requestMethod(...requestMethodParam);
                setLoading(false)
                setResponse(resp)
            })()
        } catch (e) {
            setError(e)
        }
    }, [requestMethodParam]);

    return [
        response,
        setProxyMethodParam,
        loading,
        error
    ]
}

export {useFetch}