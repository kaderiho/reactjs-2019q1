import React from 'react';

import Button from 'components/button/button';
import './header.scss';

const Header = () => (
    <header>
        <a href="#" className="logoLink">netflixroulette</a>
        <Button variant="contained" color="fourth">Search</Button>
    </header>
);
    

export default Header;