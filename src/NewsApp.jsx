import React, { useEffect, useState, useRef } from "react";
import News from "./News";
import "./News.css";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = REACT_APP_NEWS_API_KEY;
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const queryInputRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-09-11&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      setNewsList(jsonData.articles);
      setCurrentPage(1);
    } catch (e) {
      console.error(e, "An error occurred during fetching data.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  function handleCategoryClick(category) {
    setQuery(category);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsList = newsList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const categories = [
    "India",
    "Business",
    "Tech",
    "Science",
    "Cricket",
    "Lifestyle",
    "Health",
    "Research",
    "Sports",
    "World",
    "Politics",
    "Entertainment",
    "Environment",
    "Education",
    "Travel",
    "Automobile",
    "Finance",
    "Food",
    "Fashion",
    "Opinion",
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{ marginBottom: "3px", marginTop: "15px" }}>
        <input
          type="text"
          ref={queryInputRef}
          placeholder="Search News, Location....."
          className="input-field"
        />
        <button type="submit" className="sub-btn">
          Search
        </button>
      </form>

      <div className="Main-cat">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#217dbb")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mainContainer">
        {Array.isArray(currentNewsList) && currentNewsList.length > 0 ? (
          currentNewsList.map((news) => <News key={news.url} news={news} />)
        ) : (
          <p>No news available.</p>
        )}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsApp;
