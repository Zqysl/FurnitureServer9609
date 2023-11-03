import{S as q,T as $}from"./TablePage-39e81710.js";import{d as M,J as O,G as D,g as u,e as s,o as f,c as y,b as x,i as t,w as l,u as w,a as i,t as A,F as G,K as m,E as c,_ as J}from"./index-a6482bb7.js";import{c as j,u as H,d as Q,a as X}from"./categories-7e29c407.js";import"./http-325886a9.js";const Y={class:"div-search-bar"},Z={class:"table-div"},ee=["src"],ae=["src"],te=M({__name:"CategoryManagementView",setup(le){O();const N=D([{name:"Name",value:""}]),b=u(!0),P=u([]),E=D([{dataKey:"category_id",key:"category_id",title:"ID",width:350},{key:"icon",title:"Icon",width:80,cellRenderer:e=>t("img",{width:30,src:"http://127.0.0.1:8000/"+e.rowData.icon},null)},{dataKey:"category_name",key:"category_name",title:"Name",width:200},{dataKey:"last_updated_date",key:"last_updated_date",title:"Update at",width:250},{dataKey:"last_created_date",key:"last_created_date",title:"Create at",width:250},{key:"option",title:"Options",cellRenderer:e=>t("div",null,[t(m,{link:!0,type:"primary",onClick:()=>L(e)},{default:()=>[i("Edit")]}),t(s("el-popconfirm"),{"hide-after":0,width:"170",title:`Delete ${e.rowData.category_name}?`,onConfirm:()=>W(e)},{reference:()=>t(s("el-button"),{link:!0,type:"danger"},{default:()=>[i("Delete")]})})]),width:150,fixed:"right",align:"center"}]),p=u(!1),o=D({category_name:"",icon:""}),d=u(""),T=()=>{p.value=!0,d.value="",o.category_name="",o.icon=""},F=()=>{if(!o.category_name.trim()){c({title:"Warning",message:"Please input category name.",type:"warning"});return}if(!o.icon){c({title:"Warning",message:"Please select category icon.",type:"warning"});return}var e=new FormData;e.append("category_name",o.category_name),e.append("icon",o.icon),j(e).then(a=>{if(console.log(a),a.success)c({title:"Success",message:"Upload successfully.",type:"success"});else throw"error"}).catch(()=>{c({title:"Warning",message:"Something wrong.",type:"warning"})}).finally(()=>{p.value=!1,g()})},v=()=>{console.log("open");var e=document.createElement("input");e.type="file",e.accept="image/*",e.addEventListener("change",a=>{if(a.target.files.length!=1){c({title:"Warning",message:"Only one image is allowed.",type:"warning"});return}if(console.log("file",a.target.files[0]),a.target.files[0].size>102400){c({title:"Warning",message:"The image is too large. (over 100k)",type:"warning"});return}o.icon=a.target.files[0];const n=new FileReader;n.readAsDataURL(a.target.files[0]),n.onload=C=>{d.value=C.currentTarget.result}}),e.click()},_=u(!1),V=u("888"),L=e=>{console.log(e),V.value=e.rowData.category_id,o.category_name=e.rowData.category_name,_.value=!0},R=()=>{var e=new FormData;e.append("category_name",o.category_name),e.append("icon",o.icon),e.append("id",V.value),H(e).then(a=>{if(console.log(a),a.success)c({title:"Success",message:"Update successfully.",type:"success"});else throw"error"}).catch(()=>{c({title:"Warning",message:"Something wrong.",type:"warning"})}).finally(()=>{_.value=!1,g()})},W=e=>{console.log("Delete -> ",e.rowData);var a={id:e.rowData.category_id};Q(a).then(n=>{console.log("success",n)}).catch(()=>{}).finally(()=>{g()})},h=D({currentPage:1,pageSize:20}),K=e=>{h.currentPage=e.currentPage,h.pageSize=e.pageSize,g()},S=u(),g=()=>{var a;b.value=!0;var e={page_num:h.currentPage,page_size:h.pageSize,category_name:(a=N.find(n=>n.name=="Name"))==null?void 0:a.value};X(e).then(n=>{console.log(n),n.success&&(P.value=n.data,S.value=n.page.total)}).catch(()=>{}).finally(()=>{b.value=!1})};return g(),(e,a)=>{const n=s("el-text"),C=s("el-input"),k=s("el-form-item"),U=s("Plus"),I=s("el-icon"),z=s("el-form"),B=s("el-dialog");return f(),y(G,null,[x("div",null,[t($,{loading:b.value,class:"table-page",columns:E,data:P.value,itemsTotalLength:S.value,onPaginationChange:K},{default:l(()=>[x("div",Y,[t(q,{items:N,onChange:a[0]||(a[0]=r=>g())},null,8,["items"])]),x("div",Z,[t(w(m),{class:"create-new-button",type:"primary",onClick:T},{default:l(()=>[i("Create New Category")]),_:1})])]),_:1},8,["loading","columns","data","itemsTotalLength"])]),t(B,{class:"information-dialog",width:"450px",modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=r=>p.value=r)},{header:l(()=>[t(n,null,{default:l(()=>[i("Create New Category")]),_:1})]),footer:l(()=>[t(w(m),{type:"primary",onClick:F},{default:l(()=>[i("Create")]),_:1}),t(w(m),{onClick:a[2]||(a[2]=r=>p.value=!1)},{default:l(()=>[i(" Cancel ")]),_:1})]),default:l(()=>[t(z,{model:o,"label-width":"120px",class:"form-container","label-position":"left"},{default:l(()=>[t(k,{prop:"category_name",label:"Name",rules:[{required:!0,message:"Please input category name",trigger:"blur"}]},{default:l(()=>[t(C,{modelValue:o.category_name,"onUpdate:modelValue":a[1]||(a[1]=r=>o.category_name=r)},null,8,["modelValue"])]),_:1}),t(k,{prop:"icon",label:"Icon",rules:[{required:!0,message:"Please select category icon",trigger:"blur"}]},{default:l(()=>[d.value?(f(),y("img",{key:1,class:"icon-shown",src:d.value,alt:"",onClick:v},null,8,ee)):(f(),y("div",{key:0,class:"icon-upload",onClick:v},[t(I,{size:"30",color:"#fff"},{default:l(()=>[t(U)]),_:1})]))]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(B,{class:"information-dialog",width:"510px",modelValue:_.value,"onUpdate:modelValue":a[6]||(a[6]=r=>_.value=r)},{header:l(()=>[t(n,null,{default:l(()=>[i("Update Category - "+A(V.value),1)]),_:1})]),footer:l(()=>[t(w(m),{type:"primary",onClick:R},{default:l(()=>[i("Update")]),_:1}),t(w(m),{onClick:a[5]||(a[5]=r=>_.value=!1)},{default:l(()=>[i(" Cancel ")]),_:1})]),default:l(()=>[t(z,{model:o,"label-width":"120px",class:"form-container","label-position":"left"},{default:l(()=>[t(k,{prop:"category_name",label:"Name",rules:[{required:!0,message:"Please input category name",trigger:"blur"}]},{default:l(()=>[t(C,{modelValue:o.category_name,"onUpdate:modelValue":a[4]||(a[4]=r=>o.category_name=r)},null,8,["modelValue"])]),_:1}),t(k,{prop:"icon",label:"Icon",rules:[{required:!0,message:"Please select category icon",trigger:"blur"}]},{default:l(()=>[d.value?(f(),y("img",{key:1,class:"icon-shown",src:d.value,alt:"",onClick:v},null,8,ae)):(f(),y("div",{key:0,class:"icon-upload",onClick:v},[t(I,{size:"30",color:"#fff"},{default:l(()=>[t(U)]),_:1})]))]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});const ie=J(te,[["__scopeId","data-v-a516c67e"]]);export{ie as default};
