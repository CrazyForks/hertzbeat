"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[504],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),g=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=g(t),m=r,d=y["".concat(p,".").concat(m)]||y[m]||s[m]||o;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var g=2;g<o;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},76965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const o={id:"tdengine-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528TDengine\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},i=void 0,l={unversionedId:"start/tdengine-init",id:"version-v1.1.x/start/tdengine-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316",description:"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93 TDengine \u6216 IoTDB\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)",source:"@site/versioned_docs/version-v1.1.x/start/tdengine-init.md",sourceDirName:"start",slug:"/start/tdengine-init",permalink:"/zh-cn/docs/v1.1.x/start/tdengine-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.1.x/start/tdengine-init.md",tags:[],version:"v1.1.x",frontMatter:{id:"tdengine-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528TDengine\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},sidebar:"docs",previous:{title:"\u4f7f\u7528IoTDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.1.x/start/iotdb-init"},next:{title:"\u4f7f\u7528Mysql\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.1.x/start/mysql-change"}},p={},g=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5TDengine",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5tdengine",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",id:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b",level:3},{value:"\u5728hertzbeat\u7684<code>application.yml</code>\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5",id:"\u5728hertzbeat\u7684applicationyml\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],c={toc:g};function s(e){let{components:n,...t}=e;return(0,r.yg)("wrapper",(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93 TDengine \u6216 IoTDB\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)"),(0,r.yg)("p",null,"TDengine\u662f\u4e00\u6b3e\u5f00\u6e90\u7269\u8054\u7f51\u65f6\u5e8f\u578b\u6570\u636e\u5e93\uff0c\u6211\u4eec\u7528\u5176\u5b58\u50a8\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6307\u6807\u5386\u53f2\u6570\u636e\u3002 \u6ce8\u610f\u652f\u6301\u26a0\ufe0f 2.4.x\u7248\u672c\u3002   "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f \u65f6\u5e8f\u6570\u636e\u5e93\u5b89\u88c5\u914d\u7f6e\u4e3a\u53ef\u9009\u9879\uff0c\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e\uff0c\u4ee5\u63d0\u4f9b\u66f4\u5b8c\u5584\u7684\u5386\u53f2\u56fe\u8868\u529f\u80fd\u548c\u9ad8\u6027\u80fd")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709TDengine\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b\u90a3\u4e00\u6b65\u3002")),(0,r.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5tdengine"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5TDengine"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003\u5b98\u65b9\u7f51\u7ad9",(0,r.yg)("a",{parentName:"p",href:"https://www.taosdata.com/docs/cn/v2.0/getting-started/docker"},"\u5b89\u88c5\u6559\u7a0b"),"  "),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,r.yg)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,r.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5TDengine  "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp \\\n    -v /opt/taosdata:/var/lib/taos \\ \n    --name tdengine -e TZ=Asia/Shanghai \\\n    tdengine/tdengine:2.4.0.12\n")),(0,r.yg)("p",null,"   ",(0,r.yg)("inlineCode",{parentName:"p"},"-v /opt/taosdata:/var/lib/taos")," \u4e3atdengine\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/taosdata"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55",(0,r.yg)("br",{parentName:"p"}),"\n","",(0,r.yg)("inlineCode",{parentName:"p"},'-e TZ="Asia/Shanghai"')," \u4e3atdengine\u8bbe\u7f6e\u65f6\u533a\uff0c\u8fd9\u91cc\u53ef\u9009\u8bbe\u7f6e\u5bf9\u5e94\u7684\u65f6\u533a",(0,r.yg)("br",{parentName:"p"}),"\n","\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,r.yg)("h3",{id:"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b"},"\u521b\u5efa\u6570\u636e\u5e93\u5b9e\u4f8b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"}," ",(0,r.yg)("a",{parentName:"p",href:"https://docs.taosdata.com/2.4/reference/taos-shell/#tdengine-cli-%E5%B0%8F%E6%8A%80%E5%B7%A7"},"TDengine CLI \u5c0f\u6280\u5de7"))),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8fdb\u5165\u6570\u636e\u5e93Docker\u5bb9\u5668  "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ docker exec -it tdengine /bin/bash\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u8d26\u6237\u5bc6\u7801"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4fee\u6539\u5bc6\u7801\u3002TDengine\u9ed8\u8ba4\u7684\u8d26\u6237\u5bc6\u7801\u662f root/taosdata\n\u8fdb\u5165\u5bb9\u5668\u540e\uff0c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"taos")," \u547d\u4ee4\u8fdb\u5165TDengine CLI , \u5982\u4e0b: ")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"root@tdengine-server:~/TDengine-server-2.4.0.4# taos\nWelcome to the TDengine shell from Linux, Client Version:2.4.0.4\nCopyright (c) 2020 by TAOS Data, Inc. All rights reserved.\ntaos>\n")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u5728 TDengine CLI \u4e2d\u4f7f\u7528 alter user \u547d\u4ee4\u53ef\u4ee5\u4fee\u6539\u7528\u6237\u5bc6\u7801\uff0c\u7f3a\u7701\u5bc6\u7801\u4e3a taosdata"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93"),(0,r.yg)("p",{parentName:"li"},"\u6267\u884c\u521b\u5efa\u6570\u636e\u5e93\u547d\u4ee4"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"taos> show databases;\ntaos> CREATE DATABASE hertzbeat KEEP 90 DAYS 10 BLOCKS 6 UPDATE 1;\n")),(0,r.yg)("p",{parentName:"li"},"\u4e0a\u8ff0\u8bed\u53e5\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a hertzbeat \u7684\u5e93\uff0c\u8fd9\u4e2a\u5e93\u7684\u6570\u636e\u5c06\u4fdd\u755990\u5929\uff08\u8d85\u8fc790\u5929\u5c06\u88ab\u81ea\u52a8\u5220\u9664\uff09\uff0c\u6bcf 10 \u5929\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\uff0c\u5185\u5b58\u5757\u6570\u4e3a 6\uff0c\u5141\u8bb8\u66f4\u65b0\u6570\u636e")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770bhertzbeat\u6570\u636e\u5e93\u662f\u5426\u6210\u529f\u521b\u5efa"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"taos> show databases;\ntaos> use hertzbeat;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u9000\u51faTDengine CLI"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\u8f93\u5165 q \u6216 quit \u6216 exit \u56de\u8f66\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f\u82e5\u662f\u5b89\u88c5\u5305\u5b89\u88c5\u7684TDengine2.3+\u7248\u672c"),"       "),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u9664\u4e86\u542f\u52a8server\u5916\uff0c\u8fd8\u9700\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," \u542f\u52a8 adapter")),(0,r.yg)("h3",{id:"\u5728hertzbeat\u7684applicationyml\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5"},"\u5728hertzbeat\u7684",(0,r.yg)("inlineCode",{parentName:"h3"},"application.yml"),"\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\n\u4fee\u6539\u4f4d\u4e8e ",(0,r.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6",(0,r.yg)("br",{parentName:"li"}),"\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,r.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u5373\u53ef     ")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4fee\u6539\u91cc\u9762\u7684",(0,r.yg)("inlineCode",{parentName:"strong"},"warehouse.store.jpa.enabled"),"\u53c2\u6570\u4e3a",(0,r.yg)("inlineCode",{parentName:"strong"},"false"),"\uff0c \u914d\u7f6e\u91cc\u9762\u7684",(0,r.yg)("inlineCode",{parentName:"strong"},"warehouse.store.td-engine"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cURL\u8d26\u6237\u5bc6\u7801\uff0c\u5e76\u542f\u7528",(0,r.yg)("inlineCode",{parentName:"strong"},"enabled"),"\u4e3a",(0,r.yg)("inlineCode",{parentName:"strong"},"true")),"    "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # \u5173\u95ed\u9ed8\u8ba4JPA\n      jpa:\n         enabled: false\n      td-engine:\n         enabled: true\n         driver-class-name: com.taosdata.jdbc.rs.RestfulDriver\n         url: jdbc:TAOS-RS://localhost:6041/hertzbeat\n         username: root\n         password: taosdata\n")),(0,r.yg)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u65f6\u5e8f\u6570\u636e\u5e93IoTDB\u548cTDengine\u662f\u5426\u90fd\u9700\u8981\u914d\u7f6e\uff0c\u80fd\u4e0d\u80fd\u90fd\u7528"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u90fd\u914d\u7f6e\uff0c\u4efb\u9009\u5176\u4e00\u5373\u53ef\uff0c\u7528enable\u53c2\u6570\u63a7\u5236\u5176\u662f\u5426\u4f7f\u7528\uff0c\u4e5f\u53ef\u90fd\u4e0d\u5b89\u88c5\u914d\u7f6e\uff0c\u53ea\u5f71\u54cd\u5386\u53f2\u56fe\u8868\u6570\u636e\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u76d1\u63a7\u9875\u9762\u5386\u53f2\u56fe\u8868\u4e0d\u663e\u793a\uff0c\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"," "),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u5982\u5f39\u7a97\u6240\u793a\uff0c\u5386\u53f2\u56fe\u8868\u5c55\u793a\u7684\u524d\u63d0\u662f\u9700\u8981\u5b89\u88c5\u914d\u7f6ehertzbeat\u7684\u4f9d\u8d56\u670d\u52a1 - IotDB\u6570\u636e\u5e93\u6216TDengine\u6570\u636e\u5e93"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u76d1\u63a7\u8be6\u60c5\u5386\u53f2\u56fe\u7247\u4e0d\u5c55\u793a\u6216\u65e0\u6570\u636e\uff0c\u5df2\u7ecf\u914d\u7f6e\u4e86TDengine   "),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u8bf7\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u7684TDengine\u7248\u672c\u4e3a2.4.0.12\u9644\u8fd1\uff0c\u7248\u672c3.0\u548c2.2\u4e0d\u652f\u6301\u517c\u5bb9"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5b89\u88c5\u914d\u7f6e\u4e86TDengine\u6570\u636e\u5e93\uff0c\u4f46\u9875\u9762\u4f9d\u65e7\u663e\u793a\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u8bf7\u68c0\u67e5\u914d\u7f6e\u53c2\u6570\u662f\u5426\u6b63\u786e",(0,r.yg)("br",{parentName:"p"}),"\n","td-engine enable\u662f\u5426\u8bbe\u7f6e\u4e3atrue",(0,r.yg)("br",{parentName:"p"}),"\n","\u6ce8\u610f\u26a0\ufe0f\u82e5hertzbeat\u548cTDengine\u90fd\u4e3adocker\u5bb9\u5668\u5728\u540c\u4e00\u4e3b\u673a\u4e0b\u542f\u52a8\uff0c\u5bb9\u5668\u4e4b\u95f4\u9ed8\u8ba4\u4e0d\u80fd\u7528127.0.0.1\u901a\u8baf\uff0c\u6539\u4e3a\u4e3b\u673aIP",(0,r.yg)("br",{parentName:"p"}),"\n","\u53ef\u6839\u636elogs\u76ee\u5f55\u4e0b\u542f\u52a8\u65e5\u5fd7\u6392\u67e5")))))}s.isMDXComponent=!0}}]);