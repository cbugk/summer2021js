import React from 'react'

const Total = ({ course }) => {
    const sumExercises = (parts) => {
        let sum = 0
        parts.map(part => sum += part.exercises)
        return sum
    }

    return (
        <>
            <p><strong>total of {sumExercises(course.parts)} exercises</strong></p>
        </>
    )
}

export default Total