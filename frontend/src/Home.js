import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return ( 
        <div className="wrapper" style={{fontSize: '48px',
                                         fontWeight:900,
                                         textTransform: 'uppercase',
                                         fontStyle: 'italic',
                                         fontSize: '3rem',
                                         lineHeight: 0.8,}}>
          <div>
          Welcome to Quizman!
          </div>
          <div>
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
          </div>
        </div>
    );
}
 
export default Home;