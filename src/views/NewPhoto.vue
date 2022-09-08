<template>
    <div  class="d-flex popup  align-items-center justify-content-center ps-3 pe-3">
        <form  class="col-lg-4 col-md-8 popup-inner pe-4 ps-4 pb-5 pt-5">
            <div class="input-group mb-4 ">
                <input @change="onFileSelected" accept="image/*" ref="file" type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
            </div>
            <div class="form-floating ">
                <textarea v-model="userData.description" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" maxlength="25" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Description</label>
            </div>
            <button @click="onSave" class="btn load mt-3">Load</button>
            <button @click="$emit('close-popup')"  class="btn cancel"><fa icon="fa fa-times"></fa></button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            
            userData : {
                file: '',
                description: null
            },
        }
    },
    methods:{
        onSave(){
            console.log(this.userData)
            const saveData = {
                ...this.userData,
                userid:this._getCurrentUser.id,
            }
           
            this.$appAxios.post("/posts",saveData).then(save_photo_response => {
                console.log(save_photo_response)
                Object.keys(this.userData)?.forEach(field => this.userData[field] = null)
                
            })
        },
        onFileSelected(event){
            let fileValue = event.target.files[0].name
            this.userData.file=  fileValue
            
        }
    },
    computed: {
        ...mapGetters(["_getCurrentUser"])
    }
}
</script>

<style scoped>
.popup{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #0012338f ;
}
.popup-inner{
    position: relative;
    background-color: aliceblue;
    border-radius: 10px;
}
.cancel{
    background-color: #002855;
    color: aliceblue;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    font-size: 20px;
    padding: 10px 15px;
    transform: translate(50%, -50%);
}
.load{
    background-color: #002855;
    color: aliceblue;
}
</style>