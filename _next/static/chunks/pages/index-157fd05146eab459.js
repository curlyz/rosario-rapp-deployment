(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(240)}])},2290:function(e,r,t){"use strict";var o=t(7294),i=t(1020);r.Z=()=>(0,o.useContext)(i.Tp)},240:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var o=t(5893),i=t(1163),a=t(9968),n=t(3842),l=t(5282);function s(e){let{formula:r,onClickEdit:t,onClick:i,...a}=e;return(0,o.jsxs)("div",{className:"border rounded-xl ".concat(r.backdrop,"  w-full h-full flex flex-col  hover:scale-105 transition-transform duration-200 hover:border-blue-500  items-center  justify-center"),onMouseDown:e=>{i()},children:[(0,o.jsx)("div",{className:"absolute top-0 right-0",children:(0,o.jsx)("button",{className:"hover:opacity-50",onMouseDown:e=>{t(),e.preventDefault(),e.stopPropagation()},children:(0,o.jsx)(l.DVr,{size:32,className:"text-white m-1 "})})}),(0,o.jsx)("h1",{className:"truncate text-clip text-balance text-xl text-center select-none",children:r.title})]})}var d=t(7294),u=t(2091),b=t(3513),g=t(6281),c=t(2290);let m=(0,a.WidthProvider)(a.Responsive),f=["bg-gradient-to-br from-teal-500 via-aqua-400 to-blue-500","bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600","bg-gradient-to-br from-blue-300 via-gray-400 to-gray-200","bg-gradient-to-br from-green-500 via-lime-400 to-green-300","bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500","bg-gradient-to-br from-pink-400 via-yellow-400 to-orange-400","bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-500","bg-gradient-to-br from-pink-300 via-pink-200 to-purple-300","bg-gradient-to-br from-green-400 via-teal-400 to-teal-500","bg-gradient-to-br from-indigo-800 via-blue-800 to-blue-900","bg-gradient-to-br from-red-500 via-rose-400 to-pink-500","bg-gradient-to-br from-yellow-300 via-amber-300 to-orange-300","bg-gradient-to-br from-purple-500 via-violet-400 to-indigo-500","bg-gradient-to-br from-green-600 via-lime-500 to-yellow-500","bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-400","bg-gradient-to-br from-rose-500 via-pink-400 to-purple-500","bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500","bg-gradient-to-br from-orange-300 via-yellow-300 to-lime-300","bg-gradient-to-br from-teal-600 via-green-500 to-lime-600","bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400","bg-gradient-to-br from-pink-500 via-rose-400 to-purple-500","bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500","bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500","bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-600","bg-gradient-to-br from-red-400 via-rose-400 to-pink-400","bg-gradient-to-br from-teal-500 via-cyan-400 to-blue-500","bg-gradient-to-br from-amber-500 via-yellow-400 to-lime-500","bg-gradient-to-br from-indigo-400 via-blue-300 to-cyan-400","bg-gradient-to-br from-purple-500 via-pink-400 to-red-500","bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-400","bg-gradient-to-br from-teal-400 via-green-300 to-lime-400","bg-gradient-to-br from-pink-400 via-rose-300 to-purple-400"];var p=()=>{let[e,r]=(0,d.useState)(!1),{formulas:t,setFormulas:a}=(0,c.Z)(),{layout:l,setLayout:p}=(0,c.Z)(),v=(0,i.useRouter)(),{registerFormulaClick:x,registerSelectedFormulaId:h}=(0,c.Z)(),y=()=>{let e=(0,g.Vj)();p((0,b.Uy)(l,r=>{var t,o,i;null===(t=r.md)||void 0===t||t.push({i:e,x:0,y:0,w:1,h:2}),null===(o=r.xs)||void 0===o||o.push({i:e,x:0,y:0,w:1,h:2}),null===(i=r.sm)||void 0===i||i.push({i:e,x:0,y:0,w:1,h:2})})),a((0,b.Uy)(t,r=>{let t={id:e,title:"New Formula",text:"New Formula",color:"gray",backdrop:f[Math.floor(Math.random()*f.length)]};r[e]=t,console.log("fml/ create new",t)})),console.log("addFormula",{layout:l,formulas:t})},j=[];return Object.values(t).forEach(e=>{let r=(0,o.jsx)("div",{className:"grid-item__title ",children:(0,o.jsx)("div",{className:"w-full h-full",children:(0,o.jsx)(s,{formula:e,onClick:()=>{x(e.id)},onClickEdit:()=>{h(e.id),v.push("/lab")}},e.id)})},e.id);j.push(r)}),j.push((0,o.jsx)("div",{className:"flex flex-col grid-item__title  bg-blue-300 cursor-pointer rounded-xl border bg-gray-300 flex justify-center items-center hover:scale-105 transition-transform duration-200 hover:border-blue-500",children:(0,o.jsx)("div",{className:"w-full h-full flex items-center justify-center",onMouseDown:()=>{y()},children:(0,o.jsx)(u.wEH,{size:32})})},"add")),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.default,{children:(0,o.jsx)(m,{compactType:null,className:"layout relative",layouts:l,isDraggable:!0,isResizable:!0,useCSSTransforms:!1,draggableHandle:".grid-item__title",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:(t,o)=>{if(!e){r(!0);return}p(o)},children:j})})})}},3842:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var o=t(5893),i=t(7136),a=t(1121),n=t(7094),l=t(4554),s=t(2290);t(7294);var d=t(1163),u=()=>{let{connectButtonDisplay:e}=(0,s.Z)(),{selectedPage:r,setSelectedPage:t}=(0,s.Z)(),l=(0,d.useRouter)();return(0,o.jsx)("div",{className:"flex justify-center w-full fixed bottom-0 bg-white z-50",children:(0,o.jsx)(i.eBu,{space:4,children:(0,o.jsxs)("div",{className:"flex justify-between  flex-row",children:[(0,o.jsx)(i.zxk,{hierarchy:"Formula"===r?"primary":"secondary",kind:"transparent",label:"Formula",icon:()=>(0,o.jsx)(a.h1P,{}),onPress:()=>{t("Formula"),l.push("/")}}),(0,o.jsx)(i.zxk,{hierarchy:"Setting"===r?"primary":"secondary",kind:"transparent",label:"Settings",icon:()=>(0,o.jsx)(n.Fnt,{}),onPress:()=>{t("Setting"),l.push("/setting")}})]})})})},b=t(80),g=()=>{let{connectButtonStyle:e,connectButtonText:r,selectedPage:t}=(0,s.Z)(),a=(0,d.useRouter)();return(0,o.jsxs)("div",{className:"flex justify-between items-center m-4",children:[(0,o.jsx)("div",{className:"cursor-pointer",onClick:()=>{"/lab"==a.pathname&&a.push("/")},children:(0,o.jsx)(i.s01,{size:"small",children:"/lab"==a.pathname?"◀ Back":t})}),(0,o.jsx)(i.zxk,{label:r,hierarchy:"primary",icon:()=>(0,o.jsx)(b.Vdu,{}),onPress:()=>{(0,l.s0)()},kind:e})]})},c=e=>{let{children:r}=e;return(0,o.jsxs)(i.Kqy,{space:4,children:[(0,o.jsx)(g,{}),(0,o.jsx)("div",{className:"mb-[56px]",children:r}),(0,o.jsx)(u,{})]})}}},function(e){e.O(0,[838,817,509,365,970,317,968,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);