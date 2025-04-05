import{r as t,j as e,L as v}from"./app-BpWF_zq6.js";import{A as w}from"./AuthenticatedLayout-Cia0Vt6E.js";import{d as k}from"./index-Ci0WszC2.js";import{D as S}from"./dropdown.esm-CgEdlw6j.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./index.esm-vtogsqpO.js";import"./csstransition.esm-C-9dod2f.js";import"./index.esm-DLHf4VXQ.js";function W({auth:x,shops:g,warehouses:h}){const[o,b]=t.useState(""),[l,p]=t.useState(""),[n,f]=t.useState(""),[a,c]=t.useState([]),[i,m]=t.useState([]),[u,j]=t.useState("user"),y=[{label:"User",value:"user"},{label:"Admin",value:"admin"}],N=s=>{s.preventDefault(),k.Inertia.post("/admin/users",{name:o,email:l,password:n,shop_ids:a,warehouse_ids:i,role:u})};return e.jsxs(w,{user:x.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Create User"}),children:[e.jsx(v,{title:"Create User"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 bg-white border-b border-gray-200",children:e.jsxs("form",{onSubmit:N,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",id:"name",className:"block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:o,onChange:s=>b(s.target.value)})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",id:"email",className:"block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:l,onChange:s=>p(s.target.value)})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{type:"password",id:"password",className:"block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:n,onChange:s=>f(s.target.value)})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Shops"}),e.jsx("div",{className:"mt-2 space-y-2",children:g.map(s=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:`shop-${s.id}`,className:"text-indigo-600 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",checked:a.includes(s.id),onChange:r=>{r.target.checked?c([...a,s.id]):c(a.filter(d=>d!==s.id))}}),e.jsx("label",{htmlFor:`shop-${s.id}`,className:"ml-2 text-sm text-gray-700",children:s.name})]},s.id))})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Warehouses"}),e.jsx("div",{className:"mt-2 space-y-2",children:h.map(s=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:`warehouse-${s.id}`,className:"text-indigo-600 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",checked:i.includes(s.id),onChange:r=>{r.target.checked?m([...i,s.id]):m(i.filter(d=>d!==s.id))}}),e.jsx("label",{htmlFor:`warehouse-${s.id}`,className:"ml-2 text-sm text-gray-700",children:s.name})]},s.id))})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Role"}),e.jsx(S,{value:u,options:y,onChange:s=>j(s.value),placeholder:"Select a Role",className:"block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"})]}),e.jsx("div",{className:"mt-4",children:e.jsx("button",{type:"submit",className:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25",children:"Create"})})]})})})})})]})}export{W as default};
