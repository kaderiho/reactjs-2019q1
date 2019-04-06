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

import { sortByReleaseDate, sortByRating } from '../../utils/sorting';

const FilterErrorComponent = () => <p className="error--application">Oops! Filter currently is not available</p>;

class MainPage extends Component {
    state = {
        sortBy: 'release_date'
    }

    componentDidMount() {
        this.props.getMoviesList();
    }

    render() {
        let { movies } = this.props;
        let { sortBy } = this.state;

        if (sortBy === 'release_date') {
            movies = sortByReleaseDate(movies);
        }

        if (sortBy === 'rating') {
            movies = sortByRating(movies);
        }

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
                        <SortControls 
                            activeSortBy={sortBy}
                            sortByClickHandler={sortBy => {
                                this.setState({
                                    sortBy
                                });
                            }}
                        />
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

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    getMoviesList() {
        dispatch(GET_MOVIES_REQUEST());
    }
});

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPage;