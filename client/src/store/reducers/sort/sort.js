const initialState = 'release_date';

const sortBy = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return action.payload.sortBy;
        default:
            return state;
    }
};

export default sortBy;