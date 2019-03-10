import React, { Component }  from 'react';

import Button from '../button/button';
import Input from '../input/input';
import './header-filter.scss';

class HeaderFilter extends Component {
    render() {
        return (
            <div className="headerFilter">
                <p className="headerFilter-title">Find your moview</p>
                <Input placeholder="Type movie name here"/>

                <div className="headerSubFilter">
                    <span className="headerSubFilter-label">Search by</span>
                    <Button color="secondary" className="headerSubFilter-button" size="small">Title</Button>
                    <Button color="third" className="headerSubFilter-button" size="small">Genge</Button>
                    <Button color="secondary" className="headerSubFilter-searchButton">Search</Button>
                </div>
            </div>
        )
    }
}

export default HeaderFilter;