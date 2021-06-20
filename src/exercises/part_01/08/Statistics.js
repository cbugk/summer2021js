const Statistics = (props) => {
    const sumAll = () => (props.good + props.neutral + props.bad)
    const avgAll = () => {
        let sum = sumAll()
        if (sum) return ((props.good - props.bad) / sum)
        else return 0
    }
    const rateGood = () => {
        let sum = sumAll()
        if (sum) return (props.good / sum)
        else return 0
    }
    return (
        <p>
            good {props.good} <br />
            neutral {props.neutral} <br />
            bad {props.bad} <br />
            all {sumAll()} <br />
            average {avgAll()} <br />
            positive {rateGood() * 100}% <br />
        </p>
    )
}

export default Statistics