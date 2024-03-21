"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{65058:function(e,t,s){var r=s(67294),a=s(29151);t.Z=()=>(0,r.useContext)(a.Tp)},23482:function(e,t,s){s.d(t,{cn:function(){return o}});var r=s(90512),a=s(98388);function o(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}},81696:function(e,t,s){s.r(t),s.d(t,{default:function(){return Y}});var r=s(85893),a=s(16702),o=s(61121),n=s(37094),i=s(65058),d=s(37039),l=s(11163),c=s(30080);const u=()=>{const{switchLocales:e}=(0,i.Z)(),{lang:t}=(0,d.gE)();return(0,r.jsx)("div",{className:"absolute bottom-0 right-0 m-1 flex cursor-pointer flex-row items-center space-x-2 rounded-xl border p-4 hover:text-purple-900 select-none",onClick:()=>{"en"==localStorage.getItem("next-export-i18n-lang")?(console.log("switch language to vi"),e("vi")):(console.log("switch language to en"),e("en"))},children:(0,r.jsx)(c.$lZ,{size:16})})};var x=()=>{const e=(0,l.useRouter)(),{selectedPage:t,setSelectedPage:s}=(0,i.Z)(),{t:c,locales:x}=(0,d.$G)();return(0,r.jsxs)("div",{className:"fixed bottom-0 z-50 flex h-14 w-full justify-center bg-white",style:{boxShadow:"1px -3px 5px 0px rgba(0,0,0,0.19)"},children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex flex-row  items-center justify-between",children:"/lab"==e.pathname?(0,r.jsx)("div",{className:"cursor-pointer flex-row items-center space-x-2 rounded-xl p-4",onClick:()=>{"/lab"==e.pathname&&e.push("/")},children:(0,r.jsx)("h1",{className:"text-xl font-bold dark:text-white",children:"/lab"==e.pathname?c("\u25c0 Back"):t})}):(0,r.jsxs)("div",{className:"p cursor-pointer flex-row items-center space-x-2 rounded-xl",children:[(0,r.jsx)(a.zxk,{hierarchy:"Formula"===t?"primary":"secondary",kind:"transparent",label:c("Formula"),icon:()=>(0,r.jsx)(o.h1P,{}),onPress:()=>{s("Formula"),e.push("/")}}),(0,r.jsx)(a.zxk,{hierarchy:"Setting"===t?"primary":"secondary",kind:"transparent",label:c("Settings"),icon:()=>(0,r.jsx)(n.Fnt,{}),onPress:()=>{s("Setting"),e.push("/setting")}})]})})})]})},p={src:"/_next/static/media/anatalab.5fcdbacd.png",height:562,width:914,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAWElEQVR42gXAwQmCUAAA0FdKYXSI4N8MvElExCc658kRXMEF9OLJJXQFcRHnEuLldf/IBKUzhLwOmzlZLQbI099x0qW99tBAoUjGW+bhqXQlir7eKn/RaQfDwgoNrkIztwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},m=s(21769),f=s(25675),h=s.n(f),g=s(86204),w=s(18318);var v=()=>{const{connectButtonStyle:e,connectButtonText:t,selectedPage:s,draggable:a,setDraggable:o,darkMode:n,setDarkMode:d,language:u,setLanguage:x,connected:f,setAddFormulaOpen:v}=(0,i.Z)(),j=(0,l.useRouter)();return(0,r.jsxs)("div",{className:"fixed z-10 flex w-full items-center justify-between bg-transparent p-2 backdrop-blur-[20px]",children:[(0,r.jsx)("div",{className:"logo overflow-hidden ",onClick:()=>{j.push("/")},children:(0,r.jsx)(h(),{src:p,alt:"AnataLAB Logo",width:80})}),(0,r.jsxs)("div",{className:"flex h-[48px] flex-row items-center justify-evenly space-x-1",children:["/"==j.pathname&&(0,r.jsxs)(r.Fragment,{children:[a&&(0,r.jsxs)("div",{className:"flex h-[48px] w-[48px] cursor-pointer items-center  justify-center rounded-xl border border-dashed border-purple-800 p-1 ",onClick:()=>{v(!0)},children:[(0,r.jsx)(g.wEH,{className:"text-purple-700"})," "]}),(0,r.jsx)("div",{className:"flex h-[48px] w-[48px] cursor-pointer  items-center justify-center rounded-xl border border-purple-700 p-1 ".concat(a?"bg-purple-800":""),onClick:()=>{o(!a)},children:a?(0,r.jsx)(w.Cv_,{className:"text-white"}):(0,r.jsx)(w.gMo,{className:"text-purple-700"})})]}),(0,r.jsx)("div",{className:"flex h-[48px] w-[48px] cursor-pointer  items-center justify-center rounded-xl border border-purple-700 p-1 ".concat(n?"bg-purple-800":""),onClick:()=>{d(!n)},children:n?(0,r.jsx)(c.Dq,{className:"text-white"}):(0,r.jsx)(c.hjx,{className:"text-purple-700"})}),(0,r.jsxs)("div",{className:"flex h-[48px] w-fit cursor-pointer flex-row items-center justify-center space-x-2 rounded-xl border border-purple-700 p-3   ".concat(f?"bg-purple-700":""),onClick:()=>{(0,m.s0)()},children:[f?(0,r.jsx)(c.beQ,{className:"text-white"}):(0,r.jsx)(c.Vdu,{className:"text-purple-700"}),(0,r.jsx)("h1",{className:"".concat(f?"text-white":"text-black"," select-none text-purple-700"),children:t})]})]})]})},j=s(67294),b=s(62078),y=s(45139),A=s(79592),N=s(23482);const S=b.zt,k=j.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(b.l_,{ref:t,className:(0,N.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})}));k.displayName=b.l_.displayName;const E=(0,y.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),T=j.forwardRef(((e,t)=>{let{className:s,variant:a,...o}=e;return(0,r.jsx)(b.fC,{ref:t,className:(0,N.cn)(E({variant:a}),s),...o})}));T.displayName=b.fC.displayName;j.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(b.aU,{ref:t,className:(0,N.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})})).displayName=b.aU.displayName;const D=j.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(b.x8,{ref:t,className:(0,N.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(A.Z,{className:"h-4 w-4"})})}));D.displayName=b.x8.displayName;const I=j.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(b.Dx,{ref:t,className:(0,N.cn)("text-sm font-semibold",s),...a})}));I.displayName=b.Dx.displayName;const C=j.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(b.dk,{ref:t,className:(0,N.cn)("text-sm opacity-90",s),...a})}));C.displayName=b.dk.displayName;let M=0;const R=new Map,_=e=>{if(R.has(e))return;const t=setTimeout((()=>{R.delete(e),F({type:"REMOVE_TOAST",toastId:e})}),1e6);R.set(e,t)},O=[];let z={toasts:[]};function F(e){z=((e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case"DISMISS_TOAST":{const{toastId:s}=t;return s?_(s):e.toasts.forEach((e=>{_(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===s||void 0===s?{...e,open:!1}:e))}}case"REMOVE_TOAST":return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))}}})(z,e),O.forEach((e=>{e(z)}))}function U(e){let{...t}=e;const s=(M=(M+1)%Number.MAX_SAFE_INTEGER,M.toString()),r=()=>F({type:"DISMISS_TOAST",toastId:s});return F({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>F({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function B(){const{toasts:e}=function(){const[e,t]=j.useState(z);return j.useEffect((()=>(O.push(t),()=>{const e=O.indexOf(t);e>-1&&O.splice(e,1)})),[e]),{...e,toast:U,dismiss:e=>F({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(S,{children:[e.map((function(e){let{id:t,title:s,description:a,action:o,...n}=e;return(0,r.jsxs)(T,{...n,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(I,{children:s}),a&&(0,r.jsx)(C,{children:a})]}),o,(0,r.jsx)(D,{})]},t)})),(0,r.jsx)(k,{})]})}var K=s(29009),L=s(60215),W=s(14195),Z=s(3023),P=s(75358),Q=s(26050),X=s(33558),V=s(86108),q=s(56880),G=s(93513),H=s(59463),J=s(84426);var $=()=>{const e=(0,j.useRef)(),[t,s]=(0,j.useState)([]),{setModalDisplay:a}=((0,j.useRef)(0),(0,i.Z)()),[o,n]=(0,j.useState)(window.innerHeight),[d,l]=(0,j.useState)(window.innerWidth),[c,u]=(0,j.useState)(!1);return(0,j.useEffect)((()=>{window.addEventListener("resize",(()=>{u(window.innerHeight>window.innerWidth)}))})),(0,j.useEffect)((()=>{window.startMissionControl=e=>{window.missionStartTimestamp=Date.now(),console.log("rp.start mission stasrt"),s([])},window.updateMissionControl=e=>{console.log("mission/",e,t);const r={pressure:Math.round(10*(e.pressure||0))/10,flowrate:Math.round(10*(e.flowrate||0))/10,power:e.power,weight:Math.round(10*(e.flowcount||0))/10,time:Math.round((Date.now()-window.missionStartTimestamp||0)/1e3)};s((0,G.Uy)(t,(e=>{e.push(r)})))},window.clearMissionControl=()=>{clearTimeout(e.current),e.current=setTimeout((()=>{s([])}),1e4)}})),(0,r.jsxs)(J.E.div,{className:(0,H.cn)("w-screen h-screen  flex flex-col"),animate:{rotate:c?90:0},children:[(0,r.jsx)("div",{className:"flex flex-row w-full h-20  mt-6 px-20",children:(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Brew"})}),(0,r.jsx)("div",{className:"absolute top-0 right-0 m-4",children:(0,r.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{a(!1)},children:"Close"})}),(0,r.jsx)(K.h,{width:"100%",height:"100%",children:(0,r.jsxs)(L.c,{data:t,children:[(0,r.jsx)(W.q,{strokeDasharray:"3 3"}),(0,r.jsx)(Z.K,{dataKey:"time",interval:40,padding:{left:30,right:30}}),(0,r.jsx)(P.B,{width:80,yAxisId:"left",tick:{fontSize:10},domain:[0,12]}),(0,r.jsx)(P.B,{width:80,yAxisId:"right",orientation:"right",tick:{fontSize:10},domain:[0,20]}),(0,r.jsx)(Q.u,{}),(0,r.jsx)(X.D,{}),(0,r.jsx)(V.u,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"weight",yAxisId:"right",fill:"#eeeeee",fillOpacity:.8}),(0,r.jsx)(q.x,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"pressure",yAxisId:"left",stroke:"#8884d8",activeDot:{r:8},strokeWidth:5}),(0,r.jsx)(q.x,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"flowrate",yAxisId:"right",stroke:"#00aeef",strokeWidth:5}),(0,r.jsx)(q.x,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"power",yAxisId:"right",stroke:"#ff0000"})]})})]})};var Y=e=>{let{children:t}=e;const{modalDisplay:s,setModalDisplay:o}=(0,i.Z)();return(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)($,{}):(0,r.jsxs)(a.Kqy,{space:4,children:[(0,r.jsx)(v,{}),(0,r.jsx)("div",{className:"my-[62px]",children:t}),(0,r.jsx)(B,{}),(0,r.jsx)(x,{})]})})}},59463:function(e,t,s){s.d(t,{cn:function(){return o}});var r=s(90512),a=s(98388);function o(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}}}]);
//# sourceMappingURL=696-65b6c03eef706cc4.js.map