import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from "../layout";

export const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "home",
                component: () => import("@/views/home/index.vue"),
                meta: {navName: "首页"}
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
