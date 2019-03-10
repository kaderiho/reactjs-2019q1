import React from 'react';

import MovieListCard from '../movies-list-card/movies-list-card';
import './movies-list.scss';

class MoviesList extends React.PureComponent {
    render() {
        return (
            <div className="moviesList">
                {this.props.movies.map(movie => <MovieListCard key={movie.id} {...movie}/>)}
            </div>
        );
    }
}

export default MoviesList;