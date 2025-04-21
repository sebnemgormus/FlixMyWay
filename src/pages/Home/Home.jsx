import React, { useState } from "react";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MovieModal from "../../components/MovieModal/MovieModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const heroMovie = {
    title: "Bet Your Life",
    year: "2025",
    episodes: 8,
    maturity: "16+",
    description:
      "With his career in shambles, a sports betting writer is thrown into a world of absurdity when the ghost of a business tycoon demands he solve his murder.",
    cast: "Ata Demirer, Uğur Yücel, Esra Bilgiç",
    genres: ["TV Dramas", "Turkish", "TV Comedies"],
    tags: ["Offbeat", "Quirky"],
    image: hero_banner,
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>{heroMovie.description}</p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn" onClick={() => setShowModal(true)}>
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>

      <Footer />

      {showModal && (
        <MovieModal movie={heroMovie} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Home;
