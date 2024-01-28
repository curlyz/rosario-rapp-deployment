(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{45824:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return a(10875)}])},92290:function(e,s,a){"use strict";var r=a(67294),t=a(64331);s.Z=()=>(0,r.useContext)(t.Tp)},9186:function(e,s,a){"use strict";a.d(s,{cn:function(){return l}});var r=a(90512),t=a(98388);function l(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,t.m6)((0,r.W)(s))}},83842:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var r=a(85893),t=a(27136),l=a(61121),n=a(36977),i=a(37094),o=a(94554),d=a(92290);a(67294);var c=a(11163),u=()=>{let{connectButtonDisplay:e}=(0,d.Z)(),{selectedPage:s,setSelectedPage:a}=(0,d.Z)(),o=(0,c.useRouter)();return(0,r.jsx)("div",{className:"flex justify-center w-full fixed bottom-0 bg-white z-50",children:(0,r.jsx)(t.eBu,{space:4,children:(0,r.jsxs)("div",{className:"flex justify-between  flex-row",children:[(0,r.jsx)(t.zxk,{hierarchy:"Formula"===s?"primary":"secondary",kind:"transparent",label:"Formula",icon:()=>(0,r.jsx)(l.h1P,{}),onPress:()=>{a("Formula"),o.push("/")}}),(0,r.jsx)(t.zxk,{hierarchy:"Alchemy"===s?"primary":"secondary",kind:"transparent",label:"Lab",icon:()=>(0,r.jsx)(n.b6W,{}),onPress:()=>{a("Alchemy"),o.push("/lab")}}),(0,r.jsx)(t.zxk,{hierarchy:"Setting"===s?"primary":"secondary",kind:"transparent",label:"Settings",icon:()=>(0,r.jsx)(i.Fnt,{}),onPress:()=>{a("Setting"),o.push("/setting")}})]})})})},x=a(30080),m=()=>{let{connectButtonStyle:e,connectButtonText:s,selectedPage:a}=(0,d.Z)();return(0,r.jsxs)("div",{className:"flex justify-between items-center m-4",children:[(0,r.jsx)(t.s01,{size:"small",children:a}),(0,r.jsx)(t.zxk,{label:s,hierarchy:"primary",icon:()=>(0,r.jsx)(x.Vdu,{}),onPress:()=>{(0,o.s0)()},kind:e})]})},h=e=>{let{children:s}=e;return(0,r.jsxs)(t.Kqy,{space:4,children:[(0,r.jsx)(m,{}),(0,r.jsx)("div",{className:"mb-[56px]",children:s}),(0,r.jsx)(u,{})]})}},10875:function(e,s,a){"use strict";a.r(s),a.d(s,{SettingsPage:function(){return $},default:function(){return J}});var r=a(85893),t=a(27136),l=a(86204),n=a(71054),i=a(30080),o=a(67294),[d,c]=(0,a(46347).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),u=a(29118),x=a(65512),m=(0,u.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...x.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),h=a(768),f=a(28628),p=a(74355),b=a(85759),j=a(82134),g=a(49869),v=a(50262),y=a(64430),w=a(31744),N=a(84272),C=a(96257),k=(0,j.Gp)((e,s)=>{let{children:a,context:t,Component:l,isPressable:n,disableAnimation:i,disableRipple:c,getCardProps:u,getRippleProps:x}=function(e){let[s,a]=(0,j.oe)(e,m.variantKeys),{ref:r,as:t,children:l,disableRipple:n=!1,onClick:i,onPress:d,autoFocus:c,className:u,classNames:x,allowTextSelectionOnPress:C=!0,...k}=s,P=(0,w.gy)(r),z=t||(e.isPressable?"button":"div"),A="string"==typeof z,F=(0,g.W)(null==x?void 0:x.base,u),{onClick:W,onClear:R,ripples:T}=(0,N.i)(),I=s=>{e.disableAnimation||n||!P.current||W(s)},{buttonProps:B,isPressed:S}=(0,b.j)({onPress:d,elementType:t,isDisabled:!e.isPressable,onClick:(0,h.tS)(i,I),allowTextSelectionOnPress:C,...k},P),{hoverProps:D,isHovered:V}=(0,p.XI)({isDisabled:!e.isHoverable,...k}),{isFocusVisible:U,isFocused:E,focusProps:_}=(0,f.Fx)({autoFocus:c}),H=(0,o.useMemo)(()=>m({...a}),[...Object.values(a)]),Z=(0,o.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:H,classNames:x}),[H,x,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),G=(0,o.useCallback)((s={})=>({ref:P,className:H.base({class:F}),tabIndex:e.isPressable?0:-1,"data-hover":(0,v.PB)(V),"data-pressed":(0,v.PB)(S),"data-focus":(0,v.PB)(E),"data-focus-visible":(0,v.PB)(U),"data-disabled":(0,v.PB)(e.isDisabled),...(0,h.dG)(e.isPressable?{...B,..._,role:"button"}:{},e.isHoverable?D:{},(0,y.z)(k,{enabled:A}),(0,y.z)(s))}),[P,H,F,A,e.isPressable,e.isHoverable,e.isDisabled,V,S,U,B,_,D,k]),L=(0,o.useCallback)(()=>({ripples:T,onClear:R}),[T,R]);return{context:Z,domRef:P,Component:z,classNames:x,children:l,isHovered:V,isPressed:S,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:n,handleClick:I,isFocusVisible:U,getCardProps:G,getRippleProps:L}}({...e,ref:s});return(0,r.jsxs)(l,{...u(),children:[(0,r.jsx)(d,{value:t,children:a}),n&&!i&&!c&&(0,r.jsx)(C.L,{...x()})]})});k.displayName="NextUI.Card";var P=(0,j.Gp)((e,s)=>{var a;let{as:t,className:l,children:n,...i}=e,o=(0,w.gy)(s),{slots:d,classNames:u}=c(),x=(0,g.W)(null==u?void 0:u.header,l);return(0,r.jsx)(t||"div",{ref:o,className:null==(a=d.header)?void 0:a.call(d,{class:x}),...i,children:n})});P.displayName="NextUI.CardHeader";var z=(0,j.Gp)((e,s)=>{var a;let{as:t,className:l,children:n,...i}=e,o=(0,w.gy)(s),{slots:d,classNames:u}=c(),x=(0,g.W)(null==u?void 0:u.body,l);return(0,r.jsx)(t||"div",{ref:o,className:null==(a=d.body)?void 0:a.call(d,{class:x}),...i,children:n})});z.displayName="NextUI.CardBody";var A=(0,j.Gp)((e,s)=>{var a;let{as:t,className:l,children:n,...i}=e,o=(0,w.gy)(s),{slots:d,classNames:u}=c(),x=(0,g.W)(null==u?void 0:u.footer,l);return(0,r.jsx)(t||"div",{ref:o,className:null==(a=d.footer)?void 0:a.call(d,{class:x}),...i,children:n})});A.displayName="NextUI.CardFooter";var F=(0,u.tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),W=(0,j.Gp)((e,s)=>{let{Component:a,getDividerProps:t}=function(e){var s;let a,r;let{as:t,className:l,orientation:n,...i}=e,d=t||"hr";"hr"===d&&"vertical"===n&&(d="div");let{separatorProps:c}=(s={elementType:"string"==typeof d?d:"hr",orientation:n},r=(0,y.z)(s,{enabled:"string"==typeof s.elementType}),("vertical"===s.orientation&&(a="vertical"),"hr"!==s.elementType)?{separatorProps:{...r,role:"separator","aria-orientation":a}}:{separatorProps:r}),u=(0,o.useMemo)(()=>F({orientation:n,className:l}),[n,l]);return{Component:d,getDividerProps:(0,o.useCallback)((e={})=>({className:u,role:"separator","data-orientation":n,...c,...i,...e}),[u,n,c,i])}}({...e});return(0,r.jsx)(a,{ref:s,...t()})});W.displayName="NextUI.Divider";var R=a(64399),T=a(19151),I=a(58908),B=a(52091),S=a(9186);let D=o.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,r.jsx)("div",{ref:s,className:(0,S.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...t})});D.displayName="Card";let V=o.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,r.jsx)("div",{ref:s,className:(0,S.cn)("flex flex-col space-y-1.5 p-6",a),...t})});V.displayName="CardHeader";let U=o.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,r.jsx)("h3",{ref:s,className:(0,S.cn)("text-2xl font-semibold leading-none tracking-tight",a),...t})});U.displayName="CardTitle";let E=o.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,r.jsx)("p",{ref:s,className:(0,S.cn)("text-sm text-muted-foreground",a),...t})});E.displayName="CardDescription";let _=o.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,r.jsx)("div",{ref:s,className:(0,S.cn)("p-6 pt-0",a),...t})});_.displayName="CardContent";let H=o.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,r.jsx)("div",{ref:s,className:(0,S.cn)("flex items-center p-6 pt-0",a),...t})});H.displayName="CardFooter";var Z=a(92290),G=a(93513);let L=e=>{let{index:s}=e,{pidState:a,setPidState:l,pidDisplay:n}=(0,Z.Z)(),{connected:d}=(0,Z.Z)(),[c,u]=(0,o.useState)(Array(100).fill({temperature:0,power:0}));(0,o.useEffect)(()=>{if(console.warn("draft",n[s]),void 0==n[s].powerSamples)return;let e=[];for(var r=0;r<n[s].powerSamples.length;r++)e.push({power:n[s].powerSamples[r],temperature:n[s].temperatureSamples[r],target:a[s].targetTemperature});u(e)},[n,s,a]);let x=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.RWL,{type:"single",name:"value",label:"Temperature",value:a[s].targetTemperature,onChange:e=>{l((0,G.Uy)(a,a=>{a[s].targetTemperature=e}))},minValue:30,maxValue:200,step:1,disabled:!d}),(0,r.jsx)(t.RWL,{type:"single",name:"value",label:"Active Range",value:a[s].activeRange,onChange:e=>{l((0,G.Uy)(a,a=>{a[s].activeRange=e}))},minValue:0,maxValue:10,step:1,disabled:!d}),(0,r.jsx)(t.RWL,{type:"single",name:"value",label:"Proportional",value:a[s].proportional,onChange:e=>{l((0,G.Uy)(a,a=>{a[s].proportional=e}))},minValue:0,maxValue:10,step:.1,disabled:!d}),(0,r.jsx)(t.RWL,{type:"single",name:"value",label:"integral",value:a[s].integral,onChange:e=>{l((0,G.Uy)(a,a=>{a[s].integral=e}))},minValue:0,maxValue:1,step:.1,disabled:!d}),(0,r.jsx)(t.RWL,{type:"single",name:"value",label:"Derivative",value:a[s].derivative,onChange:e=>{l((0,G.Uy)(a,a=>{a[s].derivative=e}))},minValue:0,maxValue:10,step:.1,disabled:!d})]}),[m,h]=(0,o.useState)(!1),f=(0,r.jsxs)("div",{className:"flex flex-wrap justify-center space-x-1 space-y-1 mb-4",children:[(0,r.jsx)(t.zxk,{onPress:()=>{},hierarchy:"secondary",kind:"outline",label:"90%",size:"small",icon:()=>(0,r.jsx)(I.w$t,{})}),(0,r.jsx)(t.zxk,{onPress:()=>{},hierarchy:"secondary",kind:"outline",label:"90*C",size:"small",icon:()=>(0,r.jsx)(B.YzZ,{})}),(0,r.jsx)(t.zxk,{onPress:()=>{},hierarchy:"primary",kind:"outline",label:"Test",size:"small",icon:()=>(0,r.jsx)(T.WuV,{})}),(0,r.jsx)(t.zxk,{onPress:()=>{l((0,G.Uy)(a,e=>{e[s].targetTemperature=110,e[s].activeRange=2,e[s].proportional=3.2,e[s].integral=.2,e[s].derivative=5}))},hierarchy:"danger",kind:"outline",size:"small",label:"Reset",icon:()=>(0,r.jsx)(R.Z4w,{})})]});return(0,r.jsxs)(D,{className:"w-auto",children:[(0,r.jsxs)(V,{children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)(U,{children:["Channel ",s+1]}),(0,r.jsx)(t.rsf,{value:a[s].isActive,onChange:e=>{l((0,G.Uy)(a,a=>{a[s].isActive=e}))},disabled:!d,label:"Active"})]}),(0,r.jsx)(W,{}),(0,r.jsx)(E,{children:a[s].isActive?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(D,{className:"h-40 bg-white",children:[(0,r.jsx)(t.wWH,{hideLegend:!1,hideXAxis:!0,dataKey:"name",categories:["temperature","power","target"],disableAnimation:!0,hideYAxis:!0,hideTooltip:!1,data:c})," "]})}):(0,r.jsx)(r.Fragment,{children:"This PID channel is currently disabled"})})]}),a[s].isActive?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{children:m?(0,r.jsxs)(r.Fragment,{children:[f,x]}):null}),(0,r.jsx)(H,{onClick:()=>{h(!m)},className:"justify-center",children:m?(0,r.jsx)(i.Faw,{}):(0,r.jsx)(i.Yc6,{})})]}):null]})},K=e=>{let{index:s}=e,[a,l]=(0,o.useState)(0),[n,i]=(0,o.useState)(0);return(0,r.jsx)(t.eBu,{space:4,children:(0,r.jsxs)("div",{className:"h-8 w-fit  flex-grow flex flex-col items-center space-y-3 ",children:[(0,r.jsx)("h1",{className:"text-white text-4xl",children:"20"}),(0,r.jsx)("h1",{className:"text-zinc-100",children:"ms/s"})]})})},X=e=>{let{key:s,index:a}=e,{grinderSettings:n,setGrinderSettings:o}=(0,Z.Z)();return console.log("Grinder/ create ",s),(0,r.jsxs)("div",{className:"flex flex-col  rounded-xl bg-white p-4 space-y-4",children:[(0,r.jsx)(t.nvn,{name:"ingredient",label:"Ingredient",placeholder:"What is the coffee bean ?",value:n[a].name,onChange:e=>{o((0,G.Uy)(n,s=>{s[a].name=e}))}}),(0,r.jsx)("div",{className:"flex flex-row justify-stretch space-x-4 flex-grow",children:(0,r.jsxs)(t.oeA,{space:8,children:[(0,r.jsx)(t.sgG,{width:"4/5",children:(0,r.jsx)(t.mgC,{value:n[a].connectionType,onChange:e=>{o((0,G.Uy)(n,s=>{s[a].connectionType=e}))},name:"connectionType",label:"Connection",placeholder:"How is the grinder connected ?",options:[{value:"wire",label:"Wire",kind:"two-line",secondLine:"Direct wiring using the PID port"},{value:"ble",label:"Bluetooth",kind:"two-line",secondLine:"Pair to a Bluetooth scale"}]})}),(0,r.jsx)(t.sgG,{width:"1/5",children:(0,r.jsx)(t.Ki0,{name:"ID",value:n[a].connectionId,onChange:e=>{o((0,G.Uy)(n,s=>{s[a].connectionId=e}))},label:"ID"})})]})}),(0,r.jsxs)("div",{className:"flex flex-row my-4 space-x-4",children:[(0,r.jsx)(t.zxk,{label:"Calibrate",onPress:()=>{},hierarchy:"primary",kind:"outline",icon:()=>(0,r.jsx)(l.mdD,{})}),(0,r.jsx)(t.zxk,{label:"Test",onPress:()=>{},hierarchy:"primary",kind:"outline",icon:()=>(0,r.jsx)(T.WuV,{})}),(0,r.jsx)(t.zxk,{label:"Remove",onPress:()=>{},hierarchy:"danger",kind:"outline",icon:()=>(0,r.jsx)(i.ZkW,{})})]})]})};var M=a(83842);let O=()=>{let[e,s]=(0,o.useState)(!1),[a,n]=(0,o.useState)(!1),d=()=>{s(!e),console.log("toggle expand")},c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!e&&c.current){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"),10),s=c.current.getBoundingClientRect().top-e;window.scrollTo({top:s,behavior:"smooth"})}},[e]),(0,r.jsxs)(k,{ref:c,className:"max-w-2xl w-full bg-gradient-to-r from-purple-600 to-red-600 transition duration-500 transform hover:scale-105",children:[(0,r.jsxs)(P,{className:"h-16 flex items-center justify-between flex-row",onClick:d,children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(l.YzZ,{className:"ml-4 text-white"}),(0,r.jsx)("h2",{className:"text-white font-bold mx-4",children:"Heater"})]}),e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Ix0,{className:"mr-4 text-white"})}):(0,r.jsx)(i.AeI,{className:"mr-4 text-white"})]}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(z,{className:"flex flex-col justify-center space-y-4 py-4 w-full",children:[(0,r.jsx)(L,{index:0}),(0,r.jsx)(L,{index:1}),(0,r.jsx)(L,{index:2})]}),(0,r.jsx)(A,{onClick:d,className:"justify-center align-center",children:(0,r.jsx)(i.rWj,{className:"text-white m-4"})})]}):null,a&&(0,r.jsx)(t.u_l,{title:"Calibrate flowmeter",size:"small",onClose:()=>n(!1),primaryAction:{label:"OK",onPress:()=>n(!1)},secondaryAction:{label:"Cancel",onPress:()=>n(!1)},autoFocus:!1,children:(0,r.jsx)(t.eBu,{space:4,children:(0,r.jsx)(t.uTp,{size:"medium",children:"Content"})})})]})},Y=()=>{let[e,s]=(0,o.useState)(!1),a=()=>{s(!e),console.log("toggle expand")},t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!e&&t.current){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"),10),s=t.current.getBoundingClientRect().top-e;window.scrollTo({top:s,behavior:"smooth"})}},[e]),(0,r.jsxs)(k,{ref:t,className:"max-w-2xl my-4 bg-gradient-to-r from-blue-600 to-green-600 w-full transition duration-500 transform hover:scale-105",children:[(0,r.jsxs)(P,{className:"h-16 flex items-center justify-between flex-row",onClick:a,children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(l.E3g,{className:"ml-4 text-white"}),(0,r.jsx)("h2",{className:"text-white font-bold mx-4",children:"Flowmeter"})]}),e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Ix0,{className:"mr-4 text-white"})}):(0,r.jsx)(i.AeI,{className:"mr-4 text-white"})]}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-evenly space-x-4 py-4 w-full flex-grow",children:[(0,r.jsx)(K,{index:0}),(0,r.jsx)(K,{index:1}),(0,r.jsx)(K,{index:2})]}),(0,r.jsx)(A,{onClick:a,className:"justify-center align-center",children:(0,r.jsx)(i.rWj,{className:"text-white m-4"})})]}):null]})},q=()=>{let[e,s]=(0,o.useState)(!1),{grinderSettings:a}=(0,Z.Z)(),t=()=>{s(!e),console.log("toggle expand")},l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!e&&l.current){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"),10),s=l.current.getBoundingClientRect().top-e;window.scrollTo({top:s,behavior:"smooth"})}},[e]),(0,r.jsxs)(k,{ref:l,className:"max-w-2xl bg-gradient-to-r from-orange-600 to-yellow-600 w-full transition duration-500 transform hover:scale-105",children:[(0,r.jsxs)(P,{className:"h-16 flex items-center justify-between flex-row",onClick:t,children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(n.nXt,{className:"ml-4 text-white"}),(0,r.jsx)("h2",{className:"text-white font-bold mx-4",children:"Grinder"})]}),e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Ix0,{className:"mr-4 text-white"})}):(0,r.jsx)(i.AeI,{className:"mr-4 text-white"})]}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z,{className:"flex flex-col justify-center space-y-4 py-4 w-full",children:a.map((e,s)=>(console.log("Grinder/ create with",{item:e,index:s}),(0,r.jsx)(X,{index:s},s)))}),(0,r.jsx)(A,{onClick:t,className:"justify-center align-center",children:(0,r.jsx)(i.rWj,{className:"text-white m-4"})})]}):null]})},$=()=>(0,r.jsx)(M.default,{children:(0,r.jsx)(t.eBu,{space:16,children:(0,r.jsxs)("div",{className:"items-center flex flex-col",children:[(0,r.jsx)(O,{}),(0,r.jsx)(Y,{}),(0,r.jsx)(q,{})]})})});var J=$}},function(e){e.O(0,[838,817,509,698,391,653,510,127,396,365,499,89,774,888,179],function(){return e(e.s=45824)}),_N_E=e.O()}]);