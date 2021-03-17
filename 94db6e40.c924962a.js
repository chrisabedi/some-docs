(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(105)),c={id:"javascript",title:"javascript",sidebar_label:"javascript"},i={unversionedId:"javascript",id:"javascript",isDocsHomePage:!1,title:"javascript",description:"Nodes, linked lists",source:"@site/docs/javascript.md",slug:"/javascript",permalink:"/some-docs/docs/javascript",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/javascript.md",version:"current",sidebar_label:"javascript",sidebar:"someSidebar",previous:{title:"kubectl",permalink:"/some-docs/docs/kubectl"},next:{title:"typescript",permalink:"/some-docs/docs/typescript"}},l=[{value:"Nodes, linked lists",id:"nodes-linked-lists",children:[{value:"output",id:"output",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"nodes-linked-lists"},"Nodes, linked lists"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const chalk = require('chalk')\n\nclass Node {\n\n    constructor(value, next=null){\n        this.value = value;\n        this.next = next;\n    }\n\n    add(node){\n        let current = this;\n        if (current.next)\n            current = current.next;\n        current.next=node;\n    }\n\n    print(){\n        let current = this;\n        console.log(chalk.green(this.value))\n       while (current.next){\n           current=current.next\n           console.log(chalk.blue(current.value))\n       }\n    }\n}\n\nclass LinkedNode extends Node {\n    constructor(value,next=null){\n        super(value, next)\n        this.head=this;\n        this.tail=null;\n    }\n\n    add(node){\n        let current = this.head;\n        if (current.next)\n            current = current.next;\n        current.next=node;\n        this.tail=node\n    }\n\n}\n\n\nlet list = new Node(1);\n\nlist.add(new Node(2))\nlist.add(new Node(3))\nlist.print()\n\n\nlet DL = new LinkedNode(1)\nDL.add(new LinkedNode(2))\nDL.add(new LinkedNode(5))\nDL.print()\n\nconsole.log(chalk.cyan(DL.head.value))\nconsole.log(chalk.cyan(DL.tail.value))\n")),Object(o.b)("h3",{id:"output"},"output"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"\u279c  javascript-exercise node index.js \n1\n2\n3\n1\n2\n5\n1\n5\n")))}u.isMDXComponent=!0}}]);