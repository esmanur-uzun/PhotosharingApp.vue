import { createRouter, createWebHashHistory } from "vue-router";
import store from '../store'

const routes = [
    {
        name: "HomePage",
        path: "/",
        component : () => import ("@/views/Home.vue")
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/views/Login.vue")
    },
    {
        name: "RegisterPage",
        path :"/register",
        component : () => import ("@/views/Register.vue")
    },
    {
        name:"AccountPage",
        path : "/account",
        component : () => import ("@/views/Account.vue")
    },
    {
        name: "NewPhotoPage",
        path: "/newphoto",
        component : () => import ("@/views/NewPhoto.vue")
    }
]

const router =createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to,_,next) => {
    const authRequiredRoutes = ["AccountPage","NewPhotoPage"];
    const authNotRequiredRoutes = ["LoginPage","RegisterPage"];
    const _isAuthenticated = store.getters._isAuthenticated;

    if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);
    if(authRequiredRoutes.indexOf(to.name) > -1){
        if(_isAuthenticated) next()
        else next({name: "LoginPage"})
    }
    else{
        next()
    }
})

export default  router