import{m as f,r as g,j as e,L as N}from"./app-BpWF_zq6.js";import{A as w}from"./AuthenticatedLayout-Cia0Vt6E.js";import{I as o}from"./InputError-Bqut1ndV.js";import{I as s}from"./InputLabel-BiOPztuF.js";import{P as b}from"./PrimaryButton-B9dUf_5g.js";import{T as y}from"./TextInput-C1OGIzNU.js";import{D as F}from"./dropdown.esm-CgEdlw6j.js";import{F as L}from"./fileupload.esm-D9j-4HwW.js";import{I}from"./inputtextarea.esm-BQXAVc5i.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./button.esm-BmW90ZmM.js";import"./index.esm-vtogsqpO.js";import"./inputtext.esm-CiNcK0lE.js";import"./keyfilter.esm-shNeTo9H.js";import"./csstransition.esm-C-9dod2f.js";import"./index.esm-DLHf4VXQ.js";import"./index.esm-KgL8FXsT.js";function M({warehouses:c}){const{data:r,setData:a,post:d,processing:p,errors:l,reset:u}=f({title:"",content:"",warehouse_id:"",photo:null}),[i,h]=g.useState(null),x=t=>{t.preventDefault(),d(route("warehouse.posts.store"),{onSuccess:()=>u()})},j=t=>{const m=t.files[0];if(m){a("photo",m);const n=new FileReader;n.onload=v=>{h(v.target.result)},n.readAsDataURL(m)}};return e.jsxs(w,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"新規倉庫掲示板投稿作成"}),children:[e.jsx(N,{title:"新規倉庫掲示板投稿作成"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:x,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(s,{htmlFor:"title",value:"タイトル"}),e.jsx(y,{id:"title",type:"text",name:"title",value:r.title,className:"block mt-1 w-full",onChange:t=>a("title",t.target.value),required:!0}),e.jsx(o,{message:l.title,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(s,{htmlFor:"warehouse_id",value:"倉庫"}),e.jsx(F,{id:"warehouse_id",value:r.warehouse_id,options:c.map(t=>({label:t.name,value:t.id})),onChange:t=>a("warehouse_id",t.value),placeholder:"倉庫を選択",className:"block mt-1 w-full",required:!0}),e.jsx(o,{message:l.warehouse_id,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(s,{htmlFor:"content",value:"内容"}),e.jsx(I,{id:"content",value:r.content,onChange:t=>a("content",t.target.value),style:{height:"320px"},className:"block p-2 mt-1 w-full",rows:10}),e.jsx(o,{message:l.content,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(s,{htmlFor:"photo",value:"画像（任意）"}),e.jsx(L,{id:"photo",name:"photo",accept:"image/*",maxFileSize:2e6,emptyTemplate:e.jsx("p",{className:"m-0",children:"ここに画像をドラッグ＆ドロップするか、選択ボタンをクリックしてください。"}),chooseLabel:"選択",uploadLabel:"アップロード",cancelLabel:"キャンセル",className:"mt-1",onSelect:j,auto:!0,customUpload:!0,uploadHandler:t=>t.options.clear()}),e.jsx(o,{message:l.photo,className:"mt-2"})]}),i&&e.jsxs("div",{className:"mb-4",children:[e.jsx(s,{value:"プレビュー"}),e.jsx("div",{className:"mt-2",children:e.jsx("img",{src:i,alt:"Preview",className:"max-w-full h-auto",style:{maxHeight:"200px"}})})]}),e.jsx("div",{className:"flex justify-end items-center mt-4",children:e.jsx(b,{className:"ml-4",disabled:p,children:"投稿する"})})]})})})})})]})}export{M as default};
