import { combineReducers } from 'redux';
import movies from './movies/movies';
import filter from './filter/filter';
import sortBy from './sort/sort';

export default combineReducers({
    filter,
    movies,
    sortBy
});