import { Link } from 'react-router-dom';

const Difficulty = () => {
    return (
        <div>
            <h1>Choose Difficulty</h1>
            <div>
                <Link to="/game">
                    <button className="easyButton">Easy</button>
                </Link>
                <Link to="/game">
                    <button className="hardButton">Hard</button>
                </Link>
                <Link to="/game">
                    <button className="legendary">Legendary</button>
                </Link>
            </div>
        </div>
    )
}

export default Difficulty;