import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import './Song.css';
import { Table } from 'react-bootstrap';

function Song({ song }) {
  return (
    <tr>
      <td>
        <Link to={`/songs/${song._id}`}>
          <div className="song-image-container text-center">
            <Card.Img
              src={song.image}
              variant="top"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </div>
        </Link>
      </td>
      <td>
        <Link style={{ color: 'black', textDecoration: 'none' }}to={`/songs/${song._id}`}>
          <Card.Text as="h3" className="mt-3">
            <strong>{song.name}</strong>
          </Card.Text>
        </Link>
        <Card.Text as="p" className="my-2" style={{ color: 'black' }}>
          {song.title}, {song.title2}, {song.title3}, {song.title4}, {song.title5}
        </Card.Text>
        {/* Uncomment this section if you want to display song ratings */}
        {/* <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={song.rating}
                text={`${song.numReviews} reviews`}
                color={'#f8e825'}
              />
            </div>
          </Card.Text> */}
        <Link to={`/songs/${song._id}`} className="btn btn-primary">
          Listen
        </Link>
      </td>
    </tr>
  );
}

export default Song;
