/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type RegisterMutationVariables = {
  email: string,
};

export type RegisterMutation = {
  register: boolean,
};

export type LoginMutationVariables = {
  email: string,
};

export type LoginMutation = {
  login:  {
    __typename: "User",
    id: string,
    email: string,
    lists:  Array< {
      __typename: "List",
      id: string,
      title: string,
      ids: Array< string | null > | null,
    } | null > | null,
  } | null,
};

export type LogoutMutation = {
  logout: boolean,
};

export type CreateListMutationVariables = {
  title: string,
};

export type CreateListMutation = {
  createList: string,
};

export type DeleteListMutationVariables = {
  listId: string,
};

export type DeleteListMutation = {
  deleteList: string | null,
};

export type AddToListMutationVariables = {
  itemIds: Array< string >,
  listId: string,
};

export type AddToListMutation = {
  addToList: Array< string | null > | null,
};

export type RemoveFromListMutationVariables = {
  itemIds: Array< string >,
  listId: string,
};

export type RemoveFromListMutation = {
  removeFromList: Array< string | null > | null,
};

export type SearchQueryVariables = {
  name: string,
};

export type SearchQuery = {
  search:  {
    __typename: "Search",
    artists:  {
      __typename: "Artists",
      items:  Array< {
        __typename: "Item",
        id: string,
        name: string,
        images:  Array< {
          __typename: "Image",
          height: number,
          width: number,
          url: string,
        } > | null,
      } > | null,
      href: string,
    },
  } | null,
};

export type ArtistQueryVariables = {
  id: string,
};

export type ArtistQuery = {
  artist:  {
    __typename: "Artist",
    genres: Array< string > | null,
    id: string,
    name: string,
    popularity: number,
    type: string,
    uri: string,
    images:  Array< {
      __typename: "Image",
      height: number,
      width: number,
      url: string,
    } > | null,
  },
};

export type AlbumsQueryVariables = {
  id: string,
};

export type AlbumsQuery = {
  albums:  {
    __typename: "Albums",
    items:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      images:  Array< {
        __typename: "Image",
        height: number,
        width: number,
        url: string,
      } > | null,
    } > | null,
  } | null,
};

export type MeQuery = {
  me:  {
    __typename: "User",
    id: string,
    email: string,
    lists:  Array< {
      __typename: "List",
      id: string,
      title: string,
      ids: Array< string | null > | null,
    } | null > | null,
  } | null,
};

export type MyListsQuery = {
  myLists:  Array< {
    __typename: "List",
    id: string,
    title: string,
    ids: Array< string | null > | null,
  } | null > | null,
};

export type ArtistSearchQueryVariables = {
  name: string,
};

export type ArtistSearchQuery = {
  artistSearch:  {
    __typename: "SongkickSearch",
    resultsPage:  {
      __typename: "ResultPage",
      results:  {
        __typename: "SongkickResult",
        artist:  Array< {
          __typename: "SongkickArtist",
          id: string | null,
          displayName: string | null,
        } | null > | null,
        event:  Array< {
          __typename: "SongkickEvent",
          id: string | null,
          displayName: string | null,
          uri: string | null,
          type: string | null,
          venue:  {
            __typename: "Venue",
            id: string | null,
            displayName: string | null,
          } | null,
          location:  {
            __typename: "Location",
            city: string | null,
          } | null,
          start:  {
            __typename: "Start",
            time: string | null,
            date: string | null,
          } | null,
          performance:  Array< {
            __typename: "Performance",
            id: string | null,
          } | null > | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};

export type EventSearchQueryVariables = {
  id: string,
};

export type EventSearchQuery = {
  eventSearch:  {
    __typename: "SongkickSearch",
    resultsPage:  {
      __typename: "ResultPage",
      results:  {
        __typename: "SongkickResult",
        artist:  Array< {
          __typename: "SongkickArtist",
          id: string | null,
          displayName: string | null,
        } | null > | null,
        event:  Array< {
          __typename: "SongkickEvent",
          id: string | null,
          displayName: string | null,
          uri: string | null,
          type: string | null,
          venue:  {
            __typename: "Venue",
            id: string | null,
            displayName: string | null,
          } | null,
          location:  {
            __typename: "Location",
            city: string | null,
          } | null,
          start:  {
            __typename: "Start",
            time: string | null,
            date: string | null,
          } | null,
          performance:  Array< {
            __typename: "Performance",
            id: string | null,
          } | null > | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};

export type EventByNameQueryVariables = {
  name: string,
};

export type EventByNameQuery = {
  eventByName:  {
    __typename: "SongkickSearch",
    resultsPage:  {
      __typename: "ResultPage",
      results:  {
        __typename: "SongkickResult",
        artist:  Array< {
          __typename: "SongkickArtist",
          id: string | null,
          displayName: string | null,
        } | null > | null,
        event:  Array< {
          __typename: "SongkickEvent",
          id: string | null,
          displayName: string | null,
          uri: string | null,
          type: string | null,
          venue:  {
            __typename: "Venue",
            id: string | null,
            displayName: string | null,
          } | null,
          location:  {
            __typename: "Location",
            city: string | null,
          } | null,
          start:  {
            __typename: "Start",
            time: string | null,
            date: string | null,
          } | null,
          performance:  Array< {
            __typename: "Performance",
            id: string | null,
          } | null > | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};
