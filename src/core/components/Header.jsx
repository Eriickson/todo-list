import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div>
        <Link to="/ping">Ping</Link>
        <Link to="/pong">Pong</Link>
      </div>
    </div>
  );
};

export default Header;
