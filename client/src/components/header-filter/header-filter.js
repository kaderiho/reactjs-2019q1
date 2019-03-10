import React, { Component }  from 'react';

import Button from '../button/button';
import Input from '../input/input';
import './header-filter.scss';

class HeaderFilter extends Component {
    state = {
        filter: ''
    }

    render() {
        const { filter } = this.state;

        return (
            <div className="headerFilter">
                <p className="headerFilter-title">Find your moview</p>
                <Input 
                    placeholder="Type movie name here"
                    onChange={() => {}}
                    value={filter}
                />

                <div className="headerSubFilter">
                    <span className="headerSubFilter-label">Search by</span>
                    <Button className="headerSubFilter-button"
                            color="secondary"  
                            size="small">
                            Title
                    </Button>
                    <Button className="headerSubFilter-button"
                            color="third"
                            size="small">
                            Genge
                    </Button>
                    <Button className="headerSubFilter-searchButton"
                            color="secondary">
                            Search
                    </Button>
                </div>
            </div>
        )
    }
}

export default HeaderFilter;