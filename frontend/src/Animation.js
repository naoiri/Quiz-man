import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown, faFlushed, faDizzy  } from '@fortawesome/free-solid-svg-icons';

function Animation() {
    return (
        <div>
           <h1>This is the animation component!</h1>
            <FontAwesomeIcon icon={faSmile}/>
            <FontAwesomeIcon icon={faMeh}/>
            <FontAwesomeIcon icon={faFrown}/>
            <FontAwesomeIcon icon={faFlushed}/>
            <FontAwesomeIcon icon={faDizzy}/>
        </div>
    );
}
export default Animation;