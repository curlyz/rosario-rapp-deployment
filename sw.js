if(!self.define){let e,a={};const c=(c,i)=>(c=new URL(c+".js",i).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const s=e=>c(e,n),d={module:{uri:n},exports:t,require:s};a[n]=Promise.all(i.map((e=>d[e]||s(e)))).then((e=>(f(...e),t)))}}define(["./workbox-88575b92"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_next/static/chunks/019d026b-3689418735717f0a.js",revision:"2d54cea3ac96af902b94c0cbc764a621"},{url:"_next/static/chunks/117b9d7f-3ac7e281e72b0a28.js",revision:"fb94bc85ca0861bbaf598fa919bad69c"},{url:"_next/static/chunks/125-f06084620a56bb0c.js",revision:"6f4f86bf6a1cb6fe50afe6edbcc0a137"},{url:"_next/static/chunks/2e3a845b-1367e946b429099d.js",revision:"f823f873b027d33b80cf4dc794f5339c"},{url:"_next/static/chunks/317-1a6ccbcb6d563c8a.js",revision:"cd65fef8864f841e5691fddadbad4eee"},{url:"_next/static/chunks/388-ba0888ebe8527a26.js",revision:"2b144dba91c16110cecf07d0fa4ed4f8"},{url:"_next/static/chunks/41155975-8f0f50a93894131e.js",revision:"2bf9f80db3c22ffb55a3b3fb09f04509"},{url:"_next/static/chunks/446-6396e15c34346a7e.js",revision:"6c405a39a3a74f9e59310a020948f0af"},{url:"_next/static/chunks/4577d2ec-c281a270a978b6f4.js",revision:"26b9c392a2d4d616a48144f9326fb5c8"},{url:"_next/static/chunks/69480c19-8a0f4914c3a8d727.js",revision:"2a05c381c9337344c5b932945effdda7"},{url:"_next/static/chunks/6eb5140f-e9b84206e9be8597.js",revision:"8d2c50d4194828df86b4f55062f5e24b"},{url:"_next/static/chunks/85d7bc83-67af60a91b7b93a6.js",revision:"3185464478c69b1f60729b7f99915176"},{url:"_next/static/chunks/968-9330a88fc0f19846.js",revision:"2b229a239b7a7d1ead39dd8a4e143fb3"},{url:"_next/static/chunks/bee240a3-e8a8bc1e8eed3ddc.js",revision:"9ac19c599e2f712990f25305f058a605"},{url:"_next/static/chunks/cb355538-f60d5b3df3e9a86c.js",revision:"3b18ec0f15f2f8b928be22dcd719cc1b"},{url:"_next/static/chunks/ebc70433-4847ca6c9b1de8a1.js",revision:"72e0698ee27774bfa17b2461c309716e"},{url:"_next/static/chunks/fea29d9f-3f533fde5285c03b.js",revision:"ab0baa09aca68c11f7fcf0eb07b44fea"},{url:"_next/static/chunks/framework-5429a50ba5373c56.js",revision:"abba1ab5a91e57321e4e354dcf9e831a"},{url:"_next/static/chunks/main-18a986b8471251f8.js",revision:"7a39f54680f93df5453e87be994ee4c1"},{url:"_next/static/chunks/pages/_app-7134fbae2a494eeb.js",revision:"acbd2c41a07967c08a9b58a8244ac653"},{url:"_next/static/chunks/pages/_error-f757c9b3711de666.js",revision:"42e65998aae32cbdeb69d8f764c45ef8"},{url:"_next/static/chunks/pages/formula-f49e73be2593cd9c.js",revision:"0a0aa9db40afa4dd198bd039a4731874"},{url:"_next/static/chunks/pages/index-157fd05146eab459.js",revision:"7dec80c48843ffcbeb364135c8555799"},{url:"_next/static/chunks/pages/lab-8bc05f96e9fc3b93.js",revision:"6bdc754591f5b64f18404a581924818c"},{url:"_next/static/chunks/pages/layout-14eef6e9f7e9771d.js",revision:"20751c78e998547f1e440533d509b9f6"},{url:"_next/static/chunks/pages/setting-a50b3645cb038d2e.js",revision:"23f3601e0eed505d34784c8b362074f6"},{url:"_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"_next/static/chunks/webpack-2f903acb0cccbf9e.js",revision:"a8f4bf35ea7c0987efe00434b0b1f6f4"},{url:"_next/static/css/e8510f2429fbdaf1.css",revision:"7d095e8ce616a9f050d0a7db39573e4f"},{url:"_next/static/FZGRt49EHzwBZrSF5KDP4/_buildManifest.js",revision:"277a4bc1ac54cc63e26bf4dc019d817f"},{url:"_next/static/FZGRt49EHzwBZrSF5KDP4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"_next/static/media/lexend-latin-400-normal-OMLSLG7L.7317259b.woff",revision:"5821637a33a0f480b4cd07f42b08f895"},{url:"_next/static/media/lexend-latin-400-normal-TXD5HADB.9dc7d380.woff2",revision:"3b8aa30032e80c2892dbeb88827e45c8"},{url:"_next/static/media/lexend-latin-500-normal-HIODHDY4.3a1c338f.woff",revision:"2672e7239a9b720cbab9b94795a57b2f"},{url:"_next/static/media/lexend-latin-500-normal-TWHLSJHQ.9d8eb924.woff2",revision:"84934ed50eafcb517a62eee9d3fbabf9"},{url:"_next/static/media/lexend-latin-600-normal-ECT7A3QM.20a7f06e.woff2",revision:"58b86bade516612b34403836a9c45663"},{url:"_next/static/media/lexend-latin-600-normal-ZVKM4TXD.cd54ce4e.woff",revision:"152fc6c4cca3d20a48fef56a7b8e1495"},{url:"_next/static/media/lexend-latin-ext-400-normal-LGQ77ZL7.59a1ffe5.woff",revision:"43c08fc0854b8a6ea5878c5bcac433fc"},{url:"_next/static/media/lexend-latin-ext-400-normal-WDIG73YG.b0d06fef.woff2",revision:"79b102695eddfcb0a8ce9b0b6708b9da"},{url:"_next/static/media/lexend-latin-ext-500-normal-27XMPCTB.d7eec78a.woff2",revision:"1341d0d07be9cc59cd8ab81baf49517a"},{url:"_next/static/media/lexend-latin-ext-500-normal-JWFHKIPP.4d8a7521.woff",revision:"00453e9c02cdccbbe5f485ef10bbd511"},{url:"_next/static/media/lexend-latin-ext-600-normal-BLPH63HA.0ade7f6c.woff",revision:"f983ed4528ffa662ed922a0829019607"},{url:"_next/static/media/lexend-latin-ext-600-normal-W4BHWVG7.b7027b54.woff2",revision:"a13338bf7f83baac5bc635703dda20bc"},{url:"_next/static/media/lexend-vietnamese-400-normal-D4Y447LW.1f31ce7d.woff2",revision:"be35e8de3c8bae9c0ce3243098df43d9"},{url:"_next/static/media/lexend-vietnamese-400-normal-FN4Z23SD.2b799d6e.woff",revision:"19efb22927a61e0d79a50452bc83ab54"},{url:"_next/static/media/lexend-vietnamese-500-normal-75ZMUCXS.ff72ca0a.woff2",revision:"e7b6083e7e86e1289ba37fe30b6e8176"},{url:"_next/static/media/lexend-vietnamese-500-normal-GANXTL6B.301b79af.woff",revision:"839be899bd4c7c530f73bef95f294ed2"},{url:"_next/static/media/lexend-vietnamese-600-normal-ODVW3DB6.70eb6d8c.woff",revision:"7936fc10f4d3e94febb9c6795d28870b"},{url:"_next/static/media/lexend-vietnamese-600-normal-V2R6IRK5.aea3e445.woff2",revision:"d03e81e889d2924db43d13f78a0457b6"},{url:"404.html",revision:"2f4e193d217bd39013f6398307012747"},{url:"favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"formula.html",revision:"d5e21e596a87ab34487316e74261dbf3"},{url:"index.html",revision:"d92176387509d51ff82209ead661e616"},{url:"lab.html",revision:"21021acb6a13c3dd9e0b47b315ee67e5"},{url:"layout.html",revision:"5bc7e3550d1d2ff6e85dc2213abd609f"},{url:"next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"setting.html",revision:"8db5d23c8e7e35b57224a3f628c07cf7"},{url:"vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{})}));
//# sourceMappingURL=sw.js.map
