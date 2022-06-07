import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {auth, signInWithGoogle } from "../firebase";
import { signOut } from "firebase/auth";

interface IUser {
  user: string;
}

const Header: React.FC<IUser> = ({ user }) => {

  const loginWithGoogle = async () => {
    try {
      const googleUser = await signInWithGoogle();
      console.log(googleUser.user.email);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      reportError({ message });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar">
      <Link to="/">About me</Link>
      <Link to="/portfolio-config">Portfolio configuration</Link>
      <Link to="/portfolio">Portfolio</Link>
      {user!=="" ? <button onClick={logout}>Logout</button> : <button onClick={loginWithGoogle}>Login</button> }
    </nav>
  );
};

export default Header;
