import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './HeaderFilter.scss';

export class HeaderFilter extends Component {
    state = {
        searchStr: '',
        searchBy: ''
    };

    componentDidMount() {
        const { searchStr, searchBy } = queryString.parse(
            this.props.location.search
        );

        this.setState({
            searchStr: searchStr || '',
            searchBy: searchBy || ''
        });
    }

    onInputHandler = ev => {
        this.setState({
            searchStr: ev.target.value
        });
    };

    onFilterByHandler = ev => {
        this.setState({
            searchBy: ev.target.name
        });
    };

    onSearchHandler = e => {
        e.preventDefault();

        const { searchStr, searchBy } = this.state;
        let history = this.props;
        const search = {};

        if (searchStr) {
            search.searchStr = searchStr;
        }

        if (searchBy) {
            search.searchBy = searchBy;
        }

        if (searchStr || searchBy) {
            history.push({
                pathname: '/search/',
                search: `?${queryString.stringify(search)}`
            });
        }
    };

    render() {
        const { searchStr, searchBy } = this.state;

        return (
            <div className="headerFilter">
                <form onSubmit={this.onSearchHandler}>
                    <p className="headerFilter-title">Find your movie</p>
                    <Input
                        placeholder="Type movie name here"
                        value={searchStr}
                        onChange={this.onInputHandler}
                        name="searchFilter"
                        id="searchFilter"
                    />
                    <div className="headerSubFilter">
                        <span className="headerSubFilter-label">Search by</span>
                        <Button
                            className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="title"
                            color={searchBy === 'title' ? 'secondary' : 'third'}
                            size="small"
                        >
                            Title
                        </Button>
                        <Button
                            className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="genres"
                            color={
                                searchBy === 'genres' ? 'secondary' : 'third'
                            }
                            size="small"
                        >
                            Genre
                        </Button>
                        <Button
                            className="headerSubFilter-searchButton"
                            onClick={this.onSearchHandler}
                            color="secondary"
                            type="submit"
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(HeaderFilter);
