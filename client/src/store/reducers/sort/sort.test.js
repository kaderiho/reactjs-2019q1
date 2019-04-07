import sort from './sort';

describe('sort reducer', () => {
    it('Should handle SET_SORT_BY', () => {
        const action = {
            type: 'SET_SORT_BY',
            payload: {
                sortBy: 'rating'
            }
        };

        expect(sort('', action)).toEqual(action.payload.sortBy);
    })
})