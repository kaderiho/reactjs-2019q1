import { getFullYear } from './date';

describe('Date utils:', () => {
    test('Should return current year', () => {
        const checkedDate = new Date();

        expect(getFullYear(checkedDate)).toBe(new Date(checkedDate).getFullYear());
    })
});