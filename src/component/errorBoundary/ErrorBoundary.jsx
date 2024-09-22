import {useRouteError} from "react-router-dom";
import {ErrorBlock} from "antd-mobile";

const ErrorBoundary = () => {
    let error = useRouteError();
    console.log('系统错误：',error)
    return (
        <div className='flex w-full h-100vh justify-center items-center text-red-6'>
            <ErrorBlock status='default' />
        </div>
    )
}

export default ErrorBoundary