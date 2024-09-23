import reactSvg from '@/assets/react.svg';
import viteSvg from '@/assets/vite.svg';
import {Button} from "antd-mobile";
import {removeToken} from "@/lib/toolkit/local.storage.js";
import {useDispatch} from "react-redux";
import {authorizeAction} from "@/redux/feature/authorize.js";
import {getLedger} from "@/http/api/ledger.api.js";

const Home = () => {
    const dispatch = useDispatch()
    return (
        <div className='w-full h-vh layout-center'>
            <div className='flex flex-col'>
                <div className='layout-center w-full'>
                    <img src={reactSvg} alt="react" className='w-100px h-100px'/>
                    <img src={viteSvg} alt="vite" className='w-100px h-100px'/>
                </div>
                <div className='text-center text-2xl mt-20px'>
                    Hello,Vite-React
                </div>
                <Button onClick={()=>{
                    removeToken()
                    dispatch(authorizeAction())
                }}>
                    清除TOKEN
                </Button>
                <Button onClick={()=>{
                    getLedger()
                }}>
                    获取数据
                </Button>
            </div>
        </div>
    );
}

export default Home;