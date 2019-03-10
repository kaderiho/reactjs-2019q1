import React from 'react';

import Button from '../button/button';
import './header.scss';

export default () => {
    return (
        <header>
            <a href="#" className="logoLink">netflixroulette</a>
            <Button variant="contained" color="fourth">Search</Button>
        </header>
    )
}