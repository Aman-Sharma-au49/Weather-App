
import { useState } from 'react';
import Cardinfo from './Cardinfo';
import Searchbox from './SearchBox';

export default function WeatherApp(){
    let [weatherinfo,setweatherinfo] = useState({
        name: "________",
        feelLikes:"",
        temp: "",
        tempmin: "",
        tempmax: "",
    });

    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }

    return(
        <>

        <Searchbox wInfo={updateinfo}/>
        <br /><br /><br />
    
        <Cardinfo info={weatherinfo}/>
        </>
    )
}