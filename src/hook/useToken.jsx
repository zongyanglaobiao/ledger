import {useSelector} from "react-redux";
import {getToken} from "@/lib/toolkit/local.storage.js";
import {isBlank} from "@/lib/toolkit/util.js";

export const useToken = () => {
    const authorize = useSelector(state => state.authorize);
    return {
        isLogin: authorize || !isBlank(getToken()),
        token: getToken()
    }
}