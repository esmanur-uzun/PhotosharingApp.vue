<template>
    <div  v-if="_isAuthenticated" id="account-container">
        <app-header/>
        <div class="card col-lg-6 col-md-9 m-auto mt-4">
                <img src="../medias/mainphoto.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
       
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import appHeader from '../components/Common/appHeader.vue'
export default {
  components: { appHeader },
    computed:{
        ...mapGetters(["_isAuthenticated"])
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
#account-container{
    height: 100%;
}


</style>