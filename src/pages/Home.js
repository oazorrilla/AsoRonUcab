import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/dance.png";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Dance Estudio AleDance </h1>
        <p> Cuenta una historia con tu cuerpo y siente el ritmo </p>
        <Link to="/menu">
          <button> Cupo </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;