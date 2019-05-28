import { fromJS } from 'immutable';

const initialState = fromJS([]);

const movies = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES_SUCCESS':
            // Check if items already exist in the store
            let filteredPayload = action.payload.filter(
                movie => !state.some(movieState => movieState.id === movie.id)
            );
            return state.setIn([], filteredPayload);
        case 'GET_MOVIE_SUCCESS':
            // Check if item already exists in the store
            if (state.some(movie => movie.id === action.payload.movie.id)) {
                return state;
            }
            return state.setIn([], filteredPayload);
        default:
            return state;
    }
};

export default movies;
