(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{7503:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab",function(){return t(7178)}])},2290:function(e,s,t){"use strict";var l=t(7294),n=t(1020);s.Z=()=>(0,l.useContext)(n.Tp)},9186:function(e,s,t){"use strict";t.d(s,{cn:function(){return r}});var l=t(512),n=t(8388);function r(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,n.m6)((0,l.W)(s))}},7178:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return M}});var l=t(5893),n=t(1163),r=t(7294),a=t(6670),i=t(6281),o=t(3842),d=t(5948),c=t(7094),x=t(80),u=t(2780),h=t(9186);let m=r.forwardRef((e,s)=>{let{className:t,orientation:n="horizontal",decorative:r=!0,...a}=e;return(0,l.jsx)(u.f,{ref:s,decorative:r,orientation:n,className:(0,h.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",t),...a})});m.displayName=u.f.displayName;var p=t(7136),f=t(2091),j=t(6312);let g=j.fC,b=j.xz,v=r.forwardRef((e,s)=>{let{className:t,align:n="center",sideOffset:r=4,...a}=e;return(0,l.jsx)(j.h_,{children:(0,l.jsx)(j.VY,{ref:s,align:n,sideOffset:r,className:(0,h.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...a})})});v.displayName=j.VY.displayName;var w=t(3513),N=t(2290);let y=[{duration:5,value:9}],C=[{title:"can skip",text:"Grinder will skip this step if portafilter is not in position"},{title:"must wait",text:"Grinder will wait until the portafilter is in position"}],k=[{title:"pressure sensor",text:"Use the external pressure sensor to feedback"},{title:"flowrate profiler",text:"Use the flowrate to feedback"}],S=(e,s)=>{let t=[];return e.map((e,n)=>{t.push((0,l.jsx)(z,{title:e.title,text:e.text,onClick:()=>{s(e.title)}},n))}),(0,l.jsx)("div",{className:"grid gap-4 ",children:(0,l.jsx)("div",{className:"grid gap-2",children:t})})},F=e=>{let{text:s}=e;return s.split(" ").map((e,s)=>(0,l.jsx)("h1",{className:"text-xl",children:e},s))},z=e=>{let{title:s,text:t,onClick:n}=e;return(0,l.jsxs)("div",{className:"flex flex-col cursor-pointer",onClick:n,children:[(0,l.jsx)("h1",{className:"text-xl",children:s}),(0,l.jsx)("h3",{className:"text-sm text-gray-500",children:t})]})},E=e=>{let{value:s,onChange:t}=e,[n,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a(!1)},[s]),(0,l.jsxs)(g,{onOpenChange:e=>{a(!1!=e)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("h1",{className:"text-orange-900 text-xl underline decoration-pink-500 font-bold",onClick:()=>{a(!0)},children:s||"Action"})}),(0,l.jsx)(v,{className:"w-96 rounded-xl border",children:(0,l.jsx)("div",{className:"grid gap-4 ",children:(0,l.jsxs)("div",{className:"grid gap-2",children:[(0,l.jsx)(z,{title:"Grind",text:"Start by having perfect dose of coffee",onClick:()=>{t("Grind")}}),(0,l.jsx)(m,{}),(0,l.jsx)(z,{title:"Extract",text:"Let the pump work its magic",onClick:()=>{t("Extract")}}),(0,l.jsx)(m,{}),(0,l.jsx)(z,{title:"Rest",text:"Patience is key for a cup of perfection",onClick:()=>{t("Rest")}}),(0,l.jsx)(m,{}),(0,l.jsx)(z,{title:"Profiling",text:"Fine tuning the pressure to enhance the flavour",onClick:()=>{t("Profiling")}})]})})})]})},P=e=>{let{value:s,onChange:t}=e,[n,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a(!1)},[s]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(g,{onOpenChange:e=>{console.log("close",e),a(!1!=e)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("h1",{className:"  text-xl text-blue-800 font-bold",onClick:()=>{a(!0)},children:s||"Action"})}),(0,l.jsx)(v,{className:"w-96 rounded-xl border",children:S(C,t)})]})})},O=e=>{let{value:s,onChange:t}=e,[n,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a(!1)},[s]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(g,{onOpenChange:e=>{a(!1!=e)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("h1",{className:" font-bold text-xl text-blue-800",onClick:()=>{a(!0)},children:s})}),(0,l.jsx)(v,{className:"w-96 rounded-xl border",children:S(k,t)})]})})},R=e=>{let{value:s,onChange:t}=e,[n,a]=(0,r.useState)(!1);return(0,l.jsxs)(g,{onOpenChange:e=>{!1==e&&a(!1)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{a(!0)},children:(0,l.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[s," miligrams"]})})}),(0,l.jsxs)(v,{className:"w-96 rounded-xl border min-w-96",children:[(0,l.jsx)(c.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{a(!1)}}),(0,l.jsx)(p.RWL,{value:s,onChange:t,label:"Weight",type:"single",name:"value",minValue:0,maxValue:50,step:.1})]})]})},U=e=>{let{value:s,onChange:t}=e,[n,a]=(0,r.useState)(!1);return(0,l.jsxs)(g,{onOpenChange:e=>{!1==e&&a(!1)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{a(!0)},children:(0,l.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[s," %"]})})}),(0,l.jsxs)(v,{className:"w-96 rounded-xl border min-w-96",children:[(0,l.jsx)(c.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{a(!1)}}),(0,l.jsx)(p.RWL,{value:s,onChange:t,label:"Weight",type:"single",name:"value",minValue:0,maxValue:100,step:5})]})]})},V=e=>{let{value:s,onChange:t,checked:n,toggleChecked:a}=e,[i,o]=(0,r.useState)(!1);return(0,l.jsxs)(g,{onOpenChange:e=>{o(!1!=e)},open:i,children:[(0,l.jsx)(b,{children:(0,l.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{o(!0)},children:(0,l.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[s," ",s<=1?"second":"seconds"]})})}),(0,l.jsxs)(v,{className:"w-80 rounded-xl border  space-y-8",children:[(0,l.jsx)(c.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{o(!1)}}),(0,l.jsx)(p.RWL,{value:s,onChange:t,label:"Weight",type:"single",name:"value",minValue:0,maxValue:60,step:1}),(0,l.jsx)("div",{className:"select-none",children:(0,l.jsx)(p.xuv,{padding:24,background:n?"softOrange":"backgroundPrimary",onClick:()=>{a(!n)},cursor:{disabled:"notAllowed"},children:(0,l.jsxs)(p.oeA,{space:16,children:[(0,l.jsx)(p.sgG,{width:"content",children:(0,l.jsx)(p.XZJ,{"aria-label":"Toggle card selection",value:n,onChange:()=>{a(n)}})}),(0,l.jsxs)(p.Kqy,{space:8,children:[(0,l.jsx)(p.Dxz,{size:"medium",children:"Keep valve open"}),(0,l.jsx)(p.uTp,{size:"medium",children:"Keeping group valve open while resting will reduce the pressure at group"})]})]})})})]})]})},_=e=>{let{value:s,onChange:t}=e,[n,a]=(0,r.useState)(!1);return(0,l.jsxs)(g,{onOpenChange:e=>{a(!1!=e)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{a(!0)},children:(0,l.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[s," ",s<=1?"second":"seconds"]})})}),(0,l.jsxs)(v,{className:"w-80 rounded-xl border  space-y-8",children:[(0,l.jsx)(c.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{a(!1)}}),(0,l.jsx)(p.RWL,{value:s,onChange:t,label:"Time",type:"single",name:"value",minValue:0,maxValue:60,step:1})]})]})},W=e=>{let{value:s,onChange:t}=e;console.log("action/ recreate");let[n,a]=(0,r.useState)(!1),{grinderSettings:i}=(0,N.Z)();return(0,r.useEffect)(()=>{a(!1)},[s]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(g,{onOpenChange:e=>{console.log("close",e),a(!1!=e)},open:n,children:[(0,l.jsx)(b,{children:(0,l.jsx)("h1",{className:"font-bold text-xl "+(s?"text-blue-800":"text-red-500"),onClick:()=>{a(!0)},children:s||"[select grinder]"})}),(0,l.jsx)(v,{className:"w-96 rounded-xl border",children:(0,l.jsx)("div",{className:"grid gap-4 ",children:(0,l.jsx)("div",{className:"grid gap-2",children:i.map((e,s)=>(0,l.jsxs)(l.Fragment,{children:[!!s&&(0,l.jsx)(m,{}),(0,l.jsx)(z,{title:e.name,text:"over "+e.connectionType+" with id "+e.connectionId,onClick:()=>{t(e.name)}})]}))})})})]})})};function A(e){let{onDelete:s,...t}=e,[n,a]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null),[d,c]=(0,r.useState)("can skip"),[u,h]=(0,r.useState)(10),[m,p]=(0,r.useState)(null),[f,j]=(0,r.useState)(5),[g,b]=(0,r.useState)(100),[v,w]=(0,r.useState)("close"),[N,C]=(0,r.useState)("pressure sensor"),[k,S]=(0,r.useState)(!1),[z,_]=(0,r.useState)(y);return(0,l.jsxs)("div",{className:"flex flex-col  h-fit rounded-xl p-4 max-w-[calc(90vw)] w-96  border hover:border-blue-500  bg-white drop-shadow-xl hover:scale-105 transition-transform duration-200",children:[(0,l.jsx)("div",{className:"absolute top-0 right-0 p-2 cursor-pointer",onClick:()=>s(),children:(0,l.jsx)(x.maG,{className:"text-gray-300"})}),(0,l.jsxs)("div",{className:"inline-flex flex-wrap gap-2 items-center text-wrap max-w-96 space-x-1",children:[(0,l.jsx)(E,{value:i,onChange:o}),"Grind"===i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R,{value:u,onChange:h}),(0,l.jsx)(F,{text:"of"}),(0,l.jsx)(W,{value:m,onChange:p}),(0,l.jsx)(F,{text:"bean, grinder"}),(0,l.jsx)(P,{value:d,onChange:c}),"can skip"===d?(0,l.jsx)(F,{text:"this step is portafilter is absent"}):(0,l.jsx)(F,{text:"until portafilter is present"})]}),"Extract"===i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{text:"a shot of"}),(0,l.jsx)(R,{value:u,onChange:h}),(0,l.jsx)(F,{text:"with pump power"}),(0,l.jsx)(U,{value:g,onChange:b})]}),"Rest"===i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{text:"for"}),(0,l.jsx)(V,{value:f,onChange:j,checked:k,toggleChecked:S}),k&&(0,l.jsx)(F,{text:"but keep valve open"})]}),"Profiling"===i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{text:"to extract"}),(0,l.jsx)(R,{value:u,onChange:h}),(0,l.jsx)(F,{text:"of espresso using"}),(0,l.jsx)(O,{value:N,onChange:C}),(0,l.jsx)(D,{segments:z,setSegments:_,sensor:N}),(0,l.jsx)(G,{segments:z,sensor:N})]})]})]})}let D=e=>{let{segments:s,setSegments:t,sensor:n}=e,r=s.length,a=s.map((e,a)=>(0,l.jsxs)("div",{className:"flex flex-rol flex-wrap",children:[0==a?(0,l.jsx)(F,{text:"First, reach"}):(0,l.jsx)(F,{text:"then"}),(0,l.jsx)(H,{segments:s,sensor:n,setSegments:t,idx:a}),0==a?(0,l.jsx)(F,{text:"within"}):(0,l.jsx)(F,{text:"in"}),(0,l.jsx)(_,{value:s[a].duration,onChange:e=>{t((0,w.Uy)(s,s=>{s[a].duration=e}))}}),(0,l.jsx)("h1",{className:"text-xl",children:a===r-1?".":","})]},a));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{}),(0,l.jsx)("ul",{children:a}),(0,l.jsxs)("div",{className:"flex flex-row space-x-1 p-2  h-6 w-fit rounded-md bg-blue-100 items-center hover:scale-105 transition-transform duration-200 cursor-pointer",children:[(0,l.jsx)(f.wEH,{color:"#1180EF",size:16,onClick:()=>{console.log("add segment",{segments:s}),t((0,w.Uy)(s,e=>{e.push({duration:Math.floor(30*Math.random()),value:+(8*Math.random()+2).toFixed(1)})}))}}),(0,l.jsx)(f.iFH,{color:"#1180EF",size:16,onClick:()=>{console.log("remove segment",{segments:s}),s.length>1&&t((0,w.Uy)(s,e=>{e.splice(-1)}))}})]})]})},G=e=>{let{segments:s,sensor:t}=e,[n,a]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=[],l=0;s.forEach(e=>{l+=e.duration}),console.log("Render Chart",{segments:s,totalTime:l});var n=0;for(let l of s){for(var r=0;r<l.duration;r+=.1){var i=n+(l.value-n)*(r/l.duration);i=Math.round(10*i)/10,"pressure sensor"==t?e.push({pressure:i,max:10,min:0}):e.push({flowrate:i,max:50,min:0})}n=l.value,l.duration}a(e)},[s,t]),(0,l.jsx)("div",{className:"w-full -translate-x-10 hover:scale-120 transition-transform duration-200",children:(0,l.jsx)(p.wWH,{height:300,dataKey:"time",categories:["pressure sensor"==t?"pressure":"flowrate","max","min"],hideLegend:!1,hideXAxis:!1,hideYAxis:!1,data:n,disableAnimation:!0})})},H=e=>{let{segments:s,setSegments:t,sensor:n,idx:a}=e,[i,o]=(0,r.useState)(!1);return(0,l.jsxs)(g,{onOpenChange:e=>{console.log("close",e),!1==e&&o(!1)},open:i,children:[(0,l.jsx)(b,{children:(0,l.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{o(!0)},children:(0,l.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[s[a].value," ","pressure sensor"===n?"bar":"mg/s"]})})}),(0,l.jsx)(v,{className:"w-96 rounded-xl border min-w-96",children:(0,l.jsx)(p.RWL,{value:s[a].value,onChange:e=>{t((0,w.Uy)(s,s=>{s[a].value=e}))},label:"pressure sensor"===n?"Pressure":"Flowrate",type:"single",name:"value",minValue:0,maxValue:"pressure sensor"===n?10:100,step:.1})})]})};var M=()=>{var e;let s=(0,n.useRouter)();s.query.slug;let[t,c]=(0,r.useState)([]),{selectedFormulaId:x,registerSelectedFormulaId:u,setFormulas:h,formulas:j,setSelectedPage:g}=(0,N.Z)(),[b,v]=(0,r.useState)(!1);return(0,r.useEffect)(function(){v(!0)},[]),(0,r.useEffect)(()=>{console.log("lab/ re-render",x)},[x]),(0,l.jsx)(o.default,{children:(0,l.jsxs)("div",{className:"flex flex-col bg-gray-100 items-center space-y-4 p-4",children:[(0,l.jsxs)("div",{className:" h-fit bg-gray-300 rounded-xl max-w-[calc(90vw)] w-96 p-4 flex flex-col space-y-4 shadow-xl border",children:[(0,l.jsx)(p.nvn,{value:null===(e=j[x])||void 0===e?void 0:e.title,onChange:e=>{h((0,w.Uy)(j,s=>{console.log("Formulas",j,x),s[x].title=e}))},label:"Formula",placeholder:"Untitled formula"}),(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center space-x-1 text-white",children:[(0,l.jsxs)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-2/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-blue-400 to-emerald-400 text-white",onClick:()=>{console.log("play")},children:[(0,l.jsx)(f.gmG,{}),(0,l.jsx)("h1",{children:"Play"})]}),(0,l.jsx)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-1/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",onClick:()=>{console.log("download")},children:(0,l.jsx)(f.aBF,{})}),(0,l.jsx)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-1/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600",onClick:()=>{console.log("share")},children:(0,l.jsx)(f.PPi,{})}),(0,l.jsx)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-1/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-red-500 to-red-800",onClick:()=>{console.log("delete"),g("Formula"),u(null),h((0,w.Uy)(j,e=>{delete j[x]})),s.push("/")},children:(0,l.jsx)(f.zYX,{})})]})]}),(0,l.jsx)(m,{}),(0,l.jsxs)("div",{className:" flex flex-col py-3 justify-center items-center mix-w-80 ",children:[(0,l.jsx)(d.Z5,{onDragEnd:function(e,s){e.destination&&c((0,w.Uy)(t,s=>{let[t]=s.splice(e.source.index,1);return s.splice(e.destination.index,0,t),s}))},onBeforeDragStart:()=>{console.log("onBeforeDragStart")},onDragStart:()=>{console.log("onDragStart")},onDragUpdate:()=>{console.log("onDragUpdate")},children:(0,l.jsx)("div",{className:"flex flex-row w-full",children:(0,l.jsx)(d.bK,{droppableId:"ROOT",children:e=>(0,l.jsxs)("div",{...e.droppableProps,ref:e.innerRef,className:"flex flex-col w-full justify-between mx-auto items-center space-y-4",children:[null==t?void 0:t.map((e,s)=>(console.log("render",{item:e,idx:s}),b&&(0,l.jsx)(d._l,{draggableId:null==e?void 0:e.id,index:s,children:s=>(0,l.jsx)("div",{className:"",...s.dragHandleProps,...s.draggableProps,ref:s.innerRef,children:(0,l.jsx)(A,{onDelete:()=>{var s;return s=null==e?void 0:e.id,void c((0,w.Uy)(t,e=>e.filter(function(e){return(null==e?void 0:e.id)!==s})))}})})},null==e?void 0:e.id))),e.placeholder]})})})}),(0,l.jsxs)("button",{className:"flex flex-row space-x-4 justify-center items-center rounded-xl border  cursor-pointer w-80 h-16 my-4 bg-blue-100",onClick:function(){c((0,w.Uy)(t,e=>{e.push({id:(0,i.Vj)(),type:"grinding",params:{}})}))},children:[(0,l.jsx)(a.OzW,{color:"#1180EF",size:30}),(0,l.jsx)("p",{className:"text-[#1180EF] font-bold text-lg",children:"Add steps"})]})]})]})})}},3842:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var l=t(5893),n=t(7136),r=t(1121),a=t(7094),i=t(4554),o=t(2290);t(7294);var d=t(1163),c=()=>{let{connectButtonDisplay:e}=(0,o.Z)(),{selectedPage:s,setSelectedPage:t}=(0,o.Z)(),i=(0,d.useRouter)();return(0,l.jsx)("div",{className:"flex justify-center w-full fixed bottom-0 bg-white z-50",children:(0,l.jsx)(n.eBu,{space:4,children:(0,l.jsxs)("div",{className:"flex justify-between  flex-row",children:[(0,l.jsx)(n.zxk,{hierarchy:"Formula"===s?"primary":"secondary",kind:"transparent",label:"Formula",icon:()=>(0,l.jsx)(r.h1P,{}),onPress:()=>{t("Formula"),i.push("/")}}),(0,l.jsx)(n.zxk,{hierarchy:"Setting"===s?"primary":"secondary",kind:"transparent",label:"Settings",icon:()=>(0,l.jsx)(a.Fnt,{}),onPress:()=>{t("Setting"),i.push("/setting")}})]})})})},x=t(80),u=()=>{let{connectButtonStyle:e,connectButtonText:s,selectedPage:t}=(0,o.Z)();return(0,l.jsxs)("div",{className:"flex justify-between items-center m-4",children:[(0,l.jsx)(n.s01,{size:"small",children:t}),(0,l.jsx)(n.zxk,{label:s,hierarchy:"primary",icon:()=>(0,l.jsx)(x.Vdu,{}),onPress:()=>{(0,i.s0)()},kind:e})]})},h=e=>{let{children:s}=e;return(0,l.jsxs)(n.Kqy,{space:4,children:[(0,l.jsx)(u,{}),(0,l.jsx)("div",{className:"mb-[56px]",children:s}),(0,l.jsx)(c,{})]})}}},function(e){e.O(0,[838,817,509,365,594,630,317,388,292,774,888,179],function(){return e(e.s=7503)}),_N_E=e.O()}]);