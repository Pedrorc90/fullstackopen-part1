import React from 'react'


const Header = ({course}) => <h1>{course.name}</h1>
const Content = ({ parts }) => <div>{parts.map(p => <Part key={p.id} title={p.name} ex={p.exercises}></Part>)}</div>
const Part = (props) => <p>{props.title} {props.ex}</p>
const Total = ({ parts }) => <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>


const Course = ({course}) => {
    return (
      <div>
        <Header course={course}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </div>
    )
  }


export default Course;