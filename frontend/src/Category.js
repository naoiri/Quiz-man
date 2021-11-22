import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <h1>Choose Category</h1>
            <div>
                <Link to="/difficulty" >
                    <button className="filmButton">Film</button>
                </Link>
                <Link to="/difficulty" >
                    <button className="sportButton">Sport</button>
                </Link>
                <Link to="/difficulty" >
                    <button className="biologi">Biologi</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Category;