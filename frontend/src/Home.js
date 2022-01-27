import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return ( 
        <div style={{fontSize: '48px',
                                         fontWeight:900,
                                         textTransform: 'uppercase',
                                         fontStyle: 'italic',
                                         fontSize: '3rem',
                                         lineHeight: 0.8,
                                         margin: '200px',
                                         height: '100px'}}>
          <div>
          Welcome to Quizman!
          </div>
          <div>
          <Link to="/login">
            <button className="button">Start!</button>
          </Link>
          </div>
        </div>
    );
}

 
export default Home;