(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{17503:function(e,l,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab",function(){return r(23132)}])},23132:function(e,l,r){"use strict";r.r(l);var n=r(85893),o=r(50361),s=r.n(o),i=r(57557),t=r.n(i),d=r(11163),a=r(67294),c=r(87771),u=r(26281),p=r(83842),f=r(15948),x=r(3170);l.default=()=>{(0,d.useRouter)().query.slug;let[e,l]=(0,a.useState)([{id:(0,u.Vj)(),type:"grinding",params:{},order:0},{id:(0,u.Vj)(),type:"profiling",params:{},order:1},{id:(0,u.Vj)(),type:"extracting",params:{},order:2}]),r=e=>e.sort((e,l)=>l.order-e.order)[0].order,o=(0,a.useCallback)(()=>{let n=s()(e);n.push({id:(0,u.Vj)(),type:"grinding",params:{},order:r(e)+1}),l(n),console.log(n)},[e]),i=(0,a.useCallback)(r=>{l(s()(e).filter(e=>(null==e?void 0:e.id)!==r))},[e]),g=(0,a.useCallback)((r,n)=>{let o=s()(e),i=null==o?void 0:o.find(e=>(null==e?void 0:e.id)===r);if(i){i.type=null==n?void 0:n.stepType;let e=t()(n,"stepType");i.params=null==e?void 0:e.params}l(o)},[e]),[h,j]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{j(!0)},[]),(0,n.jsx)(p.default,{children:(0,n.jsxs)("div",{className:"overflow-auto flex flex-col py-3 justify-center items-center mix-w-80 ",children:[(0,n.jsx)(f.Z5,{onDragEnd:r=>{if(!r.destination)return;let n=s()(e),[o]=n.splice(r.source.index,1);n.splice(r.destination.index,0,o),l(n)},onBeforeDragStart:()=>{console.log("onBeforeDragStart")},onDragStart:()=>{console.log("onDragStart")},onDragUpdate:()=>{console.log("onDragUpdate")},children:(0,n.jsx)("div",{className:"flex flex-row w-full",children:(0,n.jsx)(f.bK,{droppableId:"ROOT",children:l=>(0,n.jsxs)("div",{...l.droppableProps,ref:l.innerRef,className:"flex flex-col w-full justify-between mx-auto items-center space-y-4",children:[null==e?void 0:e.map((e,l)=>(console.log("render",{item:e,idx:l}),h&&(0,n.jsx)(f._l,{draggableId:null==e?void 0:e.id,index:l,children:l=>(0,n.jsx)("div",{className:"",...l.dragHandleProps,...l.draggableProps,ref:l.innerRef,children:(0,n.jsx)(x.N,{onDelete:()=>i(null==e?void 0:e.id),onChange:l=>g(null==e?void 0:e.id,l)})})},null==e?void 0:e.id))),l.placeholder]})})})}),(0,n.jsxs)("button",{className:"flex flex-row space-x-4 justify-center items-center rounded-xl border bg-white cursor-pointer w-80 h-16 my-4 bg-blue-100",onClick:o,children:[(0,n.jsx)(c.OzW,{color:"#1180EF",size:30}),(0,n.jsx)("p",{className:"text-[#1180EF] font-bold text-lg",children:"Add step"})]})]})})}}},function(e){e.O(0,[838,817,509,698,594,630,499,199,786,774,888,179],function(){return e(e.s=17503)}),_N_E=e.O()}]);