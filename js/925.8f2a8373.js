"use strict";(self["webpackChunkcontact_from"]=self["webpackChunkcontact_from"]||[]).push([[925],{3925:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var s=t(3396),l=t(9242);const r=e=>((0,s.dD)("data-v-32d9cb40"),e=e(),(0,s.Cn)(),e),n={class:"login-container d-flex align-items-center justify-content-center"},o={class:"col-lg-3"},u={class:"form-floating mb-3"},i=r((()=>(0,s._)("label",{for:"name",class:"form-label"},"Name",-1))),m={class:"form-floating mb-3"},c=r((()=>(0,s._)("label",{for:"surname",class:"form-label"},"Surname",-1))),d={class:"form-floating mb-3"},p=r((()=>(0,s._)("label",{for:"email"},"Email address",-1))),f={class:"form-floating"},h=r((()=>(0,s._)("label",{for:"password"},"Password",-1)));function g(e,a,t,r,g,b){const _=(0,s.up)("fa"),D=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("form",o,[(0,s.Wm)(D,{class:"back pb-4",to:{name:"HomePage"}},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{icon:"fa-xmark"})])),_:1}),(0,s._)("div",u,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>g.userData.name=e),class:"form-control",id:"floatingInput",required:"",placeholder:"name@example.com",maxlength:"20"},null,512),[[l.nr,g.userData.name]]),i]),(0,s._)("div",m,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>g.userData.surname=e),class:"form-control",id:"floatingInput",required:"",placeholder:"name@example.com",maxlength:"20"},null,512),[[l.nr,g.userData.surname]]),c]),(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{type:"email","onUpdate:modelValue":a[2]||(a[2]=e=>g.userData.email=e),class:"form-control",id:"floatingInput",required:"",placeholder:"name@example.com",maxlength:"35"},null,512),[[l.nr,g.userData.email]]),p]),(0,s._)("div",f,[(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":a[3]||(a[3]=e=>g.userData.password=e),class:"form-control",id:"floatingPassword",required:"",placeholder:"Password",maxlength:"8"},null,512),[[l.nr,g.userData.password]]),h]),(0,s._)("button",{type:"submit",onClick:a[4]||(a[4]=(...e)=>b.onSave&&b.onSave(...e)),class:"btn me-3 mt-4"},"Submit"),(0,s._)("button",{type:"reset",class:"btn mt-4",onClick:a[5]||(a[5]=(...e)=>b.resetInput&&b.resetInput(...e))},"Reset")])])}var b=t(8082),_=t.n(b),D={name:"register-page",data(){return{userData:{name:null,surname:null,email:null,password:null}}},methods:{onSave(){if(null!=this.userData.name&&null!=this.userData.surname&&null!=this.userData.email&&null!=this.userData.password){const e=_().HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString();this.$appAxios.post("/newUser",{...this.userData,password:e}).then((e=>{console.log("registered_user_response",e),this.$router.push({name:"LoginPage"})}))}else console.log("boş veri")},resetData(){Object.keys(this.userData).forEach((e=>this.userData[e]=null))},resetInput(){Object.keys(this.userData).forEach((e=>this.userData[e]=null))}}},w=t(89);const v=(0,w.Z)(D,[["render",g],["__scopeId","data-v-32d9cb40"]]);var y=v}}]);
//# sourceMappingURL=925.8f2a8373.js.map