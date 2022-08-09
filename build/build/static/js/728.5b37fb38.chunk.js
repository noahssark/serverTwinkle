"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[728],{9598:function(e,t,n){n.d(t,{ic:function(){return r},xH:function(){return i},LC:function(){return u},s9:function(){return c}});var a=n(1123),s=n(184),r=function(e){return(0,s.jsx)(a.Z,{variant:"h1",className:"".concat(e.className," heading-primary"),children:e.title})},i=function(e){return(0,s.jsx)(a.Z,{variant:"h2",className:"".concat(e.className," heading-secondary"),children:e.title})},u=function(e){return(0,s.jsx)(a.Z,{variant:"subtitle1",className:"".concat(e.className," subtitle-primary"),component:"p",children:e.title})},c=function(e){return(0,s.jsx)(a.Z,{variant:"subtitle2",className:"".concat(e.className," subtitle-secondary"),component:"p",children:e.title})}},3728:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(1413),s=n(8214),r=n(5861),i=n(885),u=n(2791),c=n(7391),l=n(8070),o=n(9598),m=n(1001),f=n(4534),h=n(184),b=function(){var e=(0,u.useState)({name:"",email:"",phone:"",subject:"",message:""}),t=(0,i.Z)(e,2),n=t[0],b=t[1],d=(0,u.useState)(""),p=(0,i.Z)(d,2),g=p[0],Z=p[1],v=(0,u.useState)(!1),x=(0,i.Z)(v,2),j=x[0],N=x[1],_=(0,u.useState)(""),k=(0,i.Z)(_,2),S=k[0],y=k[1],C=(0,u.useState)(!1),w=(0,i.Z)(C,2),q=w[0],W=w[1],M=(0,u.useState)(!1),O=(0,i.Z)(M,2),P=O[0],D=O[1],E=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),D(!0),10===n.phone.length){e.next=7;break}return y("Phone number must be 10 digits"),W(!0),D(!1),e.abrupt("return");case 7:if(!(n.name.length<3||n.name.length>30)){e.next=12;break}return y("Name must be between 3 and 30 characters"),W(!0),D(!1),e.abrupt("return");case 12:if(!(n.subject.length>200)){e.next=17;break}return y("Subject must be less than 200 characters"),W(!0),D(!1),e.abrupt("return");case 17:if(!(n.message.length>1e3)){e.next=22;break}return y("Message must be less than 1000 characters"),W(!0),D(!1),e.abrupt("return");case 22:return e.next=24,(0,f.Z)("/contacts/add",n,!1);case 24:a=e.sent,D(!1),!0===a.success?(Z(a.message),N(!0),b({name:"",email:"",phone:"",subject:"",message:""})):(y(a.message),W(!0));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)("section",{className:"form-section",id:"form-section",children:[(0,h.jsx)(o.ic,{className:"form-section__heading",title:"Contact us today if you'd like to know more about what our real estate services"}),(0,h.jsxs)("form",{className:"form-section__form",onSubmit:E,children:[(0,h.jsx)("div",{className:"form-section__image",children:(0,h.jsx)("img",{src:"/images/illustrations/mailbox.svg",alt:"illustration"})}),(0,h.jsxs)("div",{className:"form-section__inputs",children:[(0,h.jsx)(m.ik,{title:g,open:j,setOpen:N}),(0,h.jsx)(m.rt,{title:S,open:q,setOpen:W}),(0,h.jsx)(c.Z,{className:"form-section__input",label:"Name",variant:"outlined",onChange:function(e){return b((0,a.Z)((0,a.Z)({},n),{},{name:e.target.value}))},value:n.name,required:!0,fullWidth:!0}),(0,h.jsx)(c.Z,{className:"form-section__input",label:"Email",onChange:function(e){return b((0,a.Z)((0,a.Z)({},n),{},{email:e.target.value}))},value:n.email,required:!0,fullWidth:!0}),(0,h.jsx)(c.Z,{className:"form-section__input",label:"Phone",type:"number",onChange:function(e){return b((0,a.Z)((0,a.Z)({},n),{},{phone:e.target.value}))},value:n.phone,required:!0,fullWidth:!0}),(0,h.jsx)(c.Z,{className:"form-section__input",label:"Subject",onChange:function(e){return b((0,a.Z)((0,a.Z)({},n),{},{subject:e.target.value}))},value:n.subject,required:!0,fullWidth:!0}),(0,h.jsx)(c.Z,{label:"Message",className:"form-section__input",rows:10,onChange:function(e){return b((0,a.Z)((0,a.Z)({},n),{},{message:e.target.value}))},value:n.message,required:!0,fullWidth:!0,multiline:!0}),(0,h.jsx)(l.I,{title:"Submit",className:"form-section__btn",type:"submit",loading:P})]})]})]})}}}]);
//# sourceMappingURL=728.5b37fb38.chunk.js.map