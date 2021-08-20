import React, { useState } from 'react'


const Button = ({handleClick, title}) => <button onClick={handleClick}>{title}</button>

const Title = ({title}) => <h1>{title}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])

  const handleClick = () => {
    const select = Math.random() * (anecdotes.length - 1);
    setSelected(Math.round(select));
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1;
    setVotes(newVotes);
  }

  const getMostVoted = () => {
    let maxValue = 0;
    let index = 0;
    const newVotes = [...votes]
    newVotes.forEach((e, i) => {
      if (e > maxValue) {
        maxValue = e;
        index = i;
      }
    })
    return anecdotes[index];
  }

  return (
    <div>
      <Title title="Anecdote of the day"></Title>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p> 
      <div>
      <Button handleClick={handleVote} title='Vote'></Button>  
      <Button handleClick={handleClick} title='Next Anecdote'></Button>  
      </div>
      <Title title="Anecdote with most votes"></Title>
      {getMostVoted()}
    </div>
   

  )
}

export default App