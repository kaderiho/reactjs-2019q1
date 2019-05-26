import React from 'react';
import { getFullYear } from 'utils/date';

const MovieDetails = ({
    release_date,
    vote_average,
    poster_path,
    overview,
    runtime,
    title
}) => (
    <div className="movieDetails">
        <img className="movieDetails-image" src={poster_path} />

        <div className="movieDetailsDescription">
            <h1 className="movieDetailsDescription-title">
                <span className="movieDetailsDescription-titleText">
                    {title}
                </span>{' '}
                <span className="movieDetailsDescription-raiting">
                    {vote_average}
                </span>
            </h1>
            <span className="movieDetailsDescription-releaseDate">
                {getFullYear(release_date)}
            </span>
            <span className="movieDetailsDescription-runtime">
                {runtime} min
            </span>
            <p className="movieDetailsDescription-overview">{overview}</p>
        </div>
    </div>
);

export default MovieDetails;
