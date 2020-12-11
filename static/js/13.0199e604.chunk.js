(this["webpackJsonpslide-scott"]=this["webpackJsonpslide-scott"]||[]).push([[13,3],{715:function(t,e,n){"use strict";n.r(e);var r=n(6),a=n(51),c=n(5),i=n(0),o=n(826),u=n(855),s=n(775),l=n(856),b=n(817),d=n(808),j=n(811),f=n(52),p=n(783),O=function(t){var e=t.match.params.id,n=Object(i.useState)(!1),p=Object(a.a)(n,2),O=p[0],v=p[1];Object(o.a)({timeout:3e3,onIdle:function(){return v(!0)},onActive:function(){return v(!1)},debounce:500});var h=Object(i.useState)(0),g=Object(a.a)(h,2),m=g[0],x=g[1],T=Object(d.a)(e),y=T.slide,C=T.pending,w=T.error,E=Object(j.a)(e),I=E.presenterCoordinates,k=E.updateLiveOptions,A=E.updatePage,S=E.updateDrawing,B=E.clearDrawing,D=Object(u.b)({onChange:function(t){var e=(0,t.getSaveData)();S(e)}}),P=D.canvasProps,q=D.canvasRef,L=Object(i.useRef)(!1);return Object(i.useEffect)((function(){if(!L.current){if(!I.drawing)return;q.current.loadSaveData(I.drawing),L.current=!0}}),[I.drawing]),Object(c.jsxs)(s.a,{vertical:!0,style:{overflow:"hidden"},children:[Object(c.jsx)(l.a,{onMouseMove:k,page:m},m),Object(c.jsx)(u.a,Object(r.a)(Object(r.a)({},P),{},{ref:q})),Object(c.jsx)(b.a,{$bottomCenter:!0,$idle:O,tooltip:"Clear Drawings",icon:f.j,onClick:function(){q.current.clear(),B()}}),C||w||Object(c.jsx)(b.b,Object(r.a)({onPageSelect:function(t){x(t),A(t)}},y))]})};O.defaultProps=p.b,e.default=O},775:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(6),a=n(26),c=n(14),i=n(5),o=(n(0),n(13)),u=n(764),s=n(4);s.node,s.bool,s.bool;function l(){var t=Object(c.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t","\n"]);return l=function(){return t},t}var b=Object(o.d)(u.a)(l(),(function(t){var e=t.$horizontal,n=t.$vertical;return"\n\t\t".concat(e&&"justify-content: center;","\n\t\t").concat(n&&"height: 100%; align-items: center;","\n\t")})),d=function(t){var e=t.children,n=t.horizontal,c=t.vertical,o=Object(a.a)(t,["children","horizontal","vertical"]);return Object(i.jsx)(b,Object(r.a)(Object(r.a)({$horizontal:n,$vertical:c},o),{},{children:e}))};d.defaultProps={children:"",horizontal:!0,vertical:!1};var j=d},777:function(t,e,n){"use strict";var r=n(6),a=n(26),c=n(5),i=n(0),o=n(779),u=n(51),s=n(99),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(i.useState)(!1),n=Object(u.a)(e,2),r=n[0],a=n[1],c=Object(i.useState)(""),o=Object(u.a)(c,2),l=o[0],b=o[1],d=Object(s.a)(),j=d.notifySuccess,f=d.notifyError,p=function(t){var e;b("string"===typeof t&&t||(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||"")},O=function(e){if(e.preventDefault(),l.toLowerCase()===t.toLowerCase())return a(!1),void j("Correct answer!");a(!0),f("Wrong answer!")};return{studentAnswer:l,error:r,onAnswer:p,onSubmit:O}},b=function(t){var e=t.correctAnswer,n=t.children,i=l(e),o=i.onSubmit,u=Object(a.a)(i,["onSubmit"]);return Object(c.jsx)("form",{onSubmit:o,children:n(Object(r.a)({},u))})};e.a=function(t){var e=t.noPadding,n=t.noBg,i=t.bg,u=t.correctAnswer,s=t.children,l=Object(a.a)(t,["noPadding","noBg","bg","correctAnswer","children"]);return Object(c.jsx)(o.a,Object(r.a)(Object(r.a)(Object(r.a)({containerProps:{style:{height:"100%"}},noBg:n},e&&{p:"0! important"}),{},{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},l),{},{paperProps:Object(r.a)(Object(r.a)({},l.paperProps||{}),{},{$bg:i}),children:u&&Object(c.jsx)(b,{correctAnswer:u,children:s})||s}))}},778:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),a=(n(0),n(14));function c(){var t=Object(a.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\t","\n"]);return c=function(){return t},t}var i=n(13).d.span(c(),(function(t){var e=t.theme,n=t.$direction,r=t.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(e.spacing(r),"px;\n\t")})),o=n(37),u=(o.d.isRequired,o.h,function(t){var e=t.direction,n=t.spacing;return Object(r.jsx)(i,{$direction:e,$spacing:"string"===typeof n&&parseInt(n,10)||n})});u.defaultProps={spacing:1};var s=u},779:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(6),a=n(51),c=n(26),i=n(14),o=n(5),u=n(0),s=n(234),l=n(766),b=n(13),d=n(775),j=n(4);j.object,j.object,j.bool;function f(){var t=Object(i.a)(["\n\t","\n"]);return f=function(){return t},t}function p(){var t=Object(i.a)(["\n\twidth: 100%;\n\ttext-align: left;\n\t","\n"]);return p=function(){return t},t}var O=Object(b.d)(s.a)(p(),(function(t){var e,n=t.theme,r=t.$bg;return"\n\t\t// margin-bottom: ".concat(n.spacing(2),"px;\n\t\tbackground-color: ").concat(r&&((null===(e=n.palette[r])||void 0===e?void 0:e.main)||n.palette.background[r]||r)||n.palette.background.paper,";\n\t")})),v=b.d.div(f(),(function(t){var e=t.theme;return"\n\t\t& * {\n\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t}\n\t")})),h=function(t){var e=t.containerProps,n=t.paperProps,i=t.noBg,s=Object(c.a)(t,["containerProps","paperProps","noBg"]),b=Object(u.useState)(!1),j=Object(a.a)(b,2),f=j[0],p=j[1],h=Object(o.jsx)(l.a,Object(r.a)({py:2,px:4,textAlign:"left"},s));return Object(o.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{children:i&&Object(o.jsx)(v,{children:h})||Object(o.jsx)(O,Object(r.a)(Object(r.a)({elevation:f?3:1,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},n),{},{children:h}))}))};h.defaultProps={containerProps:{},paperProps:{},noBg:!1};var g=h},780:function(t,e,n){"use strict";n.d(e,"b",(function(){return R})),n.d(e,"a",(function(){return S}));var r=n(6),a=n(5),c=n(0),i=n(961),o=n(764),u=n(799),s=n(807),l=n(775),b=n(78),d=n(778),j=n(53),f=n(14),p=n(13),O=n(962);function v(){var t=Object(f.a)(["\n\t","\n"]);return v=function(){return t},t}var h=Object(p.d)(O.a)(v(),(function(t){var e=t.theme;return"\n\t\tmargin-bottom: ".concat(e.spacing(2),"px;\n\t")})),g=Object(c.forwardRef)((function(t,e){return Object(a.jsx)(h,Object(r.a)(Object(r.a)({type:"password"},t),{},{ref:e}))})),m=n(26),x=n(960),T=n(771),y=n(4),C=Object(c.forwardRef)((function(t,e){var n=t.label,c=Object(m.a)(t,["label"]);return Object(a.jsx)(x.a,{control:Object(a.jsx)(T.a,Object(r.a)(Object(r.a)({color:"primary"},c),{},{ref:e})),label:n})}));C.propTypes={label:y.string.isRequired};var w=C,E=n(786),I=Object(c.forwardRef)((function(t,e){var n=t.label,c=Object(m.a)(t,["label"]);return Object(a.jsx)(x.a,{control:Object(a.jsx)(E.a,Object(r.a)(Object(r.a)({},c),{},{ref:e})),label:n})}));I.propTypes={label:y.string.isRequired};var k,A=I,S={TEXT:"text",PASSWORD:"password",CHECKBOX:"checkbox",COLOR_PICKER:"colorPicker"},B=S.TEXT,D=S.PASSWORD,P=S.CHECKBOX,q=S.COLOR_PICKER,L=(k={},Object(j.a)(k,B,h),Object(j.a)(k,D,g),Object(j.a)(k,P,w),Object(j.a)(k,q,A),k),R=function(t){var e=t.items,n=t.schema,j=t.onSubmit,f=t.defaultValues,p=t.submitText,O=void 0===p?"Submit":p,v=Object(u.useForm)({resolver:Object(s.yupResolver)(n),defaultValues:f}),h=v.control,g=v.handleSubmit,m=v.errors,x=Object(c.useRef)({});Object(c.useEffect)((function(){e.forEach((function(t){var e=t.name;x.current[e]=Object(c.createRef)()}))}),[e]);var T=function(t){var e={required:!0,rules:{required:!0}},n=m[t];return n&&(e.helperText="".concat(n.message),e.error=!0),e};return Object(c.useEffect)((function(){})),Object(a.jsxs)("form",{onSubmit:g(j,(function(t){var e=Object.keys(t);if(e.length){var n,r,a=e[0];if(null===(n=x.current)||void 0===n||null===(r=n[a])||void 0===r?void 0:r.current)return void x.current[a].current.focus();setTimeout((function(){var t,e,n;null===(t=x.current)||void 0===t||null===(e=t[a])||void 0===e||null===(n=e.current)||void 0===n||n.focus()}),100)}})),noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(d.a,{direction:"bottom",spacing:"2"}),e.map((function(t,e){var n=t.type,c=t.name,o=t.label,s=t.required,l=void 0!==s&&s,b=t.defaultValue,d=void 0===b?"":b,j=t.variant,f=void 0===j?"outlined":j,p=L[n],O=x.current[c],v={};return n===S.CHECKBOX?v.render=function(t){return Object(a.jsx)(p,{onChange:function(e){return t.onChange(e.target.checked)},checked:t.value,label:o})}:n===S.COLOR_PICKER?v.render=function(t){return Object(a.jsx)(p,{color:t.value,onColorChange:t.onChange,label:o})}:v.as=Object(a.jsx)(p,Object(r.a)(Object(r.a)({},0===e&&{autoFocus:!0}),{},{inputRef:O})),Object(a.jsx)(i.a,{children:Object(a.jsx)(u.Controller,Object(r.a)(Object(r.a)(Object(r.a)({control:h,defaultValue:d,name:c,label:o},f&&{variant:f}),l&&T(c)),v))},c)})),Object(a.jsx)(d.a,{direction:"bottom",spacing:"2"}),Object(a.jsx)(l.a,{container:!0,children:Object(a.jsx)(o.a,{container:!0,justify:"center",item:!0,xs:12,sm:8,md:6,children:Object(a.jsx)(b.a,{tooltip:O,text:O,type:"submit",fullWidth:!0,bg:"primary",variant:"contained"})})})]})}},781:function(t,e,n){"use strict";var r=n(99),a=n(782);e.a=function(){var t=Object(a.a)().isPaidUser,e=Object(r.a)().notifyWarning;return function(n){t?n():e("Paid feature.")}}},782:function(t,e,n){"use strict";var r=n(41),a=n(235),c=n(100);e.a=function(){var t=Object(c.a)().roles,e=Object(a.b)([r.d.DEV],t),n=Object(a.b)([r.d.DEV,r.d.PAID_USER],t);return{isFreeUser:Object(a.b)([r.d.USER],t),isPaidUser:n,isDevUser:e}}},783:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var r=n(4),a=(Object(r.shape)({search:r.string,state:Object(r.shape)({referrer:r.string,to:r.string})}).isRequired,r.string,{error:""}),c=(Object(r.shape)({params:Object(r.shape)({id:r.string.isRequired})}),{})},784:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s}));var r=n(86),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc";return function(e,n){return("desc"===t?-1:1)*(e.updatedOn.seconds-n.updatedOn.seconds)}},c=function(t){return Object.keys(t).reduce((function(e,n){var r=t[n];return e[n]="object"===typeof r&&!(r instanceof Date)&&JSON.stringify(r)||r,e}),{})},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).reduce((function(n,a){var c=t[a];return n[a]=e.includes(a)&&JSON.parse(c)||c instanceof r.a.default.firestore.Timestamp&&c.toDate()||c,n}),{})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e){return i(e,t)}},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement("textarea");r.value=t,r.style.top="0",r.style.left="0",r.style.position="fixed",document.body.appendChild(r),r.focus(),r.select();try{var a=document.execCommand("copy");if(a)return void(null===e||void 0===e||e());null===n||void 0===n||n()}catch(c){null===n||void 0===n||n()}document.body.removeChild(r)},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;navigator.clipboard?navigator.clipboard.writeText(t).then((function(){null===e||void 0===e||e()}),(function(){null===n||void 0===n||n()})):u(t,e,n)}},786:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(6),a=n(26),c=n(14),i=n(5),o=n(0),u=n(13),s=n(801),l=n(138),b=n(52),d=n(78),j=n(781),f=n(75),p=n(4);p.string,p.func.isRequired;function O(){var t=Object(c.a)(["\n\tmargin-left: -2px;\n\t",";\n"]);return O=function(){return t},t}var v=Object(u.d)(b.i)(O(),(function(t){var e=t.theme,n=t.$bg;return n&&"\n\t\t\t\t// & .MuiSvgIcon-root {\n\n\t\t\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tfill: ").concat(n," !important;\n\t\t\t\t\tcolor: ").concat(n," !important;\n\t\t\t\t\tbackground-color: ").concat(n," !important;\n\t\t\t\t// }\n\t\t")||""})),h=Object(o.forwardRef)((function(t,e){var n=t.color,c=t.onColorChange,o=Object(a.a)(t,["color","onColorChange"]),u=Object(j.a)();return Object(i.jsx)(l.a,{buttonComponent:Object(i.jsx)(d.a,{tooltip:"Pick a color",onClick:function(t){u(t)},icon:Object(i.jsx)(v,{fontSize:"small",$bg:n})}),component:Object(i.jsx)(s.a,Object(r.a)(Object(r.a)({colors:[f.b,f.c,"#f44336","#ff9800","#2196f3","#4caf50"],color:n,onChangeComplete:function(t){return c(t.hex)}},o),{},{ref:e})),passCallback:!0})}));h.defaultProps={color:""};var g=h},787:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(14),a=n(764),c=n(13);function i(){var t=Object(r.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]);return i=function(){return t},t}var o=Object(c.d)(a.a)(i())},788:function(t,e,n){"use strict";var r=n(54),a=n.n(r),c=n(79),i=n(5),o=n(0),u=n(45),s=n(184),l=n(64),b=n(775),d=n(47);e.a=function(){var t=Object(u.b)(),e=Object(o.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(s.e)(e,n,r))}),[t]),n=Object(o.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(s.a)(e,n,r))}),[t]),r=Object(o.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(s.d)(e,n,r))}),[t]),j=Object(o.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(s.c)(e,n,r))}),[t]),f=Object(o.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Yes",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"No",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return t(Object(s.b)(e,n,r,a,c,i))}),[t]),p=Object(o.useCallback)(Object(c.a)(a.a.mark((function t(){var r,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:null,n("Loading...",Object(i.jsx)(b.a,{children:Object(i.jsx)(l.a,{size:"large"})})),t.prev=2,t.next=5,null===r||void 0===r?void 0:r();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),e(Object(d.b)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[2,7]])}))),[n,e]),O=Object(o.useCallback)((function(){return t(Object(s.f)())}),[t]),v=Object(o.useCallback)((function(t){var a=e;return"html"===t?a=r:"component"===t&&(a=n),a}),[n,r,e]),h=Object(o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";v(n)(t,e)}),[v]),g=Object(o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Success",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";v(n)(t,e)}),[v]);return{openTextDialog:e,openComponentDialog:n,openHtmlDialog:r,openFormDialog:j,openConfirmDialog:f,openLoadingDialog:p,closeDialog:O,getCallbackMethod:v,displayError:h,displaySuccess:g}}},790:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(5),a=(n(0),n(98)),c=n(775),i=n(779),o=function(){return Object(r.jsx)(c.a,{vertical:!0,children:Object(r.jsx)(i.a,{children:Object(r.jsx)(a.a,{variant:"h3",component:"h1",children:"Either the slide is not found or you don't have access to it."})})})}},795:function(t,e,n){"use strict";var r=n(6),a=n(14),c=n(5),i=(n(0),n(13)),o=n(787);function u(){var t=Object(a.a)(["\n\tpadding: 10px;\n\toverflow: auto;\n\theight: 94%;\n\t","\n"]);return u=function(){return t},t}var s=Object(i.d)(o.a)(u(),(function(t){var e=t.theme;return"\n\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\tbackground-color: ").concat(e.palette.background.paper,"\n\t")}));e.a=function(t){return Object(c.jsx)(s,Object(r.a)({container:!0,item:!0,justify:"center"},t))}},796:function(t,e,n){"use strict";n.r(e),n.d(e,"TOOL_TYPES",(function(){return U})),n.d(e,"TOOL_COMPONENTS",(function(){return F})),n.d(e,"TOOLS_SETTINGS",(function(){return Q}));var r,a,c=n(53),i=n(793),o=n(780),u=n(52),s=n(5),l=(n(0),n(98)),b=n(958),d=n(928),j=n(960),f=n(943),p=n(78),O=n(778),v=n(775),h=n(777),g={0:"A",1:"B",2:"C",3:"D"},m=function(t){var e=t.question,n=t.answerA,r=t.answerB,a=t.answerC,c=t.answerD,i=t.correctAnswer,o=t.hasBg,m=t.bg;return Object(s.jsx)(h.a,{correctAnswer:i,noBg:!o,bg:m,children:function(t){var i=t.studentAnswer,o=t.onAnswer,h=t.error;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(l.a,{component:"b",color:"primary",children:["Q:"," "]}),Object(s.jsxs)(l.a,{component:"span",children:[" ",e," "]}),Object(s.jsx)(O.a,{direction:"bottom",spacing:"3"}),Object(s.jsxs)(b.a,{component:"fieldset",error:h,fullWidth:!0,children:[Object(s.jsx)(d.a,{"aria-label":"quiz",name:"quiz",value:i,onChange:o,children:[n,r,a,c].map((function(t,e){return Object(s.jsx)(j.a,{value:g[e],control:Object(s.jsx)(f.a,{}),label:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(l.a,{component:"b",color:"primary",children:[g[e],":"," "]}),t]})},g[e])}))}),Object(s.jsx)(v.a,{horizontal:!0,children:Object(s.jsx)(p.a,{tooltip:"Submit",text:"Submit",type:"submit",bg:"primary",icon:u.I})})]})]})}})},x=n(962),T=n(929),y=n(959),C=function(t){var e=t.question,n=t.correctAnswer,r=t.hasBg,a=t.bg;return Object(s.jsx)(h.a,{correctAnswer:n,noBg:!r,bg:a,children:function(t){var n=t.studentAnswer,r=t.onAnswer;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(l.a,{component:"b",color:"primary",children:["Q:"," "]}),Object(s.jsxs)(l.a,{component:"span",children:[" ",e," "]}),Object(s.jsx)(O.a,{direction:"bottom",spacing:"3"}),Object(s.jsx)(x.a,{value:n,onChange:r,onClick:function(t){t.target.focus()},name:"answer",label:"Answer",variant:"outlined",type:"search",InputProps:{endAdornment:Object(s.jsx)(T.a,{position:"start",children:Object(s.jsx)(p.a,{tooltip:"Submit",color:"primary",icon:u.I,iconSize:"small",type:"submit"})})}}),Object(s.jsx)(y.a,{children:"Case insensitive"})]})}})},w=function(t){var e=t.src,n=t.alt;return Object(s.jsx)(h.a,{noPadding:!0,noBg:!0,children:Object(s.jsx)("img",{src:e,alt:n,width:"100%",height:"100%"})})},E=function(t){var e=t.src,n=t.alt;return Object(s.jsx)(h.a,{noPadding:!0,noBg:!0,children:Object(s.jsx)("video",{src:e,alt:n,controls:!0,width:"100%",height:"100%"})})},I=function(t){var e=t.src,n=t.alt;return Object(s.jsx)(h.a,{noPadding:!0,noBg:!0,children:Object(s.jsx)("audio",{src:e,alt:n,controls:!0,width:"100%",height:"100%"})})},k=n(236),A=function(t){var e=t.url,n=t.displayText,r=t.arrow;return Object(s.jsx)(h.a,{noPadding:!0,noBg:!0,children:Object(s.jsx)(k.a,{arrow:r,to:e,external:!0,children:n})})},S=function(t){var e=t.text,n=t.hasBg,r=t.bg;return Object(s.jsx)(h.a,{noPadding:!0,noBg:!n,bg:r,children:Object(s.jsx)(l.a,{children:e})})},B=n(6),D=n(51),P=n(794),q=n.n(P),L=n(238),R=function(t){var e=q()(),n=Object(D.a)(e,2),r=n[0],a=n[1];return Object(s.jsxs)(h.a,{noPadding:!0,noBg:!0,children:[r,Object(s.jsx)(L.b,Object(B.a)(Object(B.a)({},t),{},{style:Object(B.a)({},a)}))]})},X=n(797),U={TEXT_QUESTION:"textQuestion",MULTIPLE_CHOICE_QUESTION:"multipleChoiceQuestion",IMAGE:"image",VIDEO:"video",AUDIO:"audio",LINK:"link",TEXT:"text",BITMOJI:"bitmoji",CHAT_BUBBLE:"chatBubble"},M=U.TEXT_QUESTION,$=U.MULTIPLE_CHOICE_QUESTION,N=U.IMAGE,_=U.VIDEO,H=U.AUDIO,z=U.LINK,K=U.TEXT,V=U.BITMOJI,W=U.CHAT_BUBBLE,F=(r={},Object(c.a)(r,M,C),Object(c.a)(r,$,m),Object(c.a)(r,N,w),Object(c.a)(r,_,E),Object(c.a)(r,H,I),Object(c.a)(r,z,A),Object(c.a)(r,K,S),Object(c.a)(r,V,R),Object(c.a)(r,W,X.b),r),Q={INTERACTABLE:{TEXT:{icon:u.L,name:"Q & A",type:U.TEXT_QUESTION,items:[{type:o.a.TEXT,label:"Question",name:"question",required:!0},{type:o.a.TEXT,label:"Correct Answer",name:"correctAnswer",required:!0},{type:o.a.CHECKBOX,label:"Display background",name:"hasBg",defaultValue:!0},{type:o.a.COLOR_PICKER,label:"Background color",name:"bg"}],schema:i.c().shape({question:i.e().label("Question").required(),correctAnswer:i.e().label("Correct Answer").required(),hasBg:i.a().label("Display background"),bg:i.e().label("Background color")})},MULTIPLE_CHOICE:{icon:u.y,name:"Multiple Choice",type:U.MULTIPLE_CHOICE_QUESTION,items:[{type:o.a.TEXT,label:"Question",name:"question",required:!0},{type:o.a.TEXT,label:"Answer A",name:"answerA",required:!0},{type:o.a.TEXT,label:"Answer B",name:"answerB",required:!0},{type:o.a.TEXT,label:"Answer C",name:"answerC",required:!0},{type:o.a.TEXT,label:"Answer D",name:"answerD",required:!0},{type:o.a.TEXT,label:"Correct Answer",name:"correctAnswer",required:!0},{type:o.a.CHECKBOX,label:"Display background",name:"hasBg",defaultValue:!0},{type:o.a.COLOR_PICKER,label:"Background color",name:"bg"}],schema:i.c().shape({question:i.e().label("Question").required(),answerA:i.e().label("Answer A").required(),answerB:i.e().label("Answer B").required(),answerC:i.e().label("Answer C").required(),answerD:i.e().label("Answer D").required(),correctAnswer:i.e().label("Correct Answer").length(1).oneOf(["A","B","C","D","a","b","c","d"]).required(),hasBg:i.a().label("Display background"),bg:i.e().label("Background color")})}},STATIC:{IMAGE:{icon:u.t,name:"Image",type:U.IMAGE,items:[{type:o.a.TEXT,label:"Source Url",name:"src",required:!0},{type:o.a.TEXT,label:"Alternative Text",name:"alt",required:!0}],schema:i.c().shape({src:i.e().url().label("Image Url").required(),alt:i.e().label("Image alternative text").required()})},VIDEO:{icon:u.N,name:"Video",type:U.VIDEO,items:[{type:o.a.TEXT,label:"Source Url",name:"src",required:!0},{type:o.a.TEXT,label:"Alternative Text",name:"alt",required:!0}],schema:i.c().shape({src:i.e().url().label("Video Url").required(),alt:i.e().label("Video alternative text").required()})},AUDIO:{icon:u.e,name:"Audio",type:U.AUDIO,items:[{type:o.a.TEXT,label:"Source Url",name:"src",required:!0},{type:o.a.TEXT,label:"Alternative Text",name:"alt",required:!0}],schema:i.c().shape({src:i.e().url().label("Audio Url").required(),alt:i.e().label("Audio alternative text").required()})},LINK:{icon:u.x,name:"Link",type:U.LINK,items:[{type:o.a.TEXT,label:"Url",name:"url",required:!0},{type:o.a.TEXT,label:"Display Text",name:"displayText",required:!0}],schema:i.c().shape({url:i.e().url().label("Link Url").required(),displayText:i.e().label("Display Text").required()})},TEXT:{icon:u.K,name:"Text",type:U.TEXT,items:[{type:o.a.TEXT,label:"Text",name:"text",required:!0},{type:o.a.CHECKBOX,label:"Display background",name:"hasBg",defaultValue:!0},{type:o.a.COLOR_PICKER,label:"Background color",name:"bg"}],schema:i.c().shape({text:i.e().label("Text").required(),hasBg:i.a().label("Display background"),bg:i.e().label("Background color")})},BITMOJI:{icon:u.f,name:"Bitmoji",type:U.BITMOJI},CHAT_BUBBLE:{icon:u.h,name:"Chat Bubble",type:U.CHAT_BUBBLE,items:[{type:o.a.TEXT,label:"Text",name:"text",required:!0}],schema:i.c().shape({text:i.e().label("Text").required()})}}},Y=(a={},Object(c.a)(a,M,{settings:Q.INTERACTABLE.TEXT,interactive:!0}),Object(c.a)(a,$,{settings:Q.INTERACTABLE.MULTIPLE_CHOICE,interactive:!0}),Object(c.a)(a,V,{settings:Q.STATIC.BITMOJI}),Object(c.a)(a,K,{settings:Q.STATIC.TEXT}),Object(c.a)(a,W,{settings:Q.STATIC.CHAT_BUBBLE}),Object(c.a)(a,z,{settings:Q.STATIC.LINK}),Object(c.a)(a,N,{settings:Q.STATIC.IMAGE}),Object(c.a)(a,_,{settings:Q.STATIC.VIDEO}),Object(c.a)(a,H,{settings:Q.STATIC.AUDIO}),a);e.default=Y},797:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(51),a=n(14),c=n(5),i=(n(0),n(98)),o=n(794),u=n.n(o),s=n(13),l=n(777);function b(){var t=Object(a.a)(["\n\tpadding: 10px;\n\toverflow: auto;\n\t","\n\t:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 25%;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder: 1.5em solid transparent;\n\t\t","\n\t\tborder-bottom: 0;\n\t\tborder-left: 0;\n\t\tmargin-left: -0.75em;\n\t\tmargin-bottom: -1.5em;\n\t}\n"]);return b=function(){return t},t}var d=s.d.div(b(),(function(t){var e=t.theme,n=t.$width,r=t.$height;return"\t\n\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\tborder: 2px solid ").concat(e.palette.secondary.main,";\n\t\twidth: ").concat(n,"px;\n\t\theight: ").concat(r,"px;\n\t")}),(function(t){var e=t.theme;return"\t\n\t\t\tborder-top-color: ".concat(e.palette.secondary.main,";\n\t\t")}));e.b=function(t){var e=t.text,n=u()(),a=Object(r.a)(n,2),o=a[0],s=a[1],b=s.width,j=s.height;return Object(c.jsxs)(l.a,{noPadding:!0,noBg:!0,children:[o,Object(c.jsx)(d,{$width:b,$height:j,children:Object(c.jsx)(i.a,{children:e})})]})}},800:function(t,e,n){"use strict";var r=n(14);function a(){var t=Object(r.a)(["\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\t/* height: 100%; */\n\theight: 90%;\n\t","\n"]);return a=function(){return t},t}var c=n(13).d.div(a(),(function(t){var e=t.theme;return"\n\t\tborder: 1px dashed ".concat(e.palette.getContrastText(e.palette.background.level2),";\n\t\t& svg {\n\t\t\tfill: ").concat(e.palette.getContrastText(e.palette.background.level2),";\n\t\t\t\n\t\t}\n\t")}));e.a=c},808:function(t,e,n){"use strict";var r=n(5),a=(n(0),n(80)),c=n(45),i=n(784),o=n(64),u=n(790);e.a=function(t){Object(a.useFirestoreConnect)({collection:"slides",doc:t});var e=Object(c.c)((function(e){var n=e.firestore.data;return n.slides&&n.slides[t]})),n=!Object(a.isLoaded)(e)&&Object(r.jsx)(o.a,{}),s=Object(a.isEmpty)(e)&&Object(r.jsx)(u.a,{});return{slide:e&&Object(i.b)(e,["slides"])||[],pending:n,error:s}}},811:function(t,e,n){"use strict";var r=n(54),a=n.n(r),c=n(79),i=n(6),o=n(5),u=(n(0),n(80)),s=n(45),l=n(139),b=n(784),d=n(64),j=n(790),f=n(99),p='{"lines": [],"width": "100%","height": "100%"}';e.a=function(t){var e=Object(f.a)().notifyError,n=Object(l.a)().userId,r=Object(u.useFirebase)({path:"live/".concat(t)});Object(u.useFirebaseConnect)({path:"live/".concat(t)});var O=Object(s.c)((function(e){var n=e.firebase.data.live;return n&&n[t]})),v=!Object(u.isLoaded)(O)&&Object(o.jsx)(d.a,{}),h=Object(u.isEmpty)(O)&&Object(o.jsx)(j.a,{}),g=O&&Object(b.b)(O)||[],m=Object(i.a)({},g);return{presenterCoordinates:m,createLiveOptions:function(){var o=Object(c.a)(a.a.mark((function c(o){var u,s=arguments;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u=s.length>1&&void 0!==s[1]?s[1]:t,a.prev=1,v||h||!m.x){a.next=4;break}return a.abrupt("return");case 4:return a.next=6,r.set("live/".concat(u),Object(b.e)(Object(i.a)(Object(i.a)({},o),{},{userId:n,x:"400",y:"400",page:0,drawing:p})));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e(a.t0);case 11:case"end":return a.stop()}}),c,null,[[1,8]])})));return function(t){return o.apply(this,arguments)}}(),updateLiveOptions:function(){var n=Object(c.a)(a.a.mark((function n(c,i){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.update("live/".concat(t),Object(b.e)({x:c,y:i}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t,e){return n.apply(this,arguments)}}(),updatePage:function(){var n=Object(c.a)(a.a.mark((function n(){var c,i=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.length>0&&void 0!==i[0]?i[0]:null,n.prev=1,n.next=4,r.update("live/".concat(t),Object(b.e)({page:c}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}(),updateDrawing:function(){var n=Object(c.a)(a.a.mark((function n(c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.update("live/".concat(t),Object(b.e)({drawing:c}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),clearDrawing:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.update("live/".concat(t),Object(b.e)({drawing:p}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),deleteLiveOptions:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.remove("live/".concat(t));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),liveOptions:g,pending:v,error:h}}},817:function(t,e,n){"use strict";n.d(e,"b",(function(){return M})),n.d(e,"a",(function(){return E}));var r=n(6),a=n(26),c=n(51),i=n(14),o=n(5),u=n(0),s=n(98),l=n(13),b=n(826),d=n(787),j=n(800),f=n(795),p=n(796),O=n(52),v=n(858),h=n(779),g=n(775),m=n(788),x=n(4),T=(x.string.isRequired,x.object.isRequired,Object(x.arrayOf)(x.string),x.bool,x.bool,function(t,e){var n=Object(u.useState)(1),r=Object(c.a)(n,2),a=r[0],i=r[1],o=Object(u.useState)(0),s=Object(c.a)(o,2),l=s[0],b=s[1],d=Object(u.useState)(!0),j=Object(c.a)(d,2),f=j[0],p=j[1],O=Object(u.useState)(!1),v=Object(c.a)(O,2),h=v[0],g=v[1];Object(u.useEffect)((function(){i(t.length)}),[t]),Object(u.useEffect)((function(){p(0===l),g(l+1===a)}),[l,a]);return{index:l,setIndex:b,isPreviousDisabled:f,isNextDisabled:h,onPrevious:function(){return b((function(t){var n=t-1;return null===e||void 0===e||e(n),n}))},onNext:function(){return b((function(t){var n=t+1;return null===e||void 0===e||e(n),n}))},onRestart:function(){null===e||void 0===e||e(0),b(0)}}}),y=n(78);function C(){var t=Object(i.a)(["\n\tposition: absolute;\n\tz-index: 1301;\n\ttop: ",";\n\n\t",";\n"]);return C=function(){return t},t}var w="40vh",E=Object(l.d)(y.a)(C(),w,(function(t){var e=t.theme,n=t.$left,r=t.$bottomCenter,a=t.$idle,c=t.$rightBottom,i=r&&"\t\n\t\t\t\t\ttop: auto;\n\t\t\t\t\tbottom: ".concat(40,"px;\n\t\t")||"".concat(n?"left":"right",": ").concat(20,"px;");return"\n\t\t\t".concat(i,"\n\t\t\t& .MuiSvgIcon-root {\n\t\t\t\ttransition: ").concat(e.transitions.duration.standard,"ms;\n\t\t\t\tfont-size: ").concat(a?"0":70,"px;\n\t\t\t}\n\t\t\t").concat(c&&"top: calc(".concat(w," + ").concat(105,"px);")||"","\n\t\t")})),I=n(793),k=n(780),A=n(99),S=I.c().shape({rating:I.b().label("Rating").oneOf([1,2,3,4,5]).typeError("Must be a number, between 1 to 5.").required(),whatDidYouLike:I.e().label("What Did You Like").required(),whatDidYouDislike:I.e().label("What Did You Dislike").required()}),B=[{type:k.a.TEXT,label:"Rating",name:"rating",required:!0},{type:k.a.TEXT,label:"What Did You Like",name:"whatDidYouLike",required:!0},{type:k.a.TEXT,label:"What Did You Dislike",name:"whatDidYouDislike",required:!0}],D=function(t){var e=t.setSent,n=Object(m.a)().closeDialog,r=Object(A.a)().notifySuccess;return Object(o.jsx)(k.b,{schema:S,items:B,onSubmit:function(){r("Feedback submission was successfully sent!"),n(),e(!0)}})};function P(){var t=Object(i.a)(["\n\tposition: absolute;\n\t","\n"]);return P=function(){return t},t}var q=l.d.div(P(),(function(t){var e=t.theme,n=t.$positionProps,r=n.rotate,a=n.translateXY,i=n.widthHeight,o=n.topLeft,u=Object(c.a)(a,2),s=u[0],l=u[1],b=Object(c.a)(i,2),d=b[0],j=b[1],f=Object(c.a)(o,2),p=f[0],O=f[1];return"\n\t\t\tborderRadius: ".concat(e.shape.borderRadius,";\n\t\t\ttransform: translate(").concat(s,"px, ").concat(l,"px) rotate(").concat(r,"deg);\n\t\t\ttop: ").concat(p,"px;\n\t\t\tleft: ").concat(O,"px;\n\t\t\twidth: ").concat(d,"px;\n\t\t\theight: ").concat(j,"px;\n\t\t")})),L=function(t){var e=t.frames,n=t.draggableId,c=e[n],i=(c.draggableType,c.componentType),u=c.componentProps,s=Object(a.a)(c,["draggableType","componentType","componentProps"]);if(!i)return null;var l=p.TOOL_COMPONENTS[i];return Object(o.jsx)(q,{"draggable-type":i,id:n,$positionProps:s,children:Object(o.jsx)(l,Object(r.a)({},u))},n)},R=function(t){var e=t.frames,n=t.index;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g.a,{container:!0,alignItems:"flex-end",children:Object(o.jsxs)(s.a,{children:[" Slide ",n+1," "]})}),Object(o.jsx)(j.a,{children:Object.keys(e).map((function(t){return Object(o.jsx)(L,{frames:e,draggableId:t},t)}))})]})},X=function(t){return Object.keys(t).map((function(e,n){return{key:e,frames:t[e].frames,index:n}}))},U=function(t){var e=t.slides,n=t.page,a=t.onPageSelect,i=t.showButtons,l=t.hasSubmit,j=Object(m.a)().openComponentDialog,p=Object(u.useState)((function(){return X(e)})),x=Object(c.a)(p,2),y=x[0],C=x[1],w=T(y,a),I=w.index,k=w.setIndex,A=w.isPreviousDisabled,S=w.isNextDisabled,B=w.onPrevious,P=w.onNext,q=w.onRestart;Object(v.a)((function(){var t=X(e);C(t);var n=t.length;k((function(t){var e=I>=n?n>=1&&n-1||0:t;return null===a||void 0===a||a(e),e}))}),[e]);var L=Object(u.useState)(!1),U=Object(c.a)(L,2),M=U[0],$=U[1];Object(b.a)({timeout:3e3,onIdle:function(){return $(!0)},onActive:function(){return $(!1)},debounce:500});var N=Object(u.useState)(!1),_=Object(c.a)(N,2),H=_[0],z=_[1];return Object(o.jsx)(d.a,{children:(null===y||void 0===y?void 0:y.length)&&Object(o.jsxs)(f.a,{style:{position:"relative",overflow:"hidden"},children:[i&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E,{$left:!0,$idle:M,tooltip:"Previous",icon:O.C,onClick:B,disabled:A}),!S&&Object(o.jsx)(E,{$idle:M,tooltip:"Next",icon:O.z,onClick:P,disabled:S})||Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E,{$idle:M,tooltip:"Restart",icon:O.D,onClick:q}),l&&!H&&Object(o.jsx)(E,{$idle:M,$rightBottom:!0,tooltip:"Submit Feedback",icon:O.I,onClick:function(){j("Feedback",Object(o.jsx)(D,{setSent:z}))}})]})]}),Object(o.jsx)(R,Object(r.a)({},y[n||I]))]})||Object(o.jsx)(g.a,{vertical:!0,children:Object(o.jsx)(h.a,{children:Object(o.jsx)(s.a,{variant:"h3",component:"h1",children:"Either the slide does not exist or it's empty."})})})})};U.defaultProps={presenterPosition:null,showButtons:!0,hasSubmit:!1};var M=U},855:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(6),a=n(5),c=n(0),i=n(890),o=Object(c.forwardRef)((function(t,e){return Object(a.jsx)(i.a,Object(r.a)(Object(r.a)({},t),{},{style:Object(r.a)(Object(r.a)({},t.style||{}),{},{position:"absolute"}),ref:e}))})),u=n(58),s=function(t){var e=Object(u.a)(),n=Object(c.useRef)();return{canvasProps:Object(r.a)({loadTimeOffset:5,lazyRadius:5,brushRadius:2,brushColor:e.palette.secondary.main,backgroundColor:"transparent",catenaryColor:e.palette.primary.main,hideGrid:!0,canvasWidth:"100%",canvasHeight:"100%"},t),canvasRef:n}}},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(250),a=n(249),c=n(244),i=n(5),o=n(0),u=n.n(o),s=function t(e,n){Object(c.a)(this,t),this.x=e,this.y=n,this.lifetime=0},l=function(t){Object(r.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={cHeight:0,cWidth:0},t.canvas=u.a.createRef(),t.points=[],t.addPoint=function(e,n){var r=new s(e,n);t.points.push(r)},t.componentDidMount=function(){t.setState({cHeight:document.body.clientHeight,cWidth:document.body.clientWidth}),window.addEventListener("resize",(function(){t.setState({cHeight:document.body.clientHeight,cWidth:document.body.clientWidth})}),!1),matchMedia("(pointer:fine)").matches&&t.startAnimation()},t.componentDidUpdate=function(){var e=t.props.points;if(e){var n=e.x,r=e.y;t.addPoint(n,r)}},t.startAnimation=function(){var e=t.canvas.current,n=e.getContext("2d");t.props.points||document.addEventListener("mousemove",(function(n){var r,a,c=n.clientX,i=n.clientY;t.addPoint(c-e.offsetLeft,i-e.offsetTop),null===(r=(a=t.props).onMouseMove)||void 0===r||r.call(a,c-e.offsetLeft,i-e.offsetTop)}),!1);!function e(){n.clearRect(0,0,n.canvas.width,n.canvas.height);for(var r=700/60,a=0;a<t.points.length;++a){var c=t.points[a],i=void 0;if(i=void 0!==t.points[a-1]?t.points[a-1]:c,c.lifetime+=1,c.lifetime>r)t.points.shift();else{var o=c.lifetime/r,u=7*(1-o);n.lineJoin="round",n.lineWidth=u;var s=Math.floor(255-255*o),l=Math.floor(73+73*o);n.strokeStyle="rgb(".concat(s,",").concat(178,",").concat(l),n.beginPath(),n.moveTo(i.x,i.y),n.lineTo(c.x,c.y),n.stroke(),n.closePath()}}requestAnimationFrame(e)}()},t.render=function(){var e=t.state,n=e.cHeight,r=e.cWidth;return Object(i.jsx)("canvas",{style:{position:"absolute",top:0,left:0,right:0,zIndex:1,pointerEvents:"none"},ref:t.canvas,width:r,height:n})},t}return n}(u.a.Component)}}]);