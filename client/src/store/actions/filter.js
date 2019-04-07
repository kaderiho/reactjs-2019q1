const SET_FILTER_BY = searchBy => ({
    type: 'SET_FILTER_BY',
    payload: {
        searchBy
    }
});

const SET_FILTER_SEARCH = searchStr => ({
    type: 'SET_FILTER_SEARCH',
    payload: {
        searchStr
    }
});

export { SET_FILTER_BY, SET_FILTER_SEARCH };