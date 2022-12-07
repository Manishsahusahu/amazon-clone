import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
   const [{ user }, dispatch] = useStateValue();

   useEffect(() => {
      // calls all effect under this whenever web app re-renders
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            // user logged in
            dispatch({ type: "SET_USER", user: authUser });
         } else {
            // user logged out
            dispatch({ type: "SET_USER", user: null });
         }
      });
      return () => {
         unsubscribe();
      };
      // eslint-disable-next-line
   }, []);
   console.log(user);
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Header /> <Home />
                  </>
               }
            ></Route>
            <Route
               path="/login"
               element={
                  <>
                     <Login />
                  </>
               }
            ></Route>
            <Route
               path="/checkout"
               element={
                  <>
                     <Header /> <Checkout />
                  </>
               }
            ></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
