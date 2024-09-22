import {Toast} from "antd-mobile";

/**
 * 提示api
 */

function show(text, icon = '', call = () => {}) {
    // 先清除上一个 toast
    Toast.clear();
    // 显示 Toast
    Toast.show({
        content: text,
        icon: icon,
        duration: 1000,  // 显示时间
        afterClose: () => {
            call();  // 关闭后的回调
        },
    });
}

export function showError(text) {
    show(text,'fail')
}

export function showSuccess(text) {
    show(text,'success')
}

export function showText(text) {
    show(text)
}

