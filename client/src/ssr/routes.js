import { GET_MOVIES_REQUEST, GET_MOVIE_REQUEST } from "../store/actions/movies";

export default [
    {
        path: '/',
        fetchData() {
            return GET_MOVIES_REQUEST();
        }
    },
    {
        path: '/film/:id',
        fetchData(moveId) {
            return GET_MOVIE_REQUEST(moveId);
        }
    }
];
