import React, { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'
import Title from './Title'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [lastFeedbackId, setLastFeedbackId] = useState(0)

  const addToGood = (value) => {
    setGood(good + value)
    setLastFeedbackId(1)
  }
  const addToNeutral = (value) => {
    setNeutral(neutral + value)
    setLastFeedbackId(2)
  }
  const addToBad = (value) => {
    setBad(bad + value)
    setLastFeedbackId(3)
  }

  return (
    <div>
      <Title text={"give feedback"} />
      <Button text={"good"} handleClick={() => addToGood(1)} />
      <Button text={"neutral"} handleClick={() => addToNeutral(1)} />
      <Button text={"bad"} handleClick={() => addToBad(1)} />

      <Title text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} lastFeedbackId={lastFeedbackId} />
    </div>
  )
}

export default App