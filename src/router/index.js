import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: 'KRYPTON' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, next) => {
    document.title = to.meta.title
    next
})

export default router
