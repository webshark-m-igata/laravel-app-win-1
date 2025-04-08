import{r as o,P as le,Z as X,a as q,O as z,c as D,I as ne,b as Ue,D as de,m as Ve,j as s,L as He}from"./app-B_H1sTXa.js";import{A as Be}from"./AuthenticatedLayout-BTNYEmlU.js";import{I as U}from"./InputLabel-BX0P0eNU.js";import{B as fe}from"./button.esm-CvM3T8wv.js";import{I as V}from"./InputError-BCTRyRV3.js";import{C as ee}from"./Checkbox-BLHDDRjE.js";import{C as Xe}from"./card.esm-Bo2gZjmG.js";import{D as J}from"./dropdown.esm-COSQCgxg.js";import{T as Je,a as he,E as be,I as xe,F as Ze,P as Ye}from"./fileupload.esm-Bj2siJmu.js";import{u as W,C as ce,a as me,b as Ke,c as qe,P as We,d as Ge,R as Qe}from"./index.esm-DxxmVuf0.js";import{C as et,T as tt}from"./csstransition.esm-N-po8r9f.js";import{C as je}from"./index.esm-N8m5rv-0.js";import"./ApplicationLogo-KP1B-3Qc.js";import"./transition-ClnC5tZK.js";import"./index.esm-Degx2bK-.js";function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ae.apply(this,arguments)}function re(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function nt(e){if(Array.isArray(e))return re(e)}function at(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ne(e,n){if(e){if(typeof e=="string")return re(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return re(e,n)}}function rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(e){return nt(e)||at(e)||Ne(e)||rt()}function st(e){if(Array.isArray(e))return e}function ot(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,r,y,h,u=[],p=!0,v=!1;try{if(y=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;p=!1}else for(;!(p=(a=y.call(t)).done)&&(u.push(a.value),u.length!==n);p=!0);}catch(c){v=!0,r=c}finally{try{if(!p&&t.return!=null&&(h=t.return(),Object(h)!==h))return}finally{if(v)throw r}}return u}}function it(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,n){return st(e)||ot(e,n)||Ne(e,n)||it()}function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},H(e)}function lt(e,n){if(H(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n);if(H(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ct(e){var n=lt(e,"string");return H(n)==="symbol"?n:String(n)}function _e(e,n,t){return n=ct(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var mt=`
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
`,ut={root:function(n){var t=n.props,a=n.context;return D("p-toast p-component p-toast-"+t.position,t.className,{"p-input-filled":a&&a.inputStyle==="filled"||q.inputStyle==="filled","p-ripple-disabled":a&&a.ripple===!1||q.ripple===!1})},message:{message:function(n){var t=n.severity;return D("p-toast-message",_e({},"p-toast-message-".concat(t),t))},content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},pt={root:function(n){var t=n.props;return{position:"fixed",top:t.position==="top-right"||t.position==="top-left"||t.position==="top-center"?"20px":t.position==="center"?"50%":null,right:(t.position==="top-right"||t.position==="bottom-right")&&"20px",bottom:(t.position==="bottom-left"||t.position==="bottom-right"||t.position==="bottom-center")&&"20px",left:t.position==="top-left"||t.position==="bottom-left"?"20px":t.position==="center"||t.position==="top-center"||t.position==="bottom-center"?"50%":null}}},Z=ce.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:ut,styles:mt,inlineStyles:pt}});function ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ve(Object(t),!0).forEach(function(a){_e(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var we=o.memo(o.forwardRef(function(e,n){var t=W(),a=e.messageInfo,r=e.metaData,y=e.ptCallbacks,h=y.ptm,u=y.ptmo,p=y.cx,v=e.index,c=a.message,b=c.severity,C=c.content,j=c.summary,E=c.detail,N=c.closable,_=c.life,S=c.sticky,O=c.className,M=c.style,A=c.contentClassName,F=c.contentStyle,l=c.icon,i=c.closeIcon,m=c.pt,d={index:v},f=g(g({},r),d),w=o.useState(!1),P=se(w,2),R=P[0],L=P[1],Pe=Ge(function(){G()},_||3e3,!S&&!R),Ie=se(Pe,1),ue=Ie[0],T=function(x,I){return h(x,g({hostName:e.hostName},I))},G=function(){ue(),e.onClose&&e.onClose(a)},pe=function(x){e.onClick&&!(de.hasClass(x.target,"p-toast-icon-close")||de.hasClass(x.target,"p-toast-icon-close-icon"))&&e.onClick(a.message)},Oe=function(x){e.onMouseEnter&&e.onMouseEnter(x),!x.defaultPrevented&&(S||(ue(),L(!0)))},Te=function(x){e.onMouseLeave&&e.onMouseLeave(x),!x.defaultPrevented&&(S||L(!1))},ke=function(){var x=t({className:p("message.buttonicon")},T("buttonicon",f),u(m,"buttonicon",g(g({},d),{},{hostName:e.hostName}))),I=i||o.createElement(tt,x),k=ne.getJSXIcon(I,g({},x),{props:e}),Q=t({type:"button",className:p("message.closeButton"),onClick:G,"aria-label":e.ariaCloseLabel||Ue("close")},T("closeButton",f),u(m,"closeButton",g(g({},d),{},{hostName:e.hostName})));return N!==!1?o.createElement("div",null,o.createElement("button",Q,k,o.createElement(Qe,null))):null},De=function(){if(a){var x=z.getJSXElement(C,{message:a.message,onClick:pe,onClose:G}),I=t({className:p("message.icon")},T("icon",f),u(m,"icon",g(g({},d),{},{hostName:e.hostName}))),k=l;if(!l)switch(b){case"info":k=o.createElement(xe,I);break;case"warn":k=o.createElement(be,I);break;case"error":k=o.createElement(he,I);break;case"success":k=o.createElement(je,I);break}var Q=ne.getJSXIcon(k,g({},I),{props:e}),ze=t({className:p("message.text")},T("text",f),u(m,"text",g(g({},d),{},{hostName:e.hostName}))),Ae=t({className:p("message.summary")},T("summary",f),u(m,"summary",g(g({},d),{},{hostName:e.hostName}))),Fe=t({className:p("message.detail")},T("detail",f),u(m,"detail",g(g({},d),{},{hostName:e.hostName})));return x||o.createElement(o.Fragment,null,Q,o.createElement("div",ze,o.createElement("span",Ae,j),E&&o.createElement("div",Fe,E)))}return null},Me=De(),Re=ke(),Le=t({ref:n,className:D(O,p("message.message",{severity:b})),style:M,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:pe,onMouseEnter:Oe,onMouseLeave:Te},T("message",f),u(m,"root",g(g({},d),{},{hostName:e.hostName}))),$e=t({className:D(A,p("message.content")),style:F},T("content",f),u(m,"content",g(g({},d),{},{hostName:e.hostName})));return o.createElement("div",Le,o.createElement("div",$e,Me,Re))}));we.displayName="ToastMessage";var ge=0,Ee=o.memo(o.forwardRef(function(e,n){var t=W(),a=o.useContext(le),r=Z.getProps(e,a),y=o.useState([]),h=se(y,2),u=h[0],p=h[1],v=o.useRef(null),c={props:r,state:{messages:u}},b=Z.setMetaData(c);me(Z.css.styles,b.isUnstyled,{name:"toast"});var C=function(i){i&&p(function(m){return j(m,i,!0)})},j=function(i,m,d){var f;if(Array.isArray(m)){var w=m.reduce(function(R,L){return R.push({_pId:ge++,message:L}),R},[]);d?f=i?[].concat(te(i),te(w)):w:f=w}else{var P={_pId:ge++,message:m};d?f=i?[].concat(te(i),[P]):[P]:f=[P]}return f},E=function(){X.clear(v.current),p([])},N=function(i){p(function(m){return j(m,i,!1)})},_=function(i){var m=z.isNotEmpty(i._pId)?i._pId:i.message||i;p(function(d){return d.filter(function(f){return f._pId!==i._pId&&!z.deepEquals(f.message,m)})}),r.onRemove&&r.onRemove(i.message||m)},S=function(i){_(i)},O=function(){r.onShow&&r.onShow()},M=function(){u.length===1&&X.clear(v.current),r.onHide&&r.onHide()};Ke(function(){X.set("toast",v.current,a&&a.autoZIndex||q.autoZIndex,r.baseZIndex||a&&a.zIndex.toast||q.zIndex.toast)},[u,r.baseZIndex]),qe(function(){X.clear(v.current)}),o.useImperativeHandle(n,function(){return{props:r,show:C,replace:N,remove:_,clear:E,getElement:function(){return v.current}}});var A=function(){var i=t({ref:v,id:r.id,className:b.cx("root",{context:a}),style:b.sx("root")},Z.getOtherProps(r),b.ptm("root")),m=t({classNames:b.cx("transition"),timeout:{enter:300,exit:300},options:r.transitionOptions,unmountOnExit:!0,onEntered:O,onExited:M},b.ptm("transition"));return o.createElement("div",i,o.createElement(Je,null,u&&u.map(function(d,f){var w=o.createRef();return o.createElement(et,ae({nodeRef:w,key:d._pId},m),e.content?z.getJSXElement(e.content,{message:d.message}):o.createElement(we,{hostName:"Toast",ref:w,messageInfo:d,index:f,onClick:r.onClick,onClose:S,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,closeIcon:r.closeIcon,ptCallbacks:b,metaData:c}))})))},F=A();return o.createElement(We,{element:F,appendTo:r.appendTo})}));Ee.displayName="Toast";var dt={root:function(n){var t=n.props,a=n.horizontal,r=n.vertical;return D("p-divider p-component p-divider-".concat(t.layout," p-divider-").concat(t.type),{"p-divider-left":a&&(!t.align||t.align==="left"),"p-divider-right":a&&t.align==="right","p-divider-center":a&&t.align==="center"||r&&(!t.align||t.align==="center"),"p-divider-top":r&&t.align==="top","p-divider-bottom":r&&t.align==="bottom"},t.className)},content:"p-divider-content"},ft=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,vt={root:function(n){var t=n.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},Y=ce.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:dt,styles:ft,inlineStyles:vt}}),Se=o.forwardRef(function(e,n){var t=W(),a=o.useContext(le),r=Y.getProps(e,a),y=Y.setMetaData({props:r}),h=y.ptm,u=y.cx,p=y.sx,v=y.isUnstyled;me(Y.css.styles,v,{name:"divider"});var c=o.useRef(null),b=r.layout==="horizontal",C=r.layout==="vertical";o.useImperativeHandle(n,function(){return{props:r,getElement:function(){return c.current}}});var j=t({ref:c,style:p("root"),className:u("root",{horizontal:b,vertical:C}),"aria-orientation":r.layout,role:"separator"},Y.getOtherProps(r),h("root")),E=t({className:u("content")},h("content"));return o.createElement("div",j,o.createElement("div",E,r.children))});Se.displayName="Divider";function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},oe.apply(this,arguments)}function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},B(e)}function gt(e,n){if(B(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n);if(B(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function yt(e){var n=gt(e,"string");return B(n)==="symbol"?n:String(n)}function Ce(e,n,t){return n=yt(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var K=ce.extend({defaultProps:{__TYPE:"Message",id:null,className:null,style:null,text:null,icon:null,severity:"info",content:null,children:void 0},css:{classes:{root:function(n){var t=n.props.severity;return D("p-inline-message p-component",Ce({},"p-inline-message-".concat(t),t))},icon:"p-inline-message-icon",text:"p-inline-message-text"},styles:`
        @layer primereact {
            .p-inline-message {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
            }

            .p-inline-message-icon {
                flex-shrink: 0;
            }
            
            .p-inline-message-icon-only .p-inline-message-text {
                visibility: hidden;
                width: 0;
            }
            
            .p-fluid .p-inline-message {
                display: flex;
            }        
        }
        `}});function ye(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function ht(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ye(Object(t),!0).forEach(function(a){Ce(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ye(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var ie=o.memo(o.forwardRef(function(e,n){var t=W(),a=o.useContext(le),r=K.getProps(e,a),y=o.useRef(null),h=K.setMetaData({props:r}),u=h.ptm,p=h.cx,v=h.isUnstyled;me(K.css.styles,v,{name:"message"});var c=function(){if(r.content)return z.getJSXElement(r.content,r);var E=z.getJSXElement(r.text,r),N=t({className:p("icon")},u("icon")),_=r.icon;if(!_)switch(r.severity){case"info":_=o.createElement(xe,N);break;case"warn":_=o.createElement(be,N);break;case"error":_=o.createElement(he,N);break;case"success":_=o.createElement(je,N);break}var S=ne.getJSXIcon(_,ht({},N),{props:r}),O=t({className:p("text")},u("text"));return o.createElement(o.Fragment,null,S,o.createElement("span",O,E))};o.useImperativeHandle(n,function(){return{props:r,getElement:function(){return y.current}}});var b=c(),C=t({className:D(r.className,p("root")),style:r.style,role:"alert","aria-live":"polite","aria-atomic":"true"},K.getOtherProps(r),u("root"));return o.createElement("div",oe({id:r.id,ref:y},C),b)}));ie.displayName="Message";function Mt({models:e,encodings:n}){const t=o.useRef(null),[a,r]=o.useState({model:"users",encoding:"UTF-8",has_header:!0}),[y,h]=o.useState(!1),[u,p]=o.useState(!1),{data:v,setData:c,post:b,processing:C,errors:j,reset:E,progress:N}=Ve({model:"users",csv_file:null,encoding:"UTF-8",has_header:!0,update_existing:!0}),_=l=>{const{name:i,value:m,type:d,checked:f}=l.target;r({...a,[i]:d==="checkbox"?f:m})},S=(l,i)=>{i==="export"?(r({...a,model:l.value}),h(l.value==="comments")):(c("model",l.value),p(l.value==="comments"))},O=(l,i)=>{i==="export"?r({...a,encoding:l.value}):c("encoding",l.value)},M=l=>{const{name:i,value:m,type:d,checked:f}=l.target;c({...v,[i]:d==="checkbox"?f:d==="file"?l.target.files[0]:m})},A=l=>{l.preventDefault();const i=new URLSearchParams({model:a.model,encoding:a.encoding,has_header:a.has_header?"1":"0"}).toString();window.open(`/admin/csv/export?${i}`,"_blank"),t.current.show({severity:"success",summary:"エクスポート開始",detail:"CSVファイルのダウンロードが始まります",life:3e3})},F=l=>{l.preventDefault(),b("/admin/csv/import",{forceFormData:!0,onSuccess:()=>{E("csv_file"),t.current.show({severity:"success",summary:"インポート成功",detail:"CSVファイルのインポートが完了しました",life:3e3})},onError:i=>{var d,f,w,P;console.error("インポートエラー:",i);let m="CSVファイルのインポートに失敗しました";(f=(d=i==null?void 0:i.response)==null?void 0:d.data)!=null&&f.errors?m=Object.entries(i.response.data.errors).map(([R,L])=>`${R}: ${L}`).join(`
`):(P=(w=i==null?void 0:i.response)==null?void 0:w.data)!=null&&P.message&&(m=i.response.data.message),t.current.show({severity:"error",summary:"インポートエラー",detail:m,life:3e3})}})};return s.jsxs(Be,{header:s.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"CSV管理"}),children:[s.jsx(Ee,{ref:t}),s.jsx(He,{title:"CSVインポート/エクスポート"}),s.jsx("div",{className:"py-12 pt-4",children:s.jsx("div",{className:"mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8",children:s.jsxs(Xe,{className:"shadow-lg",children:[s.jsxs("div",{className:"p-4",children:[s.jsxs("h2",{className:"text-xl font-semibold mb-4 flex items-center",children:[s.jsx("i",{className:"pi pi-download mr-2"}),"CSVエクスポート"]}),s.jsx("p",{className:"mb-4 text-gray-600",children:"データをCSVファイルとしてエクスポートします。"}),s.jsxs("form",{onSubmit:A,className:"p-fluid",children:[s.jsxs("div",{className:"mb-4 field",children:[s.jsx(U,{htmlFor:"export_model",value:"モデル",className:"mb-2"}),s.jsx(J,{id:"export_model",value:a.model,options:e,onChange:l=>S(l,"export"),optionLabel:"label",optionValue:"value",placeholder:"モデルを選択",className:"w-full"}),y&&s.jsx(ie,{severity:"info",text:"コメントのエクスポートには投稿ID(post_id)と倉庫投稿ID(warehouse_post_id)の両方が含まれます。",className:"mt-2"})]}),s.jsxs("div",{className:"mb-4 field",children:[s.jsx(U,{htmlFor:"export_encoding",value:"エンコーディング",className:"mb-2"}),s.jsx(J,{id:"export_encoding",value:a.encoding,options:n,onChange:l=>O(l,"export"),optionLabel:"label",optionValue:"value",placeholder:"エンコーディングを選択",className:"w-full"})]}),s.jsx("div",{className:"mb-4 field-checkbox",children:s.jsxs("label",{className:"flex items-center",children:[s.jsx(ee,{name:"has_header",checked:a.has_header,onChange:_,className:"mr-2"}),s.jsx("span",{children:"ヘッダー行を含める"})]})}),s.jsx("div",{className:"flex justify-end",children:s.jsx(fe,{type:"submit",label:"エクスポート",icon:"pi pi-download",className:"p-button-primary"})})]})]}),s.jsx(Se,{className:"my-5"}),s.jsxs("div",{className:"p-4",children:[s.jsxs("h2",{className:"text-xl font-semibold mb-4 flex items-center",children:[s.jsx("i",{className:"pi pi-upload mr-2"}),"CSVインポート"]}),s.jsx("p",{className:"mb-4 text-gray-600",children:"CSVファイルからデータをインポートします。"}),s.jsxs("form",{onSubmit:F,className:"p-fluid",encType:"multipart/form-data",children:[s.jsxs("div",{className:"mb-4 field",children:[s.jsx(U,{htmlFor:"import_model",value:"モデル",className:"mb-2"}),s.jsx(J,{id:"import_model",value:v.model,options:e,onChange:l=>S(l,"import"),optionLabel:"label",optionValue:"value",placeholder:"モデルを選択",className:"w-full"}),s.jsx(V,{message:j.model,className:"mt-2"}),u&&s.jsx(ie,{severity:"info",text:"コメントのインポートでは、投稿ID(post_id)または倉庫投稿ID(warehouse_post_id)のいずれかが必要です。両方を指定することもできます。",className:"mt-2"})]}),s.jsxs("div",{className:"mb-4 field",children:[s.jsx(U,{htmlFor:"csv_file",value:"CSVファイル",className:"mb-2"}),s.jsx(Ze,{id:"csv_file",name:"csv_file",accept:".csv,.txt",maxFileSize:1e7,emptyTemplate:s.jsx("p",{className:"m-0",children:"ここにCSVファイルをドラッグ&ドロップするか、クリックしてアップロードしてください。"}),onSelect:l=>{const i=l.files[0];c("csv_file",i)},chooseLabel:"選択",uploadLabel:"アップロード",cancelLabel:"キャンセル",className:"mb-2",mode:"basic",auto:!0,customUpload:!0,uploadHandler:l=>l.options.clear()}),s.jsx(V,{message:j.csv_file,className:"mt-2"}),N&&s.jsx(Ye,{value:N.percentage,showValue:!0,className:"mt-2"})]}),s.jsxs("div",{className:"mb-4 field",children:[s.jsx(U,{htmlFor:"import_encoding",value:"エンコーディング",className:"mb-2"}),s.jsx(J,{id:"import_encoding",value:v.encoding,options:n,onChange:l=>O(l,"import"),optionLabel:"label",optionValue:"value",placeholder:"エンコーディングを選択",className:"w-full"}),s.jsx(V,{message:j.encoding,className:"mt-2"})]}),s.jsxs("div",{className:"mb-4 field-checkbox",children:[s.jsxs("label",{className:"flex items-center",children:[s.jsx(ee,{name:"has_header",checked:v.has_header,onChange:M,className:"mr-2"}),s.jsx("span",{children:"ヘッダー行を含む"})]}),s.jsx(V,{message:j.has_header,className:"mt-2"})]}),s.jsxs("div",{className:"mb-4 field-checkbox",children:[s.jsxs("label",{className:"flex items-center",children:[s.jsx(ee,{name:"update_existing",checked:v.update_existing,onChange:M,className:"mr-2"}),s.jsx("span",{children:"既存のデータを更新する"})]}),s.jsx(V,{message:j.update_existing,className:"mt-2"})]}),s.jsx("div",{className:"flex justify-end",children:s.jsx(fe,{type:"submit",label:"インポート",icon:"pi pi-upload",className:"p-button-primary",disabled:C})})]})]})]})})})]})}export{Mt as default};
