import{S as V,T as p}from"./TablePage-ca487319.js";import{d as L,J as b,G as l,g as a,e as _,o as S,c as B,b as y,i as o,w as s,a as h,F as M,K as z,_ as O}from"./index-1c796aa9.js";import{h as R}from"./orders-dac98f4c.js";import"./http-8cec2738.js";const N={class:"div-search-bar"},U=L({__name:"OrderManagementView",setup(A){b();const u=l([{name:"User ID",value:""},{name:"Payment Record",value:""}]),r=a(!0),m=a([]),v=l([{dataKey:"order_date",key:"order_date",title:"Date",width:200},{dataKey:"user_id",key:"user_id",title:"UserID",width:200},{dataKey:"total_amount",key:"total_amount",title:"Amount",width:150},{dataKey:"status",key:"status",title:"status",width:150},{dataKey:"payment_type",key:"payment_type",title:"Payment Type",width:180},{dataKey:"payment_ref",key:"payment_ref",title:"Payment Record",width:250},{key:"option",title:"Options",cellRenderer:e=>o("div",null,[o(z,{link:!0,type:"primary",onClick:()=>{I(e)}},{default:()=>[h("Show more")]})]),width:150,fixed:"right",align:"center"}]),n=l({currentPage:1,pageSize:20}),f=e=>{n.currentPage=e.currentPage,n.pageSize=e.pageSize,i()},c=a(),i=()=>{r.value=!0;var e={page_num:n.currentPage,page_size:n.pageSize,username:u[0].value};R(e).then(t=>{console.log(t),t.success&&(m.value=t.data,c.value=t.page.total)}).catch(()=>{}).finally(()=>{r.value=!1})},d=a(!1),w=a("888"),I=e=>{console.log(e),w.value=e.rowData.product_id,d.value=!0},k=a(!1),P=a([]),C=l([{dataKey:"total_amount",key:"total_amount",title:"Amount",width:150},{dataKey:"status",key:"status",title:"status",width:150},{dataKey:"payment_type",key:"payment_type",title:"PaymentType",width:180}]),x=a(0),K=()=>{};return i(),(e,t)=>{const T=_("el-text"),D=_("el-dialog");return S(),B(M,null,[y("div",null,[o(p,{loading:r.value,class:"table-page",columns:v,data:m.value,itemsTotalLength:c.value,onPaginationChange:f},{default:s(()=>[y("div",N,[o(V,{items:u,onChange:t[0]||(t[0]=g=>i())},null,8,["items"])])]),_:1},8,["loading","columns","data","itemsTotalLength"])]),o(D,{class:"information-dialog",width:"600px",modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=g=>d.value=g)},{header:s(()=>[o(T,null,{default:s(()=>[h("Order Information")]),_:1})]),default:s(()=>[o(p,{loading:k.value,class:"order-items-table",columns:C,data:P.value,itemsTotalLength:x.value,onPaginationChange:K},null,8,["loading","columns","data","itemsTotalLength"])]),_:1},8,["modelValue"])],64)}}});const $=O(U,[["__scopeId","data-v-0e8e62a1"]]);export{$ as default};