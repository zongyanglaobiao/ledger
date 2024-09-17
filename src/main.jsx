import '@/index.css'
import 'virtual:uno.css'
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {Loading} from "antd-mobile";
import {Provider} from "react-redux";
import router from "@/router/index.jsx";
import {store} from "@/redux/store.js";

//渲染
ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading/>} >
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </Suspense>
)
