(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(59890)}])},59890:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var a=r(85893),o=r(77797),l=r(65058),s=r(80907),n=r(67294),i=r(2777),c=r(71054),u=r(37094),d=r(30080),m=r(35282),g=r(52091),h=r(82729),f=r(4960),b=r(88459),x=r(79825),p=r(63305),v=r(84426),y=r(90512),w=r(98388);function j(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,w.m6)((0,y.W)(t))}function F(){const e=(0,h._)(["translateX(","px) translateY(","px) translateX(-50%) translateY(-50%)"]);return F=function(){return e},e}function N(e){let{borderRadius:t="1.75rem",children:r,as:o="button",containerClassName:l,borderClassName:s,duration:n,className:i,isRunning:c,...u}=e;return(0,a.jsxs)(o,{className:j("bg-transparent relative text-xl h-full w-full p-[3px] overflow-hidden ",l),style:{borderRadius:t},...u,children:[(0,a.jsx)("div",{className:"absolute inset-0",style:{borderRadius:"calc(".concat(t," * 0.96)")},children:(0,a.jsx)(k,{duration:n,rx:"30%",ry:"30%",children:(0,a.jsx)("div",{className:j("h-20 w-20 opacity-[0.8]",c?"bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]":"",s)})})}),(0,a.jsx)("div",{className:j("relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",i),style:{borderRadius:"calc(".concat(t," * 0.96)")},children:r})]})}const k=e=>{let{children:t,duration:r=2e3,rx:o,ry:l,...s}=e;const i=(0,n.useRef)(),c=(0,f.c)(0);(0,b.p)((e=>{var t;const a=null===(t=i.current)||void 0===t?void 0:t.getTotalLength();if(a){const t=a/r;c.set(e*t%a)}}));const u=(0,x.H)(c,(e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.getPointAtLength(e).x})),d=(0,x.H)(c,(e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.getPointAtLength(e).y})),m=(0,p.Y)(F(),u,d);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...s,children:(0,a.jsx)("rect",{fill:"none",width:"100%",height:"100%",rx:o,ry:l,ref:i})}),(0,a.jsx)(v.E.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:m},children:t})]})};function T(e){let{formulaId:t,onClickEdit:r,onCancel:h,onClick:f}=e;const{draggable:b,progressReport:x,formulaFeedbacks:p,selectedFormulaId:v}=(0,l.Z)(),[y,w]=(0,n.useState)(0),F=(0,n.useRef)(null),{formulas:k,setFormulas:T,formulaUpdatedTimestamp:H}=(0,l.Z)();(0,n.useEffect)((()=>{F.current&&w(F.current.clientHeight)}),[]);const[_,P]=(0,n.useState)(!1),E=(0,n.useRef)(),[C,R]=(0,n.useState)(0);(0,n.useEffect)((()=>{(new Date).getTime()-(H[t]||0)<2e3&&(_||R((new Date).getTime()),P(!0),clearTimeout(E.current),E.current=setTimeout((()=>{P(!1)}),2e3))}),[H,t,_]);const S=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"absolute right-0 top-0 flex flex-col items-center justify-between",children:b?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"hover:opacity-50",onMouseDown:e=>{r(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{r(),e.preventDefault(),e.stopPropagation()},children:(0,a.jsx)(m.DVr,{size:32,className:"m-1 text-white "})}),(0,a.jsx)("button",{children:(0,a.jsx)(i.uWH,{size:20,className:"drag-handle m-1 text-white"})})]}):(0,a.jsx)(a.Fragment,{children:_?(0,a.jsx)("div",{className:"m-1 opacity-20",children:(0,a.jsx)(g.Bej,{size:32,className:"m-1 text-white"})}):(0,a.jsxs)("div",{children:[k[t].formulaType===o.HF.Espresso&&(0,a.jsx)(c.q_H,{size:32,className:"m-1 text-white"}),k[t].formulaType===o.HF.Teapresso&&(0,a.jsx)(u.QFv,{size:32,className:"m-1 text-white"}),k[t].formulaType===o.HF.PourOver&&(0,a.jsx)(d.e0F,{size:32,className:"m-1 text-white"})]})})}),(0,a.jsx)("h1",{className:"select-none truncate text-clip text-balance text-center text-xl text-white",children:_?String(Math.round(((new Date).getTime()-C)/1e3*10)/10)+" s":k[t].title})]});s.wWH,Array.from({length:10},((e,t)=>({name:"Point ".concat(t+1),flowrate:Math.floor(100*Math.random())})));return(0,a.jsx)(N,{borderRadius:"16px",isRunning:_,ref:F,onMouseDown:e=>{console.log("profile/ clicked"),_?h():f()},className:j("border flex h-full w-full transform flex-col items-center justify-center shadow-large cursor-pointer select-none transition-all duration-1000 ease-in-out hover:border-blue-500",k[t].backdrop,_?" border-black":"border-white","animate-none"),children:S})}var H=r(93513),_=r(37039),P=r(11163),E=r(69968),C=r(26281),R=r(95485);const S=(0,E.WidthProvider)(E.Responsive),O=["bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tr from-yellow-900 via-red-600 to-yellow-500"],D=["bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500"],M=["bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-l from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500"];var z=function(){const[e,t]=(0,n.useState)(!1),{formulas:r,setFormulas:i,addFormulaOpen:c,setAddFormulaOpen:u}=(0,l.Z)(),{layout:d,setLayout:m}=(0,l.Z)(),g=(0,P.useRouter)(),{showToast:h}=(0,s.pmc)(),{registerFormulaClick:f,registerSelectedFormulaId:b}=(0,l.Z)(),x=[];Object.values(r).forEach((e=>{const t=(0,a.jsx)("div",{className:"grid-item__title ",children:(0,a.jsx)("div",{className:"h-full w-full",children:(0,a.jsx)(T,{formulaId:e.id,onClick:()=>{f(e.id)},onCancel:()=>{(0,o.$m)(e.id)},onClickEdit:()=>{b(e.id),g.push("/lab")}})})},e.id);x.push(t)}));const{draggable:p}=(0,l.Z)(),[v,y]=(0,n.useState)(""),[w,j]=(0,n.useState)(o.HF.Espresso),{t:F}=(0,_.$G)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(R.default,{children:[(0,a.jsx)("div",{className:"dark:bg-gray h-[80vh]",children:(0,a.jsx)(S,{compactType:null,className:"layout relative",layouts:d,isDraggable:p,isResizable:p,useCSSTransforms:!1,draggableHandle:".drag-handle",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:(r,a)=>{e?m(a):t(!0)},onDragStart:()=>{console.log("OnDragStart")},children:x})}),c&&(0,a.jsx)(s.u_l,{title:F("Add Formula"),onClose:()=>u(!1),primaryAction:{label:"OK",onPress:async()=>{u(!1),await async function(){const e=(0,C.Vj)();var t=[],a="";if(null!=v.match(/^[0-9]+$/)){const e=await fetch("https://api.anatalab.com/gateway/rosario/get_token/".concat(v)),r=await e.json();console.log("Formula is",r.formulas),y(r.formulas.title),j(r.formulas.formulaType),t=r.formulas.steps,a=r.formulas.title}else a=v;m((0,H.Uy)(d,(t=>{var r,a,o;null===(r=t.md)||void 0===r||r.push({i:e,x:0,y:0,w:1,h:1}),null===(a=t.xs)||void 0===a||a.push({i:e,x:0,y:0,w:1,h:1}),null===(o=t.sm)||void 0===o||o.push({i:e,x:0,y:0,w:1,h:1})}))),i((0,H.Uy)(r,(r=>{let l="bg-white";w==o.HF.Espresso?l=O[Math.floor(Math.random()*O.length)]:w==o.HF.PourOver?l=M[Math.floor(Math.random()*M.length)]:w==o.HF.Teapresso&&(l=D[Math.floor(Math.random()*D.length)]);const s={id:e,title:a,text:"New Formula",color:"gray",backdrop:l,formulaType:w,steps:t};r[e]=s,console.log("fml/ create new",s)}))),console.log("addFormula",{layout:d,formulas:r})}()}},secondaryAction:{label:F("Cancel"),onPress:()=>u(!1)},children:(0,a.jsxs)(s.Kqy,{space:4,children:[(0,a.jsx)(s.nvn,{label:F("Formula Name or Share Token"),value:v,onChange:e=>{y(e)}}),(0,a.jsxs)(s.r5R,{space:4,columns:3,children:[(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:w==o.HF.Espresso?"solid":"outline",label:F("Espresso"),onPress:()=>{j(o.HF.Espresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:w==o.HF.Teapresso?"solid":"outline",label:F("Teapresso"),onPress:()=>{j(o.HF.Teapresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:w==o.HF.PourOver?"solid":"outline",label:F("Pour Over"),onPress:()=>{j(o.HF.PourOver)}})]})]})})]})})}}},function(e){e.O(0,[838,396,660,817,509,127,365,970,415,426,281,100,485,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=index-1e3bfba741b92228.js.map