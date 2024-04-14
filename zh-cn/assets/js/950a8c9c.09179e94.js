"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[20571],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>s});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=p(r),s=n,c=y["".concat(g,".").concat(s)]||y[s]||d[s]||l;return r?a.createElement(c,i(i({ref:t},m),{},{components:r})):a.createElement(c,i({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},13449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={id:"alert_webhook",title:"\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5",sidebar_label:"\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5",keywords:["\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5","\u5f00\u6e90\u544a\u8b66\u7cfb\u7edf","\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf"]},i=void 0,o={unversionedId:"help/alert_webhook",id:"version-v1.1.x/help/alert_webhook",title:"\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5",description:"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7post\u8bf7\u6c42\u65b9\u5f0f\u8c03\u7528WebHook\u63a5\u53e3\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002",source:"@site/versioned_docs/version-v1.1.x/help/alert_webhook.md",sourceDirName:"help",slug:"/help/alert_webhook",permalink:"/zh-cn/docs/v1.1.x/help/alert_webhook",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.1.x/help/alert_webhook.md",tags:[],version:"v1.1.x",frontMatter:{id:"alert_webhook",title:"\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5",sidebar_label:"\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5",keywords:["\u544a\u8b66 Webhook \u56de\u8c03\u901a\u77e5","\u5f00\u6e90\u544a\u8b66\u7cfb\u7edf","\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf"]},sidebar:"docs",previous:{title:"\u544a\u8b66\u90ae\u4ef6\u901a\u77e5",permalink:"/zh-cn/docs/v1.1.x/help/alert_email"},next:{title:"\u544a\u8b66 Discord \u673a\u5668\u4eba\u901a\u77e5",permalink:"/zh-cn/docs/v1.1.x/help/alert_discord"}},g={},p=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"WebHook\u56de\u8c03POST\u8bf7\u6c42\u4f53BODY\u5185\u5bb9",id:"webhook\u56de\u8c03post\u8bf7\u6c42\u4f53body\u5185\u5bb9",level:3},{value:"webhook\u901a\u77e5\u5e38\u89c1\u95ee\u9898",id:"webhook\u901a\u77e5\u5e38\u89c1\u95ee\u9898",level:3}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,n.yg)("wrapper",(0,a.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7post\u8bf7\u6c42\u65b9\u5f0f\u8c03\u7528WebHook\u63a5\u53e3\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002          ")),(0,n.yg)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"\u3010\u544a\u8b66\u901a\u77e5\u3011->\u3010\u65b0\u589e\u63a5\u6536\u4eba\u3011 ->\u3010\u9009\u62e9WebHook\u901a\u77e5\u65b9\u5f0f\u3011-> \u3010\u8bbe\u7f6eWebHook\u56de\u8c03\u5730\u5740\u3011 -> \u3010\u786e\u5b9a\u3011")," ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"email",src:r(1755).A,width:"3804",height:"1184"})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"}," \u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\u26a0\ufe0f \u3010\u65b0\u589e\u901a\u77e5\u7b56\u7565\u3011-> \u3010\u5c06\u521a\u8bbe\u7f6e\u7684\u63a5\u6536\u4eba\u5173\u8054\u3011-> \u3010\u786e\u5b9a\u3011"),"  ")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"}," \u6ce8\u610f\u26a0\ufe0f \u65b0\u589e\u4e86\u63a5\u6536\u4eba\u5e76\u4e0d\u4ee3\u8868\u5df2\u7ecf\u751f\u6548\u53ef\u4ee5\u63a5\u6536\u544a\u8b66\u4fe1\u606f\uff0c\u8fd8\u9700\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\uff0c\u5373\u6307\u5b9a\u54ea\u4e9b\u6d88\u606f\u53d1\u7ed9\u54ea\u4e9b\u63a5\u6536\u4eba "),"\u3002   ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"email",src:r(87538).A,width:"3756",height:"1288"}),"    "),(0,n.yg)("h3",{id:"webhook\u56de\u8c03post\u8bf7\u6c42\u4f53body\u5185\u5bb9"},"WebHook\u56de\u8c03POST\u8bf7\u6c42\u4f53BODY\u5185\u5bb9"),(0,n.yg)("p",null,"\u5185\u5bb9\u683c\u5f0f\uff1aJSON   "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id":76456,\n    "target":"available",\n    "alertDefineId":232,\n    "priority":0,\n    "content":"\u76d1\u63a7\u7d27\u6025\u53ef\u7528\u6027\u544a\u8b66: UN_CONNECTABLE",\n    "tag": {\n      "monitorId": 3543534545,\n      "monitorName":"API_poetry.didi.top"\n    },\n    "status":0,\n    "times":1,\n    "gmtCreate":"2022-02-25T13:32:13",\n    "gmtUpdate":"2022-02-25T13:32:13"\n}\n')),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"id"),(0,n.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm record entity primary key index ID \u544a\u8b66\u8bb0\u5f55\u5b9e\u4f53\u4e3b\u952e\u7d22\u5f15ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"target"),(0,n.yg)("td",{parentName:"tr",align:null},"string title: Alert target object: monitor availability-available metrics-app.metrics.field \u544a\u8b66\u76ee\u6807\u5bf9\u8c61: \u76d1\u63a7\u53ef\u7528\u6027-available \u6307\u6807-app.metrics.field")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"alertDefineId\tinteger($int64) title: Alarm definition ID associated with the alarm \u544a\u8b66\u5173\u8054\u7684\u544a\u8b66\u5b9a\u4e49ID"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"priority"),(0,n.yg)("td",{parentName:"tr",align:null},"string($byte) title: Alarm level 0: high-emergency-critical alarm-red 1: medium-critical-critical alarm-orange 2: low-warning-warning alarm-yellow \u544a\u8b66\u7ea7\u522b 0:\u9ad8-emergency-\u7d27\u6025\u544a\u8b66-\u7ea2\u8272 1:\u4e2d-critical-\u4e25\u91cd\u544a\u8b66-\u6a59\u8272 2:\u4f4e-warning-\u8b66\u544a\u544a\u8b66-\u9ec4\u8272")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"content"),(0,n.yg)("td",{parentName:"tr",align:null},"string title: The actual content of the alarm notification \u544a\u8b66\u901a\u77e5\u5b9e\u9645\u5185\u5bb9")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"status"),(0,n.yg)("td",{parentName:"tr",align:null},"string($byte) title: Alarm status: 0-normal alarm (to be processed) 1-threshold triggered but not reached the number of alarms 2-recovered alarm 3-processed \u544a\u8b66\u72b6\u6001: 0-\u6b63\u5e38\u544a\u8b66(\u5f85\u5904\u7406) 1-\u9608\u503c\u89e6\u53d1\u4f46\u672a\u8fbe\u5230\u544a\u8b66\u6b21\u6570 2-\u6062\u590d\u544a\u8b66 3-\u5df2\u5904\u7406")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"times"),(0,n.yg)("td",{parentName:"tr",align:null},"integer($int32) title: Alarm threshold trigger times \u544a\u8b66\u9608\u503c\u89e6\u53d1\u6b21\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"firstTriggerTime"),(0,n.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm trigger time (timestamp in milliseconds) \u9996\u6b21\u544a\u8b66\u89e6\u53d1\u65f6\u95f4(\u6beb\u79d2\u65f6\u95f4\u6233)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"lastTriggerTime"),(0,n.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm trigger time (timestamp in milliseconds) \u6700\u8fd1\u544a\u8b66\u89e6\u53d1\u65f6\u95f4(\u6beb\u79d2\u65f6\u95f4\u6233)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"nextEvalInterval"),(0,n.yg)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm evaluation interval (milliseconds) \u544a\u8b66\u8bc4\u4f30\u65f6\u95f4\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"tags"),(0,n.yg)("td",{parentName:"tr",align:null},"example: {key1:value1}")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"gmtCreate"),(0,n.yg)("td",{parentName:"tr",align:null},"string($date-time) title: Record the latest creation time (timestamp in milliseconds) \u8bb0\u5f55\u6700\u65b0\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2\u65f6\u95f4\u6233)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"gmtUpdate"),(0,n.yg)("td",{parentName:"tr",align:null},"string($date-time) title: Record modify time(\u6beb\u79d2\u65f6\u95f4\u6233)")))),(0,n.yg)("h3",{id:"webhook\u901a\u77e5\u5e38\u89c1\u95ee\u9898"},"webhook\u901a\u77e5\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"WebHook\u56de\u8c03\u672a\u751f\u6548   ",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u8bf7\u67e5\u770b\u544a\u8b66\u4e2d\u5fc3\u662f\u5426\u5df2\u7ecf\u4ea7\u751f\u6b64\u6761\u544a\u8b66\u4fe1\u606f",(0,n.yg)("br",{parentName:"p"}),"\n","\u8bf7\u6392\u67e5\u914d\u7f6e\u7684WebHook\u56de\u8c03\u5730\u5740\u662f\u5426\u6b63\u786e")))),(0,n.yg)("p",null,"\u5176\u5b83\u95ee\u9898\u53ef\u4ee5\u901a\u8fc7\u4ea4\u6d41\u7fa4ISSUE\u53cd\u9988\u54e6\uff01"))}d.isMDXComponent=!0},87538:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},1755:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/alert-notice-5-2a87516f9ad552183d6f7d715e55f4af.png"}}]);