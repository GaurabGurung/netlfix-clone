import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import Player from "./components/Player/Player";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          setUser(user);
        } else {
          setUser(null);
          console.log("user not logged in");
        }
      });
    return () => unsubscribe();
  }, []);
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
