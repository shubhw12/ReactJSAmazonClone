import React from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from './Components/Firebase';

function App() {

  const[  {user} , dispatch ] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/home">
        <Header/>
        <Home />
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* This is our default case */}
        <Route path="/">
          <Header/>
        <Home />
        
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
