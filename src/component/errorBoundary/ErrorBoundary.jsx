import {useRouteError} from "react-router-dom";

const ErrorBoundary = () => {
    let error = useRouteError();
    return <div className='flex w-full h-100vh justify-center items-center text-red-6'>错误: {error.message}</div>;
}

export default ErrorBoundary