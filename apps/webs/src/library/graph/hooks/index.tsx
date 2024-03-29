import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dig = {
  __typename?: "Dig";
  active: Scalars["Boolean"];
  created: Scalars["String"];
  description: Scalars["String"];
  email: Email;
  emailId?: Maybe<Scalars["Int"]>;
  id: Scalars["Int"];
  key: Scalars["String"];
  money: Scalars["String"];
  neighborhood: Scalars["String"];
  picture: Scalars["String"];
  pictureDate?: Maybe<Scalars["String"]>;
  place: Place;
  placeId?: Maybe<Scalars["Int"]>;
  records?: Maybe<ModelsRecords>;
  updated: Scalars["String"];
  value: Scalars["String"];
};

export type DigItGraphData0000 = {
  __typename?: "DigItGraphData0000";
  notes?: Maybe<Array<Scalars["String"]>>;
  results?: Maybe<Array<Dig>>;
};

export type DigItGraphData0003 = {
  __typename?: "DigItGraphData0003";
  email?: Maybe<Scalars["String"]>;
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphDataDigsConfirmOpen = {
  __typename?: "DigItGraphDataDigsConfirmOpen";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphDataDigsCreateOpen = {
  __typename?: "DigItGraphDataDigsCreateOpen";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphDataLogInConfirm = {
  __typename?: "DigItGraphDataLogInConfirm";
  notes?: Maybe<Array<Scalars["String"]>>;
  token?: Maybe<Scalars["String"]>;
};

export type DigItGraphDataLogInOpen = {
  __typename?: "DigItGraphDataLogInOpen";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphDataSessionRead = {
  __typename?: "DigItGraphDataSessionRead";
  email?: Maybe<Scalars["String"]>;
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphFigures0000 = {
  locale: Scalars["String"];
};

export type DigItGraphFigures0003 = {
  locale: Scalars["String"];
};

export type DigItGraphFiguresDigsConfirmOpen = {
  email: Scalars["String"];
  locale: Scalars["String"];
  passcode: Scalars["String"];
};

export type DigItGraphFiguresDigsCreateOpen = {
  dig: ModelsObjectsDig;
  locale: Scalars["String"];
};

export type DigItGraphFiguresLogInConfirm = {
  email: Scalars["String"];
  locale: Scalars["String"];
  passcode: Scalars["String"];
};

export type DigItGraphFiguresLogInOpen = {
  email: Scalars["String"];
  locale: Scalars["String"];
};

export type DigItGraphFiguresSessionRead = {
  locale: Scalars["String"];
};

export type DigItGraphResolve0000 = {
  __typename?: "DigItGraphResolve0000";
  data?: Maybe<DigItGraphData0000>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolve0003 = {
  __typename?: "DigItGraphResolve0003";
  data?: Maybe<DigItGraphData0003>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolveDigsConfirmOpen = {
  __typename?: "DigItGraphResolveDigsConfirmOpen";
  data?: Maybe<DigItGraphDataDigsConfirmOpen>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolveDigsCreateOpen = {
  __typename?: "DigItGraphResolveDigsCreateOpen";
  data?: Maybe<DigItGraphDataDigsCreateOpen>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolveLogInConfirm = {
  __typename?: "DigItGraphResolveLogInConfirm";
  data?: Maybe<DigItGraphDataLogInConfirm>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolveLogInOpen = {
  __typename?: "DigItGraphResolveLogInOpen";
  data?: Maybe<DigItGraphDataLogInOpen>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolveSessionRead = {
  __typename?: "DigItGraphResolveSessionRead";
  data?: Maybe<DigItGraphDataSessionRead>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type Email = {
  __typename?: "Email";
  address: Scalars["String"];
  confirmed: Scalars["Boolean"];
  created: Scalars["String"];
  dig: Dig;
  digId?: Maybe<Scalars["Int"]>;
  id: Scalars["Int"];
  key: Scalars["String"];
  passcode: Scalars["String"];
  records?: Maybe<ModelsRecords>;
  updated: Scalars["String"];
};

export type Geo = {
  __typename?: "Geo";
  created: Scalars["String"];
  gh2: Scalars["String"];
  gh9: Scalars["String"];
  id: Scalars["Int"];
  key: Scalars["String"];
  lat: Scalars["String"];
  lng: Scalars["String"];
  places: Array<Place>;
  records?: Maybe<ModelsRecords>;
  updated: Scalars["String"];
};

export type ModelsNotes = {
  __typename?: "ModelsNotes";
  date: Scalars["String"];
  key: Scalars["String"];
  list: Array<Scalars["String"]>;
};

export type ModelsObjectsDig = {
  city: Scalars["String"];
  country: Scalars["String"];
  description: Scalars["String"];
  email: Scalars["String"];
  lat: Scalars["String"];
  line: Scalars["String"];
  lng: Scalars["String"];
  money: Scalars["String"];
  neighborhood: Scalars["String"];
  region: Scalars["String"];
  value: Scalars["String"];
};

export type ModelsRecords = {
  __typename?: "ModelsRecords";
  notes?: Maybe<Array<ModelsNotes>>;
};

export type Mutation = {
  __typename?: "Mutation";
  DigItGraph0003: DigItGraphResolve0003;
  DigItGraphDigsConfirmOpen: DigItGraphResolveDigsConfirmOpen;
  DigItGraphDigsCreateOpen: DigItGraphResolveDigsCreateOpen;
  DigItGraphLogInConfirm: DigItGraphResolveLogInConfirm;
  DigItGraphLogInOpen: DigItGraphResolveLogInOpen;
};

export type MutationDigItGraph0003Args = {
  figure: DigItGraphFigures0003;
};

export type MutationDigItGraphDigsConfirmOpenArgs = {
  figure: DigItGraphFiguresDigsConfirmOpen;
};

export type MutationDigItGraphDigsCreateOpenArgs = {
  figure: DigItGraphFiguresDigsCreateOpen;
};

export type MutationDigItGraphLogInConfirmArgs = {
  figure: DigItGraphFiguresLogInConfirm;
};

export type MutationDigItGraphLogInOpenArgs = {
  figure: DigItGraphFiguresLogInOpen;
};

export type Place = {
  __typename?: "Place";
  city: Scalars["String"];
  country: Scalars["String"];
  created: Scalars["String"];
  dig: Dig;
  digId?: Maybe<Scalars["Int"]>;
  geo: Geo;
  geoId?: Maybe<Scalars["Int"]>;
  id: Scalars["Int"];
  key: Scalars["String"];
  line: Scalars["String"];
  records?: Maybe<ModelsRecords>;
  region: Scalars["String"];
  updated: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  DigItGraph0000: DigItGraphResolve0000;
  DigItGraphSessionRead: DigItGraphResolveSessionRead;
};

export type QueryDigItGraph0000Args = {
  figure: DigItGraphFigures0000;
};

export type QueryDigItGraphSessionReadArgs = {
  figure: DigItGraphFiguresSessionRead;
};

export type DigItFragment0000DigFragment = {
  __typename?: "Dig";
  key: string;
  created: string;
  updated: string;
  picture: string;
  pictureDate?: string | null;
  description: string;
  neighborhood: string;
  value: string;
  money: string;
  email: {
    __typename?: "Email";
    key: string;
    created: string;
    updated: string;
    address: string;
  };
  place: {
    __typename?: "Place";
    key: string;
    created: string;
    updated: string;
    line: string;
    city: string;
    region: string;
    country: string;
    geo: {
      __typename?: "Geo";
      key: string;
      created: string;
      updated: string;
      gh2: string;
      gh9: string;
      lat: string;
      lng: string;
    };
  };
};

export type DigItFragment0000EmailFragment = {
  __typename?: "Email";
  key: string;
  created: string;
  updated: string;
  address: string;
};

export type DigItFragment0000GeoFragment = {
  __typename?: "Geo";
  key: string;
  created: string;
  updated: string;
  gh2: string;
  gh9: string;
  lat: string;
  lng: string;
};

export type DigItFragment0000PlaceFragment = {
  __typename?: "Place";
  key: string;
  created: string;
  updated: string;
  line: string;
  city: string;
  region: string;
  country: string;
  geo: {
    __typename?: "Geo";
    key: string;
    created: string;
    updated: string;
    gh2: string;
    gh9: string;
    lat: string;
    lng: string;
  };
};

export type DigItGraph0000QueryVariables = Exact<{
  figure: DigItGraphFigures0000;
}>;

export type DigItGraph0000Query = {
  __typename?: "Query";
  DigItGraph0000: {
    __typename?: "DigItGraphResolve0000";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphData0000";
      notes?: Array<string> | null;
      results?: Array<{
        __typename?: "Dig";
        key: string;
        created: string;
        updated: string;
        picture: string;
        pictureDate?: string | null;
        description: string;
        neighborhood: string;
        value: string;
        money: string;
        email: {
          __typename?: "Email";
          key: string;
          created: string;
          updated: string;
          address: string;
        };
        place: {
          __typename?: "Place";
          key: string;
          created: string;
          updated: string;
          line: string;
          city: string;
          region: string;
          country: string;
          geo: {
            __typename?: "Geo";
            key: string;
            created: string;
            updated: string;
            gh2: string;
            gh9: string;
            lat: string;
            lng: string;
          };
        };
      }> | null;
    } | null;
  };
};

export type DigItGraph0003MutationVariables = Exact<{
  figure: DigItGraphFigures0003;
}>;

export type DigItGraph0003Mutation = {
  __typename?: "Mutation";
  DigItGraph0003: {
    __typename?: "DigItGraphResolve0003";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphData0003";
      notes?: Array<string> | null;
      email?: string | null;
    } | null;
  };
};

export type DigItGraphDigsConfirmOpenMutationVariables = Exact<{
  figure: DigItGraphFiguresDigsConfirmOpen;
}>;

export type DigItGraphDigsConfirmOpenMutation = {
  __typename?: "Mutation";
  DigItGraphDigsConfirmOpen: {
    __typename?: "DigItGraphResolveDigsConfirmOpen";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphDataDigsConfirmOpen";
      notes?: Array<string> | null;
    } | null;
  };
};

export type DigItGraphDigsCreateOpenMutationVariables = Exact<{
  figure: DigItGraphFiguresDigsCreateOpen;
}>;

export type DigItGraphDigsCreateOpenMutation = {
  __typename?: "Mutation";
  DigItGraphDigsCreateOpen: {
    __typename?: "DigItGraphResolveDigsCreateOpen";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphDataDigsCreateOpen";
      notes?: Array<string> | null;
    } | null;
  };
};

export type DigItGraphLogInConfirmMutationVariables = Exact<{
  figure: DigItGraphFiguresLogInConfirm;
}>;

export type DigItGraphLogInConfirmMutation = {
  __typename?: "Mutation";
  DigItGraphLogInConfirm: {
    __typename?: "DigItGraphResolveLogInConfirm";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphDataLogInConfirm";
      notes?: Array<string> | null;
      token?: string | null;
    } | null;
  };
};

export type DigItGraphLogInOpenMutationVariables = Exact<{
  figure: DigItGraphFiguresLogInOpen;
}>;

export type DigItGraphLogInOpenMutation = {
  __typename?: "Mutation";
  DigItGraphLogInOpen: {
    __typename?: "DigItGraphResolveLogInOpen";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphDataLogInOpen";
      notes?: Array<string> | null;
    } | null;
  };
};

export type DigItGraphSessionReadQueryVariables = Exact<{
  figure: DigItGraphFiguresSessionRead;
}>;

export type DigItGraphSessionReadQuery = {
  __typename?: "Query";
  DigItGraphSessionRead: {
    __typename?: "DigItGraphResolveSessionRead";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphDataSessionRead";
      notes?: Array<string> | null;
      email?: string | null;
    } | null;
  };
};

export const DigItFragment0000EmailFragmentDoc = gql`
  fragment DigItFragment0000Email on Email {
    key
    created
    updated
    address
  }
`;
export const DigItFragment0000GeoFragmentDoc = gql`
  fragment DigItFragment0000Geo on Geo {
    key
    created
    updated
    gh2
    gh9
    lat
    lng
  }
`;
export const DigItFragment0000PlaceFragmentDoc = gql`
  fragment DigItFragment0000Place on Place {
    key
    created
    updated
    line
    city
    region
    country
    geo {
      ...DigItFragment0000Geo
    }
  }
  ${DigItFragment0000GeoFragmentDoc}
`;
export const DigItFragment0000DigFragmentDoc = gql`
  fragment DigItFragment0000Dig on Dig {
    key
    created
    updated
    picture
    pictureDate
    description
    neighborhood
    value
    money
    email {
      ...DigItFragment0000Email
    }
    place {
      ...DigItFragment0000Place
    }
  }
  ${DigItFragment0000EmailFragmentDoc}
  ${DigItFragment0000PlaceFragmentDoc}
`;
export const DigItGraph0000Document = gql`
  query DigItGraph0000($figure: DigItGraphFigures0000!) {
    DigItGraph0000(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        results {
          ...DigItFragment0000Dig
        }
      }
    }
  }
  ${DigItFragment0000DigFragmentDoc}
`;

/**
 * __useDigItGraph0000Query__
 *
 * To run a query within a React component, call `useDigItGraph0000Query` and pass it any options that fit your needs.
 * When your component renders, `useDigItGraph0000Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigItGraph0000Query({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraph0000Query(
  baseOptions: Apollo.QueryHookOptions<
    DigItGraph0000Query,
    DigItGraph0000QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DigItGraph0000Query, DigItGraph0000QueryVariables>(
    DigItGraph0000Document,
    options
  );
}
export function useDigItGraph0000LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DigItGraph0000Query,
    DigItGraph0000QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DigItGraph0000Query, DigItGraph0000QueryVariables>(
    DigItGraph0000Document,
    options
  );
}
export type DigItGraph0000QueryHookResult = ReturnType<
  typeof useDigItGraph0000Query
>;
export type DigItGraph0000LazyQueryHookResult = ReturnType<
  typeof useDigItGraph0000LazyQuery
>;
export type DigItGraph0000QueryResult = Apollo.QueryResult<
  DigItGraph0000Query,
  DigItGraph0000QueryVariables
>;
export const DigItGraph0003Document = gql`
  mutation DigItGraph0003($figure: DigItGraphFigures0003!) {
    DigItGraph0003(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        email
      }
    }
  }
`;
export type DigItGraph0003MutationFn = Apollo.MutationFunction<
  DigItGraph0003Mutation,
  DigItGraph0003MutationVariables
>;

/**
 * __useDigItGraph0003Mutation__
 *
 * To run a mutation, you first call `useDigItGraph0003Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraph0003Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraph0003Mutation, { data, loading, error }] = useDigItGraph0003Mutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraph0003Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraph0003Mutation,
    DigItGraph0003MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraph0003Mutation,
    DigItGraph0003MutationVariables
  >(DigItGraph0003Document, options);
}
export type DigItGraph0003MutationHookResult = ReturnType<
  typeof useDigItGraph0003Mutation
>;
export type DigItGraph0003MutationResult =
  Apollo.MutationResult<DigItGraph0003Mutation>;
export type DigItGraph0003MutationOptions = Apollo.BaseMutationOptions<
  DigItGraph0003Mutation,
  DigItGraph0003MutationVariables
>;
export const DigItGraphDigsConfirmOpenDocument = gql`
  mutation DigItGraphDigsConfirmOpen(
    $figure: DigItGraphFiguresDigsConfirmOpen!
  ) {
    DigItGraphDigsConfirmOpen(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
      }
    }
  }
`;
export type DigItGraphDigsConfirmOpenMutationFn = Apollo.MutationFunction<
  DigItGraphDigsConfirmOpenMutation,
  DigItGraphDigsConfirmOpenMutationVariables
>;

/**
 * __useDigItGraphDigsConfirmOpenMutation__
 *
 * To run a mutation, you first call `useDigItGraphDigsConfirmOpenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraphDigsConfirmOpenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraphDigsConfirmOpenMutation, { data, loading, error }] = useDigItGraphDigsConfirmOpenMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraphDigsConfirmOpenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraphDigsConfirmOpenMutation,
    DigItGraphDigsConfirmOpenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraphDigsConfirmOpenMutation,
    DigItGraphDigsConfirmOpenMutationVariables
  >(DigItGraphDigsConfirmOpenDocument, options);
}
export type DigItGraphDigsConfirmOpenMutationHookResult = ReturnType<
  typeof useDigItGraphDigsConfirmOpenMutation
>;
export type DigItGraphDigsConfirmOpenMutationResult =
  Apollo.MutationResult<DigItGraphDigsConfirmOpenMutation>;
export type DigItGraphDigsConfirmOpenMutationOptions =
  Apollo.BaseMutationOptions<
    DigItGraphDigsConfirmOpenMutation,
    DigItGraphDigsConfirmOpenMutationVariables
  >;
export const DigItGraphDigsCreateOpenDocument = gql`
  mutation DigItGraphDigsCreateOpen($figure: DigItGraphFiguresDigsCreateOpen!) {
    DigItGraphDigsCreateOpen(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
      }
    }
  }
`;
export type DigItGraphDigsCreateOpenMutationFn = Apollo.MutationFunction<
  DigItGraphDigsCreateOpenMutation,
  DigItGraphDigsCreateOpenMutationVariables
>;

/**
 * __useDigItGraphDigsCreateOpenMutation__
 *
 * To run a mutation, you first call `useDigItGraphDigsCreateOpenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraphDigsCreateOpenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraphDigsCreateOpenMutation, { data, loading, error }] = useDigItGraphDigsCreateOpenMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraphDigsCreateOpenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraphDigsCreateOpenMutation,
    DigItGraphDigsCreateOpenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraphDigsCreateOpenMutation,
    DigItGraphDigsCreateOpenMutationVariables
  >(DigItGraphDigsCreateOpenDocument, options);
}
export type DigItGraphDigsCreateOpenMutationHookResult = ReturnType<
  typeof useDigItGraphDigsCreateOpenMutation
>;
export type DigItGraphDigsCreateOpenMutationResult =
  Apollo.MutationResult<DigItGraphDigsCreateOpenMutation>;
export type DigItGraphDigsCreateOpenMutationOptions =
  Apollo.BaseMutationOptions<
    DigItGraphDigsCreateOpenMutation,
    DigItGraphDigsCreateOpenMutationVariables
  >;
export const DigItGraphLogInConfirmDocument = gql`
  mutation DigItGraphLogInConfirm($figure: DigItGraphFiguresLogInConfirm!) {
    DigItGraphLogInConfirm(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        token
      }
    }
  }
`;
export type DigItGraphLogInConfirmMutationFn = Apollo.MutationFunction<
  DigItGraphLogInConfirmMutation,
  DigItGraphLogInConfirmMutationVariables
>;

/**
 * __useDigItGraphLogInConfirmMutation__
 *
 * To run a mutation, you first call `useDigItGraphLogInConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraphLogInConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraphLogInConfirmMutation, { data, loading, error }] = useDigItGraphLogInConfirmMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraphLogInConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraphLogInConfirmMutation,
    DigItGraphLogInConfirmMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraphLogInConfirmMutation,
    DigItGraphLogInConfirmMutationVariables
  >(DigItGraphLogInConfirmDocument, options);
}
export type DigItGraphLogInConfirmMutationHookResult = ReturnType<
  typeof useDigItGraphLogInConfirmMutation
>;
export type DigItGraphLogInConfirmMutationResult =
  Apollo.MutationResult<DigItGraphLogInConfirmMutation>;
export type DigItGraphLogInConfirmMutationOptions = Apollo.BaseMutationOptions<
  DigItGraphLogInConfirmMutation,
  DigItGraphLogInConfirmMutationVariables
>;
export const DigItGraphLogInOpenDocument = gql`
  mutation DigItGraphLogInOpen($figure: DigItGraphFiguresLogInOpen!) {
    DigItGraphLogInOpen(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
      }
    }
  }
`;
export type DigItGraphLogInOpenMutationFn = Apollo.MutationFunction<
  DigItGraphLogInOpenMutation,
  DigItGraphLogInOpenMutationVariables
>;

/**
 * __useDigItGraphLogInOpenMutation__
 *
 * To run a mutation, you first call `useDigItGraphLogInOpenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraphLogInOpenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraphLogInOpenMutation, { data, loading, error }] = useDigItGraphLogInOpenMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraphLogInOpenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraphLogInOpenMutation,
    DigItGraphLogInOpenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraphLogInOpenMutation,
    DigItGraphLogInOpenMutationVariables
  >(DigItGraphLogInOpenDocument, options);
}
export type DigItGraphLogInOpenMutationHookResult = ReturnType<
  typeof useDigItGraphLogInOpenMutation
>;
export type DigItGraphLogInOpenMutationResult =
  Apollo.MutationResult<DigItGraphLogInOpenMutation>;
export type DigItGraphLogInOpenMutationOptions = Apollo.BaseMutationOptions<
  DigItGraphLogInOpenMutation,
  DigItGraphLogInOpenMutationVariables
>;
export const DigItGraphSessionReadDocument = gql`
  query DigItGraphSessionRead($figure: DigItGraphFiguresSessionRead!) {
    DigItGraphSessionRead(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        email
      }
    }
  }
`;

/**
 * __useDigItGraphSessionReadQuery__
 *
 * To run a query within a React component, call `useDigItGraphSessionReadQuery` and pass it any options that fit your needs.
 * When your component renders, `useDigItGraphSessionReadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigItGraphSessionReadQuery({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraphSessionReadQuery(
  baseOptions: Apollo.QueryHookOptions<
    DigItGraphSessionReadQuery,
    DigItGraphSessionReadQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DigItGraphSessionReadQuery,
    DigItGraphSessionReadQueryVariables
  >(DigItGraphSessionReadDocument, options);
}
export function useDigItGraphSessionReadLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DigItGraphSessionReadQuery,
    DigItGraphSessionReadQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DigItGraphSessionReadQuery,
    DigItGraphSessionReadQueryVariables
  >(DigItGraphSessionReadDocument, options);
}
export type DigItGraphSessionReadQueryHookResult = ReturnType<
  typeof useDigItGraphSessionReadQuery
>;
export type DigItGraphSessionReadLazyQueryHookResult = ReturnType<
  typeof useDigItGraphSessionReadLazyQuery
>;
export type DigItGraphSessionReadQueryResult = Apollo.QueryResult<
  DigItGraphSessionReadQuery,
  DigItGraphSessionReadQueryVariables
>;
