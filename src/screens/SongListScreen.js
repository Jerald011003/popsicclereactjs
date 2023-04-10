import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Song from '../components/Song';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listSongs } from '../actions/songActions';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../components/Paginate';
import SongCarousel from '../components/SongCarousel';
import SearchBox from '../components/SearchBox';
import '../styles/SongListScreen.css';
import { Table } from 'react-bootstrap';

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
    <div className="song-list-container">
      <div className="song-list-header">
        <h1 className="song-list-title">Your Library</h1>
        <div className="search-box-container">
          <SearchBox submitHandler={submitHandler} />
        </div>
      </div>
      {!keyword && <SongCarousel />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="song-list">
           <Table striped bordered hover className="song-list-table">
            <thead>
              <tr>
                <th>Album</th>
                <th>Song Details</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <Song key={song._id} song={song} />
              ))}
            </tbody>
          </Table>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword}
            className="song-list-pagination"
          />
        </div>
      )}
    </div>
  );
}

export default SongListScreen;
