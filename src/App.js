
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Journal  from './components/Journal';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
      <Router>
      <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/journal">
            <Journal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
