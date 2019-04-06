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

export { 
    GET_MOVIES_REQUEST, 
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR 
};