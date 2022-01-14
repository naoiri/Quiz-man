import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FaRegSmile, FaRegMeh, FaRegFrownOpen, FaRegFlushed, FaRegDizzy} from 'react-icons/fa'

function Animation(props) {

    const [counter, setCounter] = useState(20);

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
                        <FaRegDizzy className="fa-icons" pulse/>
                    )
                } else if (counter <= 20) {
                    return (
                        <FaRegFlushed className="fa-icons" spin/>
                    )
                } else if (counter <= 30) {
                    return (
                        <FaRegFrownOpen className="fa-icons"/>
                    )
                } else if (counter <= 40) {
                    return (
                        <FaRegMeh className="fa-icons"/>
                    )
                } else if (counter <= 50) {
                    return (
                        <FaRegSmile className="fa-icons"/>
                    )
                }
            })()}

        </div>
    );
}

export default Animation;