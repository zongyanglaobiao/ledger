import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {HOME_PATH} from "@/router/index.jsx";


export default function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(HOME_PATH)
    },[navigate])
    return <Outlet/>
}
