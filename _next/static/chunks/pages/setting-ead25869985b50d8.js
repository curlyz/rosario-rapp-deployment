(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{5824:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return t(9590)}])},9590:function(e,s,t){"use strict";t.r(s),t.d(s,{SettingsPage:function(){return V},default:function(){return W}});var l=t(5893),a=t(8210),n=t(6204),r=t(1054),i=t(80),c=t(7294),o=t(6011),x=t(4862),d=t(9314),m=t(2845),u=t(5903),h=t(4399),j=t(9151),f=t(8908),p=t(2091),g=t(9186);let w=c.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,g.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});w.displayName="Card";let y=c.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,g.cn)("flex flex-col space-y-1.5 p-6",t),...a})});y.displayName="CardHeader";let v=c.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("h3",{ref:s,className:(0,g.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});v.displayName="CardTitle";let N=c.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("p",{ref:s,className:(0,g.cn)("text-sm text-muted-foreground",t),...a})});N.displayName="CardDescription";let b=c.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,g.cn)("p-6 pt-0",t),...a})});b.displayName="CardContent";let C=c.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,g.cn)("flex items-center p-6 pt-0",t),...a})});C.displayName="CardFooter";var k=t(2290),R=t(3513);let P=e=>{let{index:s}=e,{pidState:t,setPidState:n,pidDisplay:r}=(0,k.Z)(),{connected:o}=(0,k.Z)(),[x,d]=(0,c.useState)(Array(100).fill({temperature:0,power:0}));(0,c.useEffect)(()=>{if(console.warn("draft",r[s]),void 0==r[s].powerSamples)return;let e=[];for(var l=0;l<r[s].powerSamples.length;l++)e.push({power:r[s].powerSamples[l],temperature:r[s].temperatureSamples[l],target:t[s].targetTemperature});d(e)},[r,s,t]);let m=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.RWL,{type:"single",name:"value",label:"Temperature",value:t[s].targetTemperature,onChange:e=>{n((0,R.Uy)(t,t=>{t[s].targetTemperature=e}))},minValue:30,maxValue:200,step:1,disabled:!o}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:"Active Range",value:t[s].activeRange,onChange:e=>{n((0,R.Uy)(t,t=>{t[s].activeRange=e}))},minValue:0,maxValue:10,step:1,disabled:!o}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:"Proportional",value:t[s].proportional,onChange:e=>{n((0,R.Uy)(t,t=>{t[s].proportional=e}))},minValue:0,maxValue:10,step:.1,disabled:!o}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:"integral",value:t[s].integral,onChange:e=>{n((0,R.Uy)(t,t=>{t[s].integral=e}))},minValue:0,maxValue:1,step:.1,disabled:!o}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:"Derivative",value:t[s].derivative,onChange:e=>{n((0,R.Uy)(t,t=>{t[s].derivative=e}))},minValue:0,maxValue:10,step:.1,disabled:!o})]}),[g,P]=(0,c.useState)(!1),T=(0,l.jsxs)("div",{className:"flex flex-wrap justify-center space-x-1 space-y-1 mb-4",children:[(0,l.jsx)(a.zxk,{onPress:()=>{},hierarchy:"secondary",kind:"outline",label:"90%",size:"small",icon:()=>(0,l.jsx)(f.w$t,{})}),(0,l.jsx)(a.zxk,{onPress:()=>{},hierarchy:"secondary",kind:"outline",label:"90*C",size:"small",icon:()=>(0,l.jsx)(p.YzZ,{})}),(0,l.jsx)(a.zxk,{onPress:()=>{},hierarchy:"primary",kind:"outline",label:"Test",size:"small",icon:()=>(0,l.jsx)(j.WuV,{})}),(0,l.jsx)(a.zxk,{onPress:()=>{n((0,R.Uy)(t,e=>{e[s].targetTemperature=110,e[s].activeRange=2,e[s].proportional=3.2,e[s].integral=.2,e[s].derivative=5}))},hierarchy:"danger",kind:"outline",size:"small",label:"Reset",icon:()=>(0,l.jsx)(h.Z4w,{})})]});return(0,l.jsxs)(w,{className:"w-auto",children:[(0,l.jsxs)(y,{children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)(v,{children:["Channel ",s+1]}),(0,l.jsx)(a.rsf,{value:t[s].isActive,onChange:e=>{n((0,R.Uy)(t,t=>{t[s].isActive=e}))},disabled:!o,label:"Active"})]}),(0,l.jsx)(u.j,{}),(0,l.jsx)(N,{children:t[s].isActive?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(w,{className:"h-40 bg-white",children:[(0,l.jsx)(a.wWH,{hideLegend:!1,hideXAxis:!0,dataKey:"name",categories:["temperature","power","target"],disableAnimation:!0,hideYAxis:!0,hideTooltip:!1,data:x})," "]})}):(0,l.jsx)(l.Fragment,{children:"This PID channel is currently disabled"})})]}),t[s].isActive?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{children:g?(0,l.jsxs)(l.Fragment,{children:[T,m]}):null}),(0,l.jsx)(C,{onClick:()=>{P(!g)},className:"justify-center",children:g?(0,l.jsx)(i.Faw,{}):(0,l.jsx)(i.Yc6,{})})]}):null]})},T=e=>{let{index:s}=e,[t,n]=(0,c.useState)(0),[r,i]=(0,c.useState)(0);return(0,l.jsx)(a.eBu,{space:4,children:(0,l.jsxs)("div",{className:"h-8 w-fit  flex-grow flex flex-col items-center space-y-3 ",children:[(0,l.jsx)("h1",{className:"text-white text-4xl",children:"20"}),(0,l.jsx)("h1",{className:"text-zinc-100",children:"ms/s"})]})})},z=e=>{let{key:s,index:t}=e,{grinderSettings:r,setGrinderSettings:c}=(0,k.Z)();return console.log("Grinder/ create ",s),(0,l.jsxs)("div",{className:"flex flex-col  rounded-xl bg-white p-4 space-y-4",children:[(0,l.jsx)(a.nvn,{name:"ingredient",label:"Ingredient",placeholder:"What is the coffee bean ?",value:r[t].name,onChange:e=>{c((0,R.Uy)(r,s=>{s[t].name=e}))}}),(0,l.jsx)("div",{className:"flex flex-row justify-stretch space-x-4 flex-grow",children:(0,l.jsxs)(a.oeA,{space:8,children:[(0,l.jsx)(a.sgG,{width:"4/5",children:(0,l.jsx)(a.mgC,{value:r[t].connectionType,onChange:e=>{c((0,R.Uy)(r,s=>{s[t].connectionType=e}))},name:"connectionType",label:"Connection",placeholder:"How is the grinder connected ?",options:[{value:"wire",label:"Wire",kind:"two-line",secondLine:"Direct wiring using the PID port"},{value:"ble",label:"Bluetooth",kind:"two-line",secondLine:"Pair to a Bluetooth scale"}]})}),(0,l.jsx)(a.sgG,{width:"1/5",children:(0,l.jsx)(a.Ki0,{name:"ID",value:r[t].connectionId,onChange:e=>{c((0,R.Uy)(r,s=>{s[t].connectionId=e}))},label:"ID"})})]})}),(0,l.jsxs)("div",{className:"flex flex-row my-4 space-x-4",children:[(0,l.jsx)(a.zxk,{label:"Calibrate",onPress:()=>{},hierarchy:"primary",kind:"outline",icon:()=>(0,l.jsx)(n.mdD,{})}),(0,l.jsx)(a.zxk,{label:"Test",onPress:()=>{},hierarchy:"primary",kind:"outline",icon:()=>(0,l.jsx)(j.WuV,{})}),(0,l.jsx)(a.zxk,{label:"Remove",onPress:()=>{},hierarchy:"danger",kind:"outline",icon:()=>(0,l.jsx)(i.ZkW,{})})]})]})};var A=t(8979);let I=()=>{let[e,s]=(0,c.useState)(!1),[t,r]=(0,c.useState)(!1),u=()=>{s(!e),console.log("toggle expand")},h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(!e&&h.current){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"),10),s=h.current.getBoundingClientRect().top-e;window.scrollTo({top:s,behavior:"smooth"})}},[e]),(0,l.jsxs)(o.w,{ref:h,className:"max-w-2xl w-full bg-gradient-to-r from-purple-600 to-red-600 transition duration-500 transform hover:scale-105",children:[(0,l.jsxs)(x.u,{className:"h-16 flex items-center justify-between flex-row",onClick:u,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(n.YzZ,{className:"ml-4 text-white"}),(0,l.jsx)("h2",{className:"text-white font-bold mx-4",children:"Heater"})]}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Ix0,{className:"mr-4 text-white"})}):(0,l.jsx)(i.AeI,{className:"mr-4 text-white"})]}),e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(d.G,{className:"flex flex-col justify-center space-y-4 py-4 w-full",children:[(0,l.jsx)(P,{index:0}),(0,l.jsx)(P,{index:1}),(0,l.jsx)(P,{index:2})]}),(0,l.jsx)(m.i,{onClick:u,className:"justify-center align-center",children:(0,l.jsx)(i.rWj,{className:"text-white m-4"})})]}):null,t&&(0,l.jsx)(a.u_l,{title:"Calibrate flowmeter",size:"small",onClose:()=>r(!1),primaryAction:{label:"OK",onPress:()=>r(!1)},secondaryAction:{label:"Cancel",onPress:()=>r(!1)},autoFocus:!1,children:(0,l.jsx)(a.eBu,{space:4,children:(0,l.jsx)(a.uTp,{size:"medium",children:"Content"})})})]})},S=()=>{let[e,s]=(0,c.useState)(!1),t=()=>{s(!e),console.log("toggle expand")},a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(!e&&a.current){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"),10),s=a.current.getBoundingClientRect().top-e;window.scrollTo({top:s,behavior:"smooth"})}},[e]),(0,l.jsxs)(o.w,{ref:a,className:"max-w-2xl my-4 bg-gradient-to-r from-blue-600 to-green-600 w-full transition duration-500 transform hover:scale-105",children:[(0,l.jsxs)(x.u,{className:"h-16 flex items-center justify-between flex-row",onClick:t,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(n.E3g,{className:"ml-4 text-white"}),(0,l.jsx)("h2",{className:"text-white font-bold mx-4",children:"Flowmeter"})]}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Ix0,{className:"mr-4 text-white"})}):(0,l.jsx)(i.AeI,{className:"mr-4 text-white"})]}),e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex flex-row items-center justify-evenly space-x-4 py-4 w-full flex-grow",children:[(0,l.jsx)(T,{index:0}),(0,l.jsx)(T,{index:1}),(0,l.jsx)(T,{index:2})]}),(0,l.jsx)(m.i,{onClick:t,className:"justify-center align-center",children:(0,l.jsx)(i.rWj,{className:"text-white m-4"})})]}):null]})},F=()=>{let[e,s]=(0,c.useState)(!1),{grinderSettings:t}=(0,k.Z)(),a=()=>{s(!e),console.log("toggle expand")},n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(!e&&n.current){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"),10),s=n.current.getBoundingClientRect().top-e;window.scrollTo({top:s,behavior:"smooth"})}},[e]),(0,l.jsxs)(o.w,{ref:n,className:"max-w-2xl bg-gradient-to-r from-orange-600 to-yellow-600 w-full transition duration-500 transform hover:scale-105",children:[(0,l.jsxs)(x.u,{className:"h-16 flex items-center justify-between flex-row",onClick:a,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r.nXt,{className:"ml-4 text-white"}),(0,l.jsx)("h2",{className:"text-white font-bold mx-4",children:"Grinder"})]}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Ix0,{className:"mr-4 text-white"})}):(0,l.jsx)(i.AeI,{className:"mr-4 text-white"})]}),e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.G,{className:"flex flex-col justify-center space-y-4 py-4 w-full",children:t.map((e,s)=>(console.log("Grinder/ create with",{item:e,index:s}),(0,l.jsx)(z,{index:s},s)))}),(0,l.jsx)(m.i,{onClick:a,className:"justify-center align-center",children:(0,l.jsx)(i.rWj,{className:"text-white m-4"})})]}):null]})},V=()=>(0,l.jsx)(A.default,{children:(0,l.jsx)(a.eBu,{space:16,children:(0,l.jsxs)("div",{className:"items-center flex flex-col",children:[(0,l.jsx)(I,{}),(0,l.jsx)(S,{}),(0,l.jsx)(F,{})]})})});var W=V}},function(e){e.O(0,[838,396,660,817,509,127,391,365,653,510,415,153,979,774,888,179],function(){return e(e.s=5824)}),_N_E=e.O()}]);