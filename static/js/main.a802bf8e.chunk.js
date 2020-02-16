(this["webpackJsonpone-note-spaced-learning"]=this["webpackJsonpone-note-spaced-learning"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=(a(77),a(78),a(41)),l=a(27),u=a(8),s=a(137),m=a(60),h=a(154),g=a(11),f=(a(79),a(133)),p=a(134),d=a(104),v=a(135),b=a(132),E=a(136),y=a(16),k=a(10),O=function(){function e(){Object(y.a)(this,e)}return Object(k.a)(e,[{key:"replaceParamsInUrl",value:function(e,t){return Object.entries(t).forEach((function(t){var a=Object(u.a)(t,2),n=a[0],r=a[1];e=e.replace(":".concat(n),r)})),e}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();O._instance=void 0;var j,S=O.getInstance(),w=a(126),I=a(129),N=a(130),M=a(131),V="https://ajayullal.github.io/one-note-spaced-repetition",x={notebooks:{name:"Notebooks",path:"/notebooks",isHomePage:!0,icon:w.a},sections:{name:"Sections",path:"/notebooks/:id",icon:I.a},login:{name:"Login",path:"/login"},pages:{name:"Pages",path:"/sections/:id/pages",icon:N.a},timer:{name:"Timer",path:"/timer",icon:M.a}},A=(j={},Object(g.a)(j,x.sections.name,[x.notebooks]),Object(g.a)(j,x.pages.name,[x.notebooks,x.sections]),j),D=function(){function e(){Object(y.a)(this,e)}return Object(k.a)(e,[{key:"getBreadCrumbs",value:function(e){return A[e]}},{key:"getHomeRoute",value:function(){var e=Object.entries(x).find((function(e){return e[1].isHomePage}));return e?e[1]:null}},{key:"getRouteInfo",value:function(e){return x[e]}},{key:"getRouteUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.getRouteInfo(e);return"".concat(V,"/#").concat(S.replaceParamsInUrl(a.path,t))}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();D._instance=void 0;var B=D.getInstance(),L={auth:{clientId:"7909dc21-ee19-4123-8ff2-9f21085c8447",authority:"https://login.microsoftonline.com/common",redirectUri:"https://ajayullal.github.io/one-note-spaced-repetition/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}},R={drawerWidth:240},T={serverBase:"https://www.onenote.com/api/v1.0/me/notes"},C=x,P=a(58),_=a.n(P),Z=function(){function e(){Object(y.a)(this,e),this.storage=_.a.createInstance({name:"nameHere"})}return Object(k.a)(e,[{key:"setItemSync",value:function(e,t){localStorage.setItem(e,t)}},{key:"getItemSync",value:function(e){return localStorage.getItem(e)}},{key:"removeItemSync",value:function(e){return localStorage.removeItem(e)}},{key:"setItem",value:function(e,t){this.storage.setItem(e,t)}},{key:"getItem",value:function(e){return this.storage.getItem(e)}},{key:"removeItem",value:function(e){return this.storage.removeItem(e)}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();Z._instance=void 0;var q=Z.getInstance(),U=a(59),H=a.n(U),F=a(62),W=function(){function e(){Object(y.a)(this,e),this._userDetails=void 0;var t=q.getItemSync("userDetails");t&&(this._userDetails=JSON.parse(t))}return Object(k.a)(e,[{key:"isLoggedIn",value:function(){return Boolean(q.getItemSync("token"))}},{key:"logout",value:function(){return Boolean(q.removeItemSync("token"))}},{key:"userDetails",set:function(e){this._userDetails=e},get:function(){return this._userDetails}}],[{key:"getInstance",value:function(){return e._userService||(e._userService=new e),e._userService}}]),e}();W._userService=void 0;var J=W.getInstance(),Q="Request failed with status code 401",z=function(){function e(){var t=this;Object(y.a)(this,e),this.handleError=function(e){switch(e.message){case Q:t.logout()}return Promise.reject(e.message||e.response.data.message)}}return Object(k.a)(e,[{key:"logout",value:function(){re.logout(),window.location.replace(ne.getRouteUrl("login"))}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();z._instance=void 0;var $=z.getInstance(),G=H.a.create({baseURL:"https://graph.microsoft.com/v1.0/me/onenote",headers:{}});G.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var Y="/notebooks",K="/notebooks/:id/sections",X="/sections/:id/pages?top=100",ee="/pages/0-f2f6afa638c1864cb26399b2a7cef5f7!1-E6AC34B29128DCBF!2176/content",te=function(){function e(){Object(y.a)(this,e),this._redirectUrl=null,this.myMSALObj=void 0,this.requestObj={scopes:["Notes.Read.All"]},this.myMSALObj=new F.a(L),this.checkAndSetPersistedBearerToken()}return Object(k.a)(e,[{key:"redirectUrl",get:function(){return this._redirectUrl},set:function(e){this._redirectUrl=e}}]),Object(k.a)(e,[{key:"authRedirectCallBack",value:function(e,t){e?console.log(e):"access_token"===t.tokenType?console.log(t.accessToken):console.log("token type is:"+t.tokenType)}},{key:"acquireTokenPopup",value:function(){var e=this;this.myMSALObj.acquireTokenSilent(this.requestObj).then((function(t){J.userDetails=t,e.setBearerToken(t.accessToken),e.setUserDetails(J.userDetails),window.location.href=""})).catch((function(t){console.error(t),e.myMSALObj.acquireTokenPopup(e.requestObj).then((function(t){e.setBearerToken(t.accessToken)})).catch((function(e){console.log(e)}))}))}},{key:"setUserDetails",value:function(e){q.setItemSync("userDetails",JSON.stringify(e))}},{key:"onSignIn",value:function(){var e=this;return this.myMSALObj.loginPopup(this.requestObj).then((function(t){e.acquireTokenPopup()})).catch((function(e){console.log(e)}))}},{key:"checkAndSetPersistedBearerToken",value:function(){var e=q.getItemSync("token");e&&(G.defaults.headers.common.Authorization="Bearer ".concat(e))}},{key:"setBearerToken",value:function(e){G.defaults.headers.common.Authorization="Bearer ".concat(e),q.setItemSync("token",e)}},{key:"returnValue",value:function(e){return e.value}},{key:"getAllNoteBooks",value:function(){return G.get(Y).then(this.returnValue).catch($.handleError)}},{key:"getAllSection",value:function(e){return G.get(S.replaceParamsInUrl(K,{id:e})).then(this.returnValue).catch($.handleError)}},{key:"getAllPages",value:function(e){return G.get(S.replaceParamsInUrl(X,{id:e})).then(this.returnValue).catch($.handleError)}},{key:"getPage",value:function(e){return G.get(e).catch($.handleError)}},{key:"updateOneNotePage",value:function(e){return G.patch(ee,[{target:"body",action:"append",content:"<p>".concat(e.startDate,", ").concat(e.startTime,", ").concat(e.title,", ").concat(e.minutesSpentLearning,", ").concat(e.totalSessionMinutes,"</p>")}]).catch($.handleError)}},{key:"getDb",value:function(){return G.get(ee)}},{key:"getPageContent",value:function(e){return G.get(e).catch($.handleError)}}],[{key:"getInstance",value:function(){return e.microsoftOneNoteApi||(e.microsoftOneNoteApi=new e),e.microsoftOneNoteApi}}]),e}();te.microsoftOneNoteApi=void 0;var ae=te.getInstance(),ne=B,re=J,oe=function(e){var t,a=e.pageName,n=e.hideNavDrawer,o=void 0!==n&&n,c=e.history,i=function(e){return Object(m.a)((function(t){return Object(h.a)({appBar:Object(g.a)({},t.breakpoints.up("sm"),{width:e?"100%":"calc(100% - ".concat(R.drawerWidth,"px)"),marginLeft:R.drawerWidth}),menuButton:Object(g.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),homeButton:{marginLeft:"10px",marginRight:"5px"},toolbar:{display:"flex",justifyContent:"space-between",padding:"0px",paddingRight:"15px"}})}))}(o)(),l=r.a.useState(!1),s=Object(u.a)(l,2),y=(s[0],s[1],r.a.createElement("div",{className:"account-details"},r.a.createElement("span",{className:"user-name"},null===(t=re.userDetails)||void 0===t?void 0:t.account.name),r.a.createElement(b.a,null),r.a.createElement("span",{onClick:function(){re.logout(),c.push(ne.getRouteUrl("login"))},className:"logout"},"Logout")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{position:"fixed",className:i.appBar},r.a.createElement(p.a,{className:i.toolbar},r.a.createElement(d.a,{variant:"h6",noWrap:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{color:"inherit","aria-label":"open drawer",edge:"start",className:i.homeButton,onClick:function(){var e=ne.getHomeRoute();c.push(e.path)}},r.a.createElement(E.a,null)),r.a.createElement("span",{style:{position:"relative",top:"2px"}},a))),re.isLoggedIn()?y:null)))},ce=a(152),ie=function(e){var t=e.errorMessage;Object(n.useEffect)((function(){}),[t]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{style:{marginTop:"70px",width:"110%",marginLeft:"50px"}},r.a.createElement((function(e){return r.a.createElement(ce.a,Object.assign({elevation:6,variant:"filled"},e))}),{severity:"error"},t)):null)},le=Object(m.a)((function(e){return Object(h.a)({root:{display:"flex"},toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)},link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20},breadcrumb:{marginBottom:20}})})),ue=Object(l.g)((function(e){var t=e.errorMessage,a=e.routeInfo,n=e.children,o=e.hideNavDrawer,c=void 0!==o&&o,i=e.history,l=le();return r.a.createElement("div",{className:l.root},r.a.createElement(s.a,null),r.a.createElement(ie,{errorMessage:t}),r.a.createElement(oe,{history:i,hideNavDrawer:c,pageName:a.name}),r.a.createElement("main",{className:l.content},r.a.createElement("div",{className:l.toolbar}),n))})),se=a(141),me=function(e){return function(t){var a,n=(a=t.history,J.isLoggedIn()?[!0]:(a.push(x.login.path),[!1]));return Object(u.a)(n,1)[0]?(ae.redirectUrl=null,r.a.createElement(e,t)):(ae.redirectUrl=t.match.url,null)}},he=a(138),ge=a(139),fe=a(140),pe=Object(m.a)({card:{cursor:"pointer"}}),de=function(e){var t=e.items,a=e.onClick,n=e.displayPropName,o=(e.id,pe());return t.length>0?r.a.createElement(he.a,{spacing:5,container:!0},t.map((function(e){return r.a.createElement(he.a,{onClick:function(){return a(e)},xs:12,item:!0,md:6,key:e.id},r.a.createElement(ge.a,{className:o.card,variant:"outlined"},r.a.createElement(fe.a,null,r.a.createElement(d.a,{color:"textSecondary",gutterBottom:!0},e[n]))))}))):r.a.createElement(d.a,{variant:"h6",component:"h6",color:"textSecondary",gutterBottom:!0},"Nothing to display")},ve=me((function(e){var t=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(u.a)(o,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){ae.getAllNoteBooks().then((function(e){r(e)})).catch((function(e){l(e)}))}),[]),[a,i]}(),a=Object(u.a)(t,2),o=a[0],c=a[1],i=r.a.createElement(de,{displayPropName:"displayName",onClick:function(t){e.history.push(B.getRouteUrl("sections",{id:t.id}))},items:o||[]});return r.a.createElement(ue,{errorMessage:c,hideNavDrawer:!0,routeInfo:B.getRouteInfo("notebooks")},o?i:r.a.createElement(se.a,{color:"secondary"}))})),be=(a(101),T.serverBase),Ee=me((function(e){var t=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){ae.getAllSection(e).then((function(e){o(e)}))}),[e]),[r]}(e.match.params.id),a=Object(u.a)(t,1)[0];var o=r.a.createElement(de,{displayPropName:"displayName",onClick:function(t){e.history.push(B.getRouteUrl("pages",{id:t.id}))},items:a||[]});return r.a.createElement(ue,{hideNavDrawer:!0,routeInfo:B.getRouteInfo("sections")},r.a.createElement(r.a.Fragment,null,(null===a||void 0===a?void 0:a.length)>0?o:r.a.createElement(se.a,{color:"secondary"})))})),ye=me((function(e){var t=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!0),i=Object(u.a)(c,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){ae.getAllPages(e).then((function(e){o(e)})).finally((function(){s(!1)}))}),[e]),[r,l]}(e.match.params.id),a=Object(u.a)(t,2),o=a[0],c=a[1],i=B.getRouteUrl("timer");var l=r.a.createElement(de,{displayPropName:"title",onClick:function(t){e.history.push("".concat(i,"?pageUrl=").concat(encodeURIComponent(t.self)))},items:o});return r.a.createElement(ue,{hideNavDrawer:!0,routeInfo:B.getRouteInfo("pages")},r.a.createElement(r.a.Fragment,null,c?r.a.createElement(se.a,{color:"secondary"}):l))})),ke=a(22),Oe=a(4),je=a(153),Se=a(145),we=a(146),Ie=a(147),Ne=a(148),Me=a(149),Ve=a(150),xe=a(144),Ae=a(151),De=a(142),Be=a(143),Le=function(e){var t=e.open,a=e.onClose,n=e.onQuit;return r.a.createElement("div",null,r.a.createElement(Ae.a,{open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(De.a,{id:"alert-dialog-title"},"Are you sure you want to quit?"),r.a.createElement(Be.a,null,r.a.createElement(xe.a,{onClick:a,color:"primary"},"Close"),r.a.createElement(xe.a,{onClick:n,color:"primary",autoFocus:!0},"Quit"))))},Re=a(64),Te=(a(102),Object(m.a)({table:{minWidth:650}})),Ce={Login:function(e){"".concat(be,"/images/microsoft_signin_button.svg");function t(){window.location.href=C.notebooks.path}return Object(n.useLayoutEffect)((function(){re.isLoggedIn()&&(window.location.href=C.notebooks.path)}),[e.history]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{hideNavDrawer:!0,routeInfo:ne.getRouteInfo("login")},r.a.createElement("div",{className:"msal-login-btn",onClick:function(){return ae.onSignIn().then(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"215",height:"41",viewBox:"0 0 215 41"},r.a.createElement("title",null,"MS-SymbolLockup"),r.a.createElement("rect",{width:"215",height:"41",fill:"#fff"}),r.a.createElement("path",{d:"M214,1V40H1V1H214m1-1H0V41H215V0Z",fill:"#8c8c8c"}),r.a.createElement("path",{d:"M45.812,25.082V23.288a2.849,2.849,0,0,0,.576.4,4.5,4.5,0,0,0,.707.3,5.513,5.513,0,0,0,.747.187,3.965,3.965,0,0,0,.688.065,2.937,2.937,0,0,0,1.637-.365,1.2,1.2,0,0,0,.538-1.062,1.16,1.16,0,0,0-.179-.649,1.928,1.928,0,0,0-.5-.5,5.355,5.355,0,0,0-.757-.435q-.437-.209-.935-.436c-.356-.19-.687-.383-1-.578a4.358,4.358,0,0,1-.8-.648,2.728,2.728,0,0,1-.534-.8,2.6,2.6,0,0,1-.194-1.047,2.416,2.416,0,0,1,.333-1.285,2.811,2.811,0,0,1,.879-.9,4.026,4.026,0,0,1,1.242-.528,5.922,5.922,0,0,1,1.42-.172,5.715,5.715,0,0,1,2.4.374v1.721a3.832,3.832,0,0,0-2.3-.645,4.106,4.106,0,0,0-.773.074,2.348,2.348,0,0,0-.689.241,1.5,1.5,0,0,0-.494.433,1.054,1.054,0,0,0-.19.637,1.211,1.211,0,0,0,.146.608,1.551,1.551,0,0,0,.429.468,4.276,4.276,0,0,0,.688.414c.271.134.584.28.942.436q.547.285,1.036.6a4.881,4.881,0,0,1,.856.7,3.015,3.015,0,0,1,.586.846,2.464,2.464,0,0,1,.217,1.058,2.635,2.635,0,0,1-.322,1.348,2.608,2.608,0,0,1-.868.892,3.82,3.82,0,0,1-1.257.5,6.988,6.988,0,0,1-1.5.155c-.176,0-.392-.014-.649-.04s-.518-.067-.787-.117a7.772,7.772,0,0,1-.761-.187A2.4,2.4,0,0,1,45.812,25.082Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M55.129,16.426a1.02,1.02,0,0,1-.714-.272.89.89,0,0,1-.3-.688.916.916,0,0,1,.3-.7,1.008,1.008,0,0,1,.714-.278,1.039,1.039,0,0,1,.732.278.909.909,0,0,1,.3.7.9.9,0,0,1-.3.678A1.034,1.034,0,0,1,55.129,16.426Zm.842,9.074h-1.7V18h1.7Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M65.017,24.9q0,4.131-4.153,4.131a6.187,6.187,0,0,1-2.556-.491V26.986a4.726,4.726,0,0,0,2.337.7,2.342,2.342,0,0,0,2.672-2.628V24.24h-.029a2.947,2.947,0,0,1-4.742.436,4.041,4.041,0,0,1-.838-2.684,4.738,4.738,0,0,1,.9-3.04,3,3,0,0,1,2.476-1.128,2.384,2.384,0,0,1,2.2,1.216h.029V18h1.7Zm-1.684-2.835v-.973a1.91,1.91,0,0,0-.524-1.352A1.718,1.718,0,0,0,61.5,19.18a1.793,1.793,0,0,0-1.512.714,3.217,3.217,0,0,0-.546,2,2.774,2.774,0,0,0,.524,1.769,1.678,1.678,0,0,0,1.387.662,1.805,1.805,0,0,0,1.429-.632A2.391,2.391,0,0,0,63.333,22.064Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M73.908,25.5h-1.7V21.273q0-2.1-1.486-2.1a1.622,1.622,0,0,0-1.282.582,2.162,2.162,0,0,0-.5,1.469V25.5H67.229V18h1.707v1.245h.029A2.673,2.673,0,0,1,71.4,17.824a2.265,2.265,0,0,1,1.868.795,3.57,3.57,0,0,1,.644,2.3Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M80.962,16.426a1.02,1.02,0,0,1-.714-.272.89.89,0,0,1-.3-.688.916.916,0,0,1,.3-.7,1.008,1.008,0,0,1,.714-.278,1.039,1.039,0,0,1,.732.278.909.909,0,0,1,.3.7.9.9,0,0,1-.3.678A1.034,1.034,0,0,1,80.962,16.426ZM81.8,25.5H80.1V18h1.7Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M90.7,25.5H89V21.273q0-2.1-1.486-2.1a1.622,1.622,0,0,0-1.282.582,2.157,2.157,0,0,0-.506,1.469V25.5H84.023V18H85.73v1.245h.03a2.673,2.673,0,0,1,2.431-1.421,2.265,2.265,0,0,1,1.868.795,3.57,3.57,0,0,1,.644,2.3Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M106.984,18l-2.212,7.5h-1.78l-1.361-5.083a3.215,3.215,0,0,1-.1-.659H101.5a3.069,3.069,0,0,1-.131.644l-1.48,5.1H98.145L95.939,18H97.7l1.363,5.405a3.16,3.16,0,0,1,.087.645H99.2a3.384,3.384,0,0,1,.117-.659L100.832,18h1.6l1.347,5.428a3.732,3.732,0,0,1,.095.644h.052a3.387,3.387,0,0,1,.11-.644L105.365,18Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M109.1,16.426a1.018,1.018,0,0,1-.714-.272.886.886,0,0,1-.3-.688.912.912,0,0,1,.3-.7,1.006,1.006,0,0,1,.714-.278,1.039,1.039,0,0,1,.732.278.912.912,0,0,1,.3.7.9.9,0,0,1-.3.678A1.034,1.034,0,0,1,109.1,16.426Zm.841,9.074h-1.7V18h1.7Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M116.117,25.42a2.955,2.955,0,0,1-1.31.248q-2.182,0-2.183-2.094V19.333h-1.253V18h1.253V16.264l1.7-.483V18h1.794v1.333h-1.794v3.75a1.484,1.484,0,0,0,.241.952,1.006,1.006,0,0,0,.807.285,1.167,1.167,0,0,0,.746-.248Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M124.248,25.5h-1.7V21.4q0-2.226-1.487-2.226a1.556,1.556,0,0,0-1.26.644,2.568,2.568,0,0,0-.513,1.649V25.5h-1.707V14.4h1.707v4.849h.029a2.685,2.685,0,0,1,2.432-1.421q2.5,0,2.5,3.055Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M141.907,25.5h-1.728V18.7q0-.835.1-2.043h-.029a6.992,6.992,0,0,1-.285.988L136.831,25.5h-1.2l-3.143-7.793a7.236,7.236,0,0,1-.277-1.047h-.029q.057.63.058,2.058V25.5h-1.611V15h2.453l2.762,7a10.884,10.884,0,0,1,.41,1.2h.036c.181-.551.327-.962.44-1.23L139.541,15h2.366Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M145.158,16.426a1.022,1.022,0,0,1-.714-.272.89.89,0,0,1-.3-.688.916.916,0,0,1,.3-.7,1.009,1.009,0,0,1,.714-.278,1.043,1.043,0,0,1,.733.278.911.911,0,0,1,.3.7.9.9,0,0,1-.3.678A1.038,1.038,0,0,1,145.158,16.426ZM146,25.5h-1.7V18H146Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M153.589,25.156a4.2,4.2,0,0,1-2.131.52,3.606,3.606,0,0,1-2.695-1.044,3.691,3.691,0,0,1-1.026-2.706,4.07,4.07,0,0,1,1.1-2.978,3.944,3.944,0,0,1,2.948-1.124,4.3,4.3,0,0,1,1.81.36v1.582a2.743,2.743,0,0,0-1.67-.586,2.32,2.32,0,0,0-1.766.728,2.665,2.665,0,0,0-.688,1.908,2.536,2.536,0,0,0,.648,1.838,2.3,2.3,0,0,0,1.739.674,2.716,2.716,0,0,0,1.729-.652Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M159.625,19.619a1.4,1.4,0,0,0-.887-.242,1.513,1.513,0,0,0-1.259.682,3.04,3.04,0,0,0-.506,1.852V25.5h-1.7V18h1.7v1.545H157a2.606,2.606,0,0,1,.766-1.233,1.724,1.724,0,0,1,1.154-.444,1.432,1.432,0,0,1,.7.14Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M164.02,25.676a3.719,3.719,0,0,1-2.773-1.051,3.8,3.8,0,0,1-1.036-2.787,3.7,3.7,0,0,1,3.991-4.014,3.6,3.6,0,0,1,2.739,1.033,3.986,3.986,0,0,1,.982,2.864,3.932,3.932,0,0,1-1.059,2.875A3.8,3.8,0,0,1,164.02,25.676Zm.08-6.5a1.938,1.938,0,0,0-1.575.7,2.913,2.913,0,0,0-.579,1.919,2.744,2.744,0,0,0,.586,1.856,1.965,1.965,0,0,0,1.568.678,1.87,1.87,0,0,0,1.542-.666,2.956,2.956,0,0,0,.538-1.9,3,3,0,0,0-.538-1.911A1.858,1.858,0,0,0,164.1,19.18Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M169.182,25.266V23.691a3.392,3.392,0,0,0,2.1.725q1.539,0,1.538-.908a.714.714,0,0,0-.132-.436,1.241,1.241,0,0,0-.355-.318,2.784,2.784,0,0,0-.527-.25q-.3-.108-.677-.248a7.052,7.052,0,0,1-.832-.389,2.545,2.545,0,0,1-.615-.465,1.745,1.745,0,0,1-.37-.59,2.145,2.145,0,0,1-.125-.769,1.775,1.775,0,0,1,.256-.955,2.223,2.223,0,0,1,.69-.7,3.289,3.289,0,0,1,.98-.425,4.511,4.511,0,0,1,1.136-.143,5.181,5.181,0,0,1,1.86.315v1.487a3.136,3.136,0,0,0-1.816-.542,2.317,2.317,0,0,0-.582.066,1.472,1.472,0,0,0-.443.183.886.886,0,0,0-.286.282.669.669,0,0,0-.1.363.77.77,0,0,0,.1.41.93.93,0,0,0,.3.3,2.654,2.654,0,0,0,.483.234q.282.105.649.23a9.4,9.4,0,0,1,.867.4,2.886,2.886,0,0,1,.656.465,1.806,1.806,0,0,1,.417.6,2.034,2.034,0,0,1,.147.81,1.847,1.847,0,0,1-.264,1,2.205,2.205,0,0,1-.7.7,3.292,3.292,0,0,1-1.015.413,5.222,5.222,0,0,1-1.212.136A5.115,5.115,0,0,1,169.182,25.266Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M179.443,25.676a3.717,3.717,0,0,1-2.772-1.051,3.793,3.793,0,0,1-1.036-2.787,3.7,3.7,0,0,1,3.991-4.014,3.6,3.6,0,0,1,2.739,1.033,3.986,3.986,0,0,1,.982,2.864,3.932,3.932,0,0,1-1.059,2.875A3.8,3.8,0,0,1,179.443,25.676Zm.08-6.5a1.936,1.936,0,0,0-1.574.7,2.908,2.908,0,0,0-.579,1.919,2.739,2.739,0,0,0,.586,1.856,1.964,1.964,0,0,0,1.567.678,1.868,1.868,0,0,0,1.542-.666,2.95,2.95,0,0,0,.539-1.9,2.99,2.99,0,0,0-.539-1.911A1.857,1.857,0,0,0,179.523,19.18Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M189.067,15.781a1.533,1.533,0,0,0-.784-.2q-1.237,0-1.237,1.4V18h1.743v1.333h-1.736V25.5h-1.7V19.333h-1.282V18h1.282V16.784a2.362,2.362,0,0,1,.777-1.871,2.82,2.82,0,0,1,1.94-.684,2.879,2.879,0,0,1,1,.138Z",fill:"#5e5e5e"}),r.a.createElement("path",{d:"M194.23,25.42a2.955,2.955,0,0,1-1.31.248q-2.182,0-2.183-2.094V19.333h-1.253V18h1.253V16.264l1.7-.483V18h1.793v1.333h-1.793v3.75a1.484,1.484,0,0,0,.241.952,1,1,0,0,0,.806.285,1.165,1.165,0,0,0,.746-.248Z",fill:"#5e5e5e"}),r.a.createElement("rect",{x:"13",y:"11",width:"9",height:"9",fill:"#f25022"}),r.a.createElement("rect",{x:"13",y:"21",width:"9",height:"9",fill:"#00a4ef"}),r.a.createElement("rect",{x:"23",y:"11",width:"9",height:"9",fill:"#7fba00"}),r.a.createElement("rect",{x:"23",y:"21",width:"9",height:"9",fill:"#ffb900"})))))},Notebooks:ve,Sections:Ee,Pages:ye,Timer:function(e){var t=Object(n.useState)(30),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),s=l[0],m=l[1],h=Object(n.useState)(),g=Object(u.a)(h,2),f=g[0],p=g[1],v=Object(n.useState)(0),b=Object(u.a)(v,2),E=b[0],y=b[1],k=Object(n.useState)(!1),O=Object(u.a)(k,2),j=O[0],S=O[1],w=Object(n.useState)([]),I=Object(u.a)(w,2),N=I[0],M=I[1],V=Object(n.useState)(!0),x=Object(u.a)(V,2),A=x[0],D=x[1],L=Object(n.useState)(),R=Object(u.a)(L,2),T=R[0],C=R[1],P=Object(n.useRef)(new Date),_=Object(n.useRef)(30),Z=Object(n.useRef)(),q=Object(n.useRef)({title:""}),U=Te();Object(n.useEffect)((function(){var t=new URLSearchParams(e.location.search).get("pageUrl");t?ae.getPage(t).then((function(e){return q.current=e,ae.getDb().then((function(e){var t=(new DOMParser).parseFromString(e,"text/xml"),a=Array.from(t.getElementsByTagName("p")),n=[],r=0;a.forEach((function(e){var t,a=(null===e||void 0===e?void 0:null===(t=e.textContent)||void 0===t?void 0:t.split(","))||[];(null===q||void 0===q?void 0:q.current.title)===(a&&a[2].trim())&&(n.push({startDate:a?a[0]:"",startTime:a?a[1]:"",title:a?a[2].trim():"",minutesSpentLearning:a?a[3]:"",totalSessionMinutes:a?a[4]:""}),r+=Number(a[3]))})),C(r),M(n)}))})).finally((function(){D(!1)})):e.history.push(B.getHomeRoute())}),[]);var H=Object(Oe.a)({root:{color:"rgb(246, 1, 87)",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(je.a),F=function(e){var t=(e-(Date.now()-P.current.getTime()))/1e3,a=Math.trunc(t/60),n=Math.ceil(t-60*a);return"".concat(a," minutes and ").concat(n," seconds left")},W=function(e){return(e-(Date.now()-P.current.getTime()))/e*100},J=Object(n.useCallback)((function(){var e=60*_.current*1e3/6e4,t={minutesSpentLearning:(Date.now()-P.current.getTime())/6e4,startDate:"".concat(P.current.getDate(),"-").concat(P.current.getMonth()+1,"-").concat(P.current.getFullYear()),startTime:"".concat(P.current.getHours(),":").concat(P.current.getMinutes(),":").concat(P.current.getSeconds()),title:q.current.title,totalSessionMinutes:e};ae.updateOneNotePage(t).then((function(){M((function(e){return[].concat(Object(ke.a)(e),[t])}))})),clearInterval(Z.current),m(!1)}),[]),Q=Object(n.useCallback)((function(){var e=60*_.current*1e3;P.current=new Date,p(F(e)),y(W(e)),Z.current=setInterval((function(){p(F(e)),y(W(e)),Date.now()-P.current.getTime()>=e&&J()}),1e3),m(!0)}),[]),z=N.length>0?r.a.createElement(Se.a,{component:Re.a},r.a.createElement(we.a,{className:U.table,"aria-label":"simple table"},r.a.createElement(Ie.a,null,r.a.createElement(Ne.a,null,r.a.createElement(Me.a,{align:"center"}),r.a.createElement(Me.a,{align:"center"},"Date"),r.a.createElement(Me.a,{align:"center"},"Time"),r.a.createElement(Me.a,{align:"center"},"Minutes spent"),r.a.createElement(Me.a,{align:"center"},"Total session minutes"))),r.a.createElement(Ve.a,null,N.map((function(e,t){return r.a.createElement(Ne.a,{style:e.minutesSpentLearning<e.totalSessionMinutes?{backgroundColor:"#faa1be",opacity:.8}:{position:"static"},key:t},r.a.createElement(Me.a,{align:"center"},t+1),r.a.createElement(Me.a,{align:"center"},e.startDate),r.a.createElement(Me.a,{align:"center"},e.startTime),r.a.createElement(Me.a,{align:"center"},e.minutesSpentLearning),r.a.createElement(Me.a,{align:"center"},e.totalSessionMinutes))}))))):r.a.createElement(d.a,{variant:"h6",component:"h6",color:"textSecondary",gutterBottom:!0},"Nothing to display");return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{hideNavDrawer:!0,routeInfo:B.getRouteInfo("timer")},r.a.createElement(Le,{open:j,onClose:function(){S(!1)},onQuit:function(){S(!1),J()}}),s?r.a.createElement(d.a,{variant:"h5",component:"h6",gutterBottom:!0},q.current&&'"'.concat(q.current.title,'"'),": ",f):r.a.createElement(d.a,{variant:"h5",component:"h6",gutterBottom:!0},"Study ",q.current&&'"'.concat(q.current.title,'"')," for ",o," Minutes"),Object(n.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{minHeight:"45px",paddingTop:s?"15px":"0px",paddingBottom:s?"15px":"0px"}},s?r.a.createElement(se.a,{variant:"buffer",value:100-E,valueBuffer:0,color:"secondary"}):r.a.createElement(H,{onChange:function(e,t){_.current=Number(t),c(_.current)},valueLabelDisplay:"auto","aria-label":"pretto slider",min:1,step:5,max:120,defaultValue:_.current})),s?r.a.createElement(xe.a,{onClick:function(){S(!0)},variant:"contained",color:"primary"},"Quit"):r.a.createElement(xe.a,{onClick:Q,variant:"contained",color:"primary"},"Start"))}),[s,N,E]),r.a.createElement("div",{className:"table-cntr"},r.a.createElement(d.a,{variant:"h5",component:"h6",gutterBottom:!0},"Learning history",T?": ".concat(Math.ceil(T)," minutes spent learning"):null),A?r.a.createElement(se.a,{color:"secondary"}):z)))}},Pe=function(){return r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:C.notebooks.path,exact:!0,component:Ce.Notebooks}),r.a.createElement(l.b,{path:C.login.path,exact:!0,component:Ce.Login}),r.a.createElement(l.b,{path:C.sections.path,exact:!0,component:Ce.Sections}),r.a.createElement(l.b,{path:C.pages.path,exact:!0,component:Ce.Pages}),r.a.createElement(l.b,{path:C.timer.path,exact:!0,component:Ce.Timer}),r.a.createElement(l.b,{path:"/auth",exact:!0,component:Ce.Timer}),r.a.createElement(l.a,{to:C.notebooks.path})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){e.exports=a(103)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.a802bf8e.chunk.js.map