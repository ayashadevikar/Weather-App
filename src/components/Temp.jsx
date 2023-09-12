import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';



const Temp = () => {

   const [city, setCity] = useState([]);
   const [search, setSearch] = useState("");

   const apikey= `8095f617db3fe7d3bcd878c72b7fa648`;

   const fetchWeatherData = async (e)=> {
     e.preventDefault();
     if(search === ""){
      alert("Enter any City Name")
      return;
 }
   
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apikey}`);
          console.log(data);
          // setCity(data);
          
          const city = data
          setCity(city);
       
    }

useEffect(() => {
     
},[])

  return (
    <>
       <div className='border-2 border-black bg-cyan-100 w-[40vw] h-[70vh] flex flex-col gap-y-10 justify-center items-center m-auto '>
            <h1 className='text-3xl font-bold'>Weather App</h1>
          
              <form>
           
             
                 <input className='border-2  p-2 rounded-lg' type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Enter any City Name'/>
                  <button onClick={fetchWeatherData} className='border-2 p-2 px-4 rounded-lg bg-stone-400 hover:bg-stone-500 hover:text-white'>Search</button> 
          
              
                
                </form>   
              
           
          <WeatherDetails city={city}/>
       
       </div>
    </>
  )
}

export default Temp



