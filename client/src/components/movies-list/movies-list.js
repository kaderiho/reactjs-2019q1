import React from 'react';

import MovieListCard from '../movies-list-card/movies-list-card';
import './movies-list.scss';

export default props => {
    return (
        <div className="moviesList">
            {props.movies.map(movie => {
                return <MovieListCard key={movie.id} {...movie}/>
            })}
        </div>
    )
}