import axios from 'axios';

const HOST_URL = 'http://reactjs-cdp.herokuapp.com';

// GET movies list
const getList = () => {
    return axios.get(`${HOST_URL}/movies`);
};

const MoviesAPI = {
    getList
};

export default MoviesAPI;
