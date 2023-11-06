import React from 'react'

const WeatherDetails = ({city}) => {
  return (
    <>
     {
   
      <div className='grid grid-cols-2 gap-2 gap-x-30'>
     
         <h1>City Name: {city?.name}</h1>
         <p>Description: {city?.weather?.[0]?.description}</p>
         <p>Temp: {city?.main?.temp}</p>
         <p>Humidity: {city?.main?.humidity}</p>
         <p>Max_Temp: {city?.main?.temp_max}</p>
         <p>Min_Temp: {city?.main?.temp_min}</p>
       
     
       </div> 
       
        } 
    </>
  )
}

export default WeatherDetails
