"use strict";(self.webpackChunkottoman_documentation=self.webpackChunkottoman_documentation||[]).push([[7239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:-4,title:"Quickstart"},s="Quick Start with Ottoman v2",i={unversionedId:"quick-start",id:"quick-start",title:"Quickstart",description:"Before we get started with Ottoman and Node JS, we need to ensure you have Couchbase up and running.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:-4,frontMatter:{sidebar_position:-4,title:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Intoduction",permalink:"/docs/intro"},next:{title:"Schemas",permalink:"/docs/basic/schema"}},l={},c=[{value:"Prerequisites: Three Steps required to Query our Bucket",id:"prerequisites-three-steps-required-to-query-our-bucket",level:2},{value:"Create the Ottoman NodeJS Project",id:"create-the-ottoman-nodejs-project",level:2},{value:"Connecting to a Couchbase Bucket",id:"connecting-to-a-couchbase-bucket",level:2},{value:"Creating an Ottoman Model",id:"creating-an-ottoman-model",level:2},{value:"Create New User Documents",id:"create-new-user-documents",level:2},{value:"Persist Documents to Our Bucket",id:"persist-documents-to-our-bucket",level:2},{value:"Write a Query with Ottoman\u2019s Query API",id:"write-a-query-with-ottomans-query-api",level:2},{value:"Summary",id:"summary",level:2},{value:"Exercise Complete",id:"exercise-complete",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-with-ottoman-v2"},"Quick Start with Ottoman v2"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before we get started with Ottoman and Node JS, we need to ensure you have Couchbase up and running.\nWe will create a data bucket and two indexes for basic queries. Using Couchbase\u2019s N1QL query syntax,\nwe will create two indexes, a primary and adaptive index.\nAfter we upsert our records, these indexes will allow us to look up our documents with the Query API in Ottoman")),(0,o.kt)("h2",{id:"prerequisites-three-steps-required-to-query-our-bucket"},"Prerequisites: Three Steps required to Query our Bucket"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup Couchbase Server 6.5 and ensure it is running."),(0,o.kt)("li",{parentName:"ol"},'Create an empty bucket named "default".'),(0,o.kt)("li",{parentName:"ol"},"Add a primary and adaptive index for our default bucket.")),(0,o.kt)("p",null,"If you still need to perform these tasks please use one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.couchbase.com/tutorials/quick-start/quickstart-docker-image-manual-cb65.html"},"5-minute Couchbase Docker Container Configuration"))),(0,o.kt)("h2",{id:"create-the-ottoman-nodejs-project"},"Create the Ottoman NodeJS Project"),(0,o.kt)("p",null,"In this exercise, we will be working with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/couchbaselabs/node-ottoman"},"Ottoman v2 ODM (Object Document Mapper)"),"\nin conjunction with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.couchbase.com/nodejs-sdk/current/hello-world/start-using-sdk.html"},"NodeJS SDK v3")),(0,o.kt)("p",null,"This tutorial was written using Node JS version 12.14, NPM version 6.13, and the Couchbase SDK 3.0, but higher version numbers should do."),(0,o.kt)("p",null,"You can check your version numbers by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\nnpm --version\n")),(0,o.kt)("p",null,"::: tip Note\nYou can get to the Couchbase Server Web UI at any time by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8091/"},"localhost:8091"),".\n:::"),(0,o.kt)("p",null,"Let\u2019s first create a project directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"first-query-ottoman"),", change directories into that directory and initialize NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir first-query-ottoman\ncd first-query-ottoman\nnpm init\n")),(0,o.kt)("p",null,"Now with a node package manager and manifest (",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),") in place, let\u2019s add Ottoman to our dependencies for the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ottoman\n")),(0,o.kt)("p",null,"Now we will create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," and launch Visual Studio Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch server.js\ncode .\n")),(0,o.kt)("p",null,"We have now set up a project directory and enabled npm, installed ",(0,o.kt)("inlineCode",{parentName:"p"},"ottoman"),",\ncreated a ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," file, and finally opened up our VS Code editor to the project root."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," file, this is where we\u2019ll add our code."),(0,o.kt)("p",null,"Taking each code sample below, we will add each new block of code done after one another."),(0,o.kt)("h2",{id:"connecting-to-a-couchbase-bucket"},"Connecting to a Couchbase Bucket"),(0,o.kt)("p",null,"Create a connection to our Couchbase Server running in Docker.\nYour password may be different, just swap out yours if it is different."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const ottoman = require('ottoman');\n\nconst main = async () => {\n  await ottoman.connect({\n    connectionString: 'couchbase://localhost',\n    bucketName: 'default',\n    username: 'Administrator',\n    password: 'password'\n  });\n  \n  await ottoman.start();\n}\n")),(0,o.kt)("h2",{id:"creating-an-ottoman-model"},"Creating an Ottoman Model"),(0,o.kt)("p",null,"Create a model for our ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),' document.\nThis defines the expected structure of each document, and also which "Collection" Couchbase will store the documents in.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = ottoman.model('User', {\n  firstName: String,\n  lastName: String,\n  email: String,\n  tagline: String\n})\n")),(0,o.kt)("p",null,"Ottoman does support other data types like ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),".\nA model can also define indexes, but for now, we will skip this,\nas we already set up indexes manually in the prerequisites."),(0,o.kt)("h2",{id:"create-new-user-documents"},"Create New User Documents"),(0,o.kt)("p",null,"Now we will define a few documents that we want to persist to our bucket.\nWe are using the document structure that we defined in our model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const perry = new User({\n  firstName: 'Perry',\n  lastName: 'Mason',\n  email: 'perry.mason@example.com',\n  tagLine : 'Who can we get on the case?'\n})\n\nconst tom = new User({\n  firstName: 'Major',\n  lastName: 'Tom',\n  email: 'major.tom@example.com',\n  tagLine : 'Send me up a drink'\n})\n")),(0,o.kt)("h2",{id:"persist-documents-to-our-bucket"},"Persist Documents to Our Bucket"),(0,o.kt)("p",null,"So far we have simply defined the model structure and created documents locally."),(0,o.kt)("p",null,"Now that we want to persist the documents, all our interaction with the Couchbase server\nwill be done asynchronously, so we will call Ottoman's ",(0,o.kt)("inlineCode",{parentName:"p"},"save()")," method on each\nobject using the ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await")," technique."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"main = async () => {\n  ...\n  \n  await perry.save();\n  console.log(`success: user ${perry.firstName} added!`)\n\n  await tom.save();\n  console.log(`success: user ${tom.firstName} added!`)\n}\n\nmain();\n")),(0,o.kt)("p",null,"Now that we have added the code to save (persist) each record to the database, let\u2019s run our app for the first time with Node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node server.js\n")),(0,o.kt)("p",null,"You should get success messages in the console.\n(Note that the collection creation will happen only the first time you run the code.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"collection created: _default/User\nsuccess: user Perry added!\nsuccess: user Major added!\n")),(0,o.kt)("p",null,"If we open our Web UI at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8091/"},"localhost:8091"),' and navigate to the "Buckets" tab,\nwe can see that the ',(0,o.kt)("inlineCode",{parentName:"p"},"User")," collection, and two records have been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," bucket."),(0,o.kt)("p",null,'::: tip Note\nYou can edit the document in place by clicking the pencil icon or remove them individually with the trash icon.\nYou can also edit the buckets and in the section "Advanced bucket settings" enable Flush. When flushed, all items in the bucket are removed.\nThis is a quick way to remove all documents.\n:::'),(0,o.kt)("p",null,"Let\u2019s remove these two documents, write some more code that will add the documents, and then turn around and query them."),(0,o.kt)("h2",{id:"write-a-query-with-ottomans-query-api"},"Write a Query with Ottoman\u2019s Query API"),(0,o.kt)("p",null,"In Ottoman, we can retrieve records from our bucket using the adaptive index we have in place by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," method.\nAppend the ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," logic to our ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"main = async () => {\n  //...saving users\n  const result = await User.find(\n    { lastName: 'Tom' },\n    { consistency: ottoman.SearchConsistency.LOCAL })\n  console.log('Query Result: ', result.rows)\n}\n")),(0,o.kt)("p",null,"The first two arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," method are ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,o.kt)("p",null,"Instead of passing objects along as parameters,\nlet\u2019s write our code to define the filter and options as objects first and then pass them into the function as arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"main = async () => {\n  //...saving users\n\n  const filter = { lastName: 'Tom' };\n  const options = { consistency: ottoman.SearchConsistency.LOCAL };\n  const result = await User.find(filter, options)\n}\n")),(0,o.kt)("p",null,"::: tip Note\nIf we had a lot more data and we were expecting hundreds of records to be returned,\nwe could page the results with our options to get the second page (pagination), like this:\n:::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = {\n  limit: 10,\n  skip: 10,\n  consistency: ottoman.SearchConsistency.LOCAL\n}\n")),(0,o.kt)("p",null,"Let\u2019s run Node again and now we should get the same two success messages and an object returned to us that we queried for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node server.js\n")),(0,o.kt)("p",null,"You should see results similar to the following in your command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"success: user Perry added!\nsuccess: user Major added!\nQuery results:  [\n  {\n    _scope: '_default',\n    email: 'major.tom@acme.com',\n    firstName: 'Major',\n    id: '02374d71-6e4d-47f1-9cbe-54b487cec89b',\n    lastName: 'Tom',\n    tagLine: 'Send me up a drink',\n    type: 'User'\n  }\n]\n")),(0,o.kt)("p",null,"::: tip Note\nIn our case indexes were added manually, if not Ottoman would have given us this error message:\n:::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"errors": [\n  {\n    "code": 4000,\n    "msg": "No index available on keyspace default that matches your query.\n     Use CREATE INDEX or CREATE PRIMARY INDEX to create an index,\n     or check that your expected index is online."\n  }\n]\n')),(0,o.kt)("p",null,"::: details Here you can see the complete content of the server.js file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const ottoman = require('ottoman');\n\nconst User = ottoman.model('User', {\n  firstName: String,\n  lastName: String,\n  email: String,\n  tagline: String\n})\n\nconst perry = new User({\n  firstName: 'Perry',\n  lastName: 'Mason',\n  email: 'perry.mason@example.com',\n  tagLine : 'Who can we get on the case?'\n})\n\nconst tom = new User({\n  firstName: 'Major',\n  lastName: 'Tom',\n  email: 'major.tom@example.com',\n  tagLine : 'Send me up a drink'\n})\n\nconst main = async () => {\n  await ottoman.connect({\n    connectionString: 'couchbase://localhost',\n    bucketName: 'default',\n    username: 'Administrator',\n    password: 'password'\n  });\n  \n  await ottoman.start();\n  \n  try {\n    await perry.save();\n    console.log(`success: user ${perry.firstName} added!`)\n\n    await tom.save();\n    console.log(`success: user ${tom.firstName} added!`)\n\n    const filter = { lastName: 'Tom' };\n    const options = { consistency: ottoman.SearchConsistency.LOCAL };\n\n    const result = await User.find(filter, options)\n    console.log('Query Result: ', result.rows)\n  } catch (error) {\n    console.log(error)\n  }\n}\n\nmain();\n")),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"We have created models in Ottoman, defined some documents, and persisted them to the database.\nWe then subsequently looked them up using the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," method which used the Ottoman Query API for Couchbase.\nWe have not yet touched on indexes other than the fact that we created two of them during the docker and indexes section of the quickstart."),(0,o.kt)("p",null,"If you would like to continue learning about Ottoman, we suggest checking out the ",(0,o.kt)("a",{parentName:"p",href:"http://ottomanjs.com/"},"Ottoman Documentation"),"."),(0,o.kt)("h2",{id:"exercise-complete"},"Exercise Complete"),(0,o.kt)("p",null,"Congratulations! You have engaged with the world\u2019s most powerful JSON document database by using Ottoman."),(0,o.kt)("p",null,"Note that our query language N1QL was run under the hood too but we did not have to write any directly.\nYou can learn more about it with our ",(0,o.kt)("a",{parentName:"p",href:"https://query-tutorial.couchbase.com/tutorial"},"N1QL Tutorial"),"\nif you are interested in exploring our query language for Couchbase."))}d.isMDXComponent=!0}}]);