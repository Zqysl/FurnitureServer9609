import{S as z,T as K}from"./TablePage-1d1c83bb.js";import{d as O,J as L,G as h,g as c,e as i,o as $,c as j,b as V,i as a,w as l,u as _,a as s,t as M,F as W,K as m,E as f,_ as F}from"./index-598e1e45.js";import{h as y}from"./http-dc5150a7.js";const G=u=>{const n={url:"/furnitures/roles/page",method:"GET",params:u};return y.request(n)},J=u=>{const n={url:"/furnitures/roles/add/",method:"POST",data:u,mode:"json"};return y.request(n)},A=u=>{const n={url:"/furnitures/roles/delete/",method:"POST",data:u,mode:"json"};return y.request(n)},H=u=>{const n={url:"/furnitures/roles/update/",method:"POST",data:u,mode:"json"};return y.request(n)},Q={class:"div-search-bar"},X={class:"table-div"},Y=O({__name:"RolesManagementView",setup(u){L();const n=h([{name:"Name",value:""}]),C=c(!0),D=c([]),U=h([{dataKey:"role_id",key:"role_id",title:"ID",width:300},{dataKey:"role_name",key:"role_name",title:"Name",width:200},{dataKey:"last_updated_date",key:"last_updated_date",title:"Update at",width:250},{dataKey:"last_created_date",key:"last_created_date",title:"Create at",width:250},{key:"option",title:"Options",cellRenderer:t=>a("div",null,[a(m,{link:!0,type:"primary",onClick:()=>B(t)},{default:()=>[s("Edit")]}),a(i("el-popconfirm"),{"hide-after":0,width:"170",title:`Delete ${t.rowData.role_name}?`,onConfirm:()=>q(t)},{reference:()=>a(i("el-button"),{link:!0,type:"danger"},{default:()=>[s("Delete")]})})]),width:150,fixed:"right",align:"center"}]),p=c(!1),o=h({role_name:""}),T=()=>{p.value=!0,o.role_name=""},R=()=>{if(!o.role_name.trim()){f({title:"Warning",message:"Please input role name.",type:"warning"});return}let t={role_name:o.role_name};J(t).then(e=>{if(console.log(e),e.success)f({title:"Success",message:"Upload successfully.",type:"success"});else throw"error"}).catch(()=>{f({title:"Warning",message:"Something wrong.",type:"warning"})}).finally(()=>{p.value=!1,d()})},g=c(!1),b=c("888"),B=t=>{console.log(t),b.value=t.rowData.role_id,o.role_name=t.rowData.role_name,g.value=!0},I=()=>{let t={role_name:o.role_name,id:b.value};H(t).then(e=>{if(console.log(e),e.success)f({title:"Success",message:"Update successfully.",type:"success"});else throw"error"}).catch(()=>{f({title:"Warning",message:"Something wrong.",type:"warning"})}).finally(()=>{g.value=!1,d()})},q=t=>{console.log("Delete -> ",t.rowData);var e={id:t.rowData.role_id};A(e).then(w=>{console.log("success",w)}).catch(()=>{}).finally(()=>{d()})},v=h({currentPage:1,pageSize:20}),E=t=>{v.currentPage=t.currentPage,v.pageSize=t.pageSize,d()},k=c(),d=()=>{C.value=!0;var t={page_num:v.currentPage,page_size:v.pageSize,role_name:n[0].value};G(t).then(e=>{console.log(e),e.success&&(D.value=e.data,k.value=e.page.total)}).catch(()=>{}).finally(()=>{C.value=!1})};return d(),(t,e)=>{const w=i("el-text"),S=i("el-input"),x=i("el-form-item"),N=i("el-form"),P=i("el-dialog");return $(),j(W,null,[V("div",null,[a(K,{loading:C.value,class:"table-page",columns:U,data:D.value,itemsTotalLength:k.value,onPaginationChange:E},{default:l(()=>[V("div",Q,[a(z,{items:n,onChange:e[0]||(e[0]=r=>d())},null,8,["items"])]),V("div",X,[a(_(m),{class:"create-new-button",type:"primary",onClick:T},{default:l(()=>[s("Create New Role")]),_:1})])]),_:1},8,["loading","columns","data","itemsTotalLength"])]),a(P,{class:"information-dialog",width:"450px",modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=r=>p.value=r)},{header:l(()=>[a(w,null,{default:l(()=>[s("Create New Role")]),_:1})]),footer:l(()=>[a(_(m),{type:"primary",onClick:R},{default:l(()=>[s("Create")]),_:1}),a(_(m),{onClick:e[2]||(e[2]=r=>p.value=!1)},{default:l(()=>[s(" Cancel ")]),_:1})]),default:l(()=>[a(N,{model:o,"label-width":"120px",class:"form-container","label-position":"left"},{default:l(()=>[a(x,{prop:"role_name",label:"Name",rules:[{required:!0,message:"Please input role name",trigger:"blur"}]},{default:l(()=>[a(S,{modelValue:o.role_name,"onUpdate:modelValue":e[1]||(e[1]=r=>o.role_name=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),a(P,{class:"information-dialog",width:"500px",modelValue:g.value,"onUpdate:modelValue":e[6]||(e[6]=r=>g.value=r)},{header:l(()=>[a(w,null,{default:l(()=>[s("Update Role - "+M(b.value),1)]),_:1})]),footer:l(()=>[a(_(m),{type:"primary",onClick:I},{default:l(()=>[s("Update")]),_:1}),a(_(m),{onClick:e[5]||(e[5]=r=>g.value=!1)},{default:l(()=>[s(" Cancel ")]),_:1})]),default:l(()=>[a(N,{model:o,"label-width":"120px",class:"form-container","label-position":"left"},{default:l(()=>[a(x,{prop:"role_name",label:"Name",rules:[{required:!0,message:"Please input role name",trigger:"blur"}]},{default:l(()=>[a(S,{modelValue:o.role_name,"onUpdate:modelValue":e[4]||(e[4]=r=>o.role_name=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});const te=F(Y,[["__scopeId","data-v-c103359b"]]);export{te as default};
