import React from 'react';

import './movies-list-card.scss';

const MoviesListCard = props => {
    return (
        <div className="moviesList-itemList">
            <a className="moviesList-itemListLink" href="#" style={{
                background: `url(${props.poster_path}) center top no-repeat`,
                backgroundSize: 'cover'
            }}>
            </a>
            <div className="moviesList-itemListTitle">
                <span className="moviesList-itemListName">{props.title}</span>
                <span className="moviesList-itemListDate">
                    {new Date(props.release_date).getFullYear()}
                </span>
            </div>
            <div className="moviesList-itemListDescription">
                {props.genres.join(' & ')}
            </div>
        </div>
    );
}

export default MoviesListCard;