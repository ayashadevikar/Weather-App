import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Temp = () => {

   const [city, setCity] = useState({});
   const [search, setSearch] = useState("");

   const fetchWeatherData = async (e)=> {
     e.preventDefault();

   
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=apikey`);
          console.log(data);
          setCity(data.main);
          // setCity(city);
       
    }

useEffect(() => {
  //  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8095f617db3fe7d3bcd878c72b7fa648`)
},[search])
//   useEffect( () => {
//      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8095f617db3fe7d3bcd878c72b7fa648')
//   },[search])

  return (
    <>
       <div className='border-2 border-black w-96 h-[70vh] flex flex-col justify-center items-center m-auto '>
            <h1>Weather App</h1>
            <form>
                 <input className='' type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Enter any City Name'/>
                  <button onClick={fetchWeatherData}>Search</button> 
            </form>

      <div>
         <h1>{city.name}</h1>
         <p>{city.temp}</p>
         <p>{city.humidity}</p>
         <p>{city.temp_max}</p>
         <p>{city.temp_min}</p>
     </div>
           
           
       </div>


       {/* {
          
               city.map((i)=> (
                   <weather name={i.name}  key={i.id} />
               ))
            
       } */}
    </>
  )
}

export default Temp



