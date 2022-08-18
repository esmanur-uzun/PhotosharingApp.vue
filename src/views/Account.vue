<template>
    <div  v-if="_isAuthenticated" id="account">
        <app-header/>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import appHeader from '../components/Common/appHeader.vue'
export default {
  components: { appHeader },
    name: "account",
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

</style>