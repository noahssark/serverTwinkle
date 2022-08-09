"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[876],{15:function(e,n,t){var a=t(8214),r=t(5861),i=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api".concat(n),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json","x-api-key":"EMR7dLC3GqAoyxXRH284CUKWC2SGBu3A8EgmdCaAHP3ou7PXPtofwiRzroK5vfwGnz9FCWoWZVObOwsZPqQAs5nAgJPRxHD8l4Mt"}});case 2:if(!1!==(t=e.sent).ok){e.next=5;break}throw new Error(t.statusText);case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.Z=i},5876:function(e,n,t){t.r(n);var a=t(1413),r=t(2982),i=t(885),l=t(2791),o=t(6871),u=t(7391),s=t(4925),c=t(9891),d=t(8096),p=t(3926),m=t(8070),h=t(1001),g=t(362),f=t(7247),v=t(75),Z=t(15),x=t(88),j=t(7450),y=t(9697),b=t(6907),_=t(8193),C=t(184);n.default=function(){var e=(0,o.UO)().id,n=(0,o.s0)(),t=(0,l.useState)(_.FX),k=(0,i.Z)(t,2),N=k[0],S=k[1],w=(0,l.useState)([]),P=(0,i.Z)(w,2),F=P[0],B=P[1],R=(0,l.useState)(_.vM),W=(0,i.Z)(R,2),J=W[0],T=W[1],M=(0,l.useState)([]),q=(0,i.Z)(M,2),A=q[0],G=q[1],O=(0,l.useState)([]),L=(0,i.Z)(O,2),I=L[0],K=L[1],D=(0,l.useState)([]),U=(0,i.Z)(D,2),V=U[0],E=U[1],H=(0,l.useState)([]),z=(0,i.Z)(H,2),X=z[0],Q=z[1],Y=(0,l.useState)(!1),$=(0,i.Z)(Y,2),ee=$[0],ne=$[1],te=(0,l.useState)(!1),ae=(0,i.Z)(te,2),re=ae[0],ie=ae[1],le=(0,l.useState)(""),oe=(0,i.Z)(le,2),ue=oe[0],se=oe[1],ce=(0,l.useState)(""),de=(0,i.Z)(ce,2),pe=de[0],me=de[1],he=(0,l.useState)(!1),ge=(0,i.Z)(he,2),fe=ge[0],ve=ge[1],Ze=(0,l.useState)(!1),xe=(0,i.Z)(Ze,2),je=xe[0],ye=xe[1],be=(0,l.useState)(!0),_e=(0,i.Z)(be,2),Ce=_e[0],ke=_e[1];(0,l.useEffect)((function(){(0,x.Z)("/listings/single/".concat(e)).then((function(e){S(e.data),B(e.data.otherFeatures),T(e.data.furnishingDetails),e.data.facilities.forEach((function(e){G((function(n){return[].concat((0,r.Z)(n),[JSON.stringify(e)])}))})),ke(!1),ye(!1)})).catch((function(e){n("/404")}))}),[e,je]);var Ne=new FormData,Se=function(e,n,t){return function(){(0,j.Z)("/listings/delete-file/".concat(e,"/").concat(n,"/").concat(t)).then((function(e){ye(!0)}))}},we=function(e,n,t){e&&!A.includes(JSON.stringify({title:n,icon:t}))?G((function(e){return[].concat((0,r.Z)(e),[JSON.stringify({title:n,icon:t})])})):G((function(e){return e.filter((function(e){return JSON.parse(e).title!==n}))}))},Pe=function(e){return A.some((function(n){return JSON.parse(n).title===e}))};return(0,C.jsxs)("section",{children:[(0,C.jsx)(b.ql,{children:(0,C.jsx)("meta",{name:"robots",content:"noindex"})}),Ce?(0,C.jsx)(g.Z,{fullScreen:!0}):(0,C.jsxs)("form",{onSubmit:function(t){for(var a in t.preventDefault(),ve(!0),N)"otherFeatures"!==a&&"facilities"!==a&&"furnishingDetails"!==a&&Ne.append(a,N[a]);for(var r in I)Ne.append("images",I[r]);for(var i in V)Ne.append("videos",V[i]);for(var l in X)Ne.append("documents",X[l]);for(var o in F)Ne.append("otherFeatures",F[o]);for(var u in Ne.append("furnishingDetails",JSON.stringify(J||{})),A)Ne.append("facilities",A[u]);(0,v.s)("/listings/update/".concat(e),Ne).then((function(e){ve(!1),e.success?(ne(!0),se(e.message),n("".concat("/thisissomethingrandomwhichnoonecanthinkabout","/listings"))):(ie(!0),me(e.message))}))},className:"admin-property-form",children:[(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Title",value:N.title,fullWidth:!0,required:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{title:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Description",value:N.description,fullWidth:!0,required:!0,multiline:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{description:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Address",value:N.address,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{address:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Locality",value:N.locality,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{locality:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Location",value:N.location,helperText:"Paste google maps url here",fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{location:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Owner",value:N.owner,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{owner:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Commission",value:N.commission,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{commission:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Owner Contact",value:N.ownerContact,required:!0,fullWidth:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{ownerContact:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Other Features",helperText:"Separate with enter",value:F.join("\n"),fullWidth:!0,multiline:!0,onChange:function(e){return B(e.target.value.split("\n"))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Price",type:"number",value:N.price,required:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{price:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Special Price",type:"number",value:N.specialPrice,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{specialPrice:e.target.value}))}}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Type"}),(0,C.jsxs)(p.Z,{required:!0,label:"Type",value:N.type,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{type:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"Rental",children:"Rental"}),(0,C.jsx)(c.Z,{value:"Sale",children:"Sale"}),(0,C.jsx)(c.Z,{value:"PG",children:"PG"})]})]}),("Rental"===N.type||"PG"===N.type)&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Security",value:N.security,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{security:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Maintenance",value:N.maintenance,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{maintenance:e.target.value}))}})]}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Size",type:"number",value:N.size,required:!0,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{size:e.target.value}))}}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Unit"}),(0,C.jsxs)(p.Z,{required:!0,label:"Unit",value:N.unit,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{unit:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"Sq. Ft.",children:"Sq. Ft"}),(0,C.jsx)(c.Z,{value:"Acre",children:"Acre"}),(0,C.jsx)(c.Z,{value:"Gaj",children:"Gaj"}),(0,C.jsx)(c.Z,{value:"Marla",children:"Marla"}),(0,C.jsx)(c.Z,{value:"Bigha",children:"Bigha"}),(0,C.jsx)(c.Z,{value:"Bigha-Pucca",children:"Bigha-Pucca"}),(0,C.jsx)(c.Z,{value:"Bigha-Kachha",children:"Bigha-Kachha"}),(0,C.jsx)(c.Z,{value:"Bigha-Kachha",children:"Bigha-Kachha"}),(0,C.jsx)(c.Z,{value:"Biswa",children:"Biswa"}),(0,C.jsx)(c.Z,{value:"Biswa",children:"Biswa"}),(0,C.jsx)(c.Z,{value:"Biswa-Pucca",children:"Biswa-Pucca"}),(0,C.jsx)(c.Z,{value:"Kanal",children:"Kanal"}),(0,C.jsx)(c.Z,{value:"Killa",children:"Killa"}),(0,C.jsx)(c.Z,{value:"Kattha",children:"Kattha"}),(0,C.jsx)(c.Z,{value:"Ghumaon",children:"Ghumaon"})]})]}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Floor",value:N.floor,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{floor:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Bedrooms",type:"number",value:N.bedroom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{bedroom:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Bathroom",type:"number",value:N.bathroom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{bathroom:e.target.value}))}}),("Rental"===N.type||"Sale"===N.type)&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Living Room",type:"number",value:N.livingRoom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{livingRoom:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Lobby",type:"number",value:N.lobby,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{lobby:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Dinning Room",type:"number",value:N.dinningRoom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{dinningRoom:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Store Room",type:"number",value:N.store,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{store:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Pooja Room",type:"number",value:N.poojaRoom,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{poojaRoom:e.target.value}))}})]}),"Sale"===N.type&&(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Property Age",value:N.age,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{age:e.target.value}))}})}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Kitchen",type:"number",value:N.kitchen,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{kitchen:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Open Parking",type:"number",value:N.openParking,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{openParking:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Covered Parking",type:"number",value:N.closeParking,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{closeParking:e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Balcony",type:"number",value:N.balcony,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{balcony:e.target.value}))}}),(0,C.jsx)("br",{}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"category"}),(0,C.jsxs)(p.Z,{required:!0,label:"category",value:N.category,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{category:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"Residential Apartment",children:"Residential Apartment"}),(0,C.jsx)(c.Z,{value:"Independent House/Villa",children:"Independent House/Villa"}),(0,C.jsx)(c.Z,{value:"Plot",children:"Plot"}),(0,C.jsx)(c.Z,{value:"Commercial Office",children:"Commercial Office"}),(0,C.jsx)(c.Z,{value:"Commercial Office",children:"Commercial Plot"}),(0,C.jsx)(c.Z,{value:"Serviced Apartments",children:"Serviced Apartments"}),(0,C.jsx)(c.Z,{value:"1 RK/ Studio Apartment",children:"1 RK/ Studio Apartment"}),(0,C.jsx)(c.Z,{value:"Independent/Builder Floor",children:"Independent/Builder Floor"}),(0,C.jsx)(c.Z,{value:"Other",children:"Other"})]})]}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Status"}),(0,C.jsxs)(p.Z,{required:!0,label:"Status",value:N.status,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{status:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"Unfurnished",children:"Unfurnished"}),(0,C.jsx)(c.Z,{value:"Semifurnished",children:"Semifurnished"}),(0,C.jsx)(c.Z,{value:"Furnished",children:"Furnished"})]})]}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Featured"}),(0,C.jsxs)(p.Z,{required:!0,label:"Featured",value:N.featured,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{featured:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"true",children:"True"}),(0,C.jsx)(c.Z,{value:"false",children:"False"})]})]}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Direction"}),(0,C.jsxs)(p.Z,{required:!0,label:"Direction",value:N.direction,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{direction:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"North",children:"North"}),(0,C.jsx)(c.Z,{value:"South",children:"South"}),(0,C.jsx)(c.Z,{value:"East",children:"East"}),(0,C.jsx)(c.Z,{value:"West",children:"West"}),(0,C.jsx)(c.Z,{value:"North-East",children:"North-East"}),(0,C.jsx)(c.Z,{value:"North-West",children:"North-West"}),(0,C.jsx)(c.Z,{value:"South-East",children:"South-East"}),(0,C.jsx)(c.Z,{value:"South-West",children:"South-West"})]})]}),"Sale"===N.type&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Purchase Type"}),(0,C.jsxs)(p.Z,{required:!0,label:"Purchase Type",value:N.purchaseType,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{purchaseType:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"New Booking",children:"New Booking"}),(0,C.jsx)(c.Z,{value:"Resale",children:"Resale"})]})]}),(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Construction Status"}),(0,C.jsxs)(p.Z,{required:!0,label:"Construction Status",value:N.constructionStatus,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{constructionStatus:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"Under Construction",children:"Under Construction"}),(0,C.jsx)(c.Z,{value:"Ready to Move",children:"Ready to Move"})]})]})]}),("Sale"===N.type||"Rental"===N.type)&&(0,C.jsxs)(d.Z,{className:"admin-property-form__select",children:[(0,C.jsx)(s.Z,{children:"Possession"}),(0,C.jsxs)(p.Z,{required:!0,label:"Possession",value:N.possession,onChange:function(e){return S((0,a.Z)((0,a.Z)({},N),{},{possession:e.target.value}))},children:[(0,C.jsx)(c.Z,{value:"Immediate",children:"Immediate"}),(0,C.jsx)(c.Z,{value:"Between 1 Month",children:"Between 1 Month"}),(0,C.jsx)(c.Z,{value:"Between 2 Month",children:"Between 2 Month"}),(0,C.jsx)(c.Z,{value:"Between 3 Month",children:"Between 3 Month"}),(0,C.jsx)(c.Z,{value:"Between 6 Months",children:"Between 6 Months"}),(0,C.jsx)(c.Z,{value:"2023",children:"2023"}),(0,C.jsx)(c.Z,{value:"2024",children:"2024"}),(0,C.jsx)(c.Z,{value:"2025",children:"2025"}),(0,C.jsx)(c.Z,{value:"2026",children:"2026"}),(0,C.jsx)(c.Z,{value:"2027",children:"2027"}),(0,C.jsx)(c.Z,{value:"2028",children:"2028"}),(0,C.jsx)(c.Z,{value:"2029",children:"2029"}),(0,C.jsx)(c.Z,{value:"2030",children:"2030"})]})]}),("Furnished"===N.status||"Semifurnished"===N.status)&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h1",{children:"Add Furnishing Details (Add amount of things eg:- fans = 5)"}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"AC",type:"number",value:J.ac,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{ac:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"stove",type:"number",value:J.stove,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{stove:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Modular Kitchen",type:"number",value:J.modularKitchen,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{modularKitchen:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Fans",type:"number",value:J.fans,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{fans:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Fridge",type:"number",value:J.fridge,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{fridge:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Light",type:"number",value:J.light,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{light:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Bed",type:"number",value:J.beds,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{beds:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"microwave",type:"number",value:J.microwave,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{microwave:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"dinning table",type:"number",value:J.dinningTable,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{dinningTable:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"TV",type:"number",value:J.tv,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{tv:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Dressing Table",type:"number",value:J.dressingTable,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{dressingTable:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"TV Wall Panel",type:"number",value:J.tvWallPanel,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{tvWallPanel:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"wardrobe",type:"number",value:J.wardrobe,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{wardrobe:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"washing machine",type:"number",value:J.washingMachine,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{washingMachine:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Geyser",type:"number",value:J.geyser,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{geyser:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Curtains",type:"number",value:J.curtains,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{curtains:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Sofa",type:"number",value:J.sofa,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{sofa:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"water purifier",type:"number",value:J.waterPurifier,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{waterPurifier:+e.target.value}))}}),(0,C.jsx)(u.Z,{className:"admin-property-form__input",variant:"outlined",label:"Exhaust",type:"number",value:J.exhaust,onChange:function(e){return T((0,a.Z)((0,a.Z)({},J),{},{exhaust:+e.target.value}))}})]}),(0,C.jsx)("h1",{children:"Choose Facilities From The Following "}),(0,C.jsxs)("div",{className:"admin-property-form__facilities",children:[(0,C.jsx)(y.J,{label:"Fire/Security Alarm",checked:Pe("Fire/Security Alarm"),onChange:function(e){return we(e.target.checked,"Fire/Security Alarm","alarm.png")}}),(0,C.jsx)(y.J,{label:"Power Backup",checked:Pe("Power Backup"),onChange:function(e){return we(e.target.checked,"Power Backup","power-backup.png")}}),(0,C.jsx)(y.J,{label:"Intercome",checked:Pe("Intercome"),onChange:function(e){return we(e.target.checked,"Intercome","intercome.png")}}),(0,C.jsx)(y.J,{label:"Lift",checked:Pe("Lift"),onChange:function(e){return we(e.target.checked,"Lift","lift.png")}}),(0,C.jsx)(y.J,{label:"Maintenance Staff",checked:Pe("Maintenance Staff"),onChange:function(e){return we(e.target.checked,"Maintenance Staff","maintenance.png")}}),(0,C.jsx)(y.J,{label:"Park",checked:Pe("Park"),onChange:function(e){return we(e.target.checked,"Park","park.png")}}),(0,C.jsx)(y.J,{label:"Swimming Pool",checked:Pe("Swimming Pool"),onChange:function(e){return we(e.target.checked,"Swimming Pool","swimming-pool.png")}}),(0,C.jsx)(y.J,{label:"Gym",checked:Pe("Gym"),onChange:function(e){return we(e.target.checked,"Gym","gym.png")}}),(0,C.jsx)(y.J,{label:"Market",checked:Pe("Market"),onChange:function(e){return we(e.target.checked,"Market","market.png")}}),(0,C.jsx)(y.J,{label:"Water Storage",checked:Pe("Water Storage"),onChange:function(e){return we(e.target.checked,"Water Storage","water-tank.png")}}),(0,C.jsx)(y.J,{label:"Piped Gas",checked:Pe("Piped Gas"),onChange:function(e){return we(e.target.checked,"Piped Gas","piped-gas.png")}}),(0,C.jsx)(y.J,{label:"Visitor Parking",checked:Pe("Visitor Parking"),onChange:function(e){return we(e.target.checked,"Visitor Parking","parking.png")}}),(0,C.jsx)(y.J,{label:"Water supply 24/7",checked:Pe("Water supply 24/7"),onChange:function(e){return we(e.target.checked,"Water supply 24/7","water.png")}}),(0,C.jsx)(y.J,{label:"Security Guard",checked:Pe("Security Guard"),onChange:function(e){return we(e.target.checked,"Security Guard","security-guard.png")}}),(0,C.jsx)(y.J,{label:"CCTV",checked:Pe("CCTV"),onChange:function(e){return we(e.target.checked,"CCTV","cctv.png")}}),(0,C.jsx)(y.J,{label:"Gated Society",checked:Pe("Gated Society"),onChange:function(e){return we(e.target.checked,"Gated Society","gate.png")}}),(0,C.jsx)(y.J,{label:"Street Light",checked:Pe("Street Light"),onChange:function(e){return we(e.target.checked,"Street Light","street-light.png")}}),(0,C.jsx)(y.J,{label:"WiFi",checked:Pe("WiFi"),onChange:function(e){return we(e.target.checked,"WiFi","wifi.png")}}),(0,C.jsx)(y.J,{label:"Club House",checked:Pe("Club House"),onChange:function(e){return we(e.target.checked,"Club House","club-house.png")}}),(0,C.jsx)(y.J,{label:"STP",checked:Pe("STP"),onChange:function(e){return we(e.target.checked,"STP","STP.png")}}),(0,C.jsx)(y.J,{label:"Ceiling Light",checked:Pe("Ceiling Light"),onChange:function(e){return we(e.target.checked,"Ceiling Light","ceiling-light.png")}})]}),(0,C.jsx)("h1",{children:"Images"}),N.images.length>0?N.images.map((function(e){return(0,C.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,C.jsx)("img",{className:"admin-property-form__preview",src:e.url,alt:"can't preview"}),(0,C.jsx)(m.I,{title:(0,C.jsx)(f.Z,{}),onClick:Se(N._id,"images",e.key)})]},e.key)})):(0,C.jsx)("h1",{children:"there are no images"}),(0,C.jsx)("h1",{children:"Videos"}),N.videos.length>0?N.videos.map((function(e){return(0,C.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,C.jsx)("video",{controls:!0,autoPlay:!0,muted:!0,loop:!0,className:"admin-property-form__preview",children:(0,C.jsx)("source",{src:e.url,type:"video/mp4"})}),(0,C.jsx)(m.I,{title:(0,C.jsx)(f.Z,{}),onClick:Se(N._id,"videos",e.key)})]},e.key)})):(0,C.jsx)("h1",{children:"there are no Videos"}),(0,C.jsx)("br",{}),(0,C.jsx)(m.t,{title:"Image",className:"admin-property-form__upload-btn",onChange:function(e){return K([].concat((0,r.Z)(I),(0,r.Z)(e.target.files)))},accept:"image/*"}),I.map((function(e,n){if(e instanceof File){var t=URL.createObjectURL(e);return(0,C.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,C.jsx)("img",{className:"admin-property-form__preview",src:t,alt:"can't preview"}),(0,C.jsx)(m.I,{title:(0,C.jsx)(f.Z,{}),onClick:function(){return K(I.filter((function(e,t){return t!==n})))}})]},n)}})),(0,C.jsx)("br",{}),(0,C.jsx)(m.t,{title:"Videos",className:"admin-property-form__upload-btn",onChange:function(e){return E([].concat((0,r.Z)(V),(0,r.Z)(e.target.files)))},accept:"video/*"}),V.map((function(e,n){if(e instanceof File){var t=URL.createObjectURL(e);return(0,C.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,C.jsx)("video",{controls:!0,autoPlay:!0,muted:!0,loop:!0,className:"admin-property-form__preview",children:(0,C.jsx)("source",{src:t,type:"video/mp4"})}),(0,C.jsx)(m.I,{title:(0,C.jsx)(f.Z,{}),onClick:function(){return E(V.filter((function(e,t){return t!==n})))}})]},n)}})),(0,C.jsx)("br",{}),(0,C.jsx)(m.t,{title:"Documents",className:"admin-property-form__upload-btn",onChange:function(e){return Q([].concat((0,r.Z)(X),(0,r.Z)(e.target.files)))},accept:"application/pdf"}),X.map((function(e,n){if(e instanceof File){var t=URL.createObjectURL(e);return(0,C.jsxs)("div",{className:"admin-property-form__preview-container",children:[(0,C.jsx)("iframe",{src:t,title:t,height:"200",width:"300"}),(0,C.jsx)(m.I,{title:(0,C.jsx)(f.Z,{}),onClick:function(){return Q(X.filter((function(e,t){return t!==n})))}})]},n)}})),(0,C.jsx)("br",{}),(0,C.jsx)(h.ik,{title:ue,open:ee,setOpen:ne}),(0,C.jsx)(h.rt,{title:pe,open:re,setOpen:ie}),(0,C.jsx)(m.I,{title:"Submit",className:"admin-property-form__submit-btn",type:"submit",loading:fe}),(0,C.jsx)(m.I,{title:"Approve",className:"admin-property-form__submit-btn",loading:fe,onClick:(N._id,function(e){e.preventDefault(),(0,Z.Z)("/listings/approve/".concat(N._id)).then((function(e){e.success?(se(e.message),ne(!0),n("".concat("/thisissomethingrandomwhichnoonecanthinkabout","/listings"))):(me(e.message),ie(!0))}))})}),(0,C.jsx)(m.I,{title:"Delete",className:"admin-property-form__submit-btn",loading:fe,onClick:function(e){return function(t){t.preventDefault(),(0,j.Z)("/listings/delete/".concat(e)).then((function(e){e.success?(se(e.message),ne(!0),n("".concat("/thisissomethingrandomwhichnoonecanthinkabout","/listings"))):(me(e.message),ie(!0))}))}}(N._id)})]})]})}}}]);
//# sourceMappingURL=876.8f104791.chunk.js.map