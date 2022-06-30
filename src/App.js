import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import AddPost from './pages/AddPost';

function App() {
  return (
    <div >
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
            </Route>
            <Route exact path="/add">
              <AddPost />
            </Route>
            <Route exact path="/edit/:id">
              <AddPost />
            </Route>
        </Switch>
      </Router>x§
    </div>
  );
}

export default App;
