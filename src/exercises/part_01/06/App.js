import React, { useState } from 'react'
import Button from './Button'
import Title from './Title'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = (value) => setGood(good + value)
  const addToNeutral = (value) => setNeutral(neutral + value)
  const addToBad = (value) => setBad(bad + value)

  return (
    <div>
      <Title text={"give feedback"} />
      <Button text={"good"} handleClick={() => addToGood(1)} />
      <Button text={"neutral"} handleClick={() => addToNeutral(1)} />
      <Button text={"bad"} handleClick={() => addToBad(1)} />

      <Title text={"statistics"} />
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad}
      </p>
    </div>
  )
}

export default App