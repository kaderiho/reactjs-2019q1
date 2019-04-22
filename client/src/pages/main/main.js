import React, { Component } from 'react';
import { connect } from 'react-redux';

import PagePlaceholder from 'components/PagePlaceholder/PagePlaceholder';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import HeaderFilter from 'components/HeaderFilter/HeaderFilter';
import SortControls from 'components/SortControls/SortControls';
import MoviesList from 'components/MoviesList/MoviesList';
import SortedList from 'components/SortedList/SortedList';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './Main.scss';

const FilterErrorComponent = () => <p className="error--application">Oops! Filter currently is not available</p>;

class MainPage extends Component {
    render() {
        let { movies } = this.props;
        let SortedMoviesList = SortedList(MoviesList);

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
                        <SortedMoviesList movies={movies}/> :
                        <PagePlaceholder placeholderMessage="Not films found" />
                    }
                </main>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = ({ movies }) => ({
    movies
});

export default connect(mapStateToProps, null)(MainPage);