<template>
    <div id="header " class="container-fluid nav-body">
        <ul v-if="_isNotAuthenticated" class="nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'LoginPage'}">Sign in</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'RegisterPage'}">Sign up</router-link>
            </li>  
        </ul>
        <ul v-if="_isAuthenticated" class="nav nav-pills justify-content-between pt-2 pb-2">
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">Perspective</a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'AccountPage'}">Account</router-link>
            </li> 
            <li class="nav-item dropdown d-flex">
                <button class="btn add-btn" @click="$emit('open-popup')"><fa class="plus" icon="fa fa-plus"/></button>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><fa icon="fa-solid fa-bars"/></a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">View Profile</a></li>
                    <li><a class="dropdown-item" href="#">Setting</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                        <button class="dropdown-item" @click="onLogout">Log out</button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "header",
    computed:{
        ...mapGetters(["_isNotAuthenticated","_isAuthenticated"])
    },
    methods:{
        onLogout(){
            this.$store.commit("logoutUser")
            this.$router.push({name: "LoginPage"})
        }
    }
}
</script>

<style scoped>
.nav-link{
    color: #0353a4;
    font-size: 20px !important;
}
.nav-body{
    background-color: #041025;
}
.nav-link{
    font-size: 25px !important;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background: linear-gradient(120deg, #023e7d 20.69%, #7644ff 50.19%, #fd4766 79.69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}
@media screen and (max-width: 240px){
    .nav-link{
        font-size: 10px !important;
    }
}
.dropdown-toggle{
    color: #fd4766;
    font-size: 25px !important;
}
.dropdown-toggle::after{
    display: none !important;
}

.add-btn{
    padding:10px 15px;
    border-radius: 10px;
    background-color: #560bad;
    line-height: 30px;
   
}
.plus{
    color:aliceblue;
}

</style>