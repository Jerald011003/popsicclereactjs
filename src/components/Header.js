import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import { FaHome, FaGamepad, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
import { GiSwordsEmblem } from 'react-icons/gi';
import { SiTwitch } from 'react-icons/si';
import Avatar from '../assets/POPSICCLE.png';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFileInvoice } from 'react-icons/fa';
import { listProductDetails, createProductReview } from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
import { FaComments } from 'react-icons/fa';
import { Helmet } from "react-helmet";

function Header({ match, history}) {
  
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
       {/* <Helmet>
        <title>POPSICCLE</title>
        <link rel="icon" type="image/png" href="https://imgur.com/XDaKYpK.png" sizes="16x16" />
      </Helmet> */}
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '125px' }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>

              {/* <h1>Popsiccle</h1> */}
              <img src={Avatar} className="d-inline-block align-top" alt="Popsiccle" style={{ width: '250px', height: '50px' }} />{' '}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <FaHome className="me-2" />
                  Listen Music
                </Nav.Link>
              </LinkContainer>


  <LinkContainer to="/plan">
  <Nav.Link>

      <FaFileInvoice className="me-2" />
      Plan
      </Nav.Link>

  </LinkContainer>           




<NavDropdown title={<span><FaFileInvoice className="me-2" />Library</span>}> 
  <LinkContainer to="/liked">
    <NavDropdown.Item>
    <FontAwesomeIcon icon={faHeart} className="me-2" />      Liked Songs
    </NavDropdown.Item>
  </LinkContainer>           


  <LinkContainer to="/playlistsongs">
 
  <NavDropdown.Item>
    <FaFileInvoice className="me-2" />
    Playlist
  </NavDropdown.Item>
</LinkContainer>

  {/* <LinkContainer to="/downloadsong">
 
  <NavDropdown.Item>
    <FaFileInvoice className="me-2" />
    Download Songs
  </NavDropdown.Item>
</LinkContainer> */}

</NavDropdown>



        
              {/* <SearchBox /> */}
              
            </Nav>


            <Nav>

      
      {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <FaUser className="me-2" />
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
      
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser className="me-2" />
                    Login
                  </Nav.Link>
                </LinkContainer>
              )}
              
{userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

