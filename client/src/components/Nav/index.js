import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Book Search 
      </a>
      <Link style={styles.link} to="/search">Search</Link>
        <Link style={styles.link} to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;

const styles = {
  link: {
    color: "white",
    padding: "10px",
  }
}