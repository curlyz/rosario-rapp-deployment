(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(81031)}])},81031:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var a=r(85893),o=r(77797),l=r(65058),s=r(16702),n=r(67294),i=r(2777),c=r(71054),u=r(37094),d=r(30080),m=r(35282),g=r(52091),h=r(82729),f=r(4960),b=r(88459),x=r(79825),p=r(63305),v=r(84426),y=r(59463);function w(){const e=(0,h._)(["translateX(","px) translateY(","px) translateX(-50%) translateY(-50%)"]);return w=function(){return e},e}function j(e){let{borderRadius:t="1.75rem",children:r,as:o="button",containerClassName:l,borderClassName:s,duration:n,className:i,isRunning:c,backgroundColor:u,...d}=e;return(0,a.jsxs)(o,{className:(0,y.cn)("bg-transparent relative text-xl h-full w-full p-[3px] overflow-hidden ",l),style:{borderRadius:t,backgroundColor:u},...d,children:[(0,a.jsx)("div",{className:"absolute inset-0",style:{borderRadius:"calc(".concat(t," * 0.96)")},children:(0,a.jsx)(F,{duration:n,rx:"30%",ry:"30%",children:(0,a.jsx)("div",{className:(0,y.cn)("h-20 w-20 opacity-[0.8]",c?"bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]":"",s)})})}),(0,a.jsx)("div",{className:(0,y.cn)("relative border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",i),style:{borderRadius:"calc(".concat(t," * 0.96)")},children:r})]})}const F=e=>{let{children:t,duration:r=2e3,rx:o,ry:l,...s}=e;const i=(0,n.useRef)(),c=(0,f.c)(0);(0,b.p)((e=>{var t;const a=null===(t=i.current)||void 0===t?void 0:t.getTotalLength();if(a){const t=a/r;c.set(e*t%a)}}));const u=(0,x.H)(c,(e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.getPointAtLength(e).x})),d=(0,x.H)(c,(e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.getPointAtLength(e).y})),m=(0,p.Y)(w(),u,d);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...s,children:(0,a.jsx)("rect",{fill:"none",width:"100%",height:"100%",rx:o,ry:l,ref:i})}),(0,a.jsx)(v.E.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:m},children:t})]})};function N(e){let{formulaId:t,onClickEdit:r,onCancel:h,onClick:f}=e;const{draggable:b,progressReport:x,formulaFeedbacks:p,selectedFormulaId:w}=(0,l.Z)(),[F,N]=(0,n.useState)(0),k=(0,n.useRef)(null),{formulas:T,setFormulas:H,formulaUpdatedTimestamp:C}=(0,l.Z)();(0,n.useEffect)((()=>{k.current&&N(k.current.clientHeight)}),[]);const[_,E]=(0,n.useState)(!1),P=(0,n.useRef)(),[R,S]=(0,n.useState)(0);(0,n.useEffect)((()=>{(new Date).getTime()-(C[t]||0)<2e3&&(_||S((new Date).getTime()),E(!0),clearTimeout(P.current),P.current=setTimeout((()=>{E(!1)}),2e3))}),[C,t,_]);const M=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"absolute right-0 top-0 flex flex-col items-center justify-between",children:b?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"hover:opacity-50",onMouseDown:e=>{r(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{r(),e.preventDefault(),e.stopPropagation()},children:(0,a.jsx)(m.DVr,{size:32,className:"m-1 text-white "})}),(0,a.jsx)("button",{children:(0,a.jsx)(i.uWH,{size:20,className:"drag-handle m-1 text-white"})})]}):(0,a.jsx)(a.Fragment,{children:_?(0,a.jsx)("div",{className:"m-1 opacity-20",children:(0,a.jsx)(g.Bej,{size:32,className:"m-1 text-white"})}):(0,a.jsxs)("div",{children:[T[t].formulaType===o.HF.Espresso&&(0,a.jsx)(c.q_H,{size:32,className:"m-1 text-white"}),T[t].formulaType===o.HF.Teapresso&&(0,a.jsx)(u.QFv,{size:32,className:"m-1 text-white"}),T[t].formulaType===o.HF.PourOver&&(0,a.jsx)(d.e0F,{size:32,className:"m-1 text-white"})]})})}),(0,a.jsx)("h1",{className:"select-none truncate  text-center text-wrap text-xl text-white",children:_?String(Math.round(((new Date).getTime()-R)/1e3*10)/10)+" s":T[t].title})]});s.wWH,Array.from({length:10},((e,t)=>({name:"Point ".concat(t+1),flowrate:Math.floor(100*Math.random())})));return(0,a.jsx)(v.E.div,{className:"w-full h-full",animate:{opacity:1,scale:1},initial:{opacity:0,scale:0},whileHover:{scale:.99},transition:{delay:2*Math.random(),type:"spring",stiffness:100},children:(0,a.jsx)(j,{borderRadius:"16px",isRunning:_,ref:k,onMouseDown:e=>{console.log("profile/ clicked"),_?h():f()},backgroundColor:T[t].color,className:(0,y.cn)("border flex h-full w-full transform flex-col items-center justify-center shadow-large cursor-pointer select-none transition-all duration-1000 ease-in-out hover:border-blue-500",_?" border-black":"border-white","animate-none"),children:M})})}var k=r(93513),T=r(37039),H=r(11163),C=r(69968),_=r(26281),E=r(11570),P=r(9008),R=r.n(P);const S=(0,C.WidthProvider)(C.Responsive),M=["bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tr from-yellow-900 via-red-600 to-yellow-500"],O=["bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500"],D=["bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-l from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500"];var z=function(){const[e,t]=(0,n.useState)(!1),{formulas:r,setFormulas:i,addFormulaOpen:c,setAddFormulaOpen:u}=(0,l.Z)(),{layout:d,setLayout:m}=(0,l.Z)(),g=(0,H.useRouter)(),{showToast:h}=(0,s.pmc)(),{registerFormulaClick:f,registerSelectedFormulaId:b}=(0,l.Z)(),x=[];Object.values(r).forEach((e=>{const t=(0,a.jsx)("div",{className:"grid-item__title ",children:(0,a.jsx)("div",{className:"h-full w-full",children:(0,a.jsx)(N,{formulaId:e.id,onClick:()=>{f(e.id)},onCancel:()=>{(0,o.$m)(e.id)},onClickEdit:()=>{b(e.id),g.push("/lab")}})})},e.id);x.push(t)}));const{draggable:p}=(0,l.Z)(),[v,y]=(0,n.useState)(""),[w,j]=(0,n.useState)(o.HF.Espresso),{t:F}=(0,T.$G)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R(),{children:(0,a.jsx)("title",{children:"\u2615 ROSARIO"})}),(0,a.jsxs)(E.default,{children:[(0,a.jsx)("div",{className:"dark:bg-gray h-[80vh]",children:(0,a.jsx)(S,{autoSize:!0,verticalCompact:!1,compactType:"horizontal",className:"layout relative",layouts:d,isDraggable:p,isResizable:p,useCSSTransforms:!1,draggableHandle:".drag-handle",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:(r,a)=>{e?m(a):t(!0)},onDragStart:()=>{console.log("OnDragStart")},children:x})}),c&&(0,a.jsx)(s.u_l,{title:F("Add Formula"),onClose:()=>u(!1),primaryAction:{label:"OK",onPress:async()=>{u(!1),await async function(){const e=(0,_.Vj)();var t=[],a="",l="";if(null!=v.match(/^[0-9]+$/)){const e=await fetch("https://api.anatalab.com/gateway/rosario/get_token/".concat(v)),r=await e.json();console.log("Formula is",r.formulas),y(r.formulas.title),j(r.formulas.formulaType),t=r.formulas.steps,a=r.formulas.title,l=r.formulas.backdrop}else a=v;m((0,k.Uy)(d,(t=>{var r,a,o;null===(r=t.md)||void 0===r||r.push({i:e,x:0,y:0,w:1,h:1}),null===(a=t.xs)||void 0===a||a.push({i:e,x:0,y:0,w:1,h:1}),null===(o=t.sm)||void 0===o||o.push({i:e,x:0,y:0,w:1,h:1})}))),i((0,k.Uy)(r,(r=>{let s="bg-white";w==o.HF.Espresso?s=M[Math.floor(Math.random()*M.length)]:w==o.HF.PourOver?s=D[Math.floor(Math.random()*D.length)]:w==o.HF.Teapresso&&(s=O[Math.floor(Math.random()*O.length)]);const n=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],i={id:e,title:a,text:"New Formula",color:n[Math.floor(Math.random()*n.length)],backdrop:l||s,formulaType:w,steps:t,buildupDuration:1,lossyWeight:0,maximumDuration:0,isShared:!1,category:""};r[e]=i,console.log("fml/ create new",i)}))),console.log("addFormula",{layout:d,formulas:r})}()}},secondaryAction:{label:F("Cancel"),onPress:()=>u(!1)},children:(0,a.jsxs)(s.Kqy,{space:4,children:[(0,a.jsx)(s.nvn,{label:F("Formula Name or Share Token"),value:v,onChange:e=>{y(e)}}),(0,a.jsxs)(s.r5R,{space:4,columns:3,children:[(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:w==o.HF.Espresso?"solid":"outline",label:F("Espresso"),onPress:()=>{j(o.HF.Espresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:w==o.HF.Teapresso?"solid":"outline",label:F("Teapresso"),onPress:()=>{j(o.HF.Teapresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:w==o.HF.PourOver?"solid":"outline",label:F("Pour Over"),onPress:()=>{j(o.HF.PourOver)}})]})]})})]})]})}}},function(e){e.O(0,[838,396,660,817,296,509,365,127,970,137,735,570,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=index-c032744a2b5b8da3.js.map