if(!self.define){let e,a={};const c=(c,i)=>(c=new URL(c+".js",i).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let s={};const t=e=>c(e,n),d={module:{uri:n},exports:s,require:t};a[n]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(f(...e),s)))}}define(["./workbox-88575b92"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_next/static/chunks/019d026b-c74be9e0c4268dfb.js",revision:"7857a0638c5cb9f50d60db1cf6a1995f"},{url:"_next/static/chunks/100-34f989971e099afc.js",revision:"9765e493b753a204e37e4ceceed8f746"},{url:"_next/static/chunks/115-780aa1355693c7c1.js",revision:"f8f2952b7aa14f33d27732d42874aaf4"},{url:"_next/static/chunks/117b9d7f-d6bf2f5bc0e605dc.js",revision:"86c37d201a3b505a4cff74561deff0b2"},{url:"_next/static/chunks/281-68768249bff2793c.js",revision:"88c0cbdbd11bab1baece0c3f7ad91a71"},{url:"_next/static/chunks/2e3a845b-15b3d49cf91bb7ec.js",revision:"4b1e511464acb66a7c8cba7dfe451a38"},{url:"_next/static/chunks/41155975-b9cc8a0f5600c749.js",revision:"40d36c182b42af01309d52b3ada42501"},{url:"_next/static/chunks/415-4a0354a62b83d177.js",revision:"db2143641fdac4b2718625d9e817e55c"},{url:"_next/static/chunks/426-b72e4d0d8b564762.js",revision:"c253bc6ead35caad392e3ecb18ff0b99"},{url:"_next/static/chunks/4577d2ec-c90ab6c13fbeb506.js",revision:"d7f8ebf75c40969235335983a8523fa3"},{url:"_next/static/chunks/485-3f306ea6a98cb1ae.js",revision:"6814e6e7591ac3e14340cfa610d7e470"},{url:"_next/static/chunks/4fee24eb-aaaac05ce642916e.js",revision:"ff0fded96fa1f4f2925da73d724b8399"},{url:"_next/static/chunks/68c0a17d-5992b5fe0c3d00fc.js",revision:"9fe17bed093d7b219226095b95eedece"},{url:"_next/static/chunks/69480c19-d4abaf9dcd43fbed.js",revision:"3500babf8e158f50efc79c841a1715c9"},{url:"_next/static/chunks/810-52db179a2474ece8.js",revision:"11ed19588d31600a06c9ce9ac0779576"},{url:"_next/static/chunks/85d7bc83-41f4eceee5a253b7.js",revision:"c3d7f0734e6d739d2b1874db40f23204"},{url:"_next/static/chunks/bee240a3-625944cbed4b62b0.js",revision:"e805d8167393f72646ad8e474dfac659"},{url:"_next/static/chunks/cb355538-1bf758d05329a268.js",revision:"31cb5fc0d69bfe69d8d28944a1197295"},{url:"_next/static/chunks/e21e5bbe-2a315655a263360e.js",revision:"8223f3c0804f60e10ca487d88be7385e"},{url:"_next/static/chunks/ebc70433-0f1c3695f02191ee.js",revision:"f4eba3c9366817705032d09b2c067608"},{url:"_next/static/chunks/fd9d1056-e983fcfa2355e86c.js",revision:"03343ad24e35d4bf25ca5be37fd49bca"},{url:"_next/static/chunks/fea29d9f-c1baf71a8d09a161.js",revision:"d4cc5b7f335ea2711a2bb5e90e716f0a"},{url:"_next/static/chunks/framework-603509333e6f69e9.js",revision:"acbdaa15b8ef6af4df886dc73b09d03f"},{url:"_next/static/chunks/main-4afecb29decffb7c.js",revision:"cd3d8d658c8ba75750646eb18ad79ebc"},{url:"_next/static/chunks/main-app-f4344751bdf13608.js",revision:"e13870091caf12ccc2f343a0e040abee"},{url:"_next/static/chunks/pages/_app-725ba048072f45af.js",revision:"06979d6b84a0fa4b7f9eeae09953a3dd"},{url:"_next/static/chunks/pages/_error-c82863c5c44bef4c.js",revision:"40c6cd8d5aeb2d260e8f476cff5b2f3c"},{url:"_next/static/chunks/pages/formula-918e6f929555bb22.js",revision:"30b5cb690547fae7db17af86e473e74c"},{url:"_next/static/chunks/pages/index-654ca1312fcf6b6d.js",revision:"b17d4b98c68a128826d5627611cd685e"},{url:"_next/static/chunks/pages/lab-120bd2f2973ece22.js",revision:"dfabe9c3f350a2f65a9b5f9b636b12f0"},{url:"_next/static/chunks/pages/layout-1dccaf1de266fc80.js",revision:"743a6da11a66b88175198abf0d31977e"},{url:"_next/static/chunks/pages/setting-3f593192acc2b407.js",revision:"f0d3beb27c30e4fdab9fbcb04be8672f"},{url:"_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"_next/static/chunks/webpack-407420c61d405925.js",revision:"38bb1dccc51c630bb6704b9d7a4a87f2"},{url:"_next/static/css/2468b5341a28ea1a.css",revision:"0c1e3c344c593d9a7f8670429a26370a"},{url:"_next/static/d0RMF9NVFFRPsY_3-MJWV/_buildManifest.js",revision:"f3470220513d33b98a9c3af64c979a4b"},{url:"_next/static/d0RMF9NVFFRPsY_3-MJWV/_ssgManifest.js",revision:"b404e23d62d95bafd03ad7747cc0e88b"},{url:"_next/static/media/lexend-latin-400-normal-OMLSLG7L.7317259b.woff",revision:"5821637a33a0f480b4cd07f42b08f895"},{url:"_next/static/media/lexend-latin-400-normal-TXD5HADB.9dc7d380.woff2",revision:"3b8aa30032e80c2892dbeb88827e45c8"},{url:"_next/static/media/lexend-latin-500-normal-HIODHDY4.3a1c338f.woff",revision:"2672e7239a9b720cbab9b94795a57b2f"},{url:"_next/static/media/lexend-latin-500-normal-TWHLSJHQ.9d8eb924.woff2",revision:"84934ed50eafcb517a62eee9d3fbabf9"},{url:"_next/static/media/lexend-latin-600-normal-ECT7A3QM.20a7f06e.woff2",revision:"58b86bade516612b34403836a9c45663"},{url:"_next/static/media/lexend-latin-600-normal-ZVKM4TXD.cd54ce4e.woff",revision:"152fc6c4cca3d20a48fef56a7b8e1495"},{url:"_next/static/media/lexend-latin-ext-400-normal-LGQ77ZL7.59a1ffe5.woff",revision:"43c08fc0854b8a6ea5878c5bcac433fc"},{url:"_next/static/media/lexend-latin-ext-400-normal-WDIG73YG.b0d06fef.woff2",revision:"79b102695eddfcb0a8ce9b0b6708b9da"},{url:"_next/static/media/lexend-latin-ext-500-normal-27XMPCTB.d7eec78a.woff2",revision:"1341d0d07be9cc59cd8ab81baf49517a"},{url:"_next/static/media/lexend-latin-ext-500-normal-JWFHKIPP.4d8a7521.woff",revision:"00453e9c02cdccbbe5f485ef10bbd511"},{url:"_next/static/media/lexend-latin-ext-600-normal-BLPH63HA.0ade7f6c.woff",revision:"f983ed4528ffa662ed922a0829019607"},{url:"_next/static/media/lexend-latin-ext-600-normal-W4BHWVG7.b7027b54.woff2",revision:"a13338bf7f83baac5bc635703dda20bc"},{url:"_next/static/media/lexend-vietnamese-400-normal-D4Y447LW.1f31ce7d.woff2",revision:"be35e8de3c8bae9c0ce3243098df43d9"},{url:"_next/static/media/lexend-vietnamese-400-normal-FN4Z23SD.2b799d6e.woff",revision:"19efb22927a61e0d79a50452bc83ab54"},{url:"_next/static/media/lexend-vietnamese-500-normal-75ZMUCXS.ff72ca0a.woff2",revision:"e7b6083e7e86e1289ba37fe30b6e8176"},{url:"_next/static/media/lexend-vietnamese-500-normal-GANXTL6B.301b79af.woff",revision:"839be899bd4c7c530f73bef95f294ed2"},{url:"_next/static/media/lexend-vietnamese-600-normal-ODVW3DB6.70eb6d8c.woff",revision:"7936fc10f4d3e94febb9c6795d28870b"},{url:"_next/static/media/lexend-vietnamese-600-normal-V2R6IRK5.aea3e445.woff2",revision:"d03e81e889d2924db43d13f78a0457b6"},{url:"_next/static/media/vietcafe.901768c4.jpeg",revision:"184a60754b5900a9be0fb06007a4297e"},{url:"404.html",revision:"abf5433b6fe7767e7bd7ec128d2c2bc1"},{url:"favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"formula.html",revision:"75e108719dc1ed7df7e955d81d774695"},{url:"index.html",revision:"a816bfb5c10f63ab574fcec0c954220b"},{url:"lab.html",revision:"ff563e3d2ba653a6379f4194ec59b30f"},{url:"layout.html",revision:"a615e206ff7e95621dc5fd1669c36a44"},{url:"next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"setting.html",revision:"049f32a4663a23f86bdaace17021261d"},{url:"vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{})}));
//# sourceMappingURL=sw.js.map
