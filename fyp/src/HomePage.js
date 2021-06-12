import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import ImgMediaCard from "./Products";
import TelegramIcon from "@material-ui/icons/Telegram";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
function HomePage() {
  return (
    <div className="home">
      <div className="home1">
        <h1>My Market</h1>

        <Link>
          <h4>Apperal</h4>
        </Link>
        <Link>
          <h4>Sprots and Entertainment</h4>
        </Link>
        <Link>
          <h4>Lights And Lightening</h4>
        </Link>
        <Link>
          <h4>Food Beverages</h4>
        </Link>
        <Link>
          <h4>Home And Garden</h4>
        </Link>
        <Link>
          <h4>Bedding</h4>
        </Link>
      </div>
      <div>
        <h1>New Arrivals</h1>
        <div className="products">
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
        </div>
        <h1>Top Rated Products</h1>
        <div className="products">
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
        </div>
      </div>
      <h1>Stores for You</h1>
      <div className="products">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <h1>Shoes And Accessories</h1>
      <div className="products">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <div className="products">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <h1>Apparels</h1>
      <div className="products">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <div className="products">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <h1>Just for you</h1>
      <div className="products">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
      <div className="footer">
        <TelegramIcon />
        <h1>Signup for news letter</h1>
        <input type="text"></input>
        <SearchIcon />
        <FacebookIcon />
        <h4>Facebook</h4>
      </div>
    </div>
  );
}

export default HomePage;
