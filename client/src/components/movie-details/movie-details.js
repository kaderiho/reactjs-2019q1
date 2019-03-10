import React from 'react';

import './movie-details.scss';

export default props => {
    return (
        <div className="movieDetails">
            <img className="movieDetails-image" src={props.poster_path}/>

            <div className="movieDetailsDescription">
                <h1 className="movieDetailsDescription-title">
                    {props.title}
                    {' '}
                    <span className="movieDetailsDescription-raiting">
                        {props.vote_average}
                    </span>
                </h1>
                <span className="movieDetailsDescription-releaseDate">{new Date(props.release_date).getFullYear()}</span>
                <span className="movieDetailsDescription-runtime">{props.runtime} min</span>
                <p className="movieDetailsDescription-overview">{props.overview}</p>
            </div>
        </div>
    )
}