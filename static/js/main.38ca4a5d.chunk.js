(this["webpackJsonpone-note-spaced-learning"]=this["webpackJsonpone-note-spaced-learning"]||[]).push([[0],{106:function(e,t,n){e.exports=n(142)},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=(n(111),n(112),n(61)),l=n(34),s=n(7),u=n(189),m=n(87),f=n(215),h=n(10),d=(n(113),n(185)),g=n(186),p=n(187),v=n(48),b=n(184),E=n(17),y=n(13),k=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,[{key:"replaceParamsInUrl",value:function(e,t){return Object.entries(t).forEach((function(t){var n=Object(s.a)(t,2),a=n[0],r=n[1];e=e.replace(":".concat(a),r)})),e}},{key:"containsWord",value:function(e,t){return t=t.toLowerCase().trim(),(e=e.toLowerCase().trim()).split(" ").filter((function(e){return e.startsWith(t)})).length>0}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();k._instance=void 0;var O,j=k.getInstance(),w=n(177),S=n(181),I=n(182),D=n(183),N=n(22),P=Object(N.b)(),C={notebooks:{name:"Notebooks",path:"/notebooks",isHomePage:!0,icon:w.a},sections:{name:"Sections",path:"/notebooks/:id",icon:S.a},login:{name:"Login",path:"/login"},pages:{name:"Pages",path:"/sections/:id/pages",icon:I.a},timer:{name:"Timer",path:"/timer",icon:D.a},recentlyRevisedPages:{name:"Recently Revised Pages",path:"/recently-revised-pages"},recentlyCreatedPages:{name:"Recently Edited Pages",path:"/recently-edited-pages"}},R=(O={},Object(h.a)(O,C.sections.name,[C.notebooks]),Object(h.a)(O,C.pages.name,[C.notebooks,C.sections]),O),x=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,[{key:"getBreadCrumbs",value:function(e){return R[e]}},{key:"getHomeRoute",value:function(){var e=Object.entries(C).find((function(e){return e[1].isHomePage}));return e?e[1]:null}},{key:"getRouteInfo",value:function(e){return C[e]}},{key:"getRouteUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRouteInfo(e);return"".concat(M,"/#").concat(j.replaceParamsInUrl(n.path,t))}},{key:"gotoUrl",value:function(e){P.push(e.replace("".concat(M,"/#"),""))}},{key:"goTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRouteUrl(e,t);this.gotoUrl(n)}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();x._instance=void 0;var T=x.getInstance(),M="https://ajayullal.github.io/one-note-spaced-repetition",B={auth:{clientId:"7909dc21-ee19-4123-8ff2-9f21085c8447",authority:"https://login.microsoftonline.com/common",redirectUri:"".concat(M,"/notebooks")},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}},L={drawerWidth:240},A=C,V=n(85),_=n.n(V),U=function(){function e(){Object(E.a)(this,e),this.storage=_.a.createInstance({name:"nameHere"})}return Object(y.a)(e,[{key:"setItemSync",value:function(e,t){t?localStorage.setItem(e,t):this.removeItemSync(e)}},{key:"getItemSync",value:function(e){return localStorage.getItem(e)}},{key:"removeItemSync",value:function(e){return localStorage.removeItem(e)}},{key:"setItem",value:function(e,t){this.storage.setItem(e,t)}},{key:"getItem",value:function(e){return this.storage.getItem(e)}},{key:"removeItem",value:function(e){return this.storage.removeItem(e)}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();U._instance=void 0;var F=U.getInstance(),Z=n(86),q=n.n(Z),H=n(96),W=function(){function e(){Object(E.a)(this,e),this._userDetails=void 0;var t=F.getItemSync("userDetails");t&&(this._userDetails=JSON.parse(t))}return Object(y.a)(e,[{key:"isLoggedIn",value:function(){return Boolean(F.getItemSync("token"))}},{key:"logout",value:function(){return Boolean(F.removeItemSync("token"))}},{key:"userDetails",set:function(e){this._userDetails=e},get:function(){return this._userDetails}}],[{key:"getInstance",value:function(){return e._userService||(e._userService=new e),e._userService}}]),e}();W._userService=void 0;var J=W.getInstance(),Q="Request failed with status code 401",Y=function(){function e(){var t=this;Object(E.a)(this,e),this.handleError=function(e){switch(console.error(e),e.message){case Q:t.logout()}return Promise.reject(e.message||e.response.data.message)}}return Object(y.a)(e,[{key:"logout",value:function(){ne.logout(),window.location.replace(te.getRouteUrl("login"))}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();Y._instance=void 0;var z=Y.getInstance(),$=q.a.create({baseURL:"https://graph.microsoft.com/v1.0/me/onenote",headers:{}});$.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var G="0-f2f6afa638c1864cb26399b2a7cef5f7!1-E6AC34B29128DCBF!2176",K={notebooks:"/notebooks",sections:"/notebooks/:id/sections",sectionPages:"/sections/:id/pages?top=100",content:"/pages/".concat(G,"/content"),pages:"/pages"},X=function(){function e(){Object(E.a)(this,e),this._redirectUrl=null,this._db=void 0,this._dbCellDelimiter="!@#",this.myMSALObj=void 0,this.requestObj={scopes:["Notes.Read.All","offline_access"]},this.myMSALObj=new H.a(B),this.checkAndSetPersistedBearerToken()}return Object(y.a)(e,[{key:"redirectUrl",get:function(){return this._redirectUrl},set:function(e){this._redirectUrl=e}}]),Object(y.a)(e,[{key:"authRedirectCallBack",value:function(e,t){e?console.log(e):"access_token"===t.tokenType?console.log(t.accessToken):console.log("token type is:"+t.tokenType)}},{key:"checkTokenExpiryAndRenew",value:function(e){var t=this,n=e.getTime()-Date.now()-6e5;console.log("Setting token renewal timeout..."),setTimeout((function(){console.log("Renewing token..."),t.acquireTokenPopup()}),n)}},{key:"onToken",value:function(e){this.setBearerToken(e.accessToken),this.setUserDetails(J.userDetails),P.push(T.getRouteUrl("notebooks"))}},{key:"acquireTokenPopup",value:function(){var e=this;this.myMSALObj.acquireTokenSilent(this.requestObj).then((function(t){e.checkTokenExpiryAndRenew(t.expiresOn),e.onToken(t)})).catch((function(t){alert(t),e.myMSALObj.acquireTokenPopup(e.requestObj).then((function(t){e.checkTokenExpiryAndRenew(t.expiresOn),e.onToken(t)})).catch((function(e){alert(e)}))}))}},{key:"setUserDetails",value:function(e){F.setItemSync("userDetails",JSON.stringify(e))}},{key:"onSignIn",value:function(){var e=this;return this.myMSALObj.handleRedirectCallback(this.authRedirectCallBack),this.myMSALObj.loginPopup(this.requestObj).then((function(t){e.acquireTokenPopup()})).catch((function(e){alert(e)}))}},{key:"checkAndSetPersistedBearerToken",value:function(){var e=F.getItemSync("token");e&&($.defaults.headers.common.Authorization="Bearer ".concat(e))}},{key:"setBearerToken",value:function(e){$.defaults.headers.common.Authorization="Bearer ".concat(e),F.setItemSync("token",e)}},{key:"returnValue",value:function(e){return e.value}},{key:"getAllNoteBooks",value:function(){return $.get(K.notebooks).then(this.returnValue).catch(z.handleError)}},{key:"getAllSection",value:function(e){return $.get(j.replaceParamsInUrl(K.sections,{id:e})).then(this.returnValue).catch(z.handleError)}},{key:"getAllPages",value:function(){return $.get(K.pages).then((function(e){return e.value.filter((function(e){return e.id!==G&&"Work"!==e.parentSection.displayName}))})).catch(z.handleError)}},{key:"getSectionPages",value:function(e){var t=this;return $.get(j.replaceParamsInUrl(K.sectionPages,{id:e})).then((function(e){return t.returnValue(e).filter((function(e){return e.title}))})).catch(z.handleError)}},{key:"getPage",value:function(e){return $.get(e).catch(z.handleError)}},{key:"updateOneNoteDB",value:function(e){var t=this,n=["startDate","startTime","title","minutesSpentLearning","totalSessionMinutes","repetition","pageId","sectionName","sectionId"],a="";return n.forEach((function(r,o){a+="".concat(e[r]).concat(o!==n.length-1?t._dbCellDelimiter:"")})),$.patch(K.content,[{target:"body",action:"append",content:"<p>".concat(a,"</p>")}]).then((function(e){return t._db=null})).catch(z.handleError)}},{key:"getAllDBRows",value:function(){var e=this;return new Promise((function(t,n){e.getDb().then((function(n){var a=(new DOMParser).parseFromString(n,"text/xml"),r=Array.from(a.getElementsByTagName("p")),o=[];r.forEach((function(t){var n,a=(null===t||void 0===t?void 0:null===(n=t.textContent)||void 0===n?void 0:n.split(e._dbCellDelimiter))||[];o.push({startDate:a?a[0]:"",startTime:a?a[1]:"",title:a?a[2].trim():"",minutesSpentLearning:a?Number(a[3]):"",totalSessionMinutes:a?a[4]:"",repetition:a?"false"===a[5].trim()?"No":"Yes":"",pageId:a?a[6]:"",sectionName:a?a[7]:"",sectionId:a?a[8]:""})})),t(o)})).catch(n)}))}},{key:"getDb",value:function(){var e=this;return this._db?Promise.resolve(this._db):$.get(K.content).then((function(t){return e._db=t})).catch(z.handleError)}},{key:"getPageContent",value:function(e){return $.get(e).catch(z.handleError)}}],[{key:"getInstance",value:function(){return e.microsoftOneNoteApi||(e.microsoftOneNoteApi=new e),e.microsoftOneNoteApi}}]),e}();X.microsoftOneNoteApi=void 0;var ee=X.getInstance(),te=T,ne=J,ae=j,re=n(88),oe=n.n(re),ce=function(e){var t,n=e.pageName,a=e.hideNavDrawer,o=void 0!==a&&a,c=e.history,i=e.toggleNavDrawer,l=function(e){return Object(m.a)((function(t){return Object(f.a)({appBar:Object(h.a)({},t.breakpoints.up("sm"),{width:e?"100%":"calc(100% - ".concat(L.drawerWidth,"px)"),marginLeft:L.drawerWidth}),menuButton:Object(h.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),homeButton:{marginLeft:"10px",marginRight:"5px"},toolbar:{display:"flex",justifyContent:"space-between",padding:"0px",paddingRight:"15px"}})}))}(o)(),s=n===te.getRouteInfo("login").name,u=r.a.createElement("div",{className:"account-details"},r.a.createElement("span",{className:"user-name"},null===(t=ne.userDetails)||void 0===t?void 0:t.account.name),r.a.createElement(b.a,null),r.a.createElement("span",{onClick:function(){ne.logout(),c.push(te.getRouteUrl("login"))},className:"logout"},"Logout")),E=r.a.createElement(d.a,{color:"inherit","aria-label":"open drawer",edge:"start",className:l.homeButton,onClick:i},r.a.createElement(oe.a,null));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{position:"fixed",className:l.appBar},r.a.createElement(p.a,{className:l.toolbar},r.a.createElement(v.a,{variant:"h6",noWrap:!0},r.a.createElement(r.a.Fragment,null,s?"":E,r.a.createElement("span",{style:{marginLeft:s?"23px":"",position:"relative",top:"2px"}},n))),ne.isLoggedIn()?u:null)))},ie=n(212),le=function(e){var t=e.errorMessage;Object(a.useEffect)((function(){}),[t]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{style:{marginTop:"70px",width:"110%",marginLeft:"50px"}},r.a.createElement((function(e){return r.a.createElement(ie.a,Object.assign({elevation:6,variant:"filled"},e))}),{severity:"error"},t)):null)},se=n(188),ue=n(213),me=n(216),fe=n(14),he=n(89),de=n.n(he),ge=(n(135),n(90)),pe=n.n(ge),ve=Object(m.a)((function(e){return Object(f.a)({drawer:Object(h.a)({},e.breakpoints.up("sm"),{flexShrink:0}),drawerPaper:{width:L.drawerWidth},toolbar:e.mixins.toolbar})})),be=function(e){var t=e.open,n=e.onClose,a=e.children,o=ve(),c=Object(fe.a)(),i=r.a.createElement("div",null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:de.a,width:"40",height:"40"}),r.a.createElement(v.a,{className:"app-name",variant:"h6"},r.a.createElement(pe.a,{onClick:n,className:"closeIcon"}))),r.a.createElement(se.a,null),a);return r.a.createElement("nav",{className:o.drawer,"aria-label":"mailbox folders"},r.a.createElement(ue.a,{smUp:!0,implementation:"css"},r.a.createElement(me.a,{variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:t,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0},onClose:n},i)),r.a.createElement(ue.a,{xsDown:!0,implementation:"css"},r.a.createElement(me.a,{classes:{paper:o.drawerPaper},variant:"temporary",open:t},i)))},Ee=n(92),ye=n.n(Ee),ke=n(93),Oe=n.n(ke),je=n(94),we=n.n(je),Se=n(190),Ie=n(191),De=n(192),Ne=n(193),Pe=Object(m.a)((function(e){return Object(f.a)({root:{display:"flex"},toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)},link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20},breadcrumb:{marginBottom:20},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"}})})),Ce=Object(l.g)((function(e){var t=e.errorMessage,n=e.routeInfo,o=e.children,c=e.hideNavDrawer,i=void 0!==c&&c,l=e.history,m=Pe(),f=Object(a.useState)(!1),h=Object(s.a)(f,2),d=h[0],g=h[1];return r.a.createElement("div",{className:m.root},r.a.createElement(u.a,null),r.a.createElement(le,{errorMessage:t}),r.a.createElement(ce,{toggleNavDrawer:function(){g((function(e){return!e}))},history:l,hideNavDrawer:i,pageName:n.name}),r.a.createElement(be,{open:d,onClose:function(){return g(!1)}},r.a.createElement(Se.a,null,r.a.createElement(Ie.a,{onClick:function(){var e=T.getRouteInfo("notebooks");T.gotoUrl("#".concat(e.path))},button:!0},r.a.createElement(De.a,null,r.a.createElement(ye.a,null)),r.a.createElement(Ne.a,{primary:T.getRouteInfo("notebooks").name})),r.a.createElement(Ie.a,{onClick:function(){var e=T.getRouteInfo("recentlyRevisedPages");T.gotoUrl("#".concat(e.path))},button:!0},r.a.createElement(De.a,null,r.a.createElement(Oe.a,null)),r.a.createElement(Ne.a,{primary:T.getRouteInfo("recentlyRevisedPages").name})),r.a.createElement(Ie.a,{onClick:function(){var e=T.getRouteInfo("recentlyCreatedPages");T.gotoUrl("#".concat(e.path))},button:!0},r.a.createElement(De.a,null,r.a.createElement(we.a,null)),r.a.createElement(Ne.a,{primary:T.getRouteInfo("recentlyCreatedPages").name})))),r.a.createElement("main",{className:m.content},r.a.createElement("div",{className:m.toolbar}),o))})),Re=n(197),xe=function(e){return function(t){var n,a=(n=t.history,J.isLoggedIn()?[!0]:(n.push(C.login.path),[!1]));return Object(s.a)(a,1)[0]?(ee.redirectUrl=null,r.a.createElement(e,t)):(ee.redirectUrl=t.match.url,null)}},Te=n(194),Me=n(195),Be=n(196),Le=Object(m.a)({card:{cursor:"pointer"}}),Ae=function(e){var t=e.items,n=e.onClick,a=e.displayPropName,o=e.render,c=void 0===o?null:o,i=e.keyProp,l=Le();return c||(c=function(e){return r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},e[a])}),(null===t||void 0===t?void 0:t.length)>0?r.a.createElement(Te.a,{spacing:5,container:!0},t.map((function(e){return r.a.createElement(Te.a,{onClick:function(){return n(e)},xs:12,item:!0,md:6,key:e[i]?e[i]:e.id},r.a.createElement(Me.a,{className:l.card,variant:"outlined"},r.a.createElement(Be.a,null,c(e))))}))):r.a.createElement(v.a,{variant:"h6",component:"h6",color:"textSecondary",gutterBottom:!0},"Nothing to display")},Ve=xe((function(e){var t=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),c=Object(s.a)(o,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){ee.getAllNoteBooks().then((function(e){r(e)})).catch((function(e){l(e)}))}),[]),[n,i]}(),n=Object(s.a)(t,2),o=n[0],c=n[1],i=r.a.createElement(Ae,{displayPropName:"displayName",onClick:function(e){T.goTo("sections",{id:e.id})},items:o||[]});return r.a.createElement(Ce,{errorMessage:c,hideNavDrawer:!0,routeInfo:T.getRouteInfo("notebooks")},o?i:r.a.createElement(Re.a,{color:"secondary"}))})),_e=(n(137),n(211)),Ue=xe((function(e){var t=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){ee.getAllSection(e).then((function(e){o(e)}))}),[e]),[r]}(e.match.params.id),n=Object(s.a)(t,1)[0],o=Object(a.useState)([]),c=Object(s.a)(o,2),i=c[0],l=c[1];Object(a.useEffect)((function(){l(n)}),[n]);var u=r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,{fullWidth:!0,autoComplete:"off",className:"searchBox",id:"outlined-secondary",label:"Search Sections",variant:"outlined",onChange:function(e){var t=e.target.value.toLowerCase(),a=n.filter((function(e){var n=e.displayName.toLowerCase();return ae.containsWord(n,t)}));l(a)}}),r.a.createElement(Ae,{displayPropName:"displayName",onClick:function(e){te.goTo("pages",{id:e.id})},items:i||[]}));return r.a.createElement(Ce,{hideNavDrawer:!0,routeInfo:te.getRouteInfo("sections")},r.a.createElement(r.a.Fragment,null,(null===n||void 0===n?void 0:n.length)>0?u:r.a.createElement(Re.a,{color:"secondary"})))})),Fe=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),c=Object(s.a)(o,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){ee.getAllDBRows().then((function(e){r(e)})).finally((function(){l(!1)}))}),[l]),[n,i,r]},Ze=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,[{key:"diffBetweenDates",value:function(e,t){var n=new Date(e),a=new Date(t),r=Math.abs(a-n);return Math.ceil(r/864e5)}},{key:"diffFromToday",value:function(e){var t=new Date(e),n=new Date,a=Math.abs(n-t);return Math.trunc(a/864e5)}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();Ze._instance=void 0;var qe=Ze.getInstance(),He=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,[{key:"sortPages",value:function(e){e.sort((function(e,t){if(0===e.sessions.length&&t.sessions.length>0)return 1;if(e.sessions.length>0&&0===t.sessions.length)return-1;if(0===e.sessions.length&&0===t.sessions.length)return 0;var n=new Date(e.sessions[0].startDate);return new Date(t.sessions[0].startDate)-n}))}},{key:"getSessionsFromDB",value:function(e){var t={};return e.forEach((function(e){t[e.title]||(t[e.title]=[]),t[e.title].push(e)})),t}},{key:"addSessionDiffFromToday",value:function(e){return e.map((function(e){return e.daysDiffFromToday=qe.diffFromToday(e.startDate),e}))}},{key:"mergeDBAndPageData",value:function(e,t){var n=this,a={};e.forEach((function(e){a[e.title]||(a[e.title]=[]),a[e.title].push(e)})),t.forEach((function(e){e.sessions=a[e.title]||[],n.addSessionDiffFromToday(e.sessions)})),this.sortPages(t)}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();He._instance=void 0;var We=He.getInstance(),Je=n(95),Qe=n.n(Je),Ye=function(e){var t=e.viewPageInfo,n=e.filteredPages,a=e.keyProp;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{onClick:t,items:n,keyProp:a,render:function(e){var t;return r.a.createElement("div",{key:e},r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},e.title),r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("span",null,e.sectionName)),r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Last revisited:",(null===(t=e.sessions)||void 0===t?void 0:t.length)>0?e.sessions.map((function(t,n){var a=t.daysDiffFromToday,o=t.startDate,c=t.startTime;return r.a.createElement("span",{key:"".concat(o,"*").concat(c)}," ",a,n!==e.sessions.length-1?", ":" day".concat(a>1?"s":""," ago"))})):" Never",e.links?r.a.createElement(Qe.a,{onClick:function(t){var n,a;t.stopPropagation();var r=null===(n=e.links)||void 0===n?void 0:null===(a=n.oneNoteClientUrl)||void 0===a?void 0:a.href;r&&(window.location.href=r)},style:{float:"right"}}):null))}}))},ze=xe((function(e){var t=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!0),i=Object(s.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){ee.getSectionPages(e).then((function(e){o(e)})).finally((function(){u(!1)}))}),[e]),[r,l]}(e.match.params.id),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(o),l=Object(s.a)(i,2),u=l[0],m=l[1],f=T.getRouteUrl("timer"),h=Fe(),d=Object(s.a)(h,2),g=d[0],p=d[1],v=Object(a.useCallback)((function(){We.mergeDBAndPageData(g,o),m(o)}),[g,o]);Object(a.useEffect)((function(){g&&o&&v()}),[g,v,o]);var b=r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,{fullWidth:!0,autoComplete:"off",className:"searchBox",id:"outlined-secondary",label:"Search Pages",variant:"outlined",onChange:function(e){var t=e.target.value.toLowerCase(),n=o.filter((function(e){return j.containsWord(e.title,t)}));m(n)}}),r.a.createElement(Ye,{viewPageInfo:function(e){T.gotoUrl("".concat(f,"?pageUrl=").concat(encodeURIComponent(e.self)))},filteredPages:u}));return r.a.createElement(Ce,{hideNavDrawer:!0,routeInfo:T.getRouteInfo("pages")},r.a.createElement(r.a.Fragment,null,c||p?r.a.createElement(Re.a,{color:"secondary"}):b))})),$e=n(53),Ge=n(18),Ke=n(4),Xe=n(217),et=n(203),tt=n(204),nt=n(205),at=n(206),rt=n(207),ot=n(208),ct=n(202),it=n(199),lt=n(200),st=n(201),ut=function(e){var t=e.open,n=e.onClose,a=e.onQuit,o=e.isRevision;return r.a.createElement("div",null,r.a.createElement(it.a,{open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(lt.a,{id:"alert-dialog-title"},"Are you sure you want to ".concat(o?"stop":"quit","?")),r.a.createElement(st.a,null,r.a.createElement(ct.a,{onClick:n,color:"primary"},"Close"),r.a.createElement(ct.a,{onClick:a,color:"primary",autoFocus:!0},o?"Stop":"Quit"))))},mt=n(64),ft=(n(138),n(198)),ht=n(209),dt=n(210),gt=n(214),pt=Object(m.a)({table:{minWidth:650}}),vt=(n(139),xe((function(e){var t=Fe(),n=Object(s.a)(t,3),o=n[0],c=n[1],i=n[2],l=Object(a.useState)([]),u=Object(s.a)(l,2),m=u[0],f=u[1];Object(a.useEffect)((function(){if(o&&o.length>0&&!o[0].sessions){var e=We.getSessionsFromDB(o),t=Object.entries(e).map((function(e){var t=Object(s.a)(e,2)[1];return Object($e.a)({},t[0],{sessions:We.addSessionDiffFromToday(t)})}));We.sortPages(t),i(t),f(t)}}),[o,i]);var h=r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,{fullWidth:!0,autoComplete:"off",className:"searchBox",id:"outlined-secondary",label:"Search Pages",variant:"outlined",onChange:function(e){var t=e.target.value.toLowerCase(),n=o.filter((function(e){var n=e.title.toLowerCase(),a=e.sectionName.toLowerCase(),r=e.sessions;return j.containsWord(n,t)||j.containsWord(a,t)||r.find((function(e){return e.daysDiffFromToday===Number(t)}))}));f(n)}}),r.a.createElement(Ye,{keyProp:"pageId",viewPageInfo:function(){},filteredPages:m}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{hideNavDrawer:!0,routeInfo:T.getRouteInfo("recentlyRevisedPages")},c?r.a.createElement(Re.a,{color:"secondary"}):h))}))),bt=(n(140),{Login:function(e){function t(){te.goTo("notebooks")}return Object(a.useLayoutEffect)((function(){ne.isLoggedIn()&&te.goTo("notebooks")}),[e.history]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{hideNavDrawer:!0,routeInfo:te.getRouteInfo("login")},r.a.createElement("div",{className:"msal-login-btn",onClick:function(){return ee.onSignIn().then(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"215",height:"41",viewBox:"0 0 215 41"},r.a.createElement("title",null,"MS-SymbolLockup"),r.a.createElement("rect",{width:"215",height:"41",fill:"#fff"}),r.a.createElement("path",{d:"M214,1V40H1V1H214m1-1H0V41H215V0Z",fill:"#8c8c8c"}),r.a.createElement("path",{d:"M45.812,25.082V23.288a2.849,2.849,0,0,0,.576.4,4.5,4.5,0,0,0,.707.3,5.513,5.513,0,0,0,.747.187,3.965,3.965,0,0,0,.688.065,2.937,2.937,0,0,0,1.637-.365,1.2,1.2,0,0,0,.538-1.062,1.16,1.16,0,0,0-.179-.649,1.928,1.928,0,0,0-.5-.5,5.355,5.355,0,0,0-.757-.435q-.437-.209-.935-.436c-.356-.19-.687-.383-1-.578a4.358,4.358,0,0,1-.8-.648,2.728,2.728,0,0,1-.534-.8,2.6,2.6,0,0,1-.194-1.047,2.416,2.416,0,0,1,.333-1.285,2.811,2.811,0,0,1,.879-.9,4.026,4.026,0,0,1,1.242-.528,5.922,5.922,0,0,1,1.42-.172,5.715,5.715,0,0,1,2.4.374v1.721a3.832,3.832,0,0,0-2.3-.645,4.106,4.106,0,0,0-.773.074,2.348,2.348,0,0,0-.689.241,1.5,1.5,0,0,0-.494.433,1.054,1.054,0,0,0-.19.637,1.211,1.211,0,0,0,.146.608,1.551,1.551,0,0,0,.429.468,4.276,4.276,0,0,0,.688.414c.271.134.584.28.942.436q.547.285,1.036.6a4.881,4.881,0,0,1,.856.7,3.015,3.015,0,0,1,.586.846,2.464,2.464,0,0,1,.217,1.058,2.635,2.635,0,0,1-.322,1.348,2.608,2.608,0,0,1-.868.892,3.82,3.82,0,0,1-1.257.5,6.988,6.988,0,0,1-1.5.155c-.176,0-.392-.014-.649-.04s-.518-.067-.787-.117a7.772,7.772,0,0,1-.761-.187A2.4,2.4,0,0,1,45.812,25.082Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M55.129,16.426a1.02,1.02,0,0,1-.714-.272.89.89,0,0,1-.3-.688.916.916,0,0,1,.3-.7,1.008,1.008,0,0,1,.714-.278,1.039,1.039,0,0,1,.732.278.909.909,0,0,1,.3.7.9.9,0,0,1-.3.678A1.034,1.034,0,0,1,55.129,16.426Zm.842,9.074h-1.7V18h1.7Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M65.017,24.9q0,4.131-4.153,4.131a6.187,6.187,0,0,1-2.556-.491V26.986a4.726,4.726,0,0,0,2.337.7,2.342,2.342,0,0,0,2.672-2.628V24.24h-.029a2.947,2.947,0,0,1-4.742.436,4.041,4.041,0,0,1-.838-2.684,4.738,4.738,0,0,1,.9-3.04,3,3,0,0,1,2.476-1.128,2.384,2.384,0,0,1,2.2,1.216h.029V18h1.7Zm-1.684-2.835v-.973a1.91,1.91,0,0,0-.524-1.352A1.718,1.718,0,0,0,61.5,19.18a1.793,1.793,0,0,0-1.512.714,3.217,3.217,0,0,0-.546,2,2.774,2.774,0,0,0,.524,1.769,1.678,1.678,0,0,0,1.387.662,1.805,1.805,0,0,0,1.429-.632A2.391,2.391,0,0,0,63.333,22.064Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M73.908,25.5h-1.7V21.273q0-2.1-1.486-2.1a1.622,1.622,0,0,0-1.282.582,2.162,2.162,0,0,0-.5,1.469V25.5H67.229V18h1.707v1.245h.029A2.673,2.673,0,0,1,71.4,17.824a2.265,2.265,0,0,1,1.868.795,3.57,3.57,0,0,1,.644,2.3Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M80.962,16.426a1.02,1.02,0,0,1-.714-.272.89.89,0,0,1-.3-.688.916.916,0,0,1,.3-.7,1.008,1.008,0,0,1,.714-.278,1.039,1.039,0,0,1,.732.278.909.909,0,0,1,.3.7.9.9,0,0,1-.3.678A1.034,1.034,0,0,1,80.962,16.426ZM81.8,25.5H80.1V18h1.7Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M90.7,25.5H89V21.273q0-2.1-1.486-2.1a1.622,1.622,0,0,0-1.282.582,2.157,2.157,0,0,0-.506,1.469V25.5H84.023V18H85.73v1.245h.03a2.673,2.673,0,0,1,2.431-1.421,2.265,2.265,0,0,1,1.868.795,3.57,3.57,0,0,1,.644,2.3Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M106.984,18l-2.212,7.5h-1.78l-1.361-5.083a3.215,3.215,0,0,1-.1-.659H101.5a3.069,3.069,0,0,1-.131.644l-1.48,5.1H98.145L95.939,18H97.7l1.363,5.405a3.16,3.16,0,0,1,.087.645H99.2a3.384,3.384,0,0,1,.117-.659L100.832,18h1.6l1.347,5.428a3.732,3.732,0,0,1,.095.644h.052a3.387,3.387,0,0,1,.11-.644L105.365,18Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M109.1,16.426a1.018,1.018,0,0,1-.714-.272.886.886,0,0,1-.3-.688.912.912,0,0,1,.3-.7,1.006,1.006,0,0,1,.714-.278,1.039,1.039,0,0,1,.732.278.912.912,0,0,1,.3.7.9.9,0,0,1-.3.678A1.034,1.034,0,0,1,109.1,16.426Zm.841,9.074h-1.7V18h1.7Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M116.117,25.42a2.955,2.955,0,0,1-1.31.248q-2.182,0-2.183-2.094V19.333h-1.253V18h1.253V16.264l1.7-.483V18h1.794v1.333h-1.794v3.75a1.484,1.484,0,0,0,.241.952,1.006,1.006,0,0,0,.807.285,1.167,1.167,0,0,0,.746-.248Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M124.248,25.5h-1.7V21.4q0-2.226-1.487-2.226a1.556,1.556,0,0,0-1.26.644,2.568,2.568,0,0,0-.513,1.649V25.5h-1.707V14.4h1.707v4.849h.029a2.685,2.685,0,0,1,2.432-1.421q2.5,0,2.5,3.055Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M141.907,25.5h-1.728V18.7q0-.835.1-2.043h-.029a6.992,6.992,0,0,1-.285.988L136.831,25.5h-1.2l-3.143-7.793a7.236,7.236,0,0,1-.277-1.047h-.029q.057.63.058,2.058V25.5h-1.611V15h2.453l2.762,7a10.884,10.884,0,0,1,.41,1.2h.036c.181-.551.327-.962.44-1.23L139.541,15h2.366Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M145.158,16.426a1.022,1.022,0,0,1-.714-.272.89.89,0,0,1-.3-.688.916.916,0,0,1,.3-.7,1.009,1.009,0,0,1,.714-.278,1.043,1.043,0,0,1,.733.278.911.911,0,0,1,.3.7.9.9,0,0,1-.3.678A1.038,1.038,0,0,1,145.158,16.426ZM146,25.5h-1.7V18H146Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M153.589,25.156a4.2,4.2,0,0,1-2.131.52,3.606,3.606,0,0,1-2.695-1.044,3.691,3.691,0,0,1-1.026-2.706,4.07,4.07,0,0,1,1.1-2.978,3.944,3.944,0,0,1,2.948-1.124,4.3,4.3,0,0,1,1.81.36v1.582a2.743,2.743,0,0,0-1.67-.586,2.32,2.32,0,0,0-1.766.728,2.665,2.665,0,0,0-.688,1.908,2.536,2.536,0,0,0,.648,1.838,2.3,2.3,0,0,0,1.739.674,2.716,2.716,0,0,0,1.729-.652Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M159.625,19.619a1.4,1.4,0,0,0-.887-.242,1.513,1.513,0,0,0-1.259.682,3.04,3.04,0,0,0-.506,1.852V25.5h-1.7V18h1.7v1.545H157a2.606,2.606,0,0,1,.766-1.233,1.724,1.724,0,0,1,1.154-.444,1.432,1.432,0,0,1,.7.14Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M164.02,25.676a3.719,3.719,0,0,1-2.773-1.051,3.8,3.8,0,0,1-1.036-2.787,3.7,3.7,0,0,1,3.991-4.014,3.6,3.6,0,0,1,2.739,1.033,3.986,3.986,0,0,1,.982,2.864,3.932,3.932,0,0,1-1.059,2.875A3.8,3.8,0,0,1,164.02,25.676Zm.08-6.5a1.938,1.938,0,0,0-1.575.7,2.913,2.913,0,0,0-.579,1.919,2.744,2.744,0,0,0,.586,1.856,1.965,1.965,0,0,0,1.568.678,1.87,1.87,0,0,0,1.542-.666,2.956,2.956,0,0,0,.538-1.9,3,3,0,0,0-.538-1.911A1.858,1.858,0,0,0,164.1,19.18Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M169.182,25.266V23.691a3.392,3.392,0,0,0,2.1.725q1.539,0,1.538-.908a.714.714,0,0,0-.132-.436,1.241,1.241,0,0,0-.355-.318,2.784,2.784,0,0,0-.527-.25q-.3-.108-.677-.248a7.052,7.052,0,0,1-.832-.389,2.545,2.545,0,0,1-.615-.465,1.745,1.745,0,0,1-.37-.59,2.145,2.145,0,0,1-.125-.769,1.775,1.775,0,0,1,.256-.955,2.223,2.223,0,0,1,.69-.7,3.289,3.289,0,0,1,.98-.425,4.511,4.511,0,0,1,1.136-.143,5.181,5.181,0,0,1,1.86.315v1.487a3.136,3.136,0,0,0-1.816-.542,2.317,2.317,0,0,0-.582.066,1.472,1.472,0,0,0-.443.183.886.886,0,0,0-.286.282.669.669,0,0,0-.1.363.77.77,0,0,0,.1.41.93.93,0,0,0,.3.3,2.654,2.654,0,0,0,.483.234q.282.105.649.23a9.4,9.4,0,0,1,.867.4,2.886,2.886,0,0,1,.656.465,1.806,1.806,0,0,1,.417.6,2.034,2.034,0,0,1,.147.81,1.847,1.847,0,0,1-.264,1,2.205,2.205,0,0,1-.7.7,3.292,3.292,0,0,1-1.015.413,5.222,5.222,0,0,1-1.212.136A5.115,5.115,0,0,1,169.182,25.266Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M179.443,25.676a3.717,3.717,0,0,1-2.772-1.051,3.793,3.793,0,0,1-1.036-2.787,3.7,3.7,0,0,1,3.991-4.014,3.6,3.6,0,0,1,2.739,1.033,3.986,3.986,0,0,1,.982,2.864,3.932,3.932,0,0,1-1.059,2.875A3.8,3.8,0,0,1,179.443,25.676Zm.08-6.5a1.936,1.936,0,0,0-1.574.7,2.908,2.908,0,0,0-.579,1.919,2.739,2.739,0,0,0,.586,1.856,1.964,1.964,0,0,0,1.567.678,1.868,1.868,0,0,0,1.542-.666,2.95,2.95,0,0,0,.539-1.9,2.99,2.99,0,0,0-.539-1.911A1.857,1.857,0,0,0,179.523,19.18Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M189.067,15.781a1.533,1.533,0,0,0-.784-.2q-1.237,0-1.237,1.4V18h1.743v1.333h-1.736V25.5h-1.7V19.333h-1.282V18h1.282V16.784a2.362,2.362,0,0,1,.777-1.871,2.82,2.82,0,0,1,1.94-.684,2.879,2.879,0,0,1,1,.138Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M194.23,25.42a2.955,2.955,0,0,1-1.31.248q-2.182,0-2.183-2.094V19.333h-1.253V18h1.253V16.264l1.7-.483V18h1.793v1.333h-1.793v3.75a1.484,1.484,0,0,0,.241.952,1,1,0,0,0,.806.285,1.165,1.165,0,0,0,.746-.248Z",fill:"#5e5e5e"}),r.a.createElement("rect",{x:"13",y:"11",width:"9",height:"9",fill:"#f25022"}),r.a.createElement("rect",{x:"13",y:"21",width:"9",height:"9",fill:"#00a4ef"}),r.a.createElement("rect",{x:"23",y:"11",width:"9",height:"9",fill:"#7fba00"}),r.a.createElement("rect",{x:"23",y:"21",width:"9",height:"9",fill:"#ffb900"})))))},Notebooks:Ve,Sections:Ue,Pages:ze,Timer:function(e){var t=Object(a.useState)(30),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1],f=Object(a.useState)(),h=Object(s.a)(f,2),d=h[0],g=h[1],p=Object(a.useState)(0),b=Object(s.a)(p,2),E=b[0],y=b[1],k=Object(a.useState)(!1),O=Object(s.a)(k,2),j=O[0],w=O[1],S=Object(a.useState)([]),I=Object(s.a)(S,2),D=I[0],N=I[1],P=Object(a.useState)(!0),C=Object(s.a)(P,2),R=C[0],x=C[1],M=Object(a.useState)(),B=Object(s.a)(M,2),L=B[0],A=B[1],V=Object(a.useState)(!1),_=Object(s.a)(V,2),U=_[0],F=_[1],Z=Object(a.useState)(""),q=Object(s.a)(Z,2),H=q[0],W=q[1],J=Object(a.useRef)(new Date),Q=Object(a.useRef)(30),Y=Object(a.useRef)(),z=Object(a.useRef)(),$=Object(a.useRef)(!1),G=pt();Object(a.useEffect)((function(){var t=new URLSearchParams(e.location.search).get("pageUrl");t?ee.getPage(t).then((function(e){return z.current=e,ee.getAllDBRows().then((function(e){var t=0,n=[];e.forEach((function(e){(null===z||void 0===z?void 0:z.current.title)===e.title&&(t+=e.minutesSpentLearning,n.push(e))})),A(t),N(n)}))})).finally((function(){x(!1)})):T.goTo(T.getHomeRoute().name.toLowerCase())}),[]);var K=Object(Ke.a)({root:{color:"rgb(246, 1, 87)",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(Xe.a),X=function(e){var t=(e-(Date.now()-J.current.getTime()))/1e3,n=Math.trunc(t/60),a=Math.ceil(t-60*n);return"".concat(n," minutes and ").concat(a," seconds left")},te=function(e){return(e-(Date.now()-J.current.getTime()))/e*100},ne=function(e,t){return{startDate:"".concat(J.current.getMonth()+1,"/").concat(J.current.getDate(),"/").concat(J.current.getFullYear()),startTime:"".concat(J.current.getHours(),":").concat(J.current.getMinutes(),":").concat(J.current.getSeconds()),title:z.current.title,totalSessionMinutes:t/6e4,minutesSpentLearning:e/6e4,repetition:!1,pageId:z.current.id,sectionName:z.current.parentSection.displayName,sectionId:z.current.parentSection.id}},ae=Object(a.useCallback)((function(){var e=60*Q.current*1e3,t=Date.now()-J.current.getTime(),n=ne(t,e);ee.updateOneNoteDB(n).then((function(){N((function(e){return[].concat(Object(Ge.a)(e),[Object($e.a)({},n,{repetition:"No"})])}))})),clearInterval(Y.current),m(!1)}),[]),re=Object(a.useCallback)((function(){var e=60*Q.current*1e3;J.current=new Date,g(X(e)),y(te(e)),Y.current=setInterval((function(){g(X(e)),y(te(e)),Date.now()-J.current.getTime()>=e&&ae()}),1e3),m(!0)}),[]),oe=D.length>0?r.a.createElement(et.a,{component:mt.a},r.a.createElement(tt.a,{className:G.table,"aria-label":"simple table"},r.a.createElement(nt.a,null,r.a.createElement(at.a,null,r.a.createElement(rt.a,{align:"center"}),r.a.createElement(rt.a,{align:"center"},"Date"),r.a.createElement(rt.a,{align:"center"},"Time"),r.a.createElement(rt.a,{align:"center"},"Minutes spent"),r.a.createElement(rt.a,{align:"center"},"Total session minutes"),r.a.createElement(rt.a,{align:"center"},"Repetition"))),r.a.createElement(ot.a,null,D.map((function(e,t){return r.a.createElement(at.a,{style:e.minutesSpentLearning<e.totalSessionMinutes?{backgroundColor:"#faa1be",opacity:.8}:{position:"static"},key:t},r.a.createElement(rt.a,{align:"center"},t+1),r.a.createElement(rt.a,{align:"center"},e.startDate),r.a.createElement(rt.a,{align:"center"},e.startTime),r.a.createElement(rt.a,{align:"center"},e.minutesSpentLearning),r.a.createElement(rt.a,{align:"center"},e.totalSessionMinutes),r.a.createElement(rt.a,{align:"center"},e.repetition))}))))):r.a.createElement(v.a,{variant:"h6",component:"h6",color:"textSecondary",gutterBottom:!0},"Nothing to display"),ce=function(){var e=Math.trunc((Date.now()-J.current.getTime())/1e3);return{minutes:Math.trunc(e/60),seconds:e}},ie=r.a.createElement(r.a.Fragment,null,r.a.createElement(ft.a,{className:"revision-switch",component:"fieldset"},r.a.createElement(ht.a,null,r.a.createElement(dt.a,{control:r.a.createElement(gt.a,{checked:U,onChange:function(e){u?($.current=!0,w(!0)):F((function(e){return!e}))},value:"gilad"}),label:"Revision Mode"}))),r.a.createElement("br",null)),le=u?r.a.createElement(v.a,{variant:"h5",component:"h6",gutterBottom:!0},z.current&&'"'.concat(z.current.title,'"'),": ",d):r.a.createElement(v.a,{variant:"h5",component:"h6",gutterBottom:!0},"Study ",z.current&&'"'.concat(z.current.title,'"')," for ",o," Minutes"),se=Object(a.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{minHeight:"45px",paddingTop:u?"15px":"0px",paddingBottom:u?"15px":"0px"}},u?r.a.createElement(Re.a,{variant:"buffer",value:100-E,valueBuffer:0,color:"secondary"}):r.a.createElement(K,{onChange:function(e,t){Q.current=Number(t),c(Q.current)},valueLabelDisplay:"auto","aria-label":"pretto slider",min:1,step:1,max:90,defaultValue:Q.current})))}),[u,D,E]),ue=function(){U?(J.current=new Date,Y.current=setInterval((function(){W(function(){var e=ce();return"Time Elapsed - ".concat(e.minutes>0?e.minutes+" minutes and ":"").concat(e.seconds%60," seconds")}())}),1e3)):re(),m(!0)},me=u?r.a.createElement(ct.a,{onClick:function(){w(!0)},variant:"contained",color:"primary"},U?"Stop":"Quit"):r.a.createElement(ct.a,{onClick:function(){ue()},variant:"contained",color:"primary"},"Start"),fe=r.a.createElement(r.a.Fragment,null,u?r.a.createElement(v.a,{className:"revision-mode-header",variant:"h5",component:"h6",gutterBottom:!0},H):null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{hideNavDrawer:!0,routeInfo:T.getRouteInfo("timer")},r.a.createElement(ut,{open:j,onClose:function(){$.current=!1,w(!1)},onQuit:function(){$.current||U?function(){if(U){clearInterval(Y.current);var e=ce(),t=1e3*(60*e.minutes+e.seconds),n=ne(t,t);n.repetition=!0,ee.updateOneNoteDB(n).then((function(){N((function(e){return[].concat(Object(Ge.a)(e),[Object($e.a)({},n,{repetition:"Yes"})])}))}))}else $.current=!1,F(!0),u&&ae()}():ae(),w(!1),m(!1)},isRevision:U}),ie,U?null:le,U?null:se,me,U?fe:null,r.a.createElement("div",{className:"table-cntr"},r.a.createElement(v.a,{variant:"h5",component:"h6",gutterBottom:!0},"Learning history",L?": ".concat(Math.ceil(L)," minutes spent learning"):null),R?r.a.createElement(Re.a,{color:"secondary"}):oe)))},RecentlyRevisedPages:vt,RecentlyEditedPages:xe((function(e){var t=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),c=Object(s.a)(o,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){ee.getAllPages().then((function(e){r(e)})).finally((function(){l(!1)}))}),[]),[n,i]}(),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)([]),l=Object(s.a)(i,2),u=l[0],m=l[1],f=Fe(),h=Object(s.a)(f,2),d=h[0],g=h[1],p=T.getRouteUrl("timer");Object(a.useEffect)((function(){if(d&&o){var e=We.getSessionsFromDB(d),t=o.map((function(t){return t.sessions=e[t.title]||[],t.sessions=t.sessions.filter((function(e){return"Yes"===e.repetition})),We.addSessionDiffFromToday(t.sessions),t}));We.sortPages(t),m(t)}}),[o,d]);var v=r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,{fullWidth:!0,autoComplete:"off",className:"searchBox",id:"outlined-secondary",label:"Search Pages",variant:"outlined",onChange:function(e){var t=e.target.value.toLowerCase(),n=o.filter((function(e){var n=e.title.toLowerCase(),a=e.sectionName.toLowerCase(),r=e.sessions;return j.containsWord(n,t)||j.containsWord(a,t)||r.find((function(e){return e.daysDiffFromToday===Number(t)}))}));m(n)}}),r.a.createElement(Ye,{keyProp:"id",viewPageInfo:function(e){T.gotoUrl("".concat(p,"?pageUrl=").concat(encodeURIComponent(e.self)))},filteredPages:u}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{hideNavDrawer:!0,routeInfo:T.getRouteInfo("recentlyCreatedPages")},g||c?r.a.createElement(Re.a,{color:"secondary"}):v))}))}),Et=(n(141),function(){return document.title="Spaced repetition for one note",r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:A.notebooks.path,exact:!0,component:bt.Notebooks}),r.a.createElement(l.b,{path:A.login.path,exact:!0,component:bt.Login}),r.a.createElement(l.b,{path:A.sections.path,exact:!0,component:bt.Sections}),r.a.createElement(l.b,{path:A.pages.path,exact:!0,component:bt.Pages}),r.a.createElement(l.b,{path:A.timer.path,exact:!0,component:bt.Timer}),r.a.createElement(l.b,{path:A.recentlyRevisedPages.path,exact:!0,component:bt.RecentlyRevisedPages}),r.a.createElement(l.b,{path:A.recentlyCreatedPages.path,exact:!0,component:bt.RecentlyEditedPages}),r.a.createElement(l.b,{path:"/auth",exact:!0,component:bt.Timer}),r.a.createElement(l.a,{to:A.notebooks.path})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,n){e.exports=n.p+"static/media/logo.7d5e5832.svg"}},[[106,1,2]]]);
//# sourceMappingURL=main.38ca4a5d.chunk.js.map