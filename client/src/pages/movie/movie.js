import React, { Component } from 'react';

import PagePlaceholder from 'components/PagePlaceholder/PagePlaceholder';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import MoviesList from 'components/MoviesList/MoviesList'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { GET_MOVIE_REQUEST } from 'store/actions/movies';
import { connect } from 'react-redux';

class MoviePage extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }

    render() {
        let { movie, movies } = this.props;

        if (!movie) return <div className="page"></div>

        let movieGenre = movie.genres[0];
        let genreMovies = movies.filter(movie => movie.genres.indexOf(movieGenre) !== -1);

        return (
            <div className="page">
                <div className="headerWrapper">
                    <div className="headerInner">
                        <Header isSearchButtonEnabled={true}/>
                        <MovieDetails {...movie} />
                    </div>
                </div>
                <main>
                    <div className="subHeader">
                        <span className="filterResults">Films by {movie.genres[0]} genre</span>
                    </div>
                    {movies.length ? 
                        <MoviesList movies={genreMovies} /> :
                        <PagePlaceholder placeholderMessage="Not films found" />
                    }
                </main>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({ movies }, ownProps) => ({
    movie: movies.filter(movie => movie.id === parseInt(ownProps.match.params.id, 10))[0],
    movies
});

const mapDispatchToProps = dispatch => ({
    getMovie(moveId) {
        dispatch(GET_MOVIE_REQUEST(moveId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
