"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[726],{8321:function(e,t,c){c.d(t,{Z:function(){return a}});var l=c(3971),n=c(184),a=function(e){return(0,n.jsx)(l.Z,{className:"modal",open:e.open,onClose:e.onClose,children:(0,n.jsx)("div",{className:"modal__content ".concat(e.className),children:e.children})})}},8726:function(e,t,c){c.r(t);var l=c(885),n=c(2791),a=c(6871),i=c(501),s=c(9836),r=c(3382),o=c(3994),h=c(6890),d=c(5855),g=c(7247),_=c(1286),x=c(1001),j=c(8321),u=c(8070),m=c(362),Z=c(88),p=c(7450),b=c(6907),N=c(184);t.default=function(){var e=(0,a.UO)().id,t=(0,n.useState)({listings:[],properties:[]}),c=(0,l.Z)(t,2),f=c[0],k=c[1],C=(0,n.useState)(!0),S=(0,l.Z)(C,2),v=S[0],P=S[1],U=(0,n.useState)(""),w=(0,l.Z)(U,2),I=w[0],y=w[1],D=(0,n.useState)(!1),L=(0,l.Z)(D,2),O=L[0],z=L[1],A=(0,n.useState)(""),E=(0,l.Z)(A,2),M=E[0],T=E[1],q=(0,n.useState)(!1),F=(0,l.Z)(q,2),V=F[0],B=F[1],G=(0,n.useState)(!1),H=(0,l.Z)(G,2),J=H[0],K=H[1],Q=(0,n.useState)(!1),R=(0,l.Z)(Q,2),W=R[0],X=R[1],Y=(0,n.useState)(!1),$=(0,l.Z)(Y,2),ee=$[0],te=$[1];(0,n.useEffect)((function(){(0,Z.Z)("/users/single/".concat(e,"?listings=true&properties=true")).then((function(e){k(e.data),P(!1),te(!1)}))}),[e,ee]);var ce=function(e,t){return function(c){c.preventDefault(),K(!0),(0,p.Z)("/".concat(t,"/delete/").concat(e)).then((function(e){K(!1),X(!1),e.success?(T(e.message),B(!0)):(y(e.message),z(!0))})).finally((function(){te(!0)}))}};return(0,N.jsxs)("main",{children:[(0,N.jsx)(b.ql,{children:(0,N.jsx)("meta",{name:"robots",content:"noindex"})}),(0,N.jsx)(x.ik,{title:M,open:V,setOpen:B,className:"admin-page__alert"}),(0,N.jsx)(x.rt,{title:I,open:O,setOpen:z,className:"admin-page__alert"}),v?(0,N.jsx)(m.Z,{fullScreen:!0}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("h1",{children:"Listings"}),(0,N.jsxs)(s.Z,{className:"contact-table",children:[(0,N.jsx)(h.Z,{children:(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Title"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Address"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Price"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Special Price"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Delete"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Update"})]})}),(0,N.jsx)(r.Z,{children:f.listings.map((function(e){return(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(j.Z,{open:W,onClose:function(){return X(!1)},className:"admin-page__modal",children:(0,N.jsx)(u.I,{title:"confirm",onClick:ce(e._id,"listings"),loading:J})}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:(0,N.jsx)(i.rU,{to:"".concat("/thisissomethingrandomwhichnoonecanthinkabout","/listings/").concat(e._id),children:e.title})}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:e.address}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:e.price}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:e.specialPrice}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:(0,N.jsx)(u.I,{title:(0,N.jsx)(g.Z,{}),onClick:function(){return X(!0)}})}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:(0,N.jsx)(i.rU,{to:"".concat("/thisissomethingrandomwhichnoonecanthinkabout","/listings/").concat(e._id),children:(0,N.jsx)(u.I,{title:(0,N.jsx)(_.Z,{}),onClick:function(){return X(!0)}})})})]},e._id)}))})]}),(0,N.jsx)("h1",{children:"Properties"}),(0,N.jsxs)(s.Z,{className:"contact-table",children:[(0,N.jsx)(h.Z,{children:(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Title"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Address"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Price"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Special Price"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Delete"}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:"Update"})]})}),(0,N.jsx)(r.Z,{children:f.properties.map((function(e){return(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(j.Z,{open:W,onClose:function(){return X(!1)},className:"admin-page__modal",children:(0,N.jsx)(u.I,{title:"confirm",onClick:ce(e._id,"properties"),loading:J})}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:(0,N.jsx)(i.rU,{to:"".concat("/thisissomethingrandomwhichnoonecanthinkabout","/property/update/").concat(e._id),children:e.title})}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:e.address}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:e.price}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:e.specialPrice}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:(0,N.jsx)(u.I,{title:(0,N.jsx)(g.Z,{}),onClick:function(){return X(!0)}})}),(0,N.jsx)(o.Z,{className:"contact-table__cell",align:"right",children:(0,N.jsx)(i.rU,{to:"".concat("/thisissomethingrandomwhichnoonecanthinkabout","/property/update/").concat(e._id),children:(0,N.jsx)(u.I,{title:(0,N.jsx)(_.Z,{}),onClick:function(){return X(!0)}})})})]},e._id)}))})]})]})]})}},1286:function(e,t,c){var l=c(5318);t.Z=void 0;var n=l(c(5649)),a=c(184),i=(0,n.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i}}]);
//# sourceMappingURL=726.2a925c54.chunk.js.map