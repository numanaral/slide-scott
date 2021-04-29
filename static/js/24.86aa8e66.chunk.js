(this["webpackJsonpslide-scott"]=this["webpackJsonpslide-scott"]||[]).push([[24],{716:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n(5),i=n(775),o=n(817),c=(n(0),n(808)),s=n(783),u=function(t){var e=t.match.params.id,n=Object(c.a)(e),s=n.slide,u=n.pending,b=n.error;return Object(r.jsx)(i.a,{vertical:!0,children:u||b||Object(r.jsx)(o.b,Object(a.a)({hasSubmit:!0},s))})};u.defaultProps=s.b,e.default=u},795:function(t,e,n){"use strict";var a=n(6),r=n(14),i=n(5),o=(n(0),n(13)),c=n(787);function s(){var t=Object(r.a)(["\n\tpadding: 10px;\n\toverflow: auto;\n\theight: 94%;\n\t","\n"]);return s=function(){return t},t}var u=Object(o.d)(c.a)(s(),(function(t){var e=t.theme;return"\n\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\tbackground-color: ").concat(e.palette.background.paper,"\n\t")}));e.a=function(t){return Object(i.jsx)(u,Object(a.a)({container:!0,item:!0,justify:"center"},t))}},800:function(t,e,n){"use strict";var a=n(14);function r(){var t=Object(a.a)(["\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\t/* height: 100%; */\n\theight: 90%;\n\t","\n"]);return r=function(){return t},t}var i=n(13).d.div(r(),(function(t){var e=t.theme;return"\n\t\tborder: 1px dashed ".concat(e.palette.getContrastText(e.palette.background.level2),";\n\t\t& svg {\n\t\t\tfill: ").concat(e.palette.getContrastText(e.palette.background.level2),";\n\t\t\t\n\t\t}\n\t")}));e.a=i},817:function(t,e,n){"use strict";n.d(e,"b",(function(){return z})),n.d(e,"a",(function(){return w}));var a=n(6),r=n(26),i=n(45),o=n(14),c=n(5),s=n(0),u=n(98),b=n(13),l=n(826),d=n(787),j=n(800),p=n(795),f=n(796),O=n(52),h=n(858),v=n(779),x=n(775),g=n(788),m=n(4),k=(m.string.isRequired,m.object.isRequired,Object(m.arrayOf)(m.string),m.bool,m.bool,function(t,e){var n=Object(s.useState)(1),a=Object(i.a)(n,2),r=a[0],o=a[1],c=Object(s.useState)(0),u=Object(i.a)(c,2),b=u[0],l=u[1],d=Object(s.useState)(!0),j=Object(i.a)(d,2),p=j[0],f=j[1],O=Object(s.useState)(!1),h=Object(i.a)(O,2),v=h[0],x=h[1];Object(s.useEffect)((function(){o(t.length)}),[t]),Object(s.useEffect)((function(){f(0===b),x(b+1===r)}),[b,r]);return{index:b,setIndex:l,isPreviousDisabled:p,isNextDisabled:v,onPrevious:function(){return l((function(t){var n=t-1;return null===e||void 0===e||e(n),n}))},onNext:function(){return l((function(t){var n=t+1;return null===e||void 0===e||e(n),n}))},onRestart:function(){null===e||void 0===e||e(0),l(0)}}}),D=n(78);function S(){var t=Object(o.a)(["\n\tposition: absolute;\n\tz-index: 1301;\n\ttop: ",";\n\n\t",";\n"]);return S=function(){return t},t}var y="40vh",w=Object(b.d)(D.a)(S(),y,(function(t){var e=t.theme,n=t.$left,a=t.$bottomCenter,r=t.$idle,i=t.$rightBottom,o=a&&"\t\n\t\t\t\t\ttop: auto;\n\t\t\t\t\tbottom: ".concat(40,"px;\n\t\t")||"".concat(n?"left":"right",": ").concat(20,"px;");return"\n\t\t\t".concat(o,"\n\t\t\t& .MuiSvgIcon-root {\n\t\t\t\ttransition: ").concat(e.transitions.duration.standard,"ms;\n\t\t\t\tfont-size: ").concat(r?"0":70,"px;\n\t\t\t}\n\t\t\t").concat(i&&"top: calc(".concat(y," + ").concat(105,"px);")||"","\n\t\t")})),P=n(793),T=n(780),$=n(99),C=P.c().shape({rating:P.b().label("Rating").oneOf([1,2,3,4,5]).typeError("Must be a number, between 1 to 5.").required(),whatDidYouLike:P.e().label("What Did You Like").required(),whatDidYouDislike:P.e().label("What Did You Dislike").required()}),R=[{type:T.a.TEXT,label:"Rating",name:"rating",required:!0},{type:T.a.TEXT,label:"What Did You Like",name:"whatDidYouLike",required:!0},{type:T.a.TEXT,label:"What Did You Dislike",name:"whatDidYouDislike",required:!0}],Y=function(t){var e=t.setSent,n=Object(g.a)().closeDialog,a=Object($.a)().notifySuccess;return Object(c.jsx)(T.b,{schema:C,items:R,onSubmit:function(){a("Feedback submission was successfully sent!"),n(),e(!0)}})};function q(){var t=Object(o.a)(["\n\tposition: absolute;\n\t","\n"]);return q=function(){return t},t}var E=b.d.div(q(),(function(t){var e=t.theme,n=t.$positionProps,a=n.rotate,r=n.translateXY,o=n.widthHeight,c=n.topLeft,s=Object(i.a)(r,2),u=s[0],b=s[1],l=Object(i.a)(o,2),d=l[0],j=l[1],p=Object(i.a)(c,2),f=p[0],O=p[1];return"\n\t\t\tborderRadius: ".concat(e.shape.borderRadius,";\n\t\t\ttransform: translate(").concat(u,"px, ").concat(b,"px) rotate(").concat(a,"deg);\n\t\t\ttop: ").concat(f,"px;\n\t\t\tleft: ").concat(O,"px;\n\t\t\twidth: ").concat(d,"px;\n\t\t\theight: ").concat(j,"px;\n\t\t")})),I=function(t){var e=t.frames,n=t.draggableId,i=e[n],o=(i.draggableType,i.componentType),s=i.componentProps,u=Object(r.a)(i,["draggableType","componentType","componentProps"]);if(!o)return null;var b=f.TOOL_COMPONENTS[o];return Object(c.jsx)(E,{"draggable-type":o,id:n,$positionProps:u,children:Object(c.jsx)(b,Object(a.a)({},s))},n)},N=function(t){var e=t.frames,n=t.index;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{container:!0,alignItems:"flex-end",children:Object(c.jsxs)(u.a,{children:[" Slide ",n+1," "]})}),Object(c.jsx)(j.a,{children:Object.keys(e).map((function(t){return Object(c.jsx)(I,{frames:e,draggableId:t},t)}))})]})},F=function(t){return Object.keys(t).map((function(e,n){return{key:e,frames:t[e].frames,index:n}}))},L=function(t){var e=t.slides,n=t.page,r=t.onPageSelect,o=t.showButtons,b=t.hasSubmit,j=Object(g.a)().openComponentDialog,f=Object(s.useState)((function(){return F(e)})),m=Object(i.a)(f,2),D=m[0],S=m[1],y=k(D,r),P=y.index,T=y.setIndex,$=y.isPreviousDisabled,C=y.isNextDisabled,R=y.onPrevious,q=y.onNext,E=y.onRestart;Object(h.a)((function(){var t=F(e);S(t);var n=t.length;T((function(t){var e=P>=n?n>=1&&n-1||0:t;return null===r||void 0===r||r(e),e}))}),[e]);var I=Object(s.useState)(!1),L=Object(i.a)(I,2),z=L[0],B=L[1];Object(l.a)({timeout:3e3,onIdle:function(){return B(!0)},onActive:function(){return B(!1)},debounce:500});var W=Object(s.useState)(!1),X=Object(i.a)(W,2),M=X[0],J=X[1];return Object(c.jsx)(d.a,{children:(null===D||void 0===D?void 0:D.length)&&Object(c.jsxs)(p.a,{style:{position:"relative",overflow:"hidden"},children:[o&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{$left:!0,$idle:z,tooltip:"Previous",icon:O.C,onClick:R,disabled:$}),!C&&Object(c.jsx)(w,{$idle:z,tooltip:"Next",icon:O.z,onClick:q,disabled:C})||Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{$idle:z,tooltip:"Restart",icon:O.D,onClick:E}),b&&!M&&Object(c.jsx)(w,{$idle:z,$rightBottom:!0,tooltip:"Submit Feedback",icon:O.I,onClick:function(){j("Feedback",Object(c.jsx)(Y,{setSent:J}))}})]})]}),Object(c.jsx)(N,Object(a.a)({},D[n||P]))]})||Object(c.jsx)(x.a,{vertical:!0,children:Object(c.jsx)(v.a,{children:Object(c.jsx)(u.a,{variant:"h3",component:"h1",children:"Either the slide does not exist or it's empty."})})})})};L.defaultProps={presenterPosition:null,showButtons:!0,hasSubmit:!1};var z=L}}]);