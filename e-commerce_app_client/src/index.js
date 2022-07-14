import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


// apollo client setup
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000',
  cache: new InMemoryCache()

})



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApolloProvider client={ apolloClient } >
        <App />
    </ApolloProvider>
  </React.StrictMode>
)

