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
            <table>
                <tbody>
                    <Statistic text="good" value={props.good} />
                    <Statistic text="neutral" value={props.neutral} />
                    <Statistic text="bad" value={props.bad} />
                    <Statistic text="all" value={sumAll()} />
                    <Statistic text="average" value={avgAll()} />
                    <Statistic text="positive" value={(rateGood() * 100) + "%"} />
                </tbody>
            </table>
        )
        : (
            <p>
                No feedback given
            </p>
        )

}

export default Statistics