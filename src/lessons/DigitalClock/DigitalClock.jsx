import {useState, useEffect} from "react"
import "./DigitalClock.css"
function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = String(time.getHours()).padStart(2, '0')
        const minutes = String(time.getMinutes()).padStart(2, '0')
        const seconds = String(time.getSeconds()).padStart(2, '0')

        const meridiem = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12

        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return (
        <>
            <h1 className="clock-title">Digital Clock</h1>
            <div className="clock-container">
                
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
        
    )
}

export default DigitalClock