import React from 'react';
import classnames from 'classnames';
import Button from 'components/Button/Button';
import './SortControls.scss';

import { SET_SORT_BY } from 'store/actions/sort';
import { connect } from 'react-redux';

let SortControls = ({ sortBy, onSortByHandler }) => (
    <div className="sortControls">
        <span className="sortControls-label">Sort by</span>

        <Button
            className={classnames("sortControls-control", {
                'sortControls-control--active' : sortBy === 'release_date'
            })}
            onClick={() => { onSortByHandler('release_date') }}
            color="transparent"
            size="small">
            Release date
        </Button>

        <Button
            className={classnames("sortControls-control", {
                'sortControls-control--active' : sortBy === 'rating'
            })}
            onClick={() => { onSortByHandler('rating') }}
            color="transparent"
            size="small">
            Rating
        </Button>
    </div>
);

const mapStateToProps = ({ sortBy }) => ({
    sortBy
});

const mapDispatchToProps = dispatch => ({
    onSortByHandler(sortBy) {
        dispatch(SET_SORT_BY(sortBy));
    }
});

SortControls = connect(mapStateToProps, mapDispatchToProps)(SortControls);

export default SortControls;