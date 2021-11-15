import { Link } from 'react-router-dom';

const Home = () => {

    return ( 
        <div className="home" style={{
            fontSize: "30px",
            marginBottom: "10px"
        }}>HOME Component!
          <p>Hello från Naoya.This is under "content" tag</p>
          <h1>Welcome to Quizman!</h1>
          <Link to="/category">
            <button className="startButton">Start the game</button>
          </Link>
        </div>
    );
}
 
export default Home;