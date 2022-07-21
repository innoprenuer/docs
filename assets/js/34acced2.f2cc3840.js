"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:1},s="Getting Started",i={unversionedId:"tools/erc725js/getting-started",id:"tools/erc725js/getting-started",title:"Getting Started",description:"This package is currently in the early stages of development. Please use it for testing or experimentation purposes only.",source:"@site/docs/tools/erc725js/getting-started.md",sourceDirName:"tools/erc725js",slug:"/tools/erc725js/getting-started",permalink:"/tools/erc725js/getting-started",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/erc725js/getting-started.md",tags:[],version:"current",lastUpdatedAt:1656548354,formattedLastUpdatedAt:"Jun 30, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"Getting Started",permalink:"/tools/getting-started"},next:{title:"Schemas",permalink:"/tools/erc725js/schemas"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Instantiation",id:"instantiation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This package is currently in the early stages of development. Please use it for testing or experimentation purposes only.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," package allows you to interact with the ERC-725 schemas easily."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub repo: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ERC725Alliance/erc725.js"},"https://github.com/ERC725Alliance/erc725.js")),(0,a.kt)("li",{parentName:"ul"},"NPM: ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@erc725/erc725.js"},"https://www.npmjs.com/package/@erc725/erc725.js"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @erc725/erc725.js\n")),(0,a.kt)("h2",{id:"instantiation"},"Instantiation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ERC725 } from '@erc725/erc725.js';\nimport Web3 from 'web3';\n\n// Part of LSP3-UniversalProfile Schema\n// https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md\nconst schemas = [\n  {\n    name: 'SupportedStandards:LSP3UniversalProfile',\n    key: '0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38',\n    keyType: 'Mapping',\n    valueContent: '0xabe425d6',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP3Profile',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n    keyType: 'Singleton',\n    valueContent: 'JSONURL',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP1UniversalReceiverDelegate',\n    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',\n    keyType: 'Singleton',\n    valueContent: 'Address',\n    valueType: 'address',\n  },\n];\n\nconst address = '0x0c03fba782b07bcf810deb3b7f0595024a444f4e';\nconst provider = new Web3.providers.HttpProvider(\n  'https://rpc.l16.lukso.network',\n);\nconst config = {\n  ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n};\n\nconst erc725 = new ERC725(schemas, address, provider, config);\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await erc725.getOwner();\n// > '0x28D25E70819140daF65b724158D00c373D1a18ee'\n\nawait erc725.getData('SupportedStandards:LSP3UniversalProfile');\n/**\n{\n  'SupportedStandards:LSP3UniversalProfile': '0xabe425d6'\n}\n*/\n\nawait erc725.getData([\n  'LSP3Profile',\n  'SupportedStandards:LSP3UniversalProfile',\n]);\n/**\n{\n  LSP3Profile: {\n    url: 'ipfs://QmXybv2LdJWscy1C6yRKUjvnaj6aqKktZX4g4xmz2nyYj2',\n    hash: '0xb4f9d72e83bbe7e250ed9ec80332c493b7b3d73e0d72f7b2c7ab01c39216eb1a',\n    hashFunction: 'keccak256(utf8)'\n  },\n  'SupportedStandards:LSP3UniversalProfile': '0xabe425d6'\n}\n*/\n\nawait erc725.fetchData('LSP3Profile'); // downloads and verifies the linked JSON\n/**\n{\n  LSP3Profile: {\n    LSP3Profile: {\n        name: 'frozeman',\n        description: 'The inventor of ERC725 and ERC20...',\n        links: [\n            { title: 'Twitter', url: 'https://twitter.com/feindura' },\n            { title: 'lukso.network', url: 'https://lukso.network' }\n        ],\n        ...\n    }\n  }\n}\n*/\n")),(0,a.kt)("admonition",{title:"Try it out",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can run the code snippit within your browser using the corresponding ",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/erc725js-instantiation?devtoolsheight=66&file=index.js"},"StackBlitz example"),".")),(0,a.kt)("p",null,"Whenever you can you should import ",(0,a.kt)("inlineCode",{parentName:"p"},"ERC725")," via the named export. However currently we are also providing a default export."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import ERC725 from 'erc725.js';\n")),(0,a.kt)("p",null,":::"),(0,a.kt)("p",null,"After the instance has been created, it is still possible to change settings through the options property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"myERC725.options.schema = '<schema>' // change schema\nmyERC725.options.address '<address>' // change address\nmyERC725.options.ipfsGateway = '<url>' // used for fetchData(), default: 'https://cloudflare-ipfs.com/ipfs/'\n\n// NOTE: ERC725.provider can not be changed\n")))}d.isMDXComponent=!0}}]);