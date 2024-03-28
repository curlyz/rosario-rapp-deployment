(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{45824:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return t(60521)}])},57588:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var l=t(85893),a=t(67294),n=t(12780),r=t(9186);const i=a.forwardRef(((e,s)=>{let{className:t,orientation:a="horizontal",decorative:i=!0,...c}=e;return(0,l.jsx)(n.f,{ref:s,decorative:i,orientation:a,className:(0,r.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...c})}));i.displayName=n.f.displayName},60521:function(e,s,t){"use strict";t.r(s),t.d(s,{SettingsPage:function(){return K},default:function(){return $}});var l=t(85893),a=t(16702),n=t(86204),r=t(67294),i=t(17303),c=t(37039),o=t(93513),d=t(9186);const x=r.forwardRef(((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,d.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})}));x.displayName="Card";const m=r.forwardRef(((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",t),...a})}));m.displayName="CardHeader";const h=r.forwardRef(((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("h3",{ref:s,className:(0,d.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})}));h.displayName="CardTitle";const u=r.forwardRef(((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("p",{ref:s,className:(0,d.cn)("text-sm text-muted-foreground",t),...a})}));u.displayName="CardDescription";const f=r.forwardRef(((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,d.cn)("p-6 pt-0",t),...a})}));f.displayName="CardContent";const j=r.forwardRef(((e,s)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:s,className:(0,d.cn)("flex items-center p-6 pt-0",t),...a})}));j.displayName="CardFooter";var p=t(30080),w=t(56475);const g=e=>{let{index:s}=e;const{connected:t,calibration:n,setCalibration:d}=(0,i.Z)(),[j,g]=(0,r.useState)(new Array(100).fill({temperature:0,power:0})),{t:b}=(0,c.$G)(),{flowmeterDisplay:N}=(0,i.Z)(),[y,v]=(0,r.useState)(!1),k=(0,l.jsx)(l.Fragment,{}),[C,S]=(0,r.useState)(!0),[P,L]=(0,r.useState)(N[s].flowCount),[R,T]=(0,r.useState)(1e3),[A,F]=(0,r.useState)(n.fmSim[s]);return(0,r.useEffect)((()=>{L(N[s].flowCount)}),[N,s]),(0,l.jsxs)(l.Fragment,{children:[y&&(0,l.jsx)(a.u_l,{size:"small",title:b("Calibrate flowmeter"),onClose:()=>v(!1),primaryAction:{label:"OK",onPress:()=>{v(!1),function(){var e=P,t=e/N[s].flowCount*n.flowmeter[s];console.log("calibration/ ",{calibration:n,suggestedValue:e,previousValue:N[s].flowCount,currentCalibration:n.flowmeter[s],newCalibration:t}),t<0||t>1e3?console.warn("Invalid calibation"):d((0,o.Uy)(n,(e=>(e.flowmeter[s]=t,e.fmSim[s]=A,e))))}()}},secondaryAction:{label:"Cancel",onPress:()=>v(!1)},children:(0,l.jsxs)(a.Kqy,{space:8,children:[(0,l.jsx)(a.jL0,{kind:"informative",title:b("Notice"),description:b("This calibration process is to set the conversion between flowmeter pulses count with the actual total weight of water extracted, specify how much it is actually weight to update the conversion"),action:{label:b("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,l.jsxs)(a.oeA,{space:4,align:"center",children:[(0,l.jsx)(a.sgG,{width:"4/5",children:(0,l.jsx)(a.RWL,{type:"single",name:"value",label:b("Real weight (gram)"),value:P,onChange:e=>{L(e)},minValue:0,maxValue:R,step:1})}),(0,l.jsx)(a.sgG,{width:"1/5",children:(0,l.jsx)(a.Ki0,{value:P,onChange:e=>{L(e)},label:"Weight",minValue:0,maxValue:500,step:1})})]}),(0,l.jsx)(a.jL0,{kind:"informative",title:b("Simulate flowrate"),description:b("For machine that doesn't have flowmeter, you can simulate the flowrate by setting the value below")}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:b("Simulatated flowrate (gram/s)"),value:A,onChange:e=>{F(e)},minValue:0,maxValue:20,step:1})]})}),(0,l.jsxs)(x,{className:(0,w.cn)("w-auto border flex-grow bg-white h-full self-center hover:border-purple-700",N[s].flowRate>0?" text-green-900 border border-green-600":"border-black border text-black"),children:[(0,l.jsxs)(m,{children:[(0,l.jsxs)("div",{className:"flex justify-between space-x-1 items-center",children:[(0,l.jsxs)(h,{children:[b("Group")," ",s+1]}),(0,l.jsx)("button",{onClick:function(){0!=P&&(T(Math.max(2*P,200)),v(!0))},style:{borderRadius:"8px",border:"1px solid",padding:"8px"},className:"text-back bg-white hover:bg-black hover:text-white",children:(0,l.jsx)(p.b9P,{className:""})})]}),(0,l.jsx)(a.izJ,{}),(0,l.jsx)(u,{children:(0,l.jsxs)("div",{className:"h-16  flex flex-col justify-evenly space-y-4 mt-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:b("Flowrate ")}),(0,l.jsxs)("h1",{className:"text-xl",children:[N[s].flowRate," gram/s"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:b("Weight")}),(0,l.jsxs)("h1",{className:"text-xl",children:[N[s].flowCount," gram"]})]})]})})]}),(0,l.jsx)(f,{children:C?(0,l.jsx)(l.Fragment,{children:k}):null})]})]})};var b=t(55903),N=t(64399),y=t(19151);const v=e=>{let{index:s}=e;const{pidDisplay:t,calibration:n,setCalibration:d}=(0,i.Z)(),{connected:w}=(0,i.Z)(),[g,v]=(0,r.useState)(new Array(100).fill({temperature:0,power:0})),[k,C]=(0,r.useState)(0);(0,r.useEffect)((()=>{if(void 0==t[s].powerSamples)return;const e=[];for(var l=0;l<t[s].powerSamples.length;l++)e.push({power:t[s].powerSamples[l],temperature:Math.round(10*t[s].temperatureSamples[l])/10,target:Math.round(10*n.pid[s].targetTemperature)/10});console.log("update line draft",e),v(e),C(e[e.length-1].temperature)}),[t,s,n]);const{t:S}=(0,c.$G)(),P=(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.RWL,{type:"single",name:"value",label:S("Temperature"),value:n.pid[s].targetTemperature,onChange:e=>{d((0,o.Uy)(n,(t=>(t.pid[s].targetTemperature=e,t))))},minValue:0,maxValue:200,step:1,disabled:!w})}),[L,R]=(0,r.useState)(!0),T=(0,l.jsxs)("div",{className:"flex flex-wrap justify-center space-x-1 space-y-1 mb-4",children:[(0,l.jsx)(a.zxk,{onPress:()=>{},hierarchy:"primary",kind:"outline",label:"Test",size:"small",icon:()=>(0,l.jsx)(y.WuV,{})}),(0,l.jsx)(a.zxk,{onPress:()=>{d((0,o.Uy)(n,(e=>{e.pid[s].targetTemperature=110,e[s].activeRange=2,e[s].proportional=3.2,e[s].integral=.2,e[s].derivative=5})))},hierarchy:"danger",kind:"outline",size:"small",label:"Reset",icon:()=>(0,l.jsx)(N.Z4w,{})})]});return(0,l.jsxs)(x,{className:"w-auto",children:[(0,l.jsxs)(m,{children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)(h,{children:[S("Channel")," ",s+1]}),(0,l.jsx)(a.rsf,{value:n.pid[s].isActive,onChange:e=>{d((0,o.Uy)(n,(t=>(t.pid[s].isActive=e,t))))},label:S("Active")})]}),(0,l.jsx)(b.j,{}),(0,l.jsx)(u,{children:n.pid[s].isActive?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(x,{className:"h-40 bg-white",children:(0,l.jsxs)("div",{className:"relative z-10 w-full h-full",children:[(0,l.jsxs)("div",{className:"absolute inset-0 z-20 flex flex-row  items-left text-gray-200",children:[(0,l.jsx)("h1",{className:"text-9xl",children:k}),(0,l.jsx)("h1",{className:"text-xl",children:"\xb0C"})]}),(0,l.jsx)("div",{className:"absolute inset-0 z-10",children:(0,l.jsx)(a.wWH,{hideLegend:!1,hideXAxis:!0,dataKey:"name",categories:["temperature","power","target"],disableAnimation:!0,hideYAxis:!0,hideTooltip:!0,data:g})})]})})}):(0,l.jsx)(l.Fragment,{children:S("This PID channel is currently disabled")})})]}),n.pid[s].isActive?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{children:L?(0,l.jsxs)(l.Fragment,{children:[T,P]}):null}),(0,l.jsx)(j,{onClick:()=>{R(!L)},className:"justify-center",children:L?(0,l.jsx)(p.Faw,{}):(0,l.jsx)(p.Yc6,{})})]}):null]})};var k=t(62740),C=t(24862),S=t(22845),P=t(19314),L=t(11163),R=t(93181),T=t(52091),A=t(7696),F=t(34546);const W=e=>{let{index:s}=e;const{pidState:t,setPidState:n,pidDisplay:d,calibration:j,setCalibration:g,pressure:N,setPressure:y}=(0,i.Z)(),{connected:v}=(0,i.Z)(),{t:k}=(0,c.$G)(),[C,S]=(0,r.useState)(!1),[P,L]=(0,r.useState)(!0);return(0,l.jsxs)(l.Fragment,{children:[C&&(0,l.jsx)(a.u_l,{size:"small",title:k("Pressure sensor"),onClose:()=>S(!1),primaryAction:{label:"OK",onPress:()=>{S(!1)}},secondaryAction:{label:"Cancel",onPress:()=>S(!1)},children:(0,l.jsxs)(a.Kqy,{space:8,children:[(0,l.jsx)(a.jL0,{kind:"informative",title:k("Notice"),description:k("There are many type of pressure sensor, each will have a different measuring range. What is the range of your pressure sensor in MPa ?"),action:{label:k("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:k("Max range (MPa)"),value:j.pressure[s],onChange:e=>{g((0,o.Uy)(j,(t=>{t.pressure[s]=e})))},minValue:0,maxValue:3.2,step:.1})]})}),(0,l.jsxs)(x,{className:(0,w.cn)("w-auto border flex-grow bg-white h-full self-center hover:border-purple-700"),children:[(0,l.jsxs)(m,{children:[(0,l.jsxs)("div",{className:"flex justify-between space-x-1 items-center",children:[(0,l.jsxs)(h,{children:[k("Group")," ",s+1]}),(0,l.jsx)("button",{onClick:()=>{S(!0)},style:{borderRadius:"8px",border:"1px solid",padding:"8px"},className:"text-back bg-white hover:bg-black hover:text-white",children:(0,l.jsx)(p.b9P,{className:""})})]}),(0,l.jsx)(b.j,{}),(0,l.jsx)(u,{children:(0,l.jsx)("div",{className:"h-8  flex flex-col justify-evenly space-y-4 mt-6",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:k("Pressure ")}),(0,l.jsxs)("h1",{className:"text-3xl",children:[N[s]," bar"]})]})})})]}),(0,l.jsx)(f,{})]})]})};var _=t(8714),G=t(57588);const I=e=>{let{index:s}=e;const{t:t}=(0,c.$G)(),[n,d]=(0,r.useState)(!0),{calibration:p,setCalibration:w}=(0,i.Z)();return(0,l.jsxs)(x,{className:"w-auto",children:[(0,l.jsxs)(m,{children:[(0,l.jsx)("div",{className:"flex justify-between",children:(0,l.jsxs)(h,{children:[t("Group")," ",s+1]})}),(0,l.jsx)(b.j,{}),(0,l.jsx)(u,{})]}),(0,l.jsxs)(f,{className:"flex flex-col gap-4",children:[(0,l.jsx)(a.jL0,{kind:0==p.dose[s].duration?"positive":"warning",title:t("Current behaviour"),description:0==p.dose[s].duration?"Dispense water at group head":"Dispense hot water valve for ".concat(p.dose[s].duration," second, group head will NOT open")}),(0,l.jsx)(a.RWL,{type:"single",name:"value",label:t("Dose duration (seconds)"),value:p.dose[s].duration,onChange:e=>{w((0,o.Uy)(p,(t=>{t.dose[s].duration=e})))},minValue:0,maxValue:10,step:.5})]}),(0,l.jsx)(j,{onClick:()=>{d(!n)},className:"justify-center"})]})},z=()=>{const{t:e}=(0,c.$G)(),[s,t]=(0,_._)("pidSettings",!1),[i,o]=(0,r.useState)(!1),d=()=>{t(!s)},x=(0,r.useRef)(null);return(0,l.jsxs)(k.w,{ref:x,className:"w-full max-w-2xl transform bg-gradient-to-r from-white to-white transition duration-500 select-none",children:[(0,l.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:d,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(n.YzZ,{className:"ml-4 text-black"}),(0,l.jsx)("h2",{className:"mx-4 font-bold text-black",children:e("Heater")})]}),s?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,l.jsx)(p.AeI,{className:"mr-4 text-black"})]}),s?(0,l.jsxs)("div",{className:"p-4 gap-4",children:[(0,l.jsx)(a.jL0,{kind:"positive",title:"What is Heater ?",description:"There are 3 channel of PID-enabled heater. You can configure each channel with temperature setpoint. We support the following type of sensor: DS18B20, NTC(10K), NTC(100K). DS18B20 is strongly recommended"}),(0,l.jsxs)("div",{className:"flex w-full flex-col justify-center gap-4 mt-4",children:[(0,l.jsx)(v,{index:0}),(0,l.jsx)(v,{index:1}),(0,l.jsx)(v,{index:2})]}),(0,l.jsx)(S.i,{onClick:d,className:"align-center justify-center",children:(0,l.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null,i&&(0,l.jsx)(a.u_l,{title:"Calibrate flowmeter",size:"small",onClose:()=>o(!1),primaryAction:{label:"OK",onPress:()=>o(!1)},secondaryAction:{label:"Cancel",onPress:()=>o(!1)},autoFocus:!1,children:(0,l.jsx)(a.eBu,{space:4,children:(0,l.jsx)(a.uTp,{size:"medium",children:"Content"})})})]})},V=()=>{const[e,s]=(0,_._)("flowmeterSettings",!1),{t:t}=(0,c.$G)(),i=()=>{s(!e)},o=(0,r.useRef)(null);return(0,l.jsxs)(k.w,{ref:o,className:"w-full max-w-2xl transform bg-gradient-to-r bg-white transition duration-500 select-none",children:[(0,l.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:i,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(n.E3g,{className:"ml-4 text-black"}),(0,l.jsx)("h2",{className:"mx-4 font-bold text-black",children:t("Flowmeter")})]}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,l.jsx)(p.AeI,{className:"mr-4 text-black"})]}),e?(0,l.jsxs)("div",{className:"p-4 space-y-4",children:[(0,l.jsx)(a.jL0,{kind:"positive",title:"What is flowmeter ?",description:"Flowmeter is used to measure how much water is going to the puck, note that this is not much coffee you get because there is always water losses inside the puck, or simply released"}),(0,l.jsx)(a.jL0,{kind:"informative",title:"How to calibrate ?",description:"First, place a scale underneath each group, press any water button. Water will come out, wait until it reach around 100 grams, hit stop. Then click the Calibrate button and input the ACTUAL weight",action:{label:"See Video",onPress:()=>{}}}),(0,l.jsxs)("div",{className:"flex w-full flex-row flex-wrap justify-evenly  h-fit gap-4",children:[(0,l.jsx)(g,{index:0}),(0,l.jsx)(g,{index:1}),(0,l.jsx)(g,{index:2})]}),(0,l.jsx)(S.i,{onClick:i,className:"align-center justify-center",children:(0,l.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},Z=()=>{const[e,s]=(0,_._)("pressureSettings",!1),{t:t}=(0,c.$G)(),n=()=>{s(!e),console.log("toggle expand")},i=(0,r.useRef)(null);return(0,l.jsxs)(k.w,{ref:i,className:"w-full max-w-2xl transform bg-gradient-to-r from-white to-white transition duration-500 select-none",children:[(0,l.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:n,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(R.vlJ,{className:"ml-4 text-black"}),(0,l.jsx)("h2",{className:"mx-4 font-bold text-black",children:t("Pressure")})]}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,l.jsx)(p.AeI,{className:"mr-4 text-black"})]}),e?(0,l.jsxs)("div",{className:"p-4 space-y-4",children:[(0,l.jsx)(a.jL0,{kind:"positive",title:"What is Pressure sensor ?",description:"Pressure sensor is used to measure the pressure at puck, this reflect. There is 2 channel on ROSARIO. To ensure every shot of espresso are the same, the machine will also check if the pressure profiling match it's previous and display error. Normally due to wrong coffee compression method"}),(0,l.jsx)(a.jL0,{kind:"informative",title:"How to calibrate ?",description:"There are lots of pressure sensor type with different ranges. The highest pressure in coffee machine is around 12 bar (1.2Mpa) so you should get one above this limit and specify the range below.",action:{label:"See Video",onPress:()=>{}}}),(0,l.jsxs)("div",{className:"flex w-full flex-row flex-wrap justify-evenly  h-fit gap-4",children:[(0,l.jsx)(W,{index:0}),(0,l.jsx)(W,{index:1}),(0,l.jsx)(W,{index:2}),(0,l.jsx)(W,{index:3})]}),(0,l.jsx)(S.i,{onClick:n,className:"align-center justify-center",children:(0,l.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},D=()=>{const{locale:e,locales:s,defaultLocale:t}=(0,L.useRouter)(),[n,o]=(0,_._)("keyboardSettings",!1),{grinderSettings:d}=(0,i.Z)(),{t:x}=(0,c.$G)(),m=()=>{o(!n)},h=(0,r.useRef)(null);return(0,l.jsxs)(k.w,{ref:h,className:"w-full max-w-2xl transform bg-gradient-to-r bg-white transition duration-500 select-none",children:[(0,l.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:m,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(A.Ll6,{className:"ml-4 text-black"}),(0,l.jsx)("h2",{className:"mx-4 font-bold text-black",children:x("Keyboard")})]}),n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,l.jsx)(p.AeI,{className:"mr-4 text-black"})]}),n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(P.G,{className:"flex w-full flex-col justify-center space-y-4 py-4",children:[(0,l.jsx)(a.jL0,{kind:"informative",title:"Customize the behaviour",description:"In most coffee machine, there is a group button that normally will just dispense hot water. This button can also be configure to control the hot water line. You can change that behaviour here"}),(0,l.jsx)(I,{index:0}),(0,l.jsx)(I,{index:1}),(0,l.jsx)(I,{index:2})]}),(0,l.jsx)(S.i,{onClick:m,className:"align-center justify-center",children:(0,l.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},U=()=>{const{locale:e,locales:s,defaultLocale:t}=(0,L.useRouter)(),[n,d]=(0,_._)("networkSettings",!1),{grinderSettings:x}=(0,i.Z)(),{t:m}=(0,c.$G)(),h=()=>{d(!n),console.log("toggle expand")},u=(0,r.useRef)(null),{calibration:f,setCalibration:j}=(0,i.Z)();return(0,l.jsxs)(k.w,{ref:u,className:"w-full max-w-2xl transform bg-gradient-to-tr bg-white transition duration-500 select-none",children:[(0,l.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:h,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(T._0,{className:"ml-4 text-black"}),(0,l.jsx)("h2",{className:"mx-4 font-bold text-black",children:m("Network")})]}),n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,l.jsx)(p.AeI,{className:"mr-4 text-black"})]}),n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(P.G,{className:"flex w-full justify-center space-y-4 p-4",children:[(0,l.jsx)(a.jL0,{kind:"positive",title:m("Notice"),description:m("This will enable Internet connection for this machine, allowing it to display time, tracking the coffee quality by comparing flowmeter charts, notify business owner with daily report, ..."),action:{label:m("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,l.jsxs)("div",{className:" flex flex-row flex-grow justify-between w-full gap-4 rounded-xl p-4 border border-black",children:[(0,l.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,l.jsx)("div",{className:"w-full flex-grow",children:(0,l.jsx)(a.nvn,{name:"Wifi",label:"Wifi",placeholder:"",value:f.network.ssid||"",onChange:e=>j((0,o.Uy)(f,(s=>{s.network.ssid=e})))})}),(0,l.jsx)("div",{className:"w-full flex-grow",children:(0,l.jsx)(a.nvn,{name:"Password",label:"Password",placeholder:"",value:f.network.password||"",onChange:e=>j((0,o.Uy)(f,(s=>{s.network.password=e}))),type:"password"})})]}),(0,l.jsxs)("button",{className:" bg-gradient-to-r from-green-500 to-blue-500  text-white font-bold py-2 px-4  flex items-center justify-center gap-2 border border-white rounded-xl mt-6 hover:border-black",onClick:async()=>{await async function(){console.log("pair with phone");const e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);console.log("token",e),j((0,o.Uy)(f,(s=>{s.network.token=e})))}()},children:[(0,l.jsx)(T.XEH,{className:"text-xl"}),m("Pair with this Phone")]})]}),(0,l.jsx)(G.Z,{})]}),(0,l.jsx)(S.i,{onClick:h,className:"align-center justify-center",children:(0,l.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},E=()=>{const[e,s]=(0,_._)("displaySettings",!1),{t:t}=(0,c.$G)(),d=()=>{s(!e)},x=(0,r.useRef)(null),{calibration:m,setCalibration:h}=(0,i.Z)();return(0,l.jsxs)(k.w,{ref:x,className:"w-full max-w-2xl transform bg-gradient-to-tr bg-white transition duration-500 select-none",children:[(0,l.jsxs)(C.u,{className:"flex h-16 flex-row items-center justify-between",onClick:d,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(n.xJ7,{className:"ml-4 text-black"}),(0,l.jsx)("h2",{className:"mx-4 font-bold text-black",children:t("Display")})]}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ix0,{className:"mr-4 text-black"})}):(0,l.jsx)(p.AeI,{className:"mr-4 text-black"})]}),e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(P.G,{className:"flex w-full justify-center space-y-4 p-8",children:[(0,l.jsx)(a.jL0,{kind:"informative",title:t("Notice"),description:t("There is 2 line on LCD display, each line has maximum width of 16 characters, you can customize the content of each line here but only English character is supported"),action:{label:t("Learn more"),onPress:()=>{window.open("https://www.google.com")}}}),(0,l.jsxs)("div",{className:"flex flex-row justify-between w-full gap-4",children:[(0,l.jsx)("div",{className:"w-full flex-grow",children:(0,l.jsx)(a.nvn,{name:"Line 1",label:"Display - Line 1",placeholder:"",value:m.display.line1||"",onChange:e=>h((0,o.Uy)(m,(s=>{s.display.line1=e})))})}),(0,l.jsx)("div",{className:"w-full flex-grow",children:(0,l.jsx)(a.nvn,{name:"Line 2",label:"Display - Line 2",placeholder:"",value:m.display.line2||"",onChange:e=>h((0,o.Uy)(m,(s=>{s.display.line2=e})))})})]}),(0,l.jsx)(G.Z,{})]}),(0,l.jsx)(S.i,{onClick:d,className:"align-center justify-center",children:(0,l.jsx)(p.rWj,{className:"m-4 text-black"})})]}):null]})},K=()=>(0,l.jsx)(F.default,{children:(0,l.jsxs)("div",{className:" flex flex-col items-center  p-8 space-y-4",children:[(0,l.jsx)(z,{}),(0,l.jsx)(V,{}),(0,l.jsx)(Z,{}),(0,l.jsx)(D,{}),(0,l.jsx)(U,{}),(0,l.jsx)(E,{})]})});var $=K}},function(e){e.O(0,[838,396,660,296,817,509,365,391,653,317,648,456,262,18,282,546,774,888,179],(function(){return s=45824,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
//# sourceMappingURL=setting-561887c9e586a1e2.js.map