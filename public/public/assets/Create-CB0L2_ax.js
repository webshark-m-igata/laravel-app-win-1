import{r as t,j as e,L as N}from"./app-C_VpYGxz.js";import{A as b}from"./AuthenticatedLayout-BhKz8ASb.js";import{d as f}from"./index-DqdOMha3.js";import{I as r}from"./InputError-g53YH0EC.js";import{I as m}from"./InputLabel-H2mCVwnp.js";import{T as l}from"./TextInput-CpfV21lA.js";import{P as w}from"./PrimaryButton-0UiQoYTQ.js";import"./ApplicationLogo-Rn-u47Bk.js";import"./transition-D4a18DGV.js";import"./inputtext.esm-DmJY5JdX.js";import"./index.esm-gPmM3xbw.js";import"./keyfilter.esm-3hvR30qr.js";import"./button.esm-bnpRw93X.js";function B({auth:h}){const[o,i]=t.useState(""),[n,u]=t.useState(""),[d,p]=t.useState(""),[c,j]=t.useState(""),[a,x]=t.useState({}),v=s=>{s.preventDefault(),f.Inertia.post(route("admin.warehouses.store"),{name:o,address:n,phone_number:d,email:c},{onSuccess:()=>{i(""),u(""),x({})},onError:g=>{x(g)}})};return e.jsxs(b,{user:h.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"倉庫登録"}),children:[e.jsx(N,{title:"倉庫登録"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 bg-white border-b border-gray-200",children:e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"名前"}),e.jsx(l,{id:"name",type:"text",className:"block mt-1 w-full",value:o,onChange:s=>i(s.target.value),required:!0,autoFocus:!0}),e.jsx(r,{message:a.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"address",value:"住所"}),e.jsx(l,{id:"address",type:"text",className:"block mt-1 w-full",value:n,onChange:s=>u(s.target.value),required:!0}),e.jsx(r,{message:a.address,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"phone_number",value:"電話番号"}),e.jsx(l,{id:"phone_number",type:"text",className:"block mt-1 w-full",value:d,onChange:s=>p(s.target.value)}),e.jsx(r,{message:a.phone_number,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",value:"メールアドレス"}),e.jsx(l,{id:"email",type:"email",className:"block mt-1 w-full",value:c,onChange:s=>j(s.target.value)}),e.jsx(r,{message:a.email,className:"mt-2"})]}),e.jsx("div",{className:"flex justify-end items-center mt-4",children:e.jsx(w,{children:"登録"})})]})})})})})]})}export{B as default};
