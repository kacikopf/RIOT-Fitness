import {createRouter, createWebHistory} from 'vue-router'
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Schedule from "./pages/Schedule.vue";
import Membership from "./pages/Membership.vue";
import Contact from "./pages/Contact.vue";
import FlexFitAbout from "./templates/FlexFitAbout.vue";
import FlexFitMembership from "./templates/FlexFitMembership.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ],
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
})

export default router
