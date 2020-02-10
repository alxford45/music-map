// tslint:disable
// this is an auto generated file. This will be overwritten

export const search = /* GraphQL */ `
  query Search($name: String!) {
    search(name: $name) {
      artists {
        items {
          id
          name
          images {
            height
            width
            url
          }
        }
        href
      }
    }
  }
`;
export const artist = /* GraphQL */ `
  query Artist($id: ID!) {
    artist(id: $id) {
      genres
      id
      name
      popularity
      type
      uri
      images {
        height
        width
        url
      }
    }
  }
`;
export const albums = /* GraphQL */ `
  query Albums($id: ID!) {
    albums(id: $id) {
      items {
        id
        name
        images {
          height
          width
          url
        }
      }
    }
  }
`;
export const me = /* GraphQL */ `
  query Me {
    me {
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
export const myLists = /* GraphQL */ `
  query MyLists {
    myLists {
      id
      title
      ids
    }
  }
`;
export const artistSearch = /* GraphQL */ `
  query ArtistSearch($name: String!) {
    artistSearch(name: $name) {
      resultsPage {
        results {
          artist {
            id
            displayName
          }
          event {
            id
            displayName
            uri
            type
            venue {
              id
              displayName
            }
            location {
              city
            }
            start {
              time
              date
            }
            performance {
              id
            }
          }
        }
      }
    }
  }
`;
export const eventSearch = /* GraphQL */ `
  query EventSearch($id: ID!) {
    eventSearch(id: $id) {
      resultsPage {
        results {
          artist {
            id
            displayName
          }
          event {
            id
            displayName
            uri
            type
            venue {
              id
              displayName
            }
            location {
              city
            }
            start {
              time
              date
            }
            performance {
              id
            }
          }
        }
      }
    }
  }
`;
export const eventByName = /* GraphQL */ `
  query EventByName($name: String!) {
    eventByName(name: $name) {
      resultsPage {
        results {
          artist {
            id
            displayName
          }
          event {
            id
            displayName
            uri
            type
            venue {
              id
              displayName
            }
            location {
              city
            }
            start {
              time
              date
            }
            performance {
              id
            }
          }
        }
      }
    }
  }
`;
