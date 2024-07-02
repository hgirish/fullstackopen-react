const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, You are {props.age} years old.</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
const App = () => {
 const friends = [
  {name: 'Peter', age:4},
  {name: 'Maya', age: 10}
 ];
 
  return (
  <>
    <h1>Greeting</h1>
    <Hello name={friends[0].name} age={friends[0].age} />
    <Hello name={friends[1].name} age={friends[1].age} />
    <Footer />
    </>
)
}

export default App
