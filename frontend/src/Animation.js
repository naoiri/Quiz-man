import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown, faFlushed, faDizzy  } from '@fortawesome/free-solid-svg-icons';


function Animation() {


    const [counter, setCounter] = useState(50);
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>
            <div>Time left: {counter}</div>
            {(() => {
                if (counter<10) {
                    return (
                        <FontAwesomeIcon icon={faDizzy} className="fa-icons"/>
                    )
                } else if (counter<20) {
                    return (
                        <FontAwesomeIcon icon={faFlushed} className="fa-icons"/>
                    )
                } else if (counter<30){
                    return (
                        <FontAwesomeIcon icon={faFrown} className="fa-icons"/>
                    )
                } else if (counter<40){
                    return (
                        <FontAwesomeIcon icon={faMeh} className="fa-icons"/>
                    )
                } else if (counter<50){
                    return (
                        <FontAwesomeIcon icon={faSmile} className="fa-icons"/>
                    )
                }
            })()}

           <h1>This is the animation component!</h1>
            <div >
                <FontAwesomeIcon icon={faSmile} className="fa-icons"/>
                <FontAwesomeIcon icon={faMeh} className="fa-icons"/>
                <FontAwesomeIcon icon={faFrown} className="fa-icons"/>
                <FontAwesomeIcon icon={faFlushed} className="fa-icons"/>
                <FontAwesomeIcon icon={faDizzy} className="fa-icons"/>

            </div>

        </div>
    );
}
export default Animation;