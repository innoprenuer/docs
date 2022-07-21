"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=a(3117),n=(a(7294),a(3905));const s={sidebar_label:"LSP5 - Received Assets",sidebar_position:5},i="LSP5 - Received Assets",o={unversionedId:"standards/universal-profile/lsp5-received-assets",id:"standards/universal-profile/lsp5-received-assets",title:"LSP5 - Received Assets",description:"LSP5 - Received Assets",source:"@site/docs/standards/universal-profile/lsp5-received-assets.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp5-received-assets",permalink:"/standards/universal-profile/lsp5-received-assets",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp5-received-assets.md",tags:[],version:"current",lastUpdatedAt:1657312585,formattedLastUpdatedAt:"Jul 8, 2022",sidebarPosition:5,frontMatter:{sidebar_label:"LSP5 - Received Assets",sidebar_position:5},sidebar:"standardsSidebar",previous:{title:"LSP3 - Universal Profile Metadata",permalink:"/standards/universal-profile/lsp3-universal-profile-metadata"},next:{title:"LSP6 - Key Manager",permalink:"/standards/universal-profile/lsp6-key-manager"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent?",id:"what-does-this-standard-represent",level:2},{value:"<code>LSP5ReceivedAssets[]</code>",id:"lsp5receivedassets",level:3},{value:"<code>LSP5ReceivedAssetsMap</code>",id:"lsp5receivedassetsmap",level:3},{value:"Flow",id:"flow",level:3}],c={toc:l};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lsp5---received-assets"},"LSP5 - Received Assets"),(0,n.kt)("admonition",{title:"Standard Document",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5 - Received Assets"))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Keeping track of all the tokens that an address owns is currently unfeasible. If you want to know from which tokens you own, you need to manually import the token contract address and query the balance of your key in it each time for each token. This inconvenience brings light to the following problem: owning tokens without being aware because there are no ways of being notified about the tokens you have received in the first place."),(0,n.kt)("p",null,"One way to solve this problem is to create generic metadata keys that would register in the smart contract storage how many different tokens you own and the address of the transferred token contracts."),(0,n.kt)("h2",{id:"what-does-this-standard-represent"},"What does this standard represent?"),(0,n.kt)("admonition",{title:"Recommendation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to understand the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/lsp-background/erc725#erc725y---generic-data-keyvalue-store"},"ERC725Y Generic Key/Value Store"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp2-json-schema"},"LSP2 - ERC725YJSONSchema"))," Standards before going through the ERC725Y Data Keys.")),(0,n.kt)("p",null,"This Metadata standard describes two data keys that can be added to an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," smart contract to reference and keep track of received assets."),(0,n.kt)("h3",{id:"lsp5receivedassets"},(0,n.kt)("inlineCode",{parentName:"h3"},"LSP5ReceivedAssets[]")),(0,n.kt)("p",null,"This data key represents a list of all tokens and NFTs currently owned by the contract."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssets[]",\n  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,n.kt)("admonition",{title:"Recommendation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It is advised to query the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"LSP5ReceivedAssets[]"))," data key to verify if a contract supports the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp5-received-assets"},"LSP5 - ReceivedAsset"))," standard.")),(0,n.kt)("h3",{id:"lsp5receivedassetsmap"},(0,n.kt)("inlineCode",{parentName:"h3"},"LSP5ReceivedAssetsMap")),(0,n.kt)("p",null,"This data key represents a map key, both holding:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 interface ID")," to quickly identify the standard used by each asset smart contract (without the need to query the asset contracts directly)."),(0,n.kt)("li",{parentName:"ul"},"the index in the ",(0,n.kt)("a",{parentName:"li",href:"#lsp5receivedassets-"},(0,n.kt)("inlineCode",{parentName:"a"},"LSP5ReceivedAssets[]"))," Array where the received asset addresses are stored.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP5ReceivedAssetsMap")," data key also helps to prevent adding duplications to the array when automatically added via smart contract (",(0,n.kt)("em",{parentName:"p"},"e.g., ")," an ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssetsMap:<address>",\n  "key": "0x812c4334633eb816c80d0000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,n.kt)("h3",{id:"flow"},"Flow"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The data keys are also set on the ",(0,n.kt)("strong",{parentName:"p"},"sender Universal Profile")," to remove the token contract address if all the balance is sent.")),(0,n.kt)("p",null,"If set when transferring tokens, these data keys are automatically updated in the Universal Profile storage via the ",(0,n.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP")," contract."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Check the ",(0,n.kt)("a",{parentName:"p",href:"./lsp1-universal-receiver-delegate#token-transfer-scenario"},"token transfer scenario")," for more details.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Token transfer detailed flow",src:a(6132).Z,width:"2933",height:"1363"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LSP5 Received Assets Flow",src:a(9109).Z,width:"3198",height:"1250"})))}p.isMDXComponent=!0},6132:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/detailed-token-transfer-0b79556d7974fdabcbe3abc752d74566.jpeg"},9109:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lsp5-received-assets-10665299f692d5062e2c5cd7917a42e5.jpeg"}}]);