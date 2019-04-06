import React from 'react';
import classnames from 'classnames';
import Button from 'components/Button/Button';
import './SortControls.scss';

const SortControls = ({ activeSortBy, sortByClickHandler }) => (
    <div className="sortControls">
        <span className="sortControls-label">Sort by</span>

        <Button
            className={classnames("sortControls-control", {
                'sortControls-control--active' : activeSortBy === 'release_date'
            })}
            onClick={() => { sortByClickHandler('release_date') }}
            color="transparent"
            size="small">
            Release date
        </Button>

        <Button
            className={classnames("sortControls-control", {
                'sortControls-control--active' : activeSortBy === 'rating'
            })}
            onClick={() => { sortByClickHandler('rating') }}
            color="transparent"
            size="small">
            Rating
        </Button>
    </div>
);

export default SortControls;