import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

//引入pinia
import Pinia from "@/plugin/pinia";
//引入全局样式文件
import "./style/index.scss"
//引入Mock
require("./mock")

createApp(App).use(router).use(Pinia).mount('#app')
