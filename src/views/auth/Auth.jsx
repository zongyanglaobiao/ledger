import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HOME_PATH} from "@/router/index.jsx";
import {useNavigate} from "react-router-dom";
import {Button, Input, Space} from "antd-mobile";
import Bg from '@/assets/stacked-peaks-haikei.svg'
import {AUTHORIZE_SUCCESS, authorizeAction, setToken} from "@/redux/feature/authorize.js";

export default function Auth() {
    const authorize = useSelector(state => state.authorize);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const input = useRef();

    useEffect(() => {
        authorize && navigate(HOME_PATH)
    }, [authorize]);

    const getInputText = () => {
        return input.current.input.value
    }

    return (
        <div style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: 'cover', // 让背景图覆盖整个容器
            backgroundRepeat: 'no-repeat', // 防止背景图重复
            backgroundPosition: 'center', // 将背景图居中
            height: '100vh', // 确保 div 的高度与视口一致
            width: '100%' // 设置宽度为100%
        }} >
            <Space className='h-vh w-full' align={"center"} justify={"center"} direction={'vertical'}>
                <Input ref={input} style={{'--text-align': 'center'}} placeholder='请输入密文以此来使用' clearable  />
                <Button className='w-15rem mt-5px' onClick={()=>{
                    setToken()
                    dispatch(authorizeAction())
                }}>校验</Button>
            </Space>
        </div>
    )
}