(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{45824:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return t(11870)}])},77505:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var a=t(85893),l=t(67294),n=t(12780),r=t(23482);const i=l.forwardRef(((e,s)=>{let{className:t,orientation:l="horizontal",decorative:i=!0,...c}=e;return(0,a.jsx)(n.f,{ref:s,decorative:i,orientation:l,className:(0,r.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",t),...c})}));i.displayName=n.f.displayName},11870:function(e,s,t){"use strict";t.r(s),t.d(s,{SettingsPage:function(){return $},default:function(){return E}});var a=t(85893),l=t(16702),n=t(86204),r=t(67294),i=t(65058),c=t(37039),o=t(93513),d=t(23482);const x=r.forwardRef(((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,d.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...l})}));x.displayName="Card";const m=r.forwardRef(((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",t),...l})}));m.displayName="CardHeader";const h=r.forwardRef(((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("h3",{ref:s,className:(0,d.cn)("text-2xl font-semibold leading-none tracking-tight",t),...l})}));h.displayName="CardTitle";const u=r.forwardRef(((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("p",{ref:s,className:(0,d.cn)("text-sm text-muted-foreground",t),...l})}));u.displayName="CardDescription";const j=r.forwardRef(((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,d.cn)("p-6 pt-0",t),...l})}));j.displayName="CardContent";const f=r.forwardRef(((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:(0,d.cn)("flex items-center p-6 pt-0",t),...l})}));f.displayName="CardFooter";var p=t(30080),w=t(59463);const b=e=>{let{index:s}=e;const{connected:t,calibration:n,setCalibration:d}=(0,i.Z)(),[f,b]=(0,r.useState)(new Array(100).fill({temperature:0,power:0})),{t:g}=(0,c.$G)(),{flowmeterDisplay:N}=(0,i.Z)(),[y,v]=(0,r.useState)(!1),k=(0,a.jsx)(a.Fragment,{}),[C,P]=(0,r.useState)(!0),[S,L]=(0,r.useState)(N[s].flowCount),[T,R]=(0,r.useState)(1e3);return(0,r.useEffect)((()=>{L(N[s].flowCount)}),[N,s]),(0,a.jsxs)(a.Fragment,{children:[y&&(0,a.jsx)(l.u_l,{size:"small",title:g("Calibrate flowmeter"),onClose:()=>v(!1),primaryAction:{label:"OK",onPress:()=>{v(!1),function(){var e=S,t=e/N[s].flowCount*n.flowmeter[s];console.log("calibration/ ",{calibration:n,suggestedValue:e,previousValue:N[s].flowCount,currentCalibration:n.flowmeter[s],newCalibration:t}),t<0||t>1e3?console.warn("Invalid calibation"):d((0,o.Uy)(n,(e=>(e.flowmeter[s]=t,e))))}()}},secondaryAction:{label:"Cancel",onPress:()=>v(!1)},children:(0,a.jsxs)(l.Kqy,{space:8,children:[(0,a.jsx)(l.jL0,{kind:"informative",title:g("Notice"),description:g("This calibration process is to set the conversion between flowmeter pulses count with the actual total weight of water extracted, specify how much it is actually weight to update the conversion"),action:{label:g("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,a.jsx)(l.RWL,{type:"single",name:"value",label:g("Real weight (gram)"),value:S,onChange:e=>{L(e)},minValue:0,maxValue:T,step:1})]})}),(0,a.jsxs)(x,{className:(0,w.cn)("w-auto border flex-grow bg-white h-full self-center hover:border-purple-700",N[s].flowRate>0?" text-green-900 border border-green-600":"border-black border text-black"),children:[(0,a.jsxs)(m,{children:[(0,a.jsxs)("div",{className:"flex justify-between space-x-1 items-center",children:[(0,a.jsxs)(h,{children:[g("Group")," ",s+1]}),(0,a.jsx)("button",{onClick:function(){0!=S&&(R(Math.max(2*S,200)),v(!0))},style:{borderRadius:"8px",border:"1px solid",padding:"8px"},className:"text-back bg-white hover:bg-black hover:text-white",children:(0,a.jsx)(p.b9P,{className:""})})]}),(0,a.jsx)(l.izJ,{}),(0,a.jsx)(u,{children:(0,a.jsxs)("div",{className:"h-16  flex flex-col justify-evenly space-y-4 mt-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:g("Flowrate ")}),(0,a.jsxs)("h1",{className:"text-xl",children:[N[s].flowRate," gram/s"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:g("Weight")}),(0,a.jsxs)("h1",{className:"text-xl",children:[N[s].flowCount," gram"]})]})]})})]}),(0,a.jsx)(j,{children:C?(0,a.jsx)(a.Fragment,{children:k}):null})]})]})};var g=t(55903),N=t(64399),y=t(19151);const v=e=>{let{index:s}=e;var t;const{pidDisplay:n,calibration:d,setCalibration:w}=(0,i.Z)(),{connected:b}=(0,i.Z)(),[v,k]=(0,r.useState)(new Array(100).fill({temperature:0,power:0})),C=(null===(t=v[-1])||void 0===t?void 0:t.temperature)||0;(0,r.useEffect)((()=>{if(void 0==n[s].powerSamples)return;const e=[];for(var t=0;t<n[s].powerSamples.length;t++)e.push({power:n[s].powerSamples[t],temperature:Math.round(10*n[s].temperatureSamples[t])/10,target:Math.round(10*d.pid[s].targetTemperature)/10});k(e)}),[n,s,d]);const{t:P}=(0,c.$G)(),S=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.RWL,{type:"single",name:"value",label:P("Temperature"),value:d.pid[s].targetTemperature,onChange:e=>{w((0,o.Uy)(d,(t=>(t[s].targetTemperature=e,t))))},minValue:0,maxValue:200,step:1,disabled:!b})}),[L,T]=(0,r.useState)(!0),R=(0,a.jsxs)("div",{className:"flex flex-wrap justify-center space-x-1 space-y-1 mb-4",children:[(0,a.jsx)(l.zxk,{onPress:()=>{},hierarchy:"primary",kind:"outline",label:"Test",size:"small",icon:()=>(0,a.jsx)(y.WuV,{})}),(0,a.jsx)(l.zxk,{onPress:()=>{w((0,o.Uy)(d,(e=>{e.pid[s].targetTemperature=110,e[s].activeRange=2,e[s].proportional=3.2,e[s].integral=.2,e[s].derivative=5})))},hierarchy:"danger",kind:"outline",size:"small",label:"Reset",icon:()=>(0,a.jsx)(N.Z4w,{})})]});return(0,a.jsxs)(x,{className:"w-auto",children:[(0,a.jsxs)(m,{children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)(h,{children:[P("Channel")," ",s+1]}),(0,a.jsx)(l.rsf,{value:d.pid[s].isActive,onChange:e=>{w((0,o.Uy)(d,(t=>(t.pid[s].isActive=e,t))))},label:P("Active")})]}),(0,a.jsx)(g.j,{}),(0,a.jsx)(u,{children:d.pid[s].isActive?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x,{className:"h-40 bg-white",children:(0,a.jsxs)("div",{className:"_chartDisplay ",children:[(0,a.jsx)(l.wWH,{hideLegend:!1,hideXAxis:!0,dataKey:"name",categories:["temperature","power","target"],disableAnimation:!0,hideYAxis:!0,hideTooltip:!1,data:v})," ",(0,a.jsxs)("div",{className:"right-32 top-32 text-red-200 flex flex-row m-4",children:[(0,a.jsx)("h1",{className:" text-9xl",children:C}),(0,a.jsx)("h1",{className:"text-xl",children:"\xb0C"})]})]})})}):(0,a.jsx)(a.Fragment,{children:P("This PID channel is currently disabled")})})]}),d.pid[s].isActive?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{children:L?(0,a.jsxs)(a.Fragment,{children:[R,S]}):null}),(0,a.jsx)(f,{onClick:()=>{T(!L)},className:"justify-center",children:L?(0,a.jsx)(p.Faw,{}):(0,a.jsx)(p.Yc6,{})})]}):null]})};var k=t(15409),C=t(24862),P=t(22845),S=t(19314),L=t(11163),T=t(93181),R=t(7696),A=t(52091),F=t(11570);const _=e=>{let{index:s}=e;const{pidState:t,setPidState:n,pidDisplay:d,calibration:f,setCalibration:b,pressure:N,setPressure:y}=(0,i.Z)(),{connected:v}=(0,i.Z)(),{t:k}=(0,c.$G)(),[C,P]=(0,r.useState)(!1),[S,L]=(0,r.useState)(!0);return(0,a.jsxs)(a.Fragment,{children:[C&&(0,a.jsx)(l.u_l,{size:"small",title:k("Pressure sensor"),onClose:()=>P(!1),primaryAction:{label:"OK",onPress:()=>{P(!1)}},secondaryAction:{label:"Cancel",onPress:()=>P(!1)},children:(0,a.jsxs)(l.Kqy,{space:8,children:[(0,a.jsx)(l.jL0,{kind:"informative",title:k("Notice"),description:k("There are many type of pressure sensor, each will have a different measuring range. What is the range of your pressure sensor in MPa ?"),action:{label:k("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,a.jsx)(l.RWL,{type:"single",name:"value",label:k("Max range (MPa)"),value:f.pressure[s],onChange:e=>{b((0,o.Uy)(f,(t=>{t.pressure[s]=e})))},minValue:0,maxValue:3.2,step:.1})]})}),(0,a.jsxs)(x,{className:(0,w.cn)("w-auto border flex-grow bg-white h-full self-center hover:border-purple-700"),children:[(0,a.jsxs)(m,{children:[(0,a.jsxs)("div",{className:"flex justify-between space-x-1 items-center",children:[(0,a.jsxs)(h,{children:[k("Group")," ",s+1]}),(0,a.jsx)("button",{onClick:()=>{P(!0)},style:{borderRadius:"8px",border:"1px solid",padding:"8px"},className:"text-back bg-white hover:bg-black hover:text-white",children:(0,a.jsx)(p.b9P,{className:""})})]}),(0,a.jsx)(g.j,{}),(0,a.jsx)(u,{children:(0,a.jsx)("div",{className:"h-8  flex flex-col justify-evenly space-y-4 mt-6",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:k("Pressure ")}),(0,a.jsxs)("h1",{className:"text-3xl",children:[N[s]," bar"]})]})})})]}),(0,a.jsx)(j,{})]})]})};var W=t(8714),I=t(77505);const D=e=>{let{index:s}=e;const{t:t}=(0,c.$G)(),[n,d]=(0,r.useState)(!0),{calibration:p,setCalibration:w}=(0,i.Z)();return(0,a.jsxs)(x,{className:"w-auto",children:[(0,a.jsxs)(m,{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)(h,{children:[t("Group")," ",s+1]})}),(0,a.jsx)(g.j,{}),(0,a.jsx)(u,{})]}),(0,a.jsxs)(j,{className:"flex flex-col gap-4",children:[(0,a.jsx)(l.jL0,{kind:0==p.dose[s].duration?"positive":"warning",title:t("Current behaviour"),description:0==p.dose[s].duration?"Dispense water at group head":"Dispense hot water valve for ".concat(p.dose[s].duration," second, group head will NOT open")}),(0,a.jsx)(l.RWL,{type:"single",name:"value",label:t("Dose duration (seconds)"),value:p.dose[s].duration,onChange:e=>{w((0,o.Uy)(p,(t=>{t.dose[s].duration=e})))},minValue:0,maxValue:10,step:.5})]}),(0,a.jsx)(f,{onClick:()=>{d(!n)},className:"justify-center"})]})},G=()=>{const{t:e}=(0,c.$G)(),[s,t]=(0,W._)("pidSettings",!1),[i,o]=(0,r.useState)(!1),d=()=>{t(!s)},x=(0,r.useRef)(null);return(0,a.jsxs)(k.w,{ref:x,className:"w-full max-w-2xl transform bg-gradient-to-r from-white to-white transition duration-500 select-none",children:[(0,a.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:d,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.YzZ,{className:"ml-4 text-black"}),(0,a.jsx)("h2",{className:"mx-4 font-bold text-black",children:e("Heater")})]}),s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,a.jsx)(p.AeI,{className:"mr-4 text-black"})]}),s?(0,a.jsxs)("div",{className:"p-4 gap-4",children:[(0,a.jsx)(l.jL0,{kind:"positive",title:"What is Heater ?",description:"There are 3 channel of PID-enabled heater. You can configure each channel with temperature setpoint. We support the following type of sensor: DS18B20, NTC(10K), NTC(100K). DS18B20 is strongly recommended"}),(0,a.jsxs)("div",{className:"flex w-full flex-col justify-center gap-4 mt-4",children:[(0,a.jsx)(v,{index:0}),(0,a.jsx)(v,{index:1}),(0,a.jsx)(v,{index:2})]}),(0,a.jsx)(P.i,{onClick:d,className:"align-center justify-center",children:(0,a.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null,i&&(0,a.jsx)(l.u_l,{title:"Calibrate flowmeter",size:"small",onClose:()=>o(!1),primaryAction:{label:"OK",onPress:()=>o(!1)},secondaryAction:{label:"Cancel",onPress:()=>o(!1)},autoFocus:!1,children:(0,a.jsx)(l.eBu,{space:4,children:(0,a.jsx)(l.uTp,{size:"medium",children:"Content"})})})]})},Z=()=>{const[e,s]=(0,W._)("flowmeterSettings",!1),{t:t}=(0,c.$G)(),i=()=>{s(!e)},o=(0,r.useRef)(null);return(0,a.jsxs)(k.w,{ref:o,className:"w-full max-w-2xl transform bg-gradient-to-r bg-white transition duration-500 select-none",children:[(0,a.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:i,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.E3g,{className:"ml-4 text-black"}),(0,a.jsx)("h2",{className:"mx-4 font-bold text-black",children:t("Flowmeter")})]}),e?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,a.jsx)(p.AeI,{className:"mr-4 text-black"})]}),e?(0,a.jsxs)("div",{className:"p-4 space-y-4",children:[(0,a.jsx)(l.jL0,{kind:"positive",title:"What is flowmeter ?",description:"Flowmeter is used to measure how much water is going to the puck, note that this is not much coffee you get because there is always water losses inside the puck, or simply released"}),(0,a.jsx)(l.jL0,{kind:"informative",title:"How to calibrate ?",description:"First, place a scale underneath each group, press any water button. Water will come out, wait until it reach around 100 grams, hit stop. Then click the Calibrate button and input the ACTUAL weight",action:{label:"See Video",onPress:()=>{}}}),(0,a.jsxs)("div",{className:"flex w-full flex-row flex-wrap justify-evenly  h-fit gap-4",children:[(0,a.jsx)(b,{index:0}),(0,a.jsx)(b,{index:1}),(0,a.jsx)(b,{index:2})]}),(0,a.jsx)(P.i,{onClick:i,className:"align-center justify-center",children:(0,a.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},z=()=>{const[e,s]=(0,W._)("pressureSettings",!1),{t:t}=(0,c.$G)(),n=()=>{s(!e),console.log("toggle expand")},i=(0,r.useRef)(null);return(0,a.jsxs)(k.w,{ref:i,className:"w-full max-w-2xl transform bg-gradient-to-r from-white to-white transition duration-500 select-none",children:[(0,a.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:n,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(T.vlJ,{className:"ml-4 text-black"}),(0,a.jsx)("h2",{className:"mx-4 font-bold text-black",children:t("Pressure")})]}),e?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,a.jsx)(p.AeI,{className:"mr-4 text-black"})]}),e?(0,a.jsxs)("div",{className:"p-4 space-y-4",children:[(0,a.jsx)(l.jL0,{kind:"positive",title:"What is Pressure sensor ?",description:"Pressure sensor is used to measure the pressure at puck, this reflect. There is 2 channel on ROSARIO. To ensure every shot of espresso are the same, the machine will also check if the pressure profiling match it's previous and display error. Normally due to wrong coffee compression method"}),(0,a.jsx)(l.jL0,{kind:"informative",title:"How to calibrate ?",description:"There are lots of pressure sensor type with different ranges. The highest pressure in coffee machine is around 12 bar (1.2Mpa) so you should get one above this limit and specify the range below.",action:{label:"See Video",onPress:()=>{}}}),(0,a.jsxs)("div",{className:"flex w-full flex-row flex-wrap justify-evenly  h-fit gap-4",children:[(0,a.jsx)(_,{index:0}),(0,a.jsx)(_,{index:1}),(0,a.jsx)(_,{index:2}),(0,a.jsx)(_,{index:3})]}),(0,a.jsx)(P.i,{onClick:n,className:"align-center justify-center",children:(0,a.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},V=()=>{const{locale:e,locales:s,defaultLocale:t}=(0,L.useRouter)(),[n,o]=(0,W._)("keyboardSettings",!1),{grinderSettings:d}=(0,i.Z)(),{t:x}=(0,c.$G)(),m=()=>{o(!n)},h=(0,r.useRef)(null);return(0,a.jsxs)(k.w,{ref:h,className:"w-full max-w-2xl transform bg-gradient-to-r bg-white transition duration-500 select-none",children:[(0,a.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:m,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(R.Ll6,{className:"ml-4 text-black"}),(0,a.jsx)("h2",{className:"mx-4 font-bold text-black",children:x("Keyboard")})]}),n?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,a.jsx)(p.AeI,{className:"mr-4 text-black"})]}),n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(S.G,{className:"flex w-full flex-col justify-center space-y-4 py-4",children:[(0,a.jsx)(l.jL0,{kind:"informative",title:"Customize the behaviour",description:"In most coffee machine, there is a group button that normally will just dispense hot water. This button can also be configure to control the hot water line. You can change that behaviour here"}),(0,a.jsx)(D,{index:0}),(0,a.jsx)(D,{index:1}),(0,a.jsx)(D,{index:2})]}),(0,a.jsx)(P.i,{onClick:m,className:"align-center justify-center",children:(0,a.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},U=()=>{const{locale:e,locales:s,defaultLocale:t}=(0,L.useRouter)(),[n,d]=(0,W._)("networkSettings",!1),{grinderSettings:x}=(0,i.Z)(),{t:m}=(0,c.$G)(),h=()=>{d(!n),console.log("toggle expand")},u=(0,r.useRef)(null),{calibration:j,setCalibration:f}=(0,i.Z)();return(0,a.jsxs)(k.w,{ref:u,className:"w-full max-w-2xl transform bg-gradient-to-tr bg-white transition duration-500 select-none",children:[(0,a.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:h,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(A._0,{className:"ml-4 text-black"}),(0,a.jsx)("h2",{className:"mx-4 font-bold text-black",children:m("Network")})]}),n?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,a.jsx)(p.AeI,{className:"mr-4 text-black"})]}),n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(S.G,{className:"flex w-full justify-center space-y-4 p-8",children:[(0,a.jsx)(l.jL0,{kind:"positive",title:m("Notice"),description:m("This will enable Internet connection for this machine, allowing it to display time, tracking the coffee quality by comparing flowmeter charts, notify business owner with daily report, ..."),action:{label:m("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,a.jsxs)("div",{className:"flex flex-row justify-between w-full gap-4",children:[(0,a.jsx)("div",{className:"w-full flex-grow",children:(0,a.jsx)(l.nvn,{name:"Wifi",label:"Wifi",placeholder:"",value:j.network.ssid||"",onChange:e=>f((0,o.Uy)(j,(s=>{s.network.ssid=e})))})}),(0,a.jsx)("div",{className:"w-full flex-grow",children:(0,a.jsx)(l.nvn,{name:"Password",label:"Password",placeholder:"",value:j.network.password||"",onChange:e=>f((0,o.Uy)(j,(s=>{s.network.password=e}))),type:"password"})})]}),(0,a.jsx)(l.nvn,{name:"Token",label:"Access Token",placeholder:"",value:j.network.token||"",onChange:e=>f((0,o.Uy)(j,(s=>{s.network.token=e}))),hint:"ANTLRXXXXXXXX"}),(0,a.jsx)(I.Z,{})]}),(0,a.jsx)(P.i,{onClick:h,className:"align-center justify-center",children:(0,a.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},X=()=>{const[e,s]=(0,W._)("displaySettings",!1),{t:t}=(0,c.$G)(),d=()=>{s(!e)},x=(0,r.useRef)(null),{calibration:m,setCalibration:h}=(0,i.Z)();return(0,a.jsxs)(k.w,{ref:x,className:"w-full max-w-2xl transform bg-gradient-to-tr bg-white transition duration-500 select-none",children:[(0,a.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:d,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.xJ7,{className:"ml-4 text-black"}),(0,a.jsx)("h2",{className:"mx-4 font-bold text-black",children:t("Display")})]}),e?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,a.jsx)(p.AeI,{className:"mr-4 text-black"})]}),e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(S.G,{className:"flex w-full justify-center space-y-4 p-8",children:[(0,a.jsx)(l.jL0,{kind:"informative",title:t("Notice"),description:t("There is 2 line on LCD display, each line has maximum width of 16 characters, you can customize the content of each line here but only English character is supported"),action:{label:t("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,a.jsxs)("div",{className:"flex flex-row justify-between w-full gap-4",children:[(0,a.jsx)("div",{className:"w-full flex-grow",children:(0,a.jsx)(l.nvn,{name:"Line 1",label:"Display - Line 1",placeholder:"",value:m.display.line1||"",onChange:e=>h((0,o.Uy)(m,(s=>{s.display.line1=e})))})}),(0,a.jsx)("div",{className:"w-full flex-grow",children:(0,a.jsx)(l.nvn,{name:"Line 2",label:"Display - Line 2",placeholder:"",value:m.display.line2||"",onChange:e=>h((0,o.Uy)(m,(s=>{s.display.line2=e})))})})]}),(0,a.jsx)(I.Z,{})]}),(0,a.jsx)(P.i,{onClick:d,className:"align-center justify-center",children:(0,a.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},$=()=>(0,a.jsx)(F.default,{children:(0,a.jsxs)("div",{className:" flex flex-col items-center  p-8 space-y-4",children:[(0,a.jsx)(G,{}),(0,a.jsx)(Z,{}),(0,a.jsx)(z,{}),(0,a.jsx)(V,{}),(0,a.jsx)(U,{}),(0,a.jsx)(X,{})]})});var E=$}},function(e){e.O(0,[838,396,660,817,296,509,365,391,653,317,648,676,870,570,774,888,179],(function(){return s=45824,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
//# sourceMappingURL=setting-da41907a8c15fec0.js.map