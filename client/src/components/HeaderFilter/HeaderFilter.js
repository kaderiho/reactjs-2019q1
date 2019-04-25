import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './HeaderFilter.scss';

import { SET_FILTER_BY } from 'store/actions/filter';
import { connect } from 'react-redux';

export class HeaderFilter extends Component {
    state = {
        searchFilter: ''
    }

    onInputHandler = ev => {
        this.setState({
            searchFilter: ev.target.value
        });
    }

    onFilterByHandler = ev => {
        this.props.onFilterByHandler(ev.target.name);
    }

    onSearchHandler = (e) => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchFilter}`);
    }

    render() {
        let { searchBy } = this.props;
        let { searchFilter } = this.state;

        return (
            <div className="headerFilter">
                <form onSubmit={this.onSearchHandler}>
                    <p className="headerFilter-title">Find your movie</p>
                    <Input 
                        placeholder="Type movie name here"
                        value={searchFilter}
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
                                color="secondary"
                                type="submit">
                                Search
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({ 
    filter: {
        searchBy
    }
}) => ({
    searchBy
});

const mapDispatchToProps = dispatch => ({
    onFilterByHandler(searchBy) {
        dispatch(SET_FILTER_BY(searchBy));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderFilter));