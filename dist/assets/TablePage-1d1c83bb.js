import{d as w,e as s,o as n,c as u,F as y,k as V,i,w as d,a as v,u as b,t as x,f as S,l as I,L,p as U,m as $,b as z,_ as P,G as T,n as D,M as E,q as N}from"./index-598e1e45.js";var B=(t=>(t[t.Input=0]="Input",t[t.Select=1]="Select",t))(B||{});const F=t=>(U("data-v-520a6e72"),t=t(),$(),t),H={class:"search-bar-element"},R=F(()=>z("div",{style:{"flex-grow":"1"}},null,-1)),j=w({__name:"SearchBar",props:{items:{}},emits:["change"],setup(t,{emit:p}){const e=t;console.log(e.items);const g=()=>{console.log(e.items),p("change",e.items)};(()=>{e.items.forEach(l=>{l.label||(l.label="Please Input")})})();const a=()=>{e.items.forEach(l=>{console.log(l),l.value=""}),p("change",e.items)};return(l,k)=>{const h=s("el-text"),m=s("el-option"),f=s("el-select"),c=s("el-input"),_=s("el-button");return n(),u("div",H,[(n(!0),u(y,null,V(l.items,o=>(n(),u("div",{class:"search-element",key:o.name},[i(h,{class:"search-title"},{default:d(()=>[v(x(o.name),1)]),_:2},1024),o.type==b(B).Select?(n(),S(f,{key:0,filterable:"",multiple:!o.single,class:"search-input",placeholder:o.label,modelValue:o.value,"onUpdate:modelValue":r=>o.value=r},{default:d(()=>[(n(!0),u(y,null,V(o.options,r=>(n(),S(m,{key:r.id,label:r.name,value:r.id},null,8,["label","value"]))),128))]),_:2},1032,["multiple","placeholder","modelValue","onUpdate:modelValue"])):(n(),S(c,{key:1,class:"search-input",placeholder:o.label,modelValue:o.value,"onUpdate:modelValue":r=>o.value=r},null,8,["placeholder","modelValue","onUpdate:modelValue"]))]))),128)),R,i(_,{onClick:g,class:"button",icon:b(I),type:"primary"},{default:d(()=>[v("Search")]),_:1},8,["icon"]),i(_,{onClick:a,class:"button",icon:b(L)},{default:d(()=>[v("Reset")]),_:1},8,["icon"])])}}});const K=P(j,[["__scopeId","data-v-520a6e72"]]),q={class:"page-table-container"},G={class:"page-table-auto-resizer"},M={class:"page-table-pagination"},A=w({__name:"TablePage",props:{columns:{},data:{},rowHeight:{},itemsTotalLength:{},loading:{type:Boolean}},emits:["paginationChange"],setup(t,{emit:p}){const e=T({currentPage:1,pageSize:20}),g=a=>{console.log(`${a} items per page`),e.pageSize=a,p("paginationChange",e)},C=a=>{console.log(`current page: ${a}`),e.currentPage=a,p("paginationChange",e)};return(a,l)=>{const k=s("el-table-v2"),h=s("el-auto-resizer"),m=s("el-pagination"),f=D("loading");return n(),u("div",q,[E(a.$slots,"default",{},void 0,!0),z("div",G,[i(h,null,{default:d(({height:c,width:_})=>[N(i(k,{"element-loading-text":"Loading...",columns:a.columns,data:a.data,width:_,height:c,fixed:"","row-height":a.rowHeight||39},null,8,["columns","data","width","height","row-height"]),[[f,a.loading||!1]])]),_:1})]),z("div",M,[i(m,{"current-page":e.currentPage,"onUpdate:currentPage":l[0]||(l[0]=c=>e.currentPage=c),"page-size":e.pageSize,"onUpdate:pageSize":l[1]||(l[1]=c=>e.pageSize=c),"page-sizes":[1,2,20,40,60],small:!1,layout:"total, sizes, prev, pager, next, jumper",total:a.itemsTotalLength,onSizeChange:g,onCurrentChange:C},null,8,["current-page","page-size","total"])])])}}});const O=P(A,[["__scopeId","data-v-c872bfa3"]]);export{B as I,K as S,O as T};
