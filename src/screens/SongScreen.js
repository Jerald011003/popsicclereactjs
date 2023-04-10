import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listSongDetails } from '../actions/songActions';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getOrderDetails, payOrder, deliverOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'
import { Dropdown } from 'react-bootstrap';
import { createPlaylist, deletePlaylist, listPlaylists } from '../actions/playlistActions';
import { useRef } from 'react';

import AdBanner from './Adbanner';

function SongScreen({ match, history}) {
  const { playlists } = useSelector((state) => state.playlistList);

  const [showDropdown, setShowDropdown] = useState(false);

  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const songDetails = useSelector(state => state.songDetails);
  const {  song, error, loading} = songDetails;


  useEffect(() => {
    dispatch(listSongDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cartsong/${match.params.id}?qty=${qty}`);
  };

  const addToWishlist = () => {
    history.push(`/liked/${match.params.id}?qty=${qty}`);
    setLiked(true); // Update the state to indicate that the user has liked the song

  };

  const addToPreorder = () => {
    history.push(`/playlist/${match.params.id}?qty=${qty}`);
  };
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleMouseEnter3 = () => setIsHovered3(true);
  const handleMouseLeave3 = () => setIsHovered3(false);
  const handleMouseEnter4 = () => setIsHovered4(true);
  const handleMouseLeave4 = () => setIsHovered4(false);
  const handleMouseEnter5 = () => setIsHovered5(true);
  const handleMouseLeave5 = () => setIsHovered5(false);

  const adIntervalRef = useRef(null);
  const audioElement1Ref = useRef(null);
  const audioElement2Ref = useRef(null);
  const audioElement3Ref = useRef(null);
  const audioElement4Ref = useRef(null);
  const audioElement5Ref = useRef(null);
  const audioElement6Ref = useRef(null);
  const audioElement7Ref = useRef(null);
  const audioElement8Ref = useRef(null);
  const audioElement9Ref = useRef(null);
  const audioElement10Ref = useRef(null);

  const [currentAudio, setCurrentAudio] = useState(null);
  let audioElement1, audioElement2;
  
  const handlePlayClick = (playElement, pauseElement) => {
    playElement.play();
    if (!playElement.paused) {
      pauseElement.pause();
    }
    // Start showing the AdBanner every minute
    adIntervalRef.current = setInterval(() => {
      console.log('Showing AdBanner');
    }, 20);
  };
  useEffect(() => {
    return () => {
      // Clean up the interval on unmount
      clearInterval(adIntervalRef.current);
    };
  }, []);


  const [showPremium, setShowPremium] = useState(false);
  // const [showBasic, setShowBasic] = useState(true);

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    // const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    const [showDownload, setShowDownload] = useState(false)

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])
    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };

    
    // const { title } = playlists;

    const addToPlaylist = (playlistId, playlistTitle) => {
      history.push(`/playlist/${match.params.id}?qty=${qty}/${playlistTitle}`);
    };
    const download = () => {
      window.location.href = song.download;
    };
  
  return (
    <div>
       
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
     ) : error ? ( 
        <Message variant="danger">{error}</Message>
     ) : ( 
        <div>
          <Row>
          <Col sm={12} md={6} lg={4} xl={3} className="home-screen-product-col">
      <Image src={song.image} alt={song.name} fluid />
      <br />
      <br />
      <Card>
        <ListGroup>
          <ListGroup.Item>
            <Row onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
              <h4 type="button">{song.title}</h4>
              {song.music && (
                <div>
                  <audio
                    controls
                    className="music-player"
                    style={{ display: isHovered1 ? "block" : "none" }}
                    onClick={() =>
                      handlePlayClick(audioElement1Ref.current, audioElement2Ref.current)
                    }
                  >
                    <source src={song.music} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="ad-banner" style={{ display: 'none' }}>
                    <AdBanner />
                  </div>
                </div>
              )}
            </Row>
            <audio ref={audioElement1Ref} />
          </ListGroup.Item>
          <ListGroup.Item>
            <Row onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
              <h4 type="button">{song.title2}</h4>
              {song.music2 && (
                <div>
                  <audio
                    controls
                    className="music-player"
                    style={{ display: isHovered2 ? "block" : "none" }}
                    onClick={() =>
                      handlePlayClick(audioElement2Ref.current, audioElement1Ref.current)
                    }
                  >
                    <source src={song.music2} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="ad-banner" style={{ display : 'none' }}>
<AdBanner />
</div>
</div>
)}
</Row>
<audio ref={audioElement2Ref} />
</ListGroup.Item>

<ListGroup.Item>
            <Row onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
              <h4 type="button">{song.title3}</h4>
              {song.music3 && (
                <div>
                  <audio
                    controls
                    className="music-player"
                    style={{ display: isHovered3 ? "block" : "none" }}
                    onClick={() =>
                      handlePlayClick(audioElement3Ref.current, audioElement2Ref.current)
                    }
                  >
                    <source src={song.music3} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="ad-banner" style={{ display : 'none' }}>
<AdBanner />
</div>
</div>
)}
</Row>
<audio ref={audioElement3Ref} />
</ListGroup.Item>


<ListGroup.Item>
            <Row onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
              <h4 type="button">{song.title4}</h4>
              {song.music4 && (
                <div>
                  <audio
                    controls
                    className="music-player"
                    style={{ display: isHovered4 ? "block" : "none" }}
                    onClick={() =>
                      handlePlayClick(audioElement4Ref.current, audioElement3Ref.current)
                    }
                  >
                    <source src={song.music4} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="ad-banner" style={{ display : 'none' }}>
<AdBanner />
</div>
</div>
)}
</Row>
<audio ref={audioElement4Ref} />
</ListGroup.Item>

<ListGroup.Item>
            <Row onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
              <h4 type="button" >{song.title5}</h4>
              {song.music5 && (
                <div>
                  <audio
                    controls
                    className="music-player"
                    style={{ display: isHovered5 ? "block" : "none" }}
                    onClick={() =>
                      handlePlayClick(audioElement5Ref.current, audioElement4Ref.current)
                    }
                  >
                    <source src={song.music5} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="ad-banner" style={{ display : 'none' }}>
<AdBanner />
</div>
</div>
)}
</Row>
<audio ref={audioElement5Ref} />
</ListGroup.Item>


</ListGroup>
</Card>
</Col>

     
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>{song.name}</h1>
                </ListGroup.Item>

                <ListGroup.Item>
                  Description: {song.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              {/* <Card> */}
                <ListGroup >


                  {/* {song.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>

                      </Row>
                    </ListGroup.Item>
                  )} */}

                  {/* <ListGroup.Item> */}
                  
         
         {loadingOrders ? (
  <Loader /> 
) : errorOrders ? ( 
  <Message variant='danger'>{errorOrders}</Message> 
) : ( 
  orders.map(order => (

    
    <div key={order.id}>
      <h1>
        {order.isBasic && order.isBought && (

<ListGroup.Item>
<div className="text-center">
<Button
                  onClick={addToWishlist}
                  className="btn-block"
                  type="button"
                  disabled={song.countInStock === 0 || liked} // Disable the button if the song is out of stock or if the user has already liked it
                ><FontAwesomeIcon icon={faHeart} className="me-2" />
                {liked ? "Liked" : "Like"} {/* Change the button text based on the state */}</Button>
</div>
          </ListGroup.Item>
        )}
      </h1>

      <h2>
        {order.isPremium && order.isBought && (
          <div>

<ListGroup.Item>
<div className="text-center">
              <Button
                  onClick={addToWishlist}
                  className="btn-block"
                  type="button"
                  disabled={song.countInStock === 0 || liked} // Disable the button if the song is out of stock or if the user has already liked it
                ><FontAwesomeIcon icon={faHeart} className="me-2" />
                {liked ? "Liked" : "Like"} {/* Change the button text based on the state */}</Button>
                </div>
                </ListGroup.Item>
                <ListGroup.Item>
                <div className="text-center">
                <Button onClick={download}>Download</Button>
</div>
            </ListGroup.Item>

            <ListGroup.Item>
                <div className="text-center">
                <Dropdown show={showDropdown} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                  <Dropdown.Toggle className="playlist__dropdown-toggle" variant="success" id="dropdown-basic">
                    Add to Playlist
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
  {playlists.map((p) => {
    const playlistTitle = p.title;
    return (
      <Dropdown.Item key={p.id} onClick={() => addToPlaylist(p.id, playlistTitle)}>
        {playlistTitle}
      </Dropdown.Item>
    );
  })}
</Dropdown.Menu>
                </Dropdown>
</div>
            </ListGroup.Item>
            

          </div>
        )}
      </h2>
    </div>
  ))

  
)}

        


                      {/* </ListGroup.Item> */}
                      {/* {userInfo ? (
            <h1></h1>
              ) : (
                <ListGroup.Item>
                  <Link to="/login">
                    <Message variant="info">
                      Please subscribe to like songs
                    </Message>
                  </Link>
                </ListGroup.Item>
              )} */}
         <div className="text-center">
              {/* <ListGroup.Item>
                <Button
                  onClick={addToPreorder}
                  className="btn-block"
                  type="button"
                  disabled={song.countInStock === 0}
                >
                  Add to Playlist
                </Button>
              </ListGroup.Item> */}

            <div>
             {/* <Dropdown show={showDropdown} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                  <Dropdown.Toggle className="playlist__dropdown-toggle" variant="success" id="dropdown-basic">
                    Add to Playlist
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
  {playlists.map((p) => {
    const playlistTitle = p.title;
    return (
      <Dropdown.Item key={p.id} onClick={() => addToPlaylist(p.id, playlistTitle)}>
        {playlistTitle}
      </Dropdown.Item>
    );
  })}
</Dropdown.Menu>
                </Dropdown> */}
                </div>
              </div>
            </ListGroup>
          {/* </Card> */}
        </Col>
      </Row>
    </div>
   )} 
</div>

);
}

export default SongScreen;

