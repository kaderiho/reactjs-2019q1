import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import './Header.scss';

const Header = ({ isSearchButtonEnabled }) => (
    <header>
        <span className="logoLink">netflixroulette</span>
        {isSearchButtonEnabled && <Link to="/">
            <Button variant="contained" color="fourth" className="header-searchButton">
                Search
            </Button>
        </Link>}
    </header>
);
    
export default Header;