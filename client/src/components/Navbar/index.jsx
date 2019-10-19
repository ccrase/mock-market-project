// src/components/NavBar.js
//the component renders two buttons, depending on if the user 
//is logged in or out. 

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <Link to="/">Home</Link>&nbsp;
      {/* Links that user has access to once they are authenticated */}
      {isAuthenticated && (
        <span>
          <Link to="/portfolio">Portfolio</Link>
        </span>
      )}
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      <Link to="/research">Research</Link>


    </div>
  );
};

export default NavBar;