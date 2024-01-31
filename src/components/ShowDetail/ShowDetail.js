
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowDetail.css';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShow();
  }, [id]);

  return (
    <div className="show-detail">
      <Link to="/" className="back-link">
        Back to Show List
      </Link>
      {show ? (
        <div>
          <h1>{show.name}</h1>
          <img src={show.image && show.image.medium} alt={show.name} />
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <button onClick={() => alert(`Booking ticket for ${show.name}`)}>Book Ticket</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetail;
