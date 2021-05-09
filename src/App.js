import './App.css';
import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout'
import Login from './Login';
import Payment from './Payment'
import Orders from './Orders'
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51IoahTDUpxReBCoPkNePbeITM8c6sZ6DVapktk4sroglD2wpmW40mJC08tj9Be53ReGJJ9yYlSDETxhOxGobH5R700bdmuTULe')

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just looged in or was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //  BEM
<Router>
    <div className="App">
    
      <Switch>
      <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
    </Switch>
  </div>
</Router>
  );
}

export default App;
