"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{65058:function(e,t,s){var r=s(67294),a=s(8253);t.Z=()=>(0,r.useContext)(a.Tp)},23482:function(e,t,s){s.d(t,{cn:function(){return n}});var r=s(90512),a=s(98388);function n(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}},61192:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});var r=s(85893),a=s(73384),n=s(61121),o=s(37094),i=s(65058),l=s(37039),c=s(11163),d=s(30080);const u=()=>{const{switchLocales:e}=(0,i.Z)(),{lang:t}=(0,l.gE)();return(0,r.jsx)("div",{className:"absolute bottom-0 right-0 m-1 flex cursor-pointer flex-row items-center space-x-2 rounded-xl border p-4 hover:text-purple-900 select-none",onClick:()=>{"en"==localStorage.getItem("next-export-i18n-lang")?(console.log("switch language to vi"),e("vi")):(console.log("switch language to en"),e("en"))},children:(0,r.jsx)(d.$lZ,{size:16})})};var A=()=>{const e=(0,c.useRouter)(),{selectedPage:t,setSelectedPage:s}=(0,i.Z)(),{t:d,locales:A}=(0,l.$G)();return(0,r.jsxs)("div",{className:"fixed bottom-0 z-50 flex h-14 w-full justify-center bg-white",style:{boxShadow:"1px -3px 5px 0px rgba(0,0,0,0.19)"},children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex flex-row  items-center justify-between",children:"/lab"==e.pathname?(0,r.jsx)("div",{className:"cursor-pointer flex-row items-center space-x-2 rounded-xl p-4",onClick:()=>{"/lab"==e.pathname&&e.push("/")},children:(0,r.jsx)("h1",{className:"text-xl font-bold dark:text-white",children:"/lab"==e.pathname?d("\u25c0 Back"):t})}):(0,r.jsxs)("div",{className:"p cursor-pointer flex-row items-center space-x-2 rounded-xl",children:[(0,r.jsx)(a.zxk,{hierarchy:"Formula"===t?"primary":"secondary",kind:"transparent",label:d("Formula"),icon:()=>(0,r.jsx)(n.h1P,{}),onPress:()=>{s("Formula"),e.push("/")}}),(0,r.jsx)(a.zxk,{hierarchy:"Setting"===t?"primary":"secondary",kind:"transparent",label:d("Settings"),icon:()=>(0,r.jsx)(o.Fnt,{}),onPress:()=>{s("Setting"),e.push("/setting")}})]})})})]})},x={src:"/_next/static/media/vietcafe.901768c4.jpeg",height:2048,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAK6Jf//EABoQAAICAwAAAAAAAAAAAAAAAAECEhQAMtH/2gAIAQEAAT8AFmwEZXhLYJIHmf/EABkRAQACAwAAAAAAAAAAAAAAAAEAMQIRIf/aAAgBAgEBPwDE0WvW5//EABgRAAIDAAAAAAAAAAAAAAAAAAABAiEx/9oACAEDAQE/AJW8P//Z",blurWidth:8,blurHeight:8},p=s(21769),f=s(25675),m=s.n(f),h=s(86204),g=s(18318);var v=()=>{const{connectButtonStyle:e,connectButtonText:t,selectedPage:s,draggable:a,setDraggable:n,darkMode:o,setDarkMode:l,language:u,setLanguage:A,connected:f,setAddFormulaOpen:v}=(0,i.Z)(),w=(0,c.useRouter)();return(0,r.jsxs)("div",{className:"fixed z-10 flex w-full items-center justify-between bg-transparent p-2 backdrop-blur-[20px]",children:[(0,r.jsx)("div",{className:"logo overflow-hidden rounded-xl dark:bg-white dark:opacity-50",onClick:()=>{w.push("/")},children:(0,r.jsx)(m(),{src:x,alt:"VietCafe",width:50})}),(0,r.jsxs)("div",{className:"flex h-[48px] flex-row items-center justify-evenly space-x-1",children:["/"==w.pathname&&(0,r.jsxs)(r.Fragment,{children:[a&&(0,r.jsxs)("div",{className:"flex h-[48px] w-[48px] cursor-pointer items-center  justify-center rounded-xl border border-dashed border-purple-800 p-1 ",onClick:()=>{v(!0)},children:[(0,r.jsx)(h.wEH,{className:"text-purple-700"})," "]}),(0,r.jsx)("div",{className:"flex h-[48px] w-[48px] cursor-pointer  items-center justify-center rounded-xl border border-purple-700 p-1 ".concat(a?"bg-purple-800":""),onClick:()=>{n(!a)},children:a?(0,r.jsx)(g.Cv_,{className:"text-white"}):(0,r.jsx)(g.gMo,{className:"text-purple-700"})})]}),(0,r.jsx)("div",{className:"flex h-[48px] w-[48px] cursor-pointer  items-center justify-center rounded-xl border border-purple-700 p-1 ".concat(o?"bg-purple-800":""),onClick:()=>{l(!o)},children:o?(0,r.jsx)(d.Dq,{className:"text-white"}):(0,r.jsx)(d.hjx,{className:"text-purple-700"})}),(0,r.jsxs)("div",{className:"flex h-[48px] w-fit cursor-pointer flex-row items-center justify-center space-x-2 rounded-xl border border-purple-700 p-3   ".concat(f?"bg-purple-700":""),onClick:()=>{(0,p.s0)()},children:[f?(0,r.jsx)(d.beQ,{className:"text-white"}):(0,r.jsx)(d.Vdu,{className:"text-purple-700"}),(0,r.jsx)("h1",{className:"".concat(f?"text-white":"text-black"," select-none text-purple-700"),children:t})]})]})]})},w=s(67294),j=s(62078),b=s(45139),N=s(79592),y=s(23482);const E=j.zt,C=w.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(j.l_,{ref:t,className:(0,y.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})}));C.displayName=j.l_.displayName;const S=(0,b.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),k=w.forwardRef(((e,t)=>{let{className:s,variant:a,...n}=e;return(0,r.jsx)(j.fC,{ref:t,className:(0,y.cn)(S({variant:a}),s),...n})}));k.displayName=j.fC.displayName;w.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(j.aU,{ref:t,className:(0,y.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})})).displayName=j.aU.displayName;const I=w.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(j.x8,{ref:t,className:(0,y.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(N.Z,{className:"h-4 w-4"})})}));I.displayName=j.x8.displayName;const D=w.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(j.Dx,{ref:t,className:(0,y.cn)("text-sm font-semibold",s),...a})}));D.displayName=j.Dx.displayName;const T=w.forwardRef(((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(j.dk,{ref:t,className:(0,y.cn)("text-sm opacity-90",s),...a})}));T.displayName=j.dk.displayName;let _=0;const M=new Map,Q=e=>{if(M.has(e))return;const t=setTimeout((()=>{M.delete(e),F({type:"REMOVE_TOAST",toastId:e})}),1e6);M.set(e,t)},B=[];let R={toasts:[]};function F(e){R=((e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case"DISMISS_TOAST":{const{toastId:s}=t;return s?Q(s):e.toasts.forEach((e=>{Q(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===s||void 0===s?{...e,open:!1}:e))}}case"REMOVE_TOAST":return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))}}})(R,e),B.forEach((e=>{e(R)}))}function O(e){let{...t}=e;const s=(_=(_+1)%Number.MAX_SAFE_INTEGER,_.toString()),r=()=>F({type:"DISMISS_TOAST",toastId:s});return F({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>F({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function P(){const{toasts:e}=function(){const[e,t]=w.useState(R);return w.useEffect((()=>(B.push(t),()=>{const e=B.indexOf(t);e>-1&&B.splice(e,1)})),[e]),{...e,toast:O,dismiss:e=>F({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(E,{children:[e.map((function(e){let{id:t,title:s,description:a,action:n,...o}=e;return(0,r.jsxs)(k,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(D,{children:s}),a&&(0,r.jsx)(T,{children:a})]}),n,(0,r.jsx)(I,{})]},t)})),(0,r.jsx)(C,{})]})}var Z="/_next/static/media/432997820_1300659664171876_8586090559895363958_n.c827027d.jpeg";var U=()=>{window.innerHeight,window.innterWidth;return(0,r.jsxs)("div",{className:"w-screen h-screen bg-blue-100 flex flex-col",children:[(0,r.jsx)("div",{className:"flex flex-row w-full h-20 bg-gray-100 mt-6 px-20",children:(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Brew"})}),(0,r.jsx)("img",{src:Z,alt:"demo",className:"w-screen h-screen absolute"})]})};var z=e=>{let{children:t}=e;const{modalDisplay:s,setModalDisplay:n}=(0,i.Z)();return(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)(U,{}):(0,r.jsxs)(a.Kqy,{space:4,children:[(0,r.jsx)(v,{}),(0,r.jsx)("div",{className:"my-[62px]",children:t}),(0,r.jsx)(P,{}),(0,r.jsx)(A,{})]})})}}}]);
//# sourceMappingURL=192-a61dfeb1a0d81c34.js.map