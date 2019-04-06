import movies from './movies';

describe('movies reducer', () => {
    it('Should handle GET_MOVIES_SUCCESS', () => {
        const mockedList = [{ id: 0 }];

        expect(movies([], {
            type: 'GET_MOVIES_SUCCESS',
            payload: mockedList
        })).toEqual([...mockedList]);
    })
})