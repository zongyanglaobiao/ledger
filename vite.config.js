import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        UnoCSS()
    ],
    resolve:{
        alias:{
            '@':resolve('src')
        }
    },
    server: {
        host: '0.0.0.0', // 监听所有网络接口
        port: 5173, // 你可以指定一个端口
    },
})

