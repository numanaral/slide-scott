(this["webpackJsonpslide-scott"]=this["webpackJsonpslide-scott"]||[]).push([[2],{19:function(t,e,n){"use strict";var r=n(6),c=n(2),a=(n(0),n(70)),o=n(60);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fallback,i=e.cacheKey,A=e.size,u=e.noFallback,s=Object(r.a)({},u&&{}||{fallback:n||Object(c.jsx)(o.a,{size:A||"medium"})}),l=Object(r.a)(Object(r.a)({},i&&{cacheKey:i}),s);return Object(a.a)(t,l)}},39:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var r=function(t){return JSON.parse(window.localStorage.getItem(t))},c=function(t,e){try{return window.localStorage.setItem(t,JSON.stringify(e)),e}catch(n){return console.warn('Error setting the local storage value for key "'.concat(t,'".'),e,n),e}},a=function(t,e){var n=r(t);n?n&&c(t,e):console.warn('Error setting the local storage value for key "'.concat(t,"\". The key doesn't exist in the local storage.."))},o=function(t,e){try{var n=r(t);return n||c(t,e)}catch(a){return console.warn('Error getting the local storage value for key "'.concat(t,'". Will try re-setting it.'),a),c(t,e)}}},48:function(t,e,n){"use strict";var r=n(91);n.d(e,"b",(function(){return r.a}));var c=n(92);n.d(e,"a",(function(){return c.a}));var a=n(93);n.d(e,"c",(function(){return a.a}))},60:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(6),c=n(23),a=n(18),o=n(2),i=(n(0),n(130)),A=n(122),u=n(14),s=n(3);Object(s.oneOf)(["small","medium","large"]),Object(s.oneOf)(["linear","circular"]);function l(){var t=Object(a.a)(["\n\tjustify-content: center;\n\talign-items: center;\n\tdisplay: flex;\n\tvertical-align: middle;\n"]);return l=function(){return t},t}var b=u.d.div(l()),d=function(t){var e=t.type,n=t.size,a=Object(c.a)(t,["type","size"]),u=40;return"small"===n?u=20:"large"===n&&(u=80),Object(o.jsx)(b,{children:"linear"===e?Object(o.jsx)(i.a,Object(r.a)({size:u},a)):Object(o.jsx)(A.a,Object(r.a)({size:u},a))})};d.defaultProps={size:"medium",type:"circular"};var f=d},68:function(t,e){},95:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(0),a=n.n(c),o=n(24),i=n.n(o),A=n(6),u=n(25),s=n(37),l=n(119),b=n(127),d=n(118),f=n(14),j=n(27),v=n(18),O=n(117),p=n(129),g=n(47),h=n(46);function x(){var t=Object(v.a)(["\n\t","\n"]);return x=function(){return t},t}function m(){var t=Object(v.a)(["\n\t\thtml,\n\t\tbody,\n\t\t#root {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmin-height:100%;\n\t\t\tmin-width:100%;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t\n\t\t/* body {\n\t\t\toverflow: auto;\n\t\t} */\n\t\t#root {\n\t\t\toverflow: auto;\n\t\t\tposition: relative;\n\t\t}\n\n\t\tpre {\n\t\t\twhite-space: pre-wrap;\n\t\t\tword-wrap: break-word;\n\t\t}\n\n\t\t.theme-duration-wrapper {\n\t\t\ttransition: ",";\n\t\t}\n\n\t\t/* #region SCROLLBARS */\n\n\t\t* {\n\t\t\tscrollbar-color: black transparent;\n\t\t\tscrollbar-width: thin;\n\t\t}\n\n\t\t/* width */\n\t\t::-webkit-scrollbar {\n\t\t\twidth: 5px;\n\t\t\theight: 6px;\n\t\t}\n\n\t\t/* Track */\n\t\t::-webkit-scrollbar-track {\n\t\t\t/* background: transparent; */\n\t\t\tbackground: #bfbfbf;\n\t\t}\n\n\t\t/* Handle */\n\t\t::-webkit-scrollbar-thumb {\n\t\t\t/* background: rgb(44, 44, 44); */\n\t\t\tbackground: black;\n\t\t\tborder-radius: 10px;\n\t\t}\n\n\t\t/* Handle on hover */\n\t\t::-webkit-scrollbar-thumb:hover {\n\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t}\n\n\t\t/* #endregion */\n\n"]);return m=function(){return t},t}var y=["background","background-color","border-color","fill","stroke","box-shadow"],H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;return t.map((function(t){return"".concat(t," ").concat(e,"s ease-out")})).join(", ")},X=H(),P=Object(f.b)(m(),X),z=Object(f.b)(x(),(function(t){var e=t.$theme;return"\n\t\t#root {\n\t\t\tbackground-color: ".concat(e.palette.background.level1,";\n\t\t}\n\t\t/* #region CHROME AUTOCOMPLETE DEFAULT */\n\t\t\n\t\t/* https://stackoverflow.com/a/14205976/13161405 */\n\t\t/* Change the white to any color */\n\t\tinput:-webkit-autofill,\n\t\tinput:-webkit-autofill:hover, \n\t\tinput:-webkit-autofill:focus, \n\t\tinput:-webkit-autofill:active  {\n\t\t\t-webkit-box-shadow: 0 0 0 30px ").concat(e.palette.background.default," inset !important;\n\t\t}\n\n\t\t/* Change text in autofill textbox */\n\t\tinput:-webkit-autofill {\n\t\t\t-webkit-text-fill-color: ").concat(e.palette.getContrastText(e.palette.background.default)," !important;\n\t\t}\n\n\t\t/* #endregion */\n\t")})),D=Object(O.a)(),w=function(t){return Object(p.a)(Object(O.a)(function(t){var e="dark"===t;return{palette:{type:t,primary:g.a,secondary:h.a,error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff",alertBackground:e?"#180605":"#fdecea",alertText:e?"#fab3ae":"#611a15"},warning:{light:"#ffb74d",main:"#ff9800",dark:"#f57c00",contrastText:"rgba(0, 0, 0, 0.87)",alertBackground:e?"#190f00":"#fff4e5",alertText:e?"#ffd599":"#663c00"},info:{light:"#64b5f6",main:"#2196f3",dark:"#1976d2",contrastText:"#fff",alertBackground:e?"#030e18":"#e8f4fd",alertText:e?"#a6d5fa":"#0d3c61"},success:{light:"#81c784",main:"#4caf50",dark:"#388e3c",contrastText:"rgba(0, 0, 0, 0.87)",alertBackground:e?"#071107":"#edf7ed",alertText:e?"#b7dfb9":"#1e4620"},black:"#121212",background:e&&{default:"#121212",level1:"#212121",level2:"#333",paper:"#424242"}||{default:"#fff",level1:"#eeeeee",level2:"#cccccc",paper:"#f5f5f5"}},overrides:{MuiPaper:{root:{transition:X}},MuiGrid:{root:{transition:X}},MuiTypography:{root:{transition:H(["color"])}},MuiIcon:{root:{transition:X}},MuiSvgIcon:{root:{transition:X}},MuiListItem:{secondaryAction:Object(j.a)({},D.breakpoints.down("xs"),{paddingRight:16})},MuiListItemSecondaryAction:{root:Object(j.a)({},D.breakpoints.down("xs"),{top:40,left:0,right:0,position:"relative",transform:"translateY(-50%)",textAlign:"center",marginBottom:20,paddingBottom:30,borderBottom:"1px solid","& > *":{width:"calc(100% - ".concat(D.spacing(4),"px)"),"&.tooltip-wrapper > button":{width:"calc(100% - ".concat(D.spacing(4),"px)")}}})},MuiToggleButtonGroup:{root:Object(j.a)({},D.breakpoints.down("xs"),{justifyContent:"center"})}}}}(t)))},k=n(52),W=n(69),L=n(68),M=n(39),I="UserPreference",q="dark",Z="light",B="theme",C={theme:Object(M.a)(B,q)},G="".concat(I,"/SET_USER_PREFERENCES"),F="".concat(I,"/TOGGLE_THEME"),R=C,T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;return Object(W.a)(t,(function(t){switch(e.type){case G:Object(L.updateImmerDraft)(t,e.payload);break;case F:t.theme=t.theme===q?Z:q,Object(M.c)(B,t.theme)}}))},V=function(t){return t[I]||R},K=function(){return Object(k.a)(V,(function(t){return t.theme}))},Q=function(t){var e=t.children,n=Object(s.b)(),a=Object(c.useCallback)((function(){return n({type:F})}),[n]),o=Object(s.c)(K()),i=w(o);return Object(r.jsxs)(b.b,{injectFirst:!0,children:[Object(r.jsx)(d.a,{theme:i,children:Object(r.jsxs)(f.a,{theme:i,children:[Object(r.jsx)(l.a,{}),e({theme:o,setTheme:a})]})}),Object(r.jsx)(P,{}),Object(r.jsx)(z,{$theme:i})]})},Y=n(124),E=n(125),S=n(123),N=n(120),U=n(121),J=n(23),$=n(131),_=n(128);function tt(){var t=Object(v.a)(["\n\t","\n"]);return tt=function(){return t},t}var et=f.d.span(tt(),(function(t){var e=t.theme,n=t.$direction,r=t.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(e.spacing(r),"px;\n\t")})),nt=n(3),rt=Object(nt.oneOfType)([nt.element,nt.elementType]),ct=(Object(nt.oneOf)(["default","primary","secondary","error","warning","info","success"]),Object(nt.oneOf)(["top","right","bottom","left"])),at=(Object(nt.oneOf)(["small","medium","large"]),Object(nt.oneOf)(["text","outlined","contained"]),Object(nt.oneOfType)([nt.number,nt.string]),ct.isRequired,function(t){var e=t.direction,n=t.spacing;return Object(r.jsx)(et,{$direction:e,$spacing:parseInt(n,10)})});at.defaultProps={spacing:1};var ot=at,it=Object(nt.shape)({value:nt.any.isRequired,label:nt.string.isRequired,icon:rt,disabled:nt.bool}).isRequired,At=Object(nt.arrayOf)(it),ut=(nt.any.isRequired,nt.func.isRequired,At.isRequired,nt.bool,function(t){var e=t.value,n=t.onChange,c=t.options,a=t.size,o=Object(J.a)(t,["value","onChange","options","size"]);return Object(r.jsx)($.a,Object(A.a)(Object(A.a)({value:e,onChange:function(t,r){r&&e!==r&&n(r)}},o),{},{children:c.map((function(t){return Object(r.jsxs)(_.a,{value:t.value,disabled:t.disabled,size:a,children:[t.icon&&Object(r.jsxs)(r.Fragment,{children:[t.icon,Object(r.jsx)(ot,{direction:"right"})]}),t.label]},t.value)}))}))});ut.defaultProps={exclusive:!0,size:"small"};var st=ut,lt=n(48),bt=(nt.string.isRequired,nt.func.isRequired,function(t){var e=t.theme,n=t.setTheme;return Object(r.jsx)(st,{value:e,onChange:n,options:[{value:"dark",label:"Dark",icon:Object(r.jsx)(lt.a,{style:{color:N.a[500]}})},{value:"light",label:"Light",icon:Object(r.jsx)(lt.b,{style:{color:U.a[500]}})}]})}),dt=n(59),ft=n(9),jt=n(19),vt=n(71),Ot=n(72),pt=n(76),gt=n(75),ht=(nt.string,nt.element.isRequired,function(t){Object(pt.a)(n,t);var e=Object(gt.a)(n);function n(t){var r;return Object(vt.a)(this,n),(r=e.call(this,t)).state={hasError:!1,error:{title:t.title,message:""}},r}return Object(Ot.a)(n,[{key:"componentDidCatch",value:function(t,e){this.setState((function(n){return Object(A.a)(Object(A.a)({},n),{},{error:Object(A.a)(Object(A.a)({},n.error),{},{message:t.message||e.componentStack||""})})}))}},{key:"render",value:function(){var t=this.state,e=t.hasError,n=t.error,c=n.title,a=n.message,o=this.props.children;return e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h1",{children:[" ",c," "]}),Object(r.jsxs)("pre",{children:[" ",a," "]})]})||o}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(a.a.Component));ht.defaultProps={title:"Error fetching the module."};var xt=ht,mt=(nt.element.isRequired,Object(nt.arrayOf)(nt.string),Object(jt.a)((function(){return n.e(1).then(n.bind(null,147))}))),yt=Object(jt.a)((function(){return n.e(0).then(n.bind(null,148))})),Ht=function(t){var e=t.component,n=t.roles,a=Object(J.a)(t,["component","roles"]),o=[],i=Object(ft.g)(),u=i.push,s=i.location.state,l=Object(ft.h)().pathname,b=(null===s||void 0===s?void 0:s.roles)||[],d=n.length,f=b.length,j=d&&n||b;return Object(r.jsx)(xt,{children:Object(r.jsx)(ft.b,Object(A.a)({render:function(t){return d&&"/login"!==l&&u("/login?returnUrl=".concat(l),{roles:n}),"/login"===l&&f?Object(r.jsx)(yt,Object(A.a)(Object(A.a)({},t),{},{error:"Please login to continue"})):d&&("/login"!==l&&"/unauthorized"!==l||u("/"),i=o,0!==(null===(a=j)||void 0===a?void 0:a.length)&&!a.some((function(t){return i.indexOf(t)>=0})))?Object(r.jsx)(mt,Object(A.a)({},t)):Object(c.cloneElement)(e,Object(A.a)({},t));var a,i}},a))})};Ht.defaultProps={roles:[]};var Xt=Ht,Pt=["LoggedInUser"],zt=Object(jt.a)((function(){return n.e(14).then(n.bind(null,153))})),Dt=Object(jt.a)((function(){return n.e(10).then(n.bind(null,144))})),wt=Object(jt.a)((function(){return n.e(11).then(n.bind(null,145))})),kt=Object(jt.a)((function(){return n.e(6).then(n.bind(null,146))})),Wt=Object(jt.a)((function(){return n.e(1).then(n.bind(null,147))})),Lt=Object(jt.a)((function(){return n.e(0).then(n.bind(null,148))})),Mt=[{path:"/",component:Object(r.jsx)(zt,{to:"/home"})},{path:"/dashboard",component:Object(r.jsx)(Dt,{}),roles:Pt},{path:"/preferences",component:Object(r.jsx)(wt,{}),roles:Pt},{path:"/unauthorized",component:Object(r.jsx)(Wt,{})},{path:"/login",component:Object(r.jsx)(Lt,{})},{path:"/not-found",component:Object(r.jsx)(kt,{})}],It=[{text:"Home",to:"/home"}].concat(Object(dt.a)([{text:"Dashboard",to:"/dashboard"},{text:"Preferences",to:"/preferences"}].map((function(t){return Object(A.a)(Object(A.a)({},t),{},{roles:Pt})})))),qt=function(){var t=Object(ft.h)().pathname;return Object(r.jsx)(Xt,{exact:!0,path:"*",component:Object(r.jsx)(ft.a,{to:{pathname:"/not-found",state:{referrer:t}}})})},Zt=function(){return Object(r.jsxs)(ft.d,{children:[Mt.map((function(t){var e=t.component,n=t.path,c=Object(J.a)(t,["component","path"]);return Object(r.jsx)(Xt,Object(A.a)({path:n,component:e,exact:!0},c),n)})),Object(r.jsx)(qt,{})]})};function Bt(){var t=Object(v.a)(["\n\tmargin-left: 20px;\n"]);return Bt=function(){return t},t}var Ct=Object(f.d)(S.a)(Bt()),Gt=function(){return It.filter((function(t){return"Home"!==t.text})).map((function(t){return Object(r.jsx)(Ct,{component:u.b,variant:"h6",underline:"none",color:"textPrimary",to:t.to,children:t.text},t.to)}))},Ft=function(t){return Object(r.jsx)(Y.a,{position:"sticky",children:Object(r.jsxs)(E.a,{children:[Object(r.jsx)(S.a,{component:u.b,variant:"a",to:"/",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAv0AAADtCAIAAACj7V3xAAAAA3NCSVQICAjb4U/gAAAgAElEQVR4nO3dXWxbZ57f8cdDhiaVw4gjUwqpMBXHlUXN2gmUmm3dTHdgAru9mNRaLFDsBlZ3py+TsbC9aMdrYadAx2pcoJ3ARnJrbzwLFAsZk6IXGzmTbneBldHOpu6AaZysnYprjU1NGYkjU1pqeGLJCjnuxWMzisSX55CHhyKf7+dKEo/IR4ekzo//523fw4cPBQAAgAa+1O4GAAAAOITcAwAAdEHuAQAAuiD3AAAAXZB7AACALsg9AABAF+QeAACgC3IPAADQBbkHAADogtwDAAB0Qe4BAAC6IPcAAABdkHsAAIAuyD0AAEAX5B4AAKALcg8AANAFuQcAAOiC3AMAAHRB7gEAALog9wAAAF2QewAAgC7IPQAAQBfkHgAAoAtyDwAA0AW5BwAA6ILcAwAAdEHuAQAAuiD3AAAAXZB7AACALsg9AABAF+QeAACgC3IPAADQBbkHAADogtwDAAB0Qe4BAAC6IPcAAABdkHsAAIAuyD0AAEAX5B4AAKALcg8AANAFuQcAAOiC3AMAAHRB7gEAALog9wAAAF2QewAAgC7IPQAAQBfkHgAAoAtyDwAA0AW5BwAA6ILcAwAAdEHuAQAAuiD3AAAAXZB7AACALsg9AABAF+QeAACgC3IPAADQBbkHAADogtwDAAB0Qe4BAAC6IPcAAABdkHsAAIAuyD0AAEAX5B4AAKALcg8AANAFuQcAAOjC3e4GAJ/78MMPX3vttfK3P/jBD3w+XxvbAwDoMuQe7C2maba7CQCArkU/FwAA0AW5BwAA6ILcAwAAdEHuAQAAuiD3AAAAXZB7AACALsg9AABAF+QeAACgC3IPAADQBbkHAADogtwDAAB0off+XKsf2XRH+2y6nz3swHPtbgEAAM3SO/e89912t6BznHi33S0AAKBZ9HMBAABdkHsAAIAuyD0AAEAX5B4AAKALcg8AANAFuQcAAOiC3AMAAHSh9/o91bz4fXHg+XY3oh1W/0q89wftbgQAAK1CvQcAAOiC3AMAAHRB7gEAALpgfI9F1/9YLH8sesPi2O+Ini/X+cmvfls84W1vewEAQBn1HivWl8Xyx4++WPq48k+WP972k1vtaikAANiN3GOFLOdIspCzvZwjv95+jMfnTLsAAIAK+rmseMIrnvvHYvmW6B0Ug4eFEKLnyzt/0ht+9JPwYRH+lfa2F5r4tFS6llu/9+Czu/c3hRAD+z39nicOP9Vz2N/T7qYBwN5C7rFo+Gti+GuWfwK0zJXMvYvp5UKxtPumRLD3zHBk0OtxvlUAsDeRe4AO9sqN28m8We3Wudx6Mm++OXYoZtDlCgBCkHsA5y1tbi1vbtU97GjAqH3ATGalRuiRCsXS9Pzim2OH/G6XhSba7f167RRChL0eSlMAWo3cAzhtNrt6KZ2te9gHx1+ocevS5taFhU9UHi5lbsxmVyciA6rta4Fv3bhd95hT0dBkNOxAYwDojPlcQEeqW+nZbi633rqWAEAHod4DPOqFWdrcWtrcEkIsbT5YetwPNej1DHr3y6/jAWPE8LW3w6gsZd5XP/ivzY3WtQSWpMwNs1gS25JrMl8o3xoP+OUXg17PiOFjYBZgO3IPNLW0ufV+3pzL5a3WQvxuV8zwxQP+mOE7HuxtUfPqqjiBq5qHrWsH1FzLrSfz5lwuv1RzaNfuMl7M8MnX29GAwfgnoHnkHuilUCxdSmeT+UKq0RJIoVhK5k15ffK7XYlgbyIYcD4AxQzfVSsHt7ApqO5qdq2BbL1dytxImRuz2TUhRMzwjYcOHA/2EoCAhpF7oJFL6exMZsVSpaS2QrE0m12bza753a6JyMDJSL9jvWAxw8KahPF6U8Ngu2TevJRetjQMq66UuXF+IXN+IRMPGKeiYZ5WoAHkHitS10Vhrd2NsMNzx8V+vVbyTebN6fnF2l0MzSgUSxfTyzOZFcfSTzxgHA0YKvPDDbervZO5dFMoli4sZGSFpkWSeTN54zbppxUKxZLKeLjmh/qxuEO7kHss+tM/bHcL7PDc8Xa3wFHT84stvQiVyfTzF7n8W/FRBx7ujSMHv3H9llmvfHVudGiPjMXWwWx27cJCxsaaYg0y/bw5dojoY6OUufGKwrILzZ92FndoF3KPRfFvtLsFsMax0FM2Hupz5oH8btflsUNn5xerfTw13K5zo0OJ9g2+1k3K3HAs9Ehhr4fQA1hC7rEidkzEjrW7EbDA+dAjhBgPHXDssWKG76346ExmZTa7tj39yMvh1HCESo9jZJ3AydAjHAzZQNfQO/e8+H0hhBD7dt2g7bTfh+LF71c6IR3pYnrZ+dBzItTnfNSYiAzIETxyCSIKAM5rS+gRQjByC7BK79xz4Pl2t2CP6aITksybKntB2M7JYs9ug4yCbBOHu7ektoRsoNPpnXvQvS6llxv7xR0TKFTmXGz/XWotGiqv59SA7bvPlpdyVtTekA10KHIPupDV69CI4RsP9cWMnmqpZWlzK2VupMz7ybxZIwkx80JPlkK28Xity3jAqFatSeZN+WJLmRvLVRZfIGQDjSH3oAvNZFYUj1Sc8ST7j+RhhWJpLrc+l8tf++IivPJ61liD0blS5oZ6yD4R6lMZbB4PGPGAIcfupMyN2ezqbHZtRyloItLfWIMBzZF7rPjP/1b8/G67G2GHf/1H3b1uoeI2nIbbdXnskNU9HPxu13iobzzUt7S5NZtdncnckxekRLBXq8EW5bqX4Xbt8X0wtvcf2b6z7Fwur3jkmeFnGhiGHDN8U8ORqeHIXG59JrNSPu2t7uTasXzf0bbWlvZUY9DpyD0WbW22uwWoo7ytel1vHDnYzAV70OuZjIYnIgMzmZWZzD3nZ9bI1WLqHnYidKD52c6FYulabl1uq1lta7N4wIgZPScj/e0dW63SVFnAixk9J0J9TYY2xY3eToT6mnyFJIK9iWBvMm9eTC8Pej22h+ztJ63aGO3yeWv1s2ypMc0/idAKuceK3/2P7W4B6lMMPXYNj/C7XTL9OF/skTuk1j2syQ/Hybx5NbuqsiKAHFY1k1mRifCE40vLyIulSlNlOJatlZt9Njw3SnEaVyIYaODOd4sHjMtjh2ycO5YyN65m12azqyr3ueO8TUQGjtta5my4MYNej2yM1TS2e2lmxXN7YSFT+w8/Mxwpp7HzCxnFIvQOV7NrtadW2PKpRjfkHiv2dcnCNt1NMffYOya0K3u45nLrFxYyDWxqtrS5dXZ+8WJ6+dXRIWfG3l5KZ2ezq43tv1be7DMR7D0zHLF64VSc8bcHX29XMvdmMisNb1qXMjfOzi8KIcZDfaei4SbLP1ezazOZFcXi2W5Lm1vlJ/FkZED9bDc8Ea9uU7fnp5S5YWlmaFnd6jVdfg0g96DbLG0+UDmMdW5qsGVnzaXNrVdu3H51dKiln0dT5sb0/GLD18vt5nLrybz5qpWdPdTrLnsqGS9tbp2+eceWkyaEmM2uzeXWJ6Phkw0NtS4US6dv3rFr4/q53LpszKloyJY7RPf5UrsbALRH6/Zm73Ry6WG7lrpu6VYhs9m1V27ctuv6LR5fgy8sfGL7IoTOr2pYzZXMvZeT8zaeNCFEoVg6v5A5ffOO1T9zLrf+0vVbdoWesovp5ZeT87zHURG5B5q6ml3j3+JuticJIcT0/KKN9ybJgDI9v9iKPDGTWVE8CepVHPW1FVqnUCy9cuP2+ZYtLT2XW1ffrKNQLF1Y+KSBqKQoZW68nJy/krnXijtHR6Ofy4rPlDpQGvfEfocet9oDdQX1S9Hpm3feHDu0pzog2iuZN1uRUVrB9nC2Q8rcOH3zzg/jo3a9PC6ls4Pe/W0cgipDT0tPmnh83t4cO1T3SBv7tqqRVaiH4iG7mGE7co8VV/69+H//t1V3fvAFcXK68k1/dll88Oe2PZDPL37/j227t70nHvArHpkyN166fmsiMnAy0k/6KRRLnRJ67BrQU5scBFP3En40YCgOWZ2eX7yWy5+Khtsy6drGAT21JfPm+YXM1HCkxjHnFzKtDj1lFxY+qbEUOzRE7rHIp3pNtdW+Nj1uR4oZPsPtUtznqFAsXUwvX0wvy60DnJ96vXdMzy92RMffbHatdQOGdpCL5dTefiSunHvE41G3g16PnDnv2OB6J3OGEOJK5p7ciKPirbPZNYe7n2TpjqkMkMg9VnzzP7XncV/6PfHS77XnoTtTIth71eKlUV6Qzs4vxgNGPOCPBwytJojOZFbmvrjtxt6kuFRj2YjhG/R6YoYvZvT43a6Uef/xVmuqO4BeSmfl66HaAYlg4FI6q94kIcTS5pZM2zHDV36xta7i6HzOEEJcSi/HK5XKrD6DtpCjwejUhqR37ln9SAghxO5VeR6KA8873Zi9oOoJEeLAc842pSmT0bDV3FNW3tPU73bJDHQ0YHT3arBLm1sXFj6x9Cty1cdEMCDPkhAiZW4sbW4l84W53Hq1rTSbJK9eisNgw17PuV2rB5W/lSM/FF8kp2/e+dGxw9UumTHDp97VtYNMYHLIc4sykJznb+lXRgxfItgbD/j9blfM8BWKJblo8lwur/62ku+jHedfjjGyNJA57PXIWqz/8XYoybwpGzOXW1ffvj5lblxML9fufYMm9M4973238s9f/L6z7dg79on3/qDyLSfedbYlTRn0ek6E+hqOPtLj/UfXxeMMlAgGjgaM7quWz2ZX1Q823K6JSP/u9aljhi9m+BLB3qnhyGx27fxCRv2apGgut67YE1d30SC/23VudGgiMnB2frHuQrqFYmkms1Kjt2syGt697K9VOzKQ7CdqvuhotTw2NRzZEVbK0TYR7J2Mhmezq3XrWxXvRwgxk1lRDz1hr2cyGt79PJYbI5+X8gZ5dVXsffvg+As7DkvmTZVn882xQ+pjhi5XKn29cO2Dur94Khqq3c2KBuide9C9poYjybxpV+FhewaS16Tjwd6uKQKpB8QRw3dudKjuHz4e6ksEe79143Zja/NXc0VtKrj6Sokxw3d57NBvJ+frvk6uZO7V2IokHjBORUNWe7tqkBlICOF3u2S147jyUorblYuXKk6E+s6NDtU+Ru5AMujdXy3XVgsrQohCsaTe3TZi+C7X65aSW8QkgoFv3bit3GtZufcNWmH9HnQnv9v1xpGDIy2IJrJg/nJy/qXrty6ls3tnPbrGqBdRwl6P+vb1frfr8tghG89/Mm+qTEc6Gem3NFdcvk6Mev1KMvjWOKBF+5EViqXZ7Np3bt75+o8/mp5ftDo2WX3RoFPRUN3QUzYe6ttdwDDcrldHh949drja+VfcdUsIcTRgvKW8gkDM8L177HDdZ1BK5s2OGLyPlqLeY8V6tyyB5X1S7O9pdyNaTn6at73qUCZHp85kVjp6JrxiJ5fhdr1x5KClv1FGit9OztvS4aXSzqMBo4EBHDHDNzUcqTsIZi6Xr52oZCXM6kgpRTIAzWbX1DfDkvvSq9z58WCv1c6UmOE7M/yM/GOrdX3uoFhWDHs9bxw5aKkx8pWm2NU4l8uznI/myD1W/MnrLVy/x0lTV9rdAofIqkProo94PBN+JrNiaV+nPUL90jgR6W+gX2/Q61GJFHUViiWVq+Z46EBj9z8e6qs7IEnlRE1EBvxud0uXQZLpZyIycCoaqp0zFCfoGW6XeqVnu4nIQDJvyp6vuoFYTqNTudtzo0MNfISIBwzFIX2yy9Lq/aObkHssCjIdoMP43a634qOz2bWL6eUWzTMSj6catXoPTtspXooMt6vhS8V4qK/5M6/Yv9PM2nQqax/snqC023ioLx4wLqaXmxxWX9tMZiWZL9SemD2Xy6vc1UQTpUr1woxiY+Q8wcYaoziLc2lzq1AsdWh1FrYg91jRrvV70LTxUN94qK/V6Wd6fvH9fOHVhj49t4XieItEsLeZ60Qi2Nvk+jEp837dY+RSPQ0/RCIYqHvVTJn3Va7Kg17PudGhyWj4/EJGsZzWALl97OtHDlb7qxVrnIlgwNZ2VaY4qmaioR3dpUGv53iwV+WEp8wNlm/WGbkHGpHpJ2VuzGZXW7TMzGx2zXC7OmWZEJU8Iaxs/VFRIhhoMveo5DOzWGp+MnltlobEDno9bxw5+HgmYL4VAUhuvVlxbaFCsaTS2rDX48y0RMXKYpOvtHjAUDnPyXyB3KMzcg+0I8exTg1HUubGXC6fzJuNLTpXzZXMvXjA33FjfWpo8iLR/DVG5aq5tLnV6qk6Dexv5Xe7ZNqWAUiu62jjykbllYh3/FyxqY4tRqX4FmsyhMUMpekanT4HE00i90Bfcqk9+bW8JiXzpi0joC8sZDoi9yiOm2n7Uo22L4HovHIAEkKkzA35Ykvmzeb/tGTelPO8GvjdPVX2aH6RRsXeWGf2Z8WeRe4BhBAiEeyVSaVQLCXzZpMZaGlzq+FLUVcKez3N9Cp22YVKBm45VNyWDHQ1u8qLTTRdLoImyD1W/M//0u4W1POrv/X51/P/Swghos+L9Ec7Dxv9B841qdM8XiH3UQZqeHBG3eVetPKU27Xc7jbsTdszUDJvym2nrGZEuRxf28tyQEcg91hx54M9vX7P2K9/4ds/uyx+sSrOzIif/h/xwZ+L3/x94XKL//qaeD5B7lG0fXCGpZ2AhPKABk10WcGmReIBIx4wpoYjc7n1mcyKpZdQMm+Ss1mLGSrIPVYEnhaBp9vdCGVD23ZQf+74zi9ghdwJSG5jqVj7kbtY7/HCe8zwqVxc277eieF2dcEQH3Wy4jiTWbmYzir+4cl8oYHcs6fyaPND6xRzzx5/V6LVyD1W/Ma/aXcLrCi39qV/9fkPqfQ0QS6H/60btxU/iO/9aSOKaSaZN5sZpm11V6ndVPKZ4Xa1+nrm8CjgicjAoHf/6Zt3VA7ecclXPBWtW8d8hxHDp7LvfZO9dYrrMrBooebIPYA1bxw5+PUf7xoy1ZkGvftVDkvmC83lnkLDvyup5J59QljdQWzvSwR7T0b6G1j9yO92qYwll5P/HRgYFFPIPaLp3jrFhK043R3div3YAWv8bpfiNuN7v96jeMFrcs295ndsUNyGU3GP1c7S8EVaseTjzElTbMzVJhpTKJacWSUInY7cg66VMjdaNM5Rsaiw92sPirlHTstv7CFms2vNPwuKeyk0uSp0k1q0IZfiq2j3U6nYK3clc6/hgK6+DZniQsxyPn9jjZnJrKj8IWGvh4lvmiP3oGtdWMi8dP3WpXTW9rqL4sfKPbUoXEWDXo/iYnEXFjINnMZCsXQpbcME9kGvR6XG1kw+a9Jsdu3s/OIrN27bPlJYsZdw97VcMSwWiqWLDT1Hc7n1S+ns2fnFl67fqhtWYoYvrJY2LixkGmhMytxQTL12LSjafO+t2qMwLdR+5B50p/IHx4vp5ZeT8zZ+Fp9T6/Qx9nyxRxoPHVA5rNDQ7lfT84t2ldwUh31Mzy82E31ms2uN/brsoEnmzZeT8xcWPrExaiv33ezsDlMMi0KIK5l7Vv/qQrE0Pb8ov17a3Hrlxu1XbtyufZFWDBwpc6N8z5Yao3jOFV/wKg9qy/3UptU0RseQe9Cdto9aWNrckp9KL6WzTV6G1f8pd8oYgvFQn2JEk7tgKv67l5cixYyoYjx0QLGdDUefCwufTM8vNvDrO3pnZjIrX//xR9Pzi81/WJ+eX1QsIFXsDpPLISo+kPpfXfGVkMybr9y4XSPpqjdmNrumHn1kIlc8S0cDRt03pmKZtvmNZlVSaes663XGfK5K3vtuu1uApixtbu0u8Cxtbl1ML19ML4+H+hLBwNGAYXX8zbXc+lnHP1Y6IBHsVayHyQveq6NDta8Nybx5YSFjb4+P3+2aiPRfSmdVDp6eX3w/XzgZGVBMn8m8uf2CfWEhs33vtrpmMiu7fyhLR4Nez0Rk4Hiw1+qYkqXNrUvpZcUsEvZ6Kj4j46G+mcyK4mT16fnFa7n8meFI7aZeza6dr97pKf/qicjAqWhox/tr0Os5EepTfKXJYWFnhiO1n4W53PqFhYx6MpiMhhWPrEv+P6l2hypLXin+/5meX9y97yyaQe5BF6p4HSor92XEDF884I8HjNoZKGVuXM2uzeXy6v9eDbergxbPnYgMqPcDyk6NeMBIBAM7LudLm1vv583Z7GqLBiVMRAbUl8yWz3I8YExEBqo9vylz4/28OZfL72iwLCG8OXZIJfosbW7V+Oi/tLl1fiFzfiHjd7viASMe8NcuORSKpWu5davnsMblfGo4ot5BOZdbn8utj4f64gH/8WDv9pP2ft5M5s3Z7KrKu2AmszKbXX39yMEdaWwyGlbfjl52GiaCvfKVtr0x8pzvfuJqOxowFGs5RwOGSvfipXR2n9h3MtK/49V1JXPvYnr5h/HR2gkyrvYoybx5+uadV0eHdjyKzHynouEO+lezR5B70G0KxZJ69SJlbmwPSTHDV/7nIpc2aawNE5H+xn6xLWKGz+oiMbJn5/xCRjz+2OrAcAe5bqSlYUbbe6DkNc/vdsmm1n5+1aOP4qDgx3u9fZ6QBr84sajhsBj2empc+eIBw+qTu32QU/l0WWW4XbtDxqDXc250SHElRmn7SWu4MbI9bxw5qHiwYiIRQlxML89kVmKGL2b0FIrFpc2t8vM4m12tXV6KB/yXhFL9ci63Pvfjj+IBY9Dr8bvdKfN+ytyQp4J9ABtA7kG3UZzOWpEtXTOG26U+lGGPmIyGG95/3slliuIB48zwMxcWPmngd60Gi0KxdPrmnR/GR2vUAmV5poHGiOaC9XZ1+26mhiO1i1I1NPzkVmtVIth7KhpS7K+0qzFCiMtjh9T7tRPBgHoLC8VSxen3V7Nr9XKPYWkDloov4Gu5dbaktYpxzeg2LVpGRd3UcGTvr9yzg9/tOjc61BFz0CYiAyec+oArO/VqXG6bCdm2OBowVD7unxsdUpzbZYsTob4arZqMho/bNJlc0aujQ5bmGcQMn+L6DjVsr/1UY0uppiuX62wpcg+6yv/+m0J7pz+8OjrUoWXnmOGbGo60uxVKnLyK7+gJ3aG9KyWOGD7FvhvZRehMrh1ReCE5+QzWDmHV2DICum4isaUw3PZPeh2H3IOu4nN9qY1Fi84NPdJ4qO9kh4xMujx2yJmawYlQX405O04WUXYYMXyW+m4GvZ7LY4cUFw9splUqu6TJHNZ8TaWuk5H+c6NDDfyinO7Q5KNfza7VLgcOej2noqEmH0WlsITtyD3oKs8/9eS7xw635eJ9ZviZjg490tRw5HW7CwMjhs/2Z0ReOM8MP9PSmHsqGqpx1fS7XZfHDr1+5GCrw8RuVkOPFDN8b8VHW/fukK1SHGsic1jzV/1qDLfrzbFDzZQw3zhysPlcW3cJq8louPl+W7q6LNF7XPOJd9vdAiGEEL9Ii5+cFRu5qge8MCUiCQcb1Nn8btfUcGQ8dOD8QkZxUkaTjgaMqXoLjXSQRLD3rfjod27eaWyY8w4nQn1Tw5HaKws0bCIykAgGzs4v2v5EG49eRfUvSIlgbzxgzGRWGhur20DDJqOhhvtH5LsjEQx85+Yde9cCPhnpn4yGrUaxyWhYNqbu1vGWHA/2nts18dsqOeitybZdyazUfRXJgefNvIavZtf+3cizni9RyFDCadoD0ldrhR4hxN23xdYvnGpNl4gZvstjh34YHz0Z6W9dSSDs9bx+5OBltYVeOsig12NLYUDWS1o6yluWDc4MP2NX0cVwu05FQ+8eO6xevfO7XZPR8P/4h8+fGX6mpT1fJyP97x473PygkHjAePfYYbuGh48YPllZaeyJLlehbHmfhr2eM8PPqPS1qbetmR7V8oTzGmThsMnSF8s6q9O73rMXZK+Lxf9W55j8X4u7b4vY7zjSoK4ix+pODUfmcuuz2dXml5YvGzF846G+8dCBjpu6pW5qODIZDc9mV2eza1ZrP3JYjGPTayciAxORATkGWX1lvB0MtysR7G34+u13u2Qzlja3ZDPsqmHI5ZgnlJefViGLGeW3RmPFhqMBYzIabn7/XVmFmhqOzGbX5nL5Bt6n8rkbDx2wfTNg2aM6m11TX/m6TFaCFV9Ok9FwPOCfyaxY/fPDXs/UcCTa47X0Wzrb9/Dhw3a3QWO/LIqfTIt7H9Q/0t0jjv0H8eWvtr5N7fThhx9+73vfK3/71ltv+Xw2f3pO5s1kviBXLLR6WZJLsSWCgcQXV4+1aja7ptIff7ne4vQpc+O8wubV46EDzQ88kpEimTdrn7SjAUMusLsj8aj8yba0U5rLrc/l8ilzQ+VCJZfxTQQDthft5MssZd5vbG2kEcMnT6YD1cSlza25XH4ut54yN2qnRuPRwtPG7mfZ+caEvZ6Y4Wv+LalIrlhd93UV9npkCGvsiZO5WS4mXvtRyv+OGngUnZF72urOn4hbf6h68ODXxdEu3zjMgdyz3cqDz9L3N9P3Hzz6dmvr3oPPyrf2uFxf6fEKIXrcX5JfHPbv3PJaT5+WSun7Dz4tluSp69//xMD+J4QQ0Z79T7r2YvUrfX/z09IvVx58Jp/fcoP7PY++cMatwv279zfvF38pHp3Dze23Rnu88uxFe/Y/6Xa192SuPPjs3tZn5ae43CqHz1jFxhx+qke0+8Um3wJCiFu/uF/+oTxF9v6XuFW4L4Qov2zE41fvnn2vdQRyT/uYGfGTafGp0iL3j4ydFs/+Wssa1H4O5x4AgG4Y19w+6Xeqhh5/tPLP774tHvxNyxoEAECXI/e0ycr7In218k0HnhOxico3rf9U3Hm7dY0CAKC7kXvaJH1VVOthHJkQ4a9V7c+6+7ZYvdm6dgEA0MXIPe2Q/pH4+U8q3zT0DRF8XgghYv9UeJ6qcEDpgbhLyQcAgEaQexx3/+dVe7jc3s97uHwDYqRKb9fyX4qf/WlL2gYAQFcj9zgu/Y4o/KzyTaPfFPu//Pm3Xzkh+v9O5SPvvF1niWcAALALucdZuQ+rFnsCI+Irv7Hzh6O/W/ngwjt4kbwAAAKsSURBVCK9XQAAWEXucVb6HVGqstzt6Dcr/DAwIg79VuXj774tcjdsaxgAABog9zjoZ/9dLP9l5Zue/TXR/0Llm0b/WeXlfH5ZFHdn7WoaAAA6IPc4ZXNNpN+pemu1/izpq/+88s+z10X6R021CgAAnZB7nJK+KtZ/Wvmmr/4L4Q3W+t2n/674W/+o8k133xb3f95s2wAA0AO5xxFrH1ct9hjPiuF/Uv8eDn+78nI+ZoYBzgAAKCL3OCL9jvjs08o3/cq/VLoHd0/VI++8Le6932DDAADQCbmn9TJ/IT65Vvmm8NfE039P9X6e/XXx9N+vdMNDNu0CAECFu90N6HZbBeHrFy++VvlWX81hPbsd/rb4278pxL4KN63+lTjwnOXmAQCgE3JPi3n8dsaRJ8PiybBt9wYAgGbo5wIAALog9wAAAF2QewAAgC7IPQAAQBfkHgAAoAtyDwAA0AW5BwAA6ILcAwAAdEHuAQAAuiD3AAAAXZB7AACALtifC3uL3+9/+PDhvn37Hj582O62AAC6DVcXAACgC/q5AACALsg9AABAF+QeAACgC3IPAADQBbkHAADogtwDAAB0Qe4BAAC6IPcAAABdkHsAAIAuyD0AAEAX5B4AAKALcg8AANAFuQcAAOiC3AMAAHRB7gEAALog9wAAAF2QewAAgC7IPQAAQBfkHgAAoAtyDwAA0AW5BwAA6ILcAwAAdEHuAQAAuiD3AAAAXZB7AACALsg9AABAF+QeAACgC3IPAADQBbkHAADogtwDAAB0Qe4BAAC6IPcAAABdkHsAAIAuyD0AAEAX5B4AAKALcg8AANAFuQcAAOiC3AMAAHRB7gEAALog9wAAAF2QewAAgC7IPQAAQBfkHgAAoAtyDwAA0AW5BwAA6ILcAwAAdEHuAQAAuvj/CZuDXzUpsDEAAAAASUVORK5CYII=",alt:"logo",height:"45px",style:{borderRadius:10}})}),Object(r.jsx)(Gt,{}),Object(r.jsx)("div",{style:{flexGrow:1}}),Object(r.jsx)(bt,Object(A.a)({},t))]})})},Rt=n(26),Tt=n(73),Vt=n(74),Kt=Object(Rt.combineReducers)(Object(j.a)({},I,T)),Qt=function(t){var e=[Tt.a],n=Rt.applyMiddleware.apply(void 0,e);return Object(Rt.createStore)(Kt,t,Object(Vt.composeWithDevTools)(n))},Yt=n(126);function Et(){var t=Object(v.a)(["\n\t","\n"]);return Et=function(){return t},t}var St=Object(f.d)(Yt.a)(Et(),(function(t){var e=t.theme;return"\n\t\tbackground-color: ".concat(e.palette.background.level1,";\n\t\theight: calc(100% - ").concat(64,"px);\n\t")})),Nt=Qt({});var Ut=function(){return Object(r.jsx)(s.a,{store:Nt,children:Object(r.jsx)(u.a,{children:Object(r.jsx)(Q,{children:function(t){return Object(r.jsxs)(St,{children:[Object(r.jsx)(Ft,Object(A.a)({},t)),Object(r.jsx)(Zt,{})]})}})})})},Jt=document.getElementById("root");i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Ut,{})}),Jt)}},[[95,3,4]]]);