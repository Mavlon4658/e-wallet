import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AuthIndex from '../auth/Index.vue';
import Auth from '../auth/Auth.vue'
import Register from '../auth/Register.vue'
import LogIn from '../auth/LogIn.vue'

const routes = [
    { 
        path: '/', 
        name: "Home",
        component: Home,
        children: [
            {path: '/', name: "Home", component: Home},
        ]
    },
    {
        path: '/auth', 
        name: 'Auth',
        component: AuthIndex,
        children: [
            {path: '', name: "AuthIn", component: Auth},
            {path: 'login', name: "LogIn", component: LogIn},
            {path: 'register', name: "Register", component: Register}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router