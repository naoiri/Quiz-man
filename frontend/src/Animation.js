import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown, faFlushed, faDizzy  } from '@fortawesome/free-solid-svg-icons';


function Animation() {

    const [time, setTime] = useState(20);
    return (
        <div>
            {(() => {
                if (time<10) {
                    return (
                        <FontAwesomeIcon icon={faDizzy} className="fa-icons"/>
                    )
                } else if (time<20) {
                    return (
                        <FontAwesomeIcon icon={faFlushed} className="fa-icons"/>
                    )
                } else if (time<30){
                    return (
                        <FontAwesomeIcon icon={faFrown} className="fa-icons"/>
                    )
                } else if (time<40){
                    return (
                        <FontAwesomeIcon icon={faMeh} className="fa-icons"/>
                    )
                } else if (time<50){
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