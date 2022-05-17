import React from "react";
import "./App.css"; 
import CountrySearchContainer from "./components/countrySearchContainer/CountrySearchContainer";
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Container from '@mui/material/Container';
 
const App = () => (
  <ApolloProvider client={client}>
    <Container >
      <h1>Country Search</h1>
      <CountrySearchContainer ></CountrySearchContainer>
    </Container>
    
  </ApolloProvider>
);
export default App;
