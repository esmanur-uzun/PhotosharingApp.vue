<template>
    <div class=" body">
        <app-header/>
        <div class="main-photo">
            <div class="opacity"></div>
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

</style>