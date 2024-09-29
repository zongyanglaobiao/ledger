import {Home, User} from "@icon-park/react";
import {List, TabBar} from "antd-mobile/2x";
import './home.css';
import {useState} from "react";
import {SeoFolder} from "@icon-park/react/es";

function UserHome() {
    const [data, setData] = useState((()=>{
        const arr = []
        for (let i = 2000; i < 2025; i++) {
            arr.push(i)
        }
        return arr;
    })())
    const [hasMore, setHasMore] = useState(true)


    let count = 0
    async function mockRequest() {
        if (count >= 5) {
            return []
        }
        await new Promise(resolve => setTimeout(resolve, 2000))
        count++
        return [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
        ]
    }

    async function loadMore() {
        const append = await mockRequest()
        setData(val => [...val, ...append])
        setHasMore(append.length > 0)
    }

    return (
        <div>
            <List>
                {data.map((item, index) => (
                    <List.Item
                        prefix={<SeoFolder theme="multi-color" size="40" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={1}/>}
                        key={index}>
                        <p className='text-18px'>
                            {item}
                        </p>
                    </List.Item>
                ))}
            </List>
            {/*<InfiniteScroll loadMore={loadMore} hasMore={hasMore} />*/}
        </div>
    )
}

function UserSetting() {
    return (
        <div>设置</div>
    )
}

export default () => {
    const [isUserHome, setUserHome] = useState(true);
    const USER_HOME_KEY = "USER_HOME_KEY"
    const USER_CENTER_KEY = "USER_CENTER_KEY"

    const tabs = [
        {
            key: USER_HOME_KEY,
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
            key: USER_CENTER_KEY,
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

    const onChange = (key) => {
        setUserHome(key === USER_HOME_KEY);
    }

    return (
        <div className='w-vw h-vh layout-center bg-[#fafbfc] grid'>
            <div className='overflow-auto w-full h-full'>
                {isUserHome ? <UserHome/> : <UserSetting/>}
            </div>
            <TabBar
                onChange={onChange}
                className='w-vw m-0 p-0 border-t-solid border-0.5px border-gray'>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} title={item.title}/>
                ))}
            </TabBar>
        </div>

    );
}



