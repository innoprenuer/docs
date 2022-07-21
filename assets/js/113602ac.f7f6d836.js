"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[7954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=u(a),d=r,m=k["".concat(i,".").concat(d)]||k[d]||c[d]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(4334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(3117),r=a(7294),l=a(4334),o=a(2389),s=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function k(e){var t,a;const{lazy:o,block:k,defaultValue:d,values:m,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,i.U)(),[T,E]=(0,r.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,a=O.indexOf(t),n=g[a].value;n!==T&&(x(t),E(n),null!=h&&y(h,String(n)))},L=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;a=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":k},b)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:L,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},7761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(3117),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const s={sidebar_position:3},i="L15 Public Testnet",u={unversionedId:"networks/l15-testnet",id:"networks/l15-testnet",title:"L15 Public Testnet",description:"The L15 testnet was superseeded by L16 Public Testnet, please check these L16 docs.",source:"@site/docs/networks/l15-testnet.md",sourceDirName:"networks",slug:"/networks/l15-testnet",permalink:"/networks/l15-testnet",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l15-testnet.md",tags:[],version:"current",lastUpdatedAt:1656493821,formattedLastUpdatedAt:"Jun 29, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Troubleshooting",permalink:"/networks/l16-testnet/troubleshooting"},next:{title:"L14 Public Testnet",permalink:"/networks/l14-testnet"}},p={},c=[{value:"Running a Node",id:"running-a-node",level:2},{value:"Start an Archive Node",id:"start-an-archive-node",level:3},{value:"Become a Validator",id:"become-a-validator",level:3},{value:"Links",id:"links",level:2},{value:"Repositories",id:"repositories",level:2}],k={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"l15-public-testnet"},"L15 Public Testnet"),(0,r.kt)("admonition",{title:"L15-TESTNET HAS ENDED.",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The L15 testnet was superseeded by ",(0,r.kt)("a",{parentName:"p",href:"./l16-testnet/parameters"},"L16 Public Testnet"),", please check these L16 docs.")),(0,r.kt)("p",null,"This network is ephemeral, meaning it is not meant to be fully stable and usable yet for more persistent test smart contracts. Assume the network could be reset at any time. The ",(0,r.kt)("a",{parentName:"p",href:"./l16-testnet/parameters"},"L16 Public Testnet")," is meant as a more stable persistent testnet before the mainnet (not yet running)."),(0,r.kt)("h1",{id:"metamask"},"MetaMask"),(0,r.kt)("p",null,"To add the L15 Network to MetaMask, these are the settings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("td",{parentName:"tr",align:null},"L15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc.l15.lukso.network"},"https://rpc.l15.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"23 (0x17)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.pandora.l15.lukso.network"},"https://explorer.pandora.l15.lukso.network"))))),(0,r.kt)("p",null,"And if you need it, ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"here is a tutorial on how to do it"),"."),(0,r.kt)("h2",{id:"running-a-node"},"Running a Node"),(0,r.kt)("h3",{id:"start-an-archive-node"},"Start an Archive Node"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl https://install.l15.lukso.network | bash\n$ lukso start --node-name "REPLACE-WITH-NODE-NAME"\n'))),(0,r.kt)(o.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo curl https://install.l15.lukso.network | bash\n$ sudo lukso start --node-name "REPLACE-WITH-NODE-NAME"\n')))),(0,r.kt)("p",null,"The command starts your node as an archive node."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/G2DSFqYwteI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h3",{id:"become-a-validator"},"Become a Validator"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are currently running a node, please run ",(0,r.kt)("inlineCode",{parentName:"p"},"lukso stop")," (",(0,r.kt)("inlineCode",{parentName:"p"},"sudo lukso stop")," for MacOS) before continuing.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://launchpad.l15.lukso.network"},"LUKSO Launchpad")," and follow the steps to become a validator."),(0,r.kt)("li",{parentName:"ol"},"You can check your validator status in the ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.vanguard.l15.lukso.network"},"Vanguard Block Explorer"),". You can find your validator via its public key.")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://faucet.l15.lukso.network"},"https://faucet.l15.lukso.network")," To get some LYXt (test LYX)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://launchpad.l15.lukso.network"},"https://launchpad.l15.lukso.network")," The Launchpad to participate as a validator")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stats.vanguard.l15.lukso.network"},"https://stats.vanguard.l15.lukso.network")," Statistic page for the Vanguard consensus blockchain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.vanguard.l15.lukso.network"},"https://explorer.vanguard.l15.lukso.network")," Block Explorer page for the Vanguard consensus blockchain")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stats.pandora.l15.lukso.network"},"https://stats.pandora.l15.lukso.network")," Statistic page for the Pandora shard blockchain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.pandora.l15.lukso.network"},"https://explorer.pandora.l15.lukso.network")," Block Explorer page for the Pandora shard blockchain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc.l15.lukso.network"},"https://rpc.l15.lukso.network")," Public RPC endpoint for the Pandora shard blockchain")),(0,r.kt)("h2",{id:"repositories"},"Repositories"),(0,r.kt)("p",null,"The network configuration files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs"},"https://github.com/lukso-network/network-configs"))),(0,r.kt)("p",null,"Clients:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Vanguard"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/vanguard-consensus-engine"},"https://github.com/lukso-network/vanguard-consensus-engine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pandora"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/pandora-execution-engine"},"https://github.com/lukso-network/pandora-execution-engine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Orchestrator"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lukso-orchestrator"},"https://github.com/lukso-network/lukso-orchestrator"))))}d.isMDXComponent=!0}}]);