<template>
    <div class="login-container d-flex  align-items-center justify-content-center ">
        <form class="col-lg-3">
            <router-link class="back pb-4"  :to="{name:'HomePage'}">
                <fa icon="fa-xmark"/>
                
            </router-link>
            <div class="form-floating mb-3">
                    <input type="text"  v-model="userData.name" class="form-control" id="floatingInput" required placeholder="name@example.com" maxlength="20">
                    <label for="name" class="form-label">Name</label>
            </div>
            <div class="form-floating mb-3">
                    <input type="text" v-model="userData.surname" class="form-control" id="floatingInput" required placeholder="name@example.com" maxlength="20">
                    <label for="surname" class="form-label">Surname</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" v-model="userData.email" class="form-control" id="floatingInput" required placeholder="name@example.com" maxlength="35">
                <label for="email">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" v-model="userData.password" class="form-control" id="floatingPassword" required placeholder="Password" maxlength="8">
                <label for="password">Password</label>
            </div>
            <button type="submit" @click="onSave" class="btn me-3 mt-4">Submit</button>
            <button type="reset" class="btn mt-4" @click="resetInput">Reset</button>
        </form>
    </div>
</template>
 
<script>
import CryptoJS from "crypto-js"
export default {
    name: "register-page",
    data(){
        return {
            userData: {
                name: null,
                surname: null,
                email: null,
                password: null
            }
        }
    },
    methods :{
        onSave(){

            if(this.userData.name!=null && this.userData.surname != null && this.userData.email !=null && this.userData.password != null){
                const password = CryptoJS.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString();
                this.$appAxios.post("/newUser",{...this.userData, password}).then(registered_user_response =>{
                    console.log("registered_user_response",registered_user_response)
                    this.$router.push({name: "HomePage"})
                })
            }
            else {
                console.log("boş veri")
            }
            
        },
        resetData(){
            Object.keys(this.userData).forEach(key => this.userData[key] = null)
        },
        resetInput(){
            Object.keys(this.userData).forEach(key => this.userData[key] = null)

        }
    }

}
</script>

<style scoped>
.login-container{
    height: 100% !important;
    background-color: #001233;
}
.btn{
    padding-right:20px !important;
    padding-left: 20px !important;
    background-color: #33415c;
    color: #fff;
}
.btn:hover{
    background-color: #002855;
}
.back{
    font-size: 23px;
    cursor: pointer;
    display: flex;
    justify-content: end;
    color: #ccd5ae;
}
input{
    background-color: #ccd5ae;
}

</style>