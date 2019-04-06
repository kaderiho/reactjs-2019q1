import * as actions from './movies';

describe('Movies actions', () => {
    it('Should create an action to retrieve movies', () => {
        const expectedAction = {
            type: 'GET_MOVIES_REQUEST'
        };

        expect(actions.GET_MOVIES_REQUEST()).toEqual(expectedAction);
    });

    it('Should create an action to retrieve movies success', () => {
        const moviesList = [{ id: 0 }];
        const expectedAction = {
            type: 'GET_MOVIES_SUCCESS',
            payload: moviesList
        };

        expect(actions.GET_MOVIES_SUCCESS(moviesList)).toEqual(expectedAction);
    });

    it('Should create an action to retrieve movies error', () => {
        const errorMessage = 'The request is failed';
        const error = new Error(errorMessage);
        const expectedAction = {
            type: 'GET_MOVIES_ERROR',
            payload: error,
            error: true
        };

        expect(actions.GET_MOVIES_ERROR(errorMessage)).toEqual(expectedAction);
    });
});