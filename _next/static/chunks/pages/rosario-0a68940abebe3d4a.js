(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{65231:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rosario",function(){return r(36520)}])},36520:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var a=r(85893),o=r(66378),l=r(17303),s=r(16702),n=r(67294),i=r(2777),c=r(71054),d=r(37094),u=r(30080),m=r(35282),f=r(52091),g=r(82729),h=r(4960),x=r(88459),b=r(79825),p=r(63305),v=r(84426),y=r(56475);function w(){const e=(0,g._)(["translateX(","px) translateY(","px) translateX(-50%) translateY(-50%)"]);return w=function(){return e},e}function j(e){let{borderRadius:t="1.75rem",children:r,as:o="button",containerClassName:l,borderClassName:s,duration:n,className:i,isRunning:c,backgroundColor:d,...u}=e;return(0,a.jsxs)(o,{className:(0,y.cn)("bg-transparent relative text-xl h-full w-full p-[3px] overflow-hidden ",l),style:{borderRadius:t,backgroundColor:d},...u,children:[(0,a.jsx)("div",{className:"absolute inset-0",style:{borderRadius:"calc(".concat(t," * 0.96)")},children:(0,a.jsx)(N,{duration:n,rx:"30%",ry:"30%",children:(0,a.jsx)("div",{className:(0,y.cn)("h-20 w-20 opacity-[0.8]",c?"bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]":"",s)})})}),(0,a.jsx)("div",{className:(0,y.cn)("relative border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",i),style:{borderRadius:"calc(".concat(t," * 0.96)")},children:r})]})}const N=e=>{let{children:t,duration:r=2e3,rx:o,ry:l,...s}=e;const i=(0,n.useRef)(),c=(0,h.c)(0);(0,x.p)((e=>{var t;const a=null===(t=i.current)||void 0===t?void 0:t.getTotalLength();if(a){const t=a/r;c.set(e*t%a)}}));const d=(0,b.H)(c,(e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.getPointAtLength(e).x})),u=(0,b.H)(c,(e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.getPointAtLength(e).y})),m=(0,p.Y)(w(),d,u);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...s,children:(0,a.jsx)("rect",{fill:"none",width:"100%",height:"100%",rx:o,ry:l,ref:i})}),(0,a.jsx)(v.E.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:m},children:t})]})};function k(e){let{formulaId:t,onClickEdit:r,onCancel:g,onClick:h,onDelete:x}=e;var b,p,w,N,k;const{draggable:_,progressReport:F,formulaFeedbacks:T,selectedFormulaId:C}=(0,l.Z)(),[H,P]=(0,n.useState)(0),S=(0,n.useRef)(null),{formulas:E,setFormulas:M,formulaUpdatedTimestamp:D}=(0,l.Z)();(0,n.useEffect)((()=>{S.current&&P(S.current.clientHeight)}),[]);const[R,O]=(0,n.useState)(!1),z=(0,n.useRef)(),[A,Z]=(0,n.useState)(0);(0,n.useEffect)((()=>{(new Date).getTime()-(D[t]||0)<2e3&&(R||Z((new Date).getTime()),O(!0),clearTimeout(z.current),z.current=setTimeout((()=>{O(!1)}),2e3))}),[D,t,R]);const I=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:(0,y.cn)("absolute left-0 top-0 flex flex-col items-center  h-full p-1 "),children:_?(0,a.jsxs)("div",{className:(0,y.cn)("bg-white rounded-xl divide-y-1 divide-gray-100 flex flex-col h-full ",_?"justify-evenly opacity-30":"justify-start "),children:[(0,a.jsx)("button",{className:"flex justify-center",onMouseDown:e=>{r(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{r(),e.preventDefault(),e.stopPropagation()},children:(0,a.jsx)(m.DVr,{size:32,className:" text-black "})}),(0,a.jsx)("button",{className:"flex justify-center",children:(0,a.jsx)(i.uWH,{size:20,className:"drag-handle m-1 text-black"})}),(0,a.jsx)("button",{className:"flex justify-center",onMouseDown:e=>{x(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{x(),e.preventDefault(),e.stopPropagation()},children:(0,a.jsx)(d.FMH,{size:25,className:"drag-handle text-black"})})]}):(0,a.jsx)(a.Fragment,{children:R?(0,a.jsx)("div",{className:"m-1",children:(0,a.jsx)(f.Bej,{size:32,className:"m-1 text-white"})}):(0,a.jsxs)("div",{className:"opacity-30",children:[(null===(b=E[t])||void 0===b?void 0:b.formulaType)===o.HF.Espresso&&(0,a.jsx)(c.q_H,{size:32,className:"m-1 text-white"}),(null===(p=E[t])||void 0===p?void 0:p.formulaType)===o.HF.Teapresso&&(0,a.jsx)(d.QFv,{size:32,className:"m-1 text-white"}),(null===(w=E[t])||void 0===w?void 0:w.formulaType)===o.HF.PourOver&&(0,a.jsx)(u.e0F,{size:32,className:"m-1 text-white"})]})})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h1",{className:(0,y.cn)("select-none text-left text-md text-white m-2 font-mono break-all font-bold",_?"opacity-20 ml-10":"opacity-100"),children:R?String(Math.round(((new Date).getTime()-A)/1e3*10)/10)+" s":(null===(N=E[t])||void 0===N?void 0:N.title)||""})})]});s.wWH,Array.from({length:10},((e,t)=>({name:"Point ".concat(t+1),flowrate:Math.floor(100*Math.random())})));return(0,a.jsx)(v.E.div,{className:"w-full h-full ",animate:{opacity:1,scale:1},initial:{opacity:0,scale:0},whileHover:{scale:.99},transition:{delay:1*Math.random(),type:"spring",stiffness:100},children:(0,a.jsx)(j,{borderRadius:"16px",isRunning:R,ref:S,onMouseDown:e=>{console.log("profile/ clicked"),R?g():h()},backgroundColor:(null===(k=E[t])||void 0===k?void 0:k.color)||"black",className:(0,y.cn)("border flex h-full w-full transform flex-col items-center justify-center shadow-large cursor-pointer select-none",R?" border-black":"border-white","animate-none"),children:I})})}var _=r(93513),F=r(37039),T=r(11163),C=r(69968),H=r(26281),P=r(34546),S=r(9008),E=r.n(S);const M=(0,C.WidthProvider)(C.Responsive),D={lg:12,md:10,sm:6,xs:4,xxs:2},R=["bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-br from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-bl from-yellow-900 via-red-600 to-yellow-500","bg-gradient-to-tr from-yellow-900 via-red-600 to-yellow-500"],O=["bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-b from-green-900 via-green-600 to-teal-500","bg-gradient-to-r from-green-900 via-green-600 to-teal-500"],z=["bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-b from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-l from-blue-900 via-blue-600 to-cyan-500","bg-gradient-to-t from-blue-900 via-blue-600 to-cyan-500"];var A=function(){const[e,t]=(0,n.useState)(!1),{formulas:r,setFormulas:i,addFormulaOpen:c,setAddFormulaOpen:d}=(0,l.Z)(),{layout:u,setLayout:m}=(0,l.Z)(),[f,g]=(0,n.useState)(!1),[h,x]=(0,n.useState)(""),b=(0,T.useRouter)(),{showToast:p}=(0,s.pmc)(),{registerFormulaClick:v,registerSelectedFormulaId:w}=(0,l.Z)(),j=[];Object.values(r).forEach((e=>{const t=(0,a.jsx)("div",{className:"grid-item__title ",children:(0,a.jsx)("div",{className:"h-full w-full",children:(0,a.jsx)(k,{formulaId:e.id,onClick:()=>{v(e.id)},onCancel:()=>{(0,o.$m)(e.id)},onClickEdit:()=>{w(e.id),b.push("/lab")},onDelete:()=>{g(!0),x(e.id)}})})},e.id);j.push(t)}));const{draggable:N}=(0,l.Z)(),[C,S]=(0,n.useState)(""),[A,Z]=(0,n.useState)(o.HF.Espresso),{t:I}=(0,F.$G)(),{darkMode:L}=(0,l.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E(),{children:(0,a.jsx)("title",{children:"\u2615 ROSARIO"})}),(0,a.jsxs)(P.default,{children:[(0,a.jsx)("div",{className:(0,y.cn)("dark:bg-gray h-full overflow-auto mt-6",L?"bg-gray-900 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:24px_24px]":"bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"),children:(0,a.jsx)(M,{autoSize:!0,verticalCompact:!0,compactType:"vertical",className:"layout relative",layouts:u,isDraggable:N,isResizable:N,useCSSTransforms:!1,draggableHandle:".drag-handle",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:D,onLayoutChange:(r,a)=>{console.log("layout.evt",r,a),e?m(a):t(!0)},onDragStart:()=>{console.log("OnDragStart")},children:j})}),f&&(0,a.jsx)(s.u_l,{kind:"destructive",errorBannerWidth:"fill",title:"This will delete the formula",onClose:()=>g(!1),primaryAction:{label:"OK",onPress:()=>{i((0,_.Uy)(r,(e=>{delete e[h]}))),g(!1)}},secondaryAction:{label:"Cancel",onPress:()=>{g(!1)}},children:(0,a.jsx)(s.Kqy,{space:4,children:(0,a.jsx)("h1",{children:"Are you sure you want to delete this formula?"})})}),c&&(0,a.jsx)(s.u_l,{title:I("Add Formula"),onClose:()=>d(!1),primaryAction:{label:"OK",onPress:async()=>{d(!1),await async function(){const e=(0,H.Vj)();var t=[],a="",l="";if(null!=C.match(/^[0-9]+$/)){const e=await fetch("https://api.anatalab.com/gateway/rosario/get_token/".concat(C)),r=await e.json();console.log("Formula is",r.formulas),S(r.formulas.title),Z(r.formulas.formulaType),t=r.formulas.steps,a=r.formulas.title,l=r.formulas.backdrop}else a=C;function s(t,r){const a=Math.random()>.5?1:2,o=Math.random()>.5?1:2,l=D[r];for(var s,n,i=[],c=0;c<20;c++)for(var d=0;d<l;d++)i[c][d]=!1;for(t.forEach((e=>{for(var t=e.y;t<e.y+e.h;t++)for(var r=e.x;r<e.x+e.w;r++)i[t][r]=!0})),c=0;c<20;c++)for(d=0;d<l;d++){for(var u=!0,m=0;m<o;m++)for(var f=0;f<a;f++)1==i[c+m][d+f]&&(u=!1);if(u)return alert("possible"+JSON.stringify({i:e,x:s,y:n,w:a,h:o})),{i:e,x:s,y:n,w:a,h:o}}return alert(),{i:e,x:s,y:n,w:a,h:o}}m((0,_.Uy)(u,(e=>{var t,r,a,o,l;null===(t=e.md)||void 0===t||t.push(s(u.md,"md")),null===(r=e.lg)||void 0===r||r.push(s(u.lg,"lg")),null===(a=e.sm)||void 0===a||a.push(s(u.sm,"sm")),null===(o=e.xs)||void 0===o||o.push(s(u.xs,"xs")),null===(l=e.xxs)||void 0===l||l.push(s(u.xxs,"xxs"))}))),i((0,_.Uy)(r,(r=>{let s="bg-white";A==o.HF.Espresso?s=R[Math.floor(Math.random()*R.length)]:A==o.HF.PourOver?s=z[Math.floor(Math.random()*z.length)]:A==o.HF.Teapresso&&(s=O[Math.floor(Math.random()*O.length)]);const n=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],i={id:e,title:a,text:"New Formula",color:n[Math.floor(Math.random()*n.length)],backdrop:l||s,formulaType:A,steps:t,buildupDuration:1,lossyWeight:0,maximumDuration:0,isShared:!1,category:""};r[e]=i,console.log("fml/ create new",i)}))),console.log("addFormula",{layout:u,formulas:r})}()}},secondaryAction:{label:I("Cancel"),onPress:()=>d(!1)},children:(0,a.jsxs)(s.Kqy,{space:4,children:[(0,a.jsx)(s.nvn,{label:I("Formula Name or Share Token"),value:C,onChange:e=>{S(e)}}),(0,a.jsxs)(s.r5R,{space:4,columns:3,children:[(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:A==o.HF.Espresso?"solid":"outline",label:I("Espresso"),onPress:()=>{Z(o.HF.Espresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:A==o.HF.Teapresso?"solid":"outline",label:I("Teapresso"),onPress:()=>{Z(o.HF.Teapresso)}}),(0,a.jsx)(s.zxk,{hierarchy:"primary",kind:A==o.HF.PourOver?"solid":"outline",label:I("Pour Over"),onPress:()=>{Z(o.HF.PourOver)}})]})]})})]})]})}}},function(e){e.O(0,[838,396,660,296,817,509,365,127,970,456,262,735,282,546,774,888,179],(function(){return t=65231,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=rosario-0a68940abebe3d4a.js.map