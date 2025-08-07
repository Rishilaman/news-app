import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ isDarkMode, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '9cb698493ac744a08bbb0f3a87aef173';

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const fetchNews = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles || []);
        setFiltered(data.articles || []);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const q = searchQuery.toLowerCase();
    const filteredResults = articles.filter((a) =>
      a.title?.toLowerCase().includes(q) || a.description?.toLowerCase().includes(q)
    );
    setFiltered(filteredResults);
  }, [searchQuery, articles]);

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {filtered.length > 0 ? (
            filtered.map((news, idx) => (
              <NewsItem
                key={idx}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                isDarkMode={isDarkMode}
              />
            ))
          ) : (
            <p className="text-center">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
