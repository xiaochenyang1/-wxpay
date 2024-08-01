import { createRouter, createWebHistory } from 'vue-router'
 
const routes = [
    {
        //路由初始指向
        path: '/',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue'),
    }
]
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
 
export default router