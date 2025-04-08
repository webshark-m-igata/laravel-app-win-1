import{r as g,m as N,j as e,L as b}from"./app-Brt7EZNP.js";import{A as w}from"./AuthenticatedLayout-3E0YaIke.js";import{I as o}from"./InputError-BYpYqRrS.js";import{I as r}from"./InputLabel-D1U0hF6w.js";import{P as y}from"./PrimaryButton-BJcW6R7D.js";import{T as L}from"./TextInput-Ct-yI7GR.js";import{D as _}from"./dropdown.esm-BRPwmJLB.js";import{F}from"./fileupload.esm-DrQI_dCm.js";import{I as P}from"./inputtextarea.esm-DVpv4M8C.js";import"./ApplicationLogo-DrFb5_q6.js";import"./transition-Db6AheMs.js";import"./button.esm-aq_fVy9n.js";import"./index.esm-DgRHuPSh.js";import"./inputtext.esm-B9ruA9or.js";import"./keyfilter.esm-D9TtOtmd.js";import"./csstransition.esm-Dy1zVw1G.js";import"./index.esm-BtThlGHU.js";import"./index.esm-84gqDqFK.js";function K({post:s,shops:p}){const[n,d]=g.useState(s.photo?`/storage/${s.photo}`:null),{data:i,setData:a,post:h,processing:u,errors:l,reset:x}=N({title:s.title,content:s.content,shop_id:s.shop_id,photo:null,delete_photo:!1,_method:"PATCH"}),j=t=>{t.preventDefault(),h(route("post.update",s.id),{onSuccess:()=>x()})},v=t=>{const m=t.files[0];if(m){a("photo",m);const c=new FileReader;c.onload=f=>{d(f.target.result)},c.readAsDataURL(m)}};return e.jsxs(w,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"投稿編集"}),children:[e.jsx(b,{title:"投稿編集"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:j,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{htmlFor:"title",value:"タイトル"}),e.jsx(L,{id:"title",type:"text",name:"title",value:i.title,className:"block mt-1 w-full",onChange:t=>a("title",t.target.value),required:!0}),e.jsx(o,{message:l.title,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{htmlFor:"shop_id",value:"ショップ"}),e.jsx(_,{id:"shop_id",value:i.shop_id,options:p.map(t=>({label:t.name,value:t.id})),onChange:t=>a("shop_id",t.value),placeholder:"ショップを選択",className:"block mt-1 w-full",required:!0}),e.jsx(o,{message:l.shop_id,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{htmlFor:"content",value:"内容"}),e.jsx(P,{id:"content",value:i.content,onChange:t=>a("content",t.target.value),style:{height:"320px"},className:"block p-2 mt-1 w-full",rows:10}),e.jsx(o,{message:l.content,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{htmlFor:"photo",value:"写真（オプション）"}),e.jsx(F,{id:"photo",name:"photo",accept:"image/*",maxFileSize:2e6,emptyTemplate:e.jsx("p",{className:"m-0",children:"ここに画像をドラッグ&ドロップするか、クリックしてアップロードしてください。"}),onSelect:v,chooseLabel:"選択",uploadLabel:"アップロード",cancelLabel:"キャンセル",className:"mt-1",auto:!0,customUpload:!0,uploadHandler:t=>t.options.clear()}),e.jsx(o,{message:l.photo,className:"mt-2"}),n&&e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"mb-2 text-sm",children:"現在の写真（新しい写真をアップロードすると置き換えられます）:"}),e.jsxs("div",{className:"inline-block relative",children:[e.jsx("img",{src:n,alt:"Preview",className:"max-w-xs rounded-md"}),e.jsx("button",{type:"button",onClick:()=>{a("delete_photo",!0),d(null)},className:"absolute top-0 right-0 p-1 text-white bg-red-500 rounded-full hover:bg-red-700",style:{transform:"translate(50%, -50%)"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})]})]}),e.jsx("div",{className:"flex justify-end items-center mt-4",children:e.jsx(y,{className:"ml-4",disabled:u,children:"更新"})})]})})})})})]})}export{K as default};
