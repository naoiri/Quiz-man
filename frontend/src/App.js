
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Difficulty from './Difficulty';
import Game from './Game';
import CreateUser from './CreateUser';
import Profile from "./Profile"
import CreateQuestion from "./CreateQuestion";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login" >
              <Login />
            </ Route>
            <Route exact path="/createuser">
              <CreateUser />
            </Route>
            <Route exact path="/difficulty">
              <Difficulty />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/createquestion">
              <CreateQuestion />
            </Route>
          </Switch>
          
        </div>   
      </div>
    </Router>
  );
}

export default App;
