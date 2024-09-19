import {useRouteError} from "react-router-dom";
import {ErrorBlock} from "antd-mobile";

const ErrorBoundary = () => {
    let error = useRouteError();
    return (
        <div className='flex w-full h-100vh justify-center items-center text-red-6'>
            <ErrorBlock status='default' />
        </div>
    )
}

export default ErrorBoundary