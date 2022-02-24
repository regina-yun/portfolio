import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route, 
  Redirect,
} from 'react-router-dom';

import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <>
      <div className='title-card'>
        <h1 className='title-card-heading'>Regina Yun Mei Lin</h1>
      </div>

      <div className='main-container'>
        <Router>
          <div className='nav-bar'>
            <div className="nav-link">
              <Link to='/'>Home</Link>
            </div>

            <div className='nav-link'>
              <Link to='/portfolio'>Portfolio</Link>
            </div>
              
            <div className='nav-link'>
              <Link to='/about'>About</Link>
            </div>

            <div className='nav-link'>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='content-container'>
            <Switch>
              <Route path='/portfolio'>
                <Portfolio/>
              </Route>
              <Route path='/about'>
                <About/>
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
