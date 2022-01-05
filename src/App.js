import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './Firebase/Firebase';
import Payment from './Component/Payment/Payment';
import { loadStripe } from '@stripe/react-stripe-js'

// const promise = loadStripe()

function App() {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="App">

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/payment"
              element={<Payment />}
            />
          </Routes>
      
    </div>
  );
}

export default App;
