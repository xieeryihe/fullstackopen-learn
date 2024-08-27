import { useState, useEffect } from 'react'
import axios from 'axios'

const DetailedCountryInfo = ({country}) => {
  return (
    <div>
      <h2>country.name.common</h2>
    </div>
  )
}

const CountryDisplay = ({countries}) => {
  const len = countries.length
  if (len === 1) {

  }

}

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, [])

  // set 操作是异步的，使用 useEffect 来更新 filteredCountries
  useEffect(() => {
    const countries = allCountries.filter(country => 
      country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
    setFilteredCountries(countries);
    console.log(countries);
  }, [countryFilter])

  const onCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)  
  }

  return (
    <div>
      find countries <input value={countryFilter} onChange={onCountryFilterChange}/>
      <CountryDisplay countries={filteredCountries}/>
    </div>
  )
}

export default App