import {useDispatch, useSelector} from "react-redux";
import {getToken, removeToken, setToken} from "@/lib/toolkit/local.storage.js";
import {isBlank} from "@/lib/toolkit/util.js";
import {authorizeAction} from "@/redux/feature/authorize.js";

export const useToken = () => {
    const authorize = useSelector(state => state.authorize);
    const dispatch = useDispatch();

    return {
        isLogin: authorize || !isBlank(getToken()),
        token: getToken(),
        logout: () => {
            removeToken();
            dispatch(authorizeAction())
        },
        login: (token) => {
            setToken(token)
            dispatch(authorizeAction())
        }
    }
}