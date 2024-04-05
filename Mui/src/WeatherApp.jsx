import { useState } from "react";
import Infobox from "./Infobox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let[weatherinfo,setweatherinfo]=useState({
        city:"delhi",
        feelslike:24.84,
        temp:28.97,
        tempMin:24.42,
        tempMax:24.67,
        humidity:32.23,
        weather:"haze",
    });
    let updateInfo=(result)=>{
        setweatherinfo(result);
    }
    return(
       <div style={{textAlign:"center"}}>
         <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <Infobox info={weatherinfo}></Infobox>
       </div>

    );
}