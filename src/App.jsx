const Header = (props) =>{

  return(
    <>
      <h1>{props.title.name}</h1>
    </>
  )
}
const Content = (props) =>{
  return(
    <>
      <Part case = {props.group.parts[0]} />
      <Part case = {props.group.parts[1]} />
      <Part case = {props.group.parts[2]} />
    </>
  )
}
const Part = (props) =>{
  return(
    <>
      <p>{props.case.name} {props.case.exercises}</p>
    </>
  )
}
const Total = (props) =>{

  return(
    <>
      <p>Number of exercises {props.group.parts[0].exercises + props.group.parts[1].exercises + props.group.parts[2].exercises} </p>
    </>
  )

}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header title = {course}/>
      
      <Content group = {course} />
      
      <Total group = {course} />
    </>
  )
}

export default App