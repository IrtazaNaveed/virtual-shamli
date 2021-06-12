import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <h1>Virtual Shamli</h1>
          <h4>ALL In One Stores</h4>
        </Link>

        <Link to="/">
          <h2>HOME</h2>
        </Link>
        <Link to="/shop">
          <h2>SHOP</h2>
        </Link>

        <Link to="/promotion">
          <h2>PROMOTIONS</h2>
        </Link>
        <Link to="/special">
          <h2>SPECIAL</h2>
        </Link>
        <Link to="/vendor">
          <h2>VENDOR</h2>
        </Link>
        <Link to="/register">
          <h2>LOGIN/REGISTER</h2>
        </Link>
        <Link to="/register">
          <button>Become VENDOR</button>
        </Link>
      </div>
      <div className="navbar2">
        <button>All Catergories</button>
        <input type="text"></input>
        <SearchIcon />
      </div>
    </nav>
  );
}

export default NavBar;
