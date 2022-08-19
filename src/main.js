import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

//引入pinia
import Pinia from "@/plugin/pinia";
//引入全局样式文件
import "./style/index.scss"
//引入Mock
require("./mock")

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(Pinia).use(ElementPlus).mount('#app')
