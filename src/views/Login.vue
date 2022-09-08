<template>
    <div class=" body ">
        <form class="container login-container d-flex align-items-center justify-content-center">
            <div class="form-container row m-auto justify-content-center align-items-center col-lg-6">
                <div class=" row pt-5 pb-5 d-flex justify-content-center col-lg-10 col-md-7">
                    <router-link class="back pb-4"  :to="{name:'HomePage'}">
                        <fa icon="fa-xmark"/>
                    </router-link>
                    <div class="form-floating mb-4 col-lg-12">
                        <input type="email" v-model="memberData.email" class="form-control" id="floatingInput" required placeholder="name@example.com" maxlength="35">
                        <label for="email">Email address</label>
                    </div>
                    <div class="form-floating mb-4 col-lg-12">
                        <input type="password" v-model="memberData.password" class="form-control" id="floatingPassword " required placeholder="Password" maxlength="8">
                        <label for="password">Password</label>
                    </div>
                    <div class="col-lg-12">
                        <button type="submit" @click="enterSystem" class="btn btn-primary">Submit</button>
                        <hr class="mt-4"/>
                    </div>
                    <p class="text-center">New to Perspective?
                        <router-link id="text" :to="{name: 'RegisterPage'}">Create an acount</router-link>

                    </p>
                    
                </div>
                
            </div>
            
        </form>
    </div>
</template>

<script>
import CryptoJS from "crypto-js"
export default {
    name: "login-page",

    data(){
        return {
            memberData : {
                email: null,
                password: null,
            }
        }
    },
    methods:{
        enterSystem(){
            const password = CryptoJS.HmacSHA1(this.memberData.password,this.$store.getters._saltKey).toString();
            this.$appAxios.get(`/newUser?email=${this.memberData.email}&password=${password}`).then(login_response => {
                
                if(login_response?.data?.length > 0){
                    this.$store.commit("setUser",login_response?.data[0])
                    this.$router.push({name: "AccountPage"})

                }
                else{
                    alert("böyle bir kullanıcı bulunamadı")
                }
            }).catch(e => console.log(e))
        }

    }
}
</script>

<style scoped>
.body{
    background-color: #001233;
}
.login-container{
    height: 83.6ch;
}
input{
    background-color: #ccd5ae;
}
button{
    width: 100%;
    background-color: #001233;
    border-color: #001233;
}
button:hover{
    background-color: #001845;
    border-color: #001845;
}
.form-container{
    border-radius: 15px;
    background-color: #33415c;

}
hr{
    background-color: #ccd5ae;
}
.back{
    font-size: 23px;
    cursor: pointer;
    display: flex;
    justify-content: end;
    color: #001233;
}
#text{
    color:#ccd5ae ;
}
</style>