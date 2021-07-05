import React, { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h2>{props.header} </h2>
    </div>
  )
}

const SubHeader = (props) => {
  return (
    <div>
      <h2>{props.subHeader} </h2>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  const [good, neutral, bad] = props.count
  const totalCount = good + neutral + bad

  if (totalCount === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const avg = () => {
    return ((1 * good) + (0 * neutral) + (-1 * bad)) / totalCount
  }

  const percentage = (feedback) => {
    return ((feedback / totalCount) * 100) + " %"
  }

  return (
    <table>
      <tbody>
        <Statistic text={props.title[0]} value={good} />
        <Statistic text={props.title[1]} value={neutral} />
        <Statistic text={props.title[2]} value={bad} />
        <Statistic text="all" value={totalCount} />
        <Statistic text="average" value={avg()} />
        <Statistic text="positive" value={percentage(good)} />
      </tbody>
    </table>
  )
}

const Button = (props) => {

  return (
    <div>
      <button onClick={props.increment[0]} >{props.title[0]} </button>
      <button onClick={props.increment[1]} >{props.title[1]} </button>
      <button onClick={props.increment[2]} >{props.title[2]} </button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header = 'give feedback'
  const subHeader = 'statistics'
  const buttonTitles = ['good', 'neutral', 'bad']

  const increment = [() => setGood(good + 1),
  () => setNeutral(neutral + 1), () => setBad(bad + 1)]

  const counts = [good, neutral, bad]

  return (
    <div>
      <Header header={header} />
      <Button title={buttonTitles} increment={increment} />
      <SubHeader subHeader={subHeader} />
      <Statistics title={buttonTitles} count={counts} />
    </div>
  )
}

export default App;
