import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
function App() {
  const user = false;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
