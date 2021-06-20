import React, { useState } from 'react'
import Button from './Button'

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

  const [selected, setSelected] = useState(0)
  const [selectedAnecdote, setSelectedAnecdote] = useState(anecdotes[selected])

  // inclusive min, exclusive max.
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)

  const setSelectedRandom = (arr) => () => {
    setSelected(getRandomInt(0, arr.length))
    setSelectedAnecdote(anecdotes[selected])
  }

  return (
    <div>
      {selectedAnecdote} <br />
      <Button text="next anectode" handleClick={setSelectedRandom(anecdotes)} />
    </div>
  )
}

export default App