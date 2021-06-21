import React from 'react'

const Total = ({ parts }) => {
    const sumExercises = (accumulator, part) => accumulator + part.exercises;
    const total = parts.reduce(sumExercises, 0)

    return (
        <>
            <p><strong>total of {total} exercises</strong></p>
        </>
    )
}

export default Total