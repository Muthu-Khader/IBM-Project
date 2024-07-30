import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Amazon Prime</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/series">Series</a>

        <a href="#" className="profile">
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Header;
