import{d as b,g as f,e as a,o as C,c as w,i as o,w as n,b as e,t as c,a as p,u as x,z as V,A as S,p as I,m as P,_ as k}from"./index-598e1e45.js";const _=s=>(I("data-v-6e162db7"),s=s(),P(),s),z={class:"image-container"},B={class:"title"},N={class:"price"},T=_(()=>e("div",{style:{width:"10px"}},null,-1)),$={class:"card-button"},q={class:"quantity-wrapper"},A=_(()=>e("b",null,"Add to cart",-1)),D=b({__name:"ProductCard",props:{product:{},width:{}},emits:["addToCart"],setup(s,{emit:u}){const l=f(1),m="http://127.0.0.1/";return(t,d)=>{const v=a("el-image"),r=a("el-text"),g=a("el-input-number"),y=a("el-button"),h=a("el-card");return C(),w("div",null,[o(h,{style:S({width:(t.width||300)+"px"}),class:"product-card","body-style":{padding:"0px"}},{default:n(()=>[e("div",z,[o(v,{class:"product-image",src:m+t.product.images[0].image,"zoom-rate":1.1,"max-scale":5,"min-scale":.7,fit:"contain"},null,8,["src"])]),e("div",B,c(t.product.product_name),1),e("div",N,[o(r,{class:"real-price",tag:"b"},{default:n(()=>[p("$"+c(t.product.price),1)]),_:1}),T,o(r,{class:"original-price",tag:"del"},{default:n(()=>[p("$"+c(t.product.original_price),1)]),_:1})]),e("div",$,[e("div",q,[o(g,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=i=>l.value=i),min:1,max:10},null,8,["modelValue"])]),o(y,{type:"primary",icon:x(V),onClick:d[1]||(d[1]=i=>u("addToCart",t.product,l.value))},{default:n(()=>[A]),_:1},8,["icon"])])]),_:1},8,["style"])])}}});const U=k(D,[["__scopeId","data-v-6e162db7"]]);export{U as P};
