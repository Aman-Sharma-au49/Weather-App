import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function Searchbox({wInfo}){
    let[city,setcity]=useState("");
    let[error,seterror]=useState("");
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="bb205e233dd8e52525ff5048c8f469ef"
     
    let WeatherApp = async() =>{
        try{
     let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse=await response.json();
     console.log(jsonResponse);

     let detail={
     name: jsonResponse.name,
     feelLikes: jsonResponse.main.feels_like,
     temp: jsonResponse.main.temp,
     tempmin: jsonResponse.main.temp_min,
     tempmax: jsonResponse.main.temp_max,
     humidity: jsonResponse.main.humidity,
     pressure: jsonResponse.main.pressure,
     }
     console.log(detail);
    return detail;
        }catch(err){
        throw(err);
        }
    };

let handleChange =(event) => {
    setcity(event.target.value)
};
let handleSubmit = async(event)=>{
    try{
event.preventDefault();
console.log(city);
setcity("");
let newinfo = await WeatherApp();
wInfo(newinfo);
seterror("");
    }catch(err){
        seterror(1);
    }
};

    return(
        <div className="SearchBox" >
        <h2>Search for the weather</h2>
        <form onSubmit={handleSubmit}>
    <TextField id="city" label="city" variant="outlined" value={city} onChange={handleChange} required/><br /> <br />
    <Button variant="contained" color="success" type='submit'>Search</Button>
    {error && <p style={{ color: "red" }}>Sorry, couldn't find weather information for the specified city.</p>}

    </form>
    </div>
    )
}








