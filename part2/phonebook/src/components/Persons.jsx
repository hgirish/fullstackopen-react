const Persons = (props) => {
    return (
        <ul>
        {props.personsToShow.map(person => <li 
        key={person.name}>
            {person.name} {person.number}
            <button onClick={() => props.handleDelete(person.id, person.name)}>delete</button>
            </li>)}
       </ul> 
    )
}

export default Persons