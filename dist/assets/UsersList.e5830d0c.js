import{_ as m,j as k,s as y,r as f,o,c as a,u as l,F as c,d as _,e as u,a as t,n as w,p as N,t as d,q as b,v as g,g as h}from"./index.e3efdd73.js";const p=s=>(b("data-v-36331617"),s=s(),g(),s),v={class:"list-container"},S=p(()=>t("h1",null,"Users",-1)),U=h("Add User"),x={class:"table"},C=p(()=>t("thead",null,[t("tr",null,[t("th",{style:{width:"20%"}},"First Name"),t("th",{style:{width:"20%"}},"Last Name"),t("th",{style:{width:"20%"}},"Username"),t("th",{style:{width:"20%"}})])],-1)),I={style:{"white-space":"nowrap"}},L=h("Edit"),V=["onClick","disabled"],B={__name:"UsersList",setup(s){const n=k(),{users:r}=y(n);return n.getAll(),(D,F)=>{const i=f("router-link");return o(),a("div",v,[l(r).length?(o(),a(c,{key:0},[S,_(i,{class:"router-link add-link",to:"/users/add"},{default:u(()=>[U]),_:1}),t("table",x,[C,t("tbody",null,[(o(!0),a(c,null,w(l(r),e=>(o(),a("tr",{key:e.id},[t("td",null,d(e.firstName),1),t("td",null,d(e.lastName),1),t("td",null,d(e.username),1),t("td",I,[_(i,{class:"router-link edit-link",to:`/users/edit/${e.id}`},{default:u(()=>[L]),_:2},1032,["to"]),t("button",{type:"button",onClick:A=>l(n).delete(e.id),disabled:e.isDeleting},"Delete",8,V)])]))),128))])])],64)):N("",!0)])}}},T=m(B,[["__scopeId","data-v-36331617"]]);export{T as default};
