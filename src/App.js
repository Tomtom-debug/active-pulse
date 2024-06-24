import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import WrongEndpoint from './WrongEndpoint';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* This must be last so that it doesn't match any endpoint */}
            <Route path = '*'> 
              <WrongEndpoint/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;