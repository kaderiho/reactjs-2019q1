import React from 'react';

import MovieListCard from 'components/MoviesListCard/MoviesListCard';
import './MoviesList.scss';

class MoviesList extends React.Component {
    render() {
        let { movies } = this.props;

        if (!movies.length) {
            return '';
        }

        return (
            <div className="moviesList">
                {movies.map(movie => <MovieListCard key={movie.id} {...movie}/>)}
            </div>
        );
    }
};

export default MoviesList;