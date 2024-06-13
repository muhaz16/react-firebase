import '../App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import About from './About';
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from '../FirebaseConfig';
import Home from './Home';

function App() {

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      if (user) {
        //User is signed in
        const uid = user.uid;
      } else {
        // User is signed out
        console.log("user is logged out");
      }
    });
  }, [])

  return (
    <>
    {/* */}
      <Router>
        <Routes>

              {/* This route is for Login component with exact path "/", in component props we passes the imported component */}
              <Route 
                exact path="/" 
                element={<Login />}
                />

              {/* This route is for Sing Up component with exact path "/SignUp", in component props we passes the imported component */}
              <Route 
                path="/SignUp"
                element={<SignUp />}
                />

              {/* This route is for Sing Up component with exact path "/About", in component props we passes the imported component */}
              <Route 
                path="/About"
                element={<About />}
                />
              <Route 
                path="/About"
                element={<About />}
              />
              <Route
                path='/Home'
                element={<Home />}
              />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;


// flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0