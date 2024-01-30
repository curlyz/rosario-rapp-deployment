(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{7503:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab",function(){return s(5882)}])},2290:function(e,t,s){"use strict";var n=s(7294),l=s(1020);t.Z=()=>(0,n.useContext)(l.Tp)},9186:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var n=s(512),l=s(8388);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,l.m6)((0,n.W)(t))}},5882:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return es}});var n,l,r,a,i,o,c,d,x,u,h,m,p,g,f=s(5893),j=s(1163),v=s(7294),b=s(6670),y=s(6281),w=s(3842),N=s(5948);(n=d||(d={})).PressureProfiling="PressureProfile",n.FlowrateProfiling="FlowateProfile",(l=x||(x={})).Weight="Weight",l.Time="Time",(r=u||(u={})).Grinding="Grinding",r.Extracting="Extracting",r.Profiling="Profilling",(a=h||(h={})).Wire="Wired",a.Bluetooth="Bluetooth",(i=m||(m={})).Time="Time",i.Weight="Weight",(o=p||(p={})).Grind="Grind",o.Rest="Rest",o.Extract="Extract",o.Profile="Profile",(c=g||(g={})).Pressure="Pressure",c.Flowrate="Flowrate";var C=s(7094),k=s(80),P=s(2780),T=s(9186);let F=v.forwardRef((e,t)=>{let{className:s,orientation:n="horizontal",decorative:l=!0,...r}=e;return(0,f.jsx)(P.f,{ref:t,decorative:l,orientation:n,className:(0,T.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",s),...r})});F.displayName=P.f.displayName;var S=s(7136),z=s(2091),E=s(6312);let U=E.fC,R=E.xz,W=v.forwardRef((e,t)=>{let{className:s,align:n="center",sideOffset:l=4,...r}=e;return(0,f.jsx)(E.h_,{children:(0,f.jsx)(E.VY,{ref:t,align:n,sideOffset:l,className:(0,T.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...r})})});W.displayName=E.VY.displayName;var O=s(3513),_=s(2290),V=s(4158);let G=[{title:"can skip",text:"Grinder will skip this step if portafilter is not in position",value:!0},{title:"must wait",text:"Grinder will wait until the portafilter is in position",value:!1}],A=[{title:"pressure sensor",text:"Use the external pressure sensor to feedback",value:"Pressure"},{title:"flowrate profiler",text:"Use the flowrate to feedback",value:"Flowrate"}],q=(e,t)=>{let s=[];return e.map((e,n)=>{s.push((0,f.jsx)(Z,{title:e.title,text:e.text,onClick:()=>{t(e.title)}},n))}),(0,f.jsx)("div",{className:"grid gap-4 ",children:(0,f.jsx)("div",{className:"grid gap-2",children:s})})},D=e=>{let{text:t}=e;return t.split(" ").map((e,t)=>(0,f.jsx)("h1",{className:"text-xl",children:e},t))},Z=e=>{let{title:t,text:s,onClick:n}=e;return(0,f.jsxs)("div",{className:"flex flex-col cursor-pointer",onClick:n,children:[(0,f.jsx)("h1",{className:"text-xl",children:t}),(0,f.jsx)("h3",{className:"text-sm text-gray-500",children:s})]})},B=e=>{let{value:t,onChange:s}=e,[n,l]=(0,v.useState)(!1);(0,v.useEffect)(()=>{l(!1)},[t]);let r=e=>{s(e),p.Profile};return(0,f.jsxs)(U,{onOpenChange:e=>{l(!1!=e)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("h1",{className:"text-orange-900 text-xl underline decoration-pink-500 font-bold",onClick:()=>{l(!0)},children:t||"Action"})}),(0,f.jsx)(W,{className:"w-96 rounded-xl border",children:(0,f.jsx)("div",{className:"grid gap-4 ",children:(0,f.jsxs)("div",{className:"grid gap-2",children:[(0,f.jsx)(Z,{title:"Grind",text:"Start by having perfect dose of coffee",onClick:()=>{r(p.Grind)}}),(0,f.jsx)(F,{}),(0,f.jsx)(Z,{title:"Extract",text:"Let the pump work its magic",onClick:()=>{r(p.Extract)}}),(0,f.jsx)(F,{}),(0,f.jsx)(Z,{title:"Rest",text:"Patience is key for a cup of perfection",onClick:()=>{r(p.Rest)}}),(0,f.jsx)(F,{}),(0,f.jsx)(Z,{title:"Profiling",text:"Fine tuning the pressure to enhance the flavour",onClick:()=>{r(p.Profile)}})]})})})]})},H=e=>{let{value:t,onChange:s}=e,[n,l]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{l(!1)},[t]),(0,V.q)(()=>{s(!1)}),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(U,{onOpenChange:e=>{l(!1!=e)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("h1",{className:"  text-xl text-blue-800 font-bold",onClick:()=>{l(!0)},children:t?"can skip":"must wait"})}),(0,f.jsx)(W,{className:"w-96 rounded-xl border",children:q(G,e=>{"can skip"==e?s(!0):s(!1)})})]})})},M=e=>{let{value:t,onChange:s}=e,[n,l]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{l(!1)},[t]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(U,{onOpenChange:e=>{l(!1!=e)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("h1",{className:" font-bold text-xl text-blue-800",onClick:()=>{l(!0)},children:t||"[select type]"})}),(0,f.jsx)(W,{className:"w-96 rounded-xl border",children:q(A,e=>{e==g.Pressure?s(g.Pressure):s(g.Flowrate)})})]})})},K=(e,t)=>{if(void 0===e)return;let s=[],n=0;e.forEach(e=>{n+=e.duration});var l=0;for(let n of e){for(var r=0;r<n.duration;r+=.1){var a=l+(n.value-l)*(r/n.duration);a=Math.round(10*a)/10,t==g.Pressure?s.push({pressure:a,max:10,min:0}):s.push({flowrate:a,max:50,min:0})}l=n.value,n.duration}return s};function L(e){let{value:t,onChange:s}=e,[n,l]=(0,v.useState)(!1);return(0,V.q)(()=>{s(22)}),(0,f.jsxs)(U,{onOpenChange:e=>{!1==e&&l(!1)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{l(!0)},children:(0,f.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[t," miligrams"]})})}),(0,f.jsxs)(W,{className:"w-96 rounded-xl border min-w-96",children:[(0,f.jsx)(C.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{l(!1)}}),(0,f.jsx)(S.RWL,{value:t,onChange:s,label:"Weight",type:"single",name:"value",minValue:0,maxValue:50,step:.1})]})]})}let X=e=>{let{value:t,onChange:s}=e,[n,l]=(0,v.useState)(!1);return(0,V.q)(()=>{s(100)}),(0,f.jsxs)(U,{onOpenChange:e=>{!1==e&&l(!1)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{l(!0)},children:(0,f.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[t," %"]})})}),(0,f.jsxs)(W,{className:"w-96 rounded-xl border min-w-96",children:[(0,f.jsx)(C.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{l(!1)}}),(0,f.jsx)(S.RWL,{value:t,onChange:s,label:"Weight",type:"single",name:"value",minValue:0,maxValue:100,step:5})]})]})},Y=e=>{let{value:t,onChange:s,valveState:n,toggleChecked:l}=e,[r,a]=(0,v.useState)(!1);return(0,V.q)(()=>{s(10),l(!1)}),(0,f.jsxs)(U,{onOpenChange:e=>{a(!1!=e)},open:r,children:[(0,f.jsx)(R,{children:(0,f.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{a(!0)},children:(0,f.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[t," ",t<=1?"second":"seconds"]})})}),(0,f.jsxs)(W,{className:"w-80 rounded-xl border  space-y-8",children:[(0,f.jsx)(C.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{a(!1)}}),(0,f.jsx)(S.RWL,{value:t,onChange:s,label:"Resting Time",type:"single",name:"value",minValue:0,maxValue:60,step:1}),(0,f.jsx)("div",{className:"select-none",children:(0,f.jsx)(S.xuv,{padding:24,background:n?"softOrange":"backgroundPrimary",onClick:()=>{l(!n)},cursor:{disabled:"notAllowed"},children:(0,f.jsxs)(S.oeA,{space:16,children:[(0,f.jsx)(S.sgG,{width:"content",children:(0,f.jsx)(S.XZJ,{"aria-label":"Toggle card selection",value:n,onChange:()=>{l(n)}})}),(0,f.jsxs)(S.Kqy,{space:8,children:[(0,f.jsx)(S.Dxz,{size:"medium",children:"Keep valve open"}),(0,f.jsx)(S.uTp,{size:"medium",children:"Keeping group valve open while resting will reduce the pressure at group"})]})]})})})]})]})},I=e=>{let{value:t,onChange:s}=e,[n,l]=(0,v.useState)(!1);return(0,V.q)(()=>{s(10)}),(0,f.jsxs)(U,{onOpenChange:e=>{l(!1!=e)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{l(!0)},children:(0,f.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[t," ",t<=1?"second":"seconds"]})})}),(0,f.jsxs)(W,{className:"w-80 rounded-xl border  space-y-8",children:[(0,f.jsx)(C.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{l(!1)}}),(0,f.jsx)(S.RWL,{value:t,onChange:s,label:"Time",type:"single",name:"value",minValue:0,maxValue:60,step:1})]})]})},J=e=>{let{value:t,onChange:s}=e;console.log("action/ recreate");let[n,l]=(0,v.useState)(!1),{grinderSettings:r}=(0,_.Z)();return(0,V.q)(()=>{s("[select grinder]")}),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(U,{onOpenChange:e=>{console.log("close",e),l(!1!=e)},open:n,children:[(0,f.jsx)(R,{children:(0,f.jsx)("h1",{className:"font-bold text-xl "+(t?"text-blue-800":"text-red-500"),onClick:()=>{l(!0)},children:t||"[select grinder]"})}),(0,f.jsx)(W,{className:"w-96 rounded-xl border",children:(0,f.jsx)("div",{className:"grid gap-4 ",children:(0,f.jsx)("div",{className:"grid gap-2",children:r.map((e,t)=>(0,f.jsxs)(f.Fragment,{children:[!!t&&(0,f.jsx)(F,{}),(0,f.jsx)(Z,{title:e.name,text:"over "+e.connectionType+" with id "+e.connectionId,onClick:()=>{s(e.name)}})]}))})})})]})})};function Q(e){let{onDelete:t,index:s}=e,{steps:n,setSteps:l}=(0,_.Z)(),[r,a]=(0,v.useState)("can skip");return(0,f.jsxs)("div",{className:"flex flex-col  h-fit rounded-xl p-4 max-w-[calc(90vw)] w-96  border hover:border-blue-500  bg-white drop-shadow-xl hover:scale-105 transition-transform duration-200",children:[(0,f.jsx)("div",{className:"absolute top-0 right-0 p-2 cursor-pointer",onClick:()=>t(),children:(0,f.jsx)(k.maG,{className:"text-gray-300"})}),(0,f.jsxs)("div",{className:"inline-flex flex-wrap gap-2 items-center text-wrap max-w-96 space-x-1",children:[(0,f.jsx)(B,{value:n[s].action.actionType,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].action.actionType=e}))}}),"Grind"===n[s].action.actionType&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(L,{value:n[s].target.value,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].target.targetType=m.Weight,t[s].target.value=e}))}}),(0,f.jsx)(D,{text:"of"}),(0,f.jsx)(J,{value:n[s].action.ingredient,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].action.ingredient=e}))}}),(0,f.jsx)(D,{text:"bean, grinder"}),(0,f.jsx)(H,{value:n[s].action.canSkip,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].action.canSkip=e,t[s].action.actionType=p.Grind}))}}),!0===n[s].action.canSkip?(0,f.jsx)(D,{text:"this step is portafilter is absent"}):(0,f.jsx)(D,{text:"until portafilter is present"})]}),"Extract"===n[s].action.actionType&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D,{text:"a shot of"}),(0,f.jsx)(L,{value:n[s].target.value,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].target.targetType=m.Weight,t[s].target.value=e}))}}),(0,f.jsx)(D,{text:"with pump power"}),(0,f.jsx)(X,{value:n[s].action.power,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].action.actionType=p.Extract,t[s].action.power=e}))}})]}),"Rest"===n[s].action.actionType&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D,{text:"for"}),(0,f.jsx)(Y,{value:n[s].target.value,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].target.targetType=m.Time,t[s].target.value=e}))},valveState:n[s].action.valveState,toggleChecked:e=>{l((0,O.Uy)(n,t=>{t[s].target.targetType=m.Time,t[s].action.valveState=e}))}}),n[s].action.valveState&&(0,f.jsx)(D,{text:"but keep valve open"})]}),"Profile"===n[s].action.actionType&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D,{text:"to extract"}),(0,f.jsx)(L,{value:n[s].target.value,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].target.targetType=m.Weight,t[s].target.value=e}))}}),(0,f.jsx)(D,{text:"of espresso using"}),(0,f.jsx)(M,{value:n[s].action.profilingType,onChange:e=>{l((0,O.Uy)(n,t=>{t[s].action.actionType=p.Profile,t[s].action.profilingType=e}))}}),(0,f.jsx)($,{index:s,segments:n[s].action.segments,sensor:n[s].action.profilingType}),(0,f.jsx)(ee,{segments:n[s].action.segments,sensor:n[s].action.profilingType})]})]})]})}let $=e=>{let{segments:t,sensor:s,index:n}=e,{steps:l,setSteps:r}=(0,_.Z)();(0,V.q)(()=>{r((0,O.Uy)(l,e=>{e[n].action.actionType="Profile",e[n].action.segments=e[n].action.segments||[],0==e[n].action.segments.length&&(e[n].action.segments=[{duration:10,value:3}])})),console.log("segments/ initliazed as empty",l[n])});let a=(t||[]).map((e,a)=>(0,f.jsxs)("div",{className:"flex flex-rol flex-wrap",children:[0==a?(0,f.jsx)(D,{text:"First, reach"}):(0,f.jsx)(D,{text:"then"}),(0,f.jsx)(et,{segments:t,sensor:s,setValue:e=>{r((0,O.Uy)(l,t=>{t[n].action.segments[a].value=e}))},idx:a}),0==a?(0,f.jsx)(D,{text:"within"}):(0,f.jsx)(D,{text:"in"}),(0,f.jsx)(I,{value:t[a].duration,onChange:e=>{r((0,O.Uy)(l,t=>{t[n].action.segments[a].duration=e}))}}),(0,f.jsx)("h1",{className:"text-xl",children:a===t.length-1?".":","})]},a));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(F,{}),(0,f.jsx)("ul",{children:a}),(0,f.jsxs)("div",{className:"flex flex-row space-x-1 p-2  h-6 w-fit rounded-md bg-blue-100 items-center hover:scale-105 transition-transform duration-200 cursor-pointer",children:[(0,f.jsx)(z.wEH,{color:"#1180EF",size:16,onClick:()=>{console.log("add segment",{segments:t}),r((0,O.Uy)(l,e=>{e[n].action.segments.push({duration:Math.floor(30*Math.random()),value:+(8*Math.random()+2).toFixed(1)})}))}}),(0,f.jsx)(z.iFH,{color:"#1180EF",size:16,onClick:()=>{console.log("remove segment",{segments:t}),void 0!==l[n].action.segments&&(l[n].action.segments.length<2||r((0,O.Uy)(l,e=>(e[n].action.segments.pop(),e))))}})]})]})},ee=e=>{let{segments:t,sensor:s}=e,[n,l]=(0,v.useState)([]);return(0,v.useEffect)(()=>{l(K(t,s))},[t,s]),(0,f.jsx)("div",{className:"w-full -translate-x-10 hover:scale-120 transition-transform duration-200",children:(0,f.jsx)(S.wWH,{height:300,dataKey:"time",categories:[s==g.Pressure?"pressure":"flowrate","max","min"],hideLegend:!1,hideXAxis:!1,hideYAxis:!1,data:n,disableAnimation:!0})})},et=e=>{let{segments:t,setValue:s,sensor:n,idx:l}=e,[r,a]=(0,v.useState)(!1),i=n==g.Pressure?"bar":"mg/s";return(0,f.jsxs)(U,{onOpenChange:e=>{console.log("close",e),!1==e&&a(!1)},open:r,children:[(0,f.jsx)(R,{children:(0,f.jsx)("div",{className:"rounded-lg w-fit h-8 p-2 justify-between items-center flex",onClick:()=>{a(!0)},children:(0,f.jsxs)("h1",{className:" font-bold text-xl text-blue-800",children:[t[l].value," ",i]})})}),(0,f.jsxs)(W,{className:"w-96 rounded-xl border min-w-96",children:[(0,f.jsx)(C.FMH,{className:"absolute top-2 right-2 text-gray-500",size:20,onClick:()=>{a(!1)}}),(0,f.jsx)(S.RWL,{value:t[l].value,onChange:e=>{s(e)},label:n===g.Pressure?"Pressure":"Flowrate",type:"single",name:"value",minValue:0,maxValue:n==g.Pressure?10:100,step:.1})]})]})};var es=()=>{var e;let t=(0,j.useRouter)();t.query.slug;let[s,n]=(0,v.useState)(-1),[l,r]=(0,v.useState)(-1),[a,i]=(0,v.useState)(!1),[o,c]=(0,v.useState)(!1),[d,x]=(0,v.useState)(!0),{selectedFormulaId:u,registerSelectedFormulaId:h,setFormulas:g,formulas:C,setSelectedPage:k,steps:P,setSteps:T,registerFormulaClick:E}=(0,_.Z)(),[U,R]=(0,v.useState)(!1);return(0,v.useEffect)(function(){R(!0)},[]),(0,v.useEffect)(()=>{console.log("lab/ re-render",u)},[u]),(0,f.jsxs)(w.default,{children:[a&&(0,f.jsxs)(S.u_l,{size:"large",autoFocus:!1,title:"Assign to Button",onClose:()=>i(!1),primaryAction:{label:"Download",onPress:()=>{x(!0),setTimeout(()=>{i(!1)},3e3)}},secondaryAction:{label:"Cancel",onPress:()=>i(!1)},children:[(0,f.jsx)(S.uTp,{size:"medium",children:"This process will save the formula to a physical button on your cofee machine so you don't always need a mobile device connected"}),(0,f.jsxs)("div",{className:"w-full h-32 flex flex-col space-y-4 p-4",children:[(0,f.jsx)("div",{className:"w-full h-fit flex flex-row space-x-4 justify-between",children:[1,2,3].map((e,t)=>(0,f.jsx)(S.zxk,{label:"Group ".concat(e),hierarchy:"primary",kind:t===s?"solid":"outline",onPress:()=>n(t)},t))}),(0,f.jsx)("div",{className:"w-full h-fit flex flex-row space-x-4 justify-between",children:[1,2,3,4].map((e,t)=>(0,f.jsx)(S.zxk,{label:"Button ".concat(e),hierarchy:"primary",kind:t===l?"solid":"outline",onPress:()=>r(t)},t))})]})]}),o&&(0,f.jsx)(S.u_l,{title:"Share",onClose:()=>c(!1),primaryAction:{label:"OK",onPress:()=>c(!1)},secondaryAction:{label:"Cancel",onPress:()=>c(!1)},children:(0,f.jsx)(S.uTp,{size:"medium",children:"Content"})}),(0,f.jsxs)("div",{className:"flex flex-col bg-gray-100 items-center space-y-4 p-4",children:[(0,f.jsxs)("div",{className:" h-fit bg-gray-300 rounded-xl max-w-[calc(90vw)] w-96 p-4 flex flex-col space-y-4 shadow-xl border",children:[(0,f.jsx)(S.nvn,{value:null===(e=C[u])||void 0===e?void 0:e.title,onChange:e=>{g((0,O.Uy)(C,t=>{console.log("Formulas",C,u),t[u].title=e}))},label:"Formula",placeholder:"Untitled formula"}),(0,f.jsxs)("div",{className:"flex flex-row justify-between items-center space-x-1 text-white",children:[(0,f.jsxs)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-2/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-blue-400 to-emerald-400 text-white select-none",onClick:()=>{E(u)},children:[(0,f.jsx)(z.gmG,{}),(0,f.jsx)("h1",{children:"Play"})]}),(0,f.jsx)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-1/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",onClick:()=>{console.log("download"),i(!0)},children:(0,f.jsx)(z.aBF,{})}),(0,f.jsx)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-1/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-blue-500 to-blue-600",onClick:()=>{c(!0)},children:(0,f.jsx)(z.PPi,{})}),(0,f.jsx)("div",{className:"rounded-xl border flex flex-row justify-evenly items-center bg-white p-4 h-12 w-1/5 cursor-pointer hover:border-blue-500 bg-gradient-to-r from-red-500 to-red-800",onClick:()=>{console.log("delete"),k("Formula"),h(null),g((0,O.Uy)(C,e=>{delete C[u]})),t.push("/")},children:(0,f.jsx)(z.zYX,{})})]})]}),(0,f.jsx)(F,{}),(0,f.jsxs)("div",{className:" flex flex-col py-3 justify-center items-center mix-w-80 ",children:[(0,f.jsx)(N.Z5,{onDragEnd:function(e,t){e.destination&&T((0,O.Uy)(P,t=>{let[s]=t.splice(e.source.index,1);return t.splice(e.destination.index,0,s),t}))},onBeforeDragStart:()=>{console.log("onBeforeDragStart")},onDragStart:()=>{console.log("onDragStart")},onDragUpdate:()=>{console.log("onDragUpdate")},children:(0,f.jsx)("div",{className:"flex flex-row w-full",children:(0,f.jsx)(N.bK,{droppableId:"ROOT",children:e=>(0,f.jsxs)("div",{...e.droppableProps,ref:e.innerRef,className:"flex flex-col w-full justify-between mx-auto items-center space-y-4",children:[null==P?void 0:P.map((e,t)=>(console.log("render",{item:e,idx:t}),U&&(0,f.jsx)(N._l,{draggableId:null==e?void 0:e.id,index:t,children:s=>(0,f.jsx)("div",{className:"",...s.dragHandleProps,...s.draggableProps,ref:s.innerRef,children:(0,f.jsx)(Q,{onDelete:()=>{var t;return t=null==e?void 0:e.id,void T((0,O.Uy)(P,e=>e.filter(function(e){return(null==e?void 0:e.id)!==t})))},index:t})})},null==e?void 0:e.id))),e.placeholder]})})})}),(0,f.jsxs)("button",{className:"flex flex-row space-x-4 justify-center items-center rounded-xl border  cursor-pointer w-80 h-16 my-4 bg-blue-100",onClick:function(){T((0,O.Uy)(P,e=>{e.push({id:(0,y.Vj)(),action:{actionType:p.Rest,valveState:!1},target:{targetType:m.Time,value:10}})}))},children:[(0,f.jsx)(b.OzW,{color:"#1180EF",size:30}),(0,f.jsx)("p",{className:"text-[#1180EF] font-bold text-lg",children:"Add steps"})]})]})]})]})}},3842:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(5893),l=s(7136),r=s(1121),a=s(7094),i=s(4554),o=s(2290);s(7294);var c=s(1163),d=()=>{let{connectButtonDisplay:e}=(0,o.Z)(),{selectedPage:t,setSelectedPage:s}=(0,o.Z)(),i=(0,c.useRouter)();return(0,n.jsx)("div",{className:"flex justify-center w-full fixed bottom-0 bg-white z-50",children:(0,n.jsx)(l.eBu,{space:4,children:(0,n.jsxs)("div",{className:"flex justify-between  flex-row",children:[(0,n.jsx)(l.zxk,{hierarchy:"Formula"===t?"primary":"secondary",kind:"transparent",label:"Formula",icon:()=>(0,n.jsx)(r.h1P,{}),onPress:()=>{s("Formula"),i.push("/")}}),(0,n.jsx)(l.zxk,{hierarchy:"Setting"===t?"primary":"secondary",kind:"transparent",label:"Settings",icon:()=>(0,n.jsx)(a.Fnt,{}),onPress:()=>{s("Setting"),i.push("/setting")}})]})})})},x=s(80),u=()=>{let{connectButtonStyle:e,connectButtonText:t,selectedPage:s}=(0,o.Z)(),r=(0,c.useRouter)();return(0,n.jsxs)("div",{className:"flex justify-between items-center m-4",children:[(0,n.jsx)("div",{className:"cursor-pointer",onClick:()=>{"/lab"==r.pathname&&r.push("/")},children:(0,n.jsx)(l.s01,{size:"small",children:"/lab"==r.pathname?"◀ Back":s})}),(0,n.jsx)(l.zxk,{label:t,hierarchy:"primary",icon:()=>(0,n.jsx)(x.Vdu,{}),onPress:()=>{(0,i.s0)()},kind:e})]})},h=e=>{let{children:t}=e;return(0,n.jsxs)(l.Kqy,{space:4,children:[(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"mb-[56px]",children:t}),(0,n.jsx)(d,{})]})}}},function(e){e.O(0,[838,817,509,365,594,630,317,388,125,774,888,179],function(){return e(e.s=7503)}),_N_E=e.O()}]);