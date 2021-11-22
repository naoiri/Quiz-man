import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Navbar Component!</h1>
            <div className="links">
                <Link to="/">Home for the text</Link>
                <Link to="/game" style={{
                    color: "white",
                    backgroundColor: "#f1356d" ,
                    borderRadius: "8px"
                }}> New content</Link>
            </div>
        </nav>
    );
}

export default Navbar;
