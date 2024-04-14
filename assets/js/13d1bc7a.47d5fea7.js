"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[17711],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),m=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=m(a),s=r,u=y["".concat(g,".").concat(s)]||y[s]||p[s]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},22746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const l={id:"activemq",title:"Monitoring Apache ActiveMQ",sidebar_label:"Apache ActiveMQ",keywords:["open source monitoring tool","monitoring Apache ActiveMQ metrics"]},i=void 0,o={unversionedId:"help/activemq",id:"version-v1.4.x/help/activemq",title:"Monitoring Apache ActiveMQ",description:"Monitoring the running status of Apache ActiveMQ message middleware, nodes, topics and other related metrics.",source:"@site/versioned_docs/version-v1.4.x/help/activemq.md",sourceDirName:"help",slug:"/help/activemq",permalink:"/docs/v1.4.x/help/activemq",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/help/activemq.md",tags:[],version:"v1.4.x",frontMatter:{id:"activemq",title:"Monitoring Apache ActiveMQ",sidebar_label:"Apache ActiveMQ",keywords:["open source monitoring tool","monitoring Apache ActiveMQ metrics"]},sidebar:"docs",previous:{title:"RabbitMQ Monitor",permalink:"/docs/v1.4.x/help/rabbitmq"},next:{title:"Spring Gateway",permalink:"/docs/v1.4.x/help/spring_gateway"}},g={},m=[{value:"Pre-monitoring Operations",id:"pre-monitoring-operations",level:3},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect Metrics",id:"collect-metrics",level:3},{value:"metrics: broker",id:"metrics-broker",level:4},{value:"metrics: topic",id:"metrics-topic",level:4},{value:"metrics: memory_pool",id:"metrics-memory_pool",level:4},{value:"metrics: class_loading",id:"metrics-class_loading",level:4},{value:"metrics: thread",id:"metrics-thread",level:4}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Monitoring the running status of Apache ActiveMQ message middleware, nodes, topics and other related metrics.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Use Protocol: JMX")),(0,r.yg)("h3",{id:"pre-monitoring-operations"},"Pre-monitoring Operations"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You need to enable the ",(0,r.yg)("inlineCode",{parentName:"p"},"JMX")," service on ActiveMQ, HertzBeat uses the JMX protocol to collect metrics from ActiveMQ.")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Modify the ",(0,r.yg)("inlineCode",{parentName:"li"},"conf/activemq.xml")," file in the installation directory to enable JMX")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Add ",(0,r.yg)("inlineCode",{parentName:"p"},'userJmx="true"')," attribute in ",(0,r.yg)("inlineCode",{parentName:"p"},"broker")," tag")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}" useJmx="true">\n    \x3c!-- others --\x3e\n</broker>\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Modify the ",(0,r.yg)("inlineCode",{parentName:"li"},"bin/env")," file in the installation directory, configure the JMX port IP, etc.")),(0,r.yg)("p",null,"The original configuration information will be as follows"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.port=11099"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"\n \nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote"\n')),(0,r.yg)("p",null,"Update to the following configuration, \u26a0\ufe0f pay attention to modify ",(0,r.yg)("inlineCode",{parentName:"p"},"local external IP")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"\n\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.port=11099"\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.authenticate=false" \nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Djava.rmi.server.hostname=\u672c\u673a\u5bf9\u5916IP"\n\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote"\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Restart the ACTIVEMQ service, and add the corresponding ActiveMQ monitoring in HertzBeat. The parameters use the IP port configured by JMX.")),(0,r.yg)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.yg)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JMX port"),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP port provided by JMX, the default is 11099.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JMX URL"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional, customize the JMX URL connection")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Username"),(0,r.yg)("td",{parentName:"tr",align:null},"Username used for authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"password used for authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.yg)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.yg)("h3",{id:"collect-metrics"},"Collect Metrics"),(0,r.yg)("h4",{id:"metrics-broker"},"metrics: broker"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BrokerName"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BrokerVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The version of the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Uptime"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Uptime of the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UptimeMillis"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Uptime of the broker in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Persistent"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Messages are synchronized to disk.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemoryPercentUsage"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"Percent of memory limit used.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StorePercentUsage"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"Percent of store limit used.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TempPercentUsage"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"Percent of temp limit used.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CurrentConnectionsCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Attribute exposed for management")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalConnectionsCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Attribute exposed for management")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalEnqueueCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that have been sent to the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalDequeueCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that have been acknowledged on the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalConsumerCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of message consumers subscribed to destinations on the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalProducerCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of message producers active on destinations on the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalMessageCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of unacknowledged messages on the broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AverageMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Average message size on this broker")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MaxMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Max message size on this broker")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Min message size on this broker")))),(0,r.yg)("h4",{id:"metrics-topic"},"metrics: topic"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of this destination.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemoryLimit"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory limit, in bytes, used by undelivered messages before paging to temporary storage.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemoryPercentUsage"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The percentage of the memory limit used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ProducerCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of producers attached to this destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ConsumerCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of consumers subscribed to this destination.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EnqueueCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that have been sent to the destination.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DequeueCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that has been acknowledged (and removed) from the destination.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ForwardCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that have been forwarded (to a networked broker) from the destination.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"InFlightCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that have been dispatched to, but not acknowledged by, consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DispatchCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that has been delivered to consumers, including those not acknowledged")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ExpiredCount"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of messages that have been expired.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StoreMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"The memory size of all messages in this destination's store.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AverageEnqueueTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Average time a message was held on this destination.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MaxEnqueueTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"The longest time a message was held on this destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinEnqueueTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"The shortest time a message was held on this destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalBlockedTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Total time (ms) messages have been blocked by flow control")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AverageMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Average message size on this destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MaxMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Max message size on this destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinMessageSize"),(0,r.yg)("td",{parentName:"tr",align:null},"B"),(0,r.yg)("td",{parentName:"tr",align:null},"Min message size on this destination")))),(0,r.yg)("h4",{id:"metrics-memory_pool"},"metrics: memory_pool"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"metrics name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"committed"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"total size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"init"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"init size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"max size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"used"),(0,r.yg)("td",{parentName:"tr",align:null},"kb"),(0,r.yg)("td",{parentName:"tr",align:null},"used size")))),(0,r.yg)("h4",{id:"metrics-class_loading"},"metrics: class_loading"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Loaded Class Count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Total Loaded Class Count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Unloaded Class Count")))),(0,r.yg)("h4",{id:"metrics-thread"},"metrics: thread"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Total Started Thread Count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Thread Count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Peak Thread Count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Daemon Thread Count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Current Thread User Time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,r.yg)("td",{parentName:"tr",align:null},"ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Current Thread Cpu Time")))))}p.isMDXComponent=!0}}]);