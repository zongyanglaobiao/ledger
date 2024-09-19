import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {AUTH_PATH, HOME_PATH} from "@/router/index.jsx";
import {useSelector} from "react-redux";


export default function App() {
    const navigate = useNavigate();
    const authorize = useSelector(state => state.authorize);
    useEffect(() => {
        if (authorize) {
            navigate(HOME_PATH)
            return
        }
        navigate(AUTH_PATH)
    },[authorize])
    return (
        <div className='w-full h-full'>
            <Outlet/>
        </div>
    )
}
