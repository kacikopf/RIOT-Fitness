import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Schedule from "./components/Schedule.vue";
import Membership from "./components/Membership.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/schedule',
            name: 'Schedule',
            component: Schedule
        },
        {
            path: '/membership',
            name: 'Membership',
            component: Membership
        }
    ]
})

export default router
