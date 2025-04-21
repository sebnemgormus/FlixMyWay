import React from "react";
import "./MovieModal.css";
import play_icon from "../../assets/play_icon.png";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-content-bottom">
          <img src={movie.image} alt={movie.title} className="modal-banner" />
          <h2>{movie.title}</h2>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
          </div>
          <div className="modal-info">
            <p>
              <span></span>
              {movie.year} • {movie.episodes} Episodes • {movie.maturity}
            </p>
            <p>{movie.description}</p>
            <p>
              <span>Cast:</span> {movie.cast}
            </p>
            <p>
              <span>Genres:</span> {movie.genres.join(", ")}
            </p>
            <p>
              <span>This show is:</span> {movie.tags.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
