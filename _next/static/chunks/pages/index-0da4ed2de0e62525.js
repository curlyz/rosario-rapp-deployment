(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(240)}])},2290:function(e,r,t){"use strict";var o=t(7294),a=t(1020);r.Z=()=>(0,o.useContext)(a.Tp)},240:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var o=t(5893),a=t(1163),i=t(9968),n=t(3842),l=t(5282),s=t(2777);function d(e){let{formula:r,onClickEdit:t,onClick:a,...i}=e;return(0,o.jsxs)("div",{className:"border rounded-xl ".concat(r.backdrop,"  w-full h-full flex flex-col  hover:scale-105 transition-transform duration-200 hover:border-blue-500  items-center  justify-center"),onMouseDown:e=>{a(),a(),console.log("profile/ clicked")},onTouchStart:e=>{a(),console.log("profile/ touched")},children:[(0,o.jsxs)("div",{className:"absolute top-0 right-0 flex flex-col  items-center justify-between",children:[(0,o.jsx)("button",{className:"hover:opacity-50",onMouseDown:e=>{t(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{t(),e.preventDefault(),e.stopPropagation()},children:(0,o.jsx)(l.DVr,{size:32,className:"text-white m-1 "})}),(0,o.jsx)("button",{children:(0,o.jsx)(s.uWH,{size:20,className:"text-white m-1 drag-handle"})})]}),(0,o.jsx)("h1",{className:"truncate text-clip text-balance text-xl text-center select-none",children:r.title})]})}var u=t(7294),c=t(2091),g=t(3513),b=t(6281),m=t(2290),f=t(7136);let p=(0,i.WidthProvider)(i.Responsive),h=["bg-gradient-to-br from-teal-500 via-aqua-400 to-blue-500","bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600","bg-gradient-to-br from-blue-300 via-gray-400 to-gray-200","bg-gradient-to-br from-green-500 via-lime-400 to-green-300","bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500","bg-gradient-to-br from-pink-400 via-yellow-400 to-orange-400","bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-500","bg-gradient-to-br from-pink-300 via-pink-200 to-purple-300","bg-gradient-to-br from-green-400 via-teal-400 to-teal-500","bg-gradient-to-br from-indigo-800 via-blue-800 to-blue-900","bg-gradient-to-br from-red-500 via-rose-400 to-pink-500","bg-gradient-to-br from-yellow-300 via-amber-300 to-orange-300","bg-gradient-to-br from-purple-500 via-violet-400 to-indigo-500","bg-gradient-to-br from-green-600 via-lime-500 to-yellow-500","bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-400","bg-gradient-to-br from-rose-500 via-pink-400 to-purple-500","bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500","bg-gradient-to-br from-orange-300 via-yellow-300 to-lime-300","bg-gradient-to-br from-teal-600 via-green-500 to-lime-600","bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400","bg-gradient-to-br from-pink-500 via-rose-400 to-purple-500","bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500","bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500","bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-600","bg-gradient-to-br from-red-400 via-rose-400 to-pink-400","bg-gradient-to-br from-teal-500 via-cyan-400 to-blue-500","bg-gradient-to-br from-amber-500 via-yellow-400 to-lime-500","bg-gradient-to-br from-indigo-400 via-blue-300 to-cyan-400","bg-gradient-to-br from-purple-500 via-pink-400 to-red-500","bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-400","bg-gradient-to-br from-teal-400 via-green-300 to-lime-400","bg-gradient-to-br from-pink-400 via-rose-300 to-purple-400"];var x=()=>{let[e,r]=(0,u.useState)(!1),{formulas:t,setFormulas:i}=(0,m.Z)(),{layout:l,setLayout:s}=(0,m.Z)(),x=(0,a.useRouter)(),{showToast:v}=(0,f.pmc)(),{registerFormulaClick:y,registerSelectedFormulaId:j}=(0,m.Z)(),w=()=>{let e=(0,b.Vj)();s((0,g.Uy)(l,r=>{var t,o,a;null===(t=r.md)||void 0===t||t.push({i:e,x:0,y:0,w:1,h:2}),null===(o=r.xs)||void 0===o||o.push({i:e,x:0,y:0,w:1,h:2}),null===(a=r.sm)||void 0===a||a.push({i:e,x:0,y:0,w:1,h:2})})),i((0,g.Uy)(t,r=>{let t={id:e,title:"New Formula",text:"New Formula",color:"gray",backdrop:h[Math.floor(Math.random()*h.length)]};r[e]=t,console.log("fml/ create new",t)})),console.log("addFormula",{layout:l,formulas:t})},k=[];return Object.values(t).forEach(e=>{let r=(0,o.jsx)("div",{className:"grid-item__title ",children:(0,o.jsx)("div",{className:"w-full h-full",children:(0,o.jsx)(d,{formula:e,onClick:()=>{y(e.id)},onClickEdit:()=>{j(e.id),x.push("/lab")}},e.id)})},e.id);k.push(r)}),k.push((0,o.jsx)("div",{className:"flex flex-col grid-item__title  bg-blue-300 cursor-pointer rounded-xl border  justify-center items-center hover:scale-105 transition-transform duration-200 hover:border-blue-500",children:(0,o.jsx)("div",{className:"w-full h-full flex items-center justify-center",onMouseDown:()=>{w()},onTouchStart:()=>{w()},children:(0,o.jsx)(c.wEH,{size:32})})},"add")),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.default,{children:(0,o.jsx)(p,{compactType:null,className:"layout relative",layouts:l,isDraggable:!0,isResizable:!0,useCSSTransforms:!1,draggableHandle:".drag-handle",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:(t,o)=>{if(!e){r(!0);return}s(o)},onDragStart:()=>{console.log("OnDragStart")},children:k})})})}},3842:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var o=t(5893),a=t(7136),i=t(1121),n=t(7094),l=t(4554),s=t(2290);t(7294);var d=t(1163),u=()=>{let{connectButtonDisplay:e}=(0,s.Z)(),{selectedPage:r,setSelectedPage:t}=(0,s.Z)(),l=(0,d.useRouter)();return(0,o.jsx)("div",{className:"flex justify-center w-full fixed bottom-0 bg-white z-50",children:(0,o.jsx)(a.eBu,{space:4,children:(0,o.jsxs)("div",{className:"flex justify-between  flex-row",children:[(0,o.jsx)(a.zxk,{hierarchy:"Formula"===r?"primary":"secondary",kind:"transparent",label:"Formula",icon:()=>(0,o.jsx)(i.h1P,{}),onPress:()=>{t("Formula"),l.push("/")}}),(0,o.jsx)(a.zxk,{hierarchy:"Setting"===r?"primary":"secondary",kind:"transparent",label:"Settings",icon:()=>(0,o.jsx)(n.Fnt,{}),onPress:()=>{t("Setting"),l.push("/setting")}})]})})})},c=t(80),g=()=>{let{connectButtonStyle:e,connectButtonText:r,selectedPage:t}=(0,s.Z)(),i=(0,d.useRouter)();return(0,o.jsxs)("div",{className:"flex justify-between items-center m-4",children:[(0,o.jsx)("div",{className:"cursor-pointer",onClick:()=>{"/lab"==i.pathname&&i.push("/")},children:(0,o.jsx)(a.s01,{size:"small",children:"/lab"==i.pathname?"◀ Back":t})}),(0,o.jsx)(a.zxk,{label:r,hierarchy:"primary",icon:()=>(0,o.jsx)(c.Vdu,{}),onPress:()=>{(0,l.s0)()},kind:e})]})},b=e=>{let{children:r}=e;return(0,o.jsxs)(a.Kqy,{space:4,children:[(0,o.jsx)(g,{}),(0,o.jsx)("div",{className:"mb-[56px]",children:r}),(0,o.jsx)(u,{})]})}}},function(e){e.O(0,[838,817,509,365,970,317,611,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);