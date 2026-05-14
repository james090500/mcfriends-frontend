import { createRouter, createWebHistory } from 'vue-router'

//Pages
import HomePage from '@/views/pages/HomePage.vue'

import LoginPage from '@/views/pages/account/LoginPage.vue'
import ProfilePage from '@/views/pages/account/ProfilePage.vue'

import NotFoundPage from '@/views/errors/NotFoundPage.vue'
import FAQPage from '@/views/pages/FAQPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home',
        },
        component: HomePage,
    },
    {
        path: '/faq',
        name: 'faq',
        meta: {
            title: 'FAQ',
        },
        component: FAQPage,
    },
    {
        path: '/account/login',
        name: 'account-login',
        meta: {
            title: 'Login',
        },
        component: LoginPage,
    },
    {
        path: '/account/profile',
        name: 'account-profile',
        meta: {
            title: 'Your Profile',
            auth: true,
        },
        component: ProfilePage,
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        meta: {
            title: 'Page not found',
        },
        component: NotFoundPage,
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
    scrollBehavior(_to, _from, _savedPosition) {
        return { top: 0 }
    },
})

router.beforeEach(async (to, _from) => {
    const loggedIn = localStorage.getItem('user')
    if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
        return {
            path: '/account/login',
            query: {
                ref: to.fullPath,
            },
        }
    }
})

export default router
