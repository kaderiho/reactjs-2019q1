import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesListCard.scss';

import { getFullYear } from 'utils/date';

const MoviesListCard = ({ release_date, poster_path, genres, title, id }) => (
    <div className="moviesList-itemList">
        <Link to={`/film/${id}`}>
            <span
                className="moviesList-itemListLink"
                style={{
                    background: `url(${poster_path}) center top no-repeat`,
                    backgroundSize: 'cover'
                }}
            />
        </Link>
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
