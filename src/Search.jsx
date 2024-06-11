import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'
import PropTypes from 'prop-types';

export default function Search({updateInfo}){
    let [city , setCity] = useState("");
    let [error, setError] = useState(false);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17cfd029542bd50cbfbeabb885eae254&units=metric`;

let getWeatherInfo = async ()=>{
  try{
        let response = await fetch(url);
        let responseJson = await response.json();
        let result =  {
           city: responseJson.name, 
           humidity: responseJson.main.humidity,
           temp: responseJson.main.temp,
           temp_min: responseJson.main.temp_min,
           temp_max: responseJson.main.temp_max,
           feel_likes:responseJson.main.feels_like,
           weather:responseJson.weather[0].description,
        };
        console.log(result);
        return result;
      }catch(error){
        error.message = "no such place in out api";
        throw error
      }
    }

    let handleInputChange = (event)=>{
       setCity(event.target.value);  
    }

    let handleSubmit = async (event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await  getWeatherInfo()
       updateInfo(newInfo);
      }catch(err){
        setError(true);
      }
    }

    return(
    <>
     
    <div className="search_Box"> 
           <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Search City" variant="outlined" value={city} onChange={handleInputChange}/><br /><br />
            <Button variant="contained" type="submit" style={{marginLeft:"1rem",marginBottom:"1rem"}} onClick={getWeatherInfo}>Search</Button>
             {error && <p style = {{color:"red"}}>No such place exits!</p>}
            </form>
    </div>
   
 
   </>
    )
}

Search.propTypes = {
  updateInfo: PropTypes.string.isRequired
}