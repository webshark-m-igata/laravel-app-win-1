import{m as y,r as I,j as e,S as L,$ as S,L as D}from"./app-JF3uN-Dk.js";import{A as P}from"./AuthenticatedLayout-iINKZ6uH.js";import{C as h}from"./card.esm-B4yAxjHC.js";import{I as C}from"./image.esm-B1yrWtqr.js";import{B as u}from"./button.esm-DvvdiB24.js";import{I as p}from"./InputError-B67gl2lN.js";import{P as F}from"./PrimaryButton-D-iHZt_f.js";import{I as _}from"./inputtextarea.esm-Ckmfk1rj.js";import{F as T}from"./fileupload.esm-CkujIkK1.js";import{I as U}from"./InputLabel-DWhk0P_d.js";import"./ApplicationLogo-Bsu5Xdf2.js";import"./transition-BS8_0a1L.js";import"./index.esm-JebaGdGS.js";import"./csstransition.esm-hCmpADfr.js";import"./keyfilter.esm-q14DUSFo.js";import"./index.esm-DEQ0ykAv.js";import"./index.esm-CgJxBIL5.js";function $({comments:t,postId:a,auth:r}){const{data:l,setData:i,post:m,processing:j,reset:g,errors:c}=y({content:"",image:null}),[o,d]=I.useState(null),N=s=>{s.preventDefault(),m(route("comments.store",a),{onSuccess:()=>{g(),d(null)}})},f=s=>{const n=s.files[0];if(n){i("image",n);const x=new FileReader;x.onload=w=>{d(w.target.result)},x.readAsDataURL(n)}},b=s=>{confirm("このコメントを削除してもよろしいですか？")&&L.delete(route("comments.destroy",s))},v=s=>new Date(s).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"mb-4 text-xl font-semibold",children:"コメント"}),e.jsxs("form",{onSubmit:N,className:"mb-6",encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(_,{value:l.content,onChange:s=>i("content",s.target.value),rows:3,placeholder:"コメントを入力してください",className:"p-2 w-full",required:!0}),e.jsx(p,{message:c.content,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(U,{htmlFor:"image",value:"画像（任意）"}),e.jsx(T,{id:"image",name:"image",accept:"image/*",maxFileSize:2e6,emptyTemplate:e.jsx("p",{className:"m-0",children:"ここに画像をドラッグ&ドロップするか、クリックしてアップロードしてください。"}),onSelect:f,chooseLabel:"選択",uploadLabel:"アップロード",cancelLabel:"キャンセル",className:"mt-1",auto:!0,customUpload:!0,uploadHandler:s=>s.options.clear()}),e.jsx(p,{message:c.image,className:"mt-2"}),o&&e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"mb-2 text-sm",children:"プレビュー:"}),e.jsx("img",{src:o,alt:"Preview",className:"max-w-xs rounded-md"})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(F,{disabled:j,children:"コメントを投稿"})})]}),e.jsx("div",{className:"space-y-4",children:t&&t.length>0?t.map(s=>e.jsx(h,{className:"shadow-sm",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("i",{className:"mr-2 pi pi-user"}),e.jsx("span",{className:"font-semibold",children:s.user.name}),e.jsx("span",{className:"ml-2 text-sm text-gray-500",children:v(s.created_at)})]}),e.jsx("p",{className:"whitespace-pre-wrap",children:s.content}),s.image_path&&e.jsx("div",{className:"mt-2",children:e.jsx("img",{src:`/storage/${s.image_path}`,alt:"コメント画像",className:"mt-2 max-w-xs rounded-md"})})]}),r.user&&r.user.id===s.user_id&&e.jsx(u,{icon:"pi pi-trash",className:"p-button-rounded p-button-danger p-button-text",onClick:()=>b(s.id),tooltip:"削除"})]})},s.id)):e.jsx("p",{className:"py-4 text-center text-gray-500",children:"コメントはまだありません"})})]})}function Y({auth:t,post:a}){const r=a.photo?`/storage/${a.photo}`:null,l=new Date(a.created_at).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),i=e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-50",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("i",{className:"mr-2 pi pi-user"}),e.jsx("span",{className:"font-semibold",children:a.user.name})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("i",{className:"mr-2 pi pi-calendar"}),l]})]}),m=e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[e.jsxs("div",{children:[e.jsx("i",{className:"mr-2 pi pi-tag"}),e.jsx("span",{className:"text-sm",children:a.shop.name})]}),e.jsx(S,{href:route("dashboard"),children:e.jsx(u,{label:"ダッシュボードに戻る",icon:"pi pi-arrow-left",className:"p-button-sm"})})]});return e.jsxs(P,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"投稿詳細"}),children:[e.jsx(D,{title:"投稿詳細"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsxs(h,{title:a.title,subTitle:a.shop.name,header:i,footer:m,className:"shadow-md",children:[e.jsx("div",{className:"mb-6 whitespace-pre-wrap",children:a.content}),r&&e.jsx("div",{className:"mt-4",children:e.jsx(C,{src:r,alt:"投稿画像",width:"100%",preview:!0})}),e.jsx($,{comments:a.comments,postId:a.id,auth:t})]})})})]})}export{Y as default};
