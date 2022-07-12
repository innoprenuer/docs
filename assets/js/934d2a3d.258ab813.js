"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={title:"Run a node",sidebar_position:2},o="Run a node",i={unversionedId:"networks/l16-testnet/run-node",id:"networks/l16-testnet/run-node",title:"Run a node",description:"System Requirements",source:"@site/docs/networks/l16-testnet/run-node.md",sourceDirName:"networks/l16-testnet",slug:"/networks/l16-testnet/run-node",permalink:"/networks/l16-testnet/run-node",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet/run-node.md",tags:[],version:"current",lastUpdatedAt:1657633821,formattedLastUpdatedAt:"7/12/2022",sidebarPosition:2,frontMatter:{title:"Run a node",sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Network parameters",permalink:"/networks/l16-testnet/parameters"},next:{title:"Become a validator",permalink:"/networks/l16-testnet/become-validator"}},s={},p=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Ports",id:"ports",level:2},{value:"Linux System Setup",id:"linux-system-setup",level:2},{value:"Configure Firewall",id:"configure-firewall",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Install curl",id:"install-curl",level:4},{value:"Install Docker",id:"install-docker",level:4},{value:"Install Docker Compose",id:"install-docker-compose",level:4},{value:"MacOS System Setup",id:"macos-system-setup",level:2},{value:"Configure Firewall",id:"configure-firewall-1",level:3},{value:"Install Dependencies",id:"install-dependencies-1",level:3},{value:"Install Homebrew",id:"install-homebrew",level:4},{value:"Install Curl",id:"install-curl-1",level:4},{value:"Install Docker Desktop for Mac",id:"install-docker-desktop-for-mac",level:4},{value:"Install the LUKSO Command Line Interface (CLI)",id:"install-the-lukso-command-line-interface-cli",level:2},{value:"Check your LUKSO CLI version",id:"check-your-lukso-cli-version",level:4},{value:"Initialize the network",id:"initialize-the-network",level:2},{value:"Start your node",id:"start-your-node",level:2},{value:"Check your node",id:"check-your-node",level:4},{value:"Stop your node",id:"stop-your-node",level:2},{value:"Need help?",id:"need-help",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"run-a-node"},"Run a node"),(0,l.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Settings"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSD"),(0,l.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Apple's new M1 chips are not supported natively by our node client. However, you can follow ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@luki3k5/running-lukso-node-on-m1-mac-acf92d433a38"},"this guide")," to run it by using Rosetta, Apple's built-in emulation software."))),(0,l.kt)("h2",{id:"ports"},"Ports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Client"),(0,l.kt)("th",{parentName:"tr",align:null},"Ingress"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30303"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"geth syncing"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30303"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"geth discovery"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13000"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon syncing"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12000"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"beacon discovery"),(0,l.kt)("td",{parentName:"tr",align:null},"port must be open")))),(0,l.kt)("h2",{id:"linux-system-setup"},"Linux System Setup"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"For instructions on setting up a Mac, proceed to the ",(0,l.kt)("a",{parentName:"em",href:"#macos-system-setup"},"MacOS System Setup")," section.")),(0,l.kt)("h3",{id:"configure-firewall"},"Configure Firewall"),(0,l.kt)("p",null,"Deny all incoming traffic by default"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo ufw default deny incoming\n$ sudo ufw default allow outgoing\n")),(0,l.kt)("p",null,"Allow traffic for the ports listed above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo ufw allow 30303/tcp\n$ sudo ufw allow 30303/udp\n$ sudo ufw allow 13000/tcp\n$ sudo ufw allow 12000/udp\n")),(0,l.kt)("p",null,"You can forward extra ports, by using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo ufw allow [replace_with_your_ssh_port]/tcp/udp\n")),(0,l.kt)("p",null,"This can be useful for setting up you ssh connection or monitoring."),(0,l.kt)("p",null,"Enable firewall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo ufw enable\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"NOTE: Make sure also to configure your router to forward these ports."))),(0,l.kt)("p",null,"You may follow this community-authored ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KEEZ-RobG/node-guide/blob/main/PortForward.md"},"Port Forwarding")," guide."),(0,l.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"))),(0,l.kt)("h4",{id:"install-curl"},"Install curl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo apt-get -y update\n$ sudo apt-get -y install curl\n")),(0,l.kt)("h4",{id:"install-docker"},"Install Docker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -fsSL https://get.docker.com -o get-docker.sh\n$ sudo sh get-docker.sh\n")),(0,l.kt)("h4",{id:"install-docker-compose"},"Install Docker Compose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n$ sudo chmod +x /usr/local/bin/docker-compose\n$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n$ docker-compose --version\n')),(0,l.kt)("h2",{id:"macos-system-setup"},"MacOS System Setup"),(0,l.kt)("h3",{id:"configure-firewall-1"},"Configure Firewall"),(0,l.kt)("p",null,"This section is in the works"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This section is in the works "))),(0,l.kt)("h3",{id:"install-dependencies-1"},"Install Dependencies"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew package manager")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://macappstore.org/curl/"},"curl")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Docker Desktop for Mac"))),(0,l.kt)("h4",{id:"install-homebrew"},"Install Homebrew"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("h4",{id:"install-curl-1"},"Install Curl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ brew install curl\n")),(0,l.kt)("h4",{id:"install-docker-desktop-for-mac"},"Install Docker Desktop for Mac"),(0,l.kt)("p",null,"Go to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/install/"},"https://docs.docker.com/desktop/mac/install/")," and install the application.\nYou do not have to install Docker Compose separately."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"$ Open the Docker Desktop application after installing from the applications folder on your Mac"))),(0,l.kt)("h2",{id:"install-the-lukso-command-line-interface-cli"},"Install the LUKSO Command Line Interface (CLI)"),(0,l.kt)("p",null,"Create a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ mkdir lukso-l16-testnet\n")),(0,l.kt)("p",null,"and navigate to it in your terminal by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd lukso-l16-testnet\n")),(0,l.kt)("p",null,"Then, install the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-cli"},"LUKSO CLI")," using the install script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo curl https://install.l16.lukso.network | sudo bash\n")),(0,l.kt)("h4",{id:"check-your-lukso-cli-version"},"Check your LUKSO CLI version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ lukso -v\n")),(0,l.kt)("p",null,"The output has to be v.0.4.3 or higher."),(0,l.kt)("h2",{id:"initialize-the-network"},"Initialize the network"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo lukso network init --chain l16\n")),(0,l.kt)("p",null,"The CLI will ask you to setup your node name."),(0,l.kt)("h2",{id:"start-your-node"},"Start your node"),(0,l.kt)("p",null,"You can start your node with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo lukso network start\n")),(0,l.kt)("h4",{id:"check-your-node"},"Check your node"),(0,l.kt)("p",null,"Wait 1 hour and check if your node has synced on this stats page:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"https://stats.execution.l16.lukso.network"))),(0,l.kt)("p",null,"Immediately after starting your node you can check the syncing process in your ",(0,l.kt)("a",{parentName:"p",href:"/networks/l16-testnet/logs-stats-monitoring"},"logs"),"."),(0,l.kt)("h2",{id:"stop-your-node"},"Stop your node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo lukso network stop\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to run a validator node?")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you want, you are now ready to run validators on your node. Check the tutorial on the ",(0,l.kt)("a",{parentName:"p",href:"/networks/l16-testnet/become-validator"},"validator")," page."))),(0,l.kt)("h2",{id:"need-help"},"Need help?"),(0,l.kt)("p",null,"Ask your question in the validators channel on the ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/u7cmyUyw8F"},"official LUKSO Discord server"),"."))}u.isMDXComponent=!0}}]);