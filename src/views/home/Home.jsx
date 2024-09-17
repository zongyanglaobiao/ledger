import reactSvg from '@/assets/react.svg';
import viteSvg from '@/assets/vite.svg';

const Home = () => {
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
            </div>
        </div>
    );
}

export default Home;