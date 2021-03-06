import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Flags from 'country-flag-icons/react/3x2'
 

 
 
const CountryCard = ({country}) =>{
    const Flag = Flags[country.code]

    const link = `https://www.google.com/search?q=${country.name}`
    return <Grid item xs={4}>
              
  <Card >
    <CardContent>
      <Typography   color="text.secondary" gutterBottom>
 
      </Typography>
      <Typography variant="h5" component="div">
          <Grid item>
              <Grid item xs={1}><Flag></Flag></Grid>
              <Grid item>{country.name}</Grid>
          </Grid>
   
      </Typography>
      <Typography color="text.secondary">
        {country.native}
      </Typography>
      <Typography variant="body2">
        Capital: {country.capital}
        <br></br>
        Phone Code: {country.phone}
        <br></br>
        Currecy: {country.currency}
        <br></br>
        
  
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={link} target="_blank">Learn More</Button>
    </CardActions>
  </Card>
        </Grid>


 
}

export default CountryCard