/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'cross-fetch'
import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloLink,
} from '@apollo/client'


const API = process.env.API_BACKEND;
let apolloClient: ApolloClient<NormalizedCacheObject>


function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: ApolloLink.from([
  new HttpLink({
  uri: `${API}/graphql`,
  fetch,
  credentials: 'same-origin',
})
]),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({...existingCache, ...initialState})
  }
  if (typeof window === 'undefined') return _apolloClient
  apolloClient = apolloClient ?? _apolloClient

  return apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
