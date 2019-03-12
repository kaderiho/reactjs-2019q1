import React from 'react';

import Button from '../button/button';
import './SortControls.scss';

const SortControls = () => (
    <div className="sortControls">
        <span className="sortControls-label">Sort by</span>

        <Button
            className="sortControls-control sortControls-control--active"
            color="transparent"
            size="small">
            Release data
        </Button>

        <Button
            className="sortControls-control"
            color="transparent"
            size="small">
            Rating
        </Button>
    </div>
);

export default SortControls;