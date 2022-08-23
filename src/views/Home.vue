<template>
    <div class=" body">
        <app-header/>
        <div class="main-photo ">
            <div class="opacity d-flex justify-content-center">
                <div class="app-name ">
                   <h1 class="pb-5">Perspective</h1> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import appHeader from '../components/Common/appHeader.vue'

export default {
  components: { appHeader },
   name:"form-app"
}
</script>

<style scoped>
.main-photo{
    
    background-size: cover;
    height: 93.5vh;
    background-image: url("../medias/mainphoto.jpg");
    background-position: center;
    background-size: cover;
}
.opacity{
    width: 100%;
    height: 100%;
    background-color: #001233;
    opacity: 0.5;
}
.app-name h1{
    background: linear-gradient(120deg, #1c99fe 20.69%, #7644ff 40.19%, #fd4766 79.69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:18vh;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
@media (max-width: 768px){
    .app-name h1{
        font-size: 10vh;
        padding-top: 80px;
    }
}


</style>