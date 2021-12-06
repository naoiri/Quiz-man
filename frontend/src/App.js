import Navbar from './Navbar';
import Login from './Login';
import Game from './Game';
import Category from './Category';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Difficulty from './Difficulty';
import Account from './Account';
import Test from './Test';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <div className="content">
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login" >
              <Login />
            </ Route>
            <Route exact path="/category">
              <Category />
            </Route>
            <Route exact path="/difficulty">
              <Difficulty />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/test">
              <Test />
            </Route>

          </Switch>
          
        </div>   
      </div>
    </Router>
  );
}

export default App;
