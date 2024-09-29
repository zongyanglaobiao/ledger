import {Home, User} from "@icon-park/react";
import {List, TabBar} from "antd-mobile/2x";
import './home.css';
import {memo, useEffect, useState} from "react";
import {SeoFolder} from "@icon-park/react/es";
import {useFetch} from "@/hook/useFetch.jsx";
import {getLedger} from "@/http/api/ledger.api.js";
import {isNullOrUndefined} from "@/lib/toolkit/util.js";
import {Navigate, Route, Routes, useRoutes} from "react-router-dom";

function LedgerList({data,call,onClick}) {
    return (
        <List>
            {
                data.map((item, index) => (
                    <List.Item
                        arrowIcon={false}
                        className='h-49px'
                        style={{
                            paddingLeft: '10px'
                        }}
                        onClick={()=> !isNullOrUndefined(onClick) && onClick(item)}
                        prefix={<SeoFolder className='layout-center' theme="multi-color" size="33" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} strokeWidth={1}/>}
                        key={index}>
                        <div className='h-full leading-23px text-23px'>{call(item)}</div>
                    </List.Item>
                ))
            }
        </List>
    )
}

const UserHome = memo(()=>{
    const [getLedgerRe,setLedger] = useFetch(getLedger,{data:{records: []}});

    useEffect(() => {
        setLedger({isAsc:true,size:100})
    }, []);

    const getRenderData = () => {
      return getLedgerRe.data.records.length > 0 ? getLedgerRe.data.records : [{
          //获取当前所在年份
          year: new Date().getFullYear()
      }];
    }
    return <LedgerList data={getRenderData()} call={t=>t.year} onClick={(i)=>console.log(i)}/>
})

function A() {
    return <div>123</div>
}


function UserSetting() {
    const reactElement = useRoutes([
        {
            element: <A/>,
            path: 'user-setting'
        }
    ]);

    return (
        <>
            <Routes>
                <Route path='user-setting' element={<A/>}/>
            </Routes>
            <Navigate to='/home/user-setting'/>
        </>
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
        <div className='w-vw h-vh layout-center bg-[#fafbfc] grid grid-rows-[1fr_auto]'>
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



