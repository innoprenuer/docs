"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(v,s(s({ref:t},p),{},{components:n})):a.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_label:"LSP1 - Universal Receiver Delegate",sidebar_position:3},s="LSP1 - Universal Receiver Delegate",l={unversionedId:"standards/universal-profile/lsp1-universal-receiver-delegate",id:"standards/universal-profile/lsp1-universal-receiver-delegate",title:"LSP1 - Universal Receiver Delegate",description:"LSP1 - Universal Receiver Delegate",source:"@site/docs/standards/universal-profile/lsp1-universal-receiver-delegate.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp1-universal-receiver-delegate",permalink:"/standards/universal-profile/lsp1-universal-receiver-delegate",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp1-universal-receiver-delegate.md",tags:[],version:"current",lastUpdatedAt:1654680380,formattedLastUpdatedAt:"Jun 8, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"LSP1 - Universal Receiver Delegate",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"LSP0 - ERC725 Account",permalink:"/standards/universal-profile/lsp0-erc725account"},next:{title:"LSP3 - Universal Profile Metadata",permalink:"/standards/universal-profile/lsp3-universal-profile-metadata"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"Specification",id:"specification",level:3},{value:"How Delegation works",id:"how-delegation-works",level:3},{value:"Implementations",id:"implementations",level:2},{value:"Token transfer scenario",id:"token-transfer-scenario",level:3},{value:"References",id:"references",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp1---universal-receiver-delegate"},"LSP1 - Universal Receiver Delegate"),(0,r.kt)("admonition",{title:"Standard Document",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md#specification-of-the-universalreceiverdelegate"},"LSP1 - Universal Receiver Delegate"))),(0,r.kt)("admonition",{title:"Recommendation",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"To better understand this standard, it is well-advised first to check the origin standard ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver")),".")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Once deployed, the code of a smart contract ",(0,r.kt)("strong",{parentName:"p"},"can not be changed"),". However, builders can decide how their smart contracts implement the ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},(0,r.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)"))," function. This standard allows any external smart contract to change relations from the main contract to change function behavior."),(0,r.kt)("p",null,"Therefore, it is advised not to hardcode how the smart contract should handle and react to specific calls inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function. Instead, it should delegate this functionality to another external contract. Developers could then customize such contracts to implement a specific logic that is ",(0,r.kt)("strong",{parentName:"p"},"changeable anytime via an upgrade"),"."),(0,r.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("p",null,"This standard represents a smart contract delegated to the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function."),(0,r.kt)("p",null,"It contains a single function named ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiverDelegate(...)")," that takes the same parameters as the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function with two additional params:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"address ",(0,r.kt)("inlineCode",{parentName:"p"},"caller"),": the address that initially called the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"uint256 ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": the amount of value sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function."))),(0,r.kt)("h3",{id:"how-delegation-works"},"How Delegation works"),(0,r.kt)("p",null,"The address of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"UniversalReceiverDelegate"))," contract should be set as a value for the data key ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md#lsp1universalreceiverdelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP1UniversalReceiverDelegate")),", inside the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y Data key-value store")," of the implementation contract (contract implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function)."),(0,r.kt)("p",null,"With such an implementation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function can forward the call to its similar one called ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiverDelegate(...)"),"."),(0,r.kt)("p",null,"This external contract will then implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiverDelegate(...)")," function. It is also recommended that this contract registers the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/interface-ids"},"LSP1UniversalReceiverDelegate interfaceId"))," using ERC165."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ur-delegate-transaction",src:n(3173).Z,width:"2494",height:"1432"})),(0,r.kt)("h2",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,"There are several implementations of the standard. The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP"))," contract is one of them and is used as a delegate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function of ",(0,r.kt)("strong",{parentName:"p"},"UniversalProfile")," contract."),(0,r.kt)("p",null,"At the moment, this contract allows to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"receive and send tokens & vaults"),(0,r.kt)("li",{parentName:"ul"},"register the data keys representing them according to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5-ReceivedAssets"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-10-ReceivedVaults.md"},"LSP10-ReceivedVaults"))," Standards.")),(0,r.kt)("h3",{id:"token-transfer-scenario"},"Token transfer scenario"),(0,r.kt)("p",null,"One of the possible scenarios is a token transfer between Alice and Bob. Alice wants to transfer a token owned by her Universal Profile to the Universal Profile of her friend Bob."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," It calls the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"transfer(...)"))," function on the token contract through the ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp6-key-manager"},"KeyManager"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"executing transfer function",src:n(73).Z,width:"1542",height:"648"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer(...)")," function on the token contract will directly ",(0,r.kt)("strong",{parentName:"p"},"trigger a hook")," that will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function on both sender and recipient Universal Profiles."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"token contract hooks calling universalReceiver function",src:n(5722).Z,width:"1706",height:"585"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," 3. If the ",(0,r.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," contract is set, it will be called by the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(...)")," function and will execute its custom logic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"universalReceiver function calling UniversalReceiverDelegate contract",src:n(5882).Z,width:"1358",height:"736"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," The ",(0,r.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," of ",(0,r.kt)("strong",{parentName:"p"},"Universal Profile")," allows the transfer and set ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5-ReceivedAssets"))," data keys on both Profiles through the KeyManager."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UniversalReceiverDelegate setting data keys on profile",src:n(828).Z,width:"1410",height:"610"})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver"},"LSP1 Universal Receiver: Solidity implementations (GitHub)"))))}d.isMDXComponent=!0},73:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-transfer-1-562434a3f4db2f5f0da00daff53e641d.jpg"},5722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-transfer-2-869f736fd80789482b288f754fd65305.jpg"},5882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-transfer-3-cef81d8ed641f488398df3436a910649.jpg"},828:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-transfer-4-8e42db7583b60f3ecfebab8ab51a5875.jpg"},3173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ur-delegate-transaction-815e4ec6629f95fb66dc5a6a4f92f3e9.jpeg"}}]);