import React, { Component } from 'react';
import Loadable from 'react-loadable';

import PagePlaceholder from 'components/PagePlaceholder/PagePlaceholder';
import MoviesList from 'components/MoviesList/MoviesList';
import Loading from 'components/Loading/Loading';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { GET_MOVIE_REQUEST } from 'store/actions/movies';
import { connect } from 'react-redux';
import './Movie.scss';

const LoadableMovieComponent = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "MovieDetails" */ 'components/MovieDetails/MovieDetails'
        ),
    loading: Loading,
    modules: ['MovieDetails']
});

class MoviePage extends Component {
    componentDidMount() {
        const { getMovie, match } = this.props;
        getMovie(match.params.id);
    }

    render() {
        const { movie, movies } = this.props;

        if (!movie) return <div className="page" />;

        const movieGenre = movie.genres[0];
        const genreMovies = movies.filter(
            mv => mv.genres.indexOf(movieGenre) !== -1
        );

        return (
            <div className="page">
                <div className="headerWrapper">
                    <div className="headerInner">
                        <Header isSearchButtonEnabled={true} />
                        <LoadableMovieComponent {...movie} />
                    </div>
                </div>
                <main>
                    <div className="subHeader">
                        <span className="filterResults">
                            Films by {movie.genres[0]} genre
                        </span>
                    </div>
                    {movies.length ? (
                        <MoviesList movies={genreMovies} />
                    ) : (
                        <PagePlaceholder placeholderMessage="Not films found" />
                    )}
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ movies }, ownProps) => ({
    movie: movies.filter(
        movie => movie.id === parseInt(ownProps.match.params.id, 10)
    )[0],
    movies
});

const mapDispatchToProps = dispatch => ({
    getMovie(moveId) {
        dispatch(GET_MOVIE_REQUEST(moveId));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);
