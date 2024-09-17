export const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            //this 指向调用debounce的this
            func.apply(this, args);
        }, delay);
    };
};

