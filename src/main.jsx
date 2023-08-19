import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/animation.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './router/index';
const router = createBrowserRouter(routes);
const client = new ApolloClient({
  uri: 'https://current-bull-31.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
