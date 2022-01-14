import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile, faMeh, faFrown, faFlushed, faTired} from '@fortawesome/free-regular-svg-icons'

function Animation(props) {

    const [counter, setCounter] = useState(10);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="animation">
            {props.setValue(counter)}{/* Sends data to parent component(Game.js) */}
            <div className="time">Time left: {counter}</div>
            {(() => {

                if (counter <= 10) {
                    return (
                        <FontAwesomeIcon icon={faTired} className="fa-icons" />
                    )
                } else if (counter <= 20) {
                    return (
                        <FontAwesomeIcon icon={faFlushed} className="fa-icons"/>
                    )
                } else if (counter <= 30) {
                    return (
                        <FontAwesomeIcon icon={faFrown} className="fa-icons"/>
                    )
                } else if (counter <= 40) {
                    return (
                        <FontAwesomeIcon icon={faMeh} className="fa-icons"/>
                    )
                } else if (counter <= 50) {
                    return (
                        <FontAwesomeIcon icon={faSmile} className="fa-icons"/>
                    )
                }
            })()}

        </div>
    );
}

export default Animation;