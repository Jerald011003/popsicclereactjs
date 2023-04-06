import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import './Song.css'; // import your CSS file

function Song({ song }) {
  return (
    <Card className="my-3 p-3 rounded bg-light text-white">
      <Link to={`/songs/${song._id}`}>
        <Card.Img src={song.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/songs/${song._id}`}>
          <Card.Text as="h3">
            <strong>{song.name}</strong>
          </Card.Text>
        </Link>

        {/* <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={song.rating}
              text={`${song.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
        </Card.Text> */}

<Card.Text as="p" style={{color: 'black'}}>
  {song.title},
  {song.title2}, 
  {song.title3}, 
  {song.title4},
  {song.title5}
</Card.Text>
        {/* <audio controls className="music-player">
          <source src={song.music} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
        {/* <audio controls className="music-player">
          <source src={song.music} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}

        {/* <Card.Text as="h5" className="mb-3">
          {song.countInStock === 0 ? 'Out of Stock' : `Available`}
        </Card.Text> */}

        <Link to={`/songs/${song._id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Song;
