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
            },
            {
                path: "setting",
                meta: {navName: "系统管理"},
                children: [
                    {
                        path: "user",
                        component: () => import("@/views/user/index.vue"),
                        meta: {navName: "用户管理"}
                    },
                    {
                        path: "role",
                        component: () => import("@/views/role/index.vue"),
                        meta: {navName: "角色管理"}
                    },
                    {
                        path: "permission",
                        component: () => import("@/views/permission/index.vue"),
                        meta: {navName: "权限管理"}
                    },
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
