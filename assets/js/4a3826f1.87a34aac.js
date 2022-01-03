"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5886],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3039),u=n(6010),s="tabItem_1uMI";function d(e){var t,n,a,o=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,k=g.setTabGroupChoices,C=(0,r.useState)(b),N=C[0],P=C[1],O=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=w[m];null!=T&&T!==N&&v.some((function(e){return e.value===T}))&&P(T)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==N&&(x(t),P(a),null!=m&&k(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),c=["components"],u={sidebar_label:"Interact with other contracts",sidebar_position:1.4},s="Interact with other contracts",d={unversionedId:"guides/universal-profile/interact-with-contracts",id:"guides/universal-profile/interact-with-contracts",isDocsHomePage:!1,title:"Interact with other contracts",description:"In this guide, we will learn how to use our Universal Profile to interact with any other smart contract (like if we were using a regular Externally Owned Account).",source:"@site/docs/guides/universal-profile/04-interact-with-contracts.md",sourceDirName:"guides/universal-profile",slug:"/guides/universal-profile/interact-with-contracts",permalink:"/guides/universal-profile/interact-with-contracts",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/04-interact-with-contracts.md",tags:[],version:"current",sidebarPosition:1.4,frontMatter:{sidebar_label:"Interact with other contracts",sidebar_position:1.4},sidebar:"guidesSidebar",previous:{title:"Transfer LYX",permalink:"/guides/universal-profile/transfer-lyx"},next:{title:"Giving Permissions to addresses",permalink:"/guides/key-manager/giving-permissions"}},p=[{value:"Introduction",id:"introduction",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interact-with-other-contracts"},"Interact with other contracts"),(0,o.kt)("p",null,"In this guide, we will learn how to use our Universal Profile to interact with any other smart contract (like if we were using a regular Externally Owned Account)."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We have seen in the previous example how to send LYX from our UP via the ",(0,o.kt)("a",{parentName:"p",href:"/contracts/erc725-account#execute"},(0,o.kt)("inlineCode",{parentName:"a"},"execute(...)"))," function."),(0,o.kt)("p",null,"This function offers a fourth parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"_data"),", that provides a lot of flexibility when interacting from our UP. The ",(0,o.kt)("inlineCode",{parentName:"p"},"_data")," parameter is especially useful when the ",(0,o.kt)("inlineCode",{parentName:"p"},"_to")," recipient is a smart contract."),(0,o.kt)("p",null,"To make our UP call a function on a specific contract deployed on the network, the parameters of the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute(...)")," function will be as follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_operation"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," (for ",(0,o.kt)("inlineCode",{parentName:"li"},"CALL"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_to"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of the smart contract we want to interact with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_value_"),": empty (0)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_data"),": the abi-encoded function name + arguments, to to be run at the ",(0,o.kt)("inlineCode",{parentName:"li"},"_to")," contract address."),(0,o.kt)("li",{parentName:"ul"},"Let's imagine a smart contract ",(0,o.kt)("inlineCode",{parentName:"li"},"targetContract")," deployed on the network. We want our UP to call the function ",(0,o.kt)("inlineCode",{parentName:"li"},"myCoolFunction")," on this contract. We will have to:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-encodeabi"},"abi-encode")," the function call with the parameters we want to pass."),(0,o.kt)("li",{parentName:"ol"},"pass this payload as the fourth argument ",(0,o.kt)("inlineCode",{parentName:"li"},"_data")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"execute(...)")," function.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\n\n// 1. encode the payload to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetPayload = targetContract.methods\n  .myCoolfunction('dummyParameter')\n  .encodeABI();\n\n// 2. encode the payload to be run on the UP,\n// passing the payload to be run at the targetContract as 4th parameter\nlet abiPayload = await myUp.methods\n  .execute(OPERATION_CALL, targetContract.address, 0, targetPayload)\n  .encodeABI();\n\n// 3. execute via the KeyManager, passing the UP payload\nawait myKeyManager.execute(abiPayload, {\n  from: '<address-of-up-owner>',\n  gasLimit: 300_000,\n});\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\n\n// 1. encode the payload to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetPayload = targetContract.interface.encodeFunctionData(\n  'myCoolfunction',\n  ['dummyParameter'],\n);\n\n// 2. encode the payload to be run on the UP,\n// passing the payload to be run at the targetContract as 4th parameter\nlet abiPayload = myUp.interface.encodeFunctionData('execute', [\n  OPERATION_CALL,\n  targetContract.address,\n  0,\n  targetPayload,\n]);\n\n// 3. execute via the KeyManager, passing the UP payload\nawait myKeyManager.connect(upOwner).execute(abiPayload);\n")))))}f.isMDXComponent=!0}}]);