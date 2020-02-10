// tslint:disable
// this is an auto generated file. This will be overwritten

export const register = /* GraphQL */ `
  mutation Register($email: String!) {
    register(email: $email)
  }
`;
export const login = /* GraphQL */ `
  mutation Login($email: String!) {
    login(email: $email) {
      id
      email
      lists {
        id
        title
        ids
      }
    }
  }
`;
export const logout = /* GraphQL */ `
  mutation Logout {
    logout
  }
`;
export const createList = /* GraphQL */ `
  mutation CreateList($title: String!) {
    createList(title: $title)
  }
`;
export const deleteList = /* GraphQL */ `
  mutation DeleteList($listId: ID!) {
    deleteList(listId: $listId)
  }
`;
export const addToList = /* GraphQL */ `
  mutation AddToList($itemIds: [ID!]!, $listId: ID!) {
    addToList(itemIds: $itemIds, listId: $listId)
  }
`;
export const removeFromList = /* GraphQL */ `
  mutation RemoveFromList($itemIds: [ID!]!, $listId: ID!) {
    removeFromList(itemIds: $itemIds, listId: $listId)
  }
`;
