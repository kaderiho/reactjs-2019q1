import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { sortByReleaseDate, sortByRating, searchByField } from 'utils/list';

const SortedList = Component => (props) => {
    let { sortBy, movies, searchBy, searchStr } = props;

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

    return <Component movies={movies} />;
};

const mapStateToProps = ({ 
    filter: {
        searchBy,
        searchStr
    },
    sortBy
}) => ({
    searchStr,
    searchBy,
    sortBy
});

const composedSortedList = compose(
    connect(mapStateToProps, null),
    SortedList
);

export default composedSortedList;