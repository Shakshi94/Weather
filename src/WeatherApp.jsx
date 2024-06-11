import Search from "./Search"
import Infobox from './InfoBox'
import { useState } from "react";
export default function WeatherApp(){

     let [weatherInfo ,setWeatherInfo] = useState({         
        city: "Vadodara",
        feel_likes: "36.21",
        humidity: "50",
        temp: "32.96",
        temp_max: "32.96",
        temp_min: "32.96",
        weather: "few clouds"
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <>
        <h2>Search for the Weather</h2>
        <Search  updateInfo = {updateInfo}/>
        <Infobox info = {weatherInfo}/>
        </>
    )
}