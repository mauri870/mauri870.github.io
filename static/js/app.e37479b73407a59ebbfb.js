webpackJsonp([0],[,,,,,function(t,e,a){t.exports=a.p+"static/img/artesaos-package.7165a98.png"},,,,,,,,,,function(t,e,a){t.exports=a.p+"static/img/assembly.e9e6001.png"},function(t,e,a){t.exports=a.p+"static/img/security-padlock.6664588.png"},function(t,e,a){"use strict";var i=a(3);i.a.filter("uppercase",function(t){return t.toUpperCase()}),i.a.filter("shuffleArray",function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=t[e];t[e]=t[a],t[a]=i}return t})},function(t,e,a){"use strict";(function(t){var i=a(3),n=a(106),s=a(94),r=a.n(s),o=a(93),c=a.n(o);i.a.use(n.a);var l=new n.a({base:t,routes:[{path:"/",name:"index",component:r.a},{path:"*",name:"notfound",component:c.a}]});e.a=l}).call(e,"/")},function(t,e,a){"use strict";var i=a(3),n=a(1),s=a(27),r=a(28),o=a(29);i.a.use(n.b),e.a=new n.b.Store({modules:{info:s.a,projects:r.a,social:o.a}})},function(t,e,a){"use strict";function i(t){!function(t,e,a,i,n,s,r){t.GoogleAnalyticsObject=n,t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},t[n].l=1*new Date,s=e.createElement(a),r=e.getElementsByTagName(a)[0],s.async=1,s.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(s,r)}(window,document,"script",0,"ga"),ga("create",t,"auto"),ga("send","pageview")}e.a=i},,function(t,e){},function(t,e){},function(t,e,a){a(73);var i=a(0)(a(39),a(100),null,null);t.exports=i.exports},function(t,e,a){(function(t){!function(t){function e(){var e=t(window).width(),a=t(window).height(),i=t(".fl").outerWidth(),n=t(".fl").outerHeight();t(".fl").css({position:"absolute",left:e/2-i/2,top:a/2-n/2})}t.fn.fakeLoader=function(a){var i=t.extend({timeToHide:1200,pos:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"999",bgColor:"#2ecc71",spinner:"spinner7",imagePath:""},a),n='<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',s=t(this),r={position:i.pos,width:i.width,height:i.height,top:i.top,left:i.left};return s.css(r),s.each(function(){switch(i.spinner){case"spinner1":s.html(n);break;case"spinner2":s.html('<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>');break;case"spinner3":s.html('<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>');break;case"spinner4":s.html('<div class="fl spinner4"></div>');break;case"spinner5":s.html('<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>');break;case"spinner6":s.html('<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');break;case"spinner7":s.html('<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>');break;default:s.html(n)}""!=i.imagePath&&s.html('<div class="fl"><img src="'+i.imagePath+'"></div>'),e()}),setTimeout(function(){t(s).fadeOut()},i.timeToHide),this.css({backgroundColor:i.bgColor,zIndex:i.zIndex})},t(window).on("load",function(){e(),t(window).resize(function(){e()})})}(t)}).call(e,a(4))},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(22),n=(a.n(i),a(21)),s=(a.n(n),a(23)),r=(a.n(s),a(3)),o=a(24),c=a.n(o),l=a(19),u=a(18),d=(a(17),a(20));r.a.config.productionTip=!1,a.i(d.a)("UA-79904458-1"),new r.a({store:l.a,router:u.a,render:function(t){return t(c.a)}}).$mount("site")},function(t,e,a){"use strict";e.a={state:{phrase:"Software Engineer, Developer, Gamer, History, Science and astronomy lover",email:"mauri870@gmail.com",phone:"+55 54 8118-9792",skills:["LARAVEL","VUEJS","LUMEN","GO","REDIS","GIT","JWT","LUA","NGINX","PHP","ʕ◔ϖ◔ʔ","WEBPACK","ELECTRON","MYSQL","SOLID","REST API'S","HTML","CSS","BOOTSTRAP","BOWER","COMPOSER","NPM","LINUX","GULP","AWS","DOCKER","KERAS","TENSORFLOW","ZEPHIR","GRPC","PROTOBUF","BAZEL","GCLOUD","KUBERNETES","GITLAB","BASH"]},mutations:{},getters:{infoPhrase:function(t){return t.phrase},infoEmail:function(t){return t.email},infoSkills:function(t){return t.skills}}}},function(t,e,a){"use strict";e.a={state:{projects:[{name:"Ransomware",link:"https://github.com/mauri870/ransomware",description:"A crypto-ransomware written in pure go (Academic)",techs:["Go","Malware","Security","Cryptography"],image:a(16)},{name:"Baking Pi",link:"https://github.com/mauri870/baking-pi",description:"Operating Systems development",techs:["Assembly","ARM","OS"],image:a(15)},{name:"Assembly Fun",link:"https://github.com/mauri870/problems-assembly",description:"Some fun in assembly linux x64",techs:["Assembly","x64","Syscalls","Linux"],image:a(15)},{name:"Kaggle Cats vs Dogs Redux",link:"https://github.com/mauri870/kaggle-cats-vs-dogs-redux",description:"Solution for the 51st place on the Kaggle Cats vs Dogs Redux competition",techs:["Go","Deep Learning","Kaggle","Tensorflow"],image:a(84)},{name:"Cryptofile",link:"https://github.com/mauri870/cryptofile",description:"Encrypt or decrypt files using AES-256 or AES-128",techs:["Go","Security","Cryptography"],image:a(16)},{name:"Powershell Reverse Http",link:"https://github.com/mauri870/powershell-reverse-http",description:"A Powershell exploit, windows native service with no virus signature that open a reverse http connection via meterpreter",techs:["Go","Exploit","Metasploit Framework"],image:a(82)},{name:"Cloudradioo App",link:"http://github.com/devfake/cloudradioo-app",description:"Cloudradioo App is a desktop application builded with Electron, VueJs and Vuex that plays randomly all top 50 songs from the soundcloud charts",techs:["Electron","Vuejs","Vuex"],image:a(81)},{name:"Laravel Skeleton Api",link:"https://github.com/mauri870/api-skeleton-laravel",description:"An API Skeleton for Laravel 5.1 with JWT",techs:["Laravel","JWT","REST"],image:a(83)},{name:"Laravel Docs",link:"https://github.com/artesaos/laravel-docs",description:"Translation of Laravel 5 docs to PT-BR",techs:["Laravel","Documentation"],image:a(5)},{name:"Laravel Installer",link:"https://github.com/artesaos/laravel-installer",description:"Install laravel framework with any version you want",techs:["Laravel"],image:a(5)},{name:"Defender",link:"https://github.com/artesaos/defender",description:"Roles & Permissions for Laravel 5",techs:["Laravel","Package"],image:a(5)},{name:"Laravel Linkedin Client",link:"https://github.com/artesaos/laravel-linkedin",description:"Linkedin API integration for Laravel and Lumen 5",techs:["Laravel","Package"],image:a(5)}]},mutations:{},getters:{projects:function(t){return t.projects}}}},function(t,e,a){"use strict";e.a={state:{networks:[{name:"github",link:"http://github.com/mauri870",icon:"fa fa-github"},{name:"linkedin",link:"https://br.linkedin.com/in/mauri-de-souza-nunes-0b223090",icon:"fa fa-linkedin"},{name:"steam",link:"http://steamcommunity.com/id/mauri870",icon:"fa fa-steam"}]},mutations:{},getters:{networks:function(t){return t.networks}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(4),n=a.n(i),s=a(25);a.n(s);e.default={name:"Fakeloader",mounted:function(){n()(document).ready(function(){n()("#fakeLoader").fakeLoader({spinner:"spinner1",bgColor:"#1ABC9C"})})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a.n(i),s=a(1);e.default={name:"Footer",computed:n()({},a.i(s.a)({phrase:"infoPhrase",email:"infoEmail"}),{mailto:function(){return"mailto:"+this.email}})}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a.n(i),s=a(1),r=a(78),o=a.n(r);e.default={name:"Header",mounted:function(){var t={strings:this.$options.filters.shuffleArray(this.skills),typeSpeed:40,backSpeed:50,loop:!0};new o.a(".typed",t)},computed:n()({},a.i(s.a)({skills:"infoSkills"}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a.n(i),s=a(1),r=a(4),o=a.n(r);e.default={name:"Navbar",computed:n()({},a.i(s.a)({email:"infoEmail"})),methods:{clickHireMe:function(){window.location.href="mailto:"+this.email}},mounted:function(){o()(window).on("scroll",function(){var t=o()("#navbar-menu");o()(this).scrollTop()>=o()("#control-navbar").position().top?t.addClass("nav-second-color"):t.removeClass("nav-second-color")})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["item"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a.n(i),s=a(90),r=a.n(s),o=a(1);e.default={name:"Portfolio",computed:n()({},a.i(o.a)({projects:"projects"})),components:{Project:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a.n(i),s=a(1);e.default={name:"Social",computed:n()({},a.i(s.a)({networks:"networks"}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(88),n=a.n(i),s=a(91),r=a.n(s),o=a(85),c=a.n(o);e.default={name:"Index",components:{HeaderWrap:n.a,MyPortfolio:r.a,BlogSection:c.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(86),n=a.n(i),s=a(89),r=a.n(s),o=a(92),c=a.n(o),l=a(87),u=a.n(l);e.default={name:"Site",components:{FakeLoader:n.a,NavbarSite:r.a,SocialSection:c.a,FooterSite:u.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){t.exports=a.p+"static/img/gopher.51cf84c.png"},function(t,e,a){t.exports=a.p+"static/img/gophersworking.24b3b75.png"},function(t,e,a){t.exports=a.p+"static/img/cloudradioo-app.71c7cad.png"},function(t,e,a){t.exports=a.p+"static/img/exploit.9cd5160.png"},function(t,e,a){t.exports=a.p+"static/img/laravel-package.6d924d9.png"},function(t,e,a){t.exports=a.p+"static/img/machine-learning.cd6e006.png"},function(t,e,a){a(77);var i=a(0)(null,a(105),null,null);t.exports=i.exports},function(t,e,a){a(72);var i=a(0)(a(30),a(99),null,null);t.exports=i.exports},function(t,e,a){a(74);var i=a(0)(a(31),a(101),"data-v-8252cbb8",null);t.exports=i.exports},function(t,e,a){a(70);var i=a(0)(a(32),a(97),null,null);t.exports=i.exports},function(t,e,a){a(71);var i=a(0)(a(33),a(98),"data-v-5d88be19",null);t.exports=i.exports},function(t,e,a){a(75);var i=a(0)(a(34),a(102),null,null);t.exports=i.exports},function(t,e,a){a(69);var i=a(0)(a(35),a(96),"data-v-35105acf",null);t.exports=i.exports},function(t,e,a){a(68);var i=a(0)(a(36),a(95),null,null);t.exports=i.exports},function(t,e,a){a(76);var i=a(0)(a(37),a(104),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(38),a(103),null,null);t.exports=i.exports},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"social"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row centered"},[t._m(0),t._l(t.networks,function(t){return a("div",{staticClass:"col-lg-4 networks"},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("i",{class:t.icon})])])}),t._m(1)],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12"},[a("h2",[t._v("Stay connected!")]),a("br")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-lg-12"},[i("img",{staticClass:"center-block gopher",attrs:{src:a(79)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"works"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row centered mt mb"},[t._m(0),a("p",[t._v("Some projects that I have worked on:")]),t._l(t.projects,function(t){return a("project",{key:t.id,attrs:{item:t}})})],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("I "),a("i",{staticClass:"fa fa-heart heart fa-pulse"}),t._v("open source")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"headerwrap"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h3",[t._v("My skills")]),a("h1",[a("span",{staticClass:"typed"})])])]),a("div",{staticClass:"row curriculum"},[a("div",{staticClass:"col-md-8 col-md-offset-2"},[a("div",{staticClass:"btn-group btn-group-justified"},[a("a",{staticClass:"btn btn-site-color",attrs:{href:"https://docs.google.com/viewer?url=https://github.com/mauri870/curriculum-vitae/raw/master/cv.pdf",download:"download"}},[a("i",{staticClass:"fa fa-file-text"}),t._v(" Curriculum EN")]),a("a",{staticClass:"btn btn-site-color",attrs:{href:"https://github.com/mauri870/certificates",target:"_blank"}},[a("i",{staticClass:"fa fa-file-text"}),t._v(" Certificates")])])])])])]),a("div",{staticClass:"span",attrs:{id:"control-navbar"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar navbar-default navbar-fixed-top",attrs:{id:"navbar-menu",role:"navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[t._m(0),a("a",{staticClass:"navbar-brand logo",attrs:{href:"/"}},[t._v("M")]),a("a",{attrs:{id:"hiring",href:"#"},on:{click:function(e){e.preventDefault(),t.clickHireMe(e)}}},[t._v("Contact Me!")])]),a("div",{staticClass:"navbar-collapse collapse"},[a("ul",{staticClass:"nav navbar-nav navbar-right"},[t._m(1),t._m(2),a("li",[a("a",{attrs:{href:"https://www.kaggle.com/mauri870",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 16 16",width:"30",height:"30"}},[a("path",{attrs:{d:"M12.55 15.906c-.015.062-.078.094-.187.094H10.27c-.124 0-.234-.055-.328-.165L6.49 11.442l-.965.916v3.407c0 .157-.078.235-.235.235H3.67c-.158 0-.236-.078-.236-.235V.235C3.434.08 3.512 0 3.67 0h1.62c.157 0 .235.08.235.235v9.562L9.66 5.615c.11-.11.22-.164.33-.164h2.16c.095 0 .157.04.19.12.03.1.023.17-.024.21l-4.37 4.23 4.557 5.67c.063.07.078.14.047.24",fill:"#1abc9c"}})])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"blog/",target:"_self"}},[a("i",{staticClass:"fa fa-rss fa-2x"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"http://github.com/mauri870",target:"_blank"}},[a("i",{staticClass:"fa fa-github fa-2x"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"fakeLoader"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("fake-loader"),a("navbar-site"),a("router-view"),a("social-section"),a("footer-site")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footerwrap"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row centered"},[t._m(0),a("div",{staticClass:"col-lg-4"},[a("p",[a("b",[t._v(t._s(t._f("uppercase")(t.phrase)))])])]),a("div",{staticClass:"col-lg-4"}),a("div",{staticClass:"col-lg-4"},[a("p",[a("a",{attrs:{href:t.mailto}},[t._v(t._s(t.email))])])])]),t._m(1),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12"},[a("h2",[a("sup",[a("i",{staticClass:"fa fa-quote-left"})]),t._v(" Work hard to make things happen"),a("sup",[a("i",{staticClass:"fa fa-quote-right"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 text-center"},[a("p",[t._v("Find the "),a("i",{staticClass:"fa fa-code"}),t._v(" of this project on "),a("a",{attrs:{href:"http://github.com/mauri870/mauri870.github.io",target:"_blank"}},[a("i",{staticClass:"fa fa-github fa-2x"})])]),a("p",[t._v("Built with "),a("i",{staticClass:"fa fa-heart heart"}),t._v(" on top of Vue 2, Vuex, SCSS, Pug and Webpack 2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 text-center"},[a("img",{attrs:{src:"https://api.travis-ci.org/mauri870/mauri870.github.io.svg?branch=develop"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-4 project"},[a("h3",[t._v(t._s(t.item.name))]),a("a",{attrs:{href:t.item.link,target:"_blank"}},[a("img",{staticClass:"img-responsive img-responsive",attrs:{src:t.item.image}})]),t._l(t.item.techs,function(e){return a("span",{staticClass:"label label"},[t._v(t._s(e))])}),a("p",{staticClass:"description"},[t._v(t._s(t.item.description))])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header-wrap"),a("blog-section"),a("my-portfolio")],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"content"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 col-lg-offset-3"},[t._m(0),i("router-link",{attrs:{to:{name:"index"}}},[i("button",{staticClass:"btn btn-default btn-lg"},[i("i",{staticClass:"fa fa-home"}),t._v(" Take me home")])]),i("img",{staticClass:"center-block img-responsive",attrs:{src:a(80)}})],1)])])]),i("div",{staticClass:"span",attrs:{id:"control-navbar"}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("i",{staticClass:"fa fa-warning fa-2x"}),a("br"),t._v(" Sorry but the page you are looking for could not be found")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blog-section"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row centered"},[a("div",{staticClass:"col-lg-12"},[a("h1",[t._v("Check out my"),a("a",{attrs:{href:"blog/"}},[t._v("dev blog")]),t._v(" !")])])])])])}]}}],[26]);
//# sourceMappingURL=app.e37479b73407a59ebbfb.js.map