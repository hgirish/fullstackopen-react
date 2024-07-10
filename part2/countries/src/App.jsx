import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import Country from './components/country'
import Search from './components/Search'
import CountryList from './components/CountryList'

function App() {
  

  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [filteredCounties, setFilteredCountries] = useState([])
  const [country, setCountry] = useState({})


  useEffect(() => {
    axios.get(`${baseUrl}all`)
    .then(response => {
      setCountries(response.data)
    })

  }, [])
  
  const handleSearchClick = (event) => {
    const searchTerm = event.target.value 
    setSearch(searchTerm.toLowerCase())
    if (searchTerm === '' || searchTerm === null) {
      setMessage('')
      setFilteredCountries([])
      return
    }
  
   let result = search.length > 0 ? countries.filter(c => c.name.common.trim().toLowerCase() === (searchTerm.trim())) : []
   if (result.length === 0){
    result = search.length > 0 ? countries.filter(c => c.name.common.trim().toLowerCase().includes(searchTerm.trim())) : []
   }
 


    if (result.length === 1){
      setCountry(result[0])

    setFilteredCountries(null)
   

    setMessage('')
 
   
    //setFilteredCountries(result)
  }    else if (result.length > 1 && result.length <= 10) {
    setMessage('')
    setFilteredCountries(result)
    setCountry({})
    
   } else    if (result.length > 10) {
    setFilteredCountries(null)
     setMessage('Too many matches, specify another filter')
     setCountry({})
   }

   
  }
  const handleShowClick = (name) => {
    console.log('handleShowclick name: ', name)
    const country = countries.filter(c=> c.name.common === name)[0]
    setCountry(country)
   }

  return (
    <div>
      <h2>Countries</h2>
      <Search searchTerm={search} handleSearchClick={handleSearchClick} message={message} />

    <CountryList filteredCounties={filteredCounties} handleShowClick={handleShowClick} /> 
    
    <Country country={country} />
    </div>
  )
}

export default App
