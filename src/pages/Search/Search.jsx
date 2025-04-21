import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("query");
  const page = parseInt(new URLSearchParams(location.search).get("page") || "1");

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&page=${page}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();
        setResults(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, page]);

  const handlePageChange = (newPage) => {
    navigate(`/search?query=${encodeURIComponent(query)}&page=${newPage}`);
  };

  return (
    <div className="search-results-page">
      <h2>Results for "{query}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="search-results">
            {results.length > 0 ? (
              results.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : ""
                    }
                    alt={movie.title}
                  />
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                </div>
              ))
            ) : (
              <p>No result found.</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
              ◀ Previous
              </button>
              <span>Page {page} / {totalPages}</span>
              <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
              Next ▶
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
