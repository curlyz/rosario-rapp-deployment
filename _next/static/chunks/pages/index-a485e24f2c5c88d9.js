(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(240)}])},2290:function(e,t,s){"use strict";var r=s(7294),a=s(1020);t.Z=()=>(0,r.useContext)(a.Tp)},9186:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var r=s(512),a=s(8388);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}},240:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(5893),a=s(1163),n=s(9968),o=s(8979),i=s(5282),l=s(2777),d=s(2290);function c(e){let{formula:t,onClickEdit:s,onClick:a,...n}=e,{draggable:o}=(0,d.Z)();return(0,r.jsxs)("div",{className:"border rounded-xl ".concat(t.backdrop,"  w-full h-full flex flex-col  transition-transform duration-200 hover:border-blue-500  items-center  justify-center shadow-large border border-white cursor-pointer select-none"),onMouseDown:e=>{a(),console.log("profile/ clicked")},children:[(0,r.jsxs)("div",{className:"absolute top-0 right-0 flex flex-col  items-center justify-between",children:[(0,r.jsx)("button",{className:"hover:opacity-50",onMouseDown:e=>{s(),e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{s(),e.preventDefault(),e.stopPropagation()},children:(0,r.jsx)(i.DVr,{size:32,className:"text-white m-1 "})}),o&&(0,r.jsx)("button",{children:(0,r.jsx)(l.uWH,{size:20,className:"text-white m-1 drag-handle"})})]}),(0,r.jsx)("h1",{className:"truncate text-clip text-balance text-xl text-center select-none text-white",children:t.title})]})}var u=s(7294),A=s(2091);s(3513),s(6281);var x=s(7136);let p=(0,n.WidthProvider)(n.Responsive);var f=()=>{let[e,t]=(0,u.useState)(!1),{formulas:s,setFormulas:n}=(0,d.Z)(),{layout:i,setLayout:f}=(0,d.Z)(),h=(0,a.useRouter)(),{showToast:m}=(0,x.pmc)(),[g,v]=(0,u.useState)(!1),{registerFormulaClick:j,registerSelectedFormulaId:w}=(0,d.Z)(),N=[];Object.values(s).forEach(e=>{let t=(0,r.jsx)("div",{className:"grid-item__title ",children:(0,r.jsx)("div",{className:"w-full h-full",children:(0,r.jsx)(c,{formula:e,onClick:()=>{j(e.id)},onClickEdit:()=>{w(e.id),h.push("/lab")}},e.id)})},e.id);N.push(t)});let{draggable:y}=(0,d.Z)();return y&&N.push((0,r.jsxs)("div",{className:"flex flex-col grid-item__title  bg-gray-300 cursor-pointer rounded-xl border  justify-center items-center hover:scale-105 transition-transform duration-200 hover:border-blue-500",children:[(0,r.jsx)("div",{className:"w-full h-full flex items-center justify-center drag-handle",onMouseDown:()=>{v(!0)},onTouchStart:()=>{v(!0)},children:(0,r.jsx)(A.wEH,{size:32,className:"text-white"})}),(0,r.jsx)("button",{className:"absolute top-0 right-0 drag-handle",children:(0,r.jsx)(l.uWH,{size:20,className:"text-white m-1 drag-handle"})})]},"add")),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.default,{children:[(0,r.jsx)("div",{className:"h-[80vh] dark:bg-gray",children:(0,r.jsx)(p,{compactType:null,className:"layout relative",layouts:i,isDraggable:y,isResizable:y,useCSSTransforms:!1,draggableHandle:".drag-handle",breakpoints:{lg:1280,md:992,sm:767,xs:430,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:(s,r)=>{if(!e){t(!0);return}f(r)},onDragStart:()=>{console.log("OnDragStart")},children:N})}),g&&(0,r.jsx)(x.u_l,{title:"Add Formula",onClose:()=>v(!1),primaryAction:{label:"OK",onPress:()=>v(!1)},secondaryAction:{label:"Cancel",onPress:()=>v(!1)},children:(0,r.jsx)(x.nvn,{label:"Formula Name",value:"",onChange:()=>{}})})]})})}},8979:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return F}});var r=s(5893),a=s(7136),n=s(1121),o=s(7094),i=s(4554),l=s(2290),d=s(7294),c=s(1163),u=()=>{let{connectButtonDisplay:e}=(0,l.Z)(),{selectedPage:t,setSelectedPage:s}=(0,l.Z)(),i=(0,c.useRouter)();return(0,r.jsx)("div",{className:"flex justify-center w-full fixed bottom-0 z-50",children:(0,r.jsx)(a.eBu,{space:4,children:(0,r.jsx)("div",{className:"flex justify-between  flex-row",children:"/lab"==i.pathname?(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"cursor-pointer",onClick:()=>{b,"/lab"==i.pathname&&i.push("/")},children:(0,r.jsx)("h1",{className:"text-xl font-bold dark:text-white",children:"/lab"==i.pathname?"◀ Back":t})})}):(0,r.jsxs)("div",{children:[(0,r.jsx)(a.zxk,{hierarchy:"Formula"===t?"primary":"secondary",kind:"transparent",label:"Formula",icon:()=>(0,r.jsx)(n.h1P,{}),onPress:()=>{s("Formula"),i.push("/")}}),(0,r.jsx)(a.zxk,{hierarchy:"Setting"===t?"primary":"secondary",kind:"transparent",label:"Settings",icon:()=>(0,r.jsx)(o.Fnt,{}),onPress:()=>{s("Setting"),i.push("/setting")}})]})})})})},A=s(80),x=s(8318),p=s(5675),f=s.n(p),h={src:"/_next/static/media/vietcafe.901768c4.jpeg",height:2048,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAK6Jf//EABoQAAICAwAAAAAAAAAAAAAAAAECEhQAMtH/2gAIAQEAAT8AFmwEZXhLYJIHmf/EABkRAQACAwAAAAAAAAAAAAAAAAEAMQIRIf/aAAgBAgEBPwDE0WvW5//EABgRAAIDAAAAAAAAAAAAAAAAAAABAiEx/9oACAEDAQE/AJW8P//Z",blurWidth:8,blurHeight:8},m=()=>{let{connectButtonStyle:e,connectButtonText:t,selectedPage:s,draggable:a,setDraggable:n,darkMode:o,setDarkMode:d,language:u,setLanguage:p,connected:m}=(0,l.Z)(),g=(0,c.useRouter)();return(0,r.jsxs)("div",{className:"flex justify-between items-center m-4",children:[(0,r.jsx)("div",{className:"logo rounded-xl dark:bg-white overflow-hidden dark:opacity-50",onClick:()=>{g.push("/")},children:(0,r.jsx)(f(),{src:h,alt:"VietCafe",width:50})}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-evenly h-[48px] space-x-1",children:[(0,r.jsx)("div",{className:"border border-purple-700 p-1 rounded-xl  h-[48px] w-[48px] flex justify-center items-center cursor-pointer ".concat(a?"bg-purple-800":""),onClick:()=>{n(!a)},children:a?(0,r.jsx)(x.Cv_,{className:"text-white"}):(0,r.jsx)(x.gMo,{className:"text-purple-700"})}),(0,r.jsx)("div",{className:"border border-purple-700 p-1 rounded-xl  h-[48px] w-[48px] flex justify-center items-center cursor-pointer ".concat(o?"bg-purple-800":""),onClick:()=>{d(!o)},children:o?(0,r.jsx)(A.Dq,{className:"text-white"}):(0,r.jsx)(A.hjx,{className:"text-purple-700"})}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-2 border border-purple-700 w-fit h-[48px] rounded-xl cursor-pointer p-3   ".concat(m?"bg-purple-700":""),onClick:()=>{(0,i.s0)()},children:[m?(0,r.jsx)(A.beQ,{className:"text-white"}):(0,r.jsx)(A.Vdu,{className:"text-purple-700"}),(0,r.jsx)("h1",{className:"".concat(m?"text-white":"text-black"," text-purple-700 select-none"),children:t})]})]})]})},g=s(2078),v=s(5139),j=s(9592),w=s(9186);let N=g.zt,y=d.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(g.l_,{ref:t,className:(0,w.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})});y.displayName=g.l_.displayName;let E=(0,v.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),C=d.forwardRef((e,t)=>{let{className:s,variant:a,...n}=e;return(0,r.jsx)(g.fC,{ref:t,className:(0,w.cn)(E({variant:a}),s),...n})});C.displayName=g.fC.displayName,d.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(g.aU,{ref:t,className:(0,w.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})}).displayName=g.aU.displayName;let S=d.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(g.x8,{ref:t,className:(0,w.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(j.Z,{className:"h-4 w-4"})})});S.displayName=g.x8.displayName;let k=d.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(g.Dx,{ref:t,className:(0,w.cn)("text-sm font-semibold",s),...a})});k.displayName=g.Dx.displayName;let D=d.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(g.dk,{ref:t,className:(0,w.cn)("text-sm opacity-90",s),...a})});D.displayName=g.dk.displayName;let T=0,_=new Map,I=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),O({type:"REMOVE_TOAST",toastId:e})},1e6);_.set(e,t)},M=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?I(s):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},Q=[],R={toasts:[]};function O(e){R=M(R,e),Q.forEach(e=>{e(R)})}function P(e){let{...t}=e,s=(T=(T+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>O({type:"DISMISS_TOAST",toastId:s});return O({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>O({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function B(){let{toasts:e}=function(){let[e,t]=d.useState(R);return d.useEffect(()=>(Q.push(t),()=>{let e=Q.indexOf(t);e>-1&&Q.splice(e,1)}),[e]),{...e,toast:P,dismiss:e=>O({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(N,{children:[e.map(function(e){let{id:t,title:s,description:a,action:n,...o}=e;return(0,r.jsxs)(C,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(k,{children:s}),a&&(0,r.jsx)(D,{children:a})]}),n,(0,r.jsx)(S,{})]},t)}),(0,r.jsx)(y,{})]})}var F=e=>{let{children:t}=e;return(0,r.jsxs)(a.Kqy,{space:4,children:[(0,r.jsx)(m,{}),(0,r.jsx)("div",{className:"mb-[56px]",children:t}),(0,r.jsx)(B,{}),(0,r.jsx)(u,{})]})}}},function(e){e.O(0,[838,660,817,509,365,970,415,281,611,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);