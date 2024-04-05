import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [err,setError]=useState(false);
    const API_URl="https://api.openweathermap.org/data/2.5/weather";
    const API_key="5a1fcc7a81bdc3e4c86ad3546b15f0d4";
   let getData=async()=>{
     try{
        let response= await fetch(`${API_URl}?q=${city}&appid=${API_key}&units metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
          city:city,
          temp:jsonResponse.main.temp,
          tempMin:jsonResponse.main.temp_min,
          tempMax:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
          feelslike:jsonResponse.main.feels_like,
          weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
     }
     catch(err){
        throw err;
     }
   };
    let handleChange=(event)=>{
       setcity(event.target.value);
    };
    let handleSubmit=async(event)=>{
       try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newInfo=await getData();
        updateInfo(newInfo);
       } catch(err){
        setError(true);
       }
    };
 return(
    <div className="Search">
        <h2>Search For Weather</h2>
         <form onSubmit={handleSubmit}>
         <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
           <br /> <br />
           <Button variant="outlined" type="submit" onClick={getData}>Search</Button>
           {err && <p style={{color:"red"}}>No Such Place Exist!</p>}
         </form>
    </div>


 );
} 