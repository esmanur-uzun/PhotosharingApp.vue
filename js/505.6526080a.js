"use strict";(self["webpackChunkcontact_from"]=self["webpackChunkcontact_from"]||[]).push([[505,953],{7451:function(e,t,o){o.r(t),o.d(t,{default:function(){return D}});var n=o(3396),a=o(7139),s=o.p+"img/mainphoto.641a9c25.jpg";const i=e=>((0,n.dD)("data-v-16cc4909"),e=e(),(0,n.Cn)(),e),r={key:0,id:"account-container"},l={class:"d-flex justify-content-center flex-wrap"},c=i((()=>(0,n._)("img",{src:s,class:"img-fluid",alt:"..."},null,-1))),p={class:"me-3 mt-3"},u={class:"user pb-5 ps-3"},d={class:"description pb-2 ps-3"};function m(e,t,o,s,i,m){const f=(0,n.up)("app-header"),g=(0,n.up)("fa"),h=(0,n.up)("new-photo");return e._isAuthenticated?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(f,{onOpenPopup:m.openPopup},null,8,["onOpenPopup"]),(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.item,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"col-lg-5 me-3 ms-3 mb-5 mt-4 photo-container d-flex",key:e.id},[c,(0,n._)("button",p,[(0,n.Wm)(g,{icon:"fa fa-heart"})]),(0,n._)("div",u,(0,a.zw)(m.userName),1),(0,n._)("div",d,(0,a.zw)(e.description),1)])))),128))]),i.buttonTriggers?((0,n.wg)(),(0,n.j4)(h,{key:0,onClosePopup:m.closePopup},null,8,["onClosePopup"])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)}var f=o(65),g=o(5240),h=o(1953),_={components:{appHeader:g.Z,NewPhoto:h["default"]},data(){return{buttonTriggers:!1,item:[]}},methods:{onLogout(){this.$store.commit("logoutUser"),this.$router.push({name:"LoginPage"})},openPopup(){this.buttonTriggers=!0},closePopup(){this.buttonTriggers=!1}},created(){this.$appAxios.get("/posts?_expand=user").then((e=>{console.log(e),this.item=e?.data||[]}))},computed:{userName(){return this.item?.user?.name||"-"},...(0,f.Se)(["_isAuthenticated"])}},v=o(89);const b=(0,v.Z)(_,[["render",m],["__scopeId","data-v-16cc4909"]]);var D=b},1953:function(e,t,o){o.r(t),o.d(t,{default:function(){return h}});var n=o(3396),a=o(9242);const s=e=>((0,n.dD)("data-v-e0a54f02"),e=e(),(0,n.Cn)(),e),i={class:"d-flex popup align-items-center justify-content-center ps-3 pe-3"},r={class:"col-lg-4 col-md-8 popup-inner pe-4 ps-4 pb-5 pt-5"},l={class:"input-group mb-4"},c={class:"form-floating"},p=s((()=>(0,n._)("label",{for:"floatingTextarea2"},"Description",-1)));function u(e,t,o,s,u,d){const m=(0,n.up)("fa");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("form",r,[(0,n._)("div",l,[(0,n._)("input",{onChange:t[0]||(t[0]=(...e)=>d.onFileSelected&&d.onFileSelected(...e)),accept:"image/*",ref:"file",type:"file",class:"form-control",id:"inputGroupFile04","aria-describedby":"inputGroupFileAddon04","aria-label":"Upload"},null,544)]),(0,n._)("div",c,[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>u.userData.description=e),class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",maxlength:"25",style:{height:"100px"}},null,512),[[a.nr,u.userData.description]]),p]),(0,n._)("button",{onClick:t[2]||(t[2]=(...e)=>d.onSave&&d.onSave(...e)),class:"btn load mt-3"},"Load"),(0,n._)("button",{onClick:t[3]||(t[3]=t=>e.$emit("close-popup")),class:"btn cancel"},[(0,n.Wm)(m,{icon:"fa fa-times"})])])])}var d=o(65),m={data(){return{userData:{file:"",description:null}}},methods:{onSave(){console.log(this.userData);const e={...this.userData,userId:this._getCurrentUser?.id};this.$appAxios.post("/posts",e).then((e=>{console.log(e),Object.keys(this.userData)?.forEach((e=>this.userData[e]=null))}))},onFileSelected(e){let t=e.target.files[0].name;this.userData.file=t}},computed:{...(0,d.Se)(["_getCurrentUser"])}},f=o(89);const g=(0,f.Z)(m,[["render",u],["__scopeId","data-v-e0a54f02"]]);var h=g}}]);
//# sourceMappingURL=505.6526080a.js.map