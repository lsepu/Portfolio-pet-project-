import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ProjectConfiguration from "./pages/ProjectConfiguration";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, onAuthStateChanged } from './firebase';
import { login, logout } from "./state/features/userSlice";
import { IState } from "./state/store";

function App() {

  const user = useSelector((state: IState) => state.user.user );

  const dispatch = useDispatch();
  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            //uid: userAuth.uid,
            displayName: userAuth.displayName,
            //photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-config" element={<ProjectConfiguration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
