"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[83608],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),s=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,g=d["".concat(m,".").concat(u)]||d[u]||c[u]||i;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(58168),r=(t(96540),t(15680));const i={id:"extend-jmx",title:"JMX Protocol Custom Monitoring",sidebar_label:"JMX Protocol Custom Monitoring"},a=void 0,l={unversionedId:"advanced/extend-jmx",id:"advanced/extend-jmx",title:"JMX Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use JMX to customize Metric monitoring.",source:"@site/docs/advanced/extend-jmx.md",sourceDirName:"advanced",slug:"/advanced/extend-jmx",permalink:"/docs/advanced/extend-jmx",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/advanced/extend-jmx.md",tags:[],version:"current",frontMatter:{id:"extend-jmx",title:"JMX Protocol Custom Monitoring",sidebar_label:"JMX Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"SSH Protocol Custom Monitoring",permalink:"/docs/advanced/extend-ssh"},next:{title:"SNMP Protocol Custom Monitoring",permalink:"/docs/advanced/extend-snmp"}},m={},s=[{value:"JMX protocol collection process",id:"jmx-protocol-collection-process",level:3},{value:"Data parsing method",id:"data-parsing-method",level:3},{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring Templates YML",id:"monitoring-templates-yml",level:3}],p={toc:s};function c(e){let{components:n,...i}=e;return(0,r.yg)("wrapper",(0,o.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"From ",(0,r.yg)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use JMX to customize Metric monitoring.\nJMX protocol custom monitoring allows us to easily monitor Metrics we want by config JMX Mbeans Object.")),(0,r.yg)("h3",{id:"jmx-protocol-collection-process"},"JMX protocol collection process"),(0,r.yg)("p",null,"\u3010",(0,r.yg)("strong",{parentName:"p"},"Peer Server Enable Jmx Service"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"HertzBeat Connect Peer Server Jmx"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"Query Jmx Mbean Object Data"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"Metric data extraction"),"\u3011"),(0,r.yg)("p",null,"It can be seen from the process that we define a monitoring type of JMX protocol. We need to configure JMX request parameters, configure which Metrics to obtain, and configure Mbeans Object."),(0,r.yg)("h3",{id:"data-parsing-method"},"Data parsing method"),(0,r.yg)("p",null,"By configuring the monitoring template YML metrics ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"aliasFields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"objectName")," of the ",(0,r.yg)("inlineCode",{parentName:"p"},"jmx")," protocol to map and parse the ",(0,r.yg)("inlineCode",{parentName:"p"},"Mbean")," object information exposed by the peer system."),(0,r.yg)("h3",{id:"custom-steps"},"Custom Steps"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,r.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,r.yg)("strong",{parentName:"p"},"New Template")," -> ",(0,r.yg)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,r.yg)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,r.yg)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(35008).A,width:"4064",height:"2166"})),(0,r.yg)("hr",null),(0,r.yg)("p",null,"Configuration usages of the monitoring templates yml are detailed below."),(0,r.yg)("h3",{id:"monitoring-templates-yml"},"Monitoring Templates YML"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,r.yg)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.")),(0,r.yg)("p",null,"eg\uff1aDefine a custom monitoring type ",(0,r.yg)("inlineCode",{parentName:"p"},"app")," named ",(0,r.yg)("inlineCode",{parentName:"p"},"example_jvm")," which use the JVM protocol to collect data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: service\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: example_jvm\n# The monitoring i18n name\nname:\n  zh-CN: \u81ea\u5b9a\u4e49JVM\u865a\u62df\u673a\n  en-US: CUSTOM JVM\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: port\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    # required-true or false\n    required: true\n    # default value\n    defaultValue: 9999\n  # field-param field key\n  - field: url\n    # name-param field display i18n name\n    name:\n      zh-CN: JMX URL\n      en-US: JMX URL\n    # type-param field type(most mapping the html input type)\n    type: text\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n    # param field input placeholder\n    placeholder: 'service:jmx:rmi:///jndi/rmi://host:port/jmxrmi'\n  # field-param field key\n  - field: username\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    # type-param field type(most mapping the html input type)\n    type: text\n    # when type is text, use limit to limit string length\n    limit: 20\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n  # field-param field key\n  - field: password\n    # name-param field display i18n name\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    # type-param field type(most mapping the html input tag)\n    type: password\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n# collect metrics config list\nmetrics:\n  # metrics - basic\n  - name: basic\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-if is metrics label\n      - field: VmName\n        type: 1\n      - field: VmVendor\n        type: 1\n      - field: VmVersion\n        type: 1\n      - field: Uptime\n        type: 0\n        unit: ms\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: jmx\n    # the config content when protocol is jmx\n    jmx:\n      # host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      # jmx mbean object name\n      objectName: java.lang:type=Runtime\n      url: ^_^url^_^\n\n  - name: memory_pool\n    priority: 1\n    fields:\n      - field: name\n        type: 1\n        label: true\n      - field: committed\n        type: 0\n        unit: MB\n      - field: init\n        type: 0\n        unit: MB\n      - field: max\n        type: 0\n        unit: MB\n      - field: used\n        type: 0\n        unit: MB\n    units:\n      - committed=B->MB\n      - init=B->MB\n      - max=B->MB\n      - used=B->MB\n    # (optional)metrics field alias name, it is used as an alias field to map and convert the collected data and metrics field\n    aliasFields:\n      - Name\n      - Usage->committed\n      - Usage->init\n      - Usage->max\n      - Usage->used\n    # mapping and conversion expressions, use these and aliasField above to calculate metrics value\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - name=Name\n      - committed=Usage->committed\n      - init=Usage->init\n      - max=Usage->max\n      - used=Usage->used\n    protocol: jmx\n    jmx:\n      # host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      objectName: java.lang:type=MemoryPool,name=*\n      url: ^_^url^_^\n")))}c.isMDXComponent=!0},35008:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"}}]);