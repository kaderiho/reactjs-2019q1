import React from 'react';

import MovieListCard from '../MoviesListCard/MoviesListCard';
import './MoviesList.scss';

class MoviesList extends React.PureComponent {
    render() {
        return (
            <div className="moviesList">
                {this.props.movies.map(movie => <MovieListCard key={movie.id} {...movie}/>)}
            </div>
        );
    }
};

export default MoviesList;