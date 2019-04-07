import React, { Component } from 'react';

import PagePlaceholder from 'components/PagePlaceholder/PagePlaceholder';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import HeaderFilter from 'components/HeaderFilter/HeaderFilter';
import SortControls from 'components/SortControls/SortControls';
import MoviesList from 'components/MoviesList/MoviesList';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './Main.scss';

import { GET_MOVIES_REQUEST } from '../../store/actions/movies';
import { connect } from 'react-redux';

import { sortByReleaseDate, sortByRating, searchByField } from '../../utils/list';

const FilterErrorComponent = () => <p className="error--application">Oops! Filter currently is not available</p>;

class MainPage extends Component {
    componentDidMount() {
        this.props.getMoviesList();
    }

    render() {
        let { movies } = this.props;
        return (
            <div className="page">
                <div className="headerWrapper">
                    <div className="headerInner">
                        <Header/>
                        <ErrorBoundary render={FilterErrorComponent}>
                            <HeaderFilter/>
                        </ErrorBoundary>
                    </div>
                </div>
                <main>
                    <div className="subHeader">
                        <span className="filterResults">{movies.length} movies found</span>
                        <SortControls />
                    </div>
                    {movies.length ? 
                        <MoviesList movies={movies}/> :
                        <PagePlaceholder placeholderMessage="Not films found" />
                    }
                </main>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { searchBy, searchStr } = state.filter;
    let { sortBy, movies } = state;

    if (sortBy === 'release_date') {
        movies = sortByReleaseDate(movies);
    }

    if (sortBy === 'rating') {
        movies = sortByRating(movies);
    }

    if (searchBy) {
        searchBy = searchBy === 'genre' ? 'genres' : searchBy;
        movies = searchByField(movies, searchBy, searchStr);
    }

    return {
        movies
    }
};

const mapDispatchToProps = dispatch => ({
    getMoviesList() {
        dispatch(GET_MOVIES_REQUEST());
    }
});

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPage;