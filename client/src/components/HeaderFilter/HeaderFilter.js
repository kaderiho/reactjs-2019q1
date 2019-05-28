// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import styled from 'styled-components';
import './HeaderFilter.scss';

const FormTitle = styled.p`
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    margin: 0 0 20px;
`;
const FormLabel = styled.span`
    text-transform: uppercase;
    margin-right: 10px;
    color: #fff;
    font-size: 12px;
`;
const SearchButton = styled(Button)`
    margin-left: auto;
    width: 200px;
`;

type Props = {
    location: object,
    history: object
};

type State = {
    searchStr: string,
    searchBy: string
};

export class HeaderFilter extends React.Component<Props, State> {
    state = {
        searchStr: '',
        searchBy: ''
    };

    componentDidMount() {
        const { location } = this.props;
        const { searchStr, searchBy } = queryString.parse(location.search);

        this.setState({
            searchStr: searchStr || '',
            searchBy: searchBy || ''
        });
    }

    onInputHandler = (ev: SyntheticInputEvent<EventTarget>) => {
        this.setState({
            searchStr: ev.target.value
        });
    };

    onFilterByHandler = (ev: SyntheticInputEvent<EventTarget>) => {
        this.setState({
            searchBy: ev.target.name
        });
    };

    onSearchHandler = (ev: SyntheticInputEvent<EventTarget>) => {
        ev.preventDefault();

        const { searchStr, searchBy } = this.state;
        const { history } = this.props;
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
                    <FormTitle>Find your movie</FormTitle>
                    <Input
                        placeholder="Type movie name here"
                        value={searchStr}
                        onChange={this.onInputHandler}
                        name="searchFilter"
                        id="searchFilter"
                    />
                    <div className="headerSubFilter">
                        <FormLabel>Search by</FormLabel>
                        <div>
                            <Button
                                className="headerSubFilter-button"
                                onClick={this.onFilterByHandler}
                                name="title"
                                color={
                                    searchBy === 'title' ? 'secondary' : 'third'
                                }
                                size="small"
                            >
                                Title
                            </Button>
                            <Button
                                className="headerSubFilter-button"
                                onClick={this.onFilterByHandler}
                                name="genres"
                                color={
                                    searchBy === 'genres'
                                        ? 'secondary'
                                        : 'third'
                                }
                                size="small"
                            >
                                Genre
                            </Button>
                        </div>
                        <SearchButton
                            onClick={this.onSearchHandler}
                            color="secondary"
                            type="submit"
                        >
                            Search
                        </SearchButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(HeaderFilter);
