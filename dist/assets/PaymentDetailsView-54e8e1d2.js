import{d as I,g as m,B as P,r as x,E as h,n as S,o as n,c as r,D as f,q as C,F as k,k as w,b as s,t as d,p as L,m as V,_ as B}from"./index-598e1e45.js";import{f as E}from"./orders-f0a9bf85.js";import{p as F}from"./payment-6fbc7ebe.js";import"./http-dc5150a7.js";const N="/assets/paypal-icon-65b64cf0.png",p=c=>(L("data-v-900b0123"),c=c(),V(),c),O={class:"payment-details"},W=p(()=>s("h2",null,"Order Summary",-1)),$={key:0},q={class:"order-items"},A={key:1,class:"total-amount"},R=p(()=>s("span",null,"Total Amount:",-1)),M=p(()=>s("h3",null,"Payment With",-1)),T=p(()=>s("img",{src:N,alt:"PayPal"},null,-1)),U=[T],j=I({__name:"PaymentDetailsView",setup(c){const l=m(!0),u=m([]),v=m("");P(async()=>{D()});const D=()=>{l.value=!0;const _=localStorage.getItem("usyd-customer-id"),a=x.currentRoute.value.params.orderId;var o={user_id:_,order_id:a};E(o).then(e=>{e.success&&(u.value=e.data,v.value=e.data[0].order_id)}).catch(e=>{var t,i,y,g;h({title:"Warning",message:((i=(t=e.response)==null?void 0:t.data)==null?void 0:i.detail)||((g=(y=e.response)==null?void 0:y.data)==null?void 0:g.message)||e.message,type:"warning"})}).finally(()=>{l.value=!1})},b=()=>{l.value=!0;var _={order_id:v.value};F(_).then(a=>{if(a.success&&a.data.approval_url){const o=a.data.approval_url;window.open(o,"_self")}}).catch(a=>{var o,e,t,i;h({title:"Warning",message:((e=(o=a.response)==null?void 0:o.data)==null?void 0:e.detail)||((i=(t=a.response)==null?void 0:t.data)==null?void 0:i.message)||a.message,type:"warning"})}).finally(()=>{l.value=!1})};return(_,a)=>{const o=S("loading");return n(),r("div",O,[W,l.value?(n(),r("div",$,"Loading ...")):f("",!0),C((n(),r("div",q,[(n(!0),r(k,null,w(u.value,e=>(n(),r("div",{key:e.order_id},[(n(!0),r(k,null,w(e.order_items,t=>(n(),r("div",{key:t.order_item_id,class:"order-item"},[s("span",null,d(t.product.product_name)+" @ $"+d(t.product.price)+" x "+d(t.quantity),1),s("span",null,"$"+d(t.sub_total.toFixed(2)),1)]))),128))]))),128))])),[[o,l.value,void 0,{fullscreen:!0,lock:!0}]]),u.value.length?(n(),r("div",A,[R,s("span",null,"$"+d(u.value[0].total_amount),1)])):f("",!0),M,s("div",{class:"paymentoption"},[s("button",{class:"paypal-button",onClick:b},U)])])}}});const K=B(j,[["__scopeId","data-v-900b0123"]]);export{K as default};