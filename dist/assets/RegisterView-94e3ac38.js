import{d as C,g as U,G as y,e as g,o as F,c as q,i as a,w as s,j as v,a as _,E as n,r as P,p as E,m as N,b,_ as K}from"./index-48e4bbc4.js";import{f as L,u as B,a as D}from"./users-c3030ca3.js";import"./http-0a3fdf92.js";const j="/assets/loginlogo-b13306b0.png",S=w=>(E("data-v-dd575ad3"),w=w(),N(),w),A={class:"page"},G=S(()=>b("div",{class:"image-container"},[b("img",{style:{width:"200px",height:"150px"},src:j})],-1)),T=S(()=>b("div",{class:"image-container"},null,-1)),$="emailverify",x="first",z=C({__name:"RegisterView",setup(w){const p=U(!1),f=y({email:""}),k=()=>{if(!f.email){n({title:"Warning",message:"Please fill in all fields.",type:"warning"});return}p.value=!0;const u={email:f.email};L(u).then(e=>{e.code!=200?n({title:"Warning",message:e.data.message,type:"warning"}):n({title:"Success",message:"Please check your email to reset your password",type:"success"})}).catch(e=>{var o,t,r,d;n({title:"Warning",message:((t=(o=e.response)==null?void 0:o.data)==null?void 0:t.detail)||((d=(r=e.response)==null?void 0:r.data)==null?void 0:d.message)||e.message,type:"warning"})}).finally(()=>{p.value=!1})},m=y({email:"",password:""}),V=()=>{if(!m.email||!m.password){n({title:"Warning",message:"Please fill in all fields.",type:"warning"});return}p.value=!0;const u={email:m.email,password:m.password};B(u).then(e=>{e.code!=200?n({title:"Warning",message:e.data.message,type:"warning"}):(localStorage.clear(),localStorage.token=e.data.token,localStorage.setItem("usyd-customer-token",e.data.token),localStorage.setItem("usyd-customer-email",e.data.user.email),localStorage.setItem("usyd-customer-id",e.data.user.id),n({title:"Success",message:e.data.message,type:"success"}),P.push({path:"/home",replace:!0}).finally(()=>{window.location.reload()}))}).catch(e=>{var o,t,r,d,c;console.log("warning"),n({title:"Warning",message:((t=(o=e.response)==null?void 0:o.data)==null?void 0:t.detail)||((d=(r=e.response)==null?void 0:r.data)==null?void 0:d.message)||e.message,type:"warning"}),((c=e.response)==null?void 0:c.status)===403&&(localStorage.clear(),localStorage.setItem("email",m.email),P.push({path:"/emailverify"}))}).finally(()=>{p.value=!1})},l=y({email:"",password:"",confirmPassword:"",first_name:""}),h=()=>{if(!l.email||!l.password||!l.confirmPassword||!l.first_name){n({title:"Warning",message:"Please fill in all fields.",type:"warning"});return}if(l.password!==l.confirmPassword){n({title:"Warning",message:"Passwords do not match.",type:"warning"});return}p.value=!0;const u={email:l.email,is_staff:!1,password:l.password,first_name:l.first_name};D(u).then(e=>{if(e.code!=200)n({title:"Warning",message:e.data.message,type:"warning"});else{n({title:"Success",message:e.data.message,type:"success"}),P.push({path:$});const o=u.email;localStorage.setItem("email",o)}}).catch(e=>{var o,t,r,d;console.log("warning"),n({title:"Warning",message:((t=(o=e.response)==null?void 0:o.data)==null?void 0:t.detail)||((d=(r=e.response)==null?void 0:r.data)==null?void 0:d.message)||e.message,type:"warning"})}).finally(()=>{p.value=!1})},R=()=>{l.email="",l.password="",l.confirmPassword="",l.first_name=""};return(u,e)=>{const o=g("el-input"),t=g("el-form-item"),r=g("el-button"),d=g("el-form"),c=g("el-tab-pane"),W=g("el-tabs"),I=g("el-card");return F(),q("div",A,[a(I,{class:"container"},{default:s(()=>[a(W,{modelValue:x,"onUpdate:modelValue":e[8]||(e[8]=i=>x=i)},{default:s(()=>[a(c,{label:"Login",name:"first"},{default:s(()=>[G,a(d,{ref:"formRef",model:m,"label-width":"120px",class:"form-container","label-position":"top"},{default:s(()=>[a(t,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:s(()=>[a(o,{modelValue:m.email,"onUpdate:modelValue":e[0]||(e[0]=i=>m.email=i),placeholder:"Please input email"},null,8,["modelValue"])]),_:1}),a(t,{prop:"password",label:"Password"},{default:s(()=>[a(o,{modelValue:m.password,"onUpdate:modelValue":e[1]||(e[1]=i=>m.password=i),type:"password",autocomplete:"off","show-password":"",onKeyup:v(V,["enter"]),placeholder:"Please input password"},null,8,["modelValue","onKeyup"])]),_:1}),a(t,null,{default:s(()=>[a(r,{loading:p.value,type:"primary",onClick:V},{default:s(()=>[_("Login")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1}),a(c,{label:"Register",name:"second"},{default:s(()=>[a(d,{ref:"formRef",model:l,"label-width":"120px",class:"form-container","label-position":"top"},{default:s(()=>[a(t,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:s(()=>[a(o,{modelValue:l.email,"onUpdate:modelValue":e[2]||(e[2]=i=>l.email=i),placeholder:"Please input email"},null,8,["modelValue"])]),_:1}),a(t,{label:"Full Name"},{default:s(()=>[a(o,{modelValue:l.first_name,"onUpdate:modelValue":e[3]||(e[3]=i=>l.first_name=i),placeholder:"Please input full name"},null,8,["modelValue"])]),_:1}),a(t,{prop:"password",label:"Password"},{default:s(()=>[a(o,{modelValue:l.password,"onUpdate:modelValue":e[4]||(e[4]=i=>l.password=i),type:"password",autocomplete:"off",placeholder:"Please input password","show-password":""},null,8,["modelValue"])]),_:1}),a(t,{prop:"confirmPassword",label:"Confirm Password"},{default:s(()=>[a(o,{modelValue:l.confirmPassword,"onUpdate:modelValue":e[5]||(e[5]=i=>l.confirmPassword=i),type:"password",placeholder:"Please input confirm password","show-password":"",onKeyup:v(h,["enter"]),autocomplete:"off"},null,8,["modelValue","onKeyup"])]),_:1}),a(t,null,{default:s(()=>[a(r,{onClick:e[6]||(e[6]=i=>R()),style:{width:"80px",padding:"5px","margin-left":"35px"}},{default:s(()=>[_("Reset")]),_:1}),a(r,{loading:p.value,type:"primary",onClick:h,style:{width:"80px",padding:"5px","margin-left":"35px"}},{default:s(()=>[_("Register")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1}),a(c,{label:"Forgot Password",name:"forgotpassword"},{default:s(()=>[T,a(d,{ref:"formRef",model:f,"label-width":"120px",class:"form-container","label-position":"top"},{default:s(()=>[a(t,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:s(()=>[a(o,{modelValue:f.email,"onUpdate:modelValue":e[7]||(e[7]=i=>f.email=i),placeholder:"Please input email"},null,8,["modelValue"])]),_:1}),a(t,null,{default:s(()=>[a(r,{loading:p.value,type:"primary",onClick:k},{default:s(()=>[_("Forgot Password")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});const O=K(z,[["__scopeId","data-v-dd575ad3"]]);export{O as default};