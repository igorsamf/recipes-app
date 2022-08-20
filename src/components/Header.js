import React from 'react';
import PropTypes, { object } from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const { history: { location: { pathname } } } = props;

  const searchTest = () => {
    if (pathname === '/foods' || pathname === '/drinks') {
      return (
        <input
          src={ searchIcon }
          alt="Search"
          type="image"
          data-testid="search-top-btn"
        />);
    }
  };

  const pageTitle = () => {
    switch (pathname) {
    case '/foods':
      return <h1 data-testid="page-title">Foods</h1>;

    case '/drinks':
      return <h1 data-testid="page-title">Drinks</h1>;

    case '/profile':
      return <h1 data-testid="page-title">Profile</h1>;

    case '/done-recipes':
      return <h1 data-testid="page-title">Done Recipes</h1>;

    case '/favorite-recipes':
      return <h1 data-testid="page-title">Favorite Recipes</h1>;

    default:
      break;
    }
  };

  return (
    <header>
      <input
        src={ profileIcon }
        type="image"
        alt="Profile Icon"
        data-testid="profile-top-btn"
      />
      {searchTest()}
      {pageTitle()}

    </header>
  );
}

Header.propTypes = {
  history: PropTypes.shape(object.PropTypes).isRequired,
};

export default Header;