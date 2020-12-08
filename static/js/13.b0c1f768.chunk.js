(this["webpackJsonpslide-scott"]=this["webpackJsonpslide-scott"]||[]).push([[13,3],{713:function(t,e,n){"use strict";n.r(e);var r=n(6),a=n(77),c=n(5),o=n(0),i=n(823),s=n(856),u=n(774),l=n(857),b=n(814),d=n(805),j=n(808),f=n(78),p=n(780),O=function(t){var e=t.match.params.id,n=Object(o.useState)(!1),p=Object(a.a)(n,2),O=p[0],v=p[1];Object(i.a)({timeout:3e3,onIdle:function(){return v(!0)},onActive:function(){return v(!1)},debounce:500});var h=Object(o.useState)(0),g=Object(a.a)(h,2),m=g[0],x=g[1],T=Object(d.a)(e),y=T.slide,w=T.pending,C=T.error,E=Object(j.a)(e),k=E.presenterCoordinates,A=E.updateLiveOptions,I=E.updatePage,S=E.updateDrawing,B=E.clearDrawing,P=Object(s.b)({onChange:function(t){var e=(0,t.getSaveData)();S(e)}}),D=P.canvasProps,q=P.canvasRef,L=Object(o.useRef)(!1);return Object(o.useEffect)((function(){if(!L.current){if(!k.drawing)return;q.current.loadSaveData(k.drawing),L.current=!0}}),[k.drawing]),Object(c.jsxs)(u.a,{vertical:!0,style:{overflow:"hidden"},children:[Object(c.jsx)(l.a,{onMouseMove:A,page:m},m),Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({},D),{},{ref:q})),Object(c.jsx)(b.a,{$bottomCenter:!0,$idle:O,tooltip:"Clear Drawings",icon:f.i,onClick:function(){q.current.clear(),B()}}),w||C||Object(c.jsx)(b.b,Object(r.a)({onPageSelect:function(t){x(t),I(t)}},y))]})};O.defaultProps=p.b,e.default=O},774:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(6),a=n(28),c=n(16),o=n(5),i=(n(0),n(13)),s=n(763),u=n(4);u.node,u.bool,u.bool;function l(){var t=Object(c.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t","\n"]);return l=function(){return t},t}var b=Object(i.d)(s.a)(l(),(function(t){var e=t.$horizontal,n=t.$vertical;return"\n\t\t".concat(e&&"justify-content: center;","\n\t\t").concat(n&&"height: 100%; align-items: center;","\n\t")})),d=function(t){var e=t.children,n=t.horizontal,c=t.vertical,i=Object(a.a)(t,["children","horizontal","vertical"]);return Object(o.jsx)(b,Object(r.a)(Object(r.a)({$horizontal:n,$vertical:c},i),{},{children:e}))};d.defaultProps={children:"",horizontal:!0,vertical:!1};var j=d},776:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(5),a=(n(0),n(16));function c(){var t=Object(a.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\t","\n"]);return c=function(){return t},t}var o=n(13).d.span(c(),(function(t){var e=t.theme,n=t.$direction,r=t.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(e.spacing(r),"px;\n\t")})),i=n(36),s=(i.d.isRequired,i.h,function(t){var e=t.direction,n=t.spacing;return Object(r.jsx)(o,{$direction:e,$spacing:"string"===typeof n&&parseInt(n,10)||n})});s.defaultProps={spacing:1};var u=s},777:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(6),a=n(77),c=n(28),o=n(16),i=n(5),s=n(0),u=n(235),l=n(765),b=n(13),d=n(774),j=n(4);j.object,j.object,j.bool;function f(){var t=Object(o.a)(["\n\t","\n"]);return f=function(){return t},t}function p(){var t=Object(o.a)(["\n\twidth: 100%;\n\ttext-align: left;\n\t","\n"]);return p=function(){return t},t}var O=Object(b.d)(u.a)(p(),(function(t){var e,n=t.theme,r=t.$bg;return"\n\t\t// margin-bottom: ".concat(n.spacing(2),"px;\n\t\tbackground-color: ").concat(r&&((null===(e=n.palette[r])||void 0===e?void 0:e.main)||n.palette.background[r]||r)||n.palette.background.paper,";\n\t")})),v=b.d.div(f(),(function(t){var e=t.theme;return"\n\t\t& * {\n\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t}\n\t")})),h=function(t){var e=t.containerProps,n=t.paperProps,o=t.noBg,u=Object(c.a)(t,["containerProps","paperProps","noBg"]),b=Object(s.useState)(!1),j=Object(a.a)(b,2),f=j[0],p=j[1],h=Object(i.jsx)(l.a,Object(r.a)({py:2,px:4,textAlign:"left"},u));return Object(i.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{children:o&&Object(i.jsx)(v,{children:h})||Object(i.jsx)(O,Object(r.a)(Object(r.a)({elevation:f?3:1,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},n),{},{children:h}))}))};h.defaultProps={containerProps:{},paperProps:{},noBg:!1};var g=h},778:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(16),a=n(763),c=n(13);function o(){var t=Object(r.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]);return o=function(){return t},t}var i=Object(c.d)(a.a)(o())},779:function(t,e,n){"use strict";n.d(e,"b",(function(){return R})),n.d(e,"a",(function(){return S}));var r=n(6),a=n(5),c=n(0),o=n(960),i=n(763),s=n(795),u=n(804),l=n(774),b=n(61),d=n(776),j=n(46),f=n(16),p=n(13),O=n(962);function v(){var t=Object(f.a)(["\n\t","\n"]);return v=function(){return t},t}var h=Object(p.d)(O.a)(v(),(function(t){var e=t.theme;return"\n\t\tmargin-bottom: ".concat(e.spacing(2),"px;\n\t")})),g=Object(c.forwardRef)((function(t,e){return Object(a.jsx)(h,Object(r.a)(Object(r.a)({type:"password"},t),{},{ref:e}))})),m=n(28),x=n(959),T=n(770),y=n(4),w=Object(c.forwardRef)((function(t,e){var n=t.label,c=Object(m.a)(t,["label"]);return Object(a.jsx)(x.a,{control:Object(a.jsx)(T.a,Object(r.a)(Object(r.a)({color:"primary"},c),{},{ref:e})),label:n})}));w.propTypes={label:y.string.isRequired};var C=w,E=n(784),k=Object(c.forwardRef)((function(t,e){var n=t.label,c=Object(m.a)(t,["label"]);return Object(a.jsx)(x.a,{control:Object(a.jsx)(E.a,Object(r.a)(Object(r.a)({},c),{},{ref:e})),label:n})}));k.propTypes={label:y.string.isRequired};var A,I=k,S={TEXT:"text",PASSWORD:"password",CHECKBOX:"checkbox",COLOR_PICKER:"colorPicker"},B=S.TEXT,P=S.PASSWORD,D=S.CHECKBOX,q=S.COLOR_PICKER,L=(A={},Object(j.a)(A,B,h),Object(j.a)(A,P,g),Object(j.a)(A,D,C),Object(j.a)(A,q,I),A),R=function(t){var e=t.items,n=t.schema,j=t.onSubmit,f=t.defaultValues,p=t.submitText,O=void 0===p?"Submit":p,v=Object(s.useForm)({resolver:Object(u.yupResolver)(n),defaultValues:f}),h=v.control,g=v.handleSubmit,m=v.errors,x=v.watch;console.log(x());var T=Object(c.useRef)({});Object(c.useEffect)((function(){e.forEach((function(t){var e=t.name;T.current[e]=Object(c.createRef)()}))}),[e]);var y=function(t){var e={required:!0,rules:{required:!0}},n=m[t];return n&&(e.helperText="".concat(n.message),e.error=!0),e};return Object(c.useEffect)((function(){})),Object(a.jsxs)("form",{onSubmit:g(j,(function(t){var e=Object.keys(t);if(e.length){var n,r,a=e[0];if(null===(n=T.current)||void 0===n||null===(r=n[a])||void 0===r?void 0:r.current)return void T.current[a].current.focus();setTimeout((function(){var t,e,n;null===(t=T.current)||void 0===t||null===(e=t[a])||void 0===e||null===(n=e.current)||void 0===n||n.focus()}),100)}})),noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(d.a,{direction:"bottom",spacing:"2"}),e.map((function(t,e){var n=t.type,c=t.name,i=t.label,u=t.required,l=void 0!==u&&u,b=t.defaultValue,d=void 0===b?"":b,j=t.variant,f=void 0===j?"outlined":j,p=L[n],O=T.current[c],v={};return n===S.CHECKBOX?v.render=function(t){return Object(a.jsx)(p,{onChange:function(e){return t.onChange(e.target.checked)},checked:t.value,label:i})}:n===S.COLOR_PICKER?v.render=function(t){return Object(a.jsx)(p,{color:t.value,onColorChange:t.onChange,label:i})}:v.as=Object(a.jsx)(p,Object(r.a)(Object(r.a)({},0===e&&{autoFocus:!0}),{},{inputRef:O})),Object(a.jsx)(o.a,{children:Object(a.jsx)(s.Controller,Object(r.a)(Object(r.a)(Object(r.a)({control:h,defaultValue:d,name:c,label:i},f&&{variant:f}),l&&y(c)),v))},c)})),Object(a.jsx)(d.a,{direction:"bottom",spacing:"2"}),Object(a.jsx)(l.a,{container:!0,children:Object(a.jsx)(i.a,{container:!0,justify:"center",item:!0,xs:12,sm:8,md:6,children:Object(a.jsx)(b.a,{tooltip:O,text:O,type:"submit",fullWidth:!0,bg:"primary",variant:"contained"})})})]})}},780:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var r=n(4),a=(Object(r.shape)({search:r.string,state:Object(r.shape)({referrer:r.string,to:r.string})}).isRequired,r.string,{error:""}),c=(Object(r.shape)({params:Object(r.shape)({id:r.string.isRequired})}),{})},781:function(t,e,n){"use strict";var r=n(137),a=n(44),c=n(236),o=n(100),i=function(){var t=Object(o.a)().roles,e=Object(c.b)([a.d.DEV],t),n=Object(c.b)([a.d.DEV,a.d.PAID_USER],t);return{isFreeUser:Object(c.b)([a.d.USER],t),isPaidUser:n,isDevUser:e}};e.a=function(){var t=i().isPaidUser,e=Object(r.a)().notifyWarning;return function(n){t?n():e("Paid feature.")}}},782:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n(141),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc";return function(e,n){return("desc"===t?-1:1)*(e.updatedOn.seconds-n.updatedOn.seconds)}},c=function(t){return Object.keys(t).reduce((function(e,n){var r=t[n];return e[n]="object"===typeof r&&!(r instanceof Date)&&JSON.stringify(r)||r,e}),{})},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).reduce((function(n,a){var c=t[a];return n[a]=e.includes(a)&&JSON.parse(c)||c instanceof r.a.default.firestore.Timestamp&&c.toDate()||c,n}),{})},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e){return o(e,t)}},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement("textarea");r.value=t,r.style.top="0",r.style.left="0",r.style.position="fixed",document.body.appendChild(r),r.focus(),r.select();try{var a=document.execCommand("copy");if(a)return void(null===e||void 0===e||e());null===n||void 0===n||n()}catch(c){null===n||void 0===n||n()}document.body.removeChild(r)},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;navigator.clipboard?navigator.clipboard.writeText(t).then((function(){null===e||void 0===e||e()}),(function(){null===n||void 0===n||n()})):s(t,e,n)}},784:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(6),a=n(28),c=n(16),o=n(5),i=n(0),s=n(13),u=n(798),l=n(138),b=n(78),d=n(61),j=n(781),f=n(74),p=n(4);p.string,p.func.isRequired;function O(){var t=Object(c.a)(["\n\tmargin-left: -2px;\n\t",";\n"]);return O=function(){return t},t}var v=Object(s.d)(b.h)(O(),(function(t){var e=t.theme,n=t.$bg;return n&&"\n\t\t\t\t// & .MuiSvgIcon-root {\n\n\t\t\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tfill: ").concat(n," !important;\n\t\t\t\t\tcolor: ").concat(n," !important;\n\t\t\t\t\tbackground-color: ").concat(n," !important;\n\t\t\t\t// }\n\t\t")||""})),h=Object(i.forwardRef)((function(t,e){var n=t.color,c=t.onColorChange,i=Object(a.a)(t,["color","onColorChange"]),s=Object(j.a)();return Object(o.jsx)(l.a,{buttonComponent:Object(o.jsx)(d.a,{tooltip:"Pick a color",onClick:function(t){s(t)},icon:Object(o.jsx)(v,{fontSize:"small",$bg:n})}),component:Object(o.jsx)(u.a,Object(r.a)(Object(r.a)({colors:[f.b,f.c,"#f44336","#ff9800","#2196f3","#4caf50"],color:n,onChangeComplete:function(t){return c(t.hex)}},i),{},{ref:e})),passCallback:!0})}));h.defaultProps={color:""};var g=h},785:function(t,e,n){"use strict";var r=n(50),a=n.n(r),c=n(79),o=n(5),i=n(0),s=n(43),u=n(185),l=n(62),b=n(774),d=n(52);e.a=function(){var t=Object(s.b)(),e=Object(i.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(u.e)(e,n,r))}),[t]),n=Object(i.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(u.a)(e,n,r))}),[t]),r=Object(i.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(u.d)(e,n,r))}),[t]),j=Object(i.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(Object(u.c)(e,n,r))}),[t]),f=Object(i.useCallback)((function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Yes",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"No",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return t(Object(u.b)(e,n,r,a,c,o))}),[t]),p=Object(i.useCallback)(Object(c.a)(a.a.mark((function t(){var r,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:null,n("Loading...",Object(o.jsx)(b.a,{children:Object(o.jsx)(l.a,{size:"large"})})),t.prev=2,t.next=5,null===r||void 0===r?void 0:r();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),e(Object(d.a)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[2,7]])}))),[n,e]),O=Object(i.useCallback)((function(){return t(Object(u.f)())}),[t]),v=Object(i.useCallback)((function(t){var a=e;return"html"===t?a=r:"component"===t&&(a=n),a}),[n,r,e]),h=Object(i.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";v(n)(t,e)}),[v]),g=Object(i.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Success",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";v(n)(t,e)}),[v]);return{openTextDialog:e,openComponentDialog:n,openHtmlDialog:r,openFormDialog:j,openConfirmDialog:f,openLoadingDialog:p,closeDialog:O,getCallbackMethod:v,displayError:h,displaySuccess:g}}},787:function(t,e,n){"use strict";var r=n(6),a=n(16),c=n(5),o=(n(0),n(13)),i=n(778);function s(){var t=Object(a.a)(["\n\tpadding: 10px;\n\toverflow: auto;\n\theight: 95%;\n\t","\n"]);return s=function(){return t},t}var u=Object(o.d)(i.a)(s(),(function(t){var e=t.theme;return"\n\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\tbackground-color: ").concat(e.palette.background.paper,"\n\t")}));e.a=function(t){return Object(c.jsx)(u,Object(r.a)({container:!0,item:!0,justify:"center"},t))}},788:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(5),a=(n(0),n(99)),c=n(774),o=n(777),i=function(){return Object(r.jsx)(c.a,{vertical:!0,children:Object(r.jsx)(o.a,{children:Object(r.jsx)(a.a,{variant:"h3",component:"h1",children:"Either the slide is not found or you don't have access to it."})})})}},790:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(6),a=n(28),c=n(16),o=n(5),i=(n(0),n(99)),s=n(71),u=n(13),l=n(4);l.string.isRequired,l.bool,l.bool;function b(){var t=Object(c.a)(["\n\t","\n"]);return b=function(){return t},t}var d=Object(u.d)(i.a)(b(),(function(t){var e=t.theme,n=t.$arrow,r=t.$color;return"\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\tcolor: ".concat(r||e.palette.primary.main,";\n\t\ttext-decoration: none;\n\t\t").concat(n?"\n\t\t\t\t\t&::after {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tmargin-left: 5px;\n\t\t\t\t\t\ttransition: margin 0.25s ease-out;\n\t\t\t\t\t\tcontent: '\u2192';\n\t\t\t\t\t}\n\t\t\t\t\t&:hover::after {\n\t\t\t\t\t\tmargin-left: 10px;\n\t\t\t\t\t}\n\t\t\t\t":"","\n\t\t\t\t\n\n\t\t&::before {\n\t\t\tposition: absolute;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 1.5px;\n\t\t\tbackground-color: ").concat(r||e.palette.primary.main,";\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: bottom right;\n\t\t\ttransition: transform 0.25s ease-out;\n\t\t\tcontent: '';\n\t\t}\n\t\t&:hover::before {\n\t\t\theight: 1.5px;\n\t\t\ttransform: scaleX(1);\n\t\t\ttransform-origin: bottom left;\n\t\t}\n\t")})),j=function(t){var e=t.external,n=t.to,c=t.arrow,i=Object(a.a)(t,["external","to","arrow"]);return Object(o.jsx)(d,Object(r.a)(Object(r.a)({$arrow:c},e&&{component:"a",href:n,target:"_blank"}||{to:n,component:s.b}),i))};j.defaultProps={external:!1,arrow:!1};var f=j},793:function(t,e,n){"use strict";n.r(e),n.d(e,"TOOL_TYPES",(function(){return F})),n.d(e,"TOOL_COMPONENTS",(function(){return rt})),n.d(e,"TOOLS_SETTINGS",(function(){return at}));var r=n(46),a=n(792),c=n(779),o=n(78),i=n(5),s=n(0),u=n(99),l=n(957),b=n(927),d=n(959),j=n(942),f=n(61),p=n(776),O=n(774),v=n(6),h=n(28),g=n(777),m=n(77),x=n(137),T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(s.useState)(!1),n=Object(m.a)(e,2),r=n[0],a=n[1],c=Object(s.useState)(""),o=Object(m.a)(c,2),i=o[0],u=o[1],l=Object(x.a)(),b=l.notifySuccess,d=l.notifyError,j=function(t){var e;u("string"===typeof t&&t||(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||"")},f=function(e){if(e.preventDefault(),i.toLowerCase()===t.toLowerCase())return a(!1),void b("Correct answer!");a(!0),d("Wrong answer!")};return{studentAnswer:i,error:r,onAnswer:j,onSubmit:f}},y=function(t){var e=t.correctAnswer,n=t.children,r=T(e),a=r.onSubmit,c=Object(h.a)(r,["onSubmit"]);return Object(i.jsx)("form",{onSubmit:a,children:n(Object(v.a)({},c))})},w=function(t){var e=t.noPadding,n=t.noBg,r=t.bg,a=t.correctAnswer,c=t.children,o=Object(h.a)(t,["noPadding","noBg","bg","correctAnswer","children"]);return Object(i.jsx)(g.a,Object(v.a)(Object(v.a)(Object(v.a)({containerProps:{style:{height:"100%"}},noBg:n},e&&{p:"0! important"}),{},{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},o),{},{paperProps:Object(v.a)(Object(v.a)({},o.paperProps||{}),{},{$bg:r}),children:a&&Object(i.jsx)(y,{correctAnswer:a,children:c})||c}))},C={0:"A",1:"B",2:"C",3:"D"},E=function(t){var e=t.question,n=t.answerA,r=t.answerB,a=t.answerC,c=t.answerD,s=t.correctAnswer,v=t.hasBg,h=t.bg;return Object(i.jsx)(w,{correctAnswer:s,noBg:!v,bg:h,children:function(t){var s=t.studentAnswer,v=t.onAnswer,h=t.error;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(u.a,{component:"b",color:"primary",children:["Q:"," "]}),Object(i.jsxs)(u.a,{component:"span",children:[" ",e," "]}),Object(i.jsx)(p.a,{direction:"bottom",spacing:"3"}),Object(i.jsxs)(l.a,{component:"fieldset",error:h,fullWidth:!0,children:[Object(i.jsx)(b.a,{"aria-label":"quiz",name:"quiz",value:s,onChange:v,children:[n,r,a,c].map((function(t,e){return Object(i.jsx)(d.a,{value:C[e],control:Object(i.jsx)(j.a,{}),label:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(u.a,{component:"b",color:"primary",children:[C[e],":"," "]}),t]})},C[e])}))}),Object(i.jsx)(O.a,{horizontal:!0,children:Object(i.jsx)(f.a,{tooltip:"Submit",text:"Submit",type:"submit",bg:"primary",icon:o.G})})]})]})}})},k=n(962),A=n(928),I=n(958),S=function(t){var e=t.question,n=t.correctAnswer,r=t.hasBg,a=t.bg;return Object(i.jsx)(w,{correctAnswer:n,noBg:!r,bg:a,children:function(t){var n=t.studentAnswer,r=t.onAnswer;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(u.a,{component:"b",color:"primary",children:["Q:"," "]}),Object(i.jsxs)(u.a,{component:"span",children:[" ",e," "]}),Object(i.jsx)(p.a,{direction:"bottom",spacing:"3"}),Object(i.jsx)(k.a,{value:n,onChange:r,onClick:function(t){t.target.focus()},name:"answer",label:"Answer",variant:"outlined",type:"search",InputProps:{endAdornment:Object(i.jsx)(A.a,{position:"start",children:Object(i.jsx)(f.a,{tooltip:"Submit",color:"primary",icon:o.G,iconSize:"small",type:"submit"})})}}),Object(i.jsx)(I.a,{children:"Case insensitive"})]})}})},B=function(t){var e=t.src,n=t.alt;return Object(i.jsx)(w,{noPadding:!0,noBg:!0,children:Object(i.jsx)("img",{src:e,alt:n,width:"100%",height:"100%"})})},P=function(t){var e=t.src,n=t.alt;return Object(i.jsx)(w,{noPadding:!0,noBg:!0,children:Object(i.jsx)("video",{src:e,alt:n,controls:!0,width:"100%",height:"100%"})})},D=function(t){var e=t.src,n=t.alt;return Object(i.jsx)(w,{noPadding:!0,noBg:!0,children:Object(i.jsx)("audio",{src:e,alt:n,controls:!0,width:"100%",height:"100%"})})},q=n(790),L=function(t){var e=t.url,n=t.displayText,r=t.arrow;return Object(i.jsx)(w,{noPadding:!0,noBg:!0,children:Object(i.jsx)(q.a,{arrow:r,to:e,external:!0,children:n})})},R=function(t){var e=t.text,n=t.hasBg,r=t.bg;return Object(i.jsx)(w,{noPadding:!0,noBg:!n,bg:r,children:Object(i.jsx)(u.a,{children:e})})},X=n(797),U=n.n(X),$=n(241),M=function(t){var e=U()(),n=Object(m.a)(e,2),r=n[0],a=n[1];return Object(i.jsxs)(w,{noPadding:!0,noBg:!0,children:[r,Object(i.jsx)($.b,Object(v.a)(Object(v.a)({},t),{},{style:Object(v.a)({},a)}))]})},_=n(16);function N(){var t=Object(_.a)(["\n\tpadding: 10px;\n\toverflow: auto;\n\t","\n\t:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 25%;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder: 1.5em solid transparent;\n\t\t","\n\t\tborder-bottom: 0;\n\t\tborder-left: 0;\n\t\tmargin-left: -0.75em;\n\t\tmargin-bottom: -1.5em;\n\t}\n"]);return N=function(){return t},t}var H,V,W=n(13).d.div(N(),(function(t){var e=t.theme,n=t.$width,r=t.$height;return"\t\n\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\tborder: 2px solid ").concat(e.palette.secondary.main,";\n\t\twidth: ").concat(n,"px;\n\t\theight: ").concat(r,"px;\n\t")}),(function(t){var e=t.theme;return"\t\n\t\t\tborder-top-color: ".concat(e.palette.secondary.main,";\n\t\t")})),z=function(t){var e=t.text,n=U()(),r=Object(m.a)(n,2),a=r[0],c=r[1],o=c.width,s=c.height;return Object(i.jsxs)(w,{noPadding:!0,noBg:!0,children:[a,Object(i.jsx)(W,{$width:o,$height:s,children:Object(i.jsx)(u.a,{children:e})})]})},F={TEXT_QUESTION:"textQuestion",MULTIPLE_CHOICE_QUESTION:"multipleChoiceQuestion",IMAGE:"image",VIDEO:"video",AUDIO:"audio",LINK:"link",TEXT:"text",BITMOJI:"bitmoji",CHAT_BUBBLE:"chatBubble"},K=F.TEXT_QUESTION,Q=F.MULTIPLE_CHOICE_QUESTION,Y=F.IMAGE,J=F.VIDEO,G=F.AUDIO,Z=F.LINK,tt=F.TEXT,et=F.BITMOJI,nt=F.CHAT_BUBBLE,rt=(H={},Object(r.a)(H,K,S),Object(r.a)(H,Q,E),Object(r.a)(H,Y,B),Object(r.a)(H,J,P),Object(r.a)(H,G,D),Object(r.a)(H,Z,L),Object(r.a)(H,tt,R),Object(r.a)(H,et,M),Object(r.a)(H,nt,z),H),at={INTERACTABLE:{TEXT:{icon:o.J,name:"Q & A",type:F.TEXT_QUESTION,items:[{type:c.a.TEXT,label:"Question",name:"question",required:!0},{type:c.a.TEXT,label:"Correct Answer",name:"correctAnswer",required:!0},{type:c.a.CHECKBOX,label:"Display background",name:"hasBg",defaultValue:!0},{type:c.a.COLOR_PICKER,label:"Background color",name:"bg"}],schema:a.c().shape({question:a.e().label("Question").required(),correctAnswer:a.e().label("Correct Answer").required(),hasBg:a.a().label("Display background"),bg:a.e().label("Background color")})},MULTIPLE_CHOICE:{icon:o.w,name:"Multiple Choice",type:F.MULTIPLE_CHOICE_QUESTION,items:[{type:c.a.TEXT,label:"Question",name:"question",required:!0},{type:c.a.TEXT,label:"Answer A",name:"answerA",required:!0},{type:c.a.TEXT,label:"Answer B",name:"answerB",required:!0},{type:c.a.TEXT,label:"Answer C",name:"answerC",required:!0},{type:c.a.TEXT,label:"Answer D",name:"answerD",required:!0},{type:c.a.TEXT,label:"Correct Answer",name:"correctAnswer",required:!0},{type:c.a.CHECKBOX,label:"Display background",name:"hasBg",defaultValue:!0},{type:c.a.COLOR_PICKER,label:"Background color",name:"bg"}],schema:a.c().shape({question:a.e().label("Question").required(),answerA:a.e().label("Answer A").required(),answerB:a.e().label("Answer B").required(),answerC:a.e().label("Answer C").required(),answerD:a.e().label("Answer D").required(),correctAnswer:a.e().label("Correct Answer").length(1).oneOf(["A","B","C","D","a","b","c","d"]).required(),hasBg:a.a().label("Display background"),bg:a.e().label("Background color")})}},STATIC:{IMAGE:{icon:o.r,name:"Image",type:F.IMAGE,items:[{type:c.a.TEXT,label:"Source Url",name:"src",required:!0},{type:c.a.TEXT,label:"Alternative Text",name:"alt",required:!0}],schema:a.c().shape({src:a.e().url().label("Image Url").required(),alt:a.e().label("Image alternative text").required()})},VIDEO:{icon:o.L,name:"Video",type:F.VIDEO,items:[{type:c.a.TEXT,label:"Source Url",name:"src",required:!0},{type:c.a.TEXT,label:"Alternative Text",name:"alt",required:!0}],schema:a.c().shape({src:a.e().url().label("Video Url").required(),alt:a.e().label("Video alternative text").required()})},AUDIO:{icon:o.d,name:"Audio",type:F.AUDIO,items:[{type:c.a.TEXT,label:"Source Url",name:"src",required:!0},{type:c.a.TEXT,label:"Alternative Text",name:"alt",required:!0}],schema:a.c().shape({src:a.e().url().label("Audio Url").required(),alt:a.e().label("Audio alternative text").required()})},LINK:{icon:o.v,name:"Link",type:F.LINK,items:[{type:c.a.TEXT,label:"Url",name:"url",required:!0},{type:c.a.TEXT,label:"Display Text",name:"displayText",required:!0}],schema:a.c().shape({url:a.e().url().label("Link Url").required(),displayText:a.e().label("Display Text").required()})},TEXT:{icon:o.I,name:"Text",type:F.TEXT,items:[{type:c.a.TEXT,label:"Text",name:"text",required:!0},{type:c.a.CHECKBOX,label:"Display background",name:"hasBg",defaultValue:!0},{type:c.a.COLOR_PICKER,label:"Background color",name:"bg"}],schema:a.c().shape({text:a.e().label("Text").required(),hasBg:a.a().label("Display background"),bg:a.e().label("Background color")})},BITMOJI:{icon:o.e,name:"Bitmoji",type:F.BITMOJI},CHAT_BUBBLE:{icon:o.g,name:"Chat Bubble",type:F.CHAT_BUBBLE,items:[{type:c.a.TEXT,label:"Text",name:"text",required:!0}],schema:a.c().shape({text:a.e().label("Text").required()})}}},ct=(V={},Object(r.a)(V,K,{settings:at.INTERACTABLE.TEXT,interactive:!0}),Object(r.a)(V,Q,{settings:at.INTERACTABLE.MULTIPLE_CHOICE,interactive:!0}),Object(r.a)(V,et,{settings:at.STATIC.BITMOJI}),Object(r.a)(V,tt,{settings:at.STATIC.TEXT}),Object(r.a)(V,nt,{settings:at.STATIC.CHAT_BUBBLE}),Object(r.a)(V,Z,{settings:at.STATIC.LINK}),Object(r.a)(V,Y,{settings:at.STATIC.IMAGE}),Object(r.a)(V,J,{settings:at.STATIC.VIDEO}),Object(r.a)(V,G,{settings:at.STATIC.AUDIO}),V);e.default=ct},796:function(t,e,n){"use strict";var r=n(16);function a(){var t=Object(r.a)(["\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\t/* height: 100%; */\n\theight: 90%;\n\t","\n"]);return a=function(){return t},t}var c=n(13).d.div(a(),(function(t){var e=t.theme;return"\n\t\tborder: 1px dashed ".concat(e.palette.getContrastText(e.palette.background.level2),";\n\t\t& svg {\n\t\t\tfill: ").concat(e.palette.getContrastText(e.palette.background.level2),";\n\t\t\t\n\t\t}\n\t")}));e.a=c},805:function(t,e,n){"use strict";var r=n(5),a=(n(0),n(80)),c=n(43),o=n(782),i=n(62),s=n(788);e.a=function(t){Object(a.useFirestoreConnect)({collection:"slides",doc:t});var e=Object(c.c)((function(e){var n=e.firestore.data;return n.slides&&n.slides[t]})),n=!Object(a.isLoaded)(e)&&Object(r.jsx)(i.a,{}),u=Object(a.isEmpty)(e)&&Object(r.jsx)(s.a,{});return{slide:e&&Object(o.b)(e,["slides"])||[],pending:n,error:u}}},808:function(t,e,n){"use strict";var r=n(50),a=n.n(r),c=n(79),o=n(6),i=n(5),s=(n(0),n(80)),u=n(43),l=n(140),b=n(782),d=n(62),j=n(788),f=n(137),p='{"lines": [],"width": "100%","height": "100%"}';e.a=function(t){var e=Object(f.a)().notifyError,n=Object(l.a)().userId,r=Object(s.useFirebase)({path:"live/".concat(t)});Object(s.useFirebaseConnect)({path:"live/".concat(t)});var O=Object(u.c)((function(e){var n=e.firebase.data.live;return n&&n[t]})),v=!Object(s.isLoaded)(O)&&Object(i.jsx)(d.a,{}),h=Object(s.isEmpty)(O)&&Object(i.jsx)(j.a,{}),g=O&&Object(b.b)(O)||[],m=Object(o.a)({},g);return{presenterCoordinates:m,createLiveOptions:function(){var i=Object(c.a)(a.a.mark((function c(i){var s,u=arguments;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=u.length>1&&void 0!==u[1]?u[1]:t,a.prev=1,v||h||!m.x){a.next=4;break}return a.abrupt("return");case 4:return a.next=6,r.set("live/".concat(s),Object(b.e)(Object(o.a)(Object(o.a)({},i),{},{userId:n,x:"400",y:"400",page:0,drawing:p})));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e(a.t0);case 11:case"end":return a.stop()}}),c,null,[[1,8]])})));return function(t){return i.apply(this,arguments)}}(),updateLiveOptions:function(){var n=Object(c.a)(a.a.mark((function n(c,o){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.update("live/".concat(t),Object(b.e)({x:c,y:o}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t,e){return n.apply(this,arguments)}}(),updatePage:function(){var n=Object(c.a)(a.a.mark((function n(){var c,o=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=o.length>0&&void 0!==o[0]?o[0]:null,n.prev=1,n.next=4,r.update("live/".concat(t),Object(b.e)({page:c}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}(),updateDrawing:function(){var n=Object(c.a)(a.a.mark((function n(c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.update("live/".concat(t),Object(b.e)({drawing:c}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),clearDrawing:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.update("live/".concat(t),Object(b.e)({drawing:p}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),deleteLiveOptions:function(){var n=Object(c.a)(a.a.mark((function n(c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.remove("live/".concat(t));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),e(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),liveOptions:g,pending:v,error:h}}},814:function(t,e,n){"use strict";n.d(e,"b",(function(){return $})),n.d(e,"a",(function(){return E}));var r=n(6),a=n(28),c=n(77),o=n(16),i=n(5),s=n(0),u=n(99),l=n(13),b=n(823),d=n(778),j=n(796),f=n(787),p=n(793),O=n(78),v=n(859),h=n(777),g=n(774),m=n(785),x=n(4),T=(x.string.isRequired,x.object.isRequired,Object(x.arrayOf)(x.string),x.bool,x.bool,function(t,e){var n=Object(s.useState)(1),r=Object(c.a)(n,2),a=r[0],o=r[1],i=Object(s.useState)(0),u=Object(c.a)(i,2),l=u[0],b=u[1],d=Object(s.useState)(!0),j=Object(c.a)(d,2),f=j[0],p=j[1],O=Object(s.useState)(!1),v=Object(c.a)(O,2),h=v[0],g=v[1];Object(s.useEffect)((function(){o(t.length)}),[t]),Object(s.useEffect)((function(){p(0===l),g(l+1===a)}),[l,a]);return{index:l,setIndex:b,isPreviousDisabled:f,isNextDisabled:h,onPrevious:function(){return b((function(t){var n=t-1;return null===e||void 0===e||e(n),n}))},onNext:function(){return b((function(t){var n=t+1;return null===e||void 0===e||e(n),n}))},onRestart:function(){null===e||void 0===e||e(0),b(0)}}}),y=n(61);function w(){var t=Object(o.a)(["\n\tposition: absolute;\n\tz-index: 1301;\n\ttop: ",";\n\n\t",";\n"]);return w=function(){return t},t}var C="40vh",E=Object(l.d)(y.a)(w(),C,(function(t){var e=t.theme,n=t.$left,r=t.$bottomCenter,a=t.$idle,c=t.$rightBottom,o=r&&"\t\n\t\t\t\t\ttop: auto;\n\t\t\t\t\tbottom: ".concat(40,"px;\n\t\t")||"".concat(n?"left":"right",": ").concat(20,"px;");return"\n\t\t\t".concat(o,"\n\t\t\t& .MuiSvgIcon-root {\n\t\t\t\ttransition: ").concat(e.transitions.duration.standard,"ms;\n\t\t\t\tfont-size: ").concat(a?"0":70,"px;\n\t\t\t}\n\t\t\t").concat(c&&"top: calc(".concat(C," + ").concat(105,"px);")||"","\n\t\t")})),k=n(792),A=n(779),I=n(137),S=k.c().shape({rating:k.b().label("Rating").oneOf([1,2,3,4,5]).typeError("Must be a number, between 1 to 5.").required(),whatDidYouLike:k.e().label("What Did You Like").required(),whatDidYouDislike:k.e().label("What Did You Dislike").required()}),B=[{type:A.a.TEXT,label:"Rating",name:"rating",required:!0},{type:A.a.TEXT,label:"What Did You Like",name:"whatDidYouLike",required:!0},{type:A.a.TEXT,label:"What Did You Dislike",name:"whatDidYouDislike",required:!0}],P=function(t){var e=t.setSent,n=Object(m.a)().closeDialog,r=Object(I.a)().notifySuccess;return Object(i.jsx)(A.b,{schema:S,items:B,onSubmit:function(){r("Feedback submission was successfully sent!"),n(),e(!0)}})};function D(){var t=Object(o.a)(["\n\tposition: absolute;\n\t","\n"]);return D=function(){return t},t}var q=l.d.div(D(),(function(t){var e=t.theme,n=t.$positionProps,r=n.rotate,a=n.translateXY,o=n.widthHeight,i=n.topLeft,s=Object(c.a)(a,2),u=s[0],l=s[1],b=Object(c.a)(o,2),d=b[0],j=b[1],f=Object(c.a)(i,2),p=f[0],O=f[1];return"\n\t\t\tborderRadius: ".concat(e.shape.borderRadius,";\n\t\t\ttransform: translate(").concat(u,"px, ").concat(l,"px) rotate(").concat(r,"deg);\n\t\t\ttop: ").concat(p,"px;\n\t\t\tleft: ").concat(O,"px;\n\t\t\twidth: ").concat(d,"px;\n\t\t\theight: ").concat(j,"px;\n\t\t")})),L=function(t){var e=t.frames,n=t.draggableId,c=e[n],o=(c.draggableType,c.componentType),s=c.componentProps,u=Object(a.a)(c,["draggableType","componentType","componentProps"]);if(!o)return null;var l=p.TOOL_COMPONENTS[o];return Object(i.jsx)(q,{"draggable-type":o,id:n,$positionProps:u,children:Object(i.jsx)(l,Object(r.a)({},s))},n)},R=function(t){var e=t.frames,n=t.index;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g.a,{container:!0,alignItems:"flex-end",children:Object(i.jsxs)(u.a,{children:[" Slide ",n+1," "]})}),Object(i.jsx)(j.a,{children:Object.keys(e).map((function(t){return Object(i.jsx)(L,{frames:e,draggableId:t},t)}))})]})},X=function(t){return Object.keys(t).map((function(e,n){return{key:e,frames:t[e].frames,index:n}}))},U=function(t){var e=t.slides,n=t.page,a=t.onPageSelect,o=t.showButtons,l=t.hasSubmit,j=Object(m.a)().openComponentDialog,p=Object(s.useState)((function(){return X(e)})),x=Object(c.a)(p,2),y=x[0],w=x[1],C=T(y,a),k=C.index,A=C.setIndex,I=C.isPreviousDisabled,S=C.isNextDisabled,B=C.onPrevious,D=C.onNext,q=C.onRestart;Object(v.a)((function(){var t=X(e);w(t);var n=t.length;A((function(t){var e=k>=n?n>=1&&n-1||0:t;return null===a||void 0===a||a(e),e}))}),[e]);var L=Object(s.useState)(!1),U=Object(c.a)(L,2),$=U[0],M=U[1];Object(b.a)({timeout:3e3,onIdle:function(){return M(!0)},onActive:function(){return M(!1)},debounce:500});var _=Object(s.useState)(!1),N=Object(c.a)(_,2),H=N[0],V=N[1];return Object(i.jsx)(d.a,{children:(null===y||void 0===y?void 0:y.length)&&Object(i.jsxs)(f.a,{style:{position:"relative",overflow:"hidden"},children:[o&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(E,{$left:!0,$idle:$,tooltip:"Previous",icon:O.A,onClick:B,disabled:I}),!S&&Object(i.jsx)(E,{$idle:$,tooltip:"Next",icon:O.x,onClick:D,disabled:S})||Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(E,{$idle:$,tooltip:"Restart",icon:O.B,onClick:q}),l&&!H&&Object(i.jsx)(E,{$idle:$,$rightBottom:!0,tooltip:"Submit Feedback",icon:O.G,onClick:function(){j("Feedback",Object(i.jsx)(P,{setSent:V}))}})]})]}),Object(i.jsx)(R,Object(r.a)({},y[n||k]))]})||Object(i.jsx)(g.a,{vertical:!0,children:Object(i.jsx)(h.a,{children:Object(i.jsx)(u.a,{variant:"h3",component:"h1",children:"Either the slide does not exist or it's empty."})})})})};U.defaultProps={presenterPosition:null,showButtons:!0,hasSubmit:!1};var $=U},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n(6),a=n(5),c=n(0),o=n(889),i=Object(c.forwardRef)((function(t,e){return Object(a.jsx)(o.a,Object(r.a)(Object(r.a)({},t),{},{style:Object(r.a)(Object(r.a)({},t.style||{}),{},{position:"absolute"}),ref:e}))})),s=n(54),u=function(t){var e=Object(s.a)(),n=Object(c.useRef)();return{canvasProps:Object(r.a)({loadTimeOffset:5,lazyRadius:5,brushRadius:2,brushColor:e.palette.secondary.main,backgroundColor:"transparent",catenaryColor:e.palette.primary.main,hideGrid:!0,canvasWidth:"100%",canvasHeight:"100%"},t),canvasRef:n}}},857:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(252),a=n(251),c=n(244),o=n(5),i=n(0),s=n.n(i),u=function t(e,n){Object(c.a)(this,t),this.x=e,this.y=n,this.lifetime=0},l=function(t){Object(r.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={cHeight:0,cWidth:0},t.canvas=s.a.createRef(),t.points=[],t.addPoint=function(e,n){var r=new u(e,n);t.points.push(r)},t.componentDidMount=function(){t.setState({cHeight:document.body.clientHeight,cWidth:document.body.clientWidth}),window.addEventListener("resize",(function(){t.setState({cHeight:document.body.clientHeight,cWidth:document.body.clientWidth})}),!1),matchMedia("(pointer:fine)").matches&&t.startAnimation()},t.componentDidUpdate=function(){var e=t.props.points;if(e){var n=e.x,r=e.y;t.addPoint(n,r)}},t.startAnimation=function(){var e=t.canvas.current,n=e.getContext("2d");t.props.points||document.addEventListener("mousemove",(function(n){var r,a,c=n.clientX,o=n.clientY;t.addPoint(c-e.offsetLeft,o-e.offsetTop),null===(r=(a=t.props).onMouseMove)||void 0===r||r.call(a,c-e.offsetLeft,o-e.offsetTop)}),!1);!function e(){n.clearRect(0,0,n.canvas.width,n.canvas.height);for(var r=700/60,a=0;a<t.points.length;++a){var c=t.points[a],o=void 0;if(o=void 0!==t.points[a-1]?t.points[a-1]:c,c.lifetime+=1,c.lifetime>r)t.points.shift();else{var i=c.lifetime/r,s=7*(1-i);n.lineJoin="round",n.lineWidth=s;var u=Math.floor(255-255*i),l=Math.floor(73+73*i);n.strokeStyle="rgb(".concat(u,",").concat(178,",").concat(l),n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(c.x,c.y),n.stroke(),n.closePath()}}requestAnimationFrame(e)}()},t.render=function(){var e=t.state,n=e.cHeight,r=e.cWidth;return Object(o.jsx)("canvas",{style:{position:"absolute",top:0,left:0,right:0,zIndex:1,pointerEvents:"none"},ref:t.canvas,width:r,height:n})},t}return n}(s.a.Component)}}]);