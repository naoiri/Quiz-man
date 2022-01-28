import { useState, useEffect } from "react"

const Timer = () => {
    const [counter, setCounter] = useState(50);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="App">
            <div>Time left: {counter}</div>
        </div>
    );
}

export default Timer;