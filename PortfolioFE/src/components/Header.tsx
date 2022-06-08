import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { signOut } from "firebase/auth";
import { IUser } from "../state/features/userSlice";

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
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar">
        <Link to="/">About me</Link>
        <Link to="/portfolio-config">Portfolio configuration</Link>
        <Link to="/portfolio">Portfolio</Link>
        {user.email !== "" && user.displayName}
        {user.email !== "" ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={loginWithGoogle}>Login</button>
        )}
      </nav>
    </div>
  );
};

export default Header;
