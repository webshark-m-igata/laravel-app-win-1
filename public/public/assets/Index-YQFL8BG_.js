import{r as d,j as e,L as n,$ as m}from"./app-BpWF_zq6.js";import{A as h}from"./AuthenticatedLayout-Cia0Vt6E.js";import{d as p}from"./index-Ci0WszC2.js";import{D as c,C as r}from"./column.esm-o_G5tAGV.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./index.esm-vtogsqpO.js";import"./inputtext.esm-CiNcK0lE.js";import"./keyfilter.esm-shNeTo9H.js";import"./dropdown.esm-CgEdlw6j.js";import"./csstransition.esm-C-9dod2f.js";import"./index.esm-DLHf4VXQ.js";import"./index.esm-BW3I__JH.js";import"./button.esm-BmW90ZmM.js";import"./index.esm-KgL8FXsT.js";function L({auth:s,warehouses:l}){const[i,a]=d.useState(null),o=t=>{confirm("この倉庫を削除してもよろしいですか？")&&p.Inertia.delete(`/admin/warehouses/${t}`)};return e.jsxs(h,{user:s.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"倉庫一覧"}),children:[e.jsx(n,{title:"倉庫一覧"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 bg-white border-b border-gray-200",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("a",{href:"/admin/warehouses/create",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700",children:"倉庫登録"}),e.jsxs("span",{className:"p-input-icon-left",children:[e.jsx("i",{className:"pi pi-search"}),e.jsx("input",{type:"search",className:"p-inputtext p-component",placeholder:"検索...",onInput:t=>a(t.target.value)})]})]}),e.jsxs(c,{value:l,paginator:!0,rows:10,rowsPerPageOptions:[5,10,25,50],tableStyle:{minWidth:"50rem"},globalFilter:i,emptyMessage:"倉庫が見つかりません",sortMode:"multiple",removableSort:!0,resizableColumns:!0,columnResizeMode:"fit",className:"p-datatable-sm",stripedRows:!0,children:[e.jsx(r,{field:"id",header:"ID",sortable:!0,filter:!0,filterPlaceholder:"IDで検索",style:{width:"5%"}}),e.jsx(r,{field:"name",header:"名前",sortable:!0,filter:!0,filterPlaceholder:"名前で検索",style:{width:"15%"}}),e.jsx(r,{field:"address",header:"住所",sortable:!0,filter:!0,filterPlaceholder:"住所で検索",style:{width:"30%"}}),e.jsx(r,{field:"phone_number",header:"電話番号",sortable:!0,filter:!0,filterPlaceholder:"電話番号で検索",style:{width:"15%"}}),e.jsx(r,{field:"email",header:"メールアドレス",sortable:!0,filter:!0,filterPlaceholder:"メールアドレスで検索",style:{width:"20%"}}),e.jsx(r,{header:"操作",style:{width:"15%"},body:t=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(m,{href:route("admin.warehouses.edit",t.id),className:"px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700",children:"編集"}),e.jsx("button",{className:"px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-700",onClick:()=>o(t.id),children:"削除"})]})})]})]})})})})]})}export{L as default};
