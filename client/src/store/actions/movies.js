const GET_MOVIES_REQUEST = () => ({
    type: 'GET_MOVIES_REQUEST'
});

const GET_MOVIES_SUCCESS = moviesList => ({
    type: 'GET_MOVIES_SUCCESS',
    payload: moviesList
});

const GET_MOVIES_ERROR = error => ({
    type: 'GET_MOVIES_ERROR',
    payload: new Error(error),
    error: true
});

const GET_MOVIE_REQUEST = movieId => ({
    type: 'GET_MOVIE_REQUEST',
    payload: {
        movieId
    }
});

const GET_MOVIE_SUCCESS = movie => ({
    type: 'GET_MOVIE_SUCCESS',
    payload: {
        movie
    }
});

const GET_MOVIE_ERROR = error => ({
    type: 'GET_MOVIE_ERROR',
    payload: new Error(error),
    error: true
});

export {
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_ERROR,
    GET_MOVIES_REQUEST, 
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR 
};