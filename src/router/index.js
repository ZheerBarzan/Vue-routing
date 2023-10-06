import { createRouter , createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarView from "../views/CarView.vue";
import Contact from "../views/Contact.vue";
import notFound from "../views/404.vue";

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes:[
    {
        path: '/',
        name:"home",
        component: Home

    },
    {
        path:"/home",
        redirect: "/",

    },
    
    {
        path: '/about',
        name:"about",
        component: About
    },
    {
        path: "/cars/:id",
        name: "car",
        component: CarView,
        children:[
            {
                path:"contact",
                component: Contact
            }
        ]
    },{
        path: "/:catchall(.*)*",
        name: "not found",
        component:notFound,
    }
]
})

export default router