if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const s=e=>i(e,r),o={module:{uri:r},exports:d,require:s};a[r]=Promise.all(n.map((e=>o[e]||s(e)))).then((e=>(c(...e),d)))}}define(["./workbox-88575b92"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_next/static/chunks/019d026b-c74be9e0c4268dfb.js",revision:"7857a0638c5cb9f50d60db1cf6a1995f"},{url:"_next/static/chunks/100-bb00c4e880c9eeb6.js",revision:"5a9f72714f949af70eaf52ffa4184e49"},{url:"_next/static/chunks/117b9d7f-d6bf2f5bc0e605dc.js",revision:"86c37d201a3b505a4cff74561deff0b2"},{url:"_next/static/chunks/18-d09353480138bcf1.js",revision:"ba07776b9d007b1ad528d32ac6a71ba5"},{url:"_next/static/chunks/230-74c1550019f5fd2a.js",revision:"fb5201db0d7f192a7cc3e340b6a69ff6"},{url:"_next/static/chunks/2e3a845b-17ea756051c97268.js",revision:"a5cd70651d996874f7be6121527306c0"},{url:"_next/static/chunks/41155975-6606fd3d81aa8f7e.js",revision:"1d4fe8907397c82ee05fc95ea362d41a"},{url:"_next/static/chunks/426-b72e4d0d8b564762.js",revision:"c253bc6ead35caad392e3ecb18ff0b99"},{url:"_next/static/chunks/4577d2ec-c90ab6c13fbeb506.js",revision:"d7f8ebf75c40969235335983a8523fa3"},{url:"_next/static/chunks/578-5491bc15a04e9f78.js",revision:"d41226b9746c70a29c1b3efd18448da5"},{url:"_next/static/chunks/6-d64d86526a47d79e.js",revision:"b4fa087161fe321e2111f5741ba01c8f"},{url:"_next/static/chunks/68c0a17d-5992b5fe0c3d00fc.js",revision:"9fe17bed093d7b219226095b95eedece"},{url:"_next/static/chunks/69480c19-d4abaf9dcd43fbed.js",revision:"3500babf8e158f50efc79c841a1715c9"},{url:"_next/static/chunks/737a5600-aa645c90bd217262.js",revision:"0f80d6225d6a86b8c07cb125760e7b5e"},{url:"_next/static/chunks/801-f266a64e1500ed5a.js",revision:"0fb5a408187a9f4305a321c40bdc511f"},{url:"_next/static/chunks/85d7bc83-41f4eceee5a253b7.js",revision:"c3d7f0734e6d739d2b1874db40f23204"},{url:"_next/static/chunks/bee240a3-2e8f088f3f51d534.js",revision:"366a34ef65107fa2bcce64827b8fa722"},{url:"_next/static/chunks/cb355538-26b365342edb5a5a.js",revision:"15b988404828eb3c4fef045b8511e555"},{url:"_next/static/chunks/e21e5bbe-2a315655a263360e.js",revision:"8223f3c0804f60e10ca487d88be7385e"},{url:"_next/static/chunks/ebc70433-0f1c3695f02191ee.js",revision:"f4eba3c9366817705032d09b2c067608"},{url:"_next/static/chunks/fd9d1056-e983fcfa2355e86c.js",revision:"03343ad24e35d4bf25ca5be37fd49bca"},{url:"_next/static/chunks/fea29d9f-d3fd03ba007d947c.js",revision:"7f92de99af3d75e43316a0c7cca6f623"},{url:"_next/static/chunks/framework-319c60d54206ac71.js",revision:"64a2956c7ec595f37540a4561c8f3b9c"},{url:"_next/static/chunks/main-4afecb29decffb7c.js",revision:"cd3d8d658c8ba75750646eb18ad79ebc"},{url:"_next/static/chunks/main-app-f4344751bdf13608.js",revision:"e13870091caf12ccc2f343a0e040abee"},{url:"_next/static/chunks/pages/_app-d6564b51c676c672.js",revision:"8fb9d37eaa4bc7d6d549284ee57fd8db"},{url:"_next/static/chunks/pages/_error-c82863c5c44bef4c.js",revision:"40c6cd8d5aeb2d260e8f476cff5b2f3c"},{url:"_next/static/chunks/pages/formula-31defd1a7fe0a44a.js",revision:"2e077c876190ee678c839aa833fa4d07"},{url:"_next/static/chunks/pages/index-d0d3fc35b5059504.js",revision:"4874a14015f3beaf330ff5b414bdcb92"},{url:"_next/static/chunks/pages/lab-0c4caa15dfa2985d.js",revision:"bc5b1b146f6d44e8d1d4ecabc583bc1b"},{url:"_next/static/chunks/pages/layout-a36cd85c8944e987.js",revision:"f160e2623e574577a494e35d4d78d668"},{url:"_next/static/chunks/pages/setting-debe2ea3fad669dd.js",revision:"85bb96a54ca28fa6c368d7a4fba69645"},{url:"_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"_next/static/chunks/webpack-a94d4719225d154d.js",revision:"d1eed2af185d6090d6dabef57f9400d9"},{url:"_next/static/css/119ade39993de3c8.css",revision:"eddbb1e129c7768a4bcc24deddeba1f4"},{url:"_next/static/jtpod1gwTVDKxPv9KK-Yl/_buildManifest.js",revision:"a9e73f570289323d4047a73232417124"},{url:"_next/static/jtpod1gwTVDKxPv9KK-Yl/_ssgManifest.js",revision:"b404e23d62d95bafd03ad7747cc0e88b"},{url:"_next/static/media/lexend-latin-400-normal-OMLSLG7L.7317259b.woff",revision:"5821637a33a0f480b4cd07f42b08f895"},{url:"_next/static/media/lexend-latin-400-normal-TXD5HADB.9dc7d380.woff2",revision:"3b8aa30032e80c2892dbeb88827e45c8"},{url:"_next/static/media/lexend-latin-500-normal-HIODHDY4.3a1c338f.woff",revision:"2672e7239a9b720cbab9b94795a57b2f"},{url:"_next/static/media/lexend-latin-500-normal-TWHLSJHQ.9d8eb924.woff2",revision:"84934ed50eafcb517a62eee9d3fbabf9"},{url:"_next/static/media/lexend-latin-600-normal-ECT7A3QM.20a7f06e.woff2",revision:"58b86bade516612b34403836a9c45663"},{url:"_next/static/media/lexend-latin-600-normal-ZVKM4TXD.cd54ce4e.woff",revision:"152fc6c4cca3d20a48fef56a7b8e1495"},{url:"_next/static/media/lexend-latin-ext-400-normal-LGQ77ZL7.59a1ffe5.woff",revision:"43c08fc0854b8a6ea5878c5bcac433fc"},{url:"_next/static/media/lexend-latin-ext-400-normal-WDIG73YG.b0d06fef.woff2",revision:"79b102695eddfcb0a8ce9b0b6708b9da"},{url:"_next/static/media/lexend-latin-ext-500-normal-27XMPCTB.d7eec78a.woff2",revision:"1341d0d07be9cc59cd8ab81baf49517a"},{url:"_next/static/media/lexend-latin-ext-500-normal-JWFHKIPP.4d8a7521.woff",revision:"00453e9c02cdccbbe5f485ef10bbd511"},{url:"_next/static/media/lexend-latin-ext-600-normal-BLPH63HA.0ade7f6c.woff",revision:"f983ed4528ffa662ed922a0829019607"},{url:"_next/static/media/lexend-latin-ext-600-normal-W4BHWVG7.b7027b54.woff2",revision:"a13338bf7f83baac5bc635703dda20bc"},{url:"_next/static/media/lexend-vietnamese-400-normal-D4Y447LW.1f31ce7d.woff2",revision:"be35e8de3c8bae9c0ce3243098df43d9"},{url:"_next/static/media/lexend-vietnamese-400-normal-FN4Z23SD.2b799d6e.woff",revision:"19efb22927a61e0d79a50452bc83ab54"},{url:"_next/static/media/lexend-vietnamese-500-normal-75ZMUCXS.ff72ca0a.woff2",revision:"e7b6083e7e86e1289ba37fe30b6e8176"},{url:"_next/static/media/lexend-vietnamese-500-normal-GANXTL6B.301b79af.woff",revision:"839be899bd4c7c530f73bef95f294ed2"},{url:"_next/static/media/lexend-vietnamese-600-normal-ODVW3DB6.70eb6d8c.woff",revision:"7936fc10f4d3e94febb9c6795d28870b"},{url:"_next/static/media/lexend-vietnamese-600-normal-V2R6IRK5.aea3e445.woff2",revision:"d03e81e889d2924db43d13f78a0457b6"},{url:"_next/static/media/vietcafe.901768c4.jpeg",revision:"184a60754b5900a9be0fb06007a4297e"},{url:"404.html",revision:"22a1b6087fe62bca1c4894f378990f63"},{url:"432997820_1300659664171876_8586090559895363958_n.jpeg",revision:"0c113e01624556c48adb879096acea53"},{url:"android/android-launchericon-144-144.png",revision:"1dc9f57230b9910e8ad513e1a7acb50c"},{url:"android/android-launchericon-192-192.png",revision:"128d4d2a060ce2c650b7596b53fe30b0"},{url:"android/android-launchericon-48-48.png",revision:"771966aade2b5a4afa6c7a7dd687b8d4"},{url:"android/android-launchericon-512-512.png",revision:"13feb70b08c617949ce3977df4b67b0c"},{url:"android/android-launchericon-72-72.png",revision:"bee2b9c9748ded1d51e909a4a2022764"},{url:"android/android-launchericon-96-96.png",revision:"108fea734ce76072372b6bc420fc8c0a"},{url:"favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"formula.html",revision:"ac0e9110109f7a3a8939d44f59d4e72a"},{url:"icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"index.html",revision:"7a01a85ea70a5ac4ce534c117bd367cd"},{url:"ios/100.png",revision:"9d53cda5a4e14d3e16502c271f476b98"},{url:"ios/1024.png",revision:"8b8b634706dcf2b43b730726d0ad241f"},{url:"ios/114.png",revision:"7d5c34f1a06a62bf574e5a713eead6be"},{url:"ios/120.png",revision:"92e29b99dec74665a8d44a13402e14d2"},{url:"ios/128.png",revision:"10a4b560584176303004144844477088"},{url:"ios/144.png",revision:"1dc9f57230b9910e8ad513e1a7acb50c"},{url:"ios/152.png",revision:"0de25828153f3a3f3ae2ab6cc5bcdf14"},{url:"ios/16.png",revision:"dd3229acf8fdb8cfad2317ddcf669221"},{url:"ios/167.png",revision:"16af4190502cb2cbb6ef70deb1c1cbdb"},{url:"ios/180.png",revision:"5bdc52ffba58b1d3987d9f31a9307048"},{url:"ios/192.png",revision:"128d4d2a060ce2c650b7596b53fe30b0"},{url:"ios/20.png",revision:"ed6255c710d20ab3bf5214118cb918d7"},{url:"ios/256.png",revision:"af4d987f8608a57b97ada5dfd09d03db"},{url:"ios/29.png",revision:"065262c9126c501c772012d16fed97f0"},{url:"ios/32.png",revision:"475e225cbe7236bdbd728ea2cf08382d"},{url:"ios/40.png",revision:"0e196fc45daa90fc29588d9a2011c06f"},{url:"ios/50.png",revision:"0822e6bbf98955c96ae77a1cfa0d130f"},{url:"ios/512.png",revision:"13feb70b08c617949ce3977df4b67b0c"},{url:"ios/57.png",revision:"24529478579dbcc1f4caf37089766036"},{url:"ios/58.png",revision:"3cd38a0dd425844ac60ba76066d0cf74"},{url:"ios/60.png",revision:"c78e5bc60ecb332f6008697263e3ae7e"},{url:"ios/64.png",revision:"38377dc23206f30e8c0d6b8cfdae1c8f"},{url:"ios/72.png",revision:"bee2b9c9748ded1d51e909a4a2022764"},{url:"ios/76.png",revision:"bc589a49faa1a01210f06664d9fb06b6"},{url:"ios/80.png",revision:"cf5a0e585291c43093fb9afba3debd4d"},{url:"ios/87.png",revision:"a4111b2436cfc3290d58ac982bd55fd1"},{url:"lab.html",revision:"c313430018507aa0a66856860ac6e73b"},{url:"layout.html",revision:"661e0f2f322ba7357614ec65acf1b98b"},{url:"next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"setting.html",revision:"60eecdcf29123f7c7d8d440902855673"},{url:"sim.webmanifest",revision:"c6e5bb087c34c84c3ed91a4d171204ed"},{url:"vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"windows11/LargeTile.scale-100.png",revision:"77e738a7919f8f050e74ed18273f83d6"},{url:"windows11/LargeTile.scale-125.png",revision:"f3a0a2498769452888288f599be8085d"},{url:"windows11/LargeTile.scale-150.png",revision:"b9f5b358272fa714a27f1247d7e95ef1"},{url:"windows11/LargeTile.scale-200.png",revision:"498c3df5e2bd66287401842f573e5f54"},{url:"windows11/LargeTile.scale-400.png",revision:"34b9f27666408370038a5bce4f725377"},{url:"windows11/SmallTile.scale-100.png",revision:"5016e2e01004245bd5704c5bdde3bac5"},{url:"windows11/SmallTile.scale-125.png",revision:"284ef79e544313628b93d28d8acf084b"},{url:"windows11/SmallTile.scale-150.png",revision:"cb35fdc2919558ee549b38cc63a44d23"},{url:"windows11/SmallTile.scale-200.png",revision:"aa35c03086d3519ef562b8cfe897e06b"},{url:"windows11/SmallTile.scale-400.png",revision:"bce2fe3d2ad4d9615dd59d23dd5b0475"},{url:"windows11/SplashScreen.scale-100.png",revision:"6c76b4f1c4a6a0e97e31c02f77195629"},{url:"windows11/SplashScreen.scale-125.png",revision:"d424043189ff5b903f21d347a8bb2e4c"},{url:"windows11/SplashScreen.scale-150.png",revision:"b646df6e731adb1060e2f54535d34186"},{url:"windows11/SplashScreen.scale-200.png",revision:"fc34508add960e35249f088c4f62034b"},{url:"windows11/SplashScreen.scale-400.png",revision:"949c96c5837401aa785da85836189e8d"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"790d5b324e591772f13f6a862596e99a"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"65987e6a35c0064ee91e336103770781"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"5077c59612b6aed3d762401154baba33"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"c4191139a4b4ec26d10cc56de0680e84"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"781291a88a0be9641d3891623092f924"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"18c398e017f8e18516aceb43c4e8c25f"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ae175af6cb945f4becca3975e005cc82"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"bab7a97fb9e99b8597a6c761370bd29f"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"4e82fd3df8e86c0e3100c7086b5c908b"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"b19e3c9244544f938fbd4ffbc69bb6ce"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"efb75b702912c7c9da41913ff3069073"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"b5c9300913fb7c4c1bc7377fb878a421"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"a0fbe701541ffb9e93f366cc927b4845"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"deebc35e158fac74056c30d9a8521041"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"4844b9126a27f02a1c1fb72da8d8666c"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"10bab0a36224f6f35bab0d503e253e34"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"ac5933b7ed984dcf7d52d1985674ec5d"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"7650a43d180cb34416e02c06076184a4"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e4d8a038d09ac049c9e906781466db71"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"40c336028576c7e9000abad33017ae31"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"18c398e017f8e18516aceb43c4e8c25f"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ae175af6cb945f4becca3975e005cc82"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"bab7a97fb9e99b8597a6c761370bd29f"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"4e82fd3df8e86c0e3100c7086b5c908b"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"b19e3c9244544f938fbd4ffbc69bb6ce"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"efb75b702912c7c9da41913ff3069073"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"b5c9300913fb7c4c1bc7377fb878a421"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"a0fbe701541ffb9e93f366cc927b4845"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"deebc35e158fac74056c30d9a8521041"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"4844b9126a27f02a1c1fb72da8d8666c"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"10bab0a36224f6f35bab0d503e253e34"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"ac5933b7ed984dcf7d52d1985674ec5d"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"7650a43d180cb34416e02c06076184a4"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e4d8a038d09ac049c9e906781466db71"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"40c336028576c7e9000abad33017ae31"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"deebc35e158fac74056c30d9a8521041"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"f3574602e9150fa6e362c24d224233ac"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"34276053d13e0a824c3fc096c213b1c2"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"60ccf5b42f02c799f4747027ee858240"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"22ed929b2b791a5b97102955437538f8"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"18c398e017f8e18516aceb43c4e8c25f"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"ae175af6cb945f4becca3975e005cc82"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"bab7a97fb9e99b8597a6c761370bd29f"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"4e82fd3df8e86c0e3100c7086b5c908b"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"b19e3c9244544f938fbd4ffbc69bb6ce"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"efb75b702912c7c9da41913ff3069073"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"b5c9300913fb7c4c1bc7377fb878a421"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"a0fbe701541ffb9e93f366cc927b4845"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"deebc35e158fac74056c30d9a8521041"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"4844b9126a27f02a1c1fb72da8d8666c"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"10bab0a36224f6f35bab0d503e253e34"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"ac5933b7ed984dcf7d52d1985674ec5d"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"7650a43d180cb34416e02c06076184a4"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"e4d8a038d09ac049c9e906781466db71"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"40c336028576c7e9000abad33017ae31"},{url:"windows11/StoreLogo.scale-100.png",revision:"0822e6bbf98955c96ae77a1cfa0d130f"},{url:"windows11/StoreLogo.scale-125.png",revision:"cdb5c953ed00e286fb3103b68938b15f"},{url:"windows11/StoreLogo.scale-150.png",revision:"293b98e6c857e6f8c3c9c016c8216aa4"},{url:"windows11/StoreLogo.scale-200.png",revision:"9d53cda5a4e14d3e16502c271f476b98"},{url:"windows11/StoreLogo.scale-400.png",revision:"f922b13b2e797c5f7d8d495980c0b532"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"11c24cd9a558449cc008bd65aa28c932"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"fc6fc656441e7039848e42364748071f"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"fa58be76c613969864e9eb94c290a5a8"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"6c76b4f1c4a6a0e97e31c02f77195629"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"fc34508add960e35249f088c4f62034b"}],{})}));
//# sourceMappingURL=sw.js.map
