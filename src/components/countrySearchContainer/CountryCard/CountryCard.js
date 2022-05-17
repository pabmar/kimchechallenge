import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Flags from 'country-flag-icons/react/3x2'
 

 
// 1f1e8
const CountryCard = ({country}) =>{
    const Flag = Flags[country.code]
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
        Cod Tel: {country.phone}
        <br></br>
        Divisa: {country.currency}
        <br></br>
        
  
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
        </Grid>


 
}

export default CountryCard