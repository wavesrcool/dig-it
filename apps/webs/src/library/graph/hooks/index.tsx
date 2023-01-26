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

export type DigItGraphData0001 = {
  __typename?: "DigItGraphData0001";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphData0002 = {
  __typename?: "DigItGraphData0002";
  notes?: Maybe<Array<Scalars["String"]>>;
  token?: Maybe<Scalars["String"]>;
};

export type DigItGraphData0003 = {
  __typename?: "DigItGraphData0003";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphData0004 = {
  __typename?: "DigItGraphData0004";
  notes?: Maybe<Array<Scalars["String"]>>;
  token?: Maybe<Scalars["String"]>;
};

export type DigItGraphFigures0000 = {
  locale: Scalars["String"];
};

export type DigItGraphFigures0001 = {
  dig: ModelsObjectsDig;
  locale: Scalars["String"];
};

export type DigItGraphFigures0002 = {
  email: Scalars["String"];
  locale: Scalars["String"];
  passcode: Scalars["String"];
};

export type DigItGraphFigures0003 = {
  locale: Scalars["String"];
  token: Scalars["String"];
};

export type DigItGraphFigures0004 = {
  email: Scalars["String"];
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

export type DigItGraphResolve0001 = {
  __typename?: "DigItGraphResolve0001";
  data?: Maybe<DigItGraphData0001>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type DigItGraphResolve0002 = {
  __typename?: "DigItGraphResolve0002";
  data?: Maybe<DigItGraphData0002>;
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

export type DigItGraphResolve0004 = {
  __typename?: "DigItGraphResolve0004";
  data?: Maybe<DigItGraphData0004>;
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
  DigItGraph0001: DigItGraphResolve0001;
  DigItGraph0002: DigItGraphResolve0002;
  DigItGraph0003: DigItGraphResolve0003;
  DigItGraph0004: DigItGraphResolve0004;
};

export type MutationDigItGraph0001Args = {
  figure: DigItGraphFigures0001;
};

export type MutationDigItGraph0002Args = {
  figure: DigItGraphFigures0002;
};

export type MutationDigItGraph0003Args = {
  figure: DigItGraphFigures0003;
};

export type MutationDigItGraph0004Args = {
  figure: DigItGraphFigures0004;
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
};

export type QueryDigItGraph0000Args = {
  figure: DigItGraphFigures0000;
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

export type DigItGraph0001MutationVariables = Exact<{
  figure: DigItGraphFigures0001;
}>;

export type DigItGraph0001Mutation = {
  __typename?: "Mutation";
  DigItGraph0001: {
    __typename?: "DigItGraphResolve0001";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphData0001";
      notes?: Array<string> | null;
    } | null;
  };
};

export type DigItGraph0002MutationVariables = Exact<{
  figure: DigItGraphFigures0002;
}>;

export type DigItGraph0002Mutation = {
  __typename?: "Mutation";
  DigItGraph0002: {
    __typename?: "DigItGraphResolve0002";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphData0002";
      notes?: Array<string> | null;
      token?: string | null;
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
    } | null;
  };
};

export type DigItGraph0004MutationVariables = Exact<{
  figure: DigItGraphFigures0004;
}>;

export type DigItGraph0004Mutation = {
  __typename?: "Mutation";
  DigItGraph0004: {
    __typename?: "DigItGraphResolve0004";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "DigItGraphData0004";
      notes?: Array<string> | null;
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
export const DigItGraph0001Document = gql`
  mutation DigItGraph0001($figure: DigItGraphFigures0001!) {
    DigItGraph0001(figure: $figure) {
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
export type DigItGraph0001MutationFn = Apollo.MutationFunction<
  DigItGraph0001Mutation,
  DigItGraph0001MutationVariables
>;

/**
 * __useDigItGraph0001Mutation__
 *
 * To run a mutation, you first call `useDigItGraph0001Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraph0001Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraph0001Mutation, { data, loading, error }] = useDigItGraph0001Mutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraph0001Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraph0001Mutation,
    DigItGraph0001MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraph0001Mutation,
    DigItGraph0001MutationVariables
  >(DigItGraph0001Document, options);
}
export type DigItGraph0001MutationHookResult = ReturnType<
  typeof useDigItGraph0001Mutation
>;
export type DigItGraph0001MutationResult =
  Apollo.MutationResult<DigItGraph0001Mutation>;
export type DigItGraph0001MutationOptions = Apollo.BaseMutationOptions<
  DigItGraph0001Mutation,
  DigItGraph0001MutationVariables
>;
export const DigItGraph0002Document = gql`
  mutation DigItGraph0002($figure: DigItGraphFigures0002!) {
    DigItGraph0002(figure: $figure) {
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
export type DigItGraph0002MutationFn = Apollo.MutationFunction<
  DigItGraph0002Mutation,
  DigItGraph0002MutationVariables
>;

/**
 * __useDigItGraph0002Mutation__
 *
 * To run a mutation, you first call `useDigItGraph0002Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraph0002Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraph0002Mutation, { data, loading, error }] = useDigItGraph0002Mutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraph0002Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraph0002Mutation,
    DigItGraph0002MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraph0002Mutation,
    DigItGraph0002MutationVariables
  >(DigItGraph0002Document, options);
}
export type DigItGraph0002MutationHookResult = ReturnType<
  typeof useDigItGraph0002Mutation
>;
export type DigItGraph0002MutationResult =
  Apollo.MutationResult<DigItGraph0002Mutation>;
export type DigItGraph0002MutationOptions = Apollo.BaseMutationOptions<
  DigItGraph0002Mutation,
  DigItGraph0002MutationVariables
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
export const DigItGraph0004Document = gql`
  mutation DigItGraph0004($figure: DigItGraphFigures0004!) {
    DigItGraph0004(figure: $figure) {
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
export type DigItGraph0004MutationFn = Apollo.MutationFunction<
  DigItGraph0004Mutation,
  DigItGraph0004MutationVariables
>;

/**
 * __useDigItGraph0004Mutation__
 *
 * To run a mutation, you first call `useDigItGraph0004Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDigItGraph0004Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [digItGraph0004Mutation, { data, loading, error }] = useDigItGraph0004Mutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useDigItGraph0004Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    DigItGraph0004Mutation,
    DigItGraph0004MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DigItGraph0004Mutation,
    DigItGraph0004MutationVariables
  >(DigItGraph0004Document, options);
}
export type DigItGraph0004MutationHookResult = ReturnType<
  typeof useDigItGraph0004Mutation
>;
export type DigItGraph0004MutationResult =
  Apollo.MutationResult<DigItGraph0004Mutation>;
export type DigItGraph0004MutationOptions = Apollo.BaseMutationOptions<
  DigItGraph0004Mutation,
  DigItGraph0004MutationVariables
>;
