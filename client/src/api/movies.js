import request from './request';

const HOST_URL = 'http://reactjs-cdp.herokuapp.com';

// GET movies list
const getList = () => request({
    url: `${HOST_URL}/movies`,
    method: 'get'
});

// GET movie
const getItem = movieId => request({
    url: `${HOST_URL}/movies/${movieId}`,
    method: 'get'
});

const MoviesAPI = {
    getList,
    getItem
};

export default MoviesAPI;
