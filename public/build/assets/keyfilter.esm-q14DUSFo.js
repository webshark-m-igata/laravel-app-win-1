import{D as u}from"./app-JF3uN-Dk.js";function o(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return o(t)}function d(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function y(t,e){if(t){if(typeof t=="string")return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(t){return s(t)||d(t)||y(t)||c()}var f={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return f.DEFAULT_MASKS[e]?f.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,r,n){n||!u.isAndroid()||this.validateKey(e,e.data,r)},onKeyPress:function(e,r,n){n||u.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,r)},onPaste:function(e,r,n){if(!n){var a=this.getRegex(r),i=e.clipboardData.getData("text");p(i).forEach(function(l){if(!a.test(l))return e.preventDefault(),!1})}},validateKey:function(e,r,n){if(r!=null){var a=r.length<=2;if(a){var i=this.getRegex(n);i.test(r)||e.preventDefault()}}},validate:function(e,r){var n=e.target.value,a=!0,i=this.getRegex(r);return n&&!i.test(n)&&(a=!1),a}};export{f as K};
