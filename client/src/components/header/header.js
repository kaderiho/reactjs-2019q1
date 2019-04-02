import React from 'react';

import Button from 'components/Button/Button';
import './Header.scss';

const Header = () => (
    <header>
        <a href="#" className="logoLink">netflixroulette</a>
        <Button variant="contained" color="fourth" className="header-searchButton">Search</Button>
    </header>
);
    

export default Header;