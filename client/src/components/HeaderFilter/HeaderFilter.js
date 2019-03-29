import React, { Component }  from 'react';

import Button from 'components/button/button';
import Input from 'components/input/input';
import './HeaderFilter.scss';

class HeaderFilter extends Component {
    state = {
        searchFilter: '',
        filterBy: ''
    }

    // On movie search handler
    onInputHandler = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    // On filter by controls handler
    onFilterByHandler = ev => {
        this.setState({
            filterBy: ev.target.name
        });
    }

    // On search handler
    onSearchHandler = () => {console.log('Search!')}

    render() {
        let { filterBy } = this.state;

        return (
            <div className="headerFilter">
                <p className="headerFilter-title">Find your moview</p>
                <Input 
                    placeholder="Type movie name here"
                    value={this.state.searchFilter}
                    onChange={this.onInputHandler}
                    name="searchFilter"
                    id="searchFilter"
                />

                <div className="headerSubFilter">
                    <span className="headerSubFilter-label">Search by</span>
                    <Button className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="FilterByTitle"
                            color={filterBy === 'FilterByTitle' ? 'secondary' : 'third'}
                            size="small">
                            Title
                    </Button>
                    <Button className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="FilterByGenre"
                            color={filterBy === 'FilterByGenre' ? 'secondary' : 'third'}
                            size="small">
                            Genre
                    </Button>
                    <Button className="headerSubFilter-searchButton"
                            onClick={this.onSearchHandler}
                            color="secondary">
                            Search
                    </Button>
                </div>
            </div>
        )
    }
};

export default HeaderFilter;