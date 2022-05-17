import React, { useEffect,useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';    
import InputBase from '@mui/material/InputBase';
import { ConstructionOutlined } from '@mui/icons-material';
import CountryCardGroup from './CountryCardGroup/CountryCardGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

 const ALL_COUNTRY  = gql`
 {
   countries{
     name,
     code,
     capital,
     native,
     currency,
     phone,
     continent{
       name
     }
     languages{
       name
     },
     emoji
 
   }
 }`

 function textFormat(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 const getlanguages = (countriesL) =>{
    let languagesFilter = []
    for (let index = 0; index < countriesL.length; index++) {
       
        for (let i = 0; i < countriesL[index].languages.length; i++) {
            languagesFilter.push(countriesL[index].languages[i].name);
            
        }
        
    }
    return [...new Set(languagesFilter)]
    
}

const getContinents = (continents) =>{

     let continentsFilter = []
     for (let index = 0; index < continents.length; index++) {
         continentsFilter.push(continents[index].continent.name);
        
    }
    return  [...new Set(continentsFilter)]
     
}

const filterCountries = (filter,list,group) =>{
    const filteredCountryList = (list.filter(country => country.name.includes(textFormat(filter))))
    if(group === 'Continents'){
        let contList = getContinents(filteredCountryList)
        let contReturn = []
        for (let i = 0; i < contList.length; i++) {
            let countryContinent = {group:contList[i],countries:filteredCountryList.filter(countriesFiltered =>countriesFiltered.continent.name.includes(contList[i]) )}
            contReturn.push(countryContinent);
            
        }
 
        return contReturn
    }
    if (group === 'Languages'){

        let lanList = getlanguages(filteredCountryList)
        let lanReturn = []
        
        for (let i = 0; i < lanList.length; i++) {
            let languagesGroupFilter = []
            
           // lanReturn.push(countryLanguages);
           for (let index = 0; index < filteredCountryList.length; index++) {
               let detailLanguagesList = filteredCountryList[index].languages
               for (let ind = 0; ind < detailLanguagesList.length; ind++) {
                if (detailLanguagesList[ind].name === lanList[i]) {
                    languagesGroupFilter.push(filteredCountryList[index]);   
               
                   
                   }
               }
               
           }
            let countryLanguages = {group:lanList[i],countries:languagesGroupFilter}
            lanReturn.push(countryLanguages)
        }
    
        return lanReturn

    }
    return filteredCountryList
}

const CountrySearchContainer = props => {
    const {data , loading,error} = useQuery(ALL_COUNTRY);
    const [renderCountries,setRenderCountries] = useState([])
    const [groupByValue, setgroupByValue] = useState('Continents');
    const [searchCountries,setSearchCountries] = useState('');


    const handleChange = (event) => {
      setgroupByValue(event.target.value);

      const filterList = filterCountries(searchCountries,countrylist,event.target.value)
      setRenderCountries(filterList)  
    };
    
    const searchButton = () =>{
        const filterList = filterCountries(searchCountries,countrylist,groupByValue)
        setRenderCountries(filterList)  
    }
 
    
   
    if(loading){
      return <div>
  
      </div>
    }
    if (error){
      return <p>Error en data</p>
    } 
    const countrylist = data.countries
    
    function onKeyUpValue(event) {

        const filterList = filterCountries(event.target.value,countrylist,groupByValue)
        setSearchCountries(event.target.value)
        setRenderCountries(filterList)
        
    }
   
    
    return ( <Box sx={{ mt: 2}} >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Countries"
        inputProps={{ 'aria-label': 'Search Countries' }}
        onKeyUp = {(event) =>{
            onKeyUpValue(event)
        }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={searchButton}>
        <SearchIcon />
      </IconButton>

          <h2>Group By</h2>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel value="Continents" onChange={handleChange} control={<Radio/> } label="Continents" />
        <FormControlLabel value="Languages" onChange={handleChange} control={<Radio />} label="Languages" />
      </RadioGroup>
      


        <Grid container spacing={2}>
            {renderCountries.length> 0?(renderCountries.map(filteredCountry =>(
            
            <CountryCardGroup groupCountries={filteredCountry}></CountryCardGroup>
               
           )
               
           )):(
             
               <h2> Can't Find any Country, please search Another</h2>
           )
         } 
             
        </Grid>
       
    </Box>)
     
}

export default CountrySearchContainer;