import React from "react";
import "./App.css"; 
import CountrySearchContainer from "./components/countrySearchContainer/CountrySearchContainer";
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
 
const App = () => (
  <ApolloProvider client={client}>
    <CountrySearchContainer></CountrySearchContainer>
  </ApolloProvider>
);
export default App;
