(this["webpackJsonpslide-scott"]=this["webpackJsonpslide-scott"]||[]).push([[27],{795:function(t,n,e){"use strict";var r=e(6),a=e(14),i=e(5),c=(e(0),e(13)),o=e(787);function s(){var t=Object(a.a)(["\n\tpadding: 10px;\n\toverflow: auto;\n\theight: 94%;\n\t","\n"]);return s=function(){return t},t}var u=Object(c.d)(o.a)(s(),(function(t){var n=t.theme;return"\n\t\tborder-radius: ".concat(n.shape.borderRadius,"px;\n\t\tbackground-color: ").concat(n.palette.background.paper,"\n\t")}));n.a=function(t){return Object(i.jsx)(u,Object(r.a)({container:!0,item:!0,justify:"center"},t))}},964:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var r=e(45),a=e(5),i=e(0),c=e(98),o=e(764),s=e(775),u=e(778),d=e(99),l=(e(4).func.isRequired,e(14)),f=e(13);function p(){var t=Object(l.a)(["\n\t","\n"]);return p=function(){return t},t}var b=Object(f.d)(o.a)(p(),(function(t){var n=t.theme,e=t["tool-size"];return"\n\t\tmargin: ".concat(10,"px;\n\t\twidth: ").concat(e,"px;\n\t\theight: ").concat(e,"px;\n\t\tcursor: grab;\n\t\ttransition: ").concat(n.transitions.create(["transform","background-color","padding","font-size"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.short}),";\n\t\tfont-size: 12px;\n\t\tborder-radius: ").concat(n.shape.borderRadius,"px;\n\t\tbackground-color: ").concat(n.palette.background.default,";\n\t\tpadding: ").concat(n.spacing(1),"px;\n\n\t\t& .icon-text {\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\n\t\t& svg, & .icon-text {\n\t\t\ttransition: ").concat(n.transitions.create(["font-size","opacity"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.short}),";\n\t\t}\n\n\t\t&:hover {\n\t\t\tz-index: 1;\n\t\t\ttransform: scale(1.3);\n\t\t\tbox-shadow: ").concat(n.shadows[12],";\n\t\t\t& svg {\n\t\t\t\tcolor: ").concat(n.palette.primary.main,";\n\t\t\t\tfont-size: ").concat(e,"px;\n\t\t\t}\n\t\t\t.icon-text {\n\t\t\t\topacity: 0;\n\t\t\t\tfont-size: 0px;\n\t\t\t\theight: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\tpadding: 0;\n\t\t}\n\t")})),g=e(885),j=e(795),h=e(796),x=function(t){var n=t.onDragStart,e=Object(d.a)().notifyInfo,l=Object(i.useRef)(),f=Object(i.useState)(70),p=Object(r.a)(f,2),x=p[0],v=p[1];Object(i.useEffect)((function(){var t=function(){if(l.current){var t=(l.current.clientWidth-80)/2;v(t>60?t:l.current.clientWidth-40)}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);var O=Object.keys(h.default).reduce((function(t,n){var e=h.default[n];return t[e.interactive?"Interactive":"Static"].push(e),t}),{Interactive:[],Static:[]});return Object(a.jsxs)(s.a,{style:{height:"94%",overflow:"auto",position:"relative"},innerRef:l,children:[Object(a.jsx)(g.a,{children:" Tools "}),Object(a.jsx)(j.a,{container:!0,justify:"flex-start",alignContent:"flex-start",children:Object.keys(O).map((function(t){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)(u.a,{direction:"top",spacing:"2"}),Object(a.jsx)(s.a,{horizontal:!0,children:Object(a.jsx)(c.a,{children:t})}),O[t].map((function(t){var r=t.settings,c=r.icon,s=r.name,u=r.type;return Object(a.jsxs)(b,{onClick:function(){return e("Drag into the slide container.")},container:!0,"tool-size":x,draggable:"true",onDragStart:n,"draggable-type":u,children:[Object(a.jsx)(o.a,{className:"icon-text",container:!0,item:!0,xs:12,justify:"center",alignItems:"flex-end",style:{textAlign:"center"},children:s}),Object(a.jsx)(o.a,{container:!0,item:!0,xs:12,justify:"center",alignItems:"flex-start",children:Object(i.createElement)(c)})]},s)}))]},t)}))})]})};x.defaultProps={};var v=x}}]);