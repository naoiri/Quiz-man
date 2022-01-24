import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return ( 
        <div className="wrapper" style={{
            fontSize: "30px",
        }}>
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