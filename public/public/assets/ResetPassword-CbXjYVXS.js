import{m as w,j as s,L as f}from"./app-BpWF_zq6.js";import{I as t}from"./InputError-Bqut1ndV.js";import{I as m}from"./InputLabel-BiOPztuF.js";import{P as x}from"./PrimaryButton-B9dUf_5g.js";import{T as i}from"./TextInput-C1OGIzNU.js";import{G as j}from"./GuestLayout-Cuch3_9e.js";import"./button.esm-BmW90ZmM.js";import"./index.esm-vtogsqpO.js";import"./inputtext.esm-CiNcK0lE.js";import"./keyfilter.esm-shNeTo9H.js";import"./ApplicationLogo-C5H6nwKx.js";function L({token:l,email:n}){const{data:e,setData:o,post:d,processing:p,errors:r,reset:c}=w({token:l,email:n,password:"",password_confirmation:""}),u=a=>{a.preventDefault(),d(route("password.store"),{onFinish:()=>c("password","password_confirmation")})};return s.jsxs(j,{children:[s.jsx(f,{title:"Reset Password"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(t,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(t,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",id:"password_confirmation",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(t,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(x,{className:"ms-4",disabled:p,children:"Reset Password"})})]})]})}export{L as default};
