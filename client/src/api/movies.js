import request from './request';

const HOST_URL = 'http://reactjs-cdp.herokuapp.com';

// GET movies list
const getList = () => request({
    url: `${HOST_URL}/movies`,
    method: 'get'
});

const MoviesAPI = {
    getList
};

export default MoviesAPI;
