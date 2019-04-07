const initialState = {
    searchStr: '',
    searchBy: ''
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_BY':
            return {
                ...state,
                ...action.payload
            };
        case 'SET_FILTER_SEARCH':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default filter;