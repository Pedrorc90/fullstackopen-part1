import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({ parts }) => {
  
  return (
    <div>
      <Part title={parts[0].name} ex={parts[0].exercises}/>
      <Part title={parts[1].name} ex={parts[1].exercises}/>
      <Part title={parts[2].name} ex={parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.title} {props.ex}</p>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
  
}


const App = () => {
  const course =  {
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
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App