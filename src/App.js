import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store';
import { listenToAuth } from './actions/auth';
import { listenToPosts, listenToWishList } from './actions/posts';
import { Route, Switch } from "react-router-dom";
import Posts from './components/Posts';
import NavBar from './components/NavBar';

class App extends Component {
  componentWillMount(){ 
    // Check if a user is logged in 
    store.dispatch(listenToAuth());
    // Fetch the post from the database
    store.dispatch(listenToPosts());
  }
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default App;

{/* <Route exact path="/login" component={Login} />
<Route exact path="/edit/:id" component={EditPost} />
<Route exact path="/register" component={Register} />
<Route path='/profile/:uid' component={Profile} />
<Route path="/posts/:id" component={ItemPage} />
<Route path="/message/:qid?/:uid?/:toid?" component={Message} /> */}