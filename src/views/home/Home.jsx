import {TabBar} from "antd-mobile/2x";
import {Home, User} from "@icon-park/react";
import './home.css'
import {Route, Router, Routes} from "react-router-dom";

function UserHome() {
    return (
        <div>
            首页
        </div>
    )
}

function UserSetting() {
    return (
        <div>
            用户设置
        </div>
    )
}

export default () => {
    const tabs = [
        {
            key: 'home',
            title: (isActive) => {
                return (
                    <div className='flex flex-col items-center '>
                        {
                            isActive ?
                                <Home className='leading-0' theme="multi-color" size="25" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} strokeWidth={1}/>
                                :
                                <Home className='leading-0' theme="outline" size="25" fill="#9b9b9b" strokeWidth={1}/>
                        }
                        <div className='text-sm'>首页</div>
                    </div>
                )
            },
        },
        {
            key: 'personalCenter',
            title: (isActive) => {
                return (
                    <div className='flex flex-col items-center'>
                        {
                            isActive ?
                                <User className='leading-0' theme="multi-color" size="25" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} strokeWidth={1}/>
                                :
                                <User className='leading-0' theme="outline" size="25" fill="#9b9b9b" strokeWidth={1}/>
                        }
                        <div className='text-sm'>我的</div>
                    </div>
                )
            }
        },
    ]

    return (
        <div className='w-full h-vh layout-center bg-[#fafbfc]'>
            <Routes>
                <Route path='/home/user-home' element={<UserHome/>}/>
                <Route path='/home/user-setting' element={<UserSetting/>}/>
            </Routes>
            <TabBar
                className='w-full h-49px  fixed bottom-3px m-0 p-0 border-t-solid  border-0.5px border-gray'>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} title={item.title}/>
                ))}
            </TabBar>
        </div>
    );
}



