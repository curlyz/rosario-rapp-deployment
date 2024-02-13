(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(64421)}])},64421:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return k}});var t,a=r(85893);r(34542),r(77814);!function(e){e.Espresso="Espresso",e.Teapresso="Teapresso",e.PourOver="PourOver"}(t||(t={}));var l=r(63522),s=r(80907),n=r(67294),i=r(2777),d=r(71054),u=r(37094),c=r(30080),g=r(35282);function m(e){let{formulaId:o,onClickEdit:r,onClick:m}=e;var h,b,f;const{draggable:v,progressReport:x}=(0,l.Z)(),[p,y]=(0,n.useState)(0),w=(0,n.useRef)(null),{formulas:j,setFormulas:N}=(0,l.Z)();(0,n.useEffect)((()=>{w.current&&y(w.current.clientHeight)}));const k=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"absolute right-0 top-0 flex flex-col  items-center justify-between",children:v?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"hover:opacity-50",onMouseDown:e=>{r(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{r(),e.preventDefault(),e.stopPropagation()},children:(0,a.jsx)(g.DVr,{size:32,className:"m-1 text-white "})}),(0,a.jsx)("button",{children:(0,a.jsx)(i.uWH,{size:20,className:"drag-handle m-1 text-white"})})]}):(0,a.jsxs)("div",{className:"m-1 opacity-20",children:[j[o].formulaType===t.Espresso&&(0,a.jsx)(d.q_H,{size:32,className:"m-1 text-white"}),j[o].formulaType===t.Teapresso&&(0,a.jsx)(u.QFv,{size:32,className:"m-1 text-white"}),j[o].formulaType===t.PourOver&&(0,a.jsx)(c.e0F,{size:32,className:"m-1 text-white"})]})}),(0,a.jsx)("h1",{className:"select-none truncate text-clip text-balance text-center text-xl text-white",children:j[o].title})]}),P=(0,a.jsxs)("div",{className:"first-letter absolute bottom-0  left-0 h-full w-full",children:[(0,a.jsx)(s.wWH,{height:p,dataKey:"name",categories:["flowrate"],hideLegend:!0,hideXAxis:!0,hideYAxis:!0,data:[...Array.from({length:10},((e,o)=>({name:"Point ".concat(o+1),flowrate:Math.floor(100*Math.random())})))]})," "]});return(0,a.jsx)("div",{ref:w,className:"rounded-xl border ".concat(!0===(null===(h=x[j[o].id])||void 0===h?void 0:h.isRunning)?"bg-white":j[o].backdrop,"  flex h-full w-full transform  flex-col items-center justify-center border  shadow-large  transition duration-200 hover:border-blue-500 ").concat(!0===(null===(b=x[j[o].id])||void 0===b?void 0:b.isRunning)?"border-black":"border-white"," cursor-pointer select-none transition-all duration-1000 ease-in-out"),onMouseDown:e=>{m(),console.log("profile/ clicked")},children:!0===(null===(f=x[j[o].id])||void 0===f?void 0:f.isRunning)?P:k})}var h=r(93513),b=r(37039),f=r(11163),v=r(69968),x=r(26281),p=r(3189);const y=(0,v.WidthProvider)(v.Responsive),w=["bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tr from-yellow-900 via-red-600 to-yellow-500"],j=["bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500"],N=["bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-l from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500"];var k=function(){const[e,o]=(0,n.useState)(!1),{formulas:r,setFormulas:i,addFormulaOpen:d,setAddFormulaOpen:u}=(0,l.Z)(),{layout:c,setLayout:g}=(0,l.Z)(),v=(0,f.useRouter)(),{showToast:k}=(0,s.pmc)(),{registerFormulaClick:P,registerSelectedFormulaId:E}=(0,l.Z)(),T=[];Object.values(r).forEach((e=>{const o=(0,a.jsx)("div",{className:"grid-item__title ",children:(0,a.jsx)("div",{className:"h-full w-full",children:(0,a.jsx)(m,{formulaId:e.id,onClick:()=>{P(e.id)},onClickEdit:()=>{E(e.id),v.push("/lab")}})})},e.id);T.push(o)}));const{draggable:F}=(0,l.Z)(),[_,O]=(0,n.useState)("New Formula"),[C,M]=(0,n.useState)(t.Espresso),{t:S}=(0,b.$G)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(p.default,{children:[(0,a.jsx)("div",{className:"dark:bg-gray h-[80vh]",children:(0,a.jsx)(y,{compactType:null,className:"layout relative",layouts:c,isDraggable:F,isResizable:F,useCSSTransforms:!1,draggableHandle:".drag-handle",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:(r,t)=>{e?g(t):o(!0)},onDragStart:()=>{console.log("OnDragStart")},children:T})}),d&&(0,a.jsx)(s.u_l,{title:S("Add Formula"),onClose:()=>u(!1),primaryAction:{label:"OK",onPress:()=>{u(!1),function(){const e=(0,x.Vj)();g((0,h.Uy)(c,(o=>{var r,t,a;null===(r=o.md)||void 0===r||r.push({i:e,x:0,y:0,w:1,h:1}),null===(t=o.xs)||void 0===t||t.push({i:e,x:0,y:0,w:1,h:1}),null===(a=o.sm)||void 0===a||a.push({i:e,x:0,y:0,w:1,h:1})}))),i((0,h.Uy)(r,(o=>{let r="bg-white";C==t.Espresso?r=w[Math.floor(Math.random()*w.length)]:C==t.PourOver?r=N[Math.floor(Math.random()*N.length)]:C==t.Teapresso&&(r=j[Math.floor(Math.random()*j.length)]);const a={id:e,title:_,text:"New Formula",color:"gray",backdrop:r,formulaType:C,steps:[]};o[e]=a,console.log("fml/ create new",a)}))),console.log("addFormula",{layout:c,formulas:r})}()}},secondaryAction:{label:S("Cancel"),onPress:()=>u(!1)},children:(0,a.jsxs)(s.Kqy,{space:4,children:[(0,a.jsx)(s.nvn,{label:S("Formula Name"),value:_,onChange:e=>{O(e)}}),(0,a.jsxs)(s.r5R,{space:4,columns:3,children:[(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:C==t.Espresso?"solid":"outline",label:"Espresso",onPress:()=>{M(t.Espresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:C==t.Teapresso?"solid":"outline",label:"Teapresso",onPress:()=>{M(t.Teapresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:C==t.PourOver?"solid":"outline",label:"Pour over",onPress:()=>{M(t.PourOver)}})]})]})})]})})}}},function(e){e.O(0,[838,396,660,817,509,127,970,415,281,611,189,774,888,179],(function(){return o=48312,e(e.s=o);var o}));var o=e.O();_N_E=o}]);
//# sourceMappingURL=index-dd58132e2b2f855e.js.map