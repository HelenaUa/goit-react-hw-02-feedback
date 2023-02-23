
export const FeedbackOptions = ({addGood, addNeutral, addBad}) => {
    return (
        <div>
            <button type="button" onClick={addGood}>Good</button>
            <button type="button" onClick={addNeutral}>Neutral</button>
            <button type="button" onClick={addBad}>Bad</button>
        </div>
    )
}