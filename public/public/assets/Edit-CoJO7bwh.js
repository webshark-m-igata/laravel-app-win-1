import{m as u,j as e,L as x}from"./app-C_VpYGxz.js";import{A as h}from"./AuthenticatedLayout-BhKz8ASb.js";import{I as m}from"./InputLabel-H2mCVwnp.js";import{T as o}from"./TextInput-CpfV21lA.js";import{I as n}from"./InputError-g53YH0EC.js";import{P as p}from"./PrimaryButton-0UiQoYTQ.js";import"./ApplicationLogo-Rn-u47Bk.js";import"./transition-D4a18DGV.js";import"./inputtext.esm-DmJY5JdX.js";import"./index.esm-gPmM3xbw.js";import"./keyfilter.esm-3hvR30qr.js";import"./button.esm-bnpRw93X.js";function I({equipment:s}){const{data:t,setData:l,put:i,processing:c,errors:r}=u({name:s.name,model_number:s.model_number,manufacturer:s.manufacturer,serial_number:s.serial_number,purchase_date:s.purchase_date,warranty_expiration_date:s.warranty_expiration_date,location:s.location,notes:s.notes}),d=a=>{a.preventDefault(),i(route("admin.equipments.update",s.id))};return e.jsxs(h,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"備品編集"}),children:[e.jsx(x,{title:"備品編集"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 bg-white border-b border-gray-200",children:e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"名前"}),e.jsx(o,{id:"name",type:"text",className:"mt-1 block w-full",value:t.name,onChange:a=>l("name",a.target.value),required:!0,autoFocus:!0,placeholder:"名前"}),e.jsx(n,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"model_number",value:"型番"}),e.jsx(o,{id:"model_number",type:"text",className:"mt-1 block w-full",value:t.model_number,onChange:a=>l("model_number",a.target.value),placeholder:"型番"}),e.jsx(n,{message:r.model_number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"manufacturer",value:"メーカー"}),e.jsx(o,{id:"manufacturer",type:"text",className:"mt-1 block w-full",value:t.manufacturer,onChange:a=>l("manufacturer",a.target.value),placeholder:"メーカー"}),e.jsx(n,{message:r.manufacturer,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"serial_number",value:"シリアル番号"}),e.jsx(o,{id:"serial_number",type:"text",className:"mt-1 block w-full",value:t.serial_number,onChange:a=>l("serial_number",a.target.value),placeholder:"シリアル番号"}),e.jsx(n,{message:r.serial_number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"purchase_date",value:"購入日"}),e.jsx(o,{id:"purchase_date",type:"date",className:"mt-1 block w-full",value:t.purchase_date,onChange:a=>l("purchase_date",a.target.value),placeholder:"購入日"}),e.jsx(n,{message:r.purchase_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"warranty_expiration_date",value:"保証満了日"}),e.jsx(o,{id:"warranty_expiration_date",type:"date",className:"mt-1 block w-full",value:t.warranty_expiration_date,onChange:a=>l("warranty_expiration_date",a.target.value),placeholder:"保証満了日"}),e.jsx(n,{message:r.warranty_expiration_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"location",value:"保管場所"}),e.jsx(o,{id:"location",type:"text",className:"mt-1 block w-full",value:t.location,onChange:a=>l("location",a.target.value),placeholder:"保管場所"}),e.jsx(n,{message:r.location,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"notes",value:"備考"}),e.jsx(o,{id:"notes",type:"text",className:"mt-1 block w-full",value:t.notes,onChange:a=>l("notes",a.target.value),placeholder:"備考"}),e.jsx(n,{message:r.notes,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ml-4",disabled:c,children:"更新"})})]})})})})})]})}export{I as default};
