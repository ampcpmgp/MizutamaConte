(this["webpackJsonpmizutama-conte"]=this["webpackJsonpmizutama-conte"]||[]).push([[0],{231:function(e,n,t){"use strict";t.r(n);var i,c,r,a,o,s,l,d,u,b,j,v,h,m,p,O,x,g,f,w,z,y,k,S,C,I,W,F,E,T=t(10),L=t.n(T),P=t(34),A=t.n(P),M=t(16),N=t(21),D=t(233),B=t(69),G=t(232),H=t(17),Q=Object(H.a)(i||(i=Object(M.a)(["\n  html {\n    height: 100%;\n    overflow: hidden;\n  }\n  body {\n    height: 100%;\n    overflow: hidden;\n    margin: 0;\n    padding: 0\n  }\n  #root {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n  }\n  button {\n    -webkit-app-region: no-drag;\n  }\n  div.hover {\n   :hover {\n     background-color: var(--spectrum-alias-highlight-hover);\n   }\n  }\n  textarea.hover {\n    :hover {\n      color: var(--spectrum-alias-text-color-hover);\n      border: 1px solid var(--spectrum-alias-border-color-hover);\n      border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n    }\n  }\n  div.isHover {\n    background-color: var(--spectrum-alias-highlight-hover);\n  }\n  li.isHover {\n    background-color: var(--spectrum-alias-highlight-hover);\n    border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  }\n  a {\n    cursor: default;\n    color: var(--spectrum-alias-text-color);\n    :hover {\n      color: var(--spectrum-alias-text-color-hover);\n    }\n  }\n"]))),K=t(6),X=t(234),J=t(85),R=t(25),U=t(102),V=t.n(U),Z=t(103),Y=t.n(Z),q=t(104),$=t.n(q),_=t(41),ee=t(2),ne=H.b.div(c||(c=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: var(--spectrum-global-dimension-size-85, var(--spectrum-alias-size-85));\n"]))),te=function(){var e=Object(T.useGlobal)("tool"),n=Object(K.a)(e,2),t=n[0],i=n[1],c=function(){document.activeElement.blur()};return Object(_.a)("v",(function(){i(new Set(["Select"])),c()})),Object(_.a)("c",(function(){i(new Set(["Crop"])),c()})),Object(_.a)("t",(function(){i(new Set(["Text"])),c()})),Object(ee.jsx)(ne,{children:Object(ee.jsxs)(X.a,{orientation:"vertical",selectionMode:"single",isQuiet:!0,isEmphasized:!0,selectedKeys:t,onSelectionChange:i,children:[Object(ee.jsxs)(J.b,{placement:"end",children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(V.a,{})},"Select"),Object(ee.jsx)(J.a,{children:"Select (V)"})]}),Object(ee.jsxs)(J.b,{placement:"end",children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(Y.a,{})},"Crop"),Object(ee.jsx)(J.a,{children:"Crop (C)"})]}),Object(ee.jsxs)(J.b,{placement:"end",children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)($.a,{})},"Text"),Object(ee.jsx)(J.a,{children:"Text (T)"})]})]})})},ie=t(11),ce=t.n(ie),re=t(31),ae=t(235),oe=t(27),se=t(133),le=t(62),de=t(111),ue=t.n(de),be=t(112),je=t.n(be),ve=t(113),he=t.n(ve),me=t(114),pe=t.n(me),Oe=t(115),xe=t.n(Oe),ge=t(116),fe=t.n(ge),we=t(117),ze=t.n(we),ye=t(118),ke=t.n(ye),Se=t(48),Ce=window.api,Ie=H.b.div(r||(r=Object(M.a)(["\n  -webkit-app-region: drag;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),We=H.b.div(a||(a=Object(M.a)(["\n  -webkit-app-region: no-drag;\n"]))),Fe=H.b.div(o||(o=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  ","\n  margin-right: auto;\n"])),-1!==window.navigator.userAgent.toLowerCase().indexOf("mac")&&Ce?"margin-left: var(--spectrum-global-dimension-size-800, var(--spectrum-alias-size-800));":"margin-left: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100));"),Ee=H.b.div(s||(s=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100));\n  ","\n"])),-1!==window.navigator.userAgent.toLowerCase().indexOf("mac")&&Ce&&"&::before {\n    content: '';\n    padding-left: var(--spectrum-global-dimension-size-700, var(--spectrum-alias-size-700));\n  }"),Te=function(){var e=Object(T.useGlobal)("mode"),n=Object(K.a)(e,2),t=n[0],i=n[1],c=function(){document.activeElement.blur()};return Object(_.a)("e",(function(){i("Edit"),c()})),Object(_.a)("p",(function(){i("Preview"),c()})),Object(ee.jsx)(ae.b,{width:"fit-content",selectedKey:t,onSelectionChange:i,children:Object(ee.jsxs)(ae.a,{maxHeight:"size-500",children:[Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(je.a,{}),Object(ee.jsx)(oe.b,{children:"Edit"})]},"Edit"),Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(he.a,{}),Object(ee.jsx)(oe.b,{children:"Preview"})]},"Preview")]})})},Le=function(){var e=Object(T.useState)(""),n=Object(K.a)(e,2),t=n[0],i=n[1],c=Object(T.useGlobal)("globalFileName")[0];return Object(T.useEffect)((function(){(function(){var e=Object(re.a)(ce.a.mark((function e(){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Ce){e.next=4;break}return i(c),e.abrupt("return");case 4:return e.next=6,Ce.loadFileName();case 6:n=e.sent,i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[c,i]),Object(ee.jsx)(se.a,{isQuiet:!0,menuWidth:"size-3400","max-width":"fit-content",selectedKey:t,onSelectionChange:i,children:Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(ze.a,{}),Object(ee.jsx)(oe.b,{children:t})]},t)})},Pe=function(){var e=Object(T.useGlobal)("globalCuts")[1],n=Object(T.useGlobal)("globalPsds")[1],t=Object(T.useGlobal)("globalFileName")[1];return Object(T.useEffect)((function(){var e=document.getElementById("inputDirectory");e&&e.setAttribute("webkitdirectory",""),e&&e.setAttribute("directory",""),e&&e.setAttribute("multiple","")}),[]),Object(ee.jsxs)(Ie,{children:[Object(ee.jsxs)(Fe,{children:[!Ce&&Object(ee.jsxs)(le.a,{isQuiet:!0,onPress:function(){var e;return null===(e=document.getElementById("inputDirectory"))||void 0===e?void 0:e.click()},children:[Object(ee.jsx)(ke.a,{}),Object(ee.jsx)("input",{type:"file",style:{display:"none"},id:"inputDirectory",onChange:function(i){var c=i.target.files,r=Array.from(c),a=r.filter((function(e){return-1!==e.name.indexOf(".psd")})),o=r.filter((function(e){return-1!==e.name.indexOf(".json")}))[0];a.sort((function(e,n){return Number.parseInt(e.name.slice(1,4))-Number.parseInt(n.name.slice(1,4))})),t(o.name);var s=function(e){return new Promise((function(n){var t=new FileReader;t.onload=function(){n(t.result)},t.readAsArrayBuffer(e)}))};Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,a.reduce(function(){var e=Object(re.a)(ce.a.mark((function e(n,i){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.then(Object(re.a)(ce.a.mark((function e(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=Se.readPsd,e.next=4,s(i);case 4:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.t0.push.call(e.t0,e.t3);case 7:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Promise.resolve());case 3:n(t);case 4:case"end":return e.stop()}}),e)})))(),new Promise((function(e){var n=new FileReader;n.onload=function(){e(n.result)},n.readAsText(o,"utf8")})).then((function(n){return e(JSON.parse(n))}))}})]}),Object(ee.jsx)(le.a,{isQuiet:!0,marginX:"size-200",children:Object(ee.jsx)(ue.a,{})}),Object(ee.jsx)(We,{children:Object(ee.jsx)(Te,{})})]}),Object(ee.jsx)(Le,{}),Object(ee.jsx)(Ee,{children:Object(ee.jsxs)(X.a,{isQuiet:!0,children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(pe.a,{})},"Share"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(xe.a,{})},"Branch2"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(fe.a,{})},"Settings")]})})]})},Ae=t(120),Me=t.n(Ae),Ne=t(121),De=t.n(Ne),Be=t(122),Ge=t.n(Be),He=t(123),Qe=t.n(He),Ke=t(74),Xe=t.n(Ke),Je=t(236),Re=H.b.p(l||(l=Object(M.a)(["\n  color: var(--spectrum-alias-label-text-color);\n  font-size: var(--spectrum-global-dimension-font-size-75);\n  margin: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100)) 0;\n"]))),Ue=H.b.div(d||(d=Object(M.a)(["\n  width: var(--spectrum-global-dimension-size-700, var(--spectrum-alias-size-700));\n  color: var(--spectrum-alias-label-text-color);\n  font-size: var(--spectrum-global-dimension-font-size-75);\n  margin: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100)) 0;\n"]))),Ve=H.b.div(u||(u=Object(M.a)(["\n  width: var(--spectrum-global-dimension-size-300, var(--spectrum-alias-size-300));\n  color: var(--spectrum-alias-label-text-color);\n  font-size: var(--spectrum-global-dimension-font-size-75);\n  margin: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100)) 0;\n"]))),Ze=H.b.div(b||(b=Object(M.a)(["\n  width: var(--spectrum-global-dimension-size-200, var(--spectrum-alias-size-200));\n  color: var(--spectrum-alias-label-text-color);\n  font-size: var(--spectrum-global-dimension-font-size-75);\n  margin: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100)) 0;\n"]))),Ye=function(){var e,n,t,i,c=Object(T.useGlobal)("cut")[0];return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsxs)(B.a,{direction:"row",gap:"size-200",wrap:!0,children:[Object(ee.jsx)(Ue,{children:"Fade In"}),Object(ee.jsxs)(se.a,{width:"184px",selectedKey:null===(e=c.action)||void 0===e?void 0:e.fadeIn,defaultSelectedKey:"None",children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"None"})},"None"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"White In"})},"White In"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"Black In"})},"Black In"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"Cross"})},"Cross")]}),Object(ee.jsx)(Je.a,{label:"Duration",maxValue:480,value:null===(n=c.action)||void 0===n?void 0:n.fadeInDuration,width:"256px"}),Object(ee.jsx)(Ue,{children:"Fade Out"}),Object(ee.jsxs)(se.a,{width:"184px",selectedKey:null===(t=c.action)||void 0===t?void 0:t.fadeOut,defaultSelectedKey:"None",children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"None"})},"None"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"White Out"})},"White Out"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"Black Out"})},"Black Out"),Object(ee.jsx)(R.a,{children:Object(ee.jsx)(oe.b,{children:"Cross"})},"Cross")]}),Object(ee.jsx)(Je.a,{label:"Duration",maxValue:480,value:null===(i=c.action)||void 0===i?void 0:i.fadeOutDuration,width:"256px"})]})})},qe=t(237),$e=function(){var e,n,t,i,c,r,a,o,s,l,d,u,b,j,v,h,m,p,O=Object(T.useGlobal)("cut")[0];return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(Re,{children:"Position"}),Object(ee.jsxs)(B.a,{direction:"row",gap:"size-200",wrap:!0,children:[Object(ee.jsx)(Ve,{children:"In"}),Object(ee.jsx)(Ze,{children:"X"}),Object(ee.jsx)(qe.b,{width:"68px",isQuiet:!0,value:(null===(e=O.cameraWork)||void 0===e?void 0:e.position)?null===(n=O.cameraWork)||void 0===n||null===(t=n.position)||void 0===t?void 0:t.in.x.toString():""}),Object(ee.jsx)(Ze,{children:"Y"}),Object(ee.jsx)(qe.b,{width:"68px",isQuiet:!0,value:(null===(i=O.cameraWork)||void 0===i?void 0:i.position)?null===(c=O.cameraWork)||void 0===c||null===(r=c.position)||void 0===r?void 0:r.in.y.toString():""}),Object(ee.jsx)(Ve,{children:"Out"}),Object(ee.jsx)(Ze,{children:"X"}),Object(ee.jsx)(qe.b,{width:"68px",isQuiet:!0,value:(null===(a=O.cameraWork)||void 0===a?void 0:a.position)?null===(o=O.cameraWork)||void 0===o||null===(s=o.position)||void 0===s?void 0:s.out.x.toString():""}),Object(ee.jsx)(Ze,{children:"Y"}),Object(ee.jsx)(qe.b,{width:"68px",isQuiet:!0,value:(null===(l=O.cameraWork)||void 0===l?void 0:l.position)?null===(d=O.cameraWork)||void 0===d||null===(u=d.position)||void 0===u?void 0:u.out.y.toString():""}),Object(ee.jsx)(Ve,{children:"Scale"}),Object(ee.jsx)(Ze,{children:"In"}),Object(ee.jsx)(qe.b,{width:"68px",isQuiet:!0,value:(null===(b=O.cameraWork)||void 0===b?void 0:b.scale)?null===(j=O.cameraWork)||void 0===j||null===(v=j.scale)||void 0===v?void 0:v.in.toString():""}),Object(ee.jsx)(Ze,{children:"Out"}),Object(ee.jsx)(qe.b,{width:"68px",isQuiet:!0,value:(null===(h=O.cameraWork)||void 0===h?void 0:h.scale)?null===(m=O.cameraWork)||void 0===m||null===(p=m.scale)||void 0===p?void 0:p.out.toString():""})]})]})},_e=t(124),en=t.n(_e),nn=t(125),tn=t.n(nn),cn=H.b.div(j||(j=Object(M.a)(["\n  width: 100%;\n  margin: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50)) 0;\n  padding: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50)) 0;\n  :hover {\n    background-color: var(--spectrum-alias-highlight-hover);\n    border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  }\n"]))),rn=H.b.input(v||(v=Object(M.a)(["\n  display: none;\n"]))),an=H.b.ul(h||(h=Object(M.a)(["\n  padding-left: var(--spectrum-global-dimension-size-300, var(--spectrum-alias-size-300));\n  margin: 0;\n"]))),on=function(e){var n=e.labelFor,t=e.children;return Object(ee.jsx)(cn,{children:Object(ee.jsx)("label",{htmlFor:n,children:t})})},sn=function(e){var n=e.labelName,t=e.children,i=Object(T.useState)(!1),c=Object(K.a)(i,2),r=c[0],a=c[1];return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(rn,{type:"checkbox",id:n,checked:r,onClick:function(){return a(!r)}}),Object(ee.jsx)(on,{labelFor:n,children:Object(ee.jsxs)(B.a,{direction:"row",gap:"size-100",alignItems:"center",children:[r?Object(ee.jsx)(tn.a,{size:"S"}):Object(ee.jsx)(en.a,{size:"S"}),Object(ee.jsx)(oe.b,{children:n})]})}),Object(ee.jsx)(an,{style:{display:"".concat(r?"block":"none")},children:t})]})},ln=H.b.li(m||(m=Object(M.a)(["\n  list-style: none;\n  margin: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50)) 0;\n  padding: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50)) 0;\n  ::before {\n    content: '';\n    width: var(--spectrum-global-dimension-size-225, var(--spectrum-alias-size-225));\n    padding-right: var(--spectrum-global-dimension-size-100, var(--spectrum-alias-size-100));\n  }\n  :hover {\n    background-color: var(--spectrum-alias-highlight-hover);\n    border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  }\n"]))),dn=window.api,un=H.b.a(p||(p=Object(M.a)(["\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]))),bn=function(){var e={picture:{width:1,height:1}},n=Object(T.useState)([e]),t=Object(K.a)(n,2),i=t[0],c=t[1],r=Object(T.useGlobal)("globalCuts")[0],a=Object(T.useGlobal)("cut")[1];return Object(T.useEffect)((function(){(function(){var e=Object(re.a)(ce.a.mark((function e(){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,dn){e.next=5;break}return c(r),e.abrupt("return");case 5:return e.next=7,dn.loadJSON();case 7:n=e.sent,c(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[r,c]),Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(sn,{labelName:"Scene1",children:(null===i||void 0===i?void 0:i.length)>1&&(null===i||void 0===i?void 0:i.map((function(e,n){return Object(ee.jsx)(ln,{onClick:function(){return a(e)},id:"List".concat(n+1),onMouseEnter:function(){var e;return null===(e=document.getElementById("Cut".concat(n+1)))||void 0===e?void 0:e.classList.add("isHover")},onMouseLeave:function(){var e;return null===(e=document.getElementById("Cut".concat(n+1)))||void 0===e?void 0:e.classList.remove("isHover")},children:Object(ee.jsxs)(un,{href:"#Cut".concat(n+1),children:["Cut",n+1]})})})))})})},jn=t(126),vn=t.n(jn),hn=H.b.div(O||(O=Object(M.a)(["\n  width: 118px;\n  height: var(--spectrum-global-dimension-size-1600, var(--spectrum-alias-size-1600));\n  border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  border: 1px solid var(--spectrum-alias-border-color);\n  background-color: var(--spectrum-alias-appframe-border-color);\n  display: flex;\n  flex-flow: column;\n  :hover {\n    color: var(--spectrum-alias-text-color-hover);\n    border-color: var(--spectrum-alias-border-color-hover);\n  }\n"]))),mn=H.b.div(x||(x=Object(M.a)(["\n  height: 50%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),pn=Object(H.b)(mn)(g||(g=Object(M.a)(["\n  background-color: var(--spectrum-tray-background-color);\n  border-bottom-left-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  border-bottom-right-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n"]))),On=function(e){var n,t=e.Title,i=e.Type,c={movie:Object(ee.jsx)(Xe.a,{size:"S"}),audio:Object(ee.jsx)(vn.a,{size:"S"})};return Object(ee.jsxs)(hn,{children:[Object(ee.jsx)(mn,{children:(n=i,c[n])}),Object(ee.jsx)(pn,{children:Object(ee.jsx)(oe.b,{children:t})})]})},xn=function(){return Object(ee.jsxs)(B.a,{direction:"row",gap:"size-200",wrap:!0,children:[Object(ee.jsx)(On,{Title:"Title.mp4",Type:"movie"}),Object(ee.jsx)(On,{Title:"Credit.mp4",Type:"movie"}),Object(ee.jsx)(On,{Title:"BGM1.wav",Type:"audio"})]})},gn=function(){return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(qe.a,{minWidth:"100%",width:"100%",marginTop:"size-200"})})},fn=H.b.div(f||(f=Object(M.a)(["\n  padding-left: var(--spectrum-global-dimension-size-200, var(--spectrum-alias-size-200));\n  padding-right: var(--spectrum-global-dimension-size-200, var(--spectrum-alias-size-200));\n  padding-bottom: var(--spectrum-global-dimension-size-200, var(--spectrum-alias-size-200));\n  border-bottom: 2px solid var(--spectrum-alias-appframe-border-color);\n  user-select: none;\n  height: fit-content;\n  &:last-of-type {\n    overflow: auto;\n  }\n"]))),wn=function(e){var n,t=e.Title,i=e.children,c={Transition:Object(ee.jsx)(Me.a,{size:"XS"}),"Camera Work":Object(ee.jsx)(De.a,{size:"XS"}),Outline:Object(ee.jsx)(Ge.a,{size:"XS"}),Dialogue:Object(ee.jsx)(Qe.a,{size:"XS"}),Media:Object(ee.jsx)(Xe.a,{size:"XS"})};return Object(ee.jsxs)(fn,{style:"Outline"===t?{maxHeight:"calc(100vh - 580px)"}:{maxHeight:"calc(100vh - 257px)"},children:[Object(ee.jsxs)(B.a,{direction:"row",alignItems:"center",children:[(n=t,c[n]),Object(ee.jsx)(oe.a,{level:4,margin:"size-200",children:Object(ee.jsx)(oe.b,{children:t})})]}),i]})},zn=function(){var e=Object(T.useGlobal)("mode")[0];return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("div",{style:"Edit"===e?{display:"block",height:"100%",overflow:"hidden"}:{display:"none"},children:[Object(ee.jsx)(wn,{Title:"Transition",children:Object(ee.jsx)(Ye,{})}),Object(ee.jsx)(wn,{Title:"Camera Work",children:Object(ee.jsx)($e,{})}),Object(ee.jsx)(wn,{Title:"Outline",children:Object(ee.jsx)(bn,{})})]}),Object(ee.jsxs)("div",{style:"Preview"===e?{display:"block"}:{display:"none"},children:[Object(ee.jsx)(wn,{Title:"Dialogue",children:Object(ee.jsx)(gn,{})}),Object(ee.jsx)(wn,{Title:"Media",children:Object(ee.jsx)(xn,{})})]})]})},yn=t(50),kn=t(75),Sn=H.b.div(w||(w=Object(M.a)(["\n  height: calc(100vh - 82px);\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]))),Cn=H.b.textarea(z||(z=Object(M.a)(["\n  position: absolute;\n  top: 2px;\n  height: calc(100% - 4px);\n  width: calc(100% - 4px);\n  resize: none;\n  background: none;\n  margin: 0;\n  padding: 0;\n  border: none;\n\n  :focus {\n    outline: 2px solid var(--spectrum-alias-border-color-focus);\n    border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  }\n"]))),In=H.b.div(y||(y=Object(M.a)(["\n  color: var(--spectrum-semantic-positive-color-border);\n  border: 2px solid var(--spectrum-semantic-positive-color-border);\n  border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  position: absolute;\n  z-index: 2;\n"]))),Wn=H.b.div(k||(k=Object(M.a)(["\n  color: var(--spectrum-semantic-negative-color-border);\n  border: 2px solid var(--spectrum-semantic-negative-color-border);\n  border-radius: var(--spectrum-global-dimension-size-50, var(--spectrum-alias-size-50));\n  position: absolute;\n  z-index: 3;\n"]))),Fn=H.b.svg(S||(S=Object(M.a)(["\n  padding: 0;\n  margin: 0;\n  stroke: none;\n  fill: var(--spectrum-alias-text-color);\n  position: absolute;\n  left: calc((100% - 96px) / 2);\n"]))),En=function(e){var n=e.action,t=e.dialogue,i=e.time,c=e.timeSum,r=Object(T.useGlobal)("tool")[0],a=function(e){var n=document.activeElement;"Escape"===e.key&&n.blur()};return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)(G.a,{gridArea:"action",width:"100%",position:"relative",height:"auto",children:[Object(ee.jsx)(Cn,{className:r.has("Text")?"hover":"",disabled:!r.has("Text"),onKeyDown:a,children:"".concat((null===n||void 0===n?void 0:n.fadeIn)?null===n||void 0===n?void 0:n.fadeIn:"","\n").concat((null===n||void 0===n?void 0:n.fadeInDuration)?null===n||void 0===n?void 0:n.fadeInDuration:"","\n").concat((null===n||void 0===n?void 0:n.fadeOut)?null===n||void 0===n?void 0:n.fadeOut:"","\n").concat((null===n||void 0===n?void 0:n.fadeOutDuration)?null===n||void 0===n?void 0:n.fadeOutDuration:"","\n").concat((null===n||void 0===n?void 0:n.text)?null===n||void 0===n?void 0:n.text:"","\n")}),(null===n||void 0===n?void 0:n.fadeIn)&&Object(ee.jsx)(Fn,{viewBox:"0 0 96 48",width:"96px",children:Object(ee.jsx)("path",{d:"M48,2.83,91.17,46H4.83L48,2.83M48,0,0,48H96L48,0Z"})}),(null===n||void 0===n?void 0:n.fadeOut)&&Object(ee.jsx)(Fn,{viewBox:"0 0 96 48",width:"96px",style:{bottom:0},children:Object(ee.jsx)("path",{d:"M91.17,2,48,45.17,4.83,2H91.17M96,0Zm0,0H0L48,48,96,0Z"})})]}),Object(ee.jsx)(G.a,{gridArea:"dialogue",width:"100%",position:"relative",height:"auto",children:Object(ee.jsx)(Cn,{className:r.has("Text")?"hover":"",disabled:!r.has("Text"),onKeyDown:a,children:t})}),Object(ee.jsx)(G.a,{gridArea:"time",width:"100%",position:"relative",height:"auto",children:Object(ee.jsx)(Cn,{className:r.has("Text")?"hover":"",disabled:!r.has("Text"),onKeyDown:a,children:"".concat(i>24?(i/24|0)+":"+("00"+i%24).slice(-2):("00"+i).slice(-2),"\n").concat(c>24?(c/24|0)+":"+("00"+c%24).slice(-2):("00"+c).slice(-2))})})]})},Tn=window.api,Ln=function(){var e,n={picture:{width:1,height:1}},t=Object(T.useState)([n]),i=Object(K.a)(t,2),c=i[0],r=i[1],a=Object(T.useGlobal)("globalCuts")[0],o=Object(T.useGlobal)("globalPsds")[0];return Object(T.useEffect)((function(){(function(){var e=Object(re.a)(ce.a.mark((function e(){var n,t,i,c,s,l,d,u,b,j,v;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,n){var t=new Map(null===n||void 0===n?void 0:n.map((function(e,n){return[n,e]})));return null===e||void 0===e?void 0:e.map((function(e,n){return Object(yn.a)(Object(yn.a)({},e),t.get(n))}))},Tn){e.next=8;break}return i=a,c=null===(t=o)||void 0===t?void 0:t.map((function(e){return{picture:e}})),s=n(i,c),r(s),e.abrupt("return");case 8:return e.next=10,Tn.loadPSD();case 10:return l=e.sent,e.next=13,Tn.loadJSON();case 13:d=e.sent,u=null===l||void 0===l?void 0:l.map((function(e){return Object(Se.readPsd)(e)})),b=d,j=null===u||void 0===u?void 0:u.map((function(e){return{picture:e}})),v=n(b,j),r(v);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,o,r]),Object(T.useEffect)((function(){Tn&&(null===c||void 0===c||c.map((function(e,n){var t,i;return null===(t=e.picture)||void 0===t||null===(i=t.children)||void 0===i||i.filter((function(e,n){return 0!==n})).map((function(e){var t=document.getElementById("CC".concat(n+1,"PP").concat(e.name))||document.createElement("div"),i=e.canvas||document.createElement("canvas");return i.style.width="".concat(.12*i.width,"px"),t.innerHTML="",t.style.backgroundColor="#FFF",t.appendChild(i),0})),0})))}),[c]),Object(ee.jsxs)(ee.Fragment,{children:[!Tn&&(null===c||void 0===c?void 0:c.length)>1&&!(null===(e=c[1])||void 0===e?void 0:e.picture)&&Object(ee.jsxs)(B.a,{direction:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[Object(ee.jsx)(kn.a,{"aria-label":"Loading\u2026",isIndeterminate:!0,size:"L"}),Object(ee.jsx)(oe.a,{children:"Now Loading..."})]}),Tn&&1===(null===c||void 0===c?void 0:c.length)&&Object(ee.jsxs)(B.a,{direction:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[Object(ee.jsx)(kn.a,{"aria-label":"Loading\u2026",isIndeterminate:!0,size:"L"}),Object(ee.jsx)(oe.a,{children:"Now Loading..."})]}),(null===c||void 0===c?void 0:c.length)>1&&c.map((function(e,n){var t,i,r=c.slice(0,n+1).reduce((function(e,n){return n.time&&e+n.time}),0);return Object(ee.jsx)(G.a,{backgroundColor:"gray-100",children:Object(ee.jsx)("div",{className:"hover",id:"Cut".concat(n+1),onClick:function(){var e;return null===(e=document.getElementById("List".concat(n+1)))||void 0===e?void 0:e.click()},onMouseEnter:function(){var e;return null===(e=document.getElementById("List".concat(n+1)))||void 0===e?void 0:e.classList.add("isHover")},onMouseLeave:function(){var e;return null===(e=document.getElementById("List".concat(n+1)))||void 0===e?void 0:e.classList.remove("isHover")},children:Object(ee.jsxs)(B.b,{columns:["72px","288px","auto","auto","128px"],areas:["cut picture action dialogue time"],gap:"size-200",height:"auto",marginBottom:"size-25",children:[Object(ee.jsx)(G.a,{gridArea:"cut",width:"100%",height:"auto",children:Object(ee.jsx)(B.a,{direction:"column",alignItems:"center",children:Object(ee.jsx)(oe.a,{children:("00"+(n+1)).slice(-3)})})}),Object(ee.jsx)(G.a,{gridArea:"picture",width:"100%",height:"auto",children:null===(t=e.picture)||void 0===t||null===(i=t.children)||void 0===i?void 0:i.filter((function(e,n){return 0!==n})).map((function(t){var i,c=null===(i=t.canvas)||void 0===i?void 0:i.toDataURL("image/png",.4);return Object(ee.jsxs)("div",{style:{height:"".concat(t.canvas&&.12*t.canvas.height,"px"),width:"".concat(t.canvas&&.12*t.canvas.width,"px"),position:"relative"},children:[Object(ee.jsx)("div",{style:{height:"".concat(t.canvas&&.12*t.canvas.height,"px"),width:"".concat(t.canvas&&.12*t.canvas.width,"px"),position:"relative",background:"".concat(Tn?"none":"#FFF")},id:"CC".concat(n+1,"PP").concat(t.name),children:!Tn&&Object(ee.jsx)("img",{style:{transform:"scale(0.12)",transformOrigin:"left top"},src:c,alt:"cut"})}),e.cameraWork&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(In,{style:{height:"".concat(129.6*e.cameraWork.scale.in,"px"),width:"".concat(230.4*e.cameraWork.scale.in,"px"),top:"".concat(t.canvas&&(.12*t.canvas.height-129.6*(e.cameraWork.scale.in-e.cameraWork.position.in.y))/2,"px"),left:"".concat(t.canvas&&(.12*t.canvas.width-230.4*(e.cameraWork.scale.in-e.cameraWork.position.in.x))/2,"px")},children:Object(ee.jsx)(oe.a,{level:4,margin:"size-25",children:"IN"})}),Object(ee.jsx)(Wn,{style:{height:"".concat(129.6*e.cameraWork.scale.out,"px"),width:"".concat(230.4*e.cameraWork.scale.out,"px"),top:"".concat(t.canvas&&(.12*t.canvas.height-129.6*(e.cameraWork.scale.out-e.cameraWork.position.out.y))/2,"px"),left:"".concat(t.canvas&&(.12*t.canvas.width-230.4*(e.cameraWork.scale.out-e.cameraWork.position.out.x))/2,"px")},children:Object(ee.jsx)(oe.a,{level:4,margin:"size-25",children:"OUT"})})]})]})}))}),Object(ee.jsx)(En,{action:null===e||void 0===e?void 0:e.action,dialogue:null===e||void 0===e?void 0:e.dialogue,time:null===e||void 0===e?void 0:e.time,timeSum:r})]})})})}))]})},Pn=L.a.memo((function(){return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)(B.b,{columns:["72px","288px","auto","auto","128px"],rows:["size-500"],height:"size-500",gap:"size-200",children:[Object(ee.jsx)(oe.a,{alignSelf:"center",justifySelf:"center",children:"CUT"}),Object(ee.jsx)(oe.a,{alignSelf:"center",justifySelf:"center",children:"PICTURE"}),Object(ee.jsx)(oe.a,{alignSelf:"center",justifySelf:"center",children:"ACTION"}),Object(ee.jsx)(oe.a,{alignSelf:"center",justifySelf:"center",children:"DIALOGUE"}),Object(ee.jsx)(oe.a,{alignSelf:"center",justifySelf:"center",children:"TIME"})]}),Object(ee.jsx)(Sn,{children:Object(ee.jsx)(Ln,{})})]})})),An=t(127),Mn=t.n(An),Nn=t(128),Dn=t.n(Nn),Bn=t(129),Gn=t.n(Bn),Hn=t(130),Qn=t.n(Hn),Kn=t(131),Xn=t.n(Kn),Jn=t(132),Rn=t.n(Jn),Un=window.api,Vn=H.b.div(C||(C=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: max-content;\n"]))),Zn=H.b.div(I||(I=Object(M.a)(["\n  width: 48px;\n  color: var(--spectrum-semantic-positive-color-border);\n  margin-left: 0;\n  margin-right: auto;\n"]))),Yn=H.b.div(W||(W=Object(M.a)(["\n  width: 48px;\n  color: var(--spectrum-semantic-negative-color-border);\n  margin-left: auto;\n  margin-right: 0;\n"]))),qn=L.a.memo((function(){var e,n={picture:{width:1,height:1}},t=Object(T.useState)([n]),i=Object(K.a)(t,2),c=i[0],r=i[1],a=Object(T.useGlobal)("globalCuts")[0],o=Object(T.useGlobal)("globalPsds")[0],s=Object(T.useState)(1),l=Object(K.a)(s,2),d=l[0],u=l[1],b=Object(T.useState)(!1),j=Object(K.a)(b,2),v=j[0],h=j[1],m=Object(T.useState)((window.innerWidth-340)/2400>1?1:(window.innerWidth-340)/2400),p=Object(K.a)(m,2),O=p[0],x=p[1];window.addEventListener("resize",(function(){return x((window.innerWidth-340)/2400>1?1:(window.innerWidth-340)/2400)}));var g=window.performance&&performance.now,f=null===c||void 0===c?void 0:c.reduce((function(e,n){return n.time&&e+n.time}),0),w=Object(T.useRef)(0),z=Object(T.useRef)(0),y=Object(T.useCallback)((function(){cancelAnimationFrame(w.current),h(!1),u(0)}),[]),k=Object(T.useCallback)((function(){cancelAnimationFrame(w.current),h(!1),f&&u(f-1)}),[f]),S=Object(T.useCallback)((function(e){cancelAnimationFrame(w.current),h(!1),f&&(e>=f&&(e=f-1),u(e))}),[f]),C=Object(T.useCallback)((function(){cancelAnimationFrame(w.current),h(!1)}),[]),I=Object(T.useCallback)((function(){var e=function(){return g&&g.call(performance)||(new Date).getTime()};z.current=e();!function n(){w.current=requestAnimationFrame(n);var t=(e()-z.current)/(1e3/24);f&&(d>=f-1&&(cancelAnimationFrame(w.current),h(!1)),u(d+t))}(),h(!0)}),[d,g,f]);return Object(T.useEffect)((function(){(function(){var e=Object(re.a)(ce.a.mark((function e(){var n,t,i,c,s,l,d,u,b,j,v;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,n){var t=new Map(null===n||void 0===n?void 0:n.map((function(e,n){return[n,e]})));return null===e||void 0===e?void 0:e.map((function(e,n){return Object(yn.a)(Object(yn.a)({},e),t.get(n))}))},Un){e.next=8;break}return i=a,c=null===(t=o)||void 0===t?void 0:t.map((function(e){return{picture:e}})),s=n(i,c),r(s),e.abrupt("return");case 8:return e.next=10,Un.loadPSD();case 10:return l=e.sent,e.next=13,Un.loadJSON();case 13:d=e.sent,u=null===l||void 0===l?void 0:l.map((function(e){return Object(Se.readPsd)(e)})),b=d,j=null===u||void 0===u?void 0:u.map((function(e){return{picture:e}})),v=n(b,j),r(v);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,o]),Object(T.useEffect)((function(){(null===c||void 0===c?void 0:c.length)>1&&c.map((function(e,n){var t,i,r,a,o,s,l,u,b,j,v=c.slice(0,n).reduce((function(e,n){return n.time&&e+n.time}),0)||0,h=(null===(t=e.picture)||void 0===t?void 0:t.children)&&(null===(i=e.picture)||void 0===i?void 0:i.children.length)-1,m=e.time||0,p=e.time&&e.time/h,x=(null===(r=e.cameraWork)||void 0===r||null===(a=r.scale)||void 0===a?void 0:a.in)||1,g=(null===(o=e.cameraWork)||void 0===o||null===(s=o.scale)||void 0===s?void 0:s.out)||1,f=d-v||1,w=x-(x-g)*f/m,z=(null===(l=e.action)||void 0===l?void 0:l.fadeInDuration)||0,y=(null===(u=e.action)||void 0===u?void 0:u.fadeOutDuration)||0,k=m-y,S=function(e){return 0<=e&&e<z?e/z:m-y<=e&&e<=m?1-(e-k)/y:1}(f);return null===(b=e.picture)||void 0===b||null===(j=b.children)||void 0===j||j.filter((function(e,n){return p?n===Math.trunc((d-v)/p|0)+1:1===n})).map((function(e){var t=document.getElementById("c".concat(n+1,"p").concat(e.name))||document.createElement("div"),i=e.canvas||document.createElement("canvas");return i.style.width="".concat(i.width*O/w,"px"),i.style.opacity=S.toString(),t.innerHTML="",t.appendChild(i),0})),0}))}),[c,d,O]),Object(T.useEffect)((function(){f&&d>=f-1&&(cancelAnimationFrame(w.current),h(!1))}),[d,f]),Object(ee.jsxs)(ee.Fragment,{children:[!Un&&(null===c||void 0===c?void 0:c.length)>1&&!(null===(e=c[1])||void 0===e?void 0:e.picture)&&Object(ee.jsxs)(B.a,{direction:"column",alignItems:"center",justifyContent:"center",height:window.innerHeight-42,children:[Object(ee.jsx)(kn.a,{"aria-label":"Loading\u2026",isIndeterminate:!0,size:"L"}),Object(ee.jsx)(oe.a,{children:"Now Loading..."})]}),Un&&1===(null===c||void 0===c?void 0:c.length)&&Object(ee.jsxs)(B.a,{direction:"column",alignItems:"center",justifyContent:"center",height:window.innerHeight-42,children:[Object(ee.jsx)(kn.a,{"aria-label":"Loading\u2026",isIndeterminate:!0,size:"L"}),Object(ee.jsx)(oe.a,{children:"Now Loading..."})]}),(null===c||void 0===c?void 0:c.length)>1&&c.map((function(e,n){var t,i,r,a,o,s,l,u,b,j,h,m,p,x,g,w,z,W,F,E,T=c.slice(0,n-1).reduce((function(e,n){return n.time&&e+n.time}),0)||0,L=c.slice(0,n).reduce((function(e,n){return n.time&&e+n.time}),0)||0,P=c.slice(0,n+1).reduce((function(e,n){return n.time&&e+n.time}),0)||f||0,A=(null===(t=e.picture)||void 0===t?void 0:t.children)&&(null===(i=e.picture)||void 0===i?void 0:i.children.length)-1,M=(null===e||void 0===e?void 0:e.time)||0,N=M/A,D=(null===(r=e.cameraWork)||void 0===r||null===(a=r.scale)||void 0===a?void 0:a.in)||1,G=(null===(o=e.cameraWork)||void 0===o||null===(s=o.scale)||void 0===s?void 0:s.out)||1,H=d-L||1,Q=D-(D-G)*H/M,K=(null===(l=e.cameraWork)||void 0===l||null===(u=l.position)||void 0===u?void 0:u.in.x)||0,X=(null===(b=e.cameraWork)||void 0===b||null===(j=b.position)||void 0===j?void 0:j.out.x)||0,J=(null===(h=e.cameraWork)||void 0===h||null===(m=h.position)||void 0===m?void 0:m.in.y)||0,R=(null===(p=e.cameraWork)||void 0===p||null===(x=p.position)||void 0===x?void 0:x.out.y)||0,U=K-(K-X)*H/M,V=J-(J-R)*H/M,Z=(null===(g=e.action)||void 0===g?void 0:g.fadeInDuration)||0,Y=(null===(w=e.action)||void 0===w?void 0:w.fadeOutDuration)||0,q=M-Y,$="Black In"===(null===(z=e.action)||void 0===z?void 0:z.fadeIn)||"Black Out"===(null===(W=e.action)||void 0===W?void 0:W.fadeOut)?function(e){return 0<=e&&e<Z?e/Z:M-Y<=e&&e<=M?1-(e-q)/Y:1}(H):1;return Object(ee.jsx)(ee.Fragment,{children:void 0!==L&&void 0!==P&&L<=d&&d<P&&(null===(F=e.picture)||void 0===F||null===(E=F.children)||void 0===E?void 0:E.filter((function(e,n){return N?n===Math.trunc((d-L)/N|0)+1:1===n})).map((function(e){return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)(B.a,{direction:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[Object(ee.jsxs)(Vn,{style:{width:"".concat(1920*O,"px")},children:[Object(ee.jsx)(Zn,{children:"".concat(L>24?(L/24|0)+":"+("00"+L%24).slice(-2):("00"+L).slice(-2))}),Object(ee.jsx)(oe.a,{children:"Cut".concat(("00"+(n+1)).slice(-3))}),Object(ee.jsx)(Yn,{children:"".concat(P>24?(P/24|0)+":"+("00"+P%24).slice(-2):("00"+P).slice(-2))})]}),Object(ee.jsx)("div",{style:{height:"".concat(1080*O,"px"),width:"".concat(1920*O,"px"),backgroundColor:"#000",overflow:"hidden"},children:Object(ee.jsx)("div",{style:{height:"".concat(e.canvas&&e.canvas.height*O/Q,"px"),width:"".concat(e.canvas&&e.canvas.width*O/Q,"px"),backgroundColor:"#fff",opacity:"".concat($),position:"relative",bottom:"".concat(e.canvas&&(e.canvas.height*O-1080*O*(Q-V))/2,"px"),right:"".concat(e.canvas&&(e.canvas.width*O-1920*O*(Q-U))/2,"px")},id:"c".concat(n+1,"p").concat(e.name)})})]}),Object(ee.jsx)(B.a,{direction:"column",alignItems:"center",justifyContent:"center",height:"100%",children:Object(ee.jsxs)(Vn,{style:{width:"".concat(1920*O,"px")},children:[Object(ee.jsx)(Zn,{children:"".concat(d>24?(d/24|0)+":"+("00"+Math.round(d)%24).slice(-2):("00"+Math.round(d)).slice(-2))}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(le.a,{isQuiet:!0,onPress:y,children:Object(ee.jsx)(Mn.a,{size:"M"})}),Object(ee.jsx)(le.a,{isQuiet:!0,onPress:function(){return S(T)},children:Object(ee.jsx)(Dn.a,{size:"M"})}),Object(ee.jsx)(le.a,{isQuiet:!0,onPress:v?C:I,children:v?Object(ee.jsx)(Qn.a,{size:"M"}):Object(ee.jsx)(Gn.a,{size:"M"})}),Object(ee.jsx)(le.a,{isQuiet:!0,onPress:function(){return S(P)},children:Object(ee.jsx)(Xn.a,{size:"M"})}),Object(ee.jsx)(le.a,{isQuiet:!0,onPress:k,children:Object(ee.jsx)(Rn.a,{size:"M"})})]}),Object(ee.jsx)(Yn,{children:"".concat(f>24?(f/24|0)+":"+("00"+f%24).slice(-2):("00"+f).slice(-2))})]})})]})})))})}))]})})),$n=H.b.div(F||(F=Object(M.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  background-color: var(--spectrum-alias-appframe-border-color);\n"]))),_n=H.b.div(E||(E=Object(M.a)(["\n  background-color: var(--spectrum-alias-toolbar-background-color);\n  grid-area: ",";\n  height: 100%;\n  overflow: hidden;\n"])),(function(e){return e.gridArea})),et=function(e){var n=e.children;return Object(ee.jsxs)(N.a,{theme:D.a,children:[Object(ee.jsx)(Q,{}),Object(ee.jsx)($n,{children:Object(ee.jsx)(B.b,{areas:["header header header","toolbar content sidebar"],columns:["size-600","auto","size-3600"],rows:["size-500","auto"],height:"100vh",gap:"size-25",children:n})})]})},nt=function(){var e=Object(T.useGlobal)("mode")[0];return Object(ee.jsxs)(et,{children:[Object(ee.jsx)(_n,{gridArea:"header",children:Object(ee.jsx)(Pe,{})}),Object(ee.jsx)(_n,{gridArea:"toolbar",children:Object(ee.jsx)(te,{})}),Object(ee.jsx)(_n,{gridArea:"sidebar",children:Object(ee.jsx)(zn,{})}),Object(ee.jsxs)(G.a,{gridArea:"content",children:[Object(ee.jsx)("div",{style:{display:"".concat("Edit"===e?"block":"none")},children:Object(ee.jsx)(Pn,{})}),Object(ee.jsx)("div",{style:{display:"".concat("Preview"===e?"block":"none")},children:Object(ee.jsx)(qn,{})})]})]})},tt=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,238)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))},it={width:1,height:1},ct={picture:it};Object(T.setGlobal)({mode:"Edit",tool:new Set(["Select"]),cut:ct,globalCuts:[ct],globalPsds:[it],globalFileName:""}),A.a.render(Object(ee.jsx)(L.a.StrictMode,{children:Object(ee.jsx)(nt,{})}),document.getElementById("root")),tt()}},[[231,1,2]]]);
//# sourceMappingURL=main.931773dc.chunk.js.map