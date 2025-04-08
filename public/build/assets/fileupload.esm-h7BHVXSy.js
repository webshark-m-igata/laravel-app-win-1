import{r as o,R as xe,P as Me,O as L,c as O,I as se,b as Wt,l as le,D as He}from"./app-BiS6rqeK.js";import{I as $e,u as Ee,C as Le,a as Ue,d as Yt,R as Je}from"./index.esm-Cv6Y4bg-.js";import{B as Ze}from"./button.esm--wW_nqu0.js";import{P as mt}from"./index.esm-DSNDCxfQ.js";import{_ as Gt,a as qt,b as Qt,c as ft,C as en,T as Ke}from"./csstransition.esm-Bbediuz9.js";import{C as tn}from"./index.esm-DOXGknKB.js";function nn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rt(e,n){var t=function(p){return n&&o.isValidElement(p)?n(p):p},a=Object.create(null);return e&&o.Children.map(e,function(r){return r}).forEach(function(r){a[r.key]=t(r)}),a}function rn(e,n){e=e||{},n=n||{};function t(d){return d in n?n[d]:e[d]}var a=Object.create(null),r=[];for(var p in e)p in n?r.length&&(a[p]=r,r=[]):r.push(p);var i,s={};for(var u in n){if(a[u])for(i=0;i<a[u].length;i++){var f=a[u][i];s[a[u][i]]=t(f)}s[u]=t(u)}for(i=0;i<r.length;i++)s[r[i]]=t(r[i]);return s}function ne(e,n,t){return t[n]!=null?t[n]:e.props[n]}function an(e,n){return rt(e.children,function(t){return o.cloneElement(t,{onExited:n.bind(null,t),in:!0,appear:ne(t,"appear",e),enter:ne(t,"enter",e),exit:ne(t,"exit",e)})})}function on(e,n,t){var a=rt(e.children),r=rn(n,a);return Object.keys(r).forEach(function(p){var i=r[p];if(o.isValidElement(i)){var s=p in n,u=p in a,f=n[p],d=o.isValidElement(f)&&!f.props.in;u&&(!s||d)?r[p]=o.cloneElement(i,{onExited:t.bind(null,i),in:!0,exit:ne(i,"exit",e),enter:ne(i,"enter",e)}):!u&&s&&!d?r[p]=o.cloneElement(i,{in:!1}):u&&s&&o.isValidElement(f)&&(r[p]=o.cloneElement(i,{onExited:t.bind(null,i),in:f.props.in,exit:ne(i,"exit",e),enter:ne(i,"enter",e)}))}}),r}var ln=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},sn={component:"div",childFactory:function(n){return n}},at=function(e){Gt(n,e);function n(a,r){var p;p=e.call(this,a,r)||this;var i=p.handleExited.bind(nn(p));return p.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},p}var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(r,p){var i=p.children,s=p.handleExited,u=p.firstRender;return{children:u?an(r,s):on(r,i,s),firstRender:!1}},t.handleExited=function(r,p){var i=rt(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(p),this.mounted&&this.setState(function(s){var u=qt({},s.children);return delete u[r.key],{children:u}}))},t.render=function(){var r=this.props,p=r.component,i=r.childFactory,s=Qt(r,["component","childFactory"]),u=this.state.contextValue,f=ln(this.state.children).map(i);return delete s.appear,delete s.enter,delete s.exit,p===null?xe.createElement(ft.Provider,{value:u},f):xe.createElement(ft.Provider,{value:u},xe.createElement(p,s,f))},n}(xe.Component);at.propTypes={};at.defaultProps=sn;function We(){return We=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},We.apply(this,arguments)}var Ye=o.memo(o.forwardRef(function(e,n){var t=$e.getPTI(e);return o.createElement("svg",We({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"}))}));Ye.displayName="UploadIcon";function Ge(){return Ge=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ge.apply(this,arguments)}var Et=o.memo(o.forwardRef(function(e,n){var t=$e.getPTI(e);return o.createElement("svg",Ge({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"}),o.createElement("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"}),o.createElement("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"}))}));Et.displayName="ExclamationTriangleIcon";function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},qe.apply(this,arguments)}var St=o.memo(o.forwardRef(function(e,n){var t=$e.getPTI(e);return o.createElement("svg",qe({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"}))}));St.displayName="InfoCircleIcon";function Qe(){return Qe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qe.apply(this,arguments)}var Pt=o.memo(o.forwardRef(function(e,n){var t=$e.getPTI(e);return o.createElement("svg",Qe({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"}))}));Pt.displayName="TimesCircleIcon";function De(){return De=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},De.apply(this,arguments)}function et(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function cn(e){if(Array.isArray(e))return et(e)}function un(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e,n){if(e){if(typeof e=="string")return et(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return et(e,n)}}function pn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(e){return cn(e)||un(e)||_t(e)||pn()}function Ce(e){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ce(e)}function mn(e,n){if(Ce(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n);if(Ce(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function fn(e){var n=mn(e,"string");return Ce(n)==="symbol"?n:String(n)}function ot(e,n,t){return n=fn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dn(e){if(Array.isArray(e))return e}function vn(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,r,p,i,s=[],u=!0,f=!1;try{if(p=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(a=p.call(t)).done)&&(s.push(a.value),s.length!==n);u=!0);}catch(d){f=!0,r=d}finally{try{if(!u&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw r}}return s}}function gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(e,n){return dn(e)||vn(e,n)||_t(e,n)||gn()}var bn=`
@layer primereact {
    .p-message-wrapper {
        display: flex;
        align-items: center;
    }

    .p-message-icon {
        flex-shrink: 0;
    }
    
    .p-message-close {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-message-close.p-link {
        margin-left: auto;
        overflow: hidden;
        position: relative;
    }
    
    .p-message-enter {
        opacity: 0;
    }
    
    .p-message-enter-active {
        opacity: 1;
        transition: opacity .3s;
    }
    
    .p-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin: 0;
        overflow: hidden;
        transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
    }
    
    .p-message-exit-active .p-message-close {
        display: none;
    }
}
`,yn={uimessage:{root:function(n){var t=n.severity;return O("p-message p-component",ot({},"p-message-".concat(t),t))},wrapper:"p-message-wrapper",detail:"p-message-detail",summary:"p-message-summary",icon:"p-message-icon",buttonicon:"p-message-close-icon",button:"p-message-close p-link",transition:"p-message"}},Be=Le.extend({defaultProps:{__TYPE:"Messages",__parentMetadata:null,id:null,className:null,style:null,transitionOptions:null,onRemove:null,onClick:null,children:void 0},css:{classes:yn,styles:bn}});function dt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dt(Object(t),!0).forEach(function(a){ot(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dt(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var jt=o.memo(o.forwardRef(function(e,n){var t=Ee(),a=e.message,r=e.metaData,p=e.ptCallbacks,i=p.ptm,s=p.ptmo,u=p.cx,f=e.index,d=a.message,y=d.severity,z=d.content,V=d.summary,M=d.detail,U=d.closable,A=d.life,q=d.sticky,re=d.className,W=d.style,T=d.contentClassName,h=d.contentStyle,S=d.icon,Z=d.closeIcon,E=d.pt,w={index:f},x=_(_({},r),w),g=Yt(function(){ae(null)},A||3e3,!q),P=Nt(g,1),X=P[0],j=function(I,k){return i(I,_({hostName:e.hostName},k))},ae=function(I){X(),e.onClose&&e.onClose(e.message),I&&(I.preventDefault(),I.stopPropagation())},H=function(){e.onClick&&e.onClick(e.message)},ce=function(){if(U!==!1){var I=t({className:u("uimessage.buttonicon")},j("buttonicon",x),s(E,"buttonicon",_(_({},w),{},{hostName:e.hostName}))),k=Z||o.createElement(Ke,I),pe=se.getJSXIcon(k,_({},I),{props:e}),me=t({type:"button",className:u("uimessage.button"),"aria-label":Wt("close"),onClick:ae},j("button",x),s(E,"button",_(_({},w),{},{hostName:e.hostName})));return o.createElement("button",me,pe,o.createElement(Je,null))}return null},D=function(){if(e.message){var I=t({className:u("uimessage.icon")},j("icon",x),s(E,"icon",_(_({},w),{},{hostName:e.hostName}))),k=S;if(!S)switch(y){case"info":k=o.createElement(St,I);break;case"warn":k=o.createElement(Et,I);break;case"error":k=o.createElement(Pt,I);break;case"success":k=o.createElement(tn,I);break}var pe=se.getJSXIcon(k,_({},I),{props:e}),me=t({className:u("uimessage.summary")},j("summary",x),s(E,"summary",_(_({},w),{},{hostName:e.hostName}))),Pe=t({className:u("uimessage.detail")},j("detail",x),s(E,"detail",_(_({},w),{},{hostName:e.hostName})));return z||o.createElement(o.Fragment,null,pe,o.createElement("span",me,V),o.createElement("span",Pe,M))}return null},ue=ce(),R=D(),Se=t({className:O(T,u("uimessage.wrapper")),style:h},j("wrapper",x),s(E,"wrapper",_(_({},w),{},{hostName:e.hostName}))),Ae=t({ref:n,className:O(re,u("uimessage.root",{severity:y})),style:W,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:H},j("root",x),s(E,"root",_(_({},w),{},{hostName:e.hostName})));return o.createElement("div",Ae,o.createElement("div",Se,R,ue))}));jt.displayName="UIMessage";function vt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function gt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?vt(Object(t),!0).forEach(function(a){ot(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vt(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var bt=0,tt=o.memo(o.forwardRef(function(e,n){var t=Ee(),a=o.useContext(Me),r=Be.getProps(e,a),p=o.useState([]),i=Nt(p,2),s=i[0],u=i[1],f=o.useRef(null),d=gt(gt({props:r},r.__parentMetadata),{},{state:{messages:s}}),y=Be.setMetaData(d);Ue(Be.css.styles,y.isUnstyled,{name:"messages"});var z=function(h){h&&u(function(S){return V(S,h,!0)})},V=function(h,S,Z){var E;if(Array.isArray(S)){var w=S.reduce(function(g,P){return g.push({_pId:bt++,message:P}),g},[]);Z?E=h?[].concat(Xe(h),Xe(w)):w:E=w}else{var x={_pId:bt++,message:S};Z?E=h?[].concat(Xe(h),[x]):[x]:E=[x]}return E},M=function(){u([])},U=function(h){u(function(S){return V(S,h,!1)})},A=function(h){var S=L.isNotEmpty(h._pId)?h._pId:h.message||h;u(function(Z){return Z.filter(function(E){return E._pId!==h._pId&&!L.deepEquals(E.message,S)})}),r.onRemove&&r.onRemove(h.message||S)},q=function(h){A(h)};o.useImperativeHandle(n,function(){return{props:r,show:z,replace:U,remove:A,clear:M,getElement:function(){return f.current}}});var re=t({id:r.id,className:r.className,style:r.style},Be.getOtherProps(r),y.ptm("root")),W=t({classNames:y.cx("uimessage.transition"),unmountOnExit:!0,timeout:{enter:300,exit:300},options:r.transitionOptions},y.ptm("transition"));return o.createElement("div",De({ref:f},re),o.createElement(at,null,s&&s.map(function(T,h){var S=o.createRef();return o.createElement(en,De({nodeRef:S,key:T._pId},W),o.createElement(jt,{hostName:"Messages",ref:S,message:T,onClick:r.onClick,onClose:q,ptCallbacks:y,metaData:d,index:h}))})))}));tt.displayName="Messages";function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Re.apply(this,arguments)}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oe(e)}function hn(e,n){if(Oe(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n);if(Oe(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Cn(e){var n=hn(e,"string");return Oe(n)==="symbol"?n:String(n)}function On(e,n,t){return n=Cn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var wn={root:function(n){var t=n.props;return t.mode==="indeterminate"?O("p-progressbar p-component p-progressbar-indeterminate"):O("p-progressbar p-component p-progressbar-determinate")},value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label",container:"p-progressbar-indeterminate-container"},En=`
@layer primereact {
  .p-progressbar {
      position: relative;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-value {
      height: 100%;
      width: 0%;
      position: absolute;
      display: none;
      border: 0 none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-label {
      display: inline-flex;
  }
  
  .p-progressbar-determinate .p-progressbar-value-animate {
      transition: width 1s ease-in-out;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::after {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      -webkit-animation-delay: 1.15s;
              animation-delay: 1.15s;
  }
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}
@keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
@keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
`,Sn={value:function(n){var t=n.props,a=Math.max(t.value,2),r=t.value?t.color:"transparent";return t.mode==="indeterminate"?{backgroundColor:t.color}:{width:a+"%",display:"flex",backgroundColor:r}}},ge=Le.extend({defaultProps:{__TYPE:"ProgressBar",__parentMetadata:null,id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null,children:void 0},css:{classes:wn,styles:En,inlineStyles:Sn}});function yt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function Pn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?yt(Object(t),!0).forEach(function(a){On(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yt(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var It=o.memo(o.forwardRef(function(e,n){var t=Ee(),a=o.useContext(Me),r=ge.getProps(e,a),p=ge.setMetaData(Pn({props:r},r.__parentMetadata)),i=p.ptm,s=p.cx,u=p.isUnstyled;Ue(ge.css.styles,u,{name:"progressbar"});var f=o.useRef(null),d=function(){if(r.showValue&&r.value!=null){var M=r.displayValueTemplate?r.displayValueTemplate(r.value):r.value+r.unit;return M}return null},y=function(){var M=d(),U=t({className:O(r.className,s("root")),style:r.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":r.value,"aria-valuemax":"100"},ge.getOtherProps(r),i("root")),A=t({className:s("value"),style:{width:r.value+"%",display:"flex",backgroundColor:r.color}},i("value")),q=t({className:s("label")},i("label"));return o.createElement("div",Re({id:r.id,ref:f},U),o.createElement("div",A,M!=null&&o.createElement("div",q,M)))},z=function(){var M=t({className:O(r.className,s("root")),style:r.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":r.value,"aria-valuemax":"100"},ge.getOtherProps(r),i("root")),U=t({className:s("container")},i("container")),A=t({className:s("value"),style:{backgroundColor:r.color}},i("value"));return o.createElement("div",Re({id:r.id,ref:f},M),o.createElement("div",U,o.createElement("div",A)))};if(o.useImperativeHandle(n,function(){return{props:r,getElement:function(){return f.current}}}),r.mode==="determinate")return y();if(r.mode==="indeterminate")return z();throw new Error(r.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));It.displayName="ProgressBar";function we(e){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},we(e)}function _n(e,n){if(we(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n);if(we(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Nn(e){var n=_n(e,"string");return we(n)==="symbol"?n:String(n)}function lt(e,n,t){return n=Nn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function he(){return he=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},he.apply(this,arguments)}function nt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function jn(e){if(Array.isArray(e))return nt(e)}function In(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xt(e,n){if(e){if(typeof e=="string")return nt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return nt(e,n)}}function xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e){return jn(e)||In(e)||xt(e)||xn()}function ht(e){throw new TypeError('"'+e+'" is read-only')}function Bn(e){if(Array.isArray(e))return e}function Fn(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,r,p,i,s=[],u=!0,f=!1;try{if(p=(t=t.call(e)).next,n!==0)for(;!(u=(a=p.call(t)).done)&&(s.push(a.value),s.length!==n);u=!0);}catch(d){f=!0,r=d}finally{try{if(!u&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw r}}return s}}function Tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,n){return Bn(e)||Fn(e,n)||xt(e,n)||Tn()}var Dn={root:function(n){var t=n.props;return O("p-badge p-component",lt({"p-badge-no-gutter":L.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":L.isEmpty(t.value),"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge"},"p-badge-".concat(t.severity),t.severity!==null))}},Rn=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,Fe=Le.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:Dn,styles:Rn}});function Ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function Mn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ct(Object(t),!0).forEach(function(a){lt(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ct(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Bt=o.memo(o.forwardRef(function(e,n){var t=Ee(),a=o.useContext(Me),r=Fe.getProps(e,a),p=Fe.setMetaData(Mn({props:r},r.__parentMetadata)),i=p.ptm,s=p.cx,u=p.isUnstyled;Ue(Fe.css.styles,u,{name:"badge"});var f=o.useRef(null);o.useImperativeHandle(n,function(){return{props:r,getElement:function(){return f.current}}});var d=t({ref:f,style:r.style,className:O(r.className,s("root"))},Fe.getOtherProps(r),i("root"));return o.createElement("span",d,r.value)}));Bt.displayName="Badge";var $n={root:function(n){var t=n.props;return O("p-fileupload p-fileupload-".concat(t.mode," p-component"))},buttonbar:"p-fileupload-buttonbar",content:"p-fileupload-content",chooseButton:function(n){var t=n.iconOnly,a=n.disabled,r=n.focusedState;return O("p-button p-fileupload-choose p-component",{"p-disabled":a,"p-focus":r,"p-button-icon-only":t})},label:"p-button-label p-clickable",file:"p-fileupload-row",fileName:"p-fileupload-filename",thumbnail:"p-fileupload-file-thumbnail",chooseButtonLabel:"p-button-label p-clickable",basicButton:function(n){var t=n.disabled,a=n.focusedState,r=n.hasFiles;return O("p-button p-component p-fileupload-choose",{"p-fileupload-choose-selected":r,"p-disabled":t,"p-focus":a})},chooseIcon:function(n){var t=n.props,a=n.iconOnly;return t.mode==="basic"?O("p-button-icon",{"p-button-icon-left":!a}):O("p-button-icon p-clickable",{"p-button-icon-left":!a})},uploadIcon:function(n){var t=n.iconOnly;return O("p-button-icon p-c",{"p-button-icon-left":!t})},cancelIcon:function(n){var t=n.iconOnly;return O("p-button-icon p-c",{"p-button-icon-left":!t})}},Ln=`
@layer primereact {
    .p-fileupload-content {
        position: relative;
    }
    
    .p-fileupload-row {
        display: flex;
        align-items: center;
    }
    
    .p-fileupload-row > div {
        flex: 1 1 auto;
        width: 25%;
    }
    
    .p-fileupload-row > div:last-child {
        text-align: right;
    }
    
    .p-fileupload-content > .p-progressbar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-button.p-fileupload-choose {
        position: relative;
        overflow: hidden;
    }
    
    .p-fileupload-buttonbar {
        display: flex;
        flex-wrap: wrap;
    }
    
    .p-button.p-fileupload-choose input[type='file'] {
        display: none;
    }
    
    .p-fileupload-choose.p-fileupload-choose-selected input[type='file'] {
        display: none;
    }
    
    .p-fileupload-filename {
        word-break: break-all;
    }
    
    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }
    
    .p-fileupload-file-badge {
        margin: 0.5rem;
    }
    
    .p-fluid .p-fileupload .p-button {
        width: auto;
    }
}
`,ie=Le.extend({defaultProps:{__TYPE:"FileUpload",id:null,name:null,url:null,mode:"advanced",multiple:!1,accept:null,removeIcon:null,disabled:!1,auto:!1,maxFileSize:null,invalidFileSizeMessageSummary:"{0}: Invalid file size, ",invalidFileSizeMessageDetail:"maximum upload size is {0}.",style:null,className:null,withCredentials:!1,previewWidth:50,chooseLabel:null,selectedFileLabel:null,uploadLabel:null,cancelLabel:null,chooseOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},uploadOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},cancelOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},customUpload:!1,headerClassName:null,headerStyle:null,contentClassName:null,contentStyle:null,headerTemplate:null,itemTemplate:null,emptyTemplate:null,progressBarTemplate:null,onBeforeUpload:null,onBeforeSend:null,onBeforeDrop:null,onBeforeSelect:null,onUpload:null,onError:null,onClear:null,onSelect:null,onProgress:null,onValidationFail:null,uploadHandler:null,onRemove:null,children:void 0},css:{classes:$n,styles:Ln}});function Ot(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function Te(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ot(Object(t),!0).forEach(function(a){lt(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ot(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Un(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=An(e))||n){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p=!0,i=!1,s;return{s:function(){t=t.call(e)},n:function(){var f=t.next();return p=f.done,f},e:function(f){i=!0,s=f},f:function(){try{!p&&t.return!=null&&t.return()}finally{if(i)throw s}}}}function An(e,n){if(e){if(typeof e=="string")return wt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wt(e,n)}}function wt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var kn=o.memo(o.forwardRef(function(e,n){var t=Ee(),a=o.useContext(Me),r=ie.getProps(e,a),p=o.useState([]),i=ye(p,2),s=i[0],u=i[1],f=o.useState([]),d=ye(f,2),y=d[0],z=d[1],V=o.useState(0),M=ye(V,2),U=M[0],A=M[1],q=o.useState(!1),re=ye(q,2),W=re[0],T=re[1],h=o.useState(!1),S=ye(h,2),Z=S[0],E=S[1],w={props:r,state:{progress:U,uploading:Z,uploadedFiles:s,files:y,focused:W}},x=ie.setMetaData(w),g=x.ptm,P=x.cx,X=x.isUnstyled;Ue(ie.css.styles,X,{name:"fileupload"});var j=o.useRef(null),ae=o.useRef(null),H=o.useRef(null),ce=o.useRef(0),D=L.isNotEmpty(y),ue=L.isNotEmpty(s),R=r.disabled||Z,Se=r.chooseLabel||r.chooseOptions.label||le("choose"),Ae=r.uploadLabel||r.uploadOptions.label||le("upload"),oe=r.cancelLabel||r.cancelOptions.label||le("cancel"),I=R||r.fileLimit&&r.fileLimit<=y.length+ce,k=R||!D,pe=R||!D,me=function(l){return/^image\//.test(l.type)},Pe=function(l,c){_e();var m=be(y),b=y[c];m.splice(c,1),z(m),r.onRemove&&r.onRemove({originalEvent:l,file:b})},Ft=function(l,c){_e();var m=be(s),b=y[c];m.splice(c,1),u(m),r.onRemove&&r.onRemove({originalEvent:l,file:b})},_e=function(){j.current&&(j.current.value="")},fe=function(l){var c=1024,m=3,b=le("fileSizeTypes");if(l===0)return"0 ".concat(b[0]);var C=Math.floor(Math.log(l)/Math.log(c)),B=parseFloat((l/Math.pow(c,C)).toFixed(m));return"".concat(B," ").concat(b[C])},Ne=function(l){if(!(r.onBeforeSelect&&r.onBeforeSelect({originalEvent:l,files:y})===!1)){var c=[];r.multiple&&(c=y?be(y):[]);for(var m=l.dataTransfer?l.dataTransfer.files:l.target.files,b=0;b<m.length;b++){var C=m[b];!Tt(C)&&Dt(C)&&(C.objectURL=window.URL.createObjectURL(C),c.push(C))}z(c),L.isNotEmpty(c)&&r.auto&&je(c),r.onSelect&&r.onSelect({originalEvent:l,files:c}),_e(),r.mode==="basic"&&c.length>0&&(j.current.style.display="none")}},Tt=function(l){return y.some(function(c){return c.name+c.type+c.size===l.name+l.type+l.size})},Dt=function(l){if(r.maxFileSize&&l.size>r.maxFileSize){var c={severity:"error",summary:r.invalidFileSizeMessageSummary.replace("{0}",l.name),detail:r.invalidFileSizeMessageDetail.replace("{0}",fe(r.maxFileSize)),sticky:!0};return r.mode==="advanced"&&ae.current.show(c),r.onValidationFail&&r.onValidationFail(l),!1}return!0},je=function(l){if(l=l||y,l&&l.nativeEvent&&(l=y),r.customUpload)r.fileLimit&&(ce+l.length,ht("uploadedFileCount")),r.uploadHandler&&r.uploadHandler({files:l,options:{clear:Ie,props:r}});else{E(!0);var c=new XMLHttpRequest,m=new FormData;r.onBeforeUpload&&r.onBeforeUpload({xhr:c,formData:m});var b=Un(l),C;try{for(b.s();!(C=b.n()).done;){var B=C.value;m.append(r.name,B,B.name)}}catch(N){b.e(N)}finally{b.f()}c.upload.addEventListener("progress",function(N){if(N.lengthComputable){var F=Math.round(N.loaded*100/N.total);A(F),r.onProgress&&r.onProgress({originalEvent:N,progress:F})}}),c.onreadystatechange=function(){c.readyState===4&&(A(0),E(!1),c.status>=200&&c.status<300?(r.fileLimit&&(ce+l.length,ht("uploadedFileCount")),r.onUpload&&r.onUpload({xhr:c,files:l})):r.onError&&r.onError({xhr:c,files:l}),Ie(),u(function(N){return[].concat(be(N),be(l))}))},c.open("POST",r.url,!0),r.onBeforeSend&&r.onBeforeSend({xhr:c,formData:m}),c.withCredentials=r.withCredentials,c.send(m)}},Ie=function(){z([]),u([]),E(!1),r.onClear&&r.onClear(),_e()},it=function(){j.current.click()},st=function(){T(!0)},ct=function(){T(!1)},ut=function(l){(l.code==="Enter"||l.code==="NumpadEnter")&&it()},Rt=function(l){R||(l.dataTransfer.dropEffect="copy",l.stopPropagation(),l.preventDefault())},Mt=function(l){R||(l.dataTransfer.dropEffect="copy",!X()&&He.addClass(H.current,"p-fileupload-highlight"),H.current.setAttribute("data-p-highlight",!0),l.stopPropagation(),l.preventDefault())},$t=function(l){R||(l.dataTransfer.dropEffect="copy",!X()&&He.removeClass(H.current,"p-fileupload-highlight"),H.current.setAttribute("data-p-highlight",!1))},Lt=function(l){if(!r.disabled&&(!X()&&He.removeClass(H.current,"p-fileupload-highlight"),H.current.setAttribute("data-p-highlight",!1),l.stopPropagation(),l.preventDefault(),!(r.onBeforeDrop&&r.onBeforeDrop(l)===!1))){var c=l.dataTransfer?l.dataTransfer.files:l.target.files,m=r.multiple||L.isEmpty(y)&&c&&c.length===1;m&&Ne(l)}},Ut=function(){!R&&D?je():j.current.click()};o.useImperativeHandle(n,function(){return{props:r,upload:je,clear:Ie,formatSize:fe,onFileSelect:Ne,getInput:function(){return j.current},getContent:function(){return H.current},getFiles:function(){return y},setFiles:function(l){return z(l||[])},getUploadedFiles:function(){return s},setUploadedFiles:function(l){return u(l||[])}}});var At=function(){var l=r.chooseOptions,c=l.className,m=l.style,b=l.icon,C=l.iconOnly,B=t({className:P("chooseButtonLabel")},g("chooseButtonLabel")),N=C?o.createElement("span",he({},B,{dangerouslySetInnerHTML:{__html:"&nbsp;"}})):o.createElement("span",B,Se),F=t({ref:j,type:"file",onChange:function(K){return Ne(K)},multiple:r.multiple,accept:r.accept,disabled:I},g("input")),$=o.createElement("input",F),Y=t({className:P("chooseIcon",{iconOnly:C}),"aria-hidden":"true"},g("chooseIcon")),Q=b||o.createElement(mt,Y),G=se.getJSXIcon(Q,Te({},Y),{props:r}),J=t({className:O(c,P("chooseButton",{iconOnly:C,disabled:R,className:c,focusedState:W})),style:m,onClick:it,onKeyDown:function(K){return ut(K)},onFocus:st,onBlur:ct,tabIndex:0,"data-p-disabled":R,"data-p-focus":W},g("chooseButton"));return o.createElement("span",J,$,G,N,o.createElement(Je,null))},kt=function(l,c,m){c.severity==="warning"?Pe(l,m):Ft(l,m)},pt=function(l,c,m){var b=l.name+l.type+l.size,C=t({role:"presentation",className:P("thumbnail"),src:l.objectURL,width:r.previewWidth},g("thumbnail")),B=me(l)?o.createElement("img",he({},C,{alt:l.name})):null,N=t(g("details")),F=t(g("fileSize")),$=t({className:P("fileName")},g("fileName")),Y=t(g("actions")),Q=o.createElement("div",$,l.name),G=o.createElement("div",F,fe(l.size)),J=o.createElement("div",N,o.createElement("div",$," ",l.name),o.createElement("span",F,fe(l.size)),o.createElement(Bt,{className:"p-fileupload-file-badge",value:m.value,severity:m.severity,pt:g("badge"),__parentMetadata:{parent:w}})),ee=o.createElement("div",Y,o.createElement(Ze,{type:"button",icon:r.removeIcon||o.createElement(Ke,null),text:!0,rounded:!0,severity:"danger",onClick:function(ve){return kt(ve,m,c)},disabled:R,pt:g("removeButton"),__parentMetadata:{parent:w},unstyled:X()})),K=o.createElement(o.Fragment,null,B,J,ee);if(r.itemTemplate){var ke={onRemove:function(ve){return Pe(ve,c)},previewElement:B,fileNameElement:Q,sizeElement:G,removeElement:ee,formatSize:fe(l.size),element:K,index:c,props:r};K=L.getJSXElement(r.itemTemplate,l,ke)}var de=t({key:b,className:P("file")},g("file"));return o.createElement("div",de,K)},zt=function(){var l={severity:"warning",value:le("pending")||"Pending"},c=y.map(function(m,b){return pt(m,b,l)});return o.createElement("div",null,c)},Vt=function(){var l={severity:"success",value:le("completed")||"Completed"},c=s&&s.map(function(m,b){return pt(m,b,l)});return o.createElement("div",null,c)},Ht=function(){return r.emptyTemplate&&!D&&!ue?L.getJSXElement(r.emptyTemplate,r):null},Zt=function(){if(r.progressBarTemplate){var l={progress:U,props:r};return L.getJSXElement(r.progressBarTemplate,l)}return o.createElement(It,{value:U,showValue:!1,pt:g("progressbar"),__parentMetadata:{parent:w}})},Xt=function(){var l=At(),c=Ht(),m,b,C,B,N;if(!r.auto){var F=r.uploadOptions,$=r.cancelOptions,Y=F.iconOnly?"":Ae,Q=$.iconOnly?"":oe,G=t({className:P("uploadIcon",{iconOnly:F.iconOnly}),"aria-hidden":"true"},g("uploadIcon")),J=se.getJSXIcon(F.icon||o.createElement(Ye,G),Te({},G),{props:r}),ee=t({className:P("cancelIcon",{iconOnly:$.iconOnly}),"aria-hidden":"true"},g("cancelIcon")),K=se.getJSXIcon($.icon||o.createElement(Ke,ee),Te({},ee),{props:r});m=o.createElement(Ze,{type:"button",label:Y,"aria-hidden":"true",icon:J,onClick:je,disabled:k,style:F.style,className:F.className,pt:g("uploadButton"),__parentMetadata:{parent:w},unstyled:X()}),b=o.createElement(Ze,{type:"button",label:Q,"aria-hidden":"true",icon:K,onClick:Ie,disabled:pe,style:$.style,className:$.className,pt:g("cancelButton"),__parentMetadata:{parent:w},unstyled:X()})}D&&(C=zt(),N=Zt()),ue&&(B=Vt());var ke=t({className:O(r.headerClassName,P("buttonbar")),style:r.headerStyle},g("buttonbar")),de=o.createElement("div",ke,l,m,b);if(r.headerTemplate){var ze={className:O("p-fileupload-buttonbar",r.headerClassName),chooseButton:l,uploadButton:m,cancelButton:b,element:de,props:r};de=L.getJSXElement(r.headerTemplate,ze)}var ve=t({id:r.id,className:O(r.className,P("root")),style:r.style},ie.getOtherProps(r),g("root")),Kt=t({ref:H,className:O(r.contentClassName,P("content")),style:r.contentStyle,onDragEnter:function(te){return Rt(te)},onDragOver:function(te){return Mt(te)},onDragLeave:function(te){return $t(te)},onDrop:function(te){return Lt(te)},"data-p-highlight":!1},g("content"));return o.createElement("div",ve,de,o.createElement("div",Kt,N,o.createElement(tt,{ref:ae,__parentMetadata:{parent:w}}),D?C:null,ue?B:null,c))},Jt=function(){var l=r.chooseOptions,c=t({className:P("label")},g("label")),m=l.iconOnly?o.createElement("span",he({},c,{dangerouslySetInnerHTML:{__html:"&nbsp;"}})):o.createElement("span",c,Se),b=r.auto?m:o.createElement("span",c,D?r.selectedFileLabel||y[0].name:m),C=t({className:P("chooseIcon",{iconOnly:l.iconOnly})},g("chooseIcon")),B=l.icon?l.icon:!l.icon&&(!D||r.auto)?o.createElement(mt,C):!l.icon&&D&&!r.auto&&o.createElement(Ye,C),N=se.getJSXIcon(B,Te({},C),{props:r,hasFiles:D}),F=t({ref:j,type:"file",onChange:function(J){return Ne(J)},multiple:r.multiple,accept:r.accept,disabled:R},g("input")),$=!D&&o.createElement("input",F),Y=t({className:O(r.className,P("root")),style:r.style},ie.getOtherProps(r),g("root")),Q=t({className:O(l.className,P("basicButton",{hasFiles:D,disabled:R,focusedState:W})),style:l.style,tabIndex:0,onClick:Ut,onKeyDown:function(J){return ut(J)},onFocus:st,onBlur:ct},ie.getOtherProps(r),g("basicButton"));return o.createElement("div",Y,o.createElement(tt,{ref:ae,pt:g("message"),__parentMetadata:{parent:w}}),o.createElement("span",Q,N,b,$,o.createElement(Je,null)))};if(r.mode==="advanced")return Xt();if(r.mode==="basic")return Jt()}));kn.displayName="FileUpload";export{Et as E,kn as F,St as I,It as P,at as T,Pt as a};
