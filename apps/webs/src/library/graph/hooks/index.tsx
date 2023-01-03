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

export type DigItGraphData0000 = {
  __typename?: "DigItGraphData0000";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type DigItGraphFigures0000 = {
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

export type Query = {
  __typename?: "Query";
  DigItGraph0000: DigItGraphResolve0000;
};

export type QueryDigItGraph0000Args = {
  figure: DigItGraphFigures0000;
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
    } | null;
  };
};

export const DigItGraph0000Document = gql`
  query DigItGraph0000($figure: DigItGraphFigures0000!) {
    DigItGraph0000(figure: $figure) {
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
