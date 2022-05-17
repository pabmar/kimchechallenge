import React from 'react'
import Grid from '@mui/material/Grid';
import CountryCard from '../CountryCard/CountryCard';




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