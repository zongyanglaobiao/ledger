import reactSvg from '@/assets/react.svg';
import viteSvg from '@/assets/vite.svg';
import {Button} from "antd-mobile";
import {useNavigate} from "react-router-dom";
import {AUTH_PATH} from "@/router/index.jsx";

const Home = () => {
    const navigate = useNavigate();
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
                <Button onClick={()=>navigate(AUTH_PATH)}>
                    跳转
                </Button>
            </div>
        </div>
    );
}

export default Home;