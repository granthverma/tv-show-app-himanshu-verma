import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="show-list">
      <h1>Show List</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              <img src={show.show.image && show.show.image.medium} alt={show.show.name} />
              <div>
                <h3>{show.show.name}</h3>
                <p>{show.show.network && show.show.network.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
