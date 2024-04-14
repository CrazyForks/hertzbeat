"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[58877],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>c});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,y=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return t?a.createElement(y,p(p({ref:n},u),{},{components:t})):a.createElement(y,p({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={id:"extend-tutorial",title:"\u81ea\u5b9a\u4e49\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u65b0\u76d1\u63a7\u7c7b\u578b",sidebar_label:"\u6559\u7a0b\u6848\u4f8b"},p=void 0,o={unversionedId:"advanced/extend-tutorial",id:"advanced/extend-tutorial",title:"\u81ea\u5b9a\u4e49\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u65b0\u76d1\u63a7\u7c7b\u578b",description:"\u901a\u8fc7\u6b64\u6559\u7a0b\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u63cf\u8ff0\u5982\u4f55\u5728hertzbeat\u76d1\u63a7\u7cfb\u7edf\u4e0b\u81ea\u5b9a\u4e49\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u57fa\u4e8ehttp\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-tutorial.md",sourceDirName:"advanced",slug:"/advanced/extend-tutorial",permalink:"/zh-cn/docs/advanced/extend-tutorial",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-tutorial.md",tags:[],version:"current",frontMatter:{id:"extend-tutorial",title:"\u81ea\u5b9a\u4e49\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u65b0\u76d1\u63a7\u7c7b\u578b",sidebar_label:"\u6559\u7a0b\u6848\u4f8b"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/advanced/extend-point"},next:{title:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/advanced/extend-http"}},l={},s=[{value:"HTTP\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\uff0c\u83b7\u53d6\u6307\u6807\u6570\u636e",id:"http\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\u83b7\u53d6\u6307\u6807\u6570\u636e",level:3},{value:"\u65b0\u589e\u914d\u7f6e\u76d1\u63a7\u6a21\u7248YML",id:"\u65b0\u589e\u914d\u7f6e\u76d1\u63a7\u6a21\u7248yml",level:3},{value:"\u9875\u9762\u6dfb\u52a0\u5bf9<code>hertzbeat</code>\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7",id:"\u9875\u9762\u6dfb\u52a0\u5bf9hertzbeat\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7",level:3},{value:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5",id:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5",level:3},{value:"\u5b8c\uff01",id:"\u5b8c",level:4}],u={toc:s};function d(e){let{components:n,...i}=e;return(0,r.yg)("wrapper",(0,a.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u901a\u8fc7\u6b64\u6559\u7a0b\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u63cf\u8ff0\u5982\u4f55\u5728hertzbeat\u76d1\u63a7\u7cfb\u7edf\u4e0b\u81ea\u5b9a\u4e49\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u57fa\u4e8ehttp\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\u3002  "),(0,r.yg)("p",null,"\u9605\u8bfb\u6b64\u6559\u7a0b\u524d\u6211\u4eec\u5e0c\u671b\u60a8\u5df2\u7ecf\u4ece",(0,r.yg)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u548c",(0,r.yg)("a",{parentName:"p",href:"extend-http"},"http\u534f\u8bae\u81ea\u5b9a\u4e49"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\u3002   "),(0,r.yg)("h3",{id:"http\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\u83b7\u53d6\u6307\u6807\u6570\u636e"},"HTTP\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\uff0c\u83b7\u53d6\u6307\u6807\u6570\u636e"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5f88\u591a\u573a\u666f\u6211\u4eec\u9700\u8981\u5bf9\u63d0\u4f9b\u7684 HTTP API \u63a5\u53e3\u8fdb\u884c\u76d1\u63a7\uff0c\u83b7\u53d6\u63a5\u53e3\u8fd4\u56de\u7684\u6307\u6807\u503c\u3002\u8fd9\u7bc7\u6587\u7ae0\u6211\u4eec\u901a\u8fc7http\u81ea\u5b9a\u4e49\u534f\u8bae\u6765\u89e3\u6790\u6211\u4eec\u5e38\u89c1\u7684http\u63a5\u53e3\u54cd\u5e94\u7ed3\u6784\uff0c\u83b7\u53d6\u8fd4\u56de\u4f53\u4e2d\u7684\u5b57\u6bb5\u4f5c\u4e3a\u6307\u6807\u6570\u636e\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "code": 200,\n  "msg": "success",\n  "data": {}\n}\n\n')),(0,r.yg)("p",null,"\u5982\u4e0a\uff0c\u901a\u5e38\u6211\u4eec\u7684\u540e\u53f0API\u63a5\u53e3\u4f1a\u8bbe\u8ba1\u8fd9\u8fd9\u6837\u4e00\u4e2a\u901a\u7528\u8fd4\u56de\u3002hertzbeat\u7cfb\u7edf\u7684\u540e\u53f0\u4e5f\u662f\u5982\u6b64\uff0c\u6211\u4eec\u4eca\u5929\u5c31\u7528hertzbeat\u7684 API \u505a\u6837\u4f8b\uff0c\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u65b0\u7684\u76d1\u63a7\u7c7b\u578b ",(0,r.yg)("strong",{parentName:"p"},"hertzbeat"),"\uff0c\u76d1\u63a7\u91c7\u96c6\u5b83\u7684\u7cfb\u7edf\u6458\u8981\u7edf\u8ba1API\n",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:1157/api/summary"),", \u5176\u54cd\u5e94\u6570\u636e\u4e3a:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "msg": null,\n  "code": 0,\n  "data": {\n    "apps": [\n      {\n        "category": "service",\n        "app": "jvm",\n        "status": 0,\n        "size": 2,\n        "availableSize": 0,\n        "unManageSize": 2,\n        "unAvailableSize": 0,\n        "unReachableSize": 0\n      },\n      {\n        "category": "service",\n        "app": "website",\n        "status": 0,\n        "size": 2,\n        "availableSize": 0,\n        "unManageSize": 2,\n        "unAvailableSize": 0,\n        "unReachableSize": 0\n      }\n    ]\n  }\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6211\u4eec\u8fd9\u6b21\u83b7\u53d6\u5176app\u4e0b\u7684 ",(0,r.yg)("inlineCode",{parentName:"strong"},"category"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"app"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"status"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"size"),",",(0,r.yg)("inlineCode",{parentName:"strong"},"availableSize"),"\u7b49\u6307\u6807\u6570\u636e\u3002")),(0,r.yg)("h3",{id:"\u65b0\u589e\u914d\u7f6e\u76d1\u63a7\u6a21\u7248yml"},"\u65b0\u589e\u914d\u7f6e\u76d1\u63a7\u6a21\u7248YML"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HertzBeat\u9875\u9762")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u76d1\u63a7\u6a21\u7248\u83dc\u5355")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u65b0\u589e\u76d1\u63a7\u7c7b\u578b")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML")),(0,r.yg)("p",null,"\u5b9a\u4e49\u6211\u4eec\u5728\u9875\u9762\u4e0a\u9700\u8981\u8f93\u5165\u54ea\u4e9b\u53c2\u6570\uff0c\u4e00\u822c\u7684HTTP\u534f\u8bae\u53c2\u6570\u4e3b\u8981\u6709ip, port, headers, params, uri, \u8d26\u6237\u5bc6\u7801\u7b49\uff0c\u6211\u4eec\u76f4\u63a5\u590d\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"api"),"\u76d1\u63a7\u6a21\u7248 \u91cc\u9762\u7684\u53c2\u6570\u5b9a\u4e49\u5185\u5bb9\uff0c\u5220\u9664\u5176\u4e2d\u7684\u6211\u4eec\u4e0d\u9700\u8981\u8f93\u5165\u7684uri\u53c2\u6570\u548ckeyword\u5173\u952e\u5b57\u7b49\u53c2\u6570\u5373\u53ef\u3002   "),(0,r.yg)("p",null,"\u5b9a\u4e49\u91c7\u96c6\u7c7b\u578b\u662f\u5565\uff0c\u9700\u8981\u7528\u54ea\u79cd\u534f\u8bae\u91c7\u96c6\u65b9\u5f0f\uff0c\u91c7\u96c6\u7684\u6307\u6807\u662f\u5565\uff0c\u534f\u8bae\u7684\u914d\u7f6e\u53c2\u6570\u7b49\u3002\u6211\u4eec\u76f4\u63a5\u590d\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"api"),"\u76d1\u63a7\u6a21\u7248 \u91cc\u9762\u7684\u5b9a\u4e49\u5185\u5bb9,\u4fee\u6539\u4e3a\u6211\u4eec\u5f53\u524d\u7684\u76d1\u63a7\u7c7b\u578b",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat"),"\u914d\u7f6e\u53c2\u6570\u5373\u53ef\uff0c\u5982\u4e0b\uff1a\u6ce8\u610f\u26a0\ufe0f\u6211\u4eec\u8fd9\u6b21\u83b7\u53d6\u63a5\u53e3\u54cd\u5e94\u6570\u636e\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"category"),",",(0,r.yg)("inlineCode",{parentName:"p"},"app"),",",(0,r.yg)("inlineCode",{parentName:"p"},"status"),",",(0,r.yg)("inlineCode",{parentName:"p"},"size"),",",(0,r.yg)("inlineCode",{parentName:"p"},"availableSize"),"\u7b49\u5b57\u6bb5\u4f5c\u4e3a\u6307\u6807\u6570\u636e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\n# \u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1 program-\u5e94\u7528\u7a0b\u5e8f db-\u6570\u636e\u5e93 custom-\u81ea\u5b9a\u4e49 os-\u64cd\u4f5c\u7cfb\u7edf bigdata-\u5927\u6570\u636e mid-\u4e2d\u95f4\u4ef6 webserver-web\u670d\u52a1\u5668 cache-\u7f13\u5b58 cn-\u4e91\u539f\u751f network-\u7f51\u7edc\u76d1\u63a7\u7b49\u7b49\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\n# \u76d1\u63a7\u7c7b\u578b eg: linux windows tomcat mysql aws...\napp: hertzbeat\n# The monitoring i18n name\n# \u76d1\u63a7\u7c7b\u578b\u56fd\u9645\u5316\u540d\u79f0\nname:\n  zh-CN: HertzBeat\u76d1\u63a7\u7cfb\u7edf\n  en-US: HertzBeat Monitor\n# Input params define for monitoring(render web ui by the definition)\n# \u76d1\u63a7\u6240\u9700\u8f93\u5165\u53c2\u6570\u5b9a\u4e49(\u6839\u636e\u5b9a\u4e49\u6e32\u67d3\u9875\u9762UI)\nparams:\n  # field-param field key\n  # field-\u5b57\u6bb5\u540d\u79f0\u6807\u8bc6\u7b26\n  - field: host\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-param field type(most mapping the html input type)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: host\n    # required-true or false\n    # \u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: true\n  # field-param field key\n  # field-\u53d8\u91cf\u5b57\u6bb5\u6807\u8bc6\u7b26\n  - field: port\n    # name-param field display i18n name\n    # name-\u53c2\u6570\u5b57\u6bb5\u663e\u793a\u540d\u79f0\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    # type-\u5b57\u6bb5\u7c7b\u578b,\u6837\u5f0f(\u5927\u90e8\u5206\u6620\u5c04input\u6807\u7b7etype\u5c5e\u6027)\n    type: number\n    # when type is number, range is required\n    # \u5f53type\u4e3anumber\u65f6,\u7528range\u8868\u793a\u8303\u56f4\n    range: '[0,65535]'\n    # required-true or false\n    # required-\u662f\u5426\u662f\u5fc5\u8f93\u9879 true-\u5fc5\u586b false-\u53ef\u9009\n    required: true\n    # default value\n    # \u7aef\u53e3\u9ed8\u8ba4\u503c\n    defaultValue: 1157\n  - field: ssl\n    name:\n      zh-CN: \u542f\u7528HTTPS\n      en-US: HTTPS\n    type: boolean\n    required: true\n  - field: timeout\n    name:\n      zh-CN: \u8d85\u65f6\u65f6\u95f4(ms)\n      en-US: Timeout(ms)\n    type: number\n    required: false\n    hide: true\n  - field: authType\n    name:\n      zh-CN: \u8ba4\u8bc1\u65b9\u5f0f\n      en-US: Auth Type\n    type: radio\n    required: false\n    hide: true\n    options:\n      - label: Basic Auth\n        value: Basic Auth\n      - label: Digest Auth\n        value: Digest Auth\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 20\n    required: false\n    hide: true\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n    hide: true\nmetrics:\n  # the first metrics summary\n  # attention: Built-in monitoring metrics contains (responseTime - Response time)\n  - name: summary\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    # \u6307\u6807\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u4e3a\u53ef\u7528\u6027\u6307\u6807,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # collect metrics content\n    # \u5177\u4f53\u76d1\u63a7\u6307\u6807\u5217\u8868\n    fields:\n      # metrics content contains field-metric name, type-metric type:0-number,1-string, label-if is metrics label, unit-metric unit('%','ms','MB')\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: app\n        type: 1\n        label: true\n      - field: category\n        type: 1\n      - field: status\n        type: 0\n      - field: size\n        type: 0\n      - field: availableSize\n        type: 0\n    #  the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk, we use HTTP protocol here\n    # \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk, \u6211\u4eec\u8fd9\u91cc\u4f7f\u7528HTTP\u534f\u8bae\n    protocol: http\n    # the config content when protocol is http\n    # \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    http:\n      # http host: ipv4 ipv6 domain\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # http port\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      # http url, we don't need to enter a parameter here, just set the fixed value to /api/summary\n      # url\u8bf7\u6c42\u63a5\u53e3\u8def\u5f84\uff0c\u6211\u4eec\u8fd9\u91cc\u4e0d\u9700\u8981\u8f93\u5165\u4f20\u53c2\uff0c\u5199\u6b7b\u4e3a /api/summary\n      url: /api/summary\n      timeout: ^_^timeout^_^\n      # http method: GET POST PUT DELETE PATCH, default fixed value is GET\n      # \u8bf7\u6c42\u65b9\u5f0f GET POST PUT DELETE PATCH\uff0c\u5199\u6b7b\u4e3a GET\n      method: GET\n      # if enabled https, default value is false\n      # \u662f\u5426\u542f\u7528ssl/tls,\u5373\u662fhttp\u8fd8\u662fhttps,\u9ed8\u8ba4false\n      ssl: ^_^ssl^_^\n      # http auth\n      # \u8ba4\u8bc1\n      authorization:\n        # http auth type: Basic Auth, Digest Auth, Bearer Token\n        # \u8ba4\u8bc1\u65b9\u5f0f: Basic Auth, Digest Auth, Bearer Token\n        type: ^_^authType^_^\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n        digestAuthUsername: ^_^username^_^\n        digestAuthPassword: ^_^password^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, we use jsonpath to parse response data here\n      # \u54cd\u5e94\u6570\u636e\u89e3\u6790\u65b9\u5f0f: default-\u7cfb\u7edf\u89c4\u5219,jsonPath-jsonPath\u811a\u672c,website-\u7f51\u7ad9\u53ef\u7528\u6027\u6307\u6807\u76d1\u63a7\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528jsonpath\u6765\u89e3\u6790\u54cd\u5e94\u6570\u636e\n      parseType: jsonPath\n      parseScript: '$.data.apps.*'\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u70b9\u51fb\u4fdd\u5b58\u5e76\u5e94\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u7cfb\u7edf\u9875\u9762\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u83dc\u5355\u5df2\u7ecf\u591a\u4e86\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"strong"},"hertzbeat"),"\u76d1\u63a7\u7c7b\u578b\u4e86\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(8393).A,width:"3840",height:"1724"})),(0,r.yg)("h3",{id:"\u9875\u9762\u6dfb\u52a0\u5bf9hertzbeat\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7"},"\u9875\u9762\u6dfb\u52a0\u5bf9",(0,r.yg)("inlineCode",{parentName:"h3"},"hertzbeat"),"\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u70b9\u51fb\u65b0\u589e ",(0,r.yg)("inlineCode",{parentName:"p"},"HertzBeat\u76d1\u63a7\u7cfb\u7edf"),"\uff0c\u914d\u7f6e\u76d1\u63a7IP\uff0c\u7aef\u53e3\uff0c\u91c7\u96c6\u5468\u671f\uff0c\u9ad8\u7ea7\u8bbe\u7f6e\u91cc\u7684\u8d26\u6237\u5bc6\u7801\u7b49, \u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u76d1\u63a7\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(43250).A,width:"1921",height:"860"})),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(92251).A,width:"1922",height:"857"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8fc7\u4e00\u5b9a\u65f6\u95f4(\u53d6\u51b3\u4e8e\u91c7\u96c6\u5468\u671f)\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u76d1\u63a7\u8be6\u60c5\u770b\u5230\u5177\u4f53\u7684\u6307\u6807\u6570\u636e\u548c\u5386\u53f2\u56fe\u8868\u5566\uff01")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(82308).A,width:"1922",height:"860"})),(0,r.yg)("h3",{id:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5"},"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u6b63\u5e38\u8bbe\u7f6e\u9608\u503c\uff0c\u544a\u8b66\u89e6\u53d1\u540e\u53ef\u4ee5\u5728\u544a\u8b66\u4e2d\u5fc3\u67e5\u770b\uff0c\u4e5f\u53ef\u4ee5\u65b0\u589e\u63a5\u6536\u4eba\uff0c\u8bbe\u7f6e\u544a\u8b66\u901a\u77e5\u7b49\uff0cHave Fun!!!")),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"\u5b8c"},"\u5b8c\uff01"),(0,r.yg)("p",null,"HTTP\u534f\u8bae\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7684\u5b9e\u8df5\u5c31\u5230\u8fd9\u91cc\uff0cHTTP\u534f\u8bae\u8fd8\u5e26\u5176\u4ed6\u53c2\u6570 ",(0,r.yg)("inlineCode",{parentName:"p"},"headers,params")," \u7b49\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u7528postman\u4e00\u6837\u53bb\u5b9a\u4e49\u5b83\uff0c\u53ef\u73a9\u6027\u4e5f\u975e\u5e38\u9ad8\uff01"))}d.isMDXComponent=!0},8393:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/extend-http-example-1-2ef7a26379015bea268420811e822d18.png"},43250:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/extend-http-example-2-cbd473f82a666e7562d932d8eeaccc57.png"},92251:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/extend-http-example-3-8cdb9ddf2d9e2e7b469eb4082c0f9f13.png"},82308:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/extend-http-example-4-5e7e7c30cdfbd310c653ede5ea72f622.png"}}]);