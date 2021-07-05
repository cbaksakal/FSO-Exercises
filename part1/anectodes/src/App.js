import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const n = anecdotes.length
  const [selected,setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(n).fill(0))
  
  // console.log("array count: ", n)

  const refToSetSelected = () => {
    let rand = Math.floor(Math.random() * n)
    setSelected(rand)
    console.log("random num: ", rand)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const indexOfMax = () => {
    let max = votes[0]
    let maxIndex = 0
    for (let i = 1; i < n; i++) {
      if (votes[i] > max) {
        max = votes[i]
        maxIndex = i
      }
    }
    return maxIndex
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote} >vote</button>
      <button onClick={refToSetSelected} >next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[indexOfMax()]} </p>
      <p>has {votes[indexOfMax()]} votes</p>
    </div>
  )
}

export default App;
