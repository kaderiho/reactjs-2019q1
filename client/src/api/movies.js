import request from './request';

const HOST_URL = 'http://localhost:8080';

// GET movies list
const getList = () =>
    request({
        url: `${HOST_URL}/api/movies`,
        method: 'get'
    });

// GET movie
const getItem = movieId =>
    request({
        url: `${HOST_URL}/api/movies/${movieId}`,
        method: 'get'
    });

const MoviesAPI = {
    getList,
    getItem
};

export default MoviesAPI;
