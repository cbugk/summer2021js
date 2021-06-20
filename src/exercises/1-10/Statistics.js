import Statistic from "./Statistic"

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
    return (props.lastFeedbackId)
        ? (
            <p>
                <Statistic text="good" value={props.good} />
                <Statistic text="neutral" value={props.neutral} />
                <Statistic text="bad" value={props.bad} />
                all {sumAll()} <br />
                average {avgAll()} <br />
                positive {rateGood() * 100}% <br />
            </p>
        )
        : (
            <p>
                No feedback given
            </p>
        )

}

export default Statistics