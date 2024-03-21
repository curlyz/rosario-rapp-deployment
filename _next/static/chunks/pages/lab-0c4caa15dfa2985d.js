(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{17503:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab",function(){return s(71772)}])},77505:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(85893),o=s(67294),l=s(12780),r=s(23482);const a=o.forwardRef(((e,t)=>{let{className:s,orientation:o="horizontal",decorative:a=!0,...i}=e;return(0,n.jsx)(l.f,{ref:t,decorative:a,orientation:o,className:(0,r.cn)("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",s),...i})}));a.displayName=l.f.displayName},71772:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return q}});var n=s(85893),o=s(9008),l=s.n(o),r=s(33350),a=s(65058),i=s(93513),c=s(30080),d=s(62646),u=s(37039),x=s(67294),m=s(52091),p=s(86204),h=s(71054),g=s(18318);const f=e=>{let{index:t}=e;const[s,o]=(0,x.useState)(!1),{formulas:l,setFormulas:c,selectedFormulaId:f}=(0,a.Z)(),[j,b]=(0,x.useState)(l[f].steps[t].action.actionType),v=l[f].steps[t],{t:y}=(0,u.$G)();return(0,x.useEffect)((()=>{o(!1)}),[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-xl font-bold text-orange-900 underline decoration-pink-500",onClick:()=>{o(!0)},children:y(v.action.actionType)||"Action"}),s&&(0,n.jsx)(d.u_l,{size:"large",title:y("Select an action"),onClose:()=>o(!1),primaryAction:{label:y("OK"),onPress:()=>{var e;o(!1),e=j,c((0,i.Uy)(l,(s=>{const n=s[f].steps[t].action;n.actionType=e;const o=s[f].steps[t].target;if(e==r.g8.Grind)o.targetType=r.YK.Weight;else if(e==r.g8.Extract)o.targetType=r.YK.Weight;else if(e==r.g8.Rest)o.targetType=r.YK.Time;else if(e==r.g8.Profile){o.targetType=r.YK.Weight;let e=n;e.segments=e.segments||[],e.profilingType=e.profilingType||r.jk.Flowrate}else e==r.g8.PourOver&&(o.targetType=r.YK.Weight);s[f].steps[t].action=n,s[f].steps[t].target=o})))}},secondaryAction:{label:y("Cancel"),onPress:()=>o(!1)},children:(0,n.jsxs)(d.r5R,{space:4,columns:3,children:[(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:j==r.g8.Grind?"solid":"outline",label:y("Grind"),onPress:()=>{b(r.g8.Grind)},icon:()=>(0,n.jsx)(h.nXt,{}),isDisabled:!0}),(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:j==r.g8.Extract?"solid":"outline",label:y("Extract"),onPress:()=>{b(r.g8.Extract)},icon:()=>(0,n.jsx)(g.bYu,{})}),(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:j==r.g8.Rest?"solid":"outline",label:y("Rest"),onPress:()=>{b(r.g8.Rest)},icon:()=>(0,n.jsx)(p.qyc,{})}),(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:j==r.g8.Profile?"solid":"outline",label:y("Profile"),onPress:()=>{b(r.g8.Profile)},icon:()=>(0,n.jsx)(m.p$z,{})})]})})]})};var j=s(37094),b=s(64158);const v=e=>{let{value:t,onChange:s}=e;const[o,l]=(0,x.useState)(!1),{t:r}=(0,u.$G)();(0,x.useEffect)((()=>{l(!1)}),[t]),(0,b.q)((()=>{s(!1)}));const[a,i]=(0,x.useState)(!0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>l(!0),children:r(a?"can skip":"must wait")}),o&&(0,n.jsx)(d.u_l,{autoFocus:!1,size:"small",title:r("Set grinder behaviour"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),s(a)}},secondaryAction:{label:r("Cancel"),onPress:()=>l(!1)},children:(0,n.jsxs)(d.Kqy,{space:8,children:[(0,n.jsxs)(d.r5R,{space:8,columns:2,children:[(0,n.jsx)(d.zxk,{kind:a?"solid":"outline",hierarchy:"primary",label:r("Can skip"),onPress:()=>i(!0),icon:()=>(0,n.jsx)(j.PCn,{})}),(0,n.jsx)(d.zxk,{kind:a?"outline":"solid",hierarchy:"primary",label:r("Must wait"),onPress:()=>i(!1),icon:()=>(0,n.jsx)(m.fSQ,{})})]}),(0,n.jsx)(d.jL0,{kind:"informative",title:r("Explaination"),description:r(a?"Grinder will skip this step if portafilter is not in position":"Grinder will wait until the portafilter is in position, then it will start grinding")})]})})]})};var y=s(71111),w=s(23482);y.fC,y.xz;const k=x.forwardRef(((e,t)=>{let{className:s,align:o="center",sideOffset:l=4,...r}=e;return(0,n.jsx)(y.h_,{children:(0,n.jsx)(y.VY,{ref:t,align:o,sideOffset:l,className:(0,w.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...r})})}));k.displayName=y.VY.displayName;var F=s(77505);const P=e=>{let{text:t}=e;return(0,n.jsx)(n.Fragment,{children:t.split(" ").map(((e,t)=>(0,n.jsx)("h1",{className:"mx-1 text-xl text-gray-900",children:e},t)))})};function C(e){let{index:t,subIndex:s=-1}=e;var o;const[l,r]=(0,x.useState)(!1),[c,m]=(0,x.useState)(-1),{formulas:p,setFormulas:h,selectedFormulaId:g}=(0,a.Z)(),{formulaFeedbacks:f}=(0,a.Z)(),[j,b]=(0,x.useState)(!1),v=p[g].steps[t],[y,w]=(0,x.useState)(-1==s?v.target.value:(null===(o=v.action.segments[s])||void 0===o?void 0:o.duration)||0);let k=(0,x.useRef)();(0,x.useEffect)((()=>{const e=-1==s?v.target.value:v.action.segments[s].duration||0;e!=c&&(w(e),b(!0),clearTimeout(k.current),k.current=setTimeout((()=>{b(!1)}),1e3))}),[p,g,t,s,v,c]),(0,x.useEffect)((()=>{var e,n,o;const l=null===(o=f[g])||void 0===o||null===(n=o[t])||void 0===n||null===(e=n.target)||void 0===e?void 0:e.value;-1==s&&m(l||-1)}),[f,t,g,s]);const{t:F}=(0,u.$G)();return(0,n.jsxs)(n.Fragment,{children:[null!=c&&c>0&&(0,n.jsx)("h1",{className:" text-xl font-bold text-green-800",onClick:()=>r(!0),children:"".concat((c/1e3).toFixed(1),"/")}),(0,n.jsxs)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>r(!0),children:[y.toFixed(1)," "+F(y<=1?"second":"seconds")]}),l&&(0,n.jsx)(d.u_l,{size:"small",title:F("How long?"),onClose:()=>r(!1),primaryAction:{label:F("OK"),onPress:()=>{r(!1),h((0,i.Uy)(p,(e=>{-1==s?e[g].steps[t].target.value=y:v.action.segments[s].duration=y})))}},secondaryAction:{label:F("Cancel"),onPress:()=>r(!1)},children:(0,n.jsx)(d.Kqy,{space:8,children:(0,n.jsxs)(d.oeA,{space:4,align:"center",children:[(0,n.jsx)(d.sgG,{width:"4/5",children:(0,n.jsx)(d.RWL,{type:"single",name:"time",value:y,onChange:w,label:F("Time"),minValue:0,maxValue:30,step:1})}),(0,n.jsx)(d.sgG,{width:"1/5",children:(0,n.jsx)(d.Ki0,{value:y,onChange:w,label:F("Time"),minValue:0,maxValue:500,step:1})})]})})})]})}const N=(e,t,s)=>{if(void 0===e)return[];const n=[];let o=0;e.forEach((e=>{o+=e.duration}));var l=0,a=0;for(const d of e){0==d.smooth&&(console.log("smooth is real"),t==r.jk.Pressure?n.push({timestamp:l,pressure:d.value,min:0,max:11}):t==r.jk.Flowrate?n.push({timestamp:l,flowrate:d.value,min:0,max:51}):t==r.jk.Power&&n.push({timestamp:l,power:d.value,min:0,max:101}),a=d.value);for(var i=0;i<d.duration;i+=1){var c=a+(d.value-a)*(i/d.duration);c=Math.round(10*c)/10,t==r.jk.Pressure?n.push({timestamp:l+i,pressure:c,max:10,min:0}):t==r.jk.Flowrate?n.push({timestamp:l+i,flowrate:c,max:50,min:0}):t==r.jk.Power&&n.push({timestamp:l+i,power:c,max:100,min:0})}a=d.value,l+=d.duration}return n},S=e=>{let{index:t}=e;(0,b.q)((()=>{o((0,i.Uy)(s,(e=>{const s=e[l].steps[t].action;return s.actionType="Profile",s.segments=s.segments||[],console.log("profile/ create object",s),0==s.segments.length&&(s.segments=[{duration:10,value:3,smooth:!1}]),e})))}));const{formulas:s,setFormulas:o,selectedFormulaId:l}=(0,a.Z)(),{t:r}=(0,u.$G)(),c=s[l].steps[t].action,d=(c.segments||[]).map(((e,s)=>(0,n.jsxs)("div",{className:"flex-rol flex flex-wrap",children:[0==s?(0,n.jsx)(P,{text:r("First,")}):(0,n.jsx)(P,{text:r("then")}),(0,n.jsx)(T,{index:t,subIndex:s}),(0,n.jsx)(z,{index:t,subIndex:s}),c.segments[s].smooth?(0,n.jsx)(P,{text:r("within")}):(0,n.jsx)(P,{text:r("for")}),(0,n.jsx)(C,{index:t,subIndex:s}),(0,n.jsx)("h1",{className:"text-xl",children:s===c.segments.length-1?".":","})]},s)));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F.Z,{}),(0,n.jsx)("ul",{children:d}),(0,n.jsxs)("div",{className:"flex h-10 w-fit cursor-pointer  flex-row items-center space-x-6 rounded-md bg-blue-100 p-2 transition-transform duration-200 border",children:[(0,n.jsx)(p.wEH,{color:"#00aeef",size:20,onClick:()=>{o((0,i.Uy)(s,(e=>{const s=e[l].steps[t].action;s.segments=s.segments||[],s.segments.push({duration:Math.floor(30*Math.random()),value:+(8*Math.random()+2).toFixed(1),smooth:!1})})))}}),(0,n.jsx)(p.iFH,{color:"#ff0000",size:20,onClick:()=>{void 0!==c.segments&&(c.segments.length<2||o((0,i.Uy)(s,(e=>(e[l].steps[t].action.segments.pop(),e)))))}})]})]})},T=e=>{let{index:t,subIndex:s=-1}=e;const{formulas:o,setFormulas:l,selectedFormulaId:r}=(0,a.Z)(),c=o[r].steps[t],{t:d}=(0,u.$G)();var x=0;s>0&&(x=c.action.segments[s-1].value);var m=x<c.action.segments[s].value;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:"text-xl font-bold text-orange-900",onClick:function(){l((0,i.Uy)(o,(e=>{e[r].steps[t].action.segments[s].smooth=!e[r].steps[t].action.segments[s].smooth})))},children:c.action.segments[s].smooth?d(m?"slowly reaching up":"slowly reaching down"):d("hold at")})})},R=e=>{let{index:t}=e;const[s,o]=(0,x.useState)([]),{formulas:l,setFormulas:i,selectedFormulaId:c}=(0,a.Z)(),{formulaFeedbacks:u}=(0,a.Z)(),m=l[c].steps[t].action,p=m.profilingType,h=m.segments,g=(0,x.useRef)([]);(0,x.useEffect)((()=>{try{var e;const n=null===(e=u[c][t])||void 0===e?void 0:e.action;if(!n)return void console.warn("No update from profileRune");console.log("Line/ add value",n),g.current=window.fbstore||[],window.fbstore=g.current;var s=g.current;s.push({...n,timestamp:Math.round(n.timestamp/1e3)});const l=N(h,p);l.map(((e,t)=>{s.forEach((t=>{t.timestamp==e.timestamp&&(e.flowrate=t.input,e.pressure=10*t.pressure||0)}))})),console.log("Line/ dpts",l,s),o(l)}catch(n){console.error("ProfileRune",n)}}),[u,t,h,c,p]),(0,x.useEffect)((()=>{o(N(h,p))}),[h,p]);const f={};return f[r.jk.Pressure]="pressure",f[r.jk.Flowrate]="flowrate",f[r.jk.Power]="power",(0,n.jsx)("div",{className:"hover:scale-120 w-full -translate-x-10 transition-transform duration-200",children:(0,n.jsx)(d.wWH,{height:300,dataKey:"Time",categories:[f[p]||"unknown sensor","flowrate","pressure"],hideLegend:!1,hideXAxis:!0,hideYAxis:!1,data:s,disableAnimation:!0},t)})},z=e=>{let{index:t,subIndex:s}=e;const[o,l]=(0,x.useState)(!1),{formulas:c,setFormulas:m,selectedFormulaId:p}=(0,a.Z)(),h=c[p].steps[t].action,g=h.profilingType,f=h.segments;let j="";g==r.jk.Pressure&&(j="bar"),g==r.jk.Flowrate?j="gram/s":g==r.jk.Power&&(j="%");r.jk.Pressure,r.jk.Flowrate,r.jk.Power;const[b,v]=(0,x.useState)(f[s].value),{t:y}=(0,u.$G)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex h-8 w-fit items-center justify-between rounded-lg p-2",onClick:()=>{l(!0)},children:(0,n.jsxs)("h1",{className:"text-xl font-bold text-blue-800",children:[null===b?100:b," %"]})}),o&&(0,n.jsx)(d.u_l,{size:"small",title:y("Set target"),onClose:()=>l(!1),primaryAction:{label:y("OK"),onPress:()=>{l(!1),m((0,i.Uy)(c,(e=>{e[p].steps[t].action.segments[s].value=b})))}},secondaryAction:{label:y("Cancel"),onPress:()=>l(!1)},children:(0,n.jsx)(d.Kqy,{space:8,children:(0,n.jsxs)(d.oeA,{space:4,align:"center",children:[(0,n.jsx)(d.sgG,{width:"4/5",children:(0,n.jsx)(d.RWL,{type:"single",name:"power",value:b,onChange:e=>{v(e)},label:y(g),minValue:0,maxValue:100,step:1})}),(0,n.jsx)(d.sgG,{width:"1/5",children:(0,n.jsx)(d.Ki0,{value:b,onChange:v,onBlur:()=>console.log("blur"),label:y(g),minValue:0,maxValue:100,step:1})})]})})})]})},I=e=>{let{index:t}=e;const[s,o]=(0,x.useState)(!1),{formulas:l,setFormulas:c,selectedFormulaId:m}=(0,a.Z)(),p=l[m].steps[t].action,[h,g]=(0,x.useState)(p.profilingType||r.jk.Flowrate),{t:f}=(0,u.$G)();return(0,x.useEffect)((()=>{o(!1)}),[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>{o(!0)},children:f(p.profilingType)||r.jk.Flowrate}),s&&(0,n.jsx)(d.u_l,{size:"small",title:"Select an profiling method",onClose:()=>o(!1),primaryAction:{label:"OK",onPress:()=>{var e;o(!1),e=h,c((0,i.Uy)(l,(s=>{s[m].steps[t].action.actionType=r.g8.Profile,s[m].steps[t].action.profilingType=e})))}},secondaryAction:{label:"Cancel",onPress:()=>o(!1)},children:(0,n.jsx)(d.Kqy,{space:16,children:(0,n.jsxs)(d.r5R,{space:8,columns:2,children:[(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:h==r.jk.Flowrate?"solid":"outline",label:"Flowrate",onPress:()=>{g(r.jk.Flowrate)}}),(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:h==r.jk.Pressure?"solid":"outline",label:"Pressure",onPress:()=>{g(r.jk.Pressure)}}),(0,n.jsx)(d.zxk,{hierarchy:"primary",kind:h==r.jk.Power?"solid":"outline",label:"Power",onPress:()=>{g(r.jk.Power)}})]})})})]})};var G=s(11163);const A=e=>{let{value:t,onChange:s}=e;console.log("action/ recreate");const[o,l]=(0,x.useState)(!1),{grinderSettings:r}=(0,a.Z)(),[i,c]=(0,x.useState)(t||""),{t:m}=(0,u.$G)();(0,G.useRouter)();return(0,b.q)((()=>{s("")})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>l(!0),children:""==i?m("[Select ingredient]"):i}),o&&(0,n.jsx)(d.u_l,{size:"small",title:m("Select ingredient"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),s(i)}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,n.jsxs)(d.Kqy,{space:8,children:[(0,n.jsx)(d.gFv,{space:4,children:r.map(((e,t)=>(0,n.jsx)(d.zxk,{kind:i==e.name?"solid":"outline",hierarchy:"primary",label:e.name,onPress:()=>c(e.name)},t)))}),(0,n.jsx)(d.jL0,{kind:"informative",title:m("Reminder"),description:m("You can set up your grinder in the settings, the hardware can be connected to the machine wirelessly to the espresso machine")})]})})]})},E=e=>{let{value:t,onChange:s}=e;const[o,l]=(0,x.useState)(!1),[r,a]=(0,x.useState)(null==t?100:t);(0,b.q)((()=>{s(r)}));const{t:i}=(0,u.$G)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex h-8 w-fit items-center justify-between rounded-lg p-2",onClick:()=>{l(!0)},children:(0,n.jsxs)("h1",{className:"text-xl font-bold text-blue-800",children:[null===t?100:t," %"]})}),o&&(0,n.jsx)(d.u_l,{size:"small",title:i("Set pump power"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),console.log(" update power",r),s(r)}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,n.jsxs)(d.Kqy,{space:8,children:[(0,n.jsxs)(d.oeA,{space:4,align:"center",children:[(0,n.jsx)(d.sgG,{width:"4/5",children:(0,n.jsx)(d.RWL,{type:"single",name:"power",value:r,onChange:e=>{console.log("Power is updated for pump",e),a(e)},label:i("Pump Power"),minValue:0,maxValue:100,step:1})}),(0,n.jsx)(d.sgG,{width:"1/5",children:(0,n.jsx)(d.Ki0,{value:r,onChange:a,onBlur:()=>console.log("blur"),label:i(""),minValue:0,maxValue:100,step:1})})]}),(0,n.jsx)(d.jL0,{kind:"informative",title:i("Notice"),description:i("Power require an external hardware to be connected to the machine, other wise it is simply ON/OFF"),action:{label:"Learn more",onPress:()=>{window.open("https://www.google.com")}}})]})})]})};function K(e){let{subIndex:t=-1,index:s}=e;const[o,l]=(0,x.useState)(!1),{formulas:c,setFormulas:m,selectedFormulaId:p,formulaFeedbacks:h}=(0,a.Z)(),g=c[p].steps[s],[f,j]=(0,x.useState)(g.target.value),[b,v]=(0,x.useState)(0),{t:y}=(0,u.$G)();(0,x.useEffect)((()=>{var e,t,n;const o=(null===(n=h[p])||void 0===n||null===(t=n[s])||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||0;v(10*o)}),[h,s,p]);(0,x.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[null!=b&&b>0&&(0,n.jsx)("h1",{className:" text-xl font-bold text-green-800",onClick:()=>l(!0),children:"".concat((b/10).toFixed(1),"/")}),(0,n.jsxs)("h1",{className:" text-xl font-bold text-blue-800",onClick:()=>l(!0),children:[g.target.value.toFixed(1),g.target.value<=1?" gram":" grams"]}),o&&(0,n.jsx)(d.u_l,{size:"small",title:y("How much ?"),onClose:()=>l(!1),primaryAction:{label:"OK",onPress:()=>{l(!1),m((0,i.Uy)(c,(e=>{e[p].steps[s].target.targetType=r.YK.Weight,e[p].steps[s].target.value=f})))}},secondaryAction:{label:"Cancel",onPress:()=>l(!1)},children:(0,n.jsxs)(d.Kqy,{space:8,children:[(0,n.jsxs)(d.oeA,{space:4,align:"center",children:[(0,n.jsx)(d.sgG,{width:"4/5",children:(0,n.jsx)(d.RWL,{type:"single",name:"weight",value:f,onChange:j,label:"Weight",minValue:0,maxValue:500,step:1})}),(0,n.jsx)(d.sgG,{width:"1/5",children:(0,n.jsx)(d.Ki0,{value:f,onChange:j,label:"Weight",minValue:0,maxValue:500,step:1})})]}),(0,n.jsx)(d.jL0,{kind:"informative",title:"Reminder",description:y("Calibration is required for accurate weight, please go to Settings")})]})})]})}function O(e){let{onDelete:t,index:s}=e;const{formulas:o,setFormulas:l,selectedFormulaId:d}=(0,a.Z)(),x=o[d].steps||[],{t:m}=(0,u.$G)();return(0,n.jsx)("div",{className:"-inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600",children:(0,n.jsxs)("div",{className:"flex h-fit w-96 max-w-[calc(90vw)] flex-col rounded-xl  border  bg-white p-4 drop-shadow-xl transition-transform duration-200 hover:border-blue-500",children:[(0,n.jsx)("div",{className:"absolute right-0 top-0 cursor-pointer p-2",onClick:()=>t(),children:(0,n.jsx)(c.maG,{className:"text-gray-300"})}),(0,n.jsxs)("div",{className:"inline-flex max-w-96 flex-wrap items-center gap-2 space-x-1 text-wrap",children:[(0,n.jsx)(f,{index:s}),o[d].steps[s].action.actionType===r.g8.Grind&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(K,{index:s,subIndex:-1}),(0,n.jsx)(P,{text:m("of")}),(0,n.jsx)(A,{value:x[s].action.ingredient,onChange:e=>{l((0,i.Uy)(o,(t=>{t[d].steps[s].action.ingredient=e})))}}),(0,n.jsx)(P,{text:m("bean, grinder")}),(0,n.jsx)(v,{value:x[s].action.canSkip,onChange:e=>{l((0,i.Uy)(o,(t=>{t[d].steps[s].action.canSkip=e,t[d].steps[s].action.actionType=r.g8.Grind})))}}),!0===x[s].action.canSkip?(0,n.jsx)(P,{text:m("this step is portafilter is absent")}):(0,n.jsx)(P,{text:m("until portafilter is present")})]}),x[s].action.actionType===r.g8.Extract&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(K,{index:s,subIndex:-1}),(0,n.jsx)(P,{text:m("with pump power")}),(0,n.jsx)(E,{value:x[s].action.power,onChange:e=>{l((0,i.Uy)(o,(t=>{t[d].steps[s].action.actionType=r.g8.Extract,t[d].steps[s].action.power=e})))}})]}),x[s].action.actionType===r.g8.PourOver&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{text:m("total of")}),(0,n.jsx)(K,{index:s,subIndex:-1}),(0,n.jsx)(P,{text:m(", extract")}),(0,n.jsx)(K,{index:s,subIndex:0}),(0,n.jsx)(P,{text:m("every")}),(0,n.jsx)(C,{subIndex:-1,index:s})]}),x[s].action.actionType===r.g8.Rest&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{text:m("for")}),(0,n.jsx)(C,{subIndex:-1,index:s}),x[s].action.valveState&&(0,n.jsx)(P,{text:"but keep valve open"})]}),"Profile"===x[s].action.actionType&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{text:m("to extract")}),(0,n.jsx)(K,{index:s,subIndex:-1}),(0,n.jsx)(P,{text:m("using")}),(0,n.jsx)(I,{index:s}),(0,n.jsx)(P,{text:m("profiling")}),(0,n.jsx)(S,{index:s}),(0,n.jsx)(R,{index:s})]})]})]})})}var _=s(15948),V=s(87771),U=s(26281),W=s(12006),Z=s(77797),L=s(21769);var q=()=>{var e,t,s;const o=(0,G.useRouter)(),[c,p]=(o.query.slug,(0,x.useState)(-1)),[h,g]=(0,x.useState)(-1),[f,j]=(0,x.useState)(!1),[b,v]=(0,x.useState)(!1),[y,w]=(0,x.useState)(!0),[k,P]=(0,x.useState)(!1),[C,N]=(0,x.useState)(""),{selectedFormulaId:S,registerSelectedFormulaId:T,setFormulas:R,formulas:z,setSelectedPage:I,registerFormulaClick:A,cancelFormulaClick:E,progressReport:K}=(0,a.Z)(),[q,D]=(0,x.useState)(!1),Y=(0,x.useRef)(),{formulaFeedbacks:$}=(0,a.Z)();(0,x.useEffect)((()=>{Y&&(clearTimeout(Y.current),Y.current=setTimeout((()=>{P(!1)}),2e3),P(!0))}),[$,S]),(0,x.useEffect)((()=>{setTimeout((async()=>{await(0,L.ON)({command:"group.locate",buttonId:h+1,groupId:c+1})}))}),[c,h]),(0,x.useEffect)((function(){D(!0)}),[]),(0,x.useEffect)((()=>{console.log("lab/ re-render",S)}),[S]);const{lang:B}=(0,u.gE)(),{t:H}=(0,u.$G)();H("Run");return(0,n.jsxs)(W.default,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"\u2615 ROSARIO"})}),f&&(0,n.jsxs)(d.u_l,{size:"large",autoFocus:!1,title:H("Assign to Button"),onClose:()=>j(!1),primaryAction:{label:H("Download"),onPress:async()=>{console.log("lab/ download formula to",{downloadTargetGroup:c,downloadTargetButton:h,selectedFormulaId:S}),await(0,Z.gy)({groupId:c+1,buttonId:h+1,formulaId:S}),w(!0),setTimeout((()=>{j(!1)}),1e3)}},secondaryAction:{label:H("Cancel"),onPress:()=>j(!1)},children:[(0,n.jsxs)(d.uTp,{size:"medium",children:[H("This process will save the formula to a physical button on your cofee machine so you don't always need a mobile device connected"),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(d.jL0,{kind:"informative",title:H("Notice"),description:H("The button order might not be the same physically, right after clicking saved, the button will blink to indicate which button it is in real life"),action:{label:"Learn more",onPress:()=>{window.open("https://www.google.com")}}})]}),(0,n.jsxs)("div",{className:"flex h-32 w-full flex-col space-y-4 p-4",children:[(0,n.jsx)(d.r5R,{space:8,columns:3,children:[1,2,3].map(((e,t)=>(0,n.jsx)(d.zxk,{label:H("Group ".concat(e)),hierarchy:"primary",kind:t===c?"solid":"outline",onPress:()=>p(t)},t)))}),(0,n.jsx)(d.r5R,{space:8,columns:4,children:[1,2,3,4].map(((e,t)=>(0,n.jsx)(d.zxk,{label:H("Button ".concat(e)),hierarchy:"primary",kind:t===h?"solid":"outline",onPress:()=>g(t)},t)))})]})]}),b&&(0,n.jsx)(d.u_l,{title:"Share",onClose:()=>v(!1),primaryAction:{label:"OK",onPress:()=>v(!1)},secondaryAction:{label:"Cancel",onPress:()=>v(!1)},children:(0,n.jsx)(d.uTp,{size:"medium",children:C})}),(0,n.jsxs)("div",{className:"flex flex-col  items-center space-y-4 p-4",children:[(0,n.jsxs)("div",{className:" flex  h-fit w-96 max-w-[calc(90vw)] flex-col space-y-4 rounded-xl border p-4 shadow-xl",children:[(0,n.jsx)(d.nvn,{value:null===(e=z[S])||void 0===e?void 0:e.title,onChange:e=>{R((0,i.Uy)(z,(t=>{console.log("Formulas",z,S),t[S].title=e})))},label:H("Formula"),placeholder:"Untitled formula"}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-1 text-white",children:[!0===k?(0,n.jsxs)("div",{className:"flex h-12 w-2/5 cursor-pointer select-none flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-orange-400 to-red-400 p-4 text-white hover:border-blue-500",onClick:()=>{E(S)},children:[(0,n.jsx)(m.JuG,{}),(0,n.jsx)("h1",{children:"Stop"})]}):(0,n.jsxs)("div",{className:"flex h-12 w-2/5 cursor-pointer select-none flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-blue-400 to-emerald-400 p-4 text-white hover:border-blue-500",onClick:()=>{A(S)},children:[(0,n.jsx)(m.gmG,{}),(0,n.jsx)("h1",{children:H("Run")})]}),(0,n.jsx)("div",{className:"flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-4 hover:border-blue-500",onClick:()=>{console.log("download"),j(!0)},children:(0,n.jsx)(m.aBF,{})}),(0,n.jsx)("div",{className:"flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-blue-500 to-blue-600 p-4 hover:border-blue-500",onClick:async()=>{const e={formulas:z[S],timestamp:Date.now()},t=await fetch("https://api.anatalab.com/gateway/rosario/create_token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();console.log("Share token response",s);const n=s.token;N(n),v(!0)},children:(0,n.jsx)(m.PPi,{})}),(0,n.jsx)("div",{className:"flex h-12 w-1/5 cursor-pointer flex-row items-center justify-evenly rounded-xl border bg-white bg-gradient-to-r from-red-500 to-red-800 p-4 hover:border-blue-500",onClick:()=>{console.log("delete"),I("Formula"),T(""),R((0,i.Uy)(z,(e=>{delete z[S]}))),o.push("/")},children:(0,n.jsx)(m.zYX,{})})]}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(d.RWL,{type:"single",name:"delay",label:H("Pressure build-up time"),value:(null===(t=z[S])||void 0===t?void 0:t.buildupDuration)||0,onChange:e=>{R((0,i.Uy)(z,(t=>(console.log("Formulas",z,S),t[S]&&(t[S].buildupDuration=e),t))))},minValue:0,maxValue:10})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(d.RWL,{type:"single",name:"delay",label:H("Weight compensation (gram)"),value:(null===(s=z[S])||void 0===s?void 0:s.lossyWeight)||0,onChange:e=>{R((0,i.Uy)(z,(t=>(console.log("Formulas",z,S),t[S]&&(t[S].lossyWeight=e),t))))},minValue:0,maxValue:100})})]}),(0,n.jsx)(F.Z,{}),(0,n.jsxs)("div",{className:" mix-w-80 flex flex-col items-center justify-center py-3 ",children:[(0,n.jsx)(_.Z5,{onDragEnd:function(e,t){e.destination&&R((0,i.Uy)(z,(t=>{var s;const n=t[S],[o]=n.steps.splice(e.source.index,1);return n.steps.splice((null===e||void 0===e||null===(s=e.destination)||void 0===s?void 0:s.index)||0,0,o),t})))},onBeforeDragStart:()=>{console.log("onBeforeDragStart")},onDragStart:()=>{console.log("onDragStart")},onDragUpdate:()=>{console.log("onDragUpdate")},children:(0,n.jsx)("div",{className:"flex w-full flex-row",children:(0,n.jsx)(_.bK,{droppableId:"ROOT",children:e=>{var t,s;return(0,n.jsxs)("div",{...e.droppableProps,ref:e.innerRef,className:"mx-auto flex w-full flex-col items-center justify-between space-y-4",children:[null===(t=(null===(s=z[S])||void 0===s?void 0:s.steps)||[])||void 0===t?void 0:t.map(((e,t)=>(console.log("render",{item:e,idx:t}),q&&(0,n.jsx)(_._l,{draggableId:null===e||void 0===e?void 0:e.id,index:t,children:s=>(0,n.jsx)("div",{className:"",...s.dragHandleProps,...s.draggableProps,ref:s.innerRef,children:(0,n.jsx)(O,{onDelete:()=>function(e){R((0,i.Uy)(z,(t=>{const s=t[S];return s.steps=s.steps.filter((function(t){return(null===t||void 0===t?void 0:t.id)!==e})),t})))}(null===e||void 0===e?void 0:e.id),index:t})})},null===e||void 0===e?void 0:e.id)))),e.placeholder]})}})})}),(0,n.jsxs)("button",{className:"my-4 flex h-16 w-80 cursor-pointer flex-row items-center  justify-center space-x-4 rounded-xl border bg-blue-100",onClick:function(){R((0,i.Uy)(z,(e=>{e[S].steps.push({id:(0,U.Vj)(),action:{actionType:r.g8.Rest,valveState:!1},target:{targetType:r.YK.Time,value:10}})})))},children:[(0,n.jsx)(V.OzW,{color:"#1180EF",size:30}),(0,n.jsx)("p",{className:"text-lg font-bold text-[#1180EF]",children:H("Add Step")})]})]})]})]})}}},function(e){e.O(0,[838,396,660,817,509,365,127,594,630,578,801,230,6,774,888,179],(function(){return t=17503,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=lab-0c4caa15dfa2985d.js.map