import{r as s,j as e,L as b,$ as l}from"./app-BpWF_zq6.js";import{A as f}from"./AuthenticatedLayout-Cia0Vt6E.js";import{d as j}from"./index-Ci0WszC2.js";import{D as g,C as r}from"./column.esm-o_G5tAGV.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./index.esm-vtogsqpO.js";import"./inputtext.esm-CiNcK0lE.js";import"./keyfilter.esm-shNeTo9H.js";import"./dropdown.esm-CgEdlw6j.js";import"./csstransition.esm-C-9dod2f.js";import"./index.esm-DLHf4VXQ.js";import"./index.esm-BW3I__JH.js";import"./button.esm-BmW90ZmM.js";import"./index.esm-KgL8FXsT.js";function z({auth:o,posts:d,search_title:n,search_content:c}){const[a,h]=s.useState(n||""),[i,m]=s.useState(c||""),[p,u]=s.useState(null),x=t=>{confirm("この掲示を削除してもよろしいですか？")&&j.Inertia.delete(route("admin.posts.destroy",t))};return e.jsxs(f,{user:o.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"掲示板一覧"}),children:[e.jsx(b,{title:"掲示板一覧"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 bg-white border-b border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx(l,{href:"/admin/posts/create",className:"inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700",children:"新規掲示板作成"}),e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"タイトルで検索",className:"p-2 mr-2 rounded border",value:a,onChange:t=>h(t.target.value)}),e.jsx("input",{type:"text",placeholder:"コンテンツで検索",className:"p-2 mr-2 rounded border",value:i,onChange:t=>m(t.target.value)}),e.jsx(l,{href:route("admin.posts.index",{search_title:a,search_content:i}),className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700",children:"検索"})]})]}),e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("span",{}),e.jsxs("span",{className:"p-input-icon-left",children:[e.jsx("i",{className:"pi pi-search"}),e.jsx("input",{type:"search",className:"p-inputtext p-component",placeholder:"グローバル検索...",onInput:t=>u(t.target.value)})]})]}),e.jsxs(g,{value:d,paginator:!0,rows:10,rowsPerPageOptions:[5,10,25,50],tableStyle:{minWidth:"50rem"},globalFilter:p,emptyMessage:"掲示板が見つかりません",sortMode:"multiple",removableSort:!0,resizableColumns:!0,columnResizeMode:"fit",className:"p-datatable-sm",stripedRows:!0,children:[e.jsx(r,{field:"shop.name",header:"店舗",sortable:!0,filter:!0,filterPlaceholder:"店舗で検索",style:{width:"12%"},body:t=>t.shop?t.shop.name:"未設定"}),e.jsx(r,{field:"user.name",header:"名前",sortable:!0,filter:!0,filterPlaceholder:"名前で検索",style:{width:"8%"},body:t=>t.user?t.user.name:"未設定"}),e.jsx(r,{field:"created_at",header:"作成日",sortable:!0,filter:!0,filterPlaceholder:"作成日で検索",style:{width:"10%"},body:t=>new Date(t.created_at).toLocaleDateString()}),e.jsx(r,{field:"id",header:"ID",sortable:!0,filter:!0,filterPlaceholder:"IDで検索",style:{width:"5%"}}),e.jsx(r,{field:"title",header:"タイトル",sortable:!0,filter:!0,filterPlaceholder:"タイトルで検索",style:{width:"20%"}}),e.jsx(r,{header:"操作",style:{width:"20%"},body:t=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(l,{href:route("admin.posts.edit",t.id),className:"px-2 py-1 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700",children:"編集"}),e.jsx("button",{className:"px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-700",onClick:()=>x(t.id),children:"削除"})]})})]})]})})})})]})}export{z as default};
