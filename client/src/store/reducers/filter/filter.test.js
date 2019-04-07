import filter from './filter';

let initialState;

describe('filter reducer', () => {
    beforeEach(() => {
        initialState = {
            searchStr: '',
            searchBy: ''
        };
    });

    it('Should handle SET_FILTER_BY', () => {
        const action = {
            type: 'SET_FILTER_BY',
            payload: {
                searchBy: 'filterByTitle'
            }
        };
 
        expect(filter(initialState, action)).toEqual({
            ...initialState,
            ...action.payload
        });
    });

    it('Should handle SET_FILTER_SEARCH', () => {
        const action = {
            type: 'SET_FILTER_SEARCH',
            payload: {
                searchStr: 'Some search str'
            }
        };
 
        expect(filter(initialState, action)).toEqual({
            ...initialState,
            ...action.payload
        });
    });
})