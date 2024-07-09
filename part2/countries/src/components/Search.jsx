const Search = (props) => {

    return (
        <div>find countries 
        <input value={props.searchTerm} onChange={props.handleSearchClick} />
        <div>{props.message}</div>
      </div>
    )
}

export default Search 