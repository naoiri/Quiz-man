import React, {useState, useEffect} from "react";
import {FaRegSmile, FaRegMeh, FaRegFrownOpen, FaRegFlushed, FaRegDizzy, FaSkull} from 'react-icons/fa'

function Animation(props) {

    const [counter, setCounter] = useState(30);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="animation-area">
            {props.setValue(counter)}{/* Sends data to parent component(Game.js) */}
            <div className="time">Time left: {counter}</div>
            {(() => {
                if(counter === 0){
                    return (
                        <FaSkull className="skull" />
                    )
                } else if (counter <= 10) {
                    return (
                        <FaRegDizzy className="dizzy" />
                    )
                } else if (counter <= 20) {
                    return (
                        <FaRegFlushed className="flushed" />
                    )
                } else if (counter <= 30) {
                    return (
                        <FaRegFrownOpen className="frown" />
                    )
                } else if (counter <= 40) {
                    return (
                        <FaRegMeh className="meh" />
                    )
                } else if (counter <= 50) {
                    return (
                        <FaRegSmile className="smile" />
                    )
                }
            })()}

        </div>
    );
}

export default Animation;