import { createRouter, createWebHistory } from 'vue-router'
import AuthIndex from '../auth/Index.vue';
import Auth from '../auth/Auth.vue'
import Register from '../auth/Register.vue'
import LogIn from '../auth/LogIn.vue'
import HomeDefault from '../components/HomeDefault.vue'
import Home from '../pages/Home.vue'
import History from '../pages/History.vue'

const routes = [
    { 
        path: '/', 
        name: "Registered",
        component: HomeDefault,
        children: [
            {path: '/', name: "Home", component: Home},
            {path: 'history', name: "History", component: History}
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