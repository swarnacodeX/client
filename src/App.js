import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Signin from "./components/Signin";
import UserRegistration from "./components/UserRegistration";

import Explore from "./components/Explore";
import Profile from "./components/profile";
import SellBooks from "./components/SellBooks";

import { supabase } from "./supabaseClient";

const App = () => {
  const [session, setSession] = useState(null);

  const getSession = async () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  };

  useEffect(() => {
    getSession();
  }, [supabase]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              session ? <Navigate replace to={"/Explore"} /> : <Register />
            }
          ></Route>
          <Route
            path="/Signin"
            element={
              session ? <Navigate replace to={"/Explore"} /> : <Signin />
            }
          ></Route>
          <Route
            path="/UserRegistration"
            element={
              session ? (
                <Navigate replace to={"/Explore"} />
              ) : (
                <UserRegistration />
              )
            }
          ></Route>

          <Route
            path="/Explore"
            element={<Explore session={session} />}
          ></Route>
          <Route
            path="/Profile"
            element={<Profile session={session} />}
          ></Route>
          <Route
            path="/SellBooks"
            element={<SellBooks session={session} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
