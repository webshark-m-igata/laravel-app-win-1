import{m as p,j as s,L as d}from"./app-JF3uN-Dk.js";import{I as l}from"./InputError-B67gl2lN.js";import{I as c}from"./InputLabel-DWhk0P_d.js";import{P as u}from"./PrimaryButton-D-iHZt_f.js";import{T as f}from"./TextInput-sltJWj9l.js";import{G as x}from"./GuestLayout-DXecXOFU.js";import"./button.esm-DvvdiB24.js";import"./index.esm-JebaGdGS.js";import"./inputtext.esm-Dx8VHfmb.js";import"./keyfilter.esm-q14DUSFo.js";import"./ApplicationLogo-Bsu5Xdf2.js";function L(){const{data:o,setData:a,post:e,processing:t,errors:m,reset:i}=p({password:""}),n=r=>{r.preventDefault(),e(route("password.confirm"),{onFinish:()=>i("password")})};return s.jsxs(x,{children:[s.jsx(d,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(l,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{L as default};
