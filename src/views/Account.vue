<template>
    <div  v-if="_isAuthenticated" id="account-container">
        <app-header @open-popup="openPopup"/>
        <div class="d-flex justify-content-center flex-wrap">
            <div class="col-lg-5 me-3 ms-3 mb-5 mt-4 photo-container d-flex">
                <img src="../medias/mainphoto.jpg"  class="img-fluid " alt="...">
                <button class="me-3 mt-3"><fa icon="fa fa-heart"></fa></button>
                <div class="user pb-5 ps-3">kullanıcı adı</div>
                <div class="description pb-2 ps-3">açıklama açıklama açıklama</div>
            </div>
            <div class="col-lg-5 me-5 ms-3 mb-5 mt-4 photo-container">
                <img src="../medias/photo1.jpg"  class="img-fluid " alt="...">

            </div>
            <div class="col-lg-5 me-5 ms-3 mb-5 mt-4 photo-container">
                <img src="../medias/photo2.jpg"  class="img-fluid " alt="...">

            </div>
        </div>
        
        <new-photo @close-popup="closePopup" v-if="buttonTriggers"></new-photo>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import appHeader from '../components/Common/appHeader.vue'
import NewPhoto from './NewPhoto.vue'
export default {
  components: { appHeader, NewPhoto },
    computed:{
        ...mapGetters(["_isAuthenticated"])
    },
    methods:{
        onLogout(){
            this.$store.commit("logoutUser")
            this.$router.push({name: "LoginPage"})
        },
        openPopup(){
            this.buttonTriggers=true
        },
        closePopup(){
            this.buttonTriggers = false
        }
    },
    data(){
        return{
            buttonTriggers:false
        }
    }
}
</script>

<style scoped>
#account-container{
    height: 100%;
}
.photo-container{
    position: relative;
    background-color: #041025;

}
img{
    width: 100%;
    transition: all 0.3s;
}
img:hover{
    opacity: 0.7;
}
button{
    background-color:rgba(255, 255, 255, 0.838);
    border: none;
    position: absolute;
    font-size: 18px;
    padding: 8px 13px;
    right: 0;
    border-radius: 10px;
    opacity: 0.5;
}
button:hover{
    opacity: 0.9;
}
.user{
    position: absolute;
    color: #fff;
    bottom: 0;
}
.description{
    position: absolute;
    color: #fff;
    bottom: 0;
}
</style>