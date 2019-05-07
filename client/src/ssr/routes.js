// import { GET_MOVIES_REQUEST, GET_MOVIE_REQUEST } from "../store/actions/movies";
import axios from 'axios';

const API_URL = 'http://reactjs-cdp.herokuapp.com/movies';

export default [
    {
        path: '/',
        fetchData() {
            return axios.get(API_URL);
        },
        successAction: 'GET_MOVIES_SUCCESS'
    },
    {
        path: '/film/:id',
        fetchData(moveId) {
            return axios.get(`${API_URL}/${moveId}`);
        },
        successAction: 'GET_MOVIE_SUCCESS'
    }
];
