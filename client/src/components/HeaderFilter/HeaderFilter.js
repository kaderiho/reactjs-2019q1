import React, { Component }  from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './HeaderFilter.scss';

import { SET_FILTER_BY, SET_FILTER_SEARCH } from 'store/actions/filter';
import { connect } from 'react-redux';

// TODO: usage class is not required?
export class HeaderFilter extends Component {
    onInputHandler = ev => {
        this.props.onSearchHandler(ev.target.value);
    }

    onFilterByHandler = ev => {
        this.props.onFilterByHandler(ev.target.name);
    }

    onSearchHandler = () => {console.log('Search!')}

    render() {
        let { searchBy, searchStr } = this.props;

        return (
            <div className="headerFilter">
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
                    <Button className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="title"
                            color={searchBy === 'title' ? 'secondary' : 'third'}
                            size="small">
                            Title
                    </Button>
                    <Button className="headerSubFilter-button"
                            onClick={this.onFilterByHandler}
                            name="genre"
                            color={searchBy === 'genre' ? 'secondary' : 'third'}
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

const mapStateToProps = state => ({
    searchStr: state.filter.searchStr,
    searchBy: state.filter.searchBy
});

const mapDispatchToProps = dispatch => ({
    onFilterByHandler(searchBy) {
        dispatch(SET_FILTER_BY(searchBy));
    },
    onSearchHandler(searchStr) {
        dispatch(SET_FILTER_SEARCH(searchStr));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilter);