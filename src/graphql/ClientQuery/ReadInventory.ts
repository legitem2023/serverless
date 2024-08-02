import { gql } from "@apollo/client";
export const ReadInventory = gql`
query ReadInventory {
  ReadInventory {
    id
    productCode
    styleCode
    name
    price
    thumbnail
    model
    accountCode
    category
  }
}
`