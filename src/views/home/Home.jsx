import {Home, User} from "@icon-park/react";
import {AutoCenter, Collapse, List, TabBar} from "antd-mobile/2x";
import './home.css';
import {memo, useEffect, useState} from "react";
import {AddFour, SeoFolder} from "@icon-park/react/es";
import {useFetch} from "@/hook/useFetch.jsx";
import {getLedger, getLedgerByMonth, getLedgerByYear} from "@/http/api/ledger.api.js";
import {isNullOrUndefined} from "@/lib/toolkit/util.js";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Button, NavBar, Space} from "antd-mobile";

function LedgerList({data,call,onClick}) {
    return (
        <List>
            {
                data.map((item, index) => (
                    <List.Item
                        arrowIcon={false}
                        style={{
                            paddingLeft: '10px',
                            // height: '49px',
                            //TODO 高度问题
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

function LedgerMonth() {
    const location = useLocation();
    const [getLedgerByYearRe,setLedgerByYear] = useFetch(getLedgerByYear,{data:[]})
    const [getLedgerByMonthRe,setLedgerByMonth] = useFetch(getLedgerByMonth,{data:[]})
    const navigate = useNavigate();

    useEffect(() => {
        !isNullOrUndefined(location?.state?.year) && setLedgerByYear(location.state.year)
    }, [location]);

    return (
        <div className='grid grid-rows-[1fr_auto]'>
            <NavBar className='mt-10px mb-10px'  onBack={()=>{navigate('/home/ledger-year')}}>记账详细</NavBar>
            {/*<LedgerList data={getLedgerByYearRe.data} call={t=>`${t.month}月`} onClick={item=>{navigate('/home/ledger-day',{state:{year:location?.state?.year,month:item.month}})}}/>*/}
            <Collapse accordion>
                {
                    getLedgerByYearRe.data.map((t,index)=> {
                        return (
                            <Collapse.Panel className=' text-20px' onClick={()=> setLedgerByMonth(location.state.year,t.month)} key={index} title={`${t.month}月`}>
                                <Space  wrap horizontal>
                                    {
                                        /*getLedgerByMonthRe.data.map((t,i)=>{
                                            return (
                                                <Button size={"mini"}  color='primary'>
                                                    {`${t.day}日`}
                                                </Button>
                                            )
                                        })*/
                                        (()=>{
                                            const arr = []
                                            for (let i = 0; i < 30; i++) {
                                                arr.push((
                                                    <Button size={"mini"}  color='primary'>
                                                        {`${i}日`}
                                                    </Button>
                                                ))
                                            }
                                            return arr
                                        })()
                                    }
                                </Space>
                            </Collapse.Panel>
                        )
                    })
                }
            </Collapse>
        </div>
    )
}

const UserHome = memo(()=>{
    const [getLedgerRe,setLedger] = useFetch(getLedger,{data:{records: []}});
    const navigate = useNavigate();

    useEffect(() => {
        setLedger({isAsc:true,size:100})
    }, []);

    const getRenderData = () => {
        //所在的时间的没有就添加但此时不保存数据
        let data = getLedgerRe.data.records
        return data.length > 0 ?  data : [{year: new Date().getFullYear()}];
    }

    const Main = () => {
      return (
          <div className='grid grid-rows-[1fr_auto]'>
              <AutoCenter className='mt-10px mb-10px'>年度账本</AutoCenter>
              <LedgerList data={getRenderData()} call={t=>`${t.year}年`} onClick={(i)=> navigate('ledger-month',{state:{year:i.year}})}/>
          </div>
      )
    }

    return (
        <>
            <Routes>
                <Route path='ledger-year' element={<Main/>}/>
                <Route path='*' element={<Main/>}/>
                <Route path='ledger-month' element={<LedgerMonth/>}/>
            </Routes>
            <Navigate to='ledeger-year' />
        </>
    )
})

function A() {
    return <div>123</div>
}


function UserSetting() {
    return (
        <div>
            <Button>
                退出登录
            </Button>
        </div>
    )
}


export default () => {
    const USER_HOME_KEY = "USER_HOME_KEY"
    const USER_CENTER_KEY = "USER_CENTER_KEY"
    const ADD_LEDGER_KEY = "ADD_LEDGER_KEY"
    const [showComponent, setShowComponent] = useState(USER_HOME_KEY);


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
            key: ADD_LEDGER_KEY,
            title: (isActive) => {
                return (
                    <div className='flex flex-col items-center'>
                        {
                            isActive ?
                                <AddFour className='leading-0' theme="multi-color" size="25"
                                         fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} strokeWidth={1}/>
                                :
                                <AddFour className='leading-0' theme="multi-color" size="25"
                                         fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} strokeWidth={1}/>
                        }
                        <div className='text-sm'>添加</div>
                    </div>
                )
            }
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

    const getComponent = (key) => {
        switch (key) {
            case USER_HOME_KEY:
                return <UserHome/>
            case ADD_LEDGER_KEY:
                return <div>开发中...</div>
            case USER_CENTER_KEY:
                return <UserSetting/>
            default:
                return <UserHome/>
        }
    }

    return (
        <div className='w-vw h-vh layout-center bg-[#fafbfc] grid grid-rows-[1fr_auto]'>
            <div className='overflow-auto w-full h-full'>
                {getComponent(showComponent)}
            </div>
            <TabBar
                onChange={setShowComponent}
                className='w-vw m-0 p-0 border-t-solid border-0.5px border-gray'>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} title={item.title}/>
                ))}
            </TabBar>
        </div>
    );
}



