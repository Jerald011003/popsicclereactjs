import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Song from '../components/Song';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listSongs } from '../actions/songActions';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../components/Paginate';
import SongCarousel from '../components/SongCarousel';
import SearchBox from '../components/SearchBox'; // import SearchBox component
import '../styles/Header.css';

function SongListScreen({ history }) {
  const dispatch = useDispatch();
  const songList = useSelector(state => state.songList);
  const { error, loading, songs, page, pages } = songList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listSongs(keyword));
  }, [dispatch, keyword]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/songlist${keyword}&search=${keyword}`);
    } else {
      history.push(`/songlist/search/${keyword}`);
    }
  };

  return (
    <div>
      <SearchBox submitHandler={submitHandler} />
      <br/>
      {!keyword && <SongCarousel />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {songs.map((song) => (
              <Col key={song._id} sm={12} md={6} lg={5} xl={3}>
                <Song song={song} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword}
            className="home-screen-pagination"
          />
        </div>
      )}
    </div>
  );
}

export default SongListScreen;
