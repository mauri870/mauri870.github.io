webpackJsonp([2,0],[function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}s(83),s(84),s(53),s(85);var o=s(4),a=i(o),n=s(106),r=i(n),c=s(100),l=i(c);s(39);var d=new r["default"]({init:function(){(0,a["default"])("#fakeLoader").fakeLoader({spinner:"spinner1",bgColor:"#1ABC9C"}),(0,a["default"])(document).ready(function(){(0,a["default"])('[data-toggle="tooltip"]').tooltip()})},components:{Site:l["default"]}});d.$mount("body")},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/artesaos-package.7165a98.png"},,,,,,,,,,,function(t,e,s){(function(t){"use strict";!function(t){function e(){var e=t(window).width(),s=t(window).height(),i=t(".fl").outerWidth(),o=t(".fl").outerHeight();t(".fl").css({position:"absolute",left:e/2-i/2,top:s/2-o/2})}t.fn.fakeLoader=function(s){var i=t.extend({timeToHide:1200,pos:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"999",bgColor:"#2ecc71",spinner:"spinner7",imagePath:""},s),o='<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',a='<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',n='<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',r='<div class="fl spinner4"></div>',c='<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',l='<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',d='<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',u=t(this),p={position:i.pos,width:i.width,height:i.height,top:i.top,left:i.left};return u.css(p),u.each(function(){var t=i.spinner;switch(t){case"spinner1":u.html(o);break;case"spinner2":u.html(a);break;case"spinner3":u.html(n);break;case"spinner4":u.html(r);break;case"spinner5":u.html(c);break;case"spinner6":u.html(l);break;case"spinner7":u.html(d);break;default:u.html(o)}""!=i.imagePath&&u.html('<div class="fl"><img src="'+i.imagePath+'"></div>'),e()}),setTimeout(function(){t(u).fadeOut()},i.timeToHide),this.css({backgroundColor:i.bgColor,zIndex:i.zIndex})},t(window).load(function(){e(),t(window).resize(function(){e()})})}(t)}).call(e,s(4))},function(t,e,s){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=s(52),o=e(i);!function(t){var e=function(e,s){this.el=t(e),this.options=t.extend({},t.fn.typed.defaults,s),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};e.prototype={constructor:e,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,e){if(this.stop!==!0){var s=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var s=0,o=t.substr(e);if("^"===o.charAt(0)){var a=1;/^\^\d+/.test(o)&&(o=/\d+/.exec(o)[0],a+=o.length,s=parseInt(o)),t=t.substring(0,e)+t.substring(e+a)}if("html"===i.contentType){var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var r="",c="";for(c="<"===n?">":";";t.substr(e).charAt(0)!==c;)r+=t.substr(e).charAt(0),e++;e++,r+=c}}i.timeout=setTimeout(function(){if(e===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,e)},i.backDelay)}else{0===e&&i.options.preStringTyped(i.arrayPos);var s=t.substr(0,e+1);i.attr?i.el.attr(i.attr,s):i.isInput?i.el.val(s):"html"===i.contentType?i.el.html(s):i.el.text(s),e++,i.typewrite(t,e)}},s)},s)}},backspace:function(t,e){if(this.stop!==!0){var s=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===t.substr(e).charAt(0)){for(var s="";"<"!==t.substr(e).charAt(0);)s-=t.substr(e).charAt(0),e--;e--,s+="<"}var o=t.substr(0,e);i.attr?i.el.attr(i.attr,o):i.isInput?i.el.val(o):"html"===i.contentType?i.el.html(o):i.el.text(o),e>i.stopNum?(e--,i.backspace(t,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},s)}},shuffleArray:function(t){var e,s,i=t.length;if(i)for(;--i;)s=Math.floor(Math.random()*(i+1)),e=t[s],t[s]=t[i],t[i]=e;return t},reset:function(){var t=this;clearInterval(t.timeout);var e=this.el.attr("id");this.el.after('<span id="'+e+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(s){return this.each(function(){var i=t(this),a=i.data("typed"),n="object"==("undefined"==typeof s?"undefined":(0,o["default"])(s))&&s;a||i.data("typed",a=new e(this,n)),"string"==typeof s&&a[s]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(t)}).call(e,s(4))},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={state:{phrase:"Web Designer, Developer, Gamer, History, science and astronomy lover",email:"mauri870@gmail.com",phone:"+55 54 8118-9792"}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={state:{projects:[{name:"Cloudradioo App",link:"http://github.com/devfake/cloudradioo-app",description:"Cloudradioo App is a desktop application builded with Electron, VueJs and Vuex that plays randomly all top 50 songs from the soundcloud charts.",image:s(92)},{name:"mauri870/api-skeleton-laravel",link:"https://github.com/mauri870/api-skeleton-laravel",description:"An API Skeleton for Laravel 5.1 with JWT",image:s(93)},{name:"artesaos/laravel-installer",link:"https://github.com/artesaos/laravel-installer",description:"Install laravel framework with any version you want",image:s(28)},{name:"artesaos/defender",link:"https://github.com/artesaos/defender",description:"Roles & Permissions for Laravel 5",image:s(28)},{name:"artesaos/laravel-linkedin",link:"https://github.com/artesaos/laravel-linkedin",description:"Linkedin API integration for Laravel and Lumen 5",image:s(28)}]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={state:{networks:[{name:"facebook",link:"http://facebook.com/mauri870"},{name:"github",link:"http://github.com/mauri870"},{name:"linkedin",link:"https://br.linkedin.com/in/mauri-de-souza-nunes-0b223090"},{name:"steam",link:"http://steamcommunity.com/id/mauri870"}]}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(103),a=i(o),n=s(102),r=i(n),c=s(104),l=i(c),d=s(105),u=i(d),p=s(101),f=i(p);e["default"]={components:{NavbarSite:a["default"],HeaderWrap:r["default"],MyPortfolio:l["default"],SocialSection:u["default"],FooterSite:f["default"]}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(41),a=i(o);e["default"]={data:function(){return{info:a["default"].state}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(4),a=i(o);s(40),e["default"]={ready:function(){(0,a["default"])(function(){(0,a["default"])(".typed").typed({strings:["LARAVEL","VUEJS","LUMEN","GIT","PHP","WEBPACK","ELECTRON","MYSQL","SOLID","REST API'S","BOWER","COMPOSER","NPM","LINUX","GULP","AWS"],typeSpeed:0,loop:!0})})}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(4),a=i(o);e["default"]={ready:function(){(0,a["default"])(window).on("scroll",function(){var t=(0,a["default"])("#navbar-menu");(0,a["default"])(this).scrollTop()>=(0,a["default"])("#control-navbar").position().top?t.addClass("nav-second-color"):t.removeClass("nav-second-color")})}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(42),a=i(o);e["default"]={data:function(){return{projects:a["default"].state.projects}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(43),a=i(o);e["default"]={data:function(){return{networks:a["default"].state.networks}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){t.exports=s.p+"static/img/cloudradioo-app.71c7cad.png"},function(t,e,s){t.exports=s.p+"static/img/laravel-package.6d924d9.png"},function(t,e){t.exports="<navbar-site></navbar-site> <header-wrap></header-wrap> <my-portfolio></my-portfolio> <social-section></social-section> <footer-site></footer-site>"},function(t,e){t.exports='<div class="navbar navbar-default navbar-fixed-top" id=navbar-menu role=navigation> <div class=container> <div class=navbar-header> <button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class="navbar-brand logo" href=/ >M</a> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-right"> <li><a href=http://github.com/mauri870 target=_blank><i class="fa fa-github fa-2x"></i></a></li> </ul> </div> </div> </div>'},function(t,e){t.exports='<section id=works _v-2946cbb0=""></section> <div class=container _v-2946cbb0=""> <div class="row centered mt mb" _v-2946cbb0=""> <h1 _v-2946cbb0="">I <i class="fa fa-heart heart fa-pulse" _v-2946cbb0=""></i> open source</h1> <p _v-2946cbb0="">Some projects that I have worked on:</p> <div class="col-lg-4 col-md-4 col-sm-4 gallery" v-for="project in projects" _v-2946cbb0=""> <h3 _v-2946cbb0="">{{ project.name }}</h3> <a target=_blank :href=project.link _v-2946cbb0=""> <img :src=project.image class=img-responsive _v-2946cbb0=""> </a> <p class=description _v-2946cbb0="">{{ project.description }}</p> </div> </div> </div>'},function(t,e){t.exports='<div id=footerwrap _v-2a4bbce3=""> <div class=container _v-2a4bbce3=""> <div class="row centered" _v-2a4bbce3=""> <div class=col-lg-4 _v-2a4bbce3=""> <p _v-2a4bbce3=""><b _v-2a4bbce3="">{{ info.phrase | uppercase }}</b></p> </div> <div class=col-lg-4 _v-2a4bbce3=""></div> <div class=col-lg-4 _v-2a4bbce3=""> <p _v-2a4bbce3=""><a href="mailto:{{ info.email }}" _v-2a4bbce3="">{{ info.email }}</a></p> </div> </div> </div> <div class=row _v-2a4bbce3=""> <div class="col-sm-12 text-center" _v-2a4bbce3=""> <p _v-2a4bbce3="">Find the <i class="fa fa-code" _v-2a4bbce3=""></i> of this project on <a href=http://github.com/mauri870/mauri870.github.io target=_blank _v-2a4bbce3=""><i class="fa fa-github fa-2x" _v-2a4bbce3=""></i></a></p> </div> </div> </div>'},function(t,e){t.exports='<div id=headerwrap _v-4b7e20d5=""> <div class=container _v-4b7e20d5=""> <div class=row _v-4b7e20d5=""> <div class="col-lg-6 col-lg-offset-3" _v-4b7e20d5=""> <h4 _v-4b7e20d5="">My skills</h4> <h1 class=typed _v-4b7e20d5=""></h1> </div> </div> </div> </div> <span id=control-navbar _v-4b7e20d5=""></span>'},function(t,e){t.exports='<div id=social _v-666be5b5=""> <div class=container _v-666be5b5=""> <div class="row centered" _v-666be5b5=""> <div class=col-lg-3 v-for="network in networks" _v-666be5b5=""> <a :href=network.link target=_blank _v-666be5b5=""><i class="fa fa-{{network.name}}" _v-666be5b5=""></i></a> </div> </div> </div> </div>'},function(t,e,s){var i,o;s(86),i=s(44),o=s(94),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,s){var i,o;s(89),i=s(45),o=s(97),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,s){var i,o;s(90),i=s(46),o=s(98),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,s){var i,o;s(87),i=s(47),o=s(95),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,s){var i,o;s(88),i=s(48),o=s(96),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,s){var i,o;s(91),i=s(49),o=s(99),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}]);
//# sourceMappingURL=app.b61262ca7ddf3f2bcf00.js.map