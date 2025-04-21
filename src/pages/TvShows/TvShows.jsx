import React, { useState } from "react";
import hero_tvshows from "../../assets/hero-tvshows.jpg";
import hero_tvshows_title from "../../assets/hero_tvshows_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MovieModal from "../../components/MovieModal/MovieModal";

const TvShows = () => {
  const [showModal, setShowModal] = useState(false);

  const heroMovie = {
    title: "The Big Bang Theory",
    year: "2007",
    episodes: 279,
    maturity: "16+",
    description:
      "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door.",
    cast: "Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg, Kunal Nayyar",
    genres: ["TV Dramas", "Comedy", "Sitcom"],
    tags: ["Offbeat", "Quirky", "Intelligent Humor"],
    image: hero_tvshows,
  };

  return (
    <div className="tvshows">
      <Navbar />
      <div className="hero">
        <img src={hero_tvshows} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_tvshows_title} alt="" className="caption-img" />
          <p>
            Physicists Leonard and Sheldon find their nerd-centric social circle
            with pals Howard and Raj expanding when aspiring actress Penny moves
            in next door.
          </p>
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
        <TitleCards title={"TV Dramas"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />

      {showModal && (
        <MovieModal movie={heroMovie} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default TvShows;
