import{m as u,j as e,L as d}from"./app-BpWF_zq6.js";import{A as x}from"./AuthenticatedLayout-Cia0Vt6E.js";import{I as r}from"./InputLabel-BiOPztuF.js";import{T as m}from"./TextInput-C1OGIzNU.js";import{I as o}from"./InputError-Bqut1ndV.js";import{P as h}from"./PrimaryButton-B9dUf_5g.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./inputtext.esm-CiNcK0lE.js";import"./index.esm-vtogsqpO.js";import"./keyfilter.esm-shNeTo9H.js";import"./button.esm-BmW90ZmM.js";function k(){const{data:s,setData:t,post:n,processing:i,errors:l}=u({name:"",model_number:"",manufacturer:"",serial_number:"",purchase_date:"",warranty_expiration_date:"",location:"",notes:""}),c=a=>{a.preventDefault(),n(route("admin.equipments.store"))};return e.jsxs(x,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"備品登録"}),children:[e.jsx(d,{title:"備品登録"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 bg-white border-b border-gray-200",children:e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"name",value:"名前"}),e.jsx(m,{id:"name",type:"text",className:"mt-1 block w-full",value:s.name,onChange:a=>t("name",a.target.value),required:!0,autoFocus:!0,placeholder:"名前"}),e.jsx(o,{message:l.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"model_number",value:"型番"}),e.jsx(m,{id:"model_number",type:"text",className:"mt-1 block w-full",value:s.model_number,onChange:a=>t("model_number",a.target.value),placeholder:"型番"}),e.jsx(o,{message:l.model_number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"manufacturer",value:"メーカー"}),e.jsx(m,{id:"manufacturer",type:"text",className:"mt-1 block w-full",value:s.manufacturer,onChange:a=>t("manufacturer",a.target.value),placeholder:"メーカー"}),e.jsx(o,{message:l.manufacturer,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"serial_number",value:"シリアル番号"}),e.jsx(m,{id:"serial_number",type:"text",className:"mt-1 block w-full",value:s.serial_number,onChange:a=>t("serial_number",a.target.value),placeholder:"シリアル番号"}),e.jsx(o,{message:l.serial_number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"purchase_date",value:"購入日"}),e.jsx(m,{id:"purchase_date",type:"date",className:"mt-1 block w-full",value:s.purchase_date,onChange:a=>t("purchase_date",a.target.value),placeholder:"購入日"}),e.jsx(o,{message:l.purchase_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"warranty_expiration_date",value:"保証満了日"}),e.jsx(m,{id:"warranty_expiration_date",type:"date",className:"mt-1 block w-full",value:s.warranty_expiration_date,onChange:a=>t("warranty_expiration_date",a.target.value),placeholder:"保証満了日"}),e.jsx(o,{message:l.warranty_expiration_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"location",value:"保管場所"}),e.jsx(m,{id:"location",type:"text",className:"mt-1 block w-full",value:s.location,onChange:a=>t("location",a.target.value),placeholder:"保管場所"}),e.jsx(o,{message:l.location,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(r,{htmlFor:"notes",value:"備考"}),e.jsx(m,{id:"notes",type:"text",className:"mt-1 block w-full",value:s.notes,onChange:a=>t("notes",a.target.value),placeholder:"備考"}),e.jsx(o,{message:l.notes,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(h,{className:"ml-4",disabled:i,children:"登録"})})]})})})})})]})}export{k as default};
