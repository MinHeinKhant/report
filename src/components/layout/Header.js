import React from 'react';
import '../../styles/components/Header.css';

const Header = () => {
  return (
    <div>
      <header className="home-section">
        <div className="dark-overlay">
          <div className="inner-header container">
            <div className="inner-header-2">
              <h1 className="display-4 inner-header__title">
                Keep Track of Your Childrens' Progress
              </h1>
              <input
                type="submit"
                value="Login with Google"
                className="btn btn-success inner-header__action text-justify"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
