"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[37647],{15680:(t,e,a)=>{a.d(e,{xA:()=>o,yg:()=>u});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var y=n.createContext({}),p=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},o=function(t){var e=p(t.components);return n.createElement(y.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),d=p(a),u=r,N=d["".concat(y,".").concat(u)]||d[u]||i[u]||l;return a?n.createElement(N,g(g({ref:e},o),{},{components:a})):n.createElement(N,g({ref:e},o))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=d;var m={};for(var y in e)hasOwnProperty.call(e,y)&&(m[y]=e[y]);m.originalType=t,m.mdxType="string"==typeof t?t:r,g[1]=m;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63589:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>i,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={id:"tomcat",title:"\u76d1\u63a7\uff1aTomcat\u76d1\u63a7",sidebar_label:"Tomcat\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u7f51\u7ad9\u76d1\u63a7","Tomcat\u76d1\u63a7"]},g=void 0,m={unversionedId:"help/tomcat",id:"version-v1.1.x/help/tomcat",title:"\u76d1\u63a7\uff1aTomcat\u76d1\u63a7",description:"\u5bf9Tomcat\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7",source:"@site/versioned_docs/version-v1.1.x/help/tomcat.md",sourceDirName:"help",slug:"/help/tomcat",permalink:"/zh-cn/docs/v1.1.x/help/tomcat",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.1.x/help/tomcat.md",tags:[],version:"v1.1.x",frontMatter:{id:"tomcat",title:"\u76d1\u63a7\uff1aTomcat\u76d1\u63a7",sidebar_label:"Tomcat\u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u7f51\u7ad9\u76d1\u63a7","Tomcat\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Kafka\u76d1\u63a7",permalink:"/zh-cn/docs/v1.1.x/help/kafka"},next:{title:"ShenYu\u7f51\u5173\u76d1\u63a7",permalink:"/zh-cn/docs/v1.1.x/help/shenyu"}},y={},p=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1amemory_pool",id:"\u6307\u6807\u96c6\u5408memory_pool",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1acode_cache",id:"\u6307\u6807\u96c6\u5408code_cache",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aclass_loading",id:"\u6307\u6807\u96c6\u5408class_loading",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1athread",id:"\u6307\u6807\u96c6\u5408thread",level:4},{value:"Tomcat\u5f00\u542fJMX\u534f\u8bae\u6b65\u9aa4",id:"tomcat\u5f00\u542fjmx\u534f\u8bae\u6b65\u9aa4",level:3}],o={toc:p};function i(t){let{components:e,...a}=t;return(0,r.yg)("wrapper",(0,n.A)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9Tomcat\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u534f\u8bae\uff1aJMX")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eTomcat\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408memory_pool"},"\u6307\u6807\u96c6\u5408\uff1amemory_pool"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"committed"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"init"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"used"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408code_cache"},"\u6307\u6807\u96c6\u5408\uff1acode_cache"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"committed"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"init"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"used"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408class_loading"},"\u6307\u6807\u96c6\u5408\uff1aclass_loading"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7c7b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5386\u53f2\u5df2\u52a0\u8f7d\u7c7b\u603b\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672a\u52a0\u8f7d\u7c7b\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408thread"},"\u6307\u6807\u96c6\u5408\uff1athread"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u5f00\u59cb\u7684\u7ebf\u7a0b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672a\u52a0\u8f7d\u7c7b\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b88\u62a4\u8fdb\u7a0b\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528CPU\u65f6\u95f4")))),(0,r.yg)("h3",{id:"tomcat\u5f00\u542fjmx\u534f\u8bae\u6b65\u9aa4"},"Tomcat\u5f00\u542fJMX\u534f\u8bae\u6b65\u9aa4"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u642d\u5efa\u597dtomcat\u540e\uff0c\u8fdb\u5165tomcat\u4e0b\u7684bin\u76ee\u5f55\uff0c\u4fee\u6539catalina.sh\u6587\u4ef6  \u6ce8\u610f\u26a0\ufe0f\u66ff\u6362IP\u5730\u5740  ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"vim catalina.sh  "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},'CATALINA_OPTS="$CATALINA_OPTS -Dcom.sun.management.jmxremote -Djava.rmi.server.hostname=10.1.1.52 -Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false"\n')),(0,r.yg)("p",null,"\u53c2\u8003: ",(0,r.yg)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_41924764/article/details/108694239"},"https://blog.csdn.net/weixin_41924764/article/details/108694239")))}i.isMDXComponent=!0}}]);