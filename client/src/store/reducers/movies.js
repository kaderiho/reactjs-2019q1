const initialState = [];

const movies = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES_SUCCESS':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }    
}

export default movies;