"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4970],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(t),u=r,m=f["".concat(o,".").concat(u)]||f[u]||c[u]||s;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=f;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9681:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(3117),r=(t(7294),t(3905));const s={sidebar_label:"LSP3 - Universal Profile Metadata",sidebar_position:4},i="LSP3 - Universal Profile Metadata",l={unversionedId:"standards/universal-profile/lsp3-universal-profile-metadata",id:"standards/universal-profile/lsp3-universal-profile-metadata",title:"LSP3 - Universal Profile Metadata",description:"LSP3 - Universal Profile Metadata",source:"@site/docs/standards/universal-profile/lsp3-universal-profile-metadata.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp3-universal-profile-metadata",permalink:"/standards/universal-profile/lsp3-universal-profile-metadata",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp3-universal-profile-metadata.md",tags:[],version:"current",lastUpdatedAt:1657525669,formattedLastUpdatedAt:"Jul 11, 2022",sidebarPosition:4,frontMatter:{sidebar_label:"LSP3 - Universal Profile Metadata",sidebar_position:4},sidebar:"standardsSidebar",previous:{title:"LSP1 - Universal Receiver Delegate",permalink:"/standards/universal-profile/lsp1-universal-receiver-delegate"},next:{title:"LSP5 - Received Assets",permalink:"/standards/universal-profile/lsp5-received-assets"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"ERC725Y Data Keys",id:"erc725y-data-keys",level:2},{value:"<code>SupportedStandards:LSP3UniversalProfile</code>",id:"supportedstandardslsp3universalprofile",level:3},{value:"<code>LSP3Profile</code>",id:"lsp3profile",level:3},{value:"<code>LSP12IssuedAssets</code>",id:"lsp12issuedassets",level:3},{value:"<code>LSP5ReceivedAssets</code>",id:"lsp5receivedassets",level:3}],p={toc:d};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp3---universal-profile-metadata"},"LSP3 - Universal Profile Metadata"),(0,r.kt)("admonition",{title:"Standard Document",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md"},"LSP3 - Universal Profile Metadata"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The implementation of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp0-erc725account"},"LSP0-ERC725Account"))," standard does not contain any metadata describing the account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LSP3-UniversalProfile-Metadata")," is a Metadata standard that defines specific data keys to describe a Universal Profile. A Universal Profile combines the following two standards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp0-erc725account"},"LSP0-ERC725Account")),": an interface for a smart contract-based account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LSP3-UniversalProfile-Metadata"),": a set of predefined ",(0,r.kt)("a",{parentName:"li",href:"/standards/universal-profile/lsp0-erc725account#erc725y---generic-key-value-store"},"ERC725Y")," Data keys to describe the profile.")),(0,r.kt)("h2",{id:"erc725y-data-keys"},"ERC725Y Data Keys"),(0,r.kt)("admonition",{title:"Recommendation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to understand the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/lsp-background/erc725#erc725y---generic-data-keyvalue-store"},"ERC725Y Generic Key/Value Store"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp2-json-schema"},"LSP2 - ERC725YJSONSchema"))," Standards before going through the ERC725Y Data Keys.")),(0,r.kt)("h3",{id:"supportedstandardslsp3universalprofile"},(0,r.kt)("inlineCode",{parentName:"h3"},"SupportedStandards:LSP3UniversalProfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SupportedStandards:LSP3UniversalProfile",\n  "key": "0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38",\n  "keyType": "Mapping",\n  "valueType": "bytes4",\n  "valueContent": "0xabe425d6"\n}\n')),(0,r.kt)("p",null,"This data key is used to know if the contract represents a ",(0,r.kt)("strong",{parentName:"p"},"Universal Profile"),"."),(0,r.kt)("h3",{id:"lsp3profile"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP3Profile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP3Profile",\n  "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",\n  "keyType": "Singleton",\n  "valueType": "bytes",\n  "valueContent": "JSONURL"\n}\n')),(0,r.kt)("p",null,"The value attached to this data key is a ",(0,r.kt)("a",{parentName:"p",href:"/standards/generic-standards/lsp2-json-schema"},"JSONURL-encoded value"),". It represents a reference to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3profile"},"JSON file that describes the Universal Profile MetaData"),". The file can be stored on a centralized or decentralized storage."),(0,r.kt)("p",null,"Inside the JSON file, the keys ",(0,r.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundImage")," can accept an array of images, defining an image with different dimensions, ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height"),". Picture scaling is helpful for client interfaces to download and serve the images with the most suitable dimensions instead of re-scale them afterward."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example of JSON File linked to ",(0,r.kt)("code",null,"LSP3Profile"),"data key "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "LSP3Profile": {\n    "name": "frozeman",\n    "description": "The inventor of ERC725 and ERC20...",\n    "links": [\n      { "title": "Twitter", "url": "https://twitter.com/feindura" },\n      { "title": "lukso.network", "url": "https://lukso.network" }\n    ],\n    "tags": ["brand", "public profile"],\n    "avatar": [\n      {\n        "hashFunction": "keccak256(bytes)",\n        "hash": "0x98fe032f81c43426fbcfb21c780c879667a08e2a65e8ae38027d4d61cdfe6f55",\n        "url": "ifps://QmPJESHbVkPtSaHntNVY5F6JDLW8v69M2d6khXEYGUMn7N",\n        "fileType": "fbx"\n      }\n    ],\n    "profileImage": [\n      {\n        "address": 0x1231c7436a77a009a97e48e4e10c92e89fd95fe15, // the address of an LSP7 or LSP8\n        "tokenId": 0xdde1c7436a77a009a97e48e4e10c92e89fd95fe1556fc5c62ecef57cea51aa37 // (optional) if token contract is an LSP7\n      }\n    ],\n    "backgroundImage": [\n      {\n        "width": 1800,\n        "height": 1013,\n        "hashFunction": "keccak256(bytes)",\n        "hash": "0x98fe032f81c43426fbcfb21c780c879667a08e2a65e8ae38027d4d61cdfe6f55",\n        "url": "ifps://QmPJESHbVkPtSaHntNVY5F6JDLW8v69M2d6khXEYGUMn7N"\n      },\n      {\n        "width": 1024,\n        "height": 576,\n        "hashFunction": "keccak256(bytes)",\n        "hash": "0xfce1c7436a77a009a97e48e4e10c92e89fd95fe1556fc5c62ecef57cea51aa37",\n        "url": "ifps://QmZc9uMJxyUeUpuowJ7AD6MKoNTaWdVNcBj72iisRyM9Su"\n      }\n    ]\n  }\n}\n'))),(0,r.kt)("h3",{id:"lsp12issuedassets"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP12IssuedAssets")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Universal Profiles")," can create digital assets, such as ",(0,r.kt)("a",{parentName:"p",href:"/standards/nft-2.0/introduction"},"tokens and NFTs"),". All assets (tokens and NFTs) created should be registered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP12IssuedAssets[]")," Array."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP12IssuedAssetsMap:<address>")," can then be used to know the asset type (",(0,r.kt)("em",{parentName:"p"},"e.g., an ",(0,r.kt)("a",{parentName:"em",href:"/standards/nft-2.0/LSP7-Digital-Asset"},"LSP7 token")," or an ",(0,r.kt)("a",{parentName:"em",href:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},"LSP8 NFT")),") by extracting the ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes4")," ERC165 interface id of the asset contract. Developers can extract this ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes4")," value from the value retrieved, first 4bytes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP12IssuedAssets[]",\n  "key": "0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd",\n  "keyType": "Array",\n  "valueContent": "Address",\n  "valueType": "address"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP12IssuedAssetsMap:<address>",\n  "key": "0x74ac2555c10b9349e78f0000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,r.kt)("h3",{id:"lsp5receivedassets"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP5ReceivedAssets")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp5-received-assets"},"LSP5 - Received Assets")," standard page for more information.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssets[]",\n  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,r.kt)("p",null,"If the Universal Profile is used with the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6-KeyManager"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate")),", the received assets will be automatically registered in the storage. To know how many different assets you have, you can query this data key."))}c.isMDXComponent=!0}}]);