import{r as a,m as L,j as e,L as F,S}from"./app-D15uHu8v.js";import{A as C}from"./AuthenticatedLayout-DAVqwqhD.js";import{I as n}from"./InputLabel-ay4s_AAP.js";import{T as I}from"./TextInput-Diu6HVu7.js";import{D as P}from"./dropdown.esm-aXO8Fzt3.js";import{I as D}from"./inputtextarea.esm-UIqw5GRM.js";import{I as c}from"./InputError-zGy_9eYl.js";import{P as R}from"./PrimaryButton-BIkkRLjL.js";import{F as T}from"./fileupload.esm-CYb6dFuB.js";import"./ApplicationLogo-wBmO382G.js";import"./transition-D_4-xP8q.js";import"./inputtext.esm-pnuprOg1.js";import"./index.esm-CsaMsn2H.js";import"./keyfilter.esm-BFZpD1XT.js";import"./csstransition.esm-d_U1Ywqq.js";import"./index.esm-DKhWp-KS.js";import"./button.esm-BRKb10Wf.js";import"./index.esm-CudRFHm8.js";function Y({auth:x,warehouses:j}){const[o,v]=a.useState(""),[l,f]=a.useState(""),[r,g]=a.useState(""),[d,u]=a.useState(null),{data:p,setData:i,post:w,errors:m}=L({title:o,content:l,warehouse_id:r,photo:null});a.useEffect(()=>{i({title:o,content:l,warehouse_id:r,photo:p.photo})},[o,l,r,i]);const N=t=>{t.preventDefault(),w("/admin/warehouse_posts",p,{onSuccess:()=>S.push("/admin/warehouse_posts"),onError:s=>{console.error("倉庫掲示板データの保存に失敗しました:",s)},forceFormData:!0})},b=t=>{const s=t.files[0];if(s){i("photo",s);const h=new FileReader;h.onload=y=>{u(y.target.result)},h.readAsDataURL(s)}};return e.jsxs(C,{user:x.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"倉庫掲示板作成"}),children:[e.jsx(F,{title:"倉庫掲示板作成"}),e.jsx("div",{className:"py-12 pt-4",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsxs("form",{onSubmit:N,encType:"multipart/form-data",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"title",value:"タイトル"}),e.jsx(I,{id:"title",type:"text",className:"block mt-1 w-full",value:o,onChange:t=>v(t.target.value),required:!0,autoFocus:!0}),e.jsx(c,{message:m.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"content",value:"コンテンツ"}),e.jsx(D,{id:"content",value:l,onChange:t=>f(t.target.value),rows:5,className:"block p-2 mt-1 w-full",autoResize:!0,required:!0}),e.jsx(c,{message:m.content,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"warehouse_id",value:"倉庫"}),e.jsx(P,{id:"warehouse_id",value:r,options:j.map(t=>({label:t.name,value:t.id})),onChange:t=>g(t.value),placeholder:"倉庫を選択",className:"block mt-1 w-full",filter:!0,filterPlaceholder:"検索...",required:!0}),e.jsx(c,{message:m.warehouse_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"photo",value:"画像（オプション）"}),e.jsx(T,{id:"photo",name:"photo",accept:"image/*",maxFileSize:2e6,emptyTemplate:e.jsx("p",{className:"m-0",children:"ここに画像をドラッグ&ドロップするか、クリックしてアップロードしてください。"}),onSelect:b,chooseLabel:"選択",uploadLabel:"アップロード",cancelLabel:"キャンセル",className:"mt-1",auto:!0,customUpload:!0,uploadHandler:t=>t.options.clear()}),e.jsx(c,{message:m.photo,className:"mt-2"}),d&&e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{className:"mb-2 text-sm",children:"プレビュー:"}),e.jsxs("div",{className:"inline-block relative",children:[e.jsx("img",{src:d,alt:"Preview",className:"max-w-xs rounded-md"}),e.jsx("button",{type:"button",onClick:()=>{i("photo",null),u(null)},className:"absolute top-0 right-0 p-1 text-white bg-red-500 rounded-full hover:bg-red-700",style:{transform:"translate(50%, -50%)"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})]})]}),e.jsx("div",{className:"flex justify-end items-center mt-4",children:e.jsx(R,{type:"submit",children:"作成"})})]})})})})})]})}export{Y as default};
