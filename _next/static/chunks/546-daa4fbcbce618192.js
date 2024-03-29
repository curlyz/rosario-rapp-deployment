"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{34546:function(e,t,s){s.r(t),s.d(t,{default:function(){return q}});var a=s(85893),o=s(61121),r=s(37094),i=s(17303),n=s(37039),l=s(11163),d=s(30080),c=s(56475);const x=()=>{const{switchLocales:e}=(0,i.Z)(),{lang:t}=(0,n.gE)();return(0,a.jsx)("div",{className:"absolute bottom-0 right-0 m-1 flex cursor-pointer flex-row items-center space-x-2 rounded-xl border p-4 hover:scale-105 select-none text-black dark:text-white border-black dark:border-white",onClick:()=>{"en"==localStorage.getItem("next-export-i18n-lang")?(console.log("switch language to vi"),e("vi")):(console.log("switch language to en"),e("en"))},children:(0,a.jsx)(d.$lZ,{size:16})})};var u=()=>{const e=(0,l.useRouter)(),{selectedPage:t,setSelectedPage:s}=(0,i.Z)(),{t:d,locales:u}=(0,n.$G)();return(0,a.jsxs)("div",{className:"fixed bottom-0 z-50 flex h-14 w-full justify-center bg-white dark:bg-black",style:{boxShadow:"1px -3px 5px 0px rgba(0,0,0,0.19)"},children:[(0,a.jsx)(x,{}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex flex-row  items-center justify-between",children:"/lab"==e.pathname?(0,a.jsx)("div",{className:"cursor-pointer flex-row items-center space-x-2 rounded-xl p-4",onClick:()=>{"/lab"==e.pathname&&e.push("/rosario")},children:(0,a.jsx)("h1",{className:"text-xl font-bold dark:text-white",children:"/lab"==e.pathname?d("\u25c0 Back"):t})}):(0,a.jsxs)("div",{className:"flex p cursor-pointer items-center space-x-8   p-4",children:[(0,a.jsxs)("button",{className:(0,c.cn)("flex items-center space-x-2 ","/rosario"==e.pathname?"text-black dark:text-white":"text-gray-500"),onClick:()=>{s("Formula"),e.push("/rosario")},children:[(0,a.jsx)(o.h1P,{}),(0,a.jsx)("h1",{children:d("Formula")})]}),(0,a.jsxs)("button",{className:(0,c.cn)("flex items-center space-x-2 ","/setting"==e.pathname?"text-black dark:text-white":"text-gray-500"),onClick:()=>{s("Setting"),e.push("/setting")},children:[(0,a.jsx)(r.Fnt,{}),(0,a.jsx)("h1",{children:d("Setting")})]})]})})})]})},h=s(22282),f=s(67294),p=s(77310),m=s(45139),g=s(41352),w=s(9186);const v=p.zt,b=f.forwardRef(((e,t)=>{let{className:s,...o}=e;return(0,a.jsx)(p.l_,{ref:t,className:(0,w.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...o})}));b.displayName=p.l_.displayName;const j=(0,m.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),y=f.forwardRef(((e,t)=>{let{className:s,variant:o,...r}=e;return(0,a.jsx)(p.fC,{ref:t,className:(0,w.cn)(j({variant:o}),s),...r})}));y.displayName=p.fC.displayName;f.forwardRef(((e,t)=>{let{className:s,...o}=e;return(0,a.jsx)(p.aU,{ref:t,className:(0,w.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...o})})).displayName=p.aU.displayName;const A=f.forwardRef(((e,t)=>{let{className:s,...o}=e;return(0,a.jsx)(p.x8,{ref:t,className:(0,w.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...o,children:(0,a.jsx)(g.Z,{className:"h-4 w-4"})})}));A.displayName=p.x8.displayName;const N=f.forwardRef(((e,t)=>{let{className:s,...o}=e;return(0,a.jsx)(p.Dx,{ref:t,className:(0,w.cn)("text-sm font-semibold",s),...o})}));N.displayName=p.Dx.displayName;const k=f.forwardRef(((e,t)=>{let{className:s,...o}=e;return(0,a.jsx)(p.dk,{ref:t,className:(0,w.cn)("text-sm opacity-90",s),...o})}));k.displayName=p.dk.displayName;let S=0;const E=new Map,_=e=>{if(E.has(e))return;const t=setTimeout((()=>{E.delete(e),I({type:"REMOVE_TOAST",toastId:e})}),1e6);E.set(e,t)},D=[];let T={toasts:[]};function I(e){T=((e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case"DISMISS_TOAST":{const{toastId:s}=t;return s?_(s):e.toasts.forEach((e=>{_(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===s||void 0===s?{...e,open:!1}:e))}}case"REMOVE_TOAST":return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))}}})(T,e),D.forEach((e=>{e(T)}))}function M(e){let{...t}=e;const s=(S=(S+1)%Number.MAX_SAFE_INTEGER,S.toString()),a=()=>I({type:"DISMISS_TOAST",toastId:s});return I({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>I({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function R(){const{toasts:e}=function(){const[e,t]=f.useState(T);return f.useEffect((()=>(D.push(t),()=>{const e=D.indexOf(t);e>-1&&D.splice(e,1)})),[e]),{...e,toast:M,dismiss:e=>I({type:"DISMISS_TOAST",toastId:e})}}();return(0,a.jsxs)(v,{children:[e.map((function(e){let{id:t,title:s,description:o,action:r,...i}=e;return(0,a.jsxs)(y,{...i,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[s&&(0,a.jsx)(N,{children:s}),o&&(0,a.jsx)(k,{children:o})]}),r,(0,a.jsx)(A,{})]},t)})),(0,a.jsx)(b,{})]})}var C=s(16702),O=s(29009),F=s(90935),P=s(14195),z=s(3023),U=s(75358),B=s(25048),K=s(33558),L=s(56880),W=s(93513),Z={src:"/_next/static/media/anatalab.5fcdbacd.png",height:562,width:914,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAWElEQVR42gXAwQmCUAAA0FdKYXSI4N8MvElExCc658kRXMEF9OLJJXQFcRHnEuLldf/IBKUzhLwOmzlZLQbI099x0qW99tBAoUjGW+bhqXQlir7eKn/RaQfDwgoNrkIztwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},Q=s(25675),X=s.n(Q),G=s(84426);var V=()=>{var e,t,s;(0,f.useRef)();const[o,r]=(0,f.useState)([]),{setModalDisplay:n,modalDisplay:d}=((0,f.useRef)(0),(0,i.Z)()),[x,u]=(0,f.useState)(0),[h,p]=(0,f.useState)(0),[m,g]=(0,f.useState)(!1),[w,v]=(0,f.useState)(Date.now());(0,f.useEffect)((()=>{d?window.innerHeight>window.innerWidth?(console.log("screen lock to landscape"),g(!0)):(console.log("screen lock to portrait"),g(!1)):screen.orientation.lock("auto")}),[d]),(0,f.useEffect)((()=>{u(window.innerHeight),p(window.innerWidth)}),[u,p]),(0,f.useEffect)((()=>{window.startMissionControl=e=>{v(Date.now()),console.log("rp.start mission stasrt"),r([])},window.updateMissionControl=e=>{console.log("mission/",e,o);const t={pressure:e.pressure<.5?0:Math.round(10*(e.pressure||0))/10,flowrate:Math.round(10*(e.flowrate||0))/10,power:e.power,weight:Math.round(10*(e.flowcount||0))/10,time:Math.round((Date.now()-w||0)/1e3)};r((0,W.Uy)(o,(e=>{e.push(t)})))},window.finishMissionControl=()=>{Math.round((Date.now()-w||0)/1e3)}}));const b=(0,l.useRouter)();return(0,a.jsxs)(G.E.div,{className:(0,c.cn)("w-full h-full overflow-clip  flex flex-col","bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"),children:[(0,a.jsxs)("div",{className:"flex flex-row h-20  bg-white border border-black shadow-xl p-2 overflow-auto justify-between w-screen space-x-6 ",children:[(0,a.jsx)("div",{className:"logo mt-1 cursor-pointer",onClick:()=>{b.push("/")},children:(0,a.jsx)(X(),{src:Z,alt:"AnataLAB Logo",width:80})}),(0,a.jsxs)("div",{className:"w-fit flex flex-col flex-grow ",children:[(0,a.jsx)("h1",{className:"text-xl text-gray-300",children:"Time"}),(0,a.jsxs)("h1",{className:"text-2xl text-black font-mono",children:[(Math.round((Date.now()-w)/100)/10).toFixed(1)||0," s"]})]}),(0,a.jsxs)("div",{className:"w-fit flex flex-col flex-grow ",children:[(0,a.jsx)("h1",{className:"text-xl text-gray-300",children:"Weight"}),(0,a.jsxs)("h1",{className:"text-2xl text-black font-mono",children:[((null===(e=o[o.length-1])||void 0===e?void 0:e.weight)||0).toFixed(1)," gram"]})]}),(0,a.jsxs)("div",{className:"w-fit flex flex-col flex-grow ",children:[(0,a.jsx)("h1",{className:"text-xl text-gray-300",children:"Flowrate"}),(0,a.jsxs)("h1",{className:"text-2xl text-black font-mono",children:[((null===(t=o[o.length-1])||void 0===t?void 0:t.flowrate)||0).toFixed(1)," gram/s"]})]}),(0,a.jsxs)("div",{className:"w-fit flex flex-col flex-grow ",children:[(0,a.jsx)("h1",{className:"text-xl text-gray-300",children:"Pressure"}),(0,a.jsxs)("h1",{className:"text-2xl text-black font-mono",children:[((null===(s=o[o.length-1])||void 0===s?void 0:s.pressure)||0).toFixed(1)," bar"]})]}),(0,a.jsx)("button",{className:"h-full w-fit bg-black hover:bg-white text-white hover:text-black font-bold  rounded border-black border",onClick:()=>{n(!1)},children:(0,a.jsx)("h1",{className:"m-4",children:"Close"})})]}),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)(O.h,{width:"100%",height:"100%",children:(0,a.jsxs)(F.c,{data:o,children:[(0,a.jsx)(P.q,{strokeDasharray:"3 3"}),(0,a.jsx)(z.K,{dataKey:"time",interval:40,padding:{left:30,right:30}}),(0,a.jsx)(U.B,{width:40,yAxisId:"pressure",tick:{fontSize:10},domain:[0,12],children:(0,a.jsx)(B._,{angle:-90,value:"Pressure",position:"left",dx:20})}),(0,a.jsx)(U.B,{width:40,yAxisId:"flowrate",orientation:"right",tick:{fontSize:10},domain:[0,20],children:(0,a.jsx)(B._,{angle:-90,value:"Flowrates",position:"left",dx:30})}),(0,a.jsx)(U.B,{width:40,yAxisId:"power",orientation:"right",tick:!1,domain:[0,100],axisLine:!1}),(0,a.jsx)(K.D,{}),(0,a.jsx)(L.x,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"pressure",yAxisId:"pressure",stroke:"#8884d8",activeDot:{r:8},strokeWidth:5}),(0,a.jsx)(L.x,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"flowrate",yAxisId:"flowrate",stroke:"#00aeef",strokeWidth:5}),(0,a.jsx)(L.x,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"power",yAxisId:"power",stroke:"#ff0000",strokeDasharray:"3 4 5 2"})]})})})]})};var q=e=>{let{children:t}=e;const{modalDisplay:s,setModalDisplay:o}=(0,i.Z)(),[r,n]=(0,f.useState)(!1);return(0,f.useEffect)((()=>{navigator.bluetooth||n(!0)}),[]),s?(0,a.jsx)("div",{className:"w-screen h-screen  z-50",children:(0,a.jsx)(V,{})}):(0,a.jsxs)(a.Fragment,{children:[r&&(0,a.jsxs)(C.u_l,{kind:"destructive",title:"Incompatible browser",onClose:()=>n(!1),primaryAction:{label:"OK",onPress:()=>{n(!1)}},children:[(0,a.jsx)(C.uTp,{size:"large",children:"This browser does not come with Bluetooth functionality to connect with ROSARIO. "}),["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document?(0,a.jsx)(C.uTp,{size:"large",children:"Please download and use BlueFy browser from App Store instead"}):(0,a.jsx)(C.uTp,{size:"large",children:"Please use Microsoft Edge or latest version of Chrome browser"})]}),(0,a.jsxs)(C.Kqy,{space:4,children:[(0,a.jsx)(h.Z,{}),(0,a.jsx)("div",{className:"mt-[48px] overflow-auto",style:{height:"calc(100vh - 48px - 56px )"},children:s?(0,a.jsx)(V,{}):t}),(0,a.jsx)(R,{}),(0,a.jsx)(u,{})]})]})}}}]);
//# sourceMappingURL=546-daa4fbcbce618192.js.map