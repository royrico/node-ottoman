"use strict";(self.webpackChunkottoman_documentation=self.webpackChunkottoman_documentation||[]).push([[5918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:-1,title:"Building Your First App"},i="Building Your First App",l={unversionedId:"first-app",id:"first-app",title:"Building Your First App",description:"Our goal is to provide you with a demo application to explore how to setup and use Ottoman using best practices.",source:"@site/docs/first-app.md",sourceDirName:".",slug:"/first-app",permalink:"/docs/first-app",draft:!1,tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1,title:"Building Your First App"},sidebar:"tutorialSidebar",previous:{title:"Ottoman Vs SDK Comparison",permalink:"/docs/advanced/sdk-comparison"},next:{title:"Readme",permalink:"/docs/api/"}},s={},p=[{value:"Prepare Couchbase Server",id:"prepare-couchbase-server",level:2},{value:"Prepare Our Project Folder",id:"prepare-our-project-folder",level:2},{value:"Development Guide",id:"development-guide",level:3},{value:"Tutorial Project (Travel-Sample) Goals",id:"tutorial-project-travel-sample-goals",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Hotel Model",id:"hotel-model",level:3},{value:"Airport Model",id:"airport-model",level:3},{value:"Application and Routing",id:"application-and-routing",level:3},{value:"App",id:"app",level:4},{value:"Routes and Documentations",id:"routes-and-documentations",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-your-first-app"},"Building Your First App"),(0,o.kt)("p",null,"Our goal is to provide you with a demo application to explore how to setup and use Ottoman using best practices."),(0,o.kt)("h2",{id:"prepare-couchbase-server"},"Prepare Couchbase Server"),(0,o.kt)("p",null,"This is a sample application for getting started with Ottoman using Couchbase Server 6.x. The application provides a Rest API and demonstrates Ottoman's ODM capabilities. It uses Ottoman v2, Express, and the Couchbase NodeJS SDK. The Travel-Sample API we buildcould be used in a flight planner application that allows the user to search for and select a flight route based on airports and dates."),(0,o.kt)("h2",{id:"prepare-our-project-folder"},"Prepare Our Project Folder"),(0,o.kt)("p",null,"Install Node.js from the ",(0,o.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js website"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Once Node.js is installed, we can bootstrap our application."),(0,o.kt)("h3",{id:"development-guide"},"Development Guide"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.couchbase.com/server/current/install/getting-started-docker.html"},"Install Couchbase Server Using Docker"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the repo and install the dependencies "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/couchbaselabs/node-ottoman.git\n$ cd node-ottoman\n$ yarn install\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now we are ready to run the API example.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn api:dev\n")),(0,o.kt)("h2",{id:"tutorial-project-travel-sample-goals"},"Tutorial Project (Travel-Sample) Goals"),(0,o.kt)("p",null,"What want to build a REST API for a Travel-Sample Application that stores and queries hotel, flight, and airport information using Couchbase Server as the system of record."),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("p",null,"The flexiblity and dynamic nature of a NOSQL Document Database and JSON simplifies building the data model.\nFor the travel sample application we will use three types of objects, and we'll define those in specific modules in the node application.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"airports"),(0,o.kt)("li",{parentName:"ul"},"flightPaths"),(0,o.kt)("li",{parentName:"ul"},"hotels")),(0,o.kt)("p",null,"The source code is organized by each module in a folder under the root of the application, a module defines REST endpoints, and the data model of a resource.\nThe data model is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},".model.ts")," by the schema and model, and in the case of the endpoints, there are defined in various ",(0,o.kt)("inlineCode",{parentName:"p"},".controller.ts")," files, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"flights.controller.ts"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Let's walk through the code starting with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hotels")," module."),(0,o.kt)("h3",{id:"hotel-model"},"Hotel Model"),(0,o.kt)("p",null,"The first section of the hotel module instantiates module dependencies which, for this particular example, are Ottoman and the database file where the information on the Couchbase instance is stored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { model, addValidators, Schema } from 'ottoman';    // \u2190 use ottoman\nimport { GeolocationSchema } from '../shared/geolocation.model';\n")),(0,o.kt)("p",null,"Next, a custom validator function is defined to make sure that a phone number in the standard USA format is created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"addValidators({\n  phone: (value) => {\n      const phone = /^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;\n      if(value && !value.match(phone)) {\n        throw new Error('Phone number is invalid.');\n      }\n  },\n});\n")),(0,o.kt)("p",null,"The model for the Hotels object is defined, using several of the built in types that Ottoman supports.  "),(0,o.kt)("p",null,"For additional reference, see ",(0,o.kt)("a",{parentName:"p",href:"http://www.ottomanjs.com."},"http://www.ottomanjs.com."),"  "),(0,o.kt)("p",null,"Several indices are defined along with the model ","\u2014"," the indices are utilized as methods for each instance of the Hotel Object. Ottoman supports complex data types, embedded references to other models, and customization."),(0,o.kt)("p",null,"We are going to define a custom type link:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    import { IOttomanType, ValidationError, registerType } from 'ottoman';\n    \n    /**\n     * Custom type to manage the links.\n     */\n    export class LinkType extends IOttomanType {\n      constructor(name: string) {\n        super(name, 'Link');\n      }\n      cast(value: unknown) {\n        if (!isLink(String(value))) {\n          throw new ValidationError(`Field ${this.name} only allows a Link`);\n        }\n        return String(value);\n      }\n    }\n    \n    /**\n     * Factory function.\n     * @param name of field\n     */\n    export const linkTypeFactory = (name) => new LinkType(name);\n    \n    /**\n     * Register type on Schema Supported Types.\n     */\n    registerType(LinkType.name, linkTypeFactory);\n    \n    /**\n     * Check if value is a valid Link.\n     * @param value\n     */\n    const isLink = (value: string) => {\n      const regExp = new RegExp(\n        /https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi,\n      );\n      return regExp.test(value);\n    };\n")),(0,o.kt)("p",null,"With the link custom type, we can continue with the schema definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ReviewSchema = new Schema({\n  author: String,\n  content: String,\n  date: Date,\n  ratings: {\n    Cleanliness: { type: Number, min: 1, max: 5 },\n    Overall: { type: Number, min: 1, max: 5 },\n    Rooms: { type: Number, min: 1, max: 5 },\n    Service: { type: Number, min: 1, max: 5 },\n    Value: { type: Number, min: 1, max: 5 },\n  },\n});\n\nconst HotelSchema = new Schema({\n  address: { type: String, required: true },\n  alias: String,\n  checkin: String,\n  checkout: String,\n  city: { type: String, required: true },\n  country: { type: String, required: true },\n  description: String,\n  directions: [String],\n  email: String,\n  fax: String,\n  free_breakfast: Boolean,\n  free_internet: Boolean,\n  free_parking: Boolean,\n  geo: GeolocationSchema,\n  name: { type: String, required: true },\n  pets_ok: Boolean,\n  phone: { type: String, validator: 'phone' },\n  price: Number,\n  public_likes: [String],\n  reviews: [ReviewSchema],\n  state: String,\n  title: String,\n  tollfree: String,\n  url: LinkType,\n  vacancy: Boolean,\n});\n\nHotelSchema.index.findByName = { by: 'name', type: 'n1ql' };\n\nexport const HotelModel = model('hotel', HotelSchema);\n")),(0,o.kt)("p",null,"In the Hotel model above, there is one explicit index defined. By default, if an index type is not specified Ottoman will select the fastest available index supported within the current Couchbase cluster.  "),(0,o.kt)("p",null,"In addition to utilizing built in secondary index support within Couchbase, Ottoman can also utilize referential documents and maintain the referential integrity for updates and deletes. This is a powerful features that allows for blazingly fast lookups by a particular field. This type of index in Ottoman is useful for finding a particular object by a unique field such as customer id or email address in the example above.  "),(0,o.kt)("p",null,"In addition to any explicit index, Ottoman also provides a generic find capability using the Query api and N1QL."),(0,o.kt)("h3",{id:"airport-model"},"Airport Model"),(0,o.kt)("p",null,"The airport module begins much the same way as the hotel module.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { model, addValidators, Schema } from 'ottoman';    // \u2190 use ottoman\nimport { GeolocationSchema } from '../shared/geolocation.model';\n")),(0,o.kt)("p",null,"As in the Hotel model example, the Airport object is defined with several different data types, embedded references to other Ottoman models, and explicitly-defined secondary indexes. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const AirportSchema = new Schema({\n  airportname: { type: String, required: true },\n  city: { type: String, required: true },\n  country: { type: String, required: true },\n  faa: String,\n  geo: GeolocationSchema,\n  icao: String,\n  tz: { type: String, required: true },\n});\n\nAirportSchema.index.findByName = { by: 'name', type: 'n1ql' };\n\nexport const AirportModel = model('airport', AirportSchema);\n")),(0,o.kt)("h3",{id:"application-and-routing"},"Application and Routing"),(0,o.kt)("p",null,"Now that the models are defined above, the controller functionality is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the root directory and the routes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.controller.ts")," files in the module directory."),(0,o.kt)("h4",{id:"app"},"App"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file is the entry point to the application and defines how the application will function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import express, { Request, Response } from 'express';\nimport swaggerUi from 'swagger-ui-express';\nimport YAML from 'yamljs';\nimport { UserRoutes, AuthRoutes } from './users/users.controller';\nimport { start } from '../lib/connections/connection-handler';\nimport { jwtMiddleware } from './shared/protected.router';\nimport { AirportRoutes } from './airports/airports.controller';\nimport { HotelRoutes } from './hotels/hotels.controller';\nimport { RouteRoutes } from './routes/routes.controller';\n\nconst app = express();\n\napp.use(express.json());\napp.get('/', (req, res) => {\n  res.send('index');\n});\napp.use('/users', jwtMiddleware, UserRoutes);\napp.use('/user', AuthRoutes);\napp.use('/airports', jwtMiddleware, AirportRoutes);\napp.use('/hotels', jwtMiddleware, HotelRoutes);\napp.use('/flightPaths', jwtMiddleware, RouteRoutes);\n\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(YAML.load('./api/swagger.yaml')));\n\n// Handle not found and catch exception layer\napp.use((req: Request, res: Response) => res.status(404).json({ error: 'Route Not Match' }));\napp.use((err: Error, req: Request, res: Response) => {\n  if (err.name === 'UnauthorizedError') {\n    return res.status(401).json({ error: 'Invalid token...' });\n  }\n  return res.status(500).json({ error: err.toString() });\n});\nconst useCollections = false; // set this to true to create scopes/collections\nstart({ useCollections })\n  .then(() => {\n    console.log('All the indexes were registered');\n    const port = 4500;\n    app.listen(port, () => {\n      console.log(`API started at http://localhost:${port}`);\n    });\n  })\n  .catch((e) => console.log(e));\n// \u2190 API started at http://localhost:4500\n")),(0,o.kt)("h4",{id:"routes-and-documentations"},"Routes and Documentations"),(0,o.kt)("p",null,"Once you have the example running, you can find all definitions in Swagger:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4500/api-docs")))}u.isMDXComponent=!0}}]);