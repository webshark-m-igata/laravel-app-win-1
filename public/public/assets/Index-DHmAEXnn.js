import{r as o,P as we,Z as H,a as z,O as X,c as J,I as ne,b as Ie,D as se,m as Te,j as n,L as Pe}from"./app-BpWF_zq6.js";import{A as ke}from"./AuthenticatedLayout-Cia0Vt6E.js";import{I as D}from"./InputLabel-BiOPztuF.js";import{B as oe}from"./button.esm-BmW90ZmM.js";import{I as V}from"./InputError-Bqut1ndV.js";import{C as K}from"./Checkbox-3EPiQtwM.js";import{C as Oe}from"./card.esm-BuNzdVGd.js";import{D as $}from"./dropdown.esm-CgEdlw6j.js";import{T as Me,a as Le,E as Re,I as Ae,F as De,P as Ve}from"./fileupload.esm-D9j-4HwW.js";import{T as Fe,a as re}from"./tabview.esm-Bk1PA52T.js";import{u as ce,C as Ue,a as Be,b as He,c as $e,P as Ze,d as Xe,R as ze}from"./index.esm-vtogsqpO.js";import{C as Je,T as Ye}from"./csstransition.esm-C-9dod2f.js";import{C as qe}from"./index.esm-DLHf4VXQ.js";import"./ApplicationLogo-C5H6nwKx.js";import"./transition-CPXQpZz6.js";import"./index.esm-KgL8FXsT.js";import"./index.esm-BW3I__JH.js";function G(){return G=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},G.apply(this,arguments)}function Q(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,s=new Array(a);t<a;t++)s[t]=e[t];return s}function Ke(e){if(Array.isArray(e))return Q(e)}function We(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function me(e,a){if(e){if(typeof e=="string")return Q(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,a)}}function Ge(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e){return Ke(e)||We(e)||me(e)||Ge()}function Qe(e){if(Array.isArray(e))return e}function et(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var s,l,y,N,p=[],d=!0,h=!1;try{if(y=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(s=y.call(t)).done)&&(p.push(s.value),p.length!==a);d=!0);}catch(m){h=!0,l=m}finally{try{if(!d&&t.return!=null&&(N=t.return(),Object(N)!==N))return}finally{if(h)throw l}}return p}}function tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(e,a){return Qe(e)||et(e,a)||me(e,a)||tt()}function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F(e)}function at(e,a){if(F(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,a);if(F(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function nt(e){var a=at(e,"string");return F(a)==="symbol"?a:String(a)}function ue(e,a,t){return a=nt(a),a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var st=`
@layer primereact {
    .p-toast {
        width: calc(100% - var(--toast-indent, 0px));
        max-width: 25rem;
    }
    
    .p-toast-message-icon {
        flex-shrink: 0;
    }
    
    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }
    
    .p-toast-message-text {
        flex: 1 1 auto;
    }
    
    .p-toast-summary {
        overflow-wrap: anywhere;
    }
    
    .p-toast-detail {
        overflow-wrap: anywhere;
    }
    
    .p-toast-top-center {
        transform: translateX(-50%);
    }
    
    .p-toast-bottom-center {
        transform: translateX(-50%);
    }
    
    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }
    
    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-toast-icon-close.p-link {
        cursor: pointer;
    }
    
    /* Animations */
    .p-toast-message-enter {
        opacity: 0;
        transform: translateY(50%);
    }
    
    .p-toast-message-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .p-toast-message-enter-done {
        transform: none;
    }
    
    .p-toast-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-toast .p-toast-message.p-toast-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin-bottom: 0;
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`,ot={root:function(a){var t=a.props,s=a.context;return J("p-toast p-component p-toast-"+t.position,t.className,{"p-input-filled":s&&s.inputStyle==="filled"||z.inputStyle==="filled","p-ripple-disabled":s&&s.ripple===!1||z.ripple===!1})},message:{message:function(a){var t=a.severity;return J("p-toast-message",ue({},"p-toast-message-".concat(t),t))},content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},rt={root:function(a){var t=a.props;return{position:"fixed",top:t.position==="top-right"||t.position==="top-left"||t.position==="top-center"?"20px":t.position==="center"?"50%":null,right:(t.position==="top-right"||t.position==="bottom-right")&&"20px",bottom:(t.position==="bottom-left"||t.position==="bottom-right"||t.position==="bottom-center")&&"20px",left:t.position==="top-left"||t.position==="bottom-left"?"20px":t.position==="center"||t.position==="top-center"||t.position==="bottom-center"?"50%":null}}},Z=Ue.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:ot,styles:st,inlineStyles:rt}});function le(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,s)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?le(Object(t),!0).forEach(function(s){ue(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var pe=o.memo(o.forwardRef(function(e,a){var t=ce(),s=e.messageInfo,l=e.metaData,y=e.ptCallbacks,N=y.ptm,p=y.ptmo,d=y.cx,h=e.index,m=s.message,j=m.severity,L=m.content,T=m.summary,P=m.detail,k=m.closable,w=m.life,_=m.sticky,R=m.className,A=m.style,r=m.contentClassName,x=m.contentStyle,b=m.icon,i=m.closeIcon,c=m.pt,v={index:h},f=u(u({},l),v),E=o.useState(!1),O=ee(E,2),U=O[0],B=O[1],fe=Xe(function(){Y()},w||3e3,!_&&!U),ve=ee(fe,1),te=ve[0],S=function(g,C){return N(g,u({hostName:e.hostName},C))},Y=function(){te(),e.onClose&&e.onClose(s)},ae=function(g){e.onClick&&!(se.hasClass(g.target,"p-toast-icon-close")||se.hasClass(g.target,"p-toast-icon-close-icon"))&&e.onClick(s.message)},he=function(g){e.onMouseEnter&&e.onMouseEnter(g),!g.defaultPrevented&&(_||(te(),B(!0)))},xe=function(g){e.onMouseLeave&&e.onMouseLeave(g),!g.defaultPrevented&&(_||B(!1))},be=function(){var g=t({className:d("message.buttonicon")},S("buttonicon",f),p(c,"buttonicon",u(u({},v),{},{hostName:e.hostName}))),C=i||o.createElement(Ye,g),I=ne.getJSXIcon(C,u({},g),{props:e}),q=t({type:"button",className:d("message.closeButton"),onClick:Y,"aria-label":e.ariaCloseLabel||Ie("close")},S("closeButton",f),p(c,"closeButton",u(u({},v),{},{hostName:e.hostName})));return k!==!1?o.createElement("div",null,o.createElement("button",q,I,o.createElement(ze,null))):null},ge=function(){if(s){var g=X.getJSXElement(L,{message:s.message,onClick:ae,onClose:Y}),C=t({className:d("message.icon")},S("icon",f),p(c,"icon",u(u({},v),{},{hostName:e.hostName}))),I=b;if(!b)switch(j){case"info":I=o.createElement(Ae,C);break;case"warn":I=o.createElement(Re,C);break;case"error":I=o.createElement(Le,C);break;case"success":I=o.createElement(qe,C);break}var q=ne.getJSXIcon(I,u({},C),{props:e}),_e=t({className:d("message.text")},S("text",f),p(c,"text",u(u({},v),{},{hostName:e.hostName}))),Ee=t({className:d("message.summary")},S("summary",f),p(c,"summary",u(u({},v),{},{hostName:e.hostName}))),Se=t({className:d("message.detail")},S("detail",f),p(c,"detail",u(u({},v),{},{hostName:e.hostName})));return g||o.createElement(o.Fragment,null,q,o.createElement("div",_e,o.createElement("span",Ee,T),P&&o.createElement("div",Se,P)))}return null},ye=ge(),Ne=be(),je=t({ref:a,className:J(R,d("message.message",{severity:j})),style:A,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:ae,onMouseEnter:he,onMouseLeave:xe},S("message",f),p(c,"root",u(u({},v),{},{hostName:e.hostName}))),Ce=t({className:J(r,d("message.content")),style:x},S("content",f),p(c,"content",u(u({},v),{},{hostName:e.hostName})));return o.createElement("div",je,o.createElement("div",Ce,ye,Ne))}));pe.displayName="ToastMessage";var ie=0,de=o.memo(o.forwardRef(function(e,a){var t=ce(),s=o.useContext(we),l=Z.getProps(e,s),y=o.useState([]),N=ee(y,2),p=N[0],d=N[1],h=o.useRef(null),m={props:l,state:{messages:p}},j=Z.setMetaData(m);Be(Z.css.styles,j.isUnstyled,{name:"toast"});var L=function(i){i&&d(function(c){return T(c,i,!0)})},T=function(i,c,v){var f;if(Array.isArray(c)){var E=c.reduce(function(U,B){return U.push({_pId:ie++,message:B}),U},[]);v?f=i?[].concat(W(i),W(E)):E:f=E}else{var O={_pId:ie++,message:c};v?f=i?[].concat(W(i),[O]):[O]:f=[O]}return f},P=function(){H.clear(h.current),d([])},k=function(i){d(function(c){return T(c,i,!1)})},w=function(i){var c=X.isNotEmpty(i._pId)?i._pId:i.message||i;d(function(v){return v.filter(function(f){return f._pId!==i._pId&&!X.deepEquals(f.message,c)})}),l.onRemove&&l.onRemove(i.message||c)},_=function(i){w(i)},R=function(){l.onShow&&l.onShow()},A=function(){p.length===1&&H.clear(h.current),l.onHide&&l.onHide()};He(function(){H.set("toast",h.current,s&&s.autoZIndex||z.autoZIndex,l.baseZIndex||s&&s.zIndex.toast||z.zIndex.toast)},[p,l.baseZIndex]),$e(function(){H.clear(h.current)}),o.useImperativeHandle(a,function(){return{props:l,show:L,replace:k,remove:w,clear:P,getElement:function(){return h.current}}});var r=function(){var i=t({ref:h,id:l.id,className:j.cx("root",{context:s}),style:j.sx("root")},Z.getOtherProps(l),j.ptm("root")),c=t({classNames:j.cx("transition"),timeout:{enter:300,exit:300},options:l.transitionOptions,unmountOnExit:!0,onEntered:R,onExited:A},j.ptm("transition"));return o.createElement("div",i,o.createElement(Me,null,p&&p.map(function(v,f){var E=o.createRef();return o.createElement(Je,G({nodeRef:E,key:v._pId},c),e.content?X.getJSXElement(e.content,{message:v.message}):o.createElement(pe,{hostName:"Toast",ref:E,messageInfo:v,index:f,onClick:l.onClick,onClose:_,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,closeIcon:l.closeIcon,ptCallbacks:j,metaData:m}))})))},x=r();return o.createElement(Ze,{element:x,appendTo:l.appendTo})}));de.displayName="Toast";function _t({models:e,encodings:a}){const t=o.useRef(null),[s,l]=o.useState({model:"users",encoding:"UTF-8",has_header:!0}),{data:y,setData:N,post:p,processing:d,errors:h,reset:m,progress:j}=Te({model:"users",csv_file:null,encoding:"UTF-8",has_header:!0,update_existing:!0}),[L,T]=o.useState(0),P=r=>{const{name:x,value:b,type:i,checked:c}=r.target;l({...s,[x]:i==="checkbox"?c:b})},k=(r,x)=>{x==="export"?l({...s,model:r.value}):N("model",r.value)},w=(r,x)=>{x==="export"?l({...s,encoding:r.value}):N("encoding",r.value)},_=r=>{const{name:x,value:b,type:i,checked:c}=r.target;N({...y,[x]:i==="checkbox"?c:i==="file"?r.target.files[0]:b})},R=r=>{r.preventDefault();const x=new URLSearchParams({model:s.model,encoding:s.encoding,has_header:s.has_header?"1":"0"}).toString();window.open(`/admin/csv/export?${x}`,"_blank"),t.current.show({severity:"success",summary:"エクスポート開始",detail:"CSVファイルのダウンロードが始まります",life:3e3})},A=r=>{r.preventDefault(),p("/admin/csv/import",{forceFormData:!0,onSuccess:()=>{m("csv_file"),t.current.show({severity:"success",summary:"インポート成功",detail:"CSVファイルのインポートが完了しました",life:3e3})},onError:x=>{console.error("インポートエラー:",x),t.current.show({severity:"error",summary:"インポートエラー",detail:"CSVファイルのインポートに失敗しました",life:3e3})}})};return n.jsxs(ke,{children:[n.jsx(Pe,{title:"CSVインポート/エクスポート"}),n.jsx(de,{ref:t}),n.jsx("div",{className:"py-12",children:n.jsx("div",{className:"mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8",children:n.jsx(Oe,{className:"shadow-lg",children:n.jsxs(Fe,{activeIndex:L,onTabChange:r=>T(r.index),children:[n.jsx(re,{header:"CSVエクスポート",leftIcon:"pi pi-download mr-2",children:n.jsxs("div",{className:"p-4",children:[n.jsx("p",{className:"mb-4 text-gray-600",children:"データをCSVファイルとしてエクスポートします。"}),n.jsxs("form",{onSubmit:R,className:"p-fluid",children:[n.jsxs("div",{className:"mb-4 field",children:[n.jsx(D,{htmlFor:"export_model",value:"モデル",className:"mb-2"}),n.jsx($,{id:"export_model",value:s.model,options:e,onChange:r=>k(r,"export"),optionLabel:"label",optionValue:"value",placeholder:"モデルを選択",className:"w-full"})]}),n.jsxs("div",{className:"mb-4 field",children:[n.jsx(D,{htmlFor:"export_encoding",value:"エンコーディング",className:"mb-2"}),n.jsx($,{id:"export_encoding",value:s.encoding,options:a,onChange:r=>w(r,"export"),optionLabel:"label",optionValue:"value",placeholder:"エンコーディングを選択",className:"w-full"})]}),n.jsx("div",{className:"mb-4 field-checkbox",children:n.jsxs("label",{className:"flex items-center",children:[n.jsx(K,{name:"has_header",checked:s.has_header,onChange:P,className:"mr-2"}),n.jsx("span",{children:"ヘッダー行を含める"})]})}),n.jsx("div",{className:"flex justify-end",children:n.jsx(oe,{type:"submit",label:"エクスポート",icon:"pi pi-download",className:"p-button-primary"})})]})]})}),n.jsx(re,{header:"CSVインポート",leftIcon:"pi pi-upload mr-2",children:n.jsxs("div",{className:"p-4",children:[n.jsx("p",{className:"mb-4 text-gray-600",children:"CSVファイルからデータをインポートします。"}),n.jsxs("form",{onSubmit:A,className:"p-fluid",encType:"multipart/form-data",children:[n.jsxs("div",{className:"mb-4 field",children:[n.jsx(D,{htmlFor:"import_model",value:"モデル",className:"mb-2"}),n.jsx($,{id:"import_model",value:y.model,options:e,onChange:r=>k(r,"import"),optionLabel:"label",optionValue:"value",placeholder:"モデルを選択",className:"w-full"}),n.jsx(V,{message:h.model,className:"mt-2"})]}),n.jsxs("div",{className:"mb-4 field",children:[n.jsx(D,{htmlFor:"csv_file",value:"CSVファイル",className:"mb-2"}),n.jsx(De,{id:"csv_file",name:"csv_file",accept:".csv,.txt",maxFileSize:1e7,emptyTemplate:n.jsx("p",{className:"m-0",children:"ここにCSVファイルをドラッグ&ドロップするか、クリックしてアップロードしてください。"}),onSelect:r=>{const x=r.files[0];N("csv_file",x)},chooseLabel:"選択",uploadLabel:"アップロード",cancelLabel:"キャンセル",className:"mb-2",mode:"basic",auto:!0,customUpload:!0,uploadHandler:r=>r.options.clear()}),n.jsx(V,{message:h.csv_file,className:"mt-2"}),j&&n.jsx(Ve,{value:j.percentage,showValue:!0,className:"mt-2"})]}),n.jsxs("div",{className:"mb-4 field",children:[n.jsx(D,{htmlFor:"import_encoding",value:"エンコーディング",className:"mb-2"}),n.jsx($,{id:"import_encoding",value:y.encoding,options:a,onChange:r=>w(r,"import"),optionLabel:"label",optionValue:"value",placeholder:"エンコーディングを選択",className:"w-full"}),n.jsx(V,{message:h.encoding,className:"mt-2"})]}),n.jsxs("div",{className:"mb-4 field-checkbox",children:[n.jsxs("label",{className:"flex items-center",children:[n.jsx(K,{name:"has_header",checked:y.has_header,onChange:_,className:"mr-2"}),n.jsx("span",{children:"ヘッダー行を含む"})]}),n.jsx(V,{message:h.has_header,className:"mt-2"})]}),n.jsxs("div",{className:"mb-4 field-checkbox",children:[n.jsxs("label",{className:"flex items-center",children:[n.jsx(K,{name:"update_existing",checked:y.update_existing,onChange:_,className:"mr-2"}),n.jsx("span",{children:"既存のデータを更新する"})]}),n.jsx(V,{message:h.update_existing,className:"mt-2"})]}),n.jsx("div",{className:"flex justify-end",children:n.jsx(oe,{type:"submit",label:"インポート",icon:"pi pi-upload",className:"p-button-primary",disabled:d})})]})]})})]})})})})]})}export{_t as default};
