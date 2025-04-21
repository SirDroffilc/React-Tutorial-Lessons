import {useState} from "react"

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <p className="count-display"> {count}</p>

            <div className="counter-btn-container">
                <button className="counter-btn" onClick={increment}>INCREMENT</button>
                <button className="counter-btn" onClick={decrement}>DECREMENT</button>
                <button className="counter-btn" onClick={reset}>RESET</button>
            </div>
            
        </div>
    )
}

export default Counter

