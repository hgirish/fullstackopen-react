const CountryList = ({filteredCounties, handleShowClick}) => {
    return (
        
     <div>
     {filteredCounties !== null && filteredCounties.map(c => <li key={c.cca2}>{c.name.common} <button onClick={() => handleShowClick(c.name.common)}>show</button></li>
     )}
    </div>
    )
}

export default CountryList