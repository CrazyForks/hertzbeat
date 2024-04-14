"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[36720],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>s});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),g=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=g(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),c=g(a),s=n,N=c["".concat(i,".").concat(s)]||c[s]||m[s]||p;return a?r.createElement(N,l(l({ref:t},y),{},{components:a})):r.createElement(N,l({ref:t},y))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var g=2;g<p;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const p={id:"docker-deploy",title:"\u901a\u8fc7 Docker \u65b9\u5f0f\u5b89\u88c5 HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u90e8\u7f72"},l=void 0,o={unversionedId:"start/docker-deploy",id:"version-v1.4.x/start/docker-deploy",title:"\u901a\u8fc7 Docker \u65b9\u5f0f\u5b89\u88c5 HertzBeat",description:"\u63a8\u8350\u4f7f\u7528Docker\u90e8\u7f72HertzBeat",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/start/docker-deploy.md",sourceDirName:"start",slug:"/start/docker-deploy",permalink:"/zh-cn/docs/v1.4.x/start/docker-deploy",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/start/docker-deploy.md",tags:[],version:"v1.4.x",frontMatter:{id:"docker-deploy",title:"\u901a\u8fc7 Docker \u65b9\u5f0f\u5b89\u88c5 HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u90e8\u7f72"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-cn/docs/v1.4.x/start/quickstart"},next:{title:"\u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72",permalink:"/zh-cn/docs/v1.4.x/start/package-deploy"}},i={},g=[{value:"Docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",id:"docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",level:3}],y={toc:g};function m(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528Docker\u90e8\u7f72HertzBeat  ")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,n.yg)("br",{parentName:"p"}),"\n","Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8d44\u6599\uff1a",(0,n.yg)("br",{parentName:"p"}),"\n","",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\n",(0,n.yg)("a",{parentName:"p",href:"https://www.runoob.com/docker/docker-tutorial.html"},"\u83dc\u9e1f\u6559\u7a0b-Docker\u6559\u7a0b"),"\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u62c9\u53d6HertzBeat Docker\u955c\u50cf",(0,n.yg)("br",{parentName:"p"}),"\n","\u955c\u50cf\u7248\u672cTAG\u53ef\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/tancloud/hertzbeat/tags"},"dockerhub \u5b98\u65b9\u955c\u50cf\u4ed3\u5e93"),(0,n.yg)("br",{parentName:"p"}),"\n","\u6216\u8005\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"https://quay.io/repository/tancloud/hertzbeat"},"quay.io \u955c\u50cf\u4ed3\u5e93")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker pull tancloud/hertzbeat   \n$ docker pull tancloud/hertzbeat-collector   \n")),(0,n.yg)("p",{parentName:"li"},"\u82e5\u7f51\u7edc\u8d85\u65f6\u6216\u8005\u4f7f\u7528"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker pull quay.io/tancloud/hertzbeat\n$ docker pull quay.io/tancloud/hertzbeat-collector   \n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u90e8\u7f72HertzBeat\u60a8\u53ef\u80fd\u9700\u8981\u638c\u63e1\u7684\u51e0\u6761\u547d\u4ee4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"#\u67e5\u770b\u6240\u6709\u5bb9\u5668(\u5728\u8fd0\u884c\u548c\u5df2\u7ecf\u505c\u6b62\u8fd0\u884c\u7684\u5bb9\u5668)\n$ docker ps -a\n#\u542f\u52a8/\u7ec8\u6b62/\u91cd\u542f/\u8fd0\u884c\u72b6\u6001\n$ docker start/stop/restart/stats \u5bb9\u5668id\u6216\u8005\u5bb9\u5668\u540d\n#\u8fdb\u5165\u5bb9\u5668\u5e76\u6253\u5f00\u5bb9\u5668\u7684shell\u7ec8\u7aef\n$ docker exec -it \u5bb9\u5668id\u6216\u8005\u5bb9\u5668\u540d /bin/bash\n#\u9000\u51fa\u5bb9\u5668\u7ec8\u7aef\nctrl+p\u7136\u540ectrl+q\n#\u5b8c\u5168\u9000\u51fa\u5bb9\u5668\u7684\u7ec8\u7aef \nctrl+d\u6216\u8005\n$ exit\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u6302\u8f7d\u5e76\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6(\u53ef\u9009)",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d ",(0,n.yg)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u5230\u4e3b\u673a\u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982: $(pwd)/application.yml",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d\u6e90 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/raw/master/script/application.yml"},"github/script/application.yml")," \u6216 ",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/raw/master/script/application.yml"},"gitee/script/application.yml"),"   "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u82e5\u9700\u4f7f\u7528\u90ae\u4ef6\u53d1\u9001\u544a\u8b66\uff0c\u9700\u66ff\u6362 ",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml")," \u91cc\u9762\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u53c2\u6570"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u63a8\u8350"),"\u82e5\u9700\u4f7f\u7528\u5916\u7f6eMysql\u6570\u636e\u5e93\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93\uff0c\u9700\u66ff\u6362",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"li"},"spring.datasource"),"\u53c2\u6570 \u5177\u4f53\u6b65\u9aa4\u53c2\u89c1 ",(0,n.yg)("a",{parentName:"li",href:"mysql-change"},"H2\u6570\u636e\u5e93\u5207\u6362\u4e3aMYSQL"),"\uff09       "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u63a8\u8350"),"\u82e5\u9700\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93TDengine\u6765\u5b58\u50a8\u6307\u6807\u6570\u636e\uff0c\u9700\u66ff\u6362",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"li"},"warehouse.store.td-engine"),"\u53c2\u6570 \u5177\u4f53\u6b65\u9aa4\u53c2\u89c1 ",(0,n.yg)("a",{parentName:"li",href:"tdengine-init"},"\u4f7f\u7528TDengine\u5b58\u50a8\u6307\u6807\u6570\u636e"),"   "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u63a8\u8350"),"\u82e5\u9700\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93IotDB\u6765\u5b58\u50a8\u6307\u6807\u6570\u636e\u5e93\uff0c\u9700\u66ff\u6362",(0,n.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u91cc\u9762\u7684",(0,n.yg)("inlineCode",{parentName:"li"},"warehouse.storeiot-db"),"\u53c2\u6570 \u5177\u4f53\u6b65\u9aa4\u53c2\u89c1 ",(0,n.yg)("a",{parentName:"li",href:"iotdb-init"},"\u4f7f\u7528IotDB\u5b58\u50a8\u6307\u6807\u6570\u636e"),"    "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u6302\u8f7d\u5e76\u914d\u7f6eHertzBeat\u7528\u6237\u914d\u7f6e\u6587\u4ef6\uff0c\u81ea\u5b9a\u4e49\u7528\u6237\u5bc6\u7801(\u53ef\u9009)",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat\u9ed8\u8ba4\u5185\u7f6e\u4e09\u4e2a\u7528\u6237\u8d26\u6237,\u5206\u522b\u4e3a admin/hertzbeat tom/hertzbeat guest/hertzbeat",(0,n.yg)("br",{parentName:"p"}),"\n","\u82e5\u9700\u8981\u65b0\u589e\u5220\u9664\u4fee\u6539\u8d26\u6237\u6216\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,n.yg)("inlineCode",{parentName:"p"},"sureness.yml")," \u5b9e\u73b0\uff0c\u82e5\u65e0\u6b64\u9700\u6c42\u53ef\u5ffd\u7565\u6b64\u6b65\u9aa4",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d ",(0,n.yg)("inlineCode",{parentName:"p"},"sureness.yml")," \u6587\u4ef6\u5230\u4e3b\u673a\u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982: $(pwd)/sureness.yml",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e0b\u8f7d\u6e90 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/raw/master/script/sureness.yml"},"github/script/sureness.yml")," \u6216 ",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/raw/master/script/sureness.yml"},"gitee/script/sureness.yml"),(0,n.yg)("br",{parentName:"p"}),"\n","\u5177\u4f53\u4fee\u6539\u6b65\u9aa4\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"account-modify"},"\u914d\u7f6e\u4fee\u6539\u8d26\u6237\u5bc6\u7801"),"   ")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u542f\u52a8HertzBeat Docker\u5bb9\u5668    "))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 1157:1157 -p 1158:1158 \\\n    -e LANG=zh_CN.UTF-8 \\\n    -e TZ=Asia/Shanghai \\\n    -v $(pwd)/data:/opt/hertzbeat/data \\\n    -v $(pwd)/logs:/opt/hertzbeat/logs \\\n    -v $(pwd)/application.yml:/opt/hertzbeat/config/application.yml \\\n    -v $(pwd)/sureness.yml:/opt/hertzbeat/config/sureness.yml \\\n    --restart=always \\\n    --name hertzbeat tancloud/hertzbeat\n")),(0,n.yg)("p",null," \t\u8fd9\u6761\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u8fd0\u884cHertzBeat\u7684Docker\u5bb9\u5668\uff0c\u5e76\u4e14\u5c06\u5bb9\u5668\u76841157\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u76841157\u7aef\u53e3\u4e0a\u3002\u82e5\u5bbf\u4e3b\u673a\u5df2\u6709\u8fdb\u7a0b\u5360\u7528\u8be5\u7aef\u53e3\uff0c\u5219\u9700\u8981\u4fee\u6539\u4e3b\u673a\u6620\u5c04\u7aef\u53e3\u3002  "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d")," : \u901a\u8fc7Docker\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668,\u4f7f\u5176\u5728\u540e\u53f0\u8fd0\u884c")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-e LANG=zh_CN.UTF-8"),"  : \u8bbe\u7f6e\u7cfb\u7edf\u8bed\u8a00")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-e TZ=Asia/Shanghai")," : \u8bbe\u7f6e\u7cfb\u7edf\u65f6\u533a")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-p 1157:1157 -p 1158:1158"),"  : \u6620\u5c04\u5bb9\u5668\u7aef\u53e3\u5230\u4e3b\u673a\u7aef\u53e3\uff0c\u8bf7\u6ce8\u610f\uff0c\u524d\u9762\u662f\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u53f7\uff0c\u540e\u9762\u662f\u5bb9\u5668\u7684\u7aef\u53e3\u53f7\u30021157\u662fWEB\u7aef\u53e3\uff0c1158\u662f\u96c6\u7fa4\u7aef\u53e3\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-v $(pwd)/data:/opt/hertzbeat/data")," : (\u53ef\u9009\uff0c\u6570\u636e\u6301\u4e45\u5316)\u91cd\u8981\u26a0\ufe0f \u6302\u8f7dH2\u6570\u636e\u5e93\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\uff0c\u4fdd\u8bc1\u6570\u636e\u4e0d\u4f1a\u56e0\u4e3a\u5bb9\u5668\u7684\u521b\u5efa\u5220\u9664\u800c\u4e22\u5931")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-v $(pwd)/logs:/opt/hertzbeat/logs")," : (\u53ef\u9009\uff0c\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u6302\u8f7d\u65e5\u5fd7\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\uff0c\u4fdd\u8bc1\u65e5\u5fd7\u4e0d\u4f1a\u56e0\u4e3a\u5bb9\u5668\u7684\u521b\u5efa\u5220\u9664\u800c\u4e22\u5931\uff0c\u65b9\u4fbf\u67e5\u770b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-v $(pwd)/application.yml:/opt/hertzbeat/config/application.yml"),"  : (\u53ef\u9009,\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u6302\u8f7d\u4e0a\u4e0a\u4e00\u6b65\u4fee\u6539\u7684\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u5373\u4f7f\u7528\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6\u3002\u6211\u4eec\u9700\u8981\u4fee\u6539\u6b64\u914d\u7f6e\u6587\u4ef6\u7684MYSQL\uff0cTDengine\u914d\u7f6e\u4fe1\u606f\u6765\u8fde\u63a5\u5916\u90e8\u670d\u52a1\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"-v $(pwd)/sureness.yml:/opt/hertzbeat/config/sureness.yml"),"  : (\u53ef\u9009,\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u6302\u8f7d\u4e0a\u4e00\u6b65\u4fee\u6539\u7684\u8d26\u6237\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u82e5\u65e0\u4fee\u6539\u8d26\u6237\u9700\u6c42\u53ef\u5220\u9664\u6b64\u547d\u4ee4\u53c2\u6570\u3002  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6ce8\u610f\u26a0\ufe0f \u6302\u8f7d\u6587\u4ef6\u65f6\uff0c\u524d\u9762\u53c2\u6570\u4e3a\u4f60\u81ea\u5b9a\u4e49\u672c\u5730\u6587\u4ef6\u5730\u5740\uff0c\u540e\u9762\u53c2\u6570\u4e3adocker\u5bb9\u5668\u5185\u6587\u4ef6\u5730\u5740(\u56fa\u5b9a)  ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"--name hertzbeat")," : \u547d\u540d\u5bb9\u5668\u540d\u79f0 hertzbeat ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"--restart=always"),"\uff1a(\u53ef\u9009\uff0c\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u4f7f\u5bb9\u5668\u5728Docker\u542f\u52a8\u540e\u81ea\u52a8\u91cd\u542f\u3002\u82e5\u60a8\u672a\u5728\u5bb9\u5668\u521b\u5efa\u65f6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b9e\u73b0\u8be5\u5bb9\u5668\u81ea\u542f\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker update --restart=always hertzbeat\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"tancloud/hertzbeat")," : \u4f7f\u7528\u62c9\u53d6\u6700\u65b0\u7684\u7684HertzBeat\u5b98\u65b9\u53d1\u5e03\u7684\u5e94\u7528\u955c\u50cf\u6765\u542f\u52a8\u5bb9\u5668,",(0,n.yg)("strong",{parentName:"p"},"\u82e5\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"strong"},"quay.io"),"\u955c\u50cf\u9700\u7528\u53c2\u6570",(0,n.yg)("inlineCode",{parentName:"strong"},"quay.io/tancloud/hertzbeat"),"\u4ee3\u66ff\u3002"),"   "))),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5f00\u59cb\u63a2\u7d22HertzBeat",(0,n.yg)("br",{parentName:"p"}),"\n","\u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5373\u53ef\u5f00\u59cb\u63a2\u7d22\u4f7f\u7528HertzBeat\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat\u3002  ")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u90e8\u7f72\u91c7\u96c6\u5668\u96c6\u7fa4(\u53ef\u9009)"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d \\\n    -e IDENTITY=custom-collector-name \\\n    -e MODE=public \\\n    -e MANAGER_HOST=127.0.0.1 \\\n    -e MANAGER_PORT=1158 \\\n    --name hertzbeat-collector tancloud/hertzbeat-collector\n")),(0,n.yg)("p",null,"   \u8fd9\u6761\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u8fd0\u884cHertzBeat\u91c7\u96c6\u5668\u7684Docker\u5bb9\u5668\uff0c\u5e76\u76f4\u8fde\u4e0a\u4e86HertzBeat\u4e3b\u670d\u52a1\u8282\u70b9\u3002 "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"docker run -d")," : \u901a\u8fc7Docker\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668,\u4f7f\u5176\u5728\u540e\u53f0\u8fd0\u884c"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name"),"  : (\u53ef\u9009) \u8bbe\u7f6e\u91c7\u96c6\u5668\u7684\u552f\u4e00\u6807\u8bc6\u540d\u79f0\u3002\u26a0\ufe0f\u6ce8\u610f\u591a\u91c7\u96c6\u5668\u65f6\u91c7\u96c6\u5668\u540d\u79f0\u9700\u4fdd\u8bc1\u552f\u4e00\u6027\u3002  "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MODE=public")," : \u914d\u7f6e\u8fd0\u884c\u6a21\u5f0f(public or private), \u516c\u5171\u96c6\u7fa4\u6a21\u5f0f\u6216\u79c1\u6709\u4e91\u8fb9\u6a21\u5f0f\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : \u91cd\u8981\u26a0\ufe0f \u8bbe\u7f6e\u8fde\u63a5\u7684\u4e3bHertzBeat\u670d\u52a1\u5730\u5740IP\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," :  (\u53ef\u9009) \u8bbe\u7f6e\u8fde\u63a5\u7684\u4e3bHertzBeat\u670d\u52a1\u5730\u5740\u7aef\u53e3\uff0c\u9ed8\u8ba4 1158."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-v $(pwd)/logs:/opt/hertzbeat-collector/logs")," : (\u53ef\u9009\uff0c\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u6302\u8f7d\u65e5\u5fd7\u6587\u4ef6\u5230\u672c\u5730\u4e3b\u673a\uff0c\u4fdd\u8bc1\u65e5\u5fd7\u4e0d\u4f1a\u56e0\u4e3a\u5bb9\u5668\u7684\u521b\u5efa\u5220\u9664\u800c\u4e22\u5931\uff0c\u65b9\u4fbf\u67e5\u770b"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--name hertzbeat-collector")," : \u547d\u540d\u5bb9\u5668\u540d\u79f0 hertzbeat-collector"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"tancloud/hertzbeat-collector")," : \u4f7f\u7528\u62c9\u53d6\u6700\u65b0\u7684\u7684HertzBeat\u91c7\u96c6\u5668\u5b98\u65b9\u53d1\u5e03\u7684\u5e94\u7528\u955c\u50cf\u6765\u542f\u52a8\u5bb9\u5668,",(0,n.yg)("strong",{parentName:"li"},"\u82e5\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"strong"},"quay.io"),"\u955c\u50cf\u9700\u7528\u53c2\u6570",(0,n.yg)("inlineCode",{parentName:"strong"},"quay.io/tancloud/hertzbeat-collector"),"\u4ee3\u66ff\u3002"),"   ")),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee\u4e3bHertzBeat\u670d\u52a1 ",(0,n.yg)("inlineCode",{parentName:"li"},"http://localhost:1157")," \u67e5\u770b\u6982\u89c8\u9875\u9762\u5373\u53ef\u770b\u5230\u6ce8\u518c\u4e0a\u6765\u7684\u65b0\u91c7\u96c6\u5668  ")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"HAVE FUN"),"   "),(0,n.yg)("h3",{id:"docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"},"Docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6700\u591a\u7684\u95ee\u9898\u5c31\u662f\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5148\u63d0\u524d\u6392\u67e5")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"MYSQL,TDENGINE\u6216IotDB\u548cHertzBeat\u90fdDocker\u90e8\u7f72\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\uff0cHertzBeat\u4f7f\u7528localhost\u6216127.0.0.1\u8fde\u63a5\u6570\u636e\u5e93\u5931\u8d25"),(0,n.yg)("br",{parentName:"p"}),"\n","\u6b64\u95ee\u9898\u672c\u8d28\u4e3aDocker\u5bb9\u5668\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7aef\u53e3\u8fde\u63a5\u5931\u8d25\uff0c\u7531\u4e8edocker\u9ed8\u8ba4\u7f51\u7edc\u6a21\u5f0f\u4e3aBridge\u6a21\u5f0f\uff0c\u5176\u901a\u8fc7localhost\u8bbf\u95ee\u4e0d\u5230\u5bbf\u4e3b\u673a\u3002"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u89e3\u51b3\u529e\u6cd5\u4e00\uff1a\u914d\u7f6eapplication.yml\u5c06\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u7531localhost\u4fee\u6539\u4e3a\u5bbf\u4e3b\u673a\u7684\u5bf9\u5916IP",(0,n.yg)("br",{parentName:"p"}),"\n","\u89e3\u51b3\u529e\u6cd5\u4e8c\uff1a\u4f7f\u7528Host\u7f51\u7edc\u6a21\u5f0f\u542f\u52a8Docker\uff0c\u5373\u4f7fDocker\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edc ",(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d --network host ....."),"   "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u6309\u7167\u6d41\u7a0b\u90e8\u7f72\uff0c\u8bbf\u95ee http://ip:1157/ \u65e0\u754c\u9762"),(0,n.yg)("br",{parentName:"p"}),"\n","\u8bf7\u53c2\u8003\u4e0b\u9762\u51e0\u70b9\u6392\u67e5\u95ee\u9898\uff1a  "),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u4e00\uff1a\u82e5\u5207\u6362\u4e86\u4f9d\u8d56\u670d\u52a1MYSQL\u6570\u636e\u5e93\uff0c\u6392\u67e5\u6570\u636e\u5e93\u662f\u5426\u6210\u529f\u521b\u5efa\uff0c\u662f\u5426\u542f\u52a8\u6210\u529f\n\u4e8c\uff1aHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,n.yg)("inlineCode",{parentName:"p"},"application.yml")," \u91cc\u9762\u7684\u4f9d\u8d56\u670d\u52a1IP\u8d26\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u662f\u5426\u6b63\u786e",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e09\uff1a\u82e5\u90fd\u65e0\u95ee\u9898\u53ef\u4ee5 ",(0,n.yg)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\u662f\u5426\u6709\u660e\u663e\u9519\u8bef\uff0c\u63d0issue\u6216\u4ea4\u6d41\u7fa4\u6216\u793e\u533a\u53cd\u9988"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u65e5\u5fd7\u62a5\u9519TDengine\u8fde\u63a5\u6216\u63d2\u5165SQL\u5931\u8d25"),"  "),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u4e00\uff1a\u6392\u67e5\u914d\u7f6e\u7684\u6570\u636e\u5e93\u8d26\u6237\u5bc6\u7801\u662f\u5426\u6b63\u786e\uff0c\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e8c\uff1a\u82e5\u662f\u5b89\u88c5\u5305\u5b89\u88c5\u7684TDengine2.3+\uff0c\u9664\u4e86\u542f\u52a8server\u5916\uff0c\u8fd8\u9700\u6267\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," \u542f\u52a8 adapter    "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u76d1\u63a7\u5386\u53f2\u56fe\u8868\u957f\u65f6\u95f4\u90fd\u4e00\u76f4\u65e0\u6570\u636e"),"  "),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u4e00\uff1aTdengine\u6216IoTDB\u662f\u5426\u914d\u7f6e\uff0c\u672a\u914d\u7f6e\u5219\u65e0\u5386\u53f2\u56fe\u8868\u6570\u636e",(0,n.yg)("br",{parentName:"p"}),"\n","\u4e8c\uff1aTdengine\u7684\u6570\u636e\u5e93",(0,n.yg)("inlineCode",{parentName:"p"},"hertzbeat"),"\u662f\u5426\u521b\u5efa\n\u4e09: HertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,n.yg)("inlineCode",{parentName:"p"},"application.yml")," \u91cc\u9762\u7684\u4f9d\u8d56\u670d\u52a1 IotDB\u6216Tdengine IP\u8d26\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u662f\u5426\u6b63\u786e  "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u76d1\u63a7\u9875\u9762\u5386\u53f2\u56fe\u8868\u4e0d\u663e\u793a\uff0c\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u5982\u5f39\u7a97\u6240\u793a\uff0c\u5386\u53f2\u56fe\u8868\u5c55\u793a\u7684\u524d\u63d0\u662f\u9700\u8981\u5b89\u88c5\u914d\u7f6ehertzbeat\u7684\u4f9d\u8d56\u670d\u52a1 -\n\u5b89\u88c5\u521d\u59cb\u5316\u6b64\u6570\u636e\u5e93\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"tdengine-init"},"TDengine\u5b89\u88c5\u521d\u59cb\u5316")," \u6216 ",(0,n.yg)("a",{parentName:"p",href:"iotdb-init"},"IoTDB\u5b89\u88c5\u521d\u59cb\u5316"),"  "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5b89\u88c5\u914d\u7f6e\u4e86\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u4f46\u9875\u9762\u4f9d\u65e7\u663e\u793a\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"\u8bf7\u68c0\u67e5\u914d\u7f6e\u53c2\u6570\u662f\u5426\u6b63\u786e\niot-db \u6216td-engine enable \u662f\u5426\u8bbe\u7f6e\u4e3atrue\n\u6ce8\u610f\u26a0\ufe0f\u82e5hertzbeat\u548cIotDB\uff0cTDengine\u90fd\u4e3adocker\u5bb9\u5668\u5728\u540c\u4e00\u4e3b\u673a\u4e0b\u542f\u52a8\uff0c\u5bb9\u5668\u4e4b\u95f4\u9ed8\u8ba4\u4e0d\u80fd\u7528127.0.0.1\u901a\u8baf\uff0c\u6539\u4e3a\u4e3b\u673aIP\n\u53ef\u6839\u636elogs\u76ee\u5f55\u4e0b\u542f\u52a8\u65e5\u5fd7\u6392\u67e5")))))}m.isMDXComponent=!0}}]);