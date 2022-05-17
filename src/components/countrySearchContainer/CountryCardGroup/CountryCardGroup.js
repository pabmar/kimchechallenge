import DefaultClient from 'apollo-boost';
import React, { useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CountryCard from '../CountryCard/CountryCard';
import { countries } from 'country-flag-icons';
import { Container } from '@mui/material';
 



const CountryCardGroup  = ({groupCountries}) => {
 return (
     <Grid container spacing={2}>
        <Grid item xs={12}>
           <h3>{groupCountries.group}</h3> 
        </Grid>
        {groupCountries.countries.map(countriesDetail =>(
            <CountryCard country={countriesDetail} ></CountryCard>
        ))}
     
      </Grid> 


 )
  
 //


}

export default CountryCardGroup