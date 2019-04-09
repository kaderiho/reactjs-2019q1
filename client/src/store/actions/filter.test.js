import { SET_FILTER_BY, SET_FILTER_SEARCH } from './filter';

describe('Filter actions', () => {
    it('Should create an action to set "filter_by', () => {
        const searchBy = 'genre';
        const action = {
            type: 'SET_FILTER_BY',
            payload: {
                searchBy
            }
        };

        expect(SET_FILTER_BY(searchBy)).toEqual(action);
    });

    it('Should create an action to set "search" string', () => {
        const searchStr = 'Some search request';
        const action = {
            type: 'SET_FILTER_SEARCH',
            payload: {
                searchStr
            }
        };

        expect(SET_FILTER_SEARCH(searchStr)).toEqual(action);
    });
});