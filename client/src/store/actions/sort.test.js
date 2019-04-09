import { SET_SORT_BY } from './sort';

describe('Sort actions', () => {
    it('Should create an action to set "sortBy"', () => {
        const sortBy = 'rating';
        const action = {
            type: 'SET_SORT_BY',
            payload: {
                sortBy
            }
        };

        expect(SET_SORT_BY(sortBy)).toEqual(action);
    });
});