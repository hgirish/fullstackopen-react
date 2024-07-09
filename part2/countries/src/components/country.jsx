import { useEffect, useState } from "react"
import axios from "axios"
const Country = ({country}) => {
    const [weather, setWeather] = useState({})
    
    
      
  const baseIconUrl = 'https://openweathermap.org/img/wn/'
    
    useEffect(()=>{
        const api_key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
       const openweathermapApiURl = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&q=`
       const capital = country.capital
       if (capital) {
        axios.get(`${openweathermapApiURl}${country.capital}`)
        .then(response => {
          console.log(response.data)
          setWeather(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    }, [country])

    if (Object.keys(country).length === 0){
        return null
    }
    const iconUrl = `${baseIconUrl}${weather.weather[0].icon}@2x.png`
    const iconDescription = weather.weather[0].description
    const celsiusTemp = Math.floor((weather.main.temp - 273.15),2)
    const fahrenheitTemp = Math.floor(((weather.main.temp - 273.15) * 9/5 + 32), 2)
    return (
        <div>
        <h3>{country?.name?.common}</h3>
        <p>capital {country?.capital}</p>
        <p>area {country.area}</p>
        <p><img src={country?.flags?.png} alt={country.flags.alt} /></p>
   
        <p>Weather in {country?.captial}</p>
        <p>temperature {celsiusTemp} &deg;C  ({fahrenheitTemp} &deg;F)</p>
        <p><img src={iconUrl} alt={iconDescription} title={iconDescription} /></p>
      <p>wind {weather.wind.speed} m/s </p>
         </div>
    )
}

export default Country