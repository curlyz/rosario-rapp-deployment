(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{17503:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab",function(){return t(37073)}])},57588:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var o=t(85893),n=t(67294),l=t(12780),r=t(9186);const a=n.forwardRef(((e,s)=>{let{className:t,orientation:n="horizontal",decorative:a=!0,...i}=e;return(0,o.jsx)(l.f,{ref:s,decorative:a,orientation:n,className:(0,r.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",t),...i})}));a.displayName=l.f.displayName},37073:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return M}});var o=t(85893),n=t(9008),l=t.n(n),r=t(3779),a=t(17303),i=t(93513),c=t(30080),d=t(16702),u=t(37039),x=t(67294),m=t(52091),p=t(86204),h=t(71054),g=t(18318),f=t(45341),j=t(19151);const v=e=>{let{index:s}=e;var t;const[n,l]=(0,x.useState)(!1),{formulas:c,setFormulas:v,selectedFormulaId:b}=(0,a.Z)();console.log("reading step index",s,b,c[b].steps);const[y,w]=(0,x.useState)(null===(t=c[b].steps[s])||void 0===t?void 0:t.action.actionType),k=c[b].steps[s],{t:P}=(0,u.$G)();return(0,x.useEffect)((()=>{l(!1)}),[c]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-xl font-bold text-orange-900 underline decoration-pink-500",onClick:()=>{l(!0)},children:P(k.action.actionType)||"Action"}),n&&(0,o.jsxs)(d.u_l,{size:"large",title:P("Select an action"),onClose:()=>l(!1),primaryAction:{label:P("OK"),onPress:()=>{var e;l(!1),e=y,v((0,i.Uy)(c,(t=>{const o=t[b].steps[s].action;o.actionType=e;const n=t[b].steps[s].target;if(e==r.g8.Grind)n.targetType=r.YK.Weight;else if(e==r.g8.Extract)n.targetType=r.YK.Weight;else if(e==r.g8.Rest)n.targetType=r.YK.Time;else if(e==r.g8.Profile){n.targetType=r.YK.Weight;let e=o;e.segments=e.segments||[],e.profilingType=e.profilingType||r.jk.Power}else e==r.g8.PourOver&&(n.targetType=r.YK.Weight);t[b].steps[s].action=o,t[b].steps[s].target=n})))}},secondaryAction:{label:P("Cancel"),onPress:()=>l(!1)},children:[(0,o.jsxs)(d.r5R,{space:4,columns:3,children:[(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:y==r.g8.Grind?"solid":"outline",label:P("Grind"),onPress:()=>{w(r.g8.Grind)},icon:()=>(0,o.jsx)(h.nXt,{}),isDisabled:!0}),(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:y==r.g8.Extract?"solid":"outline",label:P("Extract"),onPress:()=>{w(r.g8.Extract)},icon:()=>(0,o.jsx)(g.bYu,{})}),(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:y==r.g8.Rest?"solid":"outline",label:P("Rest"),onPress:()=>{w(r.g8.Rest)},icon:()=>(0,o.jsx)(p.qyc,{})}),(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:y==r.g8.Profile?"solid":"outline",label:P("Profile"),onPress:()=>{w(r.g8.Profile)},icon:()=>(0,o.jsx)(m.p$z,{})}),(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:y==r.g8.PourOver?"solid":"outline",label:P("Pour Over"),onPress:()=>{w(r.g8.PourOver)},icon:()=>(0,o.jsx)(f._eR,{}),isDisabled:!1}),(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:y==r.g8.RGB?"solid":"outline",label:P("RGB"),onPress:()=>{w(r.g8.RGB)},icon:()=>(0,o.jsx)(j.$Vy,{})})]}),(0,o.jsx)(d.zxk,{hierarchy:"danger",kind:"solid",label:P("Delete this step"),onPress:()=>{},isDisabled:!1})]})]})};var b=t(37094),y=t(64158);const w=e=>{let{value:s,onChange:t}=e;const[n,l]=(0,x.useState)(!1),{t:r}=(0,u.$G)();(0,x.useEffect)((()=>{l(!1)}),[s]),(0,y.q)((()=>{t(!1)}));const[a,i]=(0,x.useState)(!0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>l(!0),children:r(a?"can skip":"must wait")}),n&&(0,o.jsx)(d.u_l,{autoFocus:!1,size:"small",title:r("Set grinder behaviour"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),t(a)}},secondaryAction:{label:r("Cancel"),onPress:()=>l(!1)},children:(0,o.jsxs)(d.Kqy,{space:8,children:[(0,o.jsxs)(d.r5R,{space:8,columns:2,children:[(0,o.jsx)(d.zxk,{kind:a?"solid":"outline",hierarchy:"primary",label:r("Can skip"),onPress:()=>i(!0),icon:()=>(0,o.jsx)(b.PCn,{})}),(0,o.jsx)(d.zxk,{kind:a?"outline":"solid",hierarchy:"primary",label:r("Must wait"),onPress:()=>i(!1),icon:()=>(0,o.jsx)(m.fSQ,{})})]}),(0,o.jsx)(d.jL0,{kind:"informative",title:r("Explaination"),description:r(a?"Grinder will skip this step if portafilter is not in position":"Grinder will wait until the portafilter is in position, then it will start grinding")})]})})]})};var k=t(57588);const P=e=>{let{text:s}=e;return(0,o.jsx)(o.Fragment,{children:s.split(" ").map(((e,s)=>(0,o.jsx)("h1",{className:"mx-1 text-xl text-gray-900",children:e},s)))})};var C=t(86419),F=t(9186);C.fC,C.xz;const S=x.forwardRef(((e,s)=>{let{className:t,align:n="center",sideOffset:l=4,...r}=e;return(0,o.jsx)(C.h_,{children:(0,o.jsx)(C.VY,{ref:s,align:n,sideOffset:l,className:(0,F.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})})}));function N(e){let{index:s,subIndex:t=-1}=e;var n;const[l,r]=(0,x.useState)(!1),[c,m]=(0,x.useState)(-1),{formulas:p,setFormulas:h,selectedFormulaId:g}=(0,a.Z)(),{formulaFeedbacks:f}=(0,a.Z)(),[j,v]=(0,x.useState)(!1),b=p[g].steps[s],[y,w]=(0,x.useState)(-1==t?b.target.value:-2==t?b.action.duration||0:(null===(n=b.action.segments[t])||void 0===n?void 0:n.duration)||0);let k=(0,x.useRef)();(0,x.useEffect)((()=>{var e;const s=-1==t?b.target.value:-2==t?b.action.duration||0:(null===(e=b.action.segments[t])||void 0===e?void 0:e.duration)||0;s!=c&&(w(s),v(!0),clearTimeout(k.current),k.current=setTimeout((()=>{v(!1)}),1e3))}),[p,g,s,t,b,c]),(0,x.useEffect)((()=>{var e,o,n;const l=null===(n=f[g])||void 0===n||null===(o=n[s])||void 0===o||null===(e=o.target)||void 0===e?void 0:e.value;-1==t&&m(l||-1)}),[f,s,g,t]);const{t:P}=(0,u.$G)();return(0,o.jsxs)(o.Fragment,{children:[null!=c&&c>0&&(0,o.jsx)("h1",{className:" text-xl font-bold text-green-800",onClick:()=>r(!0),children:"".concat((c/1e3).toFixed(1),"/")}),(0,o.jsxs)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>r(!0),children:[y.toFixed(1)," "+P(y<=1?"second":"seconds")]}),l&&(0,o.jsx)(d.u_l,{size:"small",title:P("How long?"),onClose:()=>r(!1),primaryAction:{label:P("OK"),onPress:()=>{r(!1),h((0,i.Uy)(p,(e=>{-1==t?e[g].steps[s].target.value=y:-2==t?e[g].steps[s].action.duration=y:b.action.segments[t].duration=y})))}},secondaryAction:{label:P("Cancel"),onPress:()=>r(!1)},children:(0,o.jsx)(d.Kqy,{space:8,children:(0,o.jsxs)(d.oeA,{space:4,align:"center",children:[(0,o.jsx)(d.sgG,{width:"4/5",children:(0,o.jsx)(d.RWL,{type:"single",name:"time",value:y,onChange:w,label:P("Time"),minValue:0,maxValue:120,step:1})}),(0,o.jsx)(d.sgG,{width:"1/5",children:(0,o.jsx)(d.Ki0,{value:y,onChange:w,label:P("Time"),minValue:0,maxValue:500,step:1})})]})})})]})}S.displayName=C.VY.displayName;const T=(e,s,t)=>{if(void 0===e)return[];const o=[];let n=0;e.forEach((e=>{n+=e.duration}));var l=0,a=0;for(const d of e){0==d.smooth&&(console.log("smooth is real"),s==r.jk.Pressure?o.push({timestamp:l,pressure:d.value,min:0,max:11}):s==r.jk.Flowrate?o.push({timestamp:l,flowrate:d.value,min:0,max:51}):s==r.jk.Power&&o.push({timestamp:l,power:d.value,min:0,max:101}),a=d.value);for(var i=0;i<d.duration;i+=1){var c=a+(d.value-a)*(i/d.duration);c=Math.round(10*c)/10,s==r.jk.Pressure?o.push({timestamp:l+i,pressure:c,max:10,min:0}):s==r.jk.Flowrate?o.push({timestamp:l+i,flowrate:c,max:50,min:0}):s==r.jk.Power&&o.push({timestamp:l+i,power:c,max:100,min:0})}a=d.value,l+=d.duration}return o},z=e=>{let{index:s}=e;var t;(0,y.q)((()=>{l((0,i.Uy)(n,(e=>{const t=e[r].steps[s].action;return t.actionType="Profile",t.segments=t.segments||[],console.log("profile/ create object",t),0==t.segments.length&&(t.segments=[{duration:10,value:3,smooth:!1}]),e})))}));const{formulas:n,setFormulas:l,selectedFormulaId:r}=(0,a.Z)(),{t:c}=(0,u.$G)(),d=((null===(t=n[r])||void 0===t?void 0:t.steps)||[])[s].action,x=(d.segments||[]).map(((e,t)=>(0,o.jsxs)("div",{className:"flex-rol flex flex-wrap",children:[0==t?(0,o.jsx)(P,{text:c("First,")}):(0,o.jsx)(P,{text:c("then")}),(0,o.jsx)(R,{index:s,subIndex:t}),(0,o.jsx)(G,{index:s,subIndex:t}),d.segments[t].smooth?(0,o.jsx)(P,{text:c("within")}):(0,o.jsx)(P,{text:c("for")}),(0,o.jsx)(N,{index:s,subIndex:t}),(0,o.jsx)("h1",{className:"text-xl",children:t===d.segments.length-1?".":","})]},t)));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k.Z,{}),(0,o.jsx)("ul",{children:x}),(0,o.jsxs)("div",{className:"flex h-10 w-fit cursor-pointer  flex-row items-center space-x-6 rounded-md bg-blue-100 p-2 transition-transform duration-200 border",children:[(0,o.jsx)(p.wEH,{color:"#00aeef",size:20,onClick:()=>{l((0,i.Uy)(n,(e=>{const t=e[r].steps[s].action;t.segments=t.segments||[],t.segments.push({duration:Math.floor(30*Math.random()),value:+(8*Math.random()+2).toFixed(1),smooth:!1})})))}}),(0,o.jsx)(p.iFH,{color:"#ff0000",size:20,onClick:()=>{void 0!==d.segments&&(d.segments.length<2||l((0,i.Uy)(n,(e=>(e[r].steps[s].action.segments.pop(),e)))))}})]})]})},R=e=>{let{index:s,subIndex:t=-1}=e;var n;const{formulas:l,setFormulas:r,selectedFormulaId:c}=(0,a.Z)(),d=((null===(n=l[c])||void 0===n?void 0:n.steps)||[])[s],{t:x}=(0,u.$G)();var m=0;t>0&&(m=d.action.segments[t-1].value);var p=m<d.action.segments[t].value;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("h1",{className:"text-xl font-bold text-orange-900",onClick:function(){r((0,i.Uy)(l,(e=>{e[c].steps[s].action.segments[t].smooth=!e[c].steps[s].action.segments[t].smooth})))},children:d.action.segments[t].smooth?x(p?"slowly reaching up":"slowly reaching down"):x("hold at")})})},A=e=>{let{index:s}=e;var t;const[n,l]=(0,x.useState)([]),{formulas:i,setFormulas:c,selectedFormulaId:u}=(0,a.Z)(),{formulaFeedbacks:m}=(0,a.Z)(),p=((null===(t=i[u])||void 0===t?void 0:t.steps)||[])[s].action,h=p.profilingType,g=p.segments,f=(0,x.useRef)([]);(0,x.useEffect)((()=>{try{var e;const o=null===(e=m[u][s])||void 0===e?void 0:e.action;if(!o)return void console.warn("No update from profileRune");console.log("Line/ add value",o),f.current=window.fbstore||[],window.fbstore=f.current;var t=f.current;t.push({...o,timestamp:Math.round(o.timestamp/1e3)});const n=T(g,h);n.map(((e,s)=>{t.forEach((s=>{s.timestamp==e.timestamp&&(e.flowrate=s.input,e.pressure=10*s.pressure||0)}))})),console.log("Line/ dpts",n,t),l(n)}catch(o){console.error("ProfileRune",o)}}),[m,s,g,u,h]),(0,x.useEffect)((()=>{l(T(g,h))}),[g,h]);const j={};return j[r.jk.Pressure]="pressure",j[r.jk.Flowrate]="flowrate",j[r.jk.Power]="power",(0,o.jsx)("div",{className:"w-full -translate-x-10 transition-transform duration-200 z-50",children:(0,o.jsx)(d.wWH,{height:300,dataKey:"Time",categories:[j[h]||"unknown sensor","pressure"],hideLegend:!1,hideXAxis:!0,hideYAxis:!1,data:n,disableAnimation:!0},s)})},G=e=>{let{index:s,subIndex:t}=e;var n;const[l,c]=(0,x.useState)(!1),{formulas:m,setFormulas:p,selectedFormulaId:h}=(0,a.Z)(),g=((null===(n=m[h])||void 0===n?void 0:n.steps)||[])[s].action,f=g.profilingType,j=g.segments;let v="";f==r.jk.Pressure&&(v="bar"),f==r.jk.Flowrate?v="gram/s":f==r.jk.Power&&(v="%");r.jk.Pressure,r.jk.Flowrate,r.jk.Power;const[b,y]=(0,x.useState)(j[t].value),{t:w}=(0,u.$G)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"flex h-8 w-fit items-center justify-between rounded-lg p-2",onClick:()=>{c(!0)},children:(0,o.jsxs)("h1",{className:"text-xl font-bold text-blue-800",children:[null===b?100:b," %"]})}),l&&(0,o.jsx)(d.u_l,{size:"small",title:w("Set target"),onClose:()=>c(!1),primaryAction:{label:w("OK"),onPress:()=>{c(!1),p((0,i.Uy)(m,(e=>{e[h].steps[s].action.segments[t].value=b})))}},secondaryAction:{label:w("Cancel"),onPress:()=>c(!1)},children:(0,o.jsx)(d.Kqy,{space:8,children:(0,o.jsxs)(d.oeA,{space:4,align:"center",children:[(0,o.jsx)(d.sgG,{width:"4/5",children:(0,o.jsx)(d.RWL,{type:"single",name:"power",value:b,onChange:e=>{y(e)},label:w(f),minValue:0,maxValue:100,step:1})}),(0,o.jsx)(d.sgG,{width:"1/5",children:(0,o.jsx)(d.Ki0,{value:b,onChange:y,onBlur:()=>console.log("blur"),label:w(f),minValue:0,maxValue:100,step:1})})]})})})]})},I=e=>{let{index:s}=e;var t;const[n,l]=(0,x.useState)(!1),{formulas:c,setFormulas:m,selectedFormulaId:p}=(0,a.Z)(),h=((null===(t=c[p])||void 0===t?void 0:t.steps)||[])[s].action,[g,f]=(0,x.useState)(h.profilingType||r.jk.Flowrate),{t:j}=(0,u.$G)();return(0,x.useEffect)((()=>{l(!1)}),[c]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>{l(!0)},children:j(h.profilingType)||r.jk.Flowrate}),n&&(0,o.jsx)(d.u_l,{size:"small",title:"Select an profiling method",onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{var e;l(!1),e=g,m((0,i.Uy)(c,(t=>{t[p].steps[s].action.actionType=r.g8.Profile,t[p].steps[s].action.profilingType=e})))}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,o.jsx)(d.Kqy,{space:16,children:(0,o.jsxs)(d.r5R,{space:8,columns:2,children:[(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:g==r.jk.Pressure?"solid":"outline",label:"Pressure",onPress:()=>{f(r.jk.Pressure)}}),(0,o.jsx)(d.zxk,{hierarchy:"primary",kind:g==r.jk.Power?"solid":"outline",label:"Power",onPress:()=>{f(r.jk.Power)}})]})})})]})};var E=t(84426),K=t(11163);const O=e=>{let{value:s,onChange:t}=e;console.log("action/ recreate");const[n,l]=(0,x.useState)(!1),{grinderSettings:r}=(0,a.Z)(),[i,c]=(0,x.useState)(s||""),{t:m}=(0,u.$G)();(0,K.useRouter)();return(0,y.q)((()=>{t("")})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>l(!0),children:""==i?m("[Select ingredient]"):i}),n&&(0,o.jsx)(d.u_l,{size:"small",title:m("Select ingredient"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),t(i)}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,o.jsxs)(d.Kqy,{space:8,children:[(0,o.jsx)(d.gFv,{space:4,children:r.map(((e,s)=>(0,o.jsx)(d.zxk,{kind:i==e.name?"solid":"outline",hierarchy:"primary",label:e.name,onPress:()=>c(e.name)},s)))}),(0,o.jsx)(d.jL0,{kind:"informative",title:m("Reminder"),description:m("You can set up your grinder in the settings, the hardware can be connected to the machine wirelessly to the espresso machine")})]})})]})},U=e=>{let{value:s,onChange:t}=e;const[n,l]=(0,x.useState)(!1),[r,a]=(0,x.useState)(null==s?100:s);(0,y.q)((()=>{t(r)}));const{t:i}=(0,u.$G)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"flex h-8 w-fit items-center justify-between rounded-lg p-2",onClick:()=>{l(!0)},children:(0,o.jsxs)("h1",{className:"text-xl font-bold text-blue-800",children:[null===s?100:s," %"]})}),n&&(0,o.jsx)(d.u_l,{size:"small",title:i("Set pump power"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),console.log(" update power",r),t(r)}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,o.jsxs)(d.Kqy,{space:8,children:[(0,o.jsxs)(d.oeA,{space:4,align:"center",children:[(0,o.jsx)(d.sgG,{width:"4/5",children:(0,o.jsx)(d.RWL,{type:"single",name:"power",value:r,onChange:e=>{console.log("Power is updated for pump",e),a(e)},label:i("Pump Power"),minValue:0,maxValue:100,step:1})}),(0,o.jsx)(d.sgG,{width:"1/5",children:(0,o.jsx)(d.Ki0,{value:r,onChange:a,onBlur:()=>console.log("blur"),label:i(""),minValue:0,maxValue:100,step:1})})]}),(0,o.jsx)(d.jL0,{kind:"informative",title:i("Notice"),description:i("Power require an external hardware to be connected to the machine, other wise it is simply ON/OFF"),action:{label:"Learn more",onPress:()=>{window.open("https://www.google.com")}}})]})})]})};function _(e){let{subIndex:s=-1,index:t}=e;const[n,l]=(0,x.useState)(!1),{formulas:c,setFormulas:m,selectedFormulaId:p,formulaFeedbacks:h}=(0,a.Z)(),g=c[p].steps[t],[f,j]=(0,x.useState)(-1==s?g.target.value:g.action.stepAmount||0),[v,b]=(0,x.useState)(0),{t:y}=(0,u.$G)();(0,x.useEffect)((()=>{var e,s,o;const n=(null===(o=h[p])||void 0===o||null===(s=o[t])||void 0===s||null===(e=s.target)||void 0===e?void 0:e.value)||0;b(10*n)}),[h,t,p]);(0,x.useRef)(null);return(0,o.jsxs)(o.Fragment,{children:[null!=v&&v>0&&(0,o.jsx)("h1",{className:" text-xl font-bold text-green-800",onClick:()=>l(!0),children:"".concat((v/10).toFixed(1),"/")}),(0,o.jsxs)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>l(!0),children:[f.toFixed(1),f<=1?" gram":" grams"]}),n&&(0,o.jsx)(d.u_l,{size:"small",title:y("How much ?"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),m((0,i.Uy)(c,(e=>{-1==s?(e[p].steps[t].target.targetType=r.YK.Weight,e[p].steps[t].target.value=f):g.action.stepAmount=f})))}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,o.jsxs)(d.Kqy,{space:8,children:[(0,o.jsxs)(d.oeA,{space:4,align:"center",children:[(0,o.jsx)(d.sgG,{width:"4/5",children:(0,o.jsx)(d.RWL,{type:"single",name:"weight",value:f,onChange:j,label:"Weight",minValue:0,maxValue:500,step:1})}),(0,o.jsx)(d.sgG,{width:"1/5",children:(0,o.jsx)(d.Ki0,{value:f,onChange:j,label:"Weight",minValue:0,maxValue:500,step:1})})]}),(0,o.jsx)(d.jL0,{kind:"informative",title:"Reminder",description:y("Calibration is required for accurate weight, please go to Settings")})]})})]})}var V=t(30780);const D=e=>{let{index:s}=e;const[t,n]=(0,x.useState)(!1),{t:l}=(0,u.$G)(),{formulas:r,setFormulas:c,selectedFormulaId:m}=(0,a.Z)(),p=r[m].steps[s].action;return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsx)(d.u_l,{size:"small",autoFocus:!1,title:l("Set color"),onClose:()=>n(!1),primaryAction:{label:l("OK"),onPress:async()=>{n(!1)}},secondaryAction:{label:l("Cancel"),onPress:()=>n(!1)},children:(0,o.jsx)("div",{className:"flex items-center justify-center w-full h-full p-4",children:(0,o.jsx)(V.iY,{className:"m-4",color:p.color||"#00aeef",onChange:(e,t)=>{console.log("set to colr ",e),c((0,i.Uy)(r,(t=>{var o=t[m].steps[s].action;o.color=e.hex,o.start=0,o.stop=0})))}})})}),(0,o.jsx)("button",{className:"ml-2 h-8 w-8  rounded-xl  ring-1 ring-white ",style:{backgroundColor:p.color||"#000000"},onClick:()=>{n(!0)}})]})};function L(e){let{onDelete:s,index:t}=e;const[n,l]=(0,x.useState)(!1),{formulas:m,setFormulas:p,selectedFormulaId:h}=(0,a.Z)(),g=m[h].steps||[],{t:f}=(0,u.$G)(),j=()=>(0,o.jsx)(d.u_l,{size:"small",title:"Customizing the step",onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1)}},secondaryAction:{label:"Cancel",onPress:()=>{l(!1)}},children:(0,o.jsxs)(d.Kqy,{space:8,children:[(0,o.jsx)(d.nvn,{value:g[t].comment||"",name:"StepComment",label:"Add a comment for this step",placeholder:"Type your comment here...",onChange:e=>{console.log("Comment for step ".concat(t,":"),e),p((0,i.Uy)(m,(s=>{s[h].steps[t].comment=e})))}}),(0,o.jsx)(d.zxk,{hierarchy:"danger",kind:"solid",label:"Delete this step",onPress:()=>{console.log("Deleting step ".concat(t)),s()}})]})});return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)(j,{}),(0,o.jsx)(E.E.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{ease:"easeInOut"},onDoubleClick:()=>{console.log("Step ".concat(t," double-clicked")),l(!0)},className:"-inset-1 rounded-xl bg-white",children:(0,o.jsxs)("div",{className:"flex h-fit w-96 max-w-[calc(90vw)] flex-col rounded-xl  border  bg-white p-4 drop-shadow-xl ",children:[(0,o.jsx)("button",{className:"absolute right-0 top-0 cursor-pointer p-2 z-50",onClick:()=>s(),children:(0,o.jsx)(c.maG,{className:"text-gray-300"})}),g[t].comment&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"text-sm text-gray-500 italic",children:(0,o.jsx)("h1",{children:g[t].comment})}),(0,o.jsx)("hr",{className:"my-4 border-gray-200"})]}),(0,o.jsxs)("div",{className:"max-w-96  items-center gap-2 space-x-1 text-wrap flex flex-row flex-wrap z-10",children:[(0,o.jsx)(v,{index:t}),m[h].steps[t].action.actionType===r.g8.Grind&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{index:t,subIndex:-1}),(0,o.jsx)(P,{text:f("of")}),(0,o.jsx)(O,{value:g[t].action.ingredient,onChange:e=>{p((0,i.Uy)(m,(s=>{s[h].steps[t].action.ingredient=e})))}}),(0,o.jsx)(P,{text:f("bean, grinder")}),(0,o.jsx)(w,{value:g[t].action.canSkip,onChange:e=>{p((0,i.Uy)(m,(s=>{s[h].steps[t].action.canSkip=e,s[h].steps[t].action.actionType=r.g8.Grind})))}}),!0===g[t].action.canSkip?(0,o.jsx)(P,{text:f("this step is portafilter is absent")}):(0,o.jsx)(P,{text:f("until portafilter is present")})]}),g[t].action.actionType===r.g8.Extract&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{index:t,subIndex:-1}),(0,o.jsx)(P,{text:f("with pump power")}),(0,o.jsx)(U,{value:g[t].action.power,onChange:e=>{p((0,i.Uy)(m,(s=>{s[h].steps[t].action.actionType=r.g8.Extract,s[h].steps[t].action.power=e})))}})]}),g[t].action.actionType===r.g8.RGB&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{text:"set all pixels to"}),(0,o.jsx)(D,{index:t})]}),g[t].action.actionType===r.g8.PourOver&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{text:f("total of")}),(0,o.jsx)(_,{index:t,subIndex:-1}),(0,o.jsx)(P,{text:f(", extract")}),(0,o.jsx)(_,{index:t,subIndex:0}),(0,o.jsx)(P,{text:f("every")}),(0,o.jsx)(N,{subIndex:-2,index:t}),(0,o.jsx)(P,{text:f("with pump power of")}),(0,o.jsx)(U,{value:g[t].action.pumpPower,onChange:e=>{p((0,i.Uy)(m,(s=>{s[h].steps[t].action.actionType=r.g8.PourOver,s[h].steps[t].action.pumpPower=e})))}})]}),g[t].action.actionType===r.g8.Rest&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{text:f("for")}),(0,o.jsx)(N,{subIndex:-1,index:t}),g[t].action.valveState&&(0,o.jsx)(P,{text:"but keep valve open"})]}),g[t].action.actionType===r.g8.Profile&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{text:f("to extract")}),(0,o.jsx)(_,{index:t,subIndex:-1}),(0,o.jsx)(P,{text:f("using")}),(0,o.jsx)(I,{index:t}),(0,o.jsx)(P,{text:f("profiling")}),(0,o.jsx)(z,{index:t}),(0,o.jsx)(A,{index:t})]})]})]})},t)]})}var Z=t(15948),W=t(87771),q=t(26281),Y=t(34546),$=t(66378),B=t(8720),H=t(56475);var M=()=>{var e,s,t,n,c,p,h,g,f,j;const v=(0,K.useRouter)(),[b,y]=(v.query.slug,(0,x.useState)(-1)),[w,P]=(0,x.useState)(-1),[C,F]=(0,x.useState)(!1),[S,N]=(0,x.useState)(!1),[T,z]=(0,x.useState)(!0),[R,A]=(0,x.useState)(!1),[G,I]=(0,x.useState)(""),{selectedFormulaId:E,registerSelectedFormulaId:O,setFormulas:U,formulas:_,setSelectedPage:D,registerFormulaClick:M,cancelFormulaClick:X,progressReport:J}=(0,a.Z)(),[Q,ee]=(0,x.useState)(!1),se=(0,x.useRef)(),[te,oe]=(0,x.useState)(!1),{formulaFeedbacks:ne}=(0,a.Z)();(0,x.useEffect)((()=>{se&&(clearTimeout(se.current),se.current=setTimeout((()=>{A(!1)}),2e3),A(!0))}),[ne,E]),(0,x.useEffect)((()=>{setTimeout((async()=>{await(0,B.ON)({command:"group.locate",buttonId:w+1,groupId:b+1})}))}),[b,w]),(0,x.useEffect)((function(){ee(!0)}),[]),(0,x.useEffect)((()=>{console.log("lab/ re-render",E)}),[E]);const{lang:le}=(0,u.gE)(),{t:re}=(0,u.$G)();re("Run");return(0,o.jsxs)(Y.default,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:"\u2615 ROSARIO"})}),te&&(0,o.jsx)(d.u_l,{size:"small",autoFocus:!1,title:re("Set color"),onClose:()=>oe(!1),primaryAction:{label:re("OK"),onPress:async()=>{oe(!1)}},secondaryAction:{label:re("Cancel"),onPress:()=>oe(!1)},children:(0,o.jsx)("div",{className:"flex items-center justify-center w-full h-full p-4",children:(0,o.jsx)(V.iY,{className:"m-4",color:(null===(e=_[E])||void 0===e?void 0:e.color)||"#00aeef",onChange:(e,s)=>{U((0,i.Uy)(_,(s=>{_[E]&&(_[E].color=e.hex)})))}})})}),C&&(0,o.jsxs)(d.u_l,{size:"large",autoFocus:!1,title:re("Assign to Button"),onClose:()=>F(!1),primaryAction:{label:re("Download"),onPress:async()=>{console.log("lab/ download formula to",{downloadTargetGroup:b,downloadTargetButton:w,selectedFormulaId:E}),await(0,$.gy)({groupId:b+1,buttonId:w+1,formulaId:E}),z(!0),setTimeout((()=>{F(!1)}),1e3)}},secondaryAction:{label:re("Cancel"),onPress:()=>F(!1)},children:[(0,o.jsxs)(d.uTp,{size:"medium",children:[re("This process will save the formula to a physical button on your cofee machine so you don't always need a mobile device connected"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(d.jL0,{kind:"informative",title:re("Notice"),description:re("The button order might not be the same physically, right after clicking saved, the button will blink to indicate which button it is in real life"),action:{label:"Learn more",onPress:()=>{window.open("https://www.google.com")}}})]}),(0,o.jsxs)("div",{className:"flex h-32 w-full flex-col space-y-4 p-4",children:[(0,o.jsx)(d.r5R,{space:8,columns:3,children:[1,2,3].map(((e,s)=>(0,o.jsx)(d.zxk,{label:re("Group ".concat(e)),hierarchy:"primary",kind:s===b?"solid":"outline",onPress:()=>y(s)},s)))}),(0,o.jsx)(d.r5R,{space:8,columns:4,children:[1,2,3,4].map(((e,s)=>(0,o.jsx)(d.zxk,{label:re("Button ".concat(e)),hierarchy:"primary",kind:s===w?"solid":"outline",onPress:()=>P(s)},s)))})]})]}),S&&(0,o.jsxs)(d.u_l,{title:"Share your formula",onClose:()=>N(!1),primaryAction:{label:"Copy",onPress:()=>{navigator.clipboard.writeText(G).then((()=>{console.log("Share token copied to clipboard.")}),(e=>{console.error("Could not copy share token to clipboard: ",e)})),N(!1)}},secondaryAction:{label:"Cancel",onPress:()=>N(!1)},children:[(0,o.jsx)(d.jL0,{kind:1==(null===(s=_[E])||void 0===s?void 0:s.isShared)?"positive":"informative",title:_[E].isShared?re("Shared to public"):re("Do you want to share this to public ?"),description:1==(null===(t=_[E])||void 0===t?void 0:t.isShared)?re("This formula is already shared, people can search for it using the formula name you choose."):re("If you share this formula, people can try it out also. They will get a copy of this formula."),action:{label:1==(null===(n=_[E])||void 0===n?void 0:n.isShared)?re("Hide"):re("Share"),onPress:()=>{U((0,i.Uy)(_,(e=>{e[E].isShared=!e[E].isShared})))}}}),(0,o.jsx)("div",{className:"flex justify-center items-center bg-gray-800 text-white p-4 rounded-lg mt-2",children:(0,o.jsx)("h1",{className:"text-2xl tracking-[.4em]",children:G})})]}),(0,o.jsxs)("div",{className:"flex flex-col  items-center space-y-4 p-4 mt-10",children:[(0,o.jsxs)("div",{className:(0,H.cn)("flex h-fit w-96 max-w-[calc(90vw)] flex-col space-y-4 rounded-xl border p-4 shadow-xl",1==(null===(c=_[E])||void 0===c?void 0:c.isShared)?"border-green-700":"border-black"),children:[(0,o.jsx)(d.mgC,{value:(null===(p=_[E])||void 0===p?void 0:p.category)||"",onChange:e=>{U((0,i.Uy)(_,(s=>{s[E].category=e||""})))},name:"category",label:"Which category best fit this formula ?",placeholder:"Select a color",options:[{value:"Espresso",label:"Espresso",kind:"two-line",secondLine:"Coffee in general"},{value:"Tea-presso",label:"Tea-pressor",kind:"two-line",secondLine:"Unique formula to extract green tea"},{value:"Pour over",label:"Pour over",kind:"two-line",secondLine:"Pour over coffee or brewing related"}]}),(0,o.jsx)(k.Z,{}),(0,o.jsxs)("div",{className:"flex items-center w-full",children:[(0,o.jsx)("div",{className:"flex-grow ",children:(0,o.jsx)(d.nvn,{value:null===(h=_[E])||void 0===h?void 0:h.title,onChange:e=>{U((0,i.Uy)(_,(s=>{console.log("Formulas",_,E),s[E].title=e})))},label:re("Formula"),placeholder:"Untitled formula"})}),(0,o.jsx)("button",{className:"ml-2 h-11 w-11  rounded-xl mt-6 ring-1 ring-black ",style:{backgroundColor:(null===(g=_[E])||void 0===g?void 0:g.color)||"#000000"},onClick:()=>{oe(!0)}})]}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-1 text-white",children:[!0===R?(0,o.jsxs)("div",{className:"flex h-12 w-2/5 cursor-pointer select-none flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-orange-400 to-red-400 p-4 text-white hover:border-blue-500",onClick:()=>{X(E)},children:[(0,o.jsx)(m.JuG,{}),(0,o.jsx)("h1",{children:"Stop"})]}):(0,o.jsxs)("div",{className:"flex h-12 w-2/5 cursor-pointer select-none flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-blue-400 to-emerald-400 p-4 text-white hover:border-blue-500",onClick:()=>{M(E)},children:[(0,o.jsx)(m.gmG,{}),(0,o.jsx)("h1",{children:re("Run")})]}),(0,o.jsx)("div",{className:"flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-4 hover:border-blue-500",onClick:()=>{console.log("download"),F(!0)},children:(0,o.jsx)(m.aBF,{})}),(0,o.jsx)("div",{className:"flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-blue-500 to-blue-600 p-4 hover:border-blue-500",onClick:async()=>{const e={formulas:_[E],timestamp:Date.now()},s=await fetch("https://api.anatalab.com/gateway/rosario/create_token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await s.json();console.log("Share token response",t);const o=t.token;I(o),N(!0)},children:(0,o.jsx)(m.PPi,{})}),(0,o.jsx)("div",{className:"flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-red-500 to-red-800 p-4 hover:border-blue-500",onClick:()=>{console.log("delete"),D("Formula"),O(""),U((0,i.Uy)(_,(e=>{delete _[E]}))),v.push("/rosario")},children:(0,o.jsx)(m.zYX,{})})]}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(d.RWL,{type:"single",name:"delay",label:re("Pressure build-up time"),value:(null===(f=_[E])||void 0===f?void 0:f.buildupDuration)||0,onChange:e=>{U((0,i.Uy)(_,(s=>(console.log("Formulas",_,E),s[E]&&(s[E].buildupDuration=e),s))))},minValue:0,maxValue:10})}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)(d.RWL,{type:"single",name:"delay",label:re("Weight compensation (gram)"),value:(null===(j=_[E])||void 0===j?void 0:j.lossyWeight)||0,onChange:e=>{U((0,i.Uy)(_,(s=>(console.log("Formulas",_,E),s[E]&&(s[E].lossyWeight=e),s))))},minValue:0,maxValue:100})})]}),(0,o.jsx)(k.Z,{}),(0,o.jsxs)("div",{className:" mix-w-80 flex flex-col items-center justify-center py-3 ",children:[(0,o.jsx)(Z.Z5,{onDragEnd:function(e,s){e.destination&&U((0,i.Uy)(_,(s=>{var t;const o=s[E],[n]=o.steps.splice(e.source.index,1);return o.steps.splice((null===e||void 0===e||null===(t=e.destination)||void 0===t?void 0:t.index)||0,0,n),s})))},onBeforeDragStart:()=>{console.log("onBeforeDragStart")},onDragStart:()=>{console.log("onDragStart")},onDragUpdate:()=>{console.log("onDragUpdate")},children:(0,o.jsx)("div",{className:"flex w-full flex-row",children:(0,o.jsx)(Z.bK,{droppableId:"ROOT",children:e=>{var s,t;return(0,o.jsxs)("div",{...e.droppableProps,ref:e.innerRef,className:"mx-auto flex w-full flex-col items-center justify-between space-y-4",children:[null===(s=(null===(t=_[E])||void 0===t?void 0:t.steps)||[])||void 0===s?void 0:s.map(((e,s)=>(console.log("render",{item:e,idx:s}),Q&&(0,o.jsx)(Z._l,{draggableId:null===e||void 0===e?void 0:e.id,index:s,children:t=>(0,o.jsx)("div",{className:"",...t.dragHandleProps,...t.draggableProps,ref:t.innerRef,children:(0,o.jsx)(L,{onDelete:()=>function(e){e&&U((0,i.Uy)(_,(s=>{const t=s[E];if(!t)return;const o=t.steps.findIndex((function(s){return(null===s||void 0===s?void 0:s.id)===e}));return-1!==o&&t.steps.splice(o,1),s[E]=t,s})))}(null===e||void 0===e?void 0:e.id),index:s})})},null===e||void 0===e?void 0:e.id)))),e.placeholder]})}})})}),(0,o.jsxs)("button",{className:"my-4 flex h-16 w-80 cursor-pointer flex-row items-center  justify-center space-x-4 rounded-xl border bg-blue-100",onClick:function(){U((0,i.Uy)(_,(e=>{e[E].steps.push({id:(0,q.Vj)(),action:{actionType:r.g8.Rest,valveState:!1},target:{targetType:r.YK.Time,value:10}})})))},children:[(0,o.jsx)(W.OzW,{color:"#1180EF",size:30}),(0,o.jsx)("p",{className:"text-lg font-bold text-[#1180EF]",children:re("Add Step")})]})]})]})]})}}},function(e){e.O(0,[838,396,660,296,817,509,365,127,391,768,594,630,456,262,977,282,546,774,888,179],(function(){return s=17503,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
//# sourceMappingURL=lab-6a8dae1a3f28910e.js.map