import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import AddPosts from './pages/AddPost';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/posts">posts</Link></li>
            <li><Link to="/add">add</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/posts">
            <AppPosts/>
            <Route exact path="/add">
              <AddPosts />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
