import React, { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.count} </p>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  return (
    <div>
      <Part name={parts[0].name} count={parts[0].exercises} />
      <Part name={parts[1].name} count={parts[1].exercises} />
      <Part name={parts[2].name} count={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  return (
    <p>Number of exercises {
      parts[0].exercises +
       parts[1].exercises + parts[2].exercises} </p>
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
      },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;
