import React, { useState } from "react";
import hero_movies from "../../assets/hero_movies.jpg";
import hero_movies_title from "../../assets/hero_movies_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MovieModal from "../../components/MovieModal/MovieModal";

const Movies = () => {
  const [showModal, setShowModal] = useState(false);

  const heroMovie = {
    title: "Oppenheimer",
    year: "2023",
    episodes: 1,
    maturity: "16+",
    description:
      "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
    cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr., Matt Damon",
    genres: ["Drama", "Biography", "History"],
    tags: ["Historical", "Biographical", "Intense"],
    image: hero_movies,
  };

  return (
    <div className="tvshows">
      <Navbar />
      <div className="hero">
        <img src={hero_movies} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_movies_title} alt="" className="caption-img" />
          <p>
            A dramatization of the life story of J. Robert Oppenheimer, the
            physicist who had a large hand in the development of the atomic
            bombs that brought an end to World War II.
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
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
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

export default Movies;
