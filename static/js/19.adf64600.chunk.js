(this["webpackJsonpslide-scott"]=this["webpackJsonpslide-scott"]||[]).push([[19],{721:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n(774),o=n(0),i=n(3),c=n(7),s=n(4),l=n(8),d=n(10),u=n(21),p=n(14),b=n(242),f=o.forwardRef((function(t,e){var n=t.classes,a=t.className,r=t.color,s=void 0===r?"secondary":r,d=t.edge,u=void 0!==d&&d,f=t.size,h=void 0===f?"medium":f,j=Object(c.a)(t,["classes","className","color","edge","size"]),m=o.createElement("span",{className:n.thumb});return o.createElement("span",{className:Object(l.a)(n.root,a,{start:n.edgeStart,end:n.edgeEnd}[u],"small"===h&&n["size".concat(Object(p.a)(h))])},o.createElement(b.a,Object(i.a)({type:"checkbox",icon:m,checkedIcon:m,classes:{root:Object(l.a)(n.switchBase,n["color".concat(Object(p.a)(s))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:e},j)),o.createElement("span",{className:n.track}))})),h=Object(d.a)((function(t){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===t.palette.type?t.palette.grey[50]:t.palette.grey[400],transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===t.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:t.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(t.palette.primary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[800]},"&$checked + $track":{backgroundColor:t.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===t.palette.type?t.palette.common.black:t.palette.common.white}},colorSecondary:{"&$checked":{color:t.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(t.palette.secondary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[800]},"&$checked + $track":{backgroundColor:t.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===t.palette.type?t.palette.common.black:t.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:t.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.type?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.type?.38:.3}}}),{name:"MuiSwitch"})(f),j=n(61),m=n(850),g=n(851),v=n(181),O={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},x=n(855),y=n(100),C=function(){var t=Object(y.a)(),e=t.theme,n=t.updateTheme;return Object(a.jsx)(x.a,{value:e,onChange:n,options:[{value:"dark",label:"Dark",icon:Object(a.jsx)(j.l,{style:{color:v.a.A700}})},{value:"light",label:"Light",icon:Object(a.jsx)(j.v,{style:{color:O[500]}})}]})},k=n(777),R=n(6),T=n(78),z=n(16),$=n(763),E=n(62),S=n(241),I=n(13);function w(){var t=Object(z.a)(["\n\tposition: absolute;\n\ttop: -10px;\n\tright: -10px;\n\t& .MuiSvgIcon-root {\n\t\tfont-size: 50px;\n\t}\n"]);return w=function(){return t},t}function P(){var t=Object(z.a)(["\n\tposition: relative;\n"]);return P=function(){return t},t}function A(){var t=Object(z.a)(["\n\tposition: relative;\n\t& div {\n\t\t",";\n\t}\n"]);return A=function(){return t},t}function N(){var t=Object(z.a)(["\n\toverflow: hidden;\n\twidth: 0%;\n\n\t",";\n"]);return N=function(){return t},t}var D=I.d.div(N(),(function(t){var e=t.$isOpen;return"\n\t\t".concat(e?"width: 100%;":"","\n\t")})),L=Object(I.d)(r.a)(A(),(function(t){var e=t.theme;return"\n\t\t\ttransition: ".concat(e.transitions.create([""],{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.complex}),";\n\t\t")})),B=Object(I.d)($.a)(P()),_=Object(I.d)(E.a)(w()),M=function(){var t=Object(o.useState)(!1),e=Object(T.a)(t,2),n=e[0],r=e[1],i=Object(y.a)(),c=i.bitmoji,s=i.updateBitmoji;return Object(a.jsxs)(L,{container:!0,alignItems:"center",children:[Object(a.jsx)($.a,{container:!0,justify:"center",item:!0,xs:n?4:11,children:Object(a.jsxs)(B,{item:!0,xs:"auto",children:[Object(a.jsx)(S.b,Object(R.a)({},c)),Object(a.jsx)(_,{tooltip:"Customize Bitmoji",onClick:function(){r((function(t){return!t}))},icon:j.E})]})}),Object(a.jsx)($.a,{item:!0,xs:n?8:1,children:Object(a.jsx)(D,{$isOpen:n,children:Object(a.jsx)(S.a,{options:c,onChange:s})})})]})},V=n(784),q=(s.string.isRequired,function(t){var e=t.type,n=Object(y.a)(),r=n.primaryColor,o=n.secondaryColor,i=n.updatePrimaryColor,c=n.updateSecondaryColor,s="primary"===e,l=s&&r||o;return Object(a.jsx)(V.a,{color:l,onColorChange:function(t){s?i(t):c(t)}})});q.defaultProps={};var U=q,W=[{type:g.itemTypes.SECTION_TITLE_WITH_DIVIDER,primaryText:"VIEW SETTINGS"},{primaryText:"Theme",icon:j.L,secondaryAction:Object(a.jsx)(C,{})},{primaryText:"Primary Color",icon:j.z,secondaryAction:Object(a.jsx)(U,{type:"primary"})},{primaryText:"Secondary Color",icon:j.z,secondaryAction:Object(a.jsx)(U,{type:"secondary"})},g.SPACER,{type:g.itemTypes.SECTION_TITLE_WITH_DIVIDER,primaryText:"ANIMATIONS",secondaryText:"Disable/Modify animations"},{primaryText:"Animations",secondaryText:"Turns on/off all the animations",icon:j.d,secondaryAction:function(){return Object(a.jsx)(h,{disabled:!0})},disabled:!0}];e.default=function(){return Object(a.jsx)(r.a,{vertical:!0,horizontal:!0,children:Object(a.jsxs)(k.a,{padding:"50px !important",children:[Object(a.jsx)(M,{}),Object(a.jsx)(m.default,{list:W})]})})}},774:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(6),r=n(28),o=n(16),i=n(5),c=(n(0),n(13)),s=n(763),l=n(4);l.node,l.bool,l.bool;function d(){var t=Object(o.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t","\n"]);return d=function(){return t},t}var u=Object(c.d)(s.a)(d(),(function(t){var e=t.$horizontal,n=t.$vertical;return"\n\t\t".concat(e&&"justify-content: center;","\n\t\t").concat(n&&"height: 100%; align-items: center;","\n\t")})),p=function(t){var e=t.children,n=t.horizontal,o=t.vertical,c=Object(r.a)(t,["children","horizontal","vertical"]);return Object(i.jsx)(u,Object(a.a)(Object(a.a)({$horizontal:n,$vertical:o},c),{},{children:e}))};p.defaultProps={children:"",horizontal:!0,vertical:!1};var b=p},776:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(5),r=(n(0),n(16));function o(){var t=Object(r.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\t","\n"]);return o=function(){return t},t}var i=n(13).d.span(o(),(function(t){var e=t.theme,n=t.$direction,a=t.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(e.spacing(a),"px;\n\t")})),c=n(36),s=(c.d.isRequired,c.h,function(t){var e=t.direction,n=t.spacing;return Object(a.jsx)(i,{$direction:e,$spacing:"string"===typeof n&&parseInt(n,10)||n})});s.defaultProps={spacing:1};var l=s},777:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n(6),r=n(78),o=n(28),i=n(16),c=n(5),s=n(0),l=n(235),d=n(765),u=n(13),p=n(774),b=n(4);b.object,b.object,b.bool;function f(){var t=Object(i.a)(["\n\t","\n"]);return f=function(){return t},t}function h(){var t=Object(i.a)(["\n\twidth: 100%;\n\ttext-align: left;\n\t","\n"]);return h=function(){return t},t}var j=Object(u.d)(l.a)(h(),(function(t){var e,n=t.theme,a=t.$bg;return"\n\t\t// margin-bottom: ".concat(n.spacing(2),"px;\n\t\tbackground-color: ").concat(a&&((null===(e=n.palette[a])||void 0===e?void 0:e.main)||n.palette.background[a]||a)||n.palette.background.paper,";\n\t")})),m=u.d.div(f(),(function(t){var e=t.theme;return"\n\t\t& * {\n\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t}\n\t")})),g=function(t){var e=t.containerProps,n=t.paperProps,i=t.noBg,l=Object(o.a)(t,["containerProps","paperProps","noBg"]),u=Object(s.useState)(!1),b=Object(r.a)(u,2),f=b[0],h=b[1],g=Object(c.jsx)(d.a,Object(a.a)({py:2,px:4,textAlign:"left"},l));return Object(c.jsx)(p.a,Object(a.a)(Object(a.a)({},e),{},{children:i&&Object(c.jsx)(m,{children:g})||Object(c.jsx)(j,Object(a.a)(Object(a.a)({elevation:f?3:1,onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)}},n),{},{children:g}))}))};g.defaultProps={containerProps:{},paperProps:{},noBg:!1};var v=g},781:function(t,e,n){"use strict";var a=n(137),r=n(44),o=n(236),i=n(100),c=function(){var t=Object(i.a)().roles,e=Object(o.b)([r.d.DEV],t),n=Object(o.b)([r.d.DEV,r.d.PAID_USER],t);return{isFreeUser:Object(o.b)([r.d.USER],t),isPaidUser:n,isDevUser:e}};e.a=function(){var t=c().isPaidUser,e=Object(a.a)().notifyWarning;return function(n){t?n():e("Paid feature.")}}},784:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n(6),r=n(28),o=n(16),i=n(5),c=n(0),s=n(13),l=n(798),d=n(138),u=n(61),p=n(62),b=n(781),f=n(75),h=n(4);h.string,h.func.isRequired;function j(){var t=Object(o.a)(["\n\tmargin-left: -2px;\n\t",";\n"]);return j=function(){return t},t}var m=Object(s.d)(u.i)(j(),(function(t){var e=t.theme,n=t.$bg;return n&&"\n\t\t\t\t// & .MuiSvgIcon-root {\n\n\t\t\t\t\tborder-radius: ".concat(e.shape.borderRadius,"px;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tfill: ").concat(n," !important;\n\t\t\t\t\tcolor: ").concat(n," !important;\n\t\t\t\t\tbackground-color: ").concat(n," !important;\n\t\t\t\t// }\n\t\t")||""})),g=Object(c.forwardRef)((function(t,e){var n=t.color,o=t.onColorChange,c=Object(r.a)(t,["color","onColorChange"]),s=Object(b.a)();return Object(i.jsx)(d.a,{buttonComponent:Object(i.jsx)(p.a,{tooltip:"Pick a color",onClick:function(t){s(t)},icon:Object(i.jsx)(m,{fontSize:"small",$bg:n})}),component:Object(i.jsx)(l.a,Object(a.a)(Object(a.a)({colors:[f.b,f.c,"#f44336","#ff9800","#2196f3","#4caf50"],color:n,onChangeComplete:function(t){return o(t.hex)}},c),{},{ref:e})),passCallback:!0})}));g.defaultProps={color:""};var v=g},850:function(t,e,n){"use strict";n.r(e);var a=n(30);e.default=Object(a.a)((function(){return n.e(21).then(n.bind(null,826))}))},851:function(t,e,n){"use strict";n.r(e),n.d(e,"itemTypes",(function(){return a})),n.d(e,"SPACER",(function(){return r}));var a={SECTION_TITLE:"SectionTitle",SECTION_TITLE_WITH_DIVIDER:"SectionTitleWithDivider",SPACER:"Spacer",DIVIDER:"Divider"},r={type:a.SPACER}},855:function(t,e,n){"use strict";n.d(e,"a",(function(){return T}));var a=n(6),r=n(28),o=n(5),i=n(0),c=n(3),s=n(7),l=(n(53),n(4)),d=n(8);function u(t,e){return void 0!==e&&void 0!==t&&(Array.isArray(e)?e.indexOf(t)>=0:t===e)}var p=n(10),b=n(14),f=i.forwardRef((function(t,e){var n=t.children,a=t.classes,r=t.className,o=t.exclusive,l=void 0!==o&&o,p=t.onChange,f=t.orientation,h=void 0===f?"horizontal":f,j=t.size,m=void 0===j?"medium":j,g=t.value,v=Object(s.a)(t,["children","classes","className","exclusive","onChange","orientation","size","value"]),O=function(t,e){if(p){var n,a=g&&g.indexOf(e);g&&a>=0?(n=g.slice()).splice(a,1):n=g?g.concat(e):[e],p(t,n)}},x=function(t,e){p&&p(t,g===e?null:e)};return i.createElement("div",Object(c.a)({role:"group",className:Object(d.a)(a.root,r,"vertical"===h&&a.vertical),ref:e},v),i.Children.map(n,(function(t){return i.isValidElement(t)?i.cloneElement(t,{className:Object(d.a)(a.grouped,a["grouped".concat(Object(b.a)(h))],t.props.className),onChange:l?x:O,selected:void 0===t.props.selected?u(t.props.value,g):t.props.selected,size:t.props.size||m}):null})))})),h=Object(p.a)((function(t){return{root:{display:"inline-flex",borderRadius:t.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),{name:"MuiToggleButtonGroup"})(f),j=n(21),m=n(183),g=i.forwardRef((function(t,e){var n=t.children,a=t.classes,r=t.className,o=t.disabled,l=void 0!==o&&o,u=t.disableFocusRipple,p=void 0!==u&&u,f=t.onChange,h=t.onClick,j=t.selected,g=t.size,v=void 0===g?"medium":g,O=t.value,x=Object(s.a)(t,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return i.createElement(m.a,Object(c.a)({className:Object(d.a)(a.root,r,l&&a.disabled,j&&a.selected,"medium"!==v&&a["size".concat(Object(b.a)(v))]),disabled:l,focusRipple:!p,ref:e,onClick:function(t){h&&(h(t,O),t.isDefaultPrevented())||f&&f(t,O)},onChange:f,value:O,"aria-pressed":j},x),i.createElement("span",{className:a.label},n))})),v=Object(p.a)((function(t){return{root:Object(c.a)({},t.typography.button,{boxSizing:"border-box",borderRadius:t.shape.borderRadius,padding:11,border:"1px solid ".concat(Object(j.c)(t.palette.action.active,.12)),color:Object(j.c)(t.palette.action.active,.38),"&$selected":{color:t.palette.action.active,backgroundColor:Object(j.c)(t.palette.action.active,.12),"&:hover":{backgroundColor:Object(j.c)(t.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:Object(j.c)(t.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:Object(j.c)(t.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{padding:7,fontSize:t.typography.pxToRem(13)},sizeLarge:{padding:15,fontSize:t.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(g),O=n(776),x=n(77),y=n(36),C=Object(l.shape)({value:l.any.isRequired,label:l.string,icon:y.f,disabled:l.bool}).isRequired,k=Object(l.arrayOf)(C),R=(l.any.isRequired,l.func.isRequired,k.isRequired,l.bool,y.j,function(t){var e=t.value,n=t.onChange,i=t.options,c=t.size,s=Object(r.a)(t,["value","onChange","options","size"]);return Object(o.jsx)(h,Object(a.a)(Object(a.a)({value:e,onChange:function(t,a){e!==a&&n(a)}},s),{},{children:i.map((function(t){return Object(o.jsxs)(v,{value:t.value,disabled:t.disabled,size:c,children:[t.icon&&Object(o.jsxs)(o.Fragment,{children:[Object(x.a)(t.icon),Object(o.jsx)(O.a,{direction:"right"})]}),t.label]},t.value)}))}))});R.defaultProps={exclusive:!0,size:"small"};var T=R}}]);