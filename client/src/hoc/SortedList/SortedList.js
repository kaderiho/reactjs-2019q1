import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { sortByReleaseDate, sortByRating } from 'utils/list';

const SortedList = Component => (props) => {
    let { sortBy, movies } = props;

    if (sortBy === 'release_date') {
        movies = sortByReleaseDate(movies);
    }

    if (sortBy === 'rating') {
        movies = sortByRating(movies);
    }

    return <Component movies={movies} />;
};

const mapStateToProps = ({ 
    sortBy
}) => ({
    sortBy
});

const composedSortedList = compose(
    connect(mapStateToProps, null),
    SortedList
);

export default composedSortedList;