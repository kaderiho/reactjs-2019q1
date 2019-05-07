const initialState = [];

const movies = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES_SUCCESS':
            // Check if items already exist in the store
            let filteredPayload = action.payload.filter(movie => !state.some(movieState => movieState.id === movie.id));
            return [
                ...state,
                ...filteredPayload
            ];
        case 'GET_MOVIE_SUCCESS':
            // Check if item already exists in the store
            if (state.some(movie => movie.id === payload.movie.id)) {
                return state;
            }
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state;
    }    
}

export default movies;