"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(4334);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(3117),r=a(7294),s=a(4334),o=a(2389),l=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:h,groupId:b,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,l.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==f&&!w.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[T,x]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&w.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,a=E.indexOf(t),n=w[a].value;n!==T&&(j(t),x(n),null!=b&&N(b,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},g)},w.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},3687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(3117),r=(a(7294),a(3905)),s=a(5488),o=a(5162);const l={sidebar_label:"Interact with a dApp",sidebar_position:3},i="Interact with a dApp",u={unversionedId:"guides/browser-extension/interact-with-dapp",id:"guides/browser-extension/interact-with-dapp",title:"Interact with a dApp",description:"The UP Browser Extenstion is currently in the development alpha version. DO NOT use this in production!",source:"@site/docs/guides/browser-extension/interact-with-dapp.md",sourceDirName:"guides/browser-extension",slug:"/guides/browser-extension/interact-with-dapp",permalink:"/guides/browser-extension/interact-with-dapp",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/browser-extension/interact-with-dapp.md",tags:[],version:"current",lastUpdatedAt:1657726655,formattedLastUpdatedAt:"Jul 13, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"Interact with a dApp",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Create a Universal Profile",permalink:"/guides/browser-extension/create-a-universal-profile"}},p={},c=[{value:"Setup",id:"setup",level:2},{value:"1. Initialize a blockchain provider.",id:"1-initialize-a-blockchain-provider",level:3},{value:"2. Get access to the UP address in use.",id:"2-get-access-to-the-up-address-in-use",level:3},{value:"Operations",id:"operations",level:2},{value:"Send a transaction",id:"send-a-transaction",level:3},{value:"Sign a message",id:"sign-a-message",level:3},{value:"Interact with your universal profile",id:"interact-with-your-universal-profile",level:2},{value:"Events",id:"events",level:2},{value:"Sample dApp",id:"sample-dapp",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-a-dapp"},"Interact with a dApp"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The UP Browser Extenstion is currently in the ",(0,r.kt)("strong",{parentName:"p"},"development alpha")," version. DO NOT use this in production!")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask (or any other ethereum provider) cannot be running simultaneously. It is recommended to deactivate the MetaMask extension for the UP Extension to work.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The extension injects an ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," object into a web page as ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," to interact with the extension."),(0,r.kt)("h3",{id:"1-initialize-a-blockchain-provider"},"1. Initialize a blockchain provider."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Web3 from 'web3';\nconst web3 = new Web3(window.ethereum);\n"))),(0,r.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ethers } from 'ethers';\nconst etherProvider = new ethers.providers.Web3Provider(window.ethereum);\n")))),(0,r.kt)("h3",{id:"2-get-access-to-the-up-address-in-use"},"2. Get access to the UP address in use."),(0,r.kt)("p",null,"A call to ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAccounts")," will open an extension popup to authorize an account."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await web3.eth.requestAccounts();\nconst accounts: string[] = await web3.eth.getAccounts(); //should also yield the same address\n"))),(0,r.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await etherProvider.send(\n  'eth_requestAccounts',\n  [],\n);\nconst signer = etherProvider.getSigner();\nawait signer.getAddress(); //should also yield the same address\n"))),(0,r.kt)(o.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const accountsRequest: string[] = await window.ethereum.request({\n  method: 'eth_requestAccounts',\n  params: [],\n});\nconst accounts: string[] = await window.ethereum.request({\n  method: 'eth_accounts',\n  params: [],\n}); //should also yield the same address\n")))),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("p",null,"Each operation will open an extension popup window for a user to confirm the transaction or sign the message."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have funds on your EOA, the application will use the relayer service by default to pay the gas fees (thus ignoring gas properties).")),(0,r.kt)("h3",{id:"send-a-transaction"},"Send a transaction"),(0,r.kt)("p",null,"You can send any transaction (a value transfer or a smart contract interaction with or without a value)."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await web3.eth.sendTransaction({\n  from: UP_ADDRESS,\n  to: RECIPIENT_ADDRESS,\n  value: 100,\n  data: '0x',\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await signer.sendTransaction({\n  from: UP_ADDRESS,\n  to: RECIPIENT_ADDRESS,\n  value: 100,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(o.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await window.ethereum.request({\n  method: 'eth_sendTransaction',\n  params: [\n    {\n      from: UP_ADDRESS,\n      to: RECIPIENT_ADDRESS,\n      value: '0xB1A2BC2EC50000',\n      gas: '0x76c0',\n      gasPrice: '0x9184e72a000',\n    },\n  ],\n});\n")))),(0,r.kt)("p",null,"You can also add a ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," parameter, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"chaidId: '0x16'"),", to ensure the transaction will run on the specified network."),(0,r.kt)("h3",{id:"sign-a-message"},"Sign a message"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await web3.eth.sign('message', UP_ADDRESS);\n"))),(0,r.kt)(o.Z,{value:"etherjs",label:"etherjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await signer.signMessage('message');\n"))),(0,r.kt)(o.Z,{value:"raw",label:"raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await window.ethereum.request({\n  method: 'eth_sign',\n  params: [UP_ADDRESS, '0xdeadbeaf'],\n});\n")))),(0,r.kt)("h2",{id:"interact-with-your-universal-profile"},"Interact with your universal profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  npm install @lukso/lsp-smart-contracts\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import UniversalProfile from \"@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json\";\n\nconst contract = new web3.eth.Contract(\n  UniversalProfile.abi as unknown, UP_ADDRESS, {\n    gas: 5_000_000,\n    gasPrice: '1000000000',\n  })\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setData")," functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'await contract.methods\n  ["setData(bytes32,bytes)"](key, value)\n  .send({\n      from: UP_ADDRESS,\n  })\n  .on("receipt", (receipt: TransactionReceipt) => {\n      ...\n  })\n  .once("sending", (payload: unknown) => {\n      ...\n  })\n);\n')),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Listening for accounts changed event:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web3",label:"web3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.ethereum.on('accountsChanged', (addresses: string[]) => {\n  const newAddress = addresses[0];\n  ...\n}\n")))),(0,r.kt)("h2",{id:"sample-dapp"},"Sample dApp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"https://up-sample-web-app.staging.lukso.dev/"},"Sample dApp")," for more examples in the browser."),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/universalprofile-sample-web-app"},"Repository")," for code snippets.")))}m.isMDXComponent=!0}}]);