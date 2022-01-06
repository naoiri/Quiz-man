import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown, faFlushed, faDizzy  } from '@fortawesome/free-solid-svg-icons';


function Animation() {
    return (
        <div>
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