import React from 'react'
import ReacDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
// import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http'
import { App } from '../src/App'

// import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-gregorio.now.sh/graphql'
})

export default function Index(props) {
  return (
    <div>
  {/* <Context.Provider> */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  {/* // </Context.Provider>, */}
  </div>
  );
}
