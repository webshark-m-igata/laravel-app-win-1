import{m as n,j as e,L as d}from"./app-BpWF_zq6.js";import{I as u}from"./InputError-Bqut1ndV.js";import{P as p}from"./PrimaryButton-B9dUf_5g.js";import{T as c}from"./TextInput-C1OGIzNU.js";import{G as x}from"./GuestLayout-Cuch3_9e.js";import"./button.esm-BmW90ZmM.js";import"./index.esm-vtogsqpO.js";import"./inputtext.esm-CiNcK0lE.js";import"./keyfilter.esm-shNeTo9H.js";import"./ApplicationLogo-C5H6nwKx.js";function k({status:t}){const{data:a,setData:o,post:r,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(x,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(c,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(u,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(p,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{k as default};
