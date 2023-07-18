"use strict";(self.webpackChunkottoman_documentation=self.webpackChunkottoman_documentation||[]).push([[7813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(m,".").concat(d)]||u[d]||s[d]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Ottoman CLI",i={unversionedId:"cli/cli",id:"cli/cli",title:"Ottoman CLI",description:"Goals:",source:"@site/docs/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building Your First App",permalink:"/docs/first-app"},next:{title:"Readme",permalink:"/docs/api/"}},m={},p=[{value:"Goals:",id:"goals",level:2},{value:"Install",id:"install",level:2},{value:"Usage:",id:"usage",level:2},{value:"Commands:",id:"commands",level:2},{value:"Generate command",id:"generate-command",level:3},{value:"Migrate command",id:"migrate-command",level:3}],c={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ottoman-cli"},"Ottoman CLI"),(0,r.kt)("h2",{id:"goals"},"Goals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide some useful tools while working with Ottoman."),(0,r.kt)("li",{parentName:"ul"},"Speed up the Ottoman setup process."),(0,r.kt)("li",{parentName:"ul"},"Help keep databases in sync across Development and Production environments."),(0,r.kt)("li",{parentName:"ul"},"Automate Ottoman's setup process.")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g ottoman-cli\n")),(0,r.kt)("h2",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ottoman-cli generate\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx ottoman-cli generate <do not required previous installation>\n")),(0,r.kt)("h2",{id:"commands"},"Commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"generate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"migrate"))),(0,r.kt)("h3",{id:"generate-command"},"Generate command"),(0,r.kt)("p",null,"The Ottoman CLI's ",(0,r.kt)("inlineCode",{parentName:"p"},"generate")," command will bootstrap an Ottoman app for you in no time!\nSimply follow the steps in the wizard. Happy Coding!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ottoman-cli generate\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generate.png",src:n(359).Z,width:"611",height:"255"})),(0,r.kt)("h3",{id:"migrate-command"},"Migrate command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ottoman-cli migrate\n")),(0,r.kt)("p",null,"The Ottoman CLI's ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate")," command will sync your database with the information took from your models.\nScopes, Collections and Indexes will be created automatically after run the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate")," command."),(0,r.kt)("p",null,"Constraints:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You should build your app before run the ",(0,r.kt)("inlineCode",{parentName:"li"},"migrate")," command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\nottoman-cli migrate\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"env variables should point to the built code")),(0,r.kt)("p",null,"Correct"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dotenv"},'OTTOMAN_CLI_MODEL_PATTERN="dist/**/*.model.js"\n')),(0,r.kt)("p",null,"Incorrect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dotenv"},'OTTOMAN_CLI_MODEL_PATTERN="src/**/*.model.ts"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'OTTOMAN_CLI_ENTRY="dist/config/ottoman.js" entry point file should export an ',(0,r.kt)("inlineCode",{parentName:"li"},"ottoman")," instance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Ottoman } from "ottoman";\n\nconst ottoman = new Ottoman(...);\n\nexport { ottoman };\n')))}s.isMDXComponent=!0},359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generate-2aed812791ad30c2a6c407706f614ffe.png"}}]);