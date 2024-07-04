
const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} /> )}
     
      </div>
    )
    }

    const Part = (props) => {
        return (
          <p>{props.part} {props.exercises}</p>
        )
      }

      const Total = (props) => {
        return <strong>total  of  {props.parts.reduce((acc,cv)=> acc + cv.exercises, 0)} exercises</strong>
      }

      
const Course = ({course}) => {
    return (
    <div>
    <Header course={course.name} />
     <Content parts={course.parts} />
     <Total parts={course.parts} />   
   </div>
    )
  }
  export default Course