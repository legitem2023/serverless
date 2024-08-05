"use strict";(()=>{var e={};e.id=702,e.ids=[702],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},9261:(e,t,n)=>{let r;n.r(t),n.d(t,{config:()=>P,default:()=>v,routeModule:()=>f});var i={};n.r(i),n.d(i,{config:()=>m,default:()=>I});var a=n(1802),o=n(7153),u=n(6249);let s=require("apollo-server-micro"),g=(0,s.gql)`
scalar Upload
scalar Date

type UsersInventory {
  accountCode:String
  Inventory:[Inventory]
}

type Inventory {
  id:String
  productCode:String
  category:String
  productType:String
  imageReferences:String
  styleCode:String
  name:String
  color:String
  size:String
  price:Float
  stock:Float
  status:String
  thumbnail:String
  parentId:String
  creator:String
  editor:String
  dateCreated:String
  dateUpdated:String
  model: String
  accountCode:String
  Inv_subImage:[Inv_subImage]
}

type Inv_subImage {
  id:Int
  subImageRelationParent:Int
  subImageRelationChild:Int
  ImagePath:String
  isVideo:String
}

type Query {
  ReadInventory: [Inventory]
}

type Result {
  statusText:String
}
######################### INPUTS ############################
input CreateInventoryInput{
  productCode:String
  accountCode:String
  category:String
  productType:String
  imageReferences:String
  styleCode:String
  name:String
  color:String
  size:String
  price:Float
  stock:Float
  status:String
  thumbnail:String
  parentId:String
  creator:String
  editor:String
  model: String
}
######################### INPUTS ############################

type Mutation {
  CreateInventory(CreateInventoryInput:[CreateInventoryInput]):Result
}
`;async function c(e,t){return{prisma:r}}r=new(require("@prisma/client")).PrismaClient,console.log("prod");let l=require("@apollo/utils.keyvaluecache"),d=require("micro-cors"),p=n.n(d)()(),S=new s.ApolloServer({typeDefs:g,resolvers:{Query:{ReadInventory:async(e,t)=>await r.inventory.findMany()},Mutation:{CreateInventory:async(e,t)=>{try{if(console.log(t.CreateInventoryInput),await r.inventory.create({data:t.CreateInventoryInput[0]}))return{statusText:"Successful!"};return{statusText:"Ops something went wrong!"}}catch(e){console.log(e)}}}},persistedQueries:{cache:new l.InMemoryLRUCache({maxSize:104857600})},context:c}),y=S.start(),I=p(async function(e,t){if("OPTIONS"===e.method)return t.end(),!1;await y,await S.createHandler({path:"/api/graphql"})(e,t)}),m={api:{bodyParser:!1}},v=(0,u.l)(i,"default"),P=(0,u.l)(i,"config"),f=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/graphql",pathname:"/api/graphql",bundlePath:"",filename:""},userland:i})},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=9261);module.exports=n})();