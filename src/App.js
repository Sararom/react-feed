import React from 'react';
import './bootstrap.min.css';
import './App.css';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

import Register from './components/Register'
import Login from './components/Login'
import ReactFeed from './components/Feed/ReactFeed'
import Splash from './components/Splash';
import NewPost from './components/Feed/NewPost';
import NavBar from './components/Feed/NavBar';
import Profile from './components/Feed/Profile'


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Splash>
            <Switch>
              <Route exact path="/newPost" component={NewPost} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/" component={ReactFeed}/>
            </Switch>
          </Splash>
        </Switch>
      </Router>
    </>
  );
}

export default App;
