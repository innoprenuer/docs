"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6677],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),k=p(n),m=r,c=k["".concat(i,".").concat(m)]||k[m]||d[m]||l;return n?a.createElement(c,o(o({ref:e},u),{},{components:n})):a.createElement(c,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8223:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},i="L16 Testnet",p={unversionedId:"networks/l16-testnet",id:"networks/l16-testnet",title:"L16 Testnet",description:"Values and configuration parameters for this network, as well as suggested hardware specs, DO NOT represent the final values for the LUKSO mainnet. Those will be announced shortly before mainnet launch.",source:"@site/docs/networks/l16-testnet.md",sourceDirName:"networks",slug:"/networks/l16-testnet",permalink:"/networks/l16-testnet",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Mainnet",permalink:"/networks/mainnet"},next:{title:"L15 Public Testnet",permalink:"/networks/l15-testnet"}},u={},d=[{value:"Network Parameters",id:"network-parameters",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3},{value:"Recommended System Requirements",id:"recommended-system-requirements",level:3},{value:"Ports",id:"ports",level:3},{value:"Configure your firewall",id:"configure-your-firewall",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Setting up Metamask",id:"setting-up-metamask",level:2},{value:"Installing the Node",id:"installing-the-node",level:3},{value:"Setting up your node and node name",id:"setting-up-your-node-and-node-name",level:4},{value:"Starting the Node",id:"starting-the-node",level:2},{value:"Become a Validator",id:"become-a-validator",level:2},{value:"Setup Validator",id:"setup-validator",level:3},{value:"Submit the transaction.",id:"submit-the-transaction",level:4},{value:"Start the Validator Client",id:"start-the-validator-client",level:3},{value:"Check your logs",id:"check-your-logs",level:2},{value:"Stop your node",id:"stop-your-node",level:2},{value:"If you selected a wrong chain, you could reset the setup. This will delete all related data except the keystores.",id:"if-you-selected-a-wrong-chain-you-could-reset-the-setup-this-will-delete-all-related-data-except-the-keystores",level:5},{value:"NOTE: the network must be stopped",id:"note-the-network-must-be-stopped",level:5},{value:"Check the Network Status",id:"check-the-network-status",level:3},{value:"Troubleshooting L16 Testnet",id:"troubleshooting-l16-testnet",level:2},{value:"Permission denied",id:"permission-denied",level:3},{value:"Bootnodes",id:"bootnodes",level:3},{value:"Unmarshalling Error",id:"unmarshalling-error",level:3},{value:"FAQ",id:"faq",level:2}],k={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"l16-testnet"},"L16 Testnet"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Network values DO NOT represent the final mainnet values")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Values and configuration parameters for this network, as well as suggested hardware specs, DO NOT represent the final values for the LUKSO mainnet. Those will be announced shortly before mainnet launch."))),(0,l.kt)("p",null,"The L16 Public Testnet will be the last stable test network before the mainnet launch and will likely stay online in parallel for experimental purposes."),(0,l.kt)("h2",{id:"network-parameters"},"Network Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,l.kt)("td",{parentName:"tr",align:null},"L16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://rpc.l16.lukso.network"},"https://rpc.l16.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chain ID  / Network ID"),(0,l.kt)("td",{parentName:"tr",align:null},"2828 (0x0B0C)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.execution.l16.lukso.network"},"https://explorer.execution.l16.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Execution Node list"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://stats.execution.l16.lukso.network"},"https://stats.execution.l16.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Consensus Block Explorer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.consensus.l16.lukso.network"},"https://explorer.consensus.l16.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Consensus Node list"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://stats.consensus.l16.lukso.network"},"https://stats.consensus.l16.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://faucet.l16.lukso.network"},"https://faucet.l16.lukso.network"))))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can find a community guide about how to setup your Grafana dashboard on Linux ",(0,l.kt)("a",{parentName:"p",href:"https://luksoverse.io/2022/06/system-and-monitor-setup-guide-by-volodymyr-lykhonis/"},"here")))),(0,l.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,l.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Settings"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,l.kt)("h3",{id:"recommended-system-requirements"},"Recommended System Requirements"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Settings"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"512 GB")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Apple's new M1 chips are not supported natively by our node client. However, you can follow ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@luki3k5/running-lukso-node-on-m1-mac-acf92d433a38"},"this guide")," to run it by using Rosetta, Apple's built-in emulation software."))),(0,l.kt)("h3",{id:"ports"},"Ports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Client"),(0,l.kt)("th",{parentName:"tr",align:null},"Ingress"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30303"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"geth syncing"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,l.kt)("td",{parentName:"tr",align:null},"...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30303"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"geth discovery"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,l.kt)("td",{parentName:"tr",align:null},"...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13000"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon syncing"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,l.kt)("td",{parentName:"tr",align:null},"...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12000"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon discovery"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,l.kt)("td",{parentName:"tr",align:null},"...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8545"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"geth api"),(0,l.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,l.kt)("td",{parentName:"tr",align:null},"valuable information are provided but for a validator it is recommended to not open the port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,l.kt)("td",{parentName:"tr",align:null},"...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3500"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon api"),(0,l.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,l.kt)("td",{parentName:"tr",align:null},"valuable information are provided but for a validator it is recommended to not open the port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4000"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon rpc"),(0,l.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("h3",{id:"configure-your-firewall"},"Configure your firewall"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"LINUX")),(0,l.kt)("p",null,"Using the lukso-cli will open the ports for you automatically.  If you have a firewall configured, please allow traffic for the above mentioned ports, you can use the following commands to configure your firewall correctly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo ufw default deny incoming\nsudo ufw default allow outgoing \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo ufw allow 30303/tcp\nsudo ufw allow 30303/udp\nsudo ufw allow 13000/tcp\nsudo ufw allow 12000/udp\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo ufw enable\n")),(0,l.kt)("p",null,"The firewall will be active after restarting your system."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MAC")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"This section is in the works\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"NOTE: Make sure you also forward those ports in your router."))),(0,l.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,l.kt)("p",null,"Prepare your ",(0,l.kt)("strong",{parentName:"p"},"Linux")," environment. You need:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://macappstore.org/curl/"},"curl")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example script for installing docker"',title:'"Example',script:!0,for:!0,installing:!0,'docker"':!0},'# Install dependencies\nsudo apt-get -y update\nsudo apt-get -y install curl\n\n# Install Docker\ncurl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n\n# Install Docker Compose\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\ndocker-compose --version\n')),(0,l.kt)("p",null,"To prepare your ",(0,l.kt)("strong",{parentName:"p"},"Mac")," environment. You need:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew package manager")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Docker Desktop for Mac")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://macappstore.org/curl/"},"curl"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example script for installing docker"',title:'"Example',script:!0,for:!0,installing:!0,'docker"':!0},'# Install Homebrew \n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n# Install Curl\nsudo brew install curl\n\n# Install Docker Desktop for Mac\nGo to https://docs.docker.com/desktop/mac/install/ and install the application. \nYou do not have to install Docker Compose separately\n')),(0,l.kt)("h2",{id:"setting-up-metamask"},"Setting up Metamask"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,l.kt)("td",{parentName:"tr",align:null},"L16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://rpc.l16.lukso.network"},"https://rpc.l16.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,l.kt)("td",{parentName:"tr",align:null},"2828 (0x0B0C)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.execution.l16.lukso.network"},"https://explorer.execution.l16.lukso.network"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"here is a tutorial on how to add a network to Metamask."))),(0,l.kt)("h3",{id:"installing-the-node"},"Installing the Node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir lukso-l16-testnet && cd lukso-l16-testnet\ncurl https://raw.githubusercontent.com/lukso-network/lukso-cli/main/install.sh | sudo bash\n")),(0,l.kt)("p",null,"The script will download the LUKSO cli into the folder. "),(0,l.kt)("h4",{id:"setting-up-your-node-and-node-name"},"Setting up your node and node name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network init --chain l16\n")),(0,l.kt)("h2",{id:"starting-the-node"},"Starting the Node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Start your nodes\nlukso network start\n")),(0,l.kt)("h2",{id:"become-a-validator"},"Become a Validator"),(0,l.kt)("h3",{id:"setup-validator"},"Setup Validator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lukso network validator setup\n")),(0,l.kt)("p",null,"This will create a key store and a transaction wallet. The purpose of the transaction wallet is to call and pay for the deposit\ntransaction. You can check if the wallet has enough funds by calling"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lukso network validator describe\n")),(0,l.kt)("p",null,"Visit the ",(0,l.kt)("a",{parentName:"p",href:"https://faucet.l16.lukso.network"},"Faucet")," and paste the transaction wallet public key into the input field."),(0,l.kt)("p",null,"Transfer ",(0,l.kt)("strong",{parentName:"p"},"enough")," (#validators x staking_amount ",(0,l.kt)("strong",{parentName:"p"},"+ extra LYXt to pay deposit fees"),") funds to the transaction wallet public's address."),(0,l.kt)("h4",{id:"submit-the-transaction"},"Submit the transaction."),(0,l.kt)("p",null,"Make a dry run first"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network validator deposit --dry\n")),(0,l.kt)("p",null,"This will give you the possibility to peek in what is going to happen without executing a transaction."),(0,l.kt)("p",null,"If you are sure that everything is correct you run the command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network validator deposit\n")),(0,l.kt)("p",null,"It can take up to eight hours before your validator becomes active, but you can already start your validator in the meantime."),(0,l.kt)("p",null,"Once you deposited LYXt make sure to create a backup."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network validator backup\n")),(0,l.kt)("p",null,"Store the file ",(0,l.kt)("strong",{parentName:"p"},"node_recovery.json")," somewhere safe."),(0,l.kt)("h3",{id:"start-the-validator-client"},"Start the Validator Client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure your _consensus_ and _execution_ clients are running\nlukso network validator start\n\n# You can check logs with\nlukso network log validator -f\n\nYou can close your logs by pressing ctrl+c\n\n# You can stop the validator using, this will also stop all other nodes\nlukso network validator stop\n")),(0,l.kt)("p",null,"Occasionally check the status of your validator by either typing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network validator describe\n")),(0,l.kt)("p",null,"Or by visiting the ",(0,l.kt)("a",{parentName:"p",href:"https://explorer.consensus.l16.lukso.network"},"Explorer")),(0,l.kt)("h2",{id:"check-your-logs"},"Check your logs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lukso network log consensus -f\nlukso network log execution -f\n")),(0,l.kt)("p",null,"You can close your logs by pressing ctrl+c"),(0,l.kt)("h2",{id:"stop-your-node"},"Stop your node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lukso network stop\n")),(0,l.kt)("h5",{id:"if-you-selected-a-wrong-chain-you-could-reset-the-setup-this-will-delete-all-related-data-except-the-keystores"},"If you selected a wrong chain, you could reset the setup. This will delete all related data except the keystores."),(0,l.kt)("h5",{id:"note-the-network-must-be-stopped"},"NOTE: the network must be stopped"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lukso network clear\n")),(0,l.kt)("h3",{id:"check-the-network-status"},"Check the Network Status"),(0,l.kt)("p",null,"You can see your node on the following pages:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"https://stats.execution.l16.lukso.network")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://stats.consensus.l16.lukso.network"},"https://stats.consensus.l16.lukso.network"))),(0,l.kt)("h2",{id:"troubleshooting-l16-testnet"},"Troubleshooting L16 Testnet"),(0,l.kt)("h3",{id:"permission-denied"},"Permission denied"),(0,l.kt)("p",null,"If you get an error that the permission is denied use ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," in front of your command."),(0,l.kt)("h3",{id:"bootnodes"},"Bootnodes"),(0,l.kt)("p",null,"You can update Bootnodes with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lukso network update\n")),(0,l.kt)("p",null,"You need to restart the chain to make the changes effective"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lukso network restart\n")),(0,l.kt)("h3",{id:"unmarshalling-error"},"Unmarshalling Error"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Context")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Check your execution log by ",(0,l.kt)("inlineCode",{parentName:"p"},"lukso network log execution"),". For Ubuntu 20.04 LTS you may get an unmarshal-related issue like:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},'log_execution: err="peer connected on snap without compatible eth support" log_consensus: level=error msg="Could not connect to powchain endpoint: could not dial eth1 nodes: json: cannot unmarshal string into Go struct field SyncProgress.CurrentBlock of type uint64" prefix=powchain\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Proposed Solution:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# stop docker container\nlukso network stop\n# reset data directory\nlukso network clear\n# remove previous images\ndocker system prune --all --force --volumes\n# delete lukso testnet directory\ncd .. && rm -rf ./lukso-l16-testnet\n")),(0,l.kt)("p",null,"After trying out the proposed solution, re-run your node setup from the start."),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Will be added soon.\n")))}m.isMDXComponent=!0}}]);