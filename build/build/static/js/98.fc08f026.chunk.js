"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[98],{8321:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(3971),a=t(184),i=function(e){return(0,a.jsx)(s.Z,{className:"modal",open:e.open,onClose:e.onClose,children:(0,a.jsx)("div",{className:"modal__content ".concat(e.className),children:e.children})})}},9598:function(e,n,t){t.d(n,{ic:function(){return i},xH:function(){return r},LC:function(){return o},s9:function(){return l}});var s=t(1123),a=t(184),i=function(e){return(0,a.jsx)(s.Z,{variant:"h1",className:"".concat(e.className," heading-primary"),children:e.title})},r=function(e){return(0,a.jsx)(s.Z,{variant:"h2",className:"".concat(e.className," heading-secondary"),children:e.title})},o=function(e){return(0,a.jsx)(s.Z,{variant:"subtitle1",className:"".concat(e.className," subtitle-primary"),component:"p",children:e.title})},l=function(e){return(0,a.jsx)(s.Z,{variant:"subtitle2",className:"".concat(e.className," subtitle-secondary"),component:"p",children:e.title})}},3098:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var s=t(8214),a=t(5861),i=t(885),r=t(7391),o=t(2791),l=t(6907),c=t(501),u=t(6871),m=t(75),p=t(4534),d=t(1222),f=t(1001),h=t(8070),x=t(8321),g=t(9598),Z=t(184),j=function(){var e=(0,u.s0)(),n=(0,o.useContext)(d.Y).setAuthFormSubmit,t=(0,o.useState)("youremail@example.com"),j=(0,i.Z)(t,2),v=j[0],_=j[1],N=(0,o.useState)(""),b=(0,i.Z)(N,2),y=b[0],S=b[1],w=(0,o.useState)(""),k=(0,i.Z)(w,2),C=k[0],P=k[1],L=(0,o.useState)(!1),O=(0,i.Z)(L,2),W=O[0],D=O[1],q=(0,o.useState)(""),F=(0,i.Z)(q,2),I=F[0],V=F[1],A=(0,o.useState)(!1),E=(0,i.Z)(A,2),H=E[0],T=E[1],U=(0,o.useState)(!1),Y=(0,i.Z)(U,2),z=Y[0],B=Y[1],G=(0,o.useState)(!1),J=(0,i.Z)(G,2),K=J[0],M=J[1],Q=(0,o.useState)(!1),R=(0,i.Z)(Q,2),X=R[0],$=R[1],ee=(0,o.useState)(""),ne=(0,i.Z)(ee,2),te=ne[0],se=ne[1],ae=(0,o.useState)(!1),ie=(0,i.Z)(ae,2),re=ie[0],oe=ie[1],le=(0,o.useState)(""),ce=(0,i.Z)(le,2),ue=ce[0],me=ce[1],pe=(0,o.useState)(""),de=(0,i.Z)(pe,2),fe=de[0],he=de[1],xe=function(){var t=(0,a.Z)((0,s.Z)().mark((function t(a){var i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),T(!0),t.next=4,(0,p.Z)("/auth/login",{email:v,password:y},!1);case 4:i=t.sent,T(!1),i.success?(e("/"),n(!0)):(V(i.message),D(!0));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ge=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),T(!0),e.next=4,(0,p.Z)("/otp/send",{email:v},!1);case 4:t=e.sent,T(!1),t.success?(B(!1),M(!0)):(se(t.message),$(!0));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),T(!0),e.next=4,(0,p.Z)("/otp/verify",{email:v,otp:fe},!1);case 4:if(t=e.sent,T(!1),!t.success){e.next=13;break}return e.next=9,(0,m.L)("/users/reset-password",{email:v,newPassword:C});case 9:(a=e.sent).success?M(!1):(se(a.message),B(!0),$(!0)),e.next=15;break;case 13:me(t.message),oe(!0);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,Z.jsxs)("section",{className:"login-section",children:[(0,Z.jsxs)(l.ql,{children:[(0,Z.jsx)("title",{children:"Login | Shri Property"}),(0,Z.jsx)("link",{rel:"canonical",href:"https://shriproperty.com/login"}),(0,Z.jsx)("meta",{name:"description",content:"Login on Shri Property"})]}),(0,Z.jsx)(x.Z,{open:z,onClose:function(){return B(!1)},children:(0,Z.jsxs)("form",{className:"login-section__modal",onSubmit:ge,children:[(0,Z.jsx)("h2",{children:"Forget Password"}),(0,Z.jsx)(f.rt,{title:te,open:X,setOpen:$}),(0,Z.jsx)(r.Z,{label:"email",type:"email",variant:"outlined",className:"login-section__modal-input",onChange:function(e){return _(e.target.value)},fullWidth:!0}),(0,Z.jsx)(r.Z,{label:"New Password",variant:"outlined",type:"password",className:"login-section__modal-input",onChange:function(e){return P(e.target.value)},fullWidth:!0}),(0,Z.jsx)(h.I,{title:"Submit",type:"submit",loading:H})]})}),(0,Z.jsx)(x.Z,{open:K,children:(0,Z.jsxs)("form",{className:"login-section__modal",onSubmit:Ze,children:[(0,Z.jsx)("h2",{children:"Verify Otp"}),(0,Z.jsx)(g.LC,{title:"Please check your email"}),(0,Z.jsx)(f.rt,{title:ue,open:re,setOpen:oe}),(0,Z.jsx)(r.Z,{label:"OTP",type:"number",variant:"outlined",className:"login-section__modal-input",onChange:function(e){return he(e.target.value)},fullWidth:!0}),(0,Z.jsx)(h.I,{title:"Verify",type:"submit",loading:H,className:"model-btn"})]})}),(0,Z.jsxs)("div",{className:"login-section__container",children:[(0,Z.jsx)("img",{src:"/images/illustrations/login.svg",alt:"illustration",className:"login-section__image"}),(0,Z.jsxs)("form",{className:"login-section__form",onSubmit:xe,children:[(0,Z.jsx)(f.rt,{title:I,open:W,setOpen:D}),(0,Z.jsx)(r.Z,{className:"login-section__input",label:"Email",variant:"outlined",type:"email",value:v,onChange:function(e){return _(e.target.value)},fullWidth:!0,required:!0}),(0,Z.jsx)(r.Z,{className:"login-section__input",label:"Password",variant:"outlined",type:"password",onChange:function(e){return S(e.target.value)},fullWidth:!0,required:!0}),(0,Z.jsxs)("p",{className:"login-section__link",children:["Don't have account ",(0,Z.jsx)(c.rU,{to:"/signup",children:"Signup"})]}),(0,Z.jsx)("p",{className:"login-section__link",onClick:function(){return B(!0)},children:(0,Z.jsx)("span",{children:"Forgot Password?"})}),(0,Z.jsx)(h.I,{title:"Login",className:"login-section__btn",type:"submit",loading:H})]})]})]})}}}]);
//# sourceMappingURL=98.fc08f026.chunk.js.map