import {TabBar} from "antd-mobile/2x";
import {Home, User} from "@icon-park/react";
import {Button} from "antd-mobile";
import {getLedger} from "@/http/api/ledger.api.js";
import {showText} from "@/lib/toolkit/toast.js";

export default () => {
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <Home theme="outline" size="30" fill="#9b9b9b" strokeWidth={1}/>,
        },
        {
            key: 'personalCenter',
            title: <div className='text-sm'>我的</div>,
            icon: <User theme="outline" size="30" fill="#9b9b9b" strokeWidth={1}/>,
        },
    ]

    return (
        <div className='w-full h-vh layout-center bg-[#fafbfc]'>
            <TabBar className='w-full h-49px fixed bottom-0 border-t-solid  border-0.5px border-gray'>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    );
}

