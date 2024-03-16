import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { Person, Search } from '@mui/icons-material';
import { useSelector ,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {setLogout} from '../redux/state'
const Navbar = () => {
  const [dropDownmenu, setDropDownmenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch();
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333', // Change the background color as needed
    color: '#fff', // Change the text color as needed
  };

  const logoStyle = {
    textDecoration: 'none',
  };

  const logoImageStyle = {
    width: '50px', // Set the desired width
    height: 'auto', // Maintain aspect ratio
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    marginLeft: '1rem',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc', // Adjust the border color
  };

  const searchIconStyle = {
    color: 'grey',
  };

  const navbarRightStyle = {
    marginLeft: 'auto',
    marginRight: '1rem',
  };

  const linkStyle = {
    color: '#fff', // Adjust link color
    textDecoration: 'none',
    marginLeft: '1rem',
  };

  const accountButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const menuIconStyle = {
    color: 'white',
  };

  const personIconStyle = {
    color: 'darkgrey',
    marginRight: '0.5rem',
  };

  const profileImageStyle = {
    objectFit: 'cover',
    borderRadius: '50%',
    height:'50px',
  };

  return (
    <>
      <div className="navbar" style={navbarStyle}>
        <a href="/" style={logoStyle}>
          <img src="/assets/logo512.png" alt="logo" style={logoImageStyle} />
        </a>
        <div className="navbar_search" style={searchContainerStyle}>
          <input type="text" placeholder="search" style={searchInputStyle} />
          <IconButton>
            <Search style={searchIconStyle} />
          </IconButton>
        </div>

        <div className="navbar_right" style={navbarRightStyle}>
          {user ? (
            <a href='/create-listing' style={linkStyle}>Host</a>
          ) : (
            <a href='/login' style={linkStyle}>Host</a>
          )}
        </div>
        <button className='navbar_right_account' onClick={()=>setDropDownmenu(!dropDownmenu)} style={accountButtonStyle}>
          <Menu style={menuIconStyle} />
          {!user ? (
            <Person style={personIconStyle} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                'public',
                ''
              )}`}
              alt="profile photo"
              style={profileImageStyle}
            />
          )}
        </button>
        {dropDownmenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}
        {dropDownmenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            
            <Link to="/create-listing">Become A Host</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
