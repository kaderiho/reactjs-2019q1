import React, { Component }  from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './HeaderFilter.scss';

class HeaderFilter extends Component {
    state = {
        filterBy: 'filterByTitle',
        searchFilter: ''
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
                <p className="headerFilter-title">Find your movie</p>
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
                            name="filterByTitle"
                            color={filterBy === 'filterByTitle' ? 'secondary' : 'third'}
                            size="small">
                            Title
                    </Button>
                    <Button className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="filterByGenre"
                            color={filterBy === 'filterByGenre' ? 'secondary' : 'third'}
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