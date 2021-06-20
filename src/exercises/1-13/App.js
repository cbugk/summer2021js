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
  const [visibleAnecdote, setVisibleAnecdote] = useState(anecdotes[selected])
  const [anecdoteVotes, setAnecdoteVotes] = useState(new Array(anecdotes.length).fill(0))
  const [visibleVote, setVisibleVote] = useState(anecdoteVotes[selected])

  // inclusive min, exclusive max.
  const generateRandomIntGetter = (min, max) => () => Math.floor(Math.random() * (max - min) + min)
  const getRandomInt = generateRandomIntGetter(0, anecdotes.length)

  const switchToRandomAnecdote = () => {
    const index = getRandomInt()
    setVisibleAnecdote(anecdotes[index])
    setVisibleVote(anecdoteVotes[index])
    setSelected(index)
    console.log(anecdoteVotes)
    console.log(index)
  }

  const incrementSelectedVote = () => {
    const clone = [...anecdoteVotes]
    clone[selected] += 1
    setVisibleVote(clone[selected])
    setAnecdoteVotes(clone)
    console.log(clone)
    console.log(selected)
  }

  return (
    <div>
      {visibleAnecdote} <br />
      has {visibleVote} votes <br />
      <Button text="vote" handleClick={incrementSelectedVote} />
      <Button text="next anectode" handleClick={switchToRandomAnecdote} />
    </div>
  )
}

export default App