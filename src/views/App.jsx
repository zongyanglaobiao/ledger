import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {AUTH_PATH, HOME_PATH} from "@/router/index.jsx";
import {useToken} from "@/hook/useToken.jsx";


export default function App() {
    const navigate = useNavigate();
    const {isLogin} = useToken();

    useEffect(() => {
        if (isLogin) {
            navigate(HOME_PATH)
            return
        }
        navigate(AUTH_PATH)
    },[isLogin])
    return (
        <div className='w-full h-full'>
            <Outlet/>
        </div>
    )
}
