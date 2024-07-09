const CountryList = ({filteredCounties}) => {
    return (
        
     <div>
     {filteredCounties !== null && filteredCounties.map(c => <li key={c.cca2}>{c.name.common}</li>
     )}
    </div>
    )
}

export default CountryList