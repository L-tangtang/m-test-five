import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            isLogin: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/Detail.vue'),
        meta: {
            isLogin: true,
        },
    },
    {
        path: '/classify',
        name: 'classify',
        component: () => import('../views/Classify.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        if (localStorage.getItem('token') !== null) {
            next();
            return;
        }
        next('/login');
        return;
    }
    next();
});
export default router;
