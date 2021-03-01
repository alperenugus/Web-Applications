import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (

    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path='/' exact={true}>
            <Home/>
          </Route>
          <Route path='/topics'>
            <Topics/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
