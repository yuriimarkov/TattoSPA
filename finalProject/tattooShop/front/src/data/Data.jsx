import {gql} from "@apollo/client";

export const GET_DATA = gql`
query {
 products {
  data {
    id
    attributes {
      name
      category
      shortDescription
      maker
      type
      recognition
      status
      price
      available
      description
      images {
        data {
          attributes {
            url
          }
        }
      }
    }
  }
	}
  reviews {
    data {
      id
      attributes {
        userName
        description
        avatar {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;