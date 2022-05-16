import React, { useEffect,useState} from 'react'
import {useQuery, gql} from '@apollo/client'



 const ALL_COUNTRY  = gql`
 {
   countries{
     name,
     capital,
     native,
     currency,
     phone,
     continent{
       name
     }
     languages{
       name
     }
 
   }
 }`


 

const CountrySearchContainer = props => {
    const {data , loading,error} = useQuery(ALL_COUNTRY);
   
    
    if(loading){
      return <div>
  
      </div>
    }
    if (error){
      return <p>Error en data</p>
    } 
    const countrylist = data.countries
    
  
   
    
    
    return (<>{console.log(countrylist)}</>)
     
}

export default CountrySearchContainer;