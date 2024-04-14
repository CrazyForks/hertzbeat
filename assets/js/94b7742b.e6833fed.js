"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[93228],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(r),d=i,f=g["".concat(c,".").concat(d)]||g[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},94668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));const a={id:"alert_email",title:"Alert email notification",sidebar_label:"Alert email notification",keywords:["open source monitoring tool","open source alerter","open source email notification"]},o=void 0,l={unversionedId:"help/alert_email",id:"help/alert_email",title:"Alert email notification",description:"After the threshold is triggered send alarm information and notify the recipient by email.",source:"@site/docs/help/alert_email.md",sourceDirName:"help",slug:"/help/alert_email",permalink:"/docs/help/alert_email",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/alert_email.md",tags:[],version:"current",frontMatter:{id:"alert_email",title:"Alert email notification",sidebar_label:"Alert email notification",keywords:["open source monitoring tool","open source alerter","open source email notification"]},sidebar:"docs",previous:{title:"Threshold trigger expression",permalink:"/docs/help/alert_threshold_expr"},next:{title:"Alert webHook notification",permalink:"/docs/help/alert_webhook"}},c={},s=[{value:"Operation steps",id:"operation-steps",level:3},{value:"Email notification common issues",id:"email-notification-common-issues",level:3}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,i.yg)("wrapper",(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by email.      ")),(0,i.yg)("h3",{id:"operation-steps"},"Operation steps"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select email notification method\u3011")," ")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"email",src:r(74751).A,width:"3812",height:"1232"}),"   "),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"\u3010Get verification code\u3011-> \u3010Enter email verification code\u3011-> \u3010Confirm\u3011"),(0,i.yg)("br",{parentName:"li"}),(0,i.yg)("img",{alt:"email",src:r(20100).A,width:"3752",height:"1284"}),"    ")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"email",src:r(60045).A,width:"3398",height:"1460"}),"   "),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011")," ")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"  ")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"email",src:r(87538).A,width:"3756",height:"1288"}),"    "),(0,i.yg)("h3",{id:"email-notification-common-issues"},"Email notification common issues"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Hertzbeat deployed on its own intranet cannot receive email notifications   "),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Hertzbeat needs to configure its own mail server, not tancloud. Please confirm whether you have configured its own mail server in application.yml     "))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Cloud environment tancloud cannot receive email notification  "),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,i.yg)("br",{parentName:"p"}),"\n","Please check whether the mailbox is configured correctly and whether the alarm strategy association is configured.",(0,i.yg)("br",{parentName:"p"}),"\n","Please check whether the warning email is blocked in the trash can of the mailbox.     ")))),(0,i.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}m.isMDXComponent=!0},74751:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-1-97b12cf267f0d5737ce04a5e67d04a66.png"},20100:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-2-06cca23b9fdf814816dcd34e96b5c67b.png"},60045:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-3-c18a90e98e1af7ed78bba845ca5b535f.png"},87538:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"}}]);