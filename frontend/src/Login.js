import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
      <div className="header">
        <h1>Welcome to the Gallows!</h1>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Password"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/category" >
            <button type="button" className="btn">
              Login
            </button>
          </Link>
        </div>
      </div>
     );
}
 
export default Login;