import React, { useEffect, useState } from "react";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";

import { logout, login, selectUser } from "./redux/user/user.reducer";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import TvShows from "./components/TvShows/TvShows";
import Movies from "./components/Movies/Movie";
import Mylist from "./components/Mylist/Mylist";
import Nav from "./components/Nav/Nav";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          dispatch(
            login({
              uid: user.uid,
              email: user.email,
            })
          );
        } else {
          dispatch(logout());
        }
      });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/mylist" element={<Mylist />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
