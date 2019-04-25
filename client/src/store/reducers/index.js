import { combineReducers } from 'redux';
import movies from './movies/movies';
import sortBy from './sort/sort';

export default combineReducers({
    movies,
    sortBy
});