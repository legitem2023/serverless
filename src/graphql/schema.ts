import { gql } from 'apollo-server-micro'
export const typeDefs = gql`
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
`;