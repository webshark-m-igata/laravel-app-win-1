import{K as k,r as a,m as C,j as e,L as E,S as I}from"./app-BpWF_zq6.js";import{A as L}from"./AuthenticatedLayout-Cia0Vt6E.js";import{I as l}from"./InputLabel-BiOPztuF.js";import{T as m}from"./TextInput-C1OGIzNU.js";import{S as D}from"./SelectInput-DAlpAUIW.js";import{I as o}from"./InputError-Bqut1ndV.js";import{P}from"./PrimaryButton-B9dUf_5g.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./inputtext.esm-CiNcK0lE.js";import"./index.esm-vtogsqpO.js";import"./keyfilter.esm-shNeTo9H.js";import"./dropdown.esm-CgEdlw6j.js";import"./csstransition.esm-C-9dod2f.js";import"./index.esm-DLHf4VXQ.js";import"./button.esm-BmW90ZmM.js";function W({auth:h}){const{shop:t}=k().props,[n,j]=a.useState(t.name),[i,v]=a.useState(t.description||""),[u,g]=a.useState(t.opening_hours||""),[c,N]=a.useState(t.status||""),[p,f]=a.useState(t.phone_number||""),[d,b]=a.useState(t.url||""),{data:S,setData:x,put:w,processing:y,errors:r}=C({name:n,description:i,opening_hours:u,status:c,phone_number:p,url:d});a.useEffect(()=>{x({name:n,description:i,opening_hours:u,status:c,phone_number:p,url:d})},[n,i,u,c,p,d,x]);const _=s=>{s.preventDefault(),w(`/admin/shops/${t.id}`,S,{onSuccess:()=>I.push("/admin/shops"),onError:F=>{console.error("店舗データの更新に失敗しました:",F)}})};return e.jsxs(L,{user:h.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"店舗編集"}),children:[e.jsx(E,{title:"店舗編集"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:_,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"店舗名"}),e.jsx(m,{id:"name",type:"text",value:n,className:"block mt-1 w-full",isFocused:!0,onChange:s=>j(s.target.value),required:!0}),e.jsx(o,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"description",value:"店舗説明"}),e.jsx(m,{id:"description",type:"text",value:i,className:"block mt-1 w-full",onChange:s=>v(s.target.value)}),e.jsx(o,{message:r.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"opening_hours",value:"営業時間"}),e.jsx(m,{id:"opening_hours",type:"text",value:u,className:"block mt-1 w-full",onChange:s=>g(s.target.value)}),e.jsx(o,{message:r.opening_hours,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"status",value:"ステータス"}),e.jsxs(D,{id:"status",className:"block mt-1 w-full",value:c,onChange:s=>N(s.target.value),children:[e.jsx("option",{value:"",children:"選択してください"}),e.jsx("option",{value:"営業中",children:"営業中"}),e.jsx("option",{value:"準備中",children:"準備中"}),e.jsx("option",{value:"休業中",children:"休業中"}),e.jsx("option",{value:"閉店",children:"閉店"})]}),e.jsx(o,{message:r.status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"phone_number",value:"電話番号"}),e.jsx(m,{id:"phone_number",type:"text",value:p,className:"block mt-1 w-full",onChange:s=>f(s.target.value)}),e.jsx(o,{message:r.phone_number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"url",value:"ウェブサイトURL"}),e.jsx(m,{id:"url",type:"text",value:d,className:"block mt-1 w-full",onChange:s=>b(s.target.value)}),e.jsx(o,{message:r.url,className:"mt-2"})]}),e.jsx("div",{className:"flex gap-4 items-center mt-4",children:e.jsx(P,{disabled:y,children:"保存"})})]})})})})})]})}export{W as default};
