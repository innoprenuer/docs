"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),s=a(2389),l=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a;const{lazy:s,block:p,defaultValue:m,values:f,groupId:y,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(t=null!=m?m:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:w}=(0,i.U)(),[T,O]=(0,r.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=y){const e=P[y];null!=e&&e!==T&&g.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=j.indexOf(t),n=g[a].value;n!==T&&(x(t),O(n),null!=y&&w(y,String(n)))},N=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;a=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:N,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},1617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),s=a(5162);const l={sidebar_label:"Create an LSP7 Digital Asset (Token)",sidebar_position:1},i="Create an LSP7 Digital Asset (Token)",c={unversionedId:"guides/digital-assets/create-lsp7-digital-asset",id:"guides/digital-assets/create-lsp7-digital-asset",title:"Create an LSP7 Digital Asset (Token)",description:"This guide will teach you how to create our token (LSP7 Digital Asset) and transfer it between Universal Profiles (UP).",source:"@site/docs/guides/digital-assets/create-lsp7-digital-asset.md",sourceDirName:"guides/digital-assets",slug:"/guides/digital-assets/create-lsp7-digital-asset",permalink:"/guides/digital-assets/create-lsp7-digital-asset",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/digital-assets/create-lsp7-digital-asset.md",tags:[],version:"current",lastUpdatedAt:1657726655,formattedLastUpdatedAt:"7/13/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Create an LSP7 Digital Asset (Token)",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Execute Relay Call",permalink:"/guides/key-manager/execute-relay-call"},next:{title:"Read Asset Data",permalink:"/guides/digital-assets/read-asset-data"}},u={},d=[{value:"Deploy an LSP7 Digital Asset contract",id:"deploy-an-lsp7-digital-asset-contract",level:2},{value:"Mint tokens for your Universal Profile",id:"mint-tokens-for-your-universal-profile",level:2},{value:"Transfer tokens to an other Universal Profile",id:"transfer-tokens-to-an-other-universal-profile",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-lsp7-digital-asset-token"},"Create an LSP7 Digital Asset (Token)"),(0,r.kt)("p",null,"This guide will teach you how to create our token (",(0,r.kt)("a",{parentName:"p",href:"../../standards/nft-2.0/lsp7-digital-asset"},"LSP7 Digital Asset"),") and transfer it between Universal Profiles (UP)."),(0,r.kt)("h2",{id:"deploy-an-lsp7-digital-asset-contract"},"Deploy an LSP7 Digital Asset contract"),(0,r.kt)("p",null,"We will use a specific implementation of LSP7, called ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP7Mintable"),". It allows the contract deployer to mint new tokens."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\n\nconst myEOA = '<address-of-up-owner>';\nconst tokenParams = [\n  'My LSP7 Token', // token name\n  'LSP7', // token symbol\n  myEOA, // new owner\n  false, // isNFT (make your token divisible or not)\n];\n\n// create an instance\nconst myToken = new web3.eth.Contract(LSP7Mintable.abi, {\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n\n// deploy the token contract\nawait myToken\n  .deploy({ data: LSP7Mintable.bytecode, arguments: tokenParams })\n  .send({\n    from: myEOA,\n  });\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\n\nconst myEOA = '<address-of-up-owner>';\nconst tokenParams = [\n  'My LSP7 Token', // token name\n  'LSP7', // token symbol\n  myEOA, // new owner\n  false, // isNFT (make your token divisible or not)\n];\n\n// deploy + create an instance of the token contract\nconst lsp7Factory = await ethers.getContractFactory('LSP7Mintable');\nconst myToken = await lsp7Factory.deploy(tokenParams);\n")))),(0,r.kt)("h2",{id:"mint-tokens-for-your-universal-profile"},"Mint tokens for your Universal Profile"),(0,r.kt)("p",null,"The code snippet below shows how to mint 100 tokens with your Universal Profile as a beneficiary."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.methods.mint('<up-address>', 100, false, '0x').send({\n  from: myEOA,\n});\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');\n")))),(0,r.kt)("h2",{id:"transfer-tokens-to-an-other-universal-profile"},"Transfer tokens to an other Universal Profile"),(0,r.kt)("p",null,"The following code snippet shows how to transfer 15 tokens from your UP to another UP called ",(0,r.kt)("inlineCode",{parentName:"p"},"bobUP"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bobUP = '<bob-up-address>';\nconst amount = 15;\n\n// 1. generate the payload to transfer tokens\nconst tokenPayload = myToken.methods\n  .transfer('<up-address>', bobUP, amount, false, '0x')\n  .encodeABI();\n\n// 2. generate payload for Universal Profile to execute the token transfer on the token contract\nconst upPayload = myUniversalProfile.methods\n  .execute(0, myToken._address, 0, tokenPayload)\n  .encodeABI();\n\n// 3. execute via the KeyManager\nawait myKeyManager.methods.execute(upPayload).send({\n  from: myEOA,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bobUP = '<bob-up-address>';\nconst amount = 15;\n\n// 1. generate the payload to transfer tokens\nconst tokenPayload = myToken.interface.encodeFunctionData('transfer', [\n  '<up-address>',\n  bobUP,\n  amount,\n  false,\n  '0x',\n]);\n\n// 2. generate payload for Universal Profile to execute the token transfer on the token contract\nconst upPayload = myUniversalProfile.interface.encodeFunctionData('execute', [\n  0,\n  myToken._address,\n  0,\n  tokenPayload,\n]);\n\n// 3. execute via the KeyManager\nawait myKeyManager.connect(myEOA).execute(upPayload, ({\n  from: myEOA.address,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n")))))}m.isMDXComponent=!0}}]);