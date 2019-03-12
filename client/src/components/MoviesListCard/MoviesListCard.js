import React from 'react';

import './MoviesListCard.scss';

import { getFullYear } from '../../utils/date';

const MoviesListCard = ({
    release_date,
    poster_path,
    genres,
    title
}) => (
    <div className="moviesList-itemList">
        <a className="moviesList-itemListLink" href="#" style={{
            background: `url(${poster_path}) center top no-repeat`,
            backgroundSize: 'cover'
        }}>
        </a>
        <div className="moviesList-itemListTitle">
            <span className="moviesList-itemListName">{title}</span>
            <span className="moviesList-itemListDate">
                {getFullYear(release_date)}
            </span>
        </div>
        <div className="moviesList-itemListDescription">
            {genres.join(' & ')}
        </div>
    </div>
);

export default MoviesListCard;