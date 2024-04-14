"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[14325],{15680:(t,e,n)=>{n.d(e,{xA:()=>y,yg:()=>m});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),i=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},y=function(t){var e=i(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,y=p(t,["components","mdxType","originalType","parentName"]),d=i(n),m=r,c=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(c,g(g({ref:e},y),{},{components:n})):a.createElement(c,g({ref:e},y))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,g[1]=p;for(var i=2;i<l;i++)g[i]=n[i];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44689:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(58168),r=(n(96540),n(15680));const l={id:"springboot2",title:"\u76d1\u63a7\uff1aSpringBoot2.0 \u76d1\u63a7",sidebar_label:"SpringBoot2.0 \u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","SpringBoot2.0 \u76d1\u63a7"]},g=void 0,p={unversionedId:"help/springboot2",id:"help/springboot2",title:"\u76d1\u63a7\uff1aSpringBoot2.0 \u76d1\u63a7",description:"\u5bf9SpringBoot2.0 actuator \u66b4\u9732\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/springboot2.md",sourceDirName:"help",slug:"/help/springboot2",permalink:"/zh-cn/docs/help/springboot2",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/springboot2.md",tags:[],version:"current",frontMatter:{id:"springboot2",title:"\u76d1\u63a7\uff1aSpringBoot2.0 \u76d1\u63a7",sidebar_label:"SpringBoot2.0 \u76d1\u63a7",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7","SpringBoot2.0 \u76d1\u63a7"]},sidebar:"docs",previous:{title:"JVM\u865a\u62df\u673a",permalink:"/zh-cn/docs/help/jvm"},next:{title:"DynamicTp\u7ebf\u7a0b\u6c60\u76d1\u63a7",permalink:"/zh-cn/docs/help/dynamic_tp"}},o={},i=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1ahealth",id:"\u6307\u6807\u96c6\u5408health",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aenvironment",id:"\u6307\u6807\u96c6\u5408environment",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1athreads",id:"\u6307\u6807\u96c6\u5408threads",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1amemory_used",id:"\u6307\u6807\u96c6\u5408memory_used",level:4}],y={toc:i};function u(t){let{components:e,...n}=t;return(0,r.yg)("wrapper",(0,a.A)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9SpringBoot2.0 actuator \u66b4\u9732\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002")),(0,r.yg)("h2",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.yg)("p",null,"\u5982\u679c\u60f3\u8981\u901a\u8fc7\u6b64\u76d1\u63a7\u7c7b\u578b\u76d1\u63a7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SpringBoot")," \u4e2d\u7684\u4fe1\u606f\uff0c\u5219\u9700\u8981\u60a8\u7684SpringBoot\u5e94\u7528\u96c6\u6210\u5e76\u5f00\u542fSpringBoot Actuator\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1\u3001\u6dfb\u52a0POM.XML\u4f9d\u8d56\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2\u3001\u4fee\u6539YML\u914d\u7f6e\u66b4\u9732\u6307\u6807\u63a5\u53e3\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n    enabled-by-default: on\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684\u9879\u76ee\u91cc\u8fd8\u5f15\u5165\u4e86\u8ba4\u8bc1\u76f8\u5173\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982springboot-security,\u90a3\u4e48SpringBoot Actuator\u66b4\u9732\u51fa\u7684\u63a5\u53e3\u53ef\u80fd\u4f1a\u88ab\u62e6\u622a\uff0c\u6b64\u65f6\u9700\u8981\u4f60\u624b\u52a8\u653e\u5f00\u8fd9\u4e9b\u63a5\u53e3\uff0c\u4ee5springboot-security\u4e3a\u4f8b\uff0c\u9700\u8981\u5728SecurityConfig\u914d\u7f6e\u7c7b\u4e2d\u52a0\u5165\u4ee5\u4e0b\u4ee3\u7801\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class SecurityConfig extends WebSecurityConfigurerAdapter{\n    @Override\n    protected void configure(HttpSecurity httpSecurity) throws Exception{\n        httpSecurity\n                // \u914d\u7f6e\u8981\u653e\u5f00\u7684\u63a5\u53e3 -----------------------------------\n                .antMatchers("/actuator/**").permitAll()\n                .antMatchers("/metrics/**").permitAll()\n                .antMatchers("/trace").permitAll()\n                .antMatchers("/heapdump").permitAll()\n                // \u3002\u3002\u3002\n                // \u5176\u4ed6\u63a5\u53e3\u8bf7\u53c2\u8003\uff1ahttps://blog.csdn.net/JHIII/article/details/126601858 -----------------------------------\n    }\n}\n')),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u670d\u52a1\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a8080\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u542f\u7528HTTPS"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u901a\u8fc7HTTPS\u8bbf\u95ee\u7f51\u7ad9\uff0c\u6ce8\u610f\u26a0\ufe0f\u5f00\u542fHTTPS\u4e00\u822c\u9ed8\u8ba4\u5bf9\u5e94\u7aef\u53e3\u9700\u8981\u6539\u4e3a443")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Base Path"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66b4\u9732\u63a5\u53e3\u8def\u5f84\u524d\u7f00\uff0c\u9ed8\u8ba4 /actuator")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408health"},"\u6307\u6807\u96c6\u5408\uff1ahealth"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5065\u5eb7\u72b6\u6001: UP,Down")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408environment"},"\u6307\u6807\u96c6\u5408\uff1aenvironment"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"profile"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u8fd0\u884cprofile: prod,dev,test")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u66b4\u9732\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"os"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u6240\u5728\u64cd\u4f5c\u7cfb\u7edf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"os_arch"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u6240\u5728\u64cd\u4f5c\u7cfb\u7edf\u67b6\u6784")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdk_vendor"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"jdk vendor")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"jvm version")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408threads"},"\u6307\u6807\u96c6\u5408\uff1athreads"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u72b6\u6001")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b64\u7ebf\u7a0b\u72b6\u6001\u5bf9\u5e94\u7684\u7ebf\u7a0b\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408memory_used"},"\u6307\u6807\u96c6\u5408\uff1amemory_used"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"space"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58\u7a7a\u95f4\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mem_used"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b64\u7a7a\u95f4\u5360\u7528\u5185\u5b58\u5927\u5c0f")))))}u.isMDXComponent=!0}}]);