import React, { Component } from 'react';

import PagePlaceholder from 'components/PagePlaceholder/PagePlaceholder';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import MoviesList from 'components/MoviesList/MoviesList'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import './Movie.scss';

import { GET_MOVIE_REQUEST } from 'store/actions/movies';
import { connect } from 'react-redux';

class MoviePage extends Component {
    componentDidMount() {
        this.props.getMovie(1);
    }

    render() {
        const movies = [];

        return (
            <div className="page">
                <div className="headerWrapper">
                    <div className="headerInner">
                        <Header/>
                        <MovieDetails {...movies[0]} />
                    </div>
                </div>
                <main>
                    <div className="subHeader">
                        <span className="filterResults">Films by Drama genre</span>
                    </div>
                    {movies.length ? 
                        <MoviesList movies={movies} /> :
                        <PagePlaceholder placeholderMessage="Not films found" />
                    }
                </main>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({ movies }) => ({
    movies
});

const mapDispatchToProps = dispatch => ({
    getMovie(moveId) {
        dispatch(GET_MOVIE_REQUEST(moveId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
