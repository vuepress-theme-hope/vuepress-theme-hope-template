if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.fd66728c.css",revision:"35cb088d7081fae5cdd1beb9a48767a3"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/30.4de4c9dc.js",revision:"be37f4749d2d3feb6f197157816d6bc7"},{url:"assets/js/31.cde17a99.js",revision:"824350bf411fbd5f1cb58de9e8618a5a"},{url:"assets/js/32.7099c2f0.js",revision:"5368c2ee08de977743902e048e378ff8"},{url:"assets/js/33.ee18aa2f.js",revision:"4ccd158c9a8e38974262b4da5e045ef7"},{url:"assets/js/34.757f201b.js",revision:"1c39f2be665eca91d0908de701c95501"},{url:"assets/js/app.d7cd59d2.js",revision:"8b0b9e6ac455564e82ad4a6bbdc1b627"},{url:"assets/js/layout-Blog.e1519ecd.js",revision:"8a9dc45889cfe7eeb365ce2deb00d5a3"},{url:"assets/js/layout-Layout.9ccfe195.js",revision:"95547db4b80aef48f927282921731445"},{url:"assets/js/layout-NotFound.b3bcd1c7.js",revision:"388834e16c2118b2a8d933d1c978288b"},{url:"assets/js/layout-Slide.079648b3.js",revision:"9b9d0cd2f884da70d75e5538e0aa5cf1"},{url:"assets/js/page-BlogHome.8b91b43d.js",revision:"234dc8aed25ea2fdbfcf2f04b066eca9"},{url:"assets/js/page-Componentdisabled.239c0a28.js",revision:"c733c4879fa8316f9d044f83b0aacb4b"},{url:"assets/js/page-Encryptionarticle.90210a25.js",revision:"b8e358aae31bd56ce8fb8fbc2b8cdeda"},{url:"assets/js/page-Guides.df09d181.js",revision:"8280be1d40ef7638c83004d5f0b9bdab"},{url:"assets/js/page-IntroPage.64fc320b.js",revision:"8d8547243f77b15feb9f23f3457e5260"},{url:"assets/js/page-MarkdownEnhance.5ef6bf70.js",revision:"0f3b523bc1ac4a972e0cb643b3e2fb28"},{url:"assets/js/page-Markdown增强.23e05720.js",revision:"2bfb80162dcb2d8b48f6847266686619"},{url:"assets/js/page-pageconfig.39b2eb5d.js",revision:"51bf60594ac9332ac0a42ee48f144af4"},{url:"assets/js/page-Projecthome.d4bc8d27.js",revision:"854806cfaff68c9ed4be1c11028b415f"},{url:"assets/js/page-Slidepage.5a34e876.js",revision:"46fd9cc3c8b287cb2bb662f0a3fa3cd9"},{url:"assets/js/page-主要功能与配置演示.b70dd1a2.js",revision:"161a7a5a8d6224cc0155d446362df86b"},{url:"assets/js/page-博客主页.8779ef4a.js",revision:"3fc28320866de1e82df894cb7f95eea3"},{url:"assets/js/page-密码加密的文章.dd644786.js",revision:"60bebcc87650df1287866ac754d79945"},{url:"assets/js/page-幻灯片页.549a4d6b.js",revision:"f40b8863dad804f416d34df95baedf08"},{url:"assets/js/page-组件禁用.7c8395c0.js",revision:"c6097f31187ce19cdc653432ff96708a"},{url:"assets/js/page-页面配置.df141ca9.js",revision:"6fd1895cdbd4e41dc36c0da0c3ee2353"},{url:"assets/js/page-项目主页.eae052b9.js",revision:"ba9040b1c6ad9d4d659ec8f63df5e432"},{url:"assets/js/vendors~flowchart.9fcc307b.js",revision:"cf5fcc057f42e1b131e95e8a2faeb034"},{url:"assets/js/vendors~layout-Blog~layout-Layout.2648c710.js",revision:"ad957d5f35a817e681c5f1aaafcd59c0"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5db35b84.js",revision:"776d42b12188f1b40f90745274a4b4c8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.c818a6c8.js",revision:"76c2d491b337d81dee8608d202ac88d4"},{url:"assets/js/vendors~photo-swipe.4013e7eb.js",revision:"ebe3049abbda3e7c40a91a9442f1b0d3"},{url:"assets/js/vendors~reveal.42050ef4.js",revision:"6216f00e1b0dd502a6c7eed14374dac7"},{url:"assets/js/vendors~valine.250f1ed1.js",revision:"ae4d3b4a5bcc33b5adb8cf81f43b9eb6"},{url:"logo.svg",revision:"c1cc507c5ecf9ef91f5bc8e94d15f94e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"c28b71b60a6dd1e2e99f67825f85b7d5"},{url:"article/index.html",revision:"bea777c80dbf457ff1c94bd9c4aa4051"},{url:"category/Guide/index.html",revision:"5bf3285ba38f5f655204940ef501fa14"},{url:"category/index.html",revision:"3d717a1edcb5e150f648212a4cc565de"},{url:"category/使用指南/index.html",revision:"73cfae260ebb3b543f2cdd883dd86307"},{url:"encrypt/index.html",revision:"a4292d03ad5338b8e8b5a24c77d63615"},{url:"guide/disable/index.html",revision:"ff26d5b9159549c7c39ca59c314bfbe3"},{url:"guide/encrypt/index.html",revision:"609a22c74806ddb8aa4050f72498fe9e"},{url:"guide/index.html",revision:"3fbe3e7b8ea7965200a6017897374d30"},{url:"guide/markdown/index.html",revision:"2c66f52128832c7a6fc545edb27d6097"},{url:"guide/page/index.html",revision:"e81b7045f9174f955b1b8d393d71ac45"},{url:"home/index.html",revision:"25ef5e3944af3da3ecf26b6d4f9825fd"},{url:"index.html",revision:"923573db440344187cbdf4fe0178496b"},{url:"intro/index.html",revision:"35dc79fcad401c3714aff4dcef69c469"},{url:"slide/index.html",revision:"f283e73d58538c75051b61dd137f68d9"},{url:"slides/index.html",revision:"c399324852dd766e4657266e6f937dc0"},{url:"star/index.html",revision:"7e56be30966858b3db31d2de9bdd33e2"},{url:"tag/encryption/index.html",revision:"47e15539de15a4c99372386f073cad35"},{url:"tag/Guide/index.html",revision:"df397fe0017364acc58669246e93a87f"},{url:"tag/index.html",revision:"65fa497d1a3d6c882b8096b561d9cf5b"},{url:"tag/markdown/index.html",revision:"13a3a971b3a98b1b8cc56e4c2ab62267"},{url:"tag/Page config/index.html",revision:"cfde1ef810be28e0a883c8a068b8b27b"},{url:"tag/使用指南/index.html",revision:"834f690d3f201dc33082cbe177c5c51e"},{url:"tag/文章加密/index.html",revision:"6714e69097ff16ad4532047b6b248bf7"},{url:"tag/页面配置/index.html",revision:"a7b33078caa15924686e1a7457482c3e"},{url:"timeline/index.html",revision:"9ea17c5d5c6f0e020454f12554663f78"},{url:"zh/guide/disable/index.html",revision:"76abb25cd0be17eba3e9858249a8fe8e"},{url:"zh/guide/encrypt/index.html",revision:"ef5c9a9a4a93a16fac6146766314f8ad"},{url:"zh/guide/index.html",revision:"9d89bc0efc446bdda1ed56082b93b24d"},{url:"zh/guide/markdown/index.html",revision:"bfa123c7a3b8ac77ab26001eadee5f3c"},{url:"zh/guide/page/index.html",revision:"39a0f35084ecba62b57ba8bc79cf14f9"},{url:"zh/home/index.html",revision:"c3297d1e2ee69d921817c7a3bb1717bd"},{url:"zh/index.html",revision:"3f540c78a40135689074f071ee650e50"},{url:"zh/slides/index.html",revision:"4c1cb812a56afe81d0de54066cb10e90"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
