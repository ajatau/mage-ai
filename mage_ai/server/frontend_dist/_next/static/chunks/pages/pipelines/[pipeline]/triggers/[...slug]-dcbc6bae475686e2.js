(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{28358:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(82684),i=t(60328),c=t(67971),o=t(10919),l=t(86673),s=t(19711),u=t(10503),a=t(46313),d=t(23831),p=t(49125),f=a.default.div.withConfig({displayName:"indexstyle__ErrorPopupStyle",componentId:"sc-aqfw6f-0"})(["bottom:0;left:0;max-height:100vh;max-width:100vw;overflow:auto;padding:","px;position:fixed;z-index:100;",""],p.iI*p.cd,(function(e){return"\n    background-color: ".concat((e.theme.background||d.Z.background).page,";\n    border-right: 1px solid ").concat((e.theme.accent||d.Z.accent).negative,";\n    border-top: 1px solid ").concat((e.theme.accent||d.Z.accent).negative,";\n  ")})),h=t(28598);var m=function(e){var n=e.displayMessage,t=e.errors,a=e.onClose,d=e.response,p=(0,r.useState)(!1),m=p[0],g=p[1],j=t.messages,v=((null===d||void 0===d?void 0:d.error)||{}).errors;return(0,h.jsxs)(f,{children:[(0,h.jsx)(c.Z,{justifyContent:"flex-end",children:(0,h.jsx)(i.Z,{iconOnly:!0,noBorder:!0,noPadding:!0,onClick:a,title:"Close errors",children:(0,h.jsx)(u.x8,{})})}),(0,h.jsxs)(l.Z,{mt:1,children:[(0,h.jsx)(s.ZP,{bold:!0,large:!0,children:"Error"}),n&&(0,h.jsx)(l.Z,{mt:1,children:(0,h.jsx)(s.ZP,{default:!0,children:n})}),(null===j||void 0===j?void 0:j.length)&&(0,h.jsx)(l.Z,{mt:1,children:j.map((function(e){return(0,h.jsx)(s.ZP,{default:!0,monospace:!0,dangerouslySetInnerHTML:{__html:e.replaceAll(" ","&nbsp;")}},e)}))})]}),v&&(0,h.jsxs)(l.Z,{mt:3,children:[(0,h.jsxs)(s.ZP,{bold:!0,large:!0,children:["Stack trace (",(0,h.jsxs)(o.Z,{muted:!0,onClick:function(){return g((function(e){return!e}))},preventDefault:!0,children:[m?"hide":"show"," stack trace"]}),")"]}),m&&(0,h.jsx)(l.Z,{mt:1,children:v.map((function(e){return(0,h.jsx)(s.ZP,{default:!0,monospace:!0,dangerouslySetInnerHTML:{__html:e.replaceAll(" ","&nbsp;")}},e)}))})]})]})}},70543:function(e,n,t){"use strict";t.d(n,{b:function(){return r}});var r="edit"},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return o}});var r=t(46313),i=t(23831),c=t(3055),o=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],c.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},58122:function(e,n,t){"use strict";t.d(n,{CL:function(){return f},FS:function(){return h},JZ:function(){return g},e7:function(){return j},v0:function(){return p},wx:function(){return m}});var r=t(12757),i=t(82394),c=t(43313),o=t(93348),l=t(32151),s=t(5679),u=t(84779);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.statistics,t=Object.keys(n),r=Array(c.Dy.length).fill(0);return 0===t.length?null:(t.forEach((function(e){if(c.Dy.includes(e)){var t=c.CC[e],i=n[e],o=i,l=!1,s=[2,3],a=c.Ub[e],d=c.oH[e],p=c.OD[e];if(c.y_.includes(e))l=!0,s=[2,1,2];else if(e in c.Sq){i=(0,u.Jw)(i,0);var f=c.Sq[e];o=n[f]}var h={columnFlexNumbers:s,name:t,progress:l,rate:o,successDirection:d,warning:p};c.y_.includes(e)||(h.value=i),r[a]=h}})),r)}function f(e){var n=e.columnTypes,t=void 0===n?{}:n,r=e.statistics,i=Object.keys(r);if(0===i.length)return null;var o=Object.values(t),u=o.length,a=[];a.push({name:"Column count",successDirection:c.oH.column_count,value:(0,s.x6)(u)}),i.forEach((function(e){if(c.Zu.includes(e)){var n=c.CC[e],t=r[e],i=c.OD[e];a.push({name:n,successDirection:c.oH[e],value:(0,s.x6)(t),warning:i})}}));var d=(0,l.QO)(o),p=d.countCategory,f=d.countDatetime,h=d.countNumerical;return a.push({name:"Categorical Features",rate:p/u,value:(0,s.x6)(p)},{name:"Numerical Features",rate:h/u,value:(0,s.x6)(h)},{name:"Datetime Features",rate:f/u,value:(0,s.x6)(f)}),a}function h(e){return"string"===typeof e?e:JSON.stringify(e)}function m(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return d(d({},e),{},{value:h(n)})}))}function g(e,n){return n===o.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===o.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function j(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),c=t[0],o=t[1],l=o;try{l=JSON.parse(o)}catch(s){}return d(d({},e),{},(0,i.Z)({},c,l))}),{}):e}},93348:function(e,n,t){"use strict";t.d(n,{U5:function(){return l},Xm:function(){return i},Z4:function(){return s},fq:function(){return o}});var r,i,c=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(i||(i={}));var o,l,s=(r={},(0,c.Z)(r,i.API,(function(){return"API"})),(0,c.Z)(r,i.EVENT,(function(){return"event"})),(0,c.Z)(r,i.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(o||(o={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={}))},82944:function(e,n,t){"use strict";var r=t(82394),i=t(91835),c=t(82684),o=t(46313),l=t(69898),s=t(28598);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=o.default.input.withConfig({displayName:"TextInput__TextInputStyle",componentId:"sc-1ii4qtc-0"})(["",""],l.p),p=function(e,n){var t=(0,i.Z)({},e);return(0,s.jsx)(l.Z,a(a({},t),{},{input:(0,s.jsx)(d,a({},t)),ref:n}))};n.Z=c.forwardRef(p)},90996:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ae}});var r,i=t(12757),c=t(77837),o=t(82394),l=t(38860),s=t.n(l),u=t(82684),a=t(83455),d=t(34376),p=t(60328),f=t(34744),h=t(67971),m=t(87372),g=t(51099),j=t(38965),v=t(62694),x=t(93348),b=t(86673),Z=t(17903),y=t(19711),O=t(41374),_=t(56681),P=t(2850),w=t(49125),I=t(10503),S=t(59920),E=t(24224);!function(e){e.AWS="aws_event"}(r||(r={}));var k=[{label:function(){return"AWS"},uuid:r.AWS}],C=(0,E.HK)(k,(function(e){return e.uuid})),T=t(58122),D=t(7715),M=t(96510),N=t(66653),A=t(59e3),H=t(28598);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q,z=function(e){var n=e.fetchPipelineSchedule,t=e.pipeline,r=e.pipelineSchedule,c=e.variables,o=(0,d.useRouter)(),l=(t||{}).uuid,s=r||{},E=s.id,k=s.event_matchers,F=s.name,q=s.schedule_interval,z=s.schedule_type,V=s.start_time,L=s.status,U=s.variables,X=void 0===U?{}:U,J=(0,A.iV)(),W=O.ZP.pipeline_runs.pipeline_schedules.list(E,{_limit:30,_offset:30*(null!==J&&void 0!==J&&J.page?J.page:0)},{refreshInterval:3e3,revalidateOnFocus:!0}),G=W.data,K=W.mutate,Y=(0,u.useMemo)((function(){return(null===G||void 0===G?void 0:G.pipeline_runs)||[]}),[G]),B=(0,u.useMemo)((function(){return(null===G||void 0===G?void 0:G.total_count)||[]}),[G]),Q=(0,u.useState)(null),$=Q[0],ee=Q[1],ne=(0,u.useMemo)((function(){var e=null!==J&&void 0!==J&&J.page?J.page:0;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(v.Z,{fetchPipelineRuns:K,onClickRow:function(e){return ee((function(n){var t=Y[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:Y,selectedRun:$}),(0,H.jsx)(b.Z,{p:2,children:(0,H.jsx)(g.Z,{page:Number(e),maxPages:9,onUpdate:function(e){var n=Number(e),t=R(R({},J),{},{page:n>=0?n:0});o.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(l,"/triggers/").concat(E,"?").concat((0,A.uM)(t)))},totalPages:Math.ceil(B/30)})})]})}),[K,t,Y,$]),te=(0,u.useState)(_.G[0]),re=te[0],ie=te[1],ce=(0,a.Db)((function(e){return O.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),oe=(0,i.Z)(ce,2),le=oe[0],se=oe[1].isLoading,ue=(0,u.useMemo)((function(){return x.fq.ACTIVE===L}),[L]),ae=(0,u.useMemo)((function(){var e,n={default:!0,size:1.5*w.iI},t=[[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.VW,R({},n)),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Trigger type"})]},"trigger_type_label"),(0,H.jsx)(y.ZP,{monospace:!0,children:null===(e=x.Z4[z])||void 0===e?void 0:e.call(x.Z4)},"trigger_type")],[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.rs,R({},n)),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Status"})]},"trigger_status_label"),(0,H.jsx)(y.ZP,{danger:!ue,monospace:!0,success:ue,children:L},"trigger_status")]];return q&&t.push([(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.Pf,R({},n)),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Frequency"})]},"trigger_frequency_label"),(0,H.jsx)(y.ZP,{monospace:!0,children:q.replace("@","")},"trigger_frequency")]),V&&t.push([(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.aw,R({},n)),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Start date"})]},"trigger_start_date_label"),(0,H.jsx)(y.ZP,{monospace:!0,children:V},"trigger_start_date")]),(0,H.jsx)(Z.Z,{columnFlex:[null,1],rows:t})}),[ue,q,V,z]),de=(0,u.useMemo)((function(){return X||{}}),[X]),pe=(0,u.useMemo)((function(){var e,n=[];return(0,D.Qr)(de)?n=(0,T.wx)(c,(function(e){return"global"===e.uuid})):Object.entries(de).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],c=t[1];n.push({uuid:r,value:(0,T.FS)(c)})})),"undefined"!==typeof(n=(0,T.JZ)(n||[],z))&&null!==(e=n)&&void 0!==e&&e.length?(0,H.jsx)(Z.Z,{columnFlex:[null,1],rows:n.map((function(e){var n=e.uuid,t=e.value;return[(0,H.jsx)(y.ZP,{default:!0,monospace:!0,small:!0,children:n},"settings_variable_label_".concat(n)),(0,H.jsx)(y.ZP,{monospace:!0,small:!0,children:t},"settings_variable_".concat(n))]}))}):null}),[z,X,c]),fe=(0,u.useMemo)((function(){return(0,H.jsx)(Z.Z,{columnFlex:[null,1],columns:[{uuid:"Provider"},{uuid:"Event"}],rows:null===k||void 0===k?void 0:k.map((function(e,n){var t=e.event_type,r=e.name;return[(0,H.jsx)(y.ZP,{default:!0,monospace:!0,children:C[t].label()},"".concat(t,"_").concat(n,"_label")),(0,H.jsx)(y.ZP,{monospace:!0,children:r},"".concat(t,"_").concat(n,"_name"))]}))})}),[k]);return(0,H.jsxs)(j.Z,{afterHidden:!$,before:(0,H.jsxs)(P.M,{children:[(0,H.jsxs)(b.Z,{mb:w.HN,pt:w.cd,px:w.cd,children:[(0,H.jsxs)(b.Z,{mb:w.cd,children:[x.Xm.TIME===z&&(0,H.jsx)(I.kO,{size:5*w.iI}),x.Xm.EVENT===z&&(0,H.jsx)(I.Jp,{size:5*w.iI}),!z&&(0,H.jsx)(I.VW,{size:5*w.iI})]}),(0,H.jsx)(m.Z,{children:F})]}),(0,H.jsx)(b.Z,{px:w.cd,children:(0,H.jsx)(m.Z,{level:5,children:"Settings"})}),(0,H.jsx)(f.Z,{light:!0,mt:1,short:!0}),ae,(null===k||void 0===k?void 0:k.length)>=1&&(0,H.jsxs)(b.Z,{my:w.HN,children:[(0,H.jsx)(b.Z,{px:w.cd,children:(0,H.jsx)(m.Z,{level:5,children:"Events"})}),(0,H.jsx)(f.Z,{light:!0,mt:1,short:!0}),fe]}),pe&&(0,H.jsxs)(b.Z,{my:w.HN,children:[(0,H.jsx)(b.Z,{px:w.cd,children:(0,H.jsx)(m.Z,{level:5,children:"Runtime variables"})}),(0,H.jsx)(f.Z,{light:!0,mt:1,short:!0}),pe]})]}),beforeWidth:34*w.iI,breadcrumbs:[{label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(l,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{label:function(){return F},linkProps:{as:"/pipelines/".concat(l,"/triggers/").concat(E),href:"/pipelines/[pipeline]/triggers/[...slug]"}}],buildSidekick:function(e){return(0,_.Z)(R(R({},e),{},{selectedRun:$,selectedTab:re,setSelectedTab:ie}))},pageName:S.M.TRIGGERS,pipeline:t,subheader:(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(p.Z,{beforeIcon:ue?(0,H.jsx)(I.dz,{size:2*w.iI}):(0,H.jsx)(I.Py,{inverted:!0,size:2*w.iI}),danger:ue,loading:se,onClick:function(e){(0,N.j)(e),le({id:E,status:ue?x.fq.INACTIVE:x.fq.ACTIVE})},outline:!0,success:!ue,children:ue?"Pause trigger":"Start trigger"}),(0,H.jsx)(b.Z,{mr:w.cd}),(0,H.jsx)(p.Z,{linkProps:{as:"/pipelines/".concat(l,"/triggers/").concat(E,"/edit"),href:"/pipelines/[pipeline]/triggers/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit trigger"})]}),title:function(){return F},uuid:"triggers/detail",children:[(0,H.jsx)(b.Z,{mt:w.cd,px:w.cd,children:(0,H.jsx)(m.Z,{level:5,children:"Runs for this trigger"})}),(0,H.jsx)(f.Z,{light:!0,mt:w.cd,short:!0}),ne]})},V=t(77555),L=t(44495),U=t(47999),X=t(22673),J=t(64866),W=t(21764),G=t(10919),K=t(46261);function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.LEFT="left",e.RIGHT="right"}(q||(q={}));var Q=function(e){var n,t=e.children,r=e.copiedText,i=e.iconPosition,c=void 0===i?q.LEFT:i,o=e.inverted,l=e.linkProps,s=e.linkText,u=e.monospace,a=e.muted,d=e.small,p=e.toastMessage,f=e.withCopyIcon;return t?n=(0,H.jsx)("span",{children:t}):f&&(n=(0,H.jsx)(G.Z,B(B({href:"#",inline:!0,muted:a,preventDefault:!0,sameColorAsText:!0,small:d},l),{},{children:(0,H.jsxs)(h.Z,{alignItems:"center",children:[c===q.LEFT&&(0,H.jsx)(b.Z,{mr:1,children:(0,H.jsx)(h.Z,{alignItems:"center",children:(0,H.jsx)(I.CK,{inverted:o,muted:a,size:2*w.iI})})}),s&&(0,H.jsx)(y.ZP,{inverted:o,monospace:u,muted:a,small:d,children:s}),c===q.RIGHT&&(0,H.jsx)(b.Z,{ml:1,children:(0,H.jsx)(h.Z,{alignItems:"center",children:(0,H.jsx)(I.CK,{inverted:o,muted:a})})})]})}))),(0,H.jsx)(K.Z,{block:!0,label:"Copy",size:null,widthFitContent:!0,children:(0,H.jsx)(J.CopyToClipboard,{onCopy:function(){return W.Am.success(p||"Successfully copied to clipboard.",{position:W.Am.POSITION.BOTTOM_RIGHT,toastId:r})},text:r,children:n})})},$=t(28358),ee=t(93461),ne=t(26304),te=t(46313),re=t(23831),ie=t(2005),ce=t(31012),oe=["children","large","lineHeight","ordered"];function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ue=(0,te.css)([""," "," "," "," "," "," "," "," "," ",""],(function(e){return!e.muted&&"\n    color: ".concat((e.theme.content||re.Z.content).default,";\n  ")}),(function(e){return e.muted&&"\n    color: ".concat((e.theme.content||re.Z.content).muted,";\n  ")}),(function(e){return e.inverted&&"\n    color: ".concat((e.theme.content||re.Z.content).inverted,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return!e.monospace&&"\n    font-family: ".concat(ie.ry,";\n  ")}),(function(e){return e.monospace&&"\n    font-family: ".concat(ie.Vp,";\n  ")}),(function(e){return e.large&&"\n    ".concat(ce.x_,"\n  ")}),(function(e){return!e.large&&!e.small&&"\n    ".concat(ce.i3,"\n  ")}),(function(e){return e.small&&"\n    ".concat(ce.J5,"\n  ")}),(function(e){return e.lineHeight&&"\n    line-height: ".concat(e.lineHeight,"px !important;\n  ")})),ae=te.default.ul.withConfig({displayName:"List__UnorderedListStyle",componentId:"sc-1f6yhbi-0"})(["",""],ue),de=te.default.ol.withConfig({displayName:"List__OrderedListStyle",componentId:"sc-1f6yhbi-1"})(["",""],ue),pe=te.default.li.withConfig({displayName:"List__ListItemStyle",componentId:"sc-1f6yhbi-2"})(["",""],(function(e){return e.large&&e.marginTop&&"\n    margin-top: ".concat(1*w.iI,"px;\n  ")}));var fe=function(e){var n=e.children,t=e.large,r=e.lineHeight,i=e.ordered,c=(0,ne.Z)(e,oe),o=i?de:ae;return(0,H.jsx)(o,se(se({large:t,lineHeight:r},c),{},{children:u.Children.map(n,(function(e,n){return(0,H.jsx)(pe,se(se({large:t,marginTop:n>=1},c),{},{children:u.cloneElement(e)}),e.props.key)}))}))},he=t(98781),me=t(55378),ge=t(82944),je=t(69898),ve=["checked","onCheck"];function xe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?xe(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ze=te.default.label.withConfig({displayName:"ToggleSwitch__ToggleSwitchStyle",componentId:"sc-179r5zs-0"})([""," position:relative;display:inline-block;width:","px;min-width:","px;height:",'px;& input[type="checkbox"]{display:none;}& span{position:absolute;cursor:',";background-color:",";border-radius:13px;",';top:0;right:0;bottom:0;left:0;transition:background-color 0.2s ease;}& span::before{position:absolute;content:"";left:2px;top:2px;width:22px;height:22px;background-color:#787A85;border-radius:50%;transition:transform 0.3s ease;}& input[type="checkbox"]:checked + span::before{transform:translateX(20px);}',""],je.p,46,46,26,(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?re.Z.monotone.white:re.Z.monotone.black}),(function(e){return e.disabled&&"border: 1px solid ".concat(re.Z.monotone.grey200)}),(function(e){return!e.disabled&&'\n    & input[type="checkbox"]:checked + span {\n      background-color: #6AA1E0;\n    }\n\n    & input[type="checkbox"]:checked + span::before {\n      background-color: '.concat(re.Z.monotone.white,";\n    }\n  ")})),ye=function(e,n){var t=e.checked,r=e.onCheck,i=(0,ne.Z)(e,ve);return(0,H.jsx)(je.Z,be(be({},i),{},{input:(0,H.jsxs)(Ze,be(be({},i),{},{noBackground:!0,noBorder:!0,children:[(0,H.jsx)("input",{checked:t,type:"checkbox"}),(0,H.jsx)("span",{onClick:function(){return r((function(e){return!e}))}})]})),noBackground:!0,ref:n}))},Oe=u.forwardRef(ye),_e=t(73942),Pe=te.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],_e.TR,14*w.iI,w.cd*w.iI,w.cd*w.iI,40*w.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||re.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||re.Z.interactive).linkPrimary,";\n  ")})),we=te.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;",""],_e.n_,w.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||re.Z.interactive).defaultBackground,";\n  ")})),Ie=t(19395);function Se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Se(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ke=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:x.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:x.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:x.Xm.API}];return e?n.slice(0,1):n};var Ce=function(e){var n=e.fetchPipelineSchedule,t=e.pipeline,r=e.pipelineSchedule,c=e.variables,l=(0,d.useRouter)(),s=null===t||void 0===t?void 0:t.uuid,g=null===r||void 0===r?void 0:r.id,v=(null===t||void 0===t?void 0:t.type)===he.q.STREAMING,_=(0,u.useState)(null),P=_[0],C=_[1],N=(0,u.useState)([]),A=N[0],F=N[1],R=(0,u.useState)(!1),q=R[0],z=R[1],J=(0,u.useState)({}),W=J[0],K=J[1],Y=(0,u.useState)(r),B=Y[0],ne=Y[1],te=(0,u.useState)(!1),re=te[0],ie=te[1],ce=(0,u.useState)(null),oe=ce[0],le=ce[1],se=(0,u.useMemo)((function(){return(0,T.wx)(c,(function(e){return"global"===e.uuid}))}),[c]),ue=B||{},ae=ue.name,de=ue.schedule_interval,pe=ue.schedule_type,je=ue.start_time,ve=ue.variables,xe=void 0===ve?{}:ve,be=(0,u.useState)(null),Ze=be[0],ye=be[1],_e=(0,u.useState)("00"),Se=_e[0],Ce=_e[1],Te=(0,u.useState)("00"),De=Te[0],Me=Te[1],Ne=O.ZP.event_rules.detail("aws").data,Ae=(0,u.useMemo)((function(){return(null===Ne||void 0===Ne?void 0:Ne.event_rules)||[]}),[Ne]),He=(0,u.useMemo)((function(){return(0,E.HK)(Ae,(function(e){return e.name}))}),[Ae]),Fe=(0,a.Db)(O.ZP.pipeline_schedules.useUpdate(g),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){n(),l.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(s,"/triggers/").concat(g))},onErrorCallback:function(e,n){return C({errors:n,response:e})}})}}),Re=(0,i.Z)(Fe,2),qe=Re[0],ze=Re[1].isLoading,Ve=(0,u.useMemo)((function(){return xe||{}}),[xe]);(0,u.useEffect)((function(){if(je){var e=je.split(" ")[1];ye((0,Ie.e)(je)),Ce(e.substring(0,2)),Me(e.substring(3,5))}}),[je]),(0,u.useEffect)((function(){Ve&&Object.keys(Ve).length>0&&z(!0)}),[Ve]),(0,u.useEffect)((function(){K(q?null===se||void 0===se?void 0:se.reduce((function(e,n){var t=n.uuid,r=n.value;return Ee(Ee({},e),{},(0,o.Z)({},t,Ve[t]||r))}),{}):null)}),[se,q]),(0,u.useEffect)((function(){r&&(F(r.event_matchers),Ue?(ne(Ee(Ee({},r),{},{schedule_interval:"custom"})),le(de)):ne(v?Ee(Ee({},r),{},{schedule_interval:x.U5.ONCE}):r))}),[r]);var Le=(0,u.useCallback)((function(){var e=Ee(Ee({},(0,D.GL)(B,["name","schedule_type"])),{},{event_matchers:[],schedule_interval:null,start_time:null,variables:(0,T.e7)(W)});x.Xm.EVENT===B.schedule_type?e.event_matchers=A:(e.schedule_interval=Ue?oe:B.schedule_interval,e.start_time=Ze&&Se&&De?"".concat(Ze.toISOString().split("T")[0]," ").concat(Se,":").concat(De,":00"):null),qe({pipeline_schedule:e})}),[oe,Ze,A,W,B,Se,De,qe]),Ue=(0,u.useMemo)((function(){return de&&!Object.values(x.U5).includes(de)}),[de]),Xe=(0,u.useMemo)((function(){var e=[[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.KJ,{default:!0,size:1.5*w.iI}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Trigger name"})]},"trigger_name_detail"),(0,H.jsx)(ge.Z,{monospace:!0,onChange:function(e){e.preventDefault(),ne((function(n){return Ee(Ee({},n),{},{name:e.target.value})}))},placeholder:"Name this trigger",value:ae},"trigger_name_input_detail")],[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.Pf,{default:!0,size:1.5*w.iI}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Frequency"})]},"frequency"),(0,H.jsxs)(me.Z,{monospace:!0,onChange:function(e){e.preventDefault();var n=e.target.value;ne((function(e){return Ee(Ee({},e),{},{schedule_interval:n})}))},placeholder:"Choose the frequency to run",value:de,children:[!de&&(0,H.jsx)("option",{value:""}),Object.values(x.U5).map((function(e){return(0,H.jsx)("option",{value:e,children:e.substring(1)},e)})),(0,H.jsx)("option",{value:"custom",children:"custom"},"custom")]},"frequency_input")],[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.aw,{default:!0,size:1.5*w.iI}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Start date and time"})]},"start_time"),(0,H.jsxs)("div",{children:[!re&&(0,H.jsx)(ge.Z,{monospace:!0,onClick:function(){return ie((function(e){return!e}))},placeholder:"YYYY-MM-DD HH:MM",value:Ze?"".concat(Ze.toISOString().split("T")[0]," ").concat(Se,":").concat(De):""}),(0,H.jsx)("div",{style:{width:"400px"},children:(0,H.jsx)(U.Z,{disableEscape:!0,onClickOutside:function(){return ie(!1)},open:re,children:(0,H.jsxs)(we,{children:[(0,H.jsx)(L.ZP,{onChange:ye,value:Ze}),(0,H.jsx)(b.Z,{mb:2}),(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(y.ZP,{default:!0,large:!0,children:"Time (UTC):"}),(0,H.jsx)(b.Z,{pr:2}),(0,H.jsx)(me.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),Ce(e.target.value)},paddingRight:5*w.iI,placeholder:"HH",value:Se,children:(0,E.m5)(24,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,H.jsx)("option",{value:e,children:e},"hour_".concat(e))}))},"trigger_schedule_start_time_hour"),(0,H.jsx)(b.Z,{px:1,children:(0,H.jsx)(y.ZP,{bold:!0,large:!0,children:":"})}),(0,H.jsx)(me.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),Me(e.target.value)},paddingRight:5*w.iI,placeholder:"MM",value:De,children:(0,E.m5)(60,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,H.jsx)("option",{value:e,children:e},"minute_".concat(e))}))},"trigger_schedule_start_time_minute")]})]})})})]},"start_time_input")]];return v&&e.splice(1,1),Ue&&e.splice(2,0,[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.EK,{default:!0,size:1.5*w.iI}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Cron expression"})]},"cron_expression"),(0,H.jsx)(ge.Z,{monospace:!0,onChange:function(e){e.preventDefault(),le(e.target.value)},placeholder:"* * * * *",value:oe},"cron_expression_input")]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(b.Z,{mb:2,px:w.cd,children:(0,H.jsx)(m.Z,{children:"Settings"})}),(0,H.jsx)(f.Z,{light:!0,short:!0}),(0,H.jsx)(Z.Z,{columnFlex:[null,1],rows:e})]})}),[oe,Ze,B,re,Se,De]),Je=(0,u.useCallback)((function(e,n){F((function(t){return Object.entries(n).forEach((function(n){var r=(0,i.Z)(n,2),c=r[0],o=r[1];t[e][c]=o})),(0,V.Z)(t)}))}),[F]),We=(0,u.useMemo)((function(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(b.Z,{mb:w.cd,px:w.cd,children:(0,H.jsx)(m.Z,{children:"Settings"})}),(0,H.jsx)(f.Z,{light:!0,short:!0}),(0,H.jsx)(Z.Z,{columnFlex:[null,1],rows:[[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.KJ,{default:!0,size:1.5*w.iI}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Trigger name"})]},"trigger_name_event"),(0,H.jsx)(ge.Z,{monospace:!0,onChange:function(e){e.preventDefault(),ne((function(n){return Ee(Ee({},n),{},{name:e.target.value})}))},placeholder:"Name this trigger",value:ae},"trigger_name_input_event")]]}),(0,H.jsxs)(b.Z,{mb:2,mt:5,px:w.cd,children:[(0,H.jsx)(m.Z,{children:"Events"}),(0,H.jsxs)(y.ZP,{muted:!0,children:["Add 1 or more event that will trigger this pipeline to run.",(0,H.jsx)("br",{}),"If you add more than 1 event, this pipeline will trigger if any of the events are received."]}),(0,H.jsxs)(b.Z,{mt:w.Mq,children:[(0,H.jsx)(y.ZP,{bold:!0,large:!0,children:"AWS events"}),(0,H.jsxs)(y.ZP,{muted:!0,children:["In order to retrieve all the possible AWS events you can trigger your pipeline from,",(0,H.jsx)("br",{}),"you\u2019ll need to set 3 environment variables (",(0,H.jsx)(G.Z,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",openNewWindow:!0,underline:!0,children:"more info here"}),"):"]}),(0,H.jsx)(b.Z,{mt:1,children:(0,H.jsxs)(fe,{monospace:!0,ordered:!0,children:[(0,H.jsx)(y.ZP,{monospace:!0,children:"AWS_REGION_NAME"}),(0,H.jsx)(y.ZP,{monospace:!0,children:"AWS_ACCESS_KEY_ID"}),(0,H.jsx)(y.ZP,{monospace:!0,children:"AWS_SECRET_ACCESS_KEY"})]})})]})]}),(0,H.jsx)(f.Z,{light:!0,short:!0}),(null===A||void 0===A?void 0:A.length)>=1&&(0,H.jsx)(Z.Z,{alignTop:!0,columnFlex:[1,1,2,null],columns:[{uuid:"Provider"},{uuid:"Event"},{uuid:"Pattern"},{label:function(){return""},uuid:"delete"}],rows:null===A||void 0===A?void 0:A.map((function(e,n){var t=e.event_type,r=e.name,i=e.pattern,c=e.id||"".concat(t,"-").concat(r,"-").concat(n,"-").concat(JSON.stringify(i)),o=[];return i&&JSON.stringify(i,null,2).split("\n").forEach((function(e){o.push("    ".concat(e))})),[(0,H.jsxs)(me.Z,{monospace:!0,onChange:function(e){return Je(n,{event_type:e.target.value})},placeholder:"Event provider",value:t||"",children:[!t&&(0,H.jsx)("option",{value:""}),k.map((function(e){var n=e.label,t=e.uuid;return(0,H.jsx)("option",{value:t,children:n()},t)}))]},"event-provider-".concat(c)),(0,H.jsxs)(me.Z,{monospace:!0,onChange:function(e){var t,r=e.target.value,i=null===(t=He[r])||void 0===t?void 0:t.event_pattern;Je(n,{name:r,pattern:i?JSON.parse(i):null})},placeholder:"Event name",value:r,children:[!r&&(0,H.jsx)("option",{value:""}),Ae.map((function(e){var n=e.name;return(0,H.jsx)("option",{value:n,children:n},n)}))]},"event-name-".concat(c)),i&&(0,H.jsx)(X.Z,{language:"json",small:!0,source:o.join("\n")}),(0,H.jsx)(p.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return F((function(e){return(0,E.oM)(e,n)}))},children:(0,H.jsx)(I.rF,{default:!0,size:2*w.iI})},"remove_event")]}))}),(0,H.jsx)(b.Z,{p:w.cd,children:(0,H.jsx)(p.Z,{beforeIcon:(0,H.jsx)(I.mm,{size:2*w.iI}),onClick:function(){return F((function(e){return e.concat({})}))},outline:!0,children:"Add event matcher"})})]})}),[A,Ae,ae]),Ge=(0,u.useMemo)((function(){var e,n="".concat(window.origin,"/api/pipeline_schedules/").concat(null===r||void 0===r?void 0:r.id,"/pipeline_runs");return(e=window.location.port)&&(n=n.replace(e,"6789")),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(b.Z,{mb:w.cd,px:w.cd,children:(0,H.jsx)(m.Z,{children:"Settings"})}),(0,H.jsx)(f.Z,{light:!0,short:!0}),(0,H.jsx)(Z.Z,{columnFlex:[null,1],rows:[[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(I.KJ,{default:!0,size:1.5*w.iI}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(y.ZP,{default:!0,children:"Trigger name"})]},"trigger_name_api"),(0,H.jsx)(ge.Z,{monospace:!0,onChange:function(e){e.preventDefault(),ne((function(n){return Ee(Ee({},n),{},{name:e.target.value})}))},placeholder:"Name this trigger",value:ae},"trigger_name_input_api")]]}),(0,H.jsxs)(b.Z,{mb:2,mt:5,px:w.cd,children:[(0,H.jsx)(m.Z,{children:"Endpoint"}),(0,H.jsxs)(y.ZP,{muted:!0,children:["Make a ",(0,H.jsx)(y.ZP,{bold:!0,inline:!0,monospace:!0,children:"POST"})," request to the following endpoint:"]}),(0,H.jsx)(b.Z,{mt:w.Mq,children:(0,H.jsx)(Q,{copiedText:n,linkText:n,monospace:!0,withCopyIcon:!0})})]}),(0,H.jsxs)(b.Z,{mb:2,mt:5,px:w.cd,children:[(0,H.jsx)(m.Z,{children:"Payload"}),(0,H.jsx)(y.ZP,{muted:!0,children:"You can optionally include runtime variables in your request payload. These runtime variables are accessible from within each pipeline block."}),(0,H.jsx)(b.Z,{mt:w.Mq,children:(0,H.jsx)(Q,{withCopyIcon:!0,copiedText:'{\n  "pipeline_run": {\n    "variables": {\n      "key1": "value1",\n      "key2": "value2"\n    }\n  }\n}\n',children:(0,H.jsx)(X.Z,{language:"json",small:!0,source:'\n    {\n      "pipeline_run": {\n        "variables": {\n          "key1": "value1",\n          "key2": "value2"\n        }\n      }\n    }\n'})})})]}),(0,H.jsxs)(b.Z,{mb:2,mt:5,px:w.cd,children:[(0,H.jsx)(m.Z,{children:"Sample cURL command"}),(0,H.jsx)(b.Z,{mt:w.Mq,children:(0,H.jsx)(X.Z,{language:"bash",small:!0,source:"\n    curl -X POST ".concat(n,' \\\n      --header \'Content-Type: application/json\' \\\n      --data \'\n    {\n      "pipeline_run": {\n        "variables": {\n          "key1": "value1",\n          "key2": "value2"\n        }\n      }\n    }\'\n')})})]})]})}),[ae,r,"object"]),Ke=!pe||x.Xm.TIME===pe&&!(v&&Ze||!v&&Ze&&de)||x.Xm.EVENT===pe&&(!(null!==A&&void 0!==A&&A.length)||!A.every((function(e){var n=e.event_type,t=e.name;return n&&t}))),Ye=(0,u.useMemo)((function(){return!(0,D.Qr)(se)&&(0,H.jsxs)(b.Z,{p:w.cd,children:[(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(b.Z,{mr:2,children:(0,H.jsx)(Oe,{checked:q,onCheck:z})}),(0,H.jsx)(y.ZP,{monospace:!0,muted:!0,children:"Overwrite global variables"})]}),q&&W&&Object.entries(W).length>0&&(0,H.jsx)(b.Z,{mt:2,children:(0,H.jsx)(Z.Z,{columnFlex:[null,1],columns:[{uuid:"Variable"},{uuid:"Value"}],rows:Object.entries(W).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[(0,H.jsx)(y.ZP,{default:!0,monospace:!0,children:t},"variable_".concat(t)),(0,H.jsx)(ge.Z,{borderless:!0,monospace:!0,onChange:function(e){e.preventDefault(),K((function(n){return Ee(Ee({},n),{},(0,o.Z)({},t,e.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:r},"variable_uuid_input_".concat(t))]}))})})]})}),[se,q,W,z]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(j.Z,{after:Ye,breadcrumbs:[{label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(s,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{label:function(){return null===r||void 0===r?void 0:r.name},linkProps:{as:"/pipelines/".concat(s,"/triggers/").concat(g),href:"/pipelines/[pipeline]/triggers/[...slug]"}}],pageName:S.M.TRIGGERS,pipeline:t,subheader:(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(p.Z,{disabled:Ke,loading:ze,onClick:Le,outline:!0,primary:!0,children:"Save changes"}),(0,H.jsx)(b.Z,{mr:1}),(0,H.jsx)(p.Z,{linkProps:{href:"/pipelines/[pipeline]/triggers/[...slug]",as:"/pipelines/".concat(s,"/triggers/").concat(g)},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Cancel"})]}),title:function(){return"Edit ".concat(null===r||void 0===r?void 0:r.name)},uuid:"triggers/edit",children:[(0,H.jsxs)(b.Z,{p:w.cd,children:[(0,H.jsxs)(b.Z,{mb:2,children:[(0,H.jsx)(m.Z,{children:"Trigger type"}),(0,H.jsx)(y.ZP,{muted:!0,children:"How would you like this pipeline to be triggered?"})]}),(0,H.jsx)(h.Z,{children:ke(v).map((function(e){var n=e.label,t=e.description,r=e.uuid,i=pe===r,c=pe&&!i;return(0,H.jsx)(p.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){x.Xm.EVENT!==r||null!==A&&void 0!==A&&A.length||F([{}]),ne((function(e){return Ee(Ee({},e),{},{schedule_type:r})}))},children:(0,H.jsx)(Pe,{selected:i,children:(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(ee.Z,{children:(0,H.jsx)("input",{checked:i,type:"radio"})}),(0,H.jsx)(b.Z,{mr:w.cd}),(0,H.jsxs)(ee.Z,{alignItems:"flex-start",flexDirection:"column",children:[(0,H.jsx)(m.Z,{bold:!0,default:!i&&!c,level:5,muted:!i&&c,children:n()}),(0,H.jsx)(y.ZP,{default:!i&&!c,leftAligned:!0,muted:c,children:t()})]})]})})},r)}))})]}),(0,H.jsxs)(b.Z,{mt:5,children:[x.Xm.TIME===pe&&Xe,x.Xm.EVENT===pe&&We,x.Xm.API===pe&&Ge]})]}),P&&(0,H.jsx)($.Z,Ee(Ee({},P),{},{onClose:function(){return C(null)}}))]})},Te=t(70543);function De(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Me(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?De(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Ne(e){var n=e.pipelineScheduleId,t=e.pipelineUUID,r=e.subpath,i=O.ZP.variables.pipelines.list(t).data,c=null===i||void 0===i?void 0:i.variables,o=O.ZP.pipeline_schedules.detail(n,{include_event_matchers:!0}),l=o.data,s=o.mutate,u=null===l||void 0===l?void 0:l.pipeline_schedule,a=O.ZP.pipelines.detail(t).data,d=Me(Me({},null===a||void 0===a?void 0:a.pipeline),{},{uuid:t});return Te.b===r?(0,H.jsx)(Ce,{fetchPipelineSchedule:s,pipeline:d,pipelineSchedule:u,variables:c}):(0,H.jsx)(z,{fetchPipelineSchedule:s,pipeline:d,pipelineSchedule:u,variables:c})}Ne.getInitialProps=function(){var e=(0,c.Z)(s().mark((function e(n){var t,r,c,o,l,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.query,r=t.pipeline,c=t.slug,!Array.isArray(c)){e.next=4;break}return o=(0,i.Z)(c,2),l=o[0],u=o[1],e.abrupt("return",{pipelineScheduleId:l,pipelineUUID:r,subpath:u});case 4:return e.abrupt("return",{pipelineUUID:r});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Ae=Ne},95488:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers/[...slug]",function(){return t(90996)}])}},function(e){e.O(0,[5339,2083,6674,1774,3668,7619,5119,2874,9056,8933,1273,2151,8607,5378,5998,1476,9774,2888,179],(function(){return n=95488,e(e.s=n);var n}));var n=e.O();_N_E=n}]);