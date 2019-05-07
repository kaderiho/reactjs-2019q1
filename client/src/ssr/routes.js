import axios from 'axios';

const API_URL = 'http://reactjs-cdp.herokuapp.com/movies';

export default [
    {
        path: '/',
        exact: true,
        fetchData() {
            return axios.get(API_URL);
        }
    },
    {
        path: '/film/:id',
        exact: true,
        fetchData({ id: moviedId }) {
            return axios.get(`${API_URL}/${moviedId}`);
        }
    }
];
