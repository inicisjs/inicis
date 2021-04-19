import { isCurrency } from '../../lib/decorators/validations/is-currency';

describe('isCurrency', () => {
  it('should return true when valid', () => {
    const validInputs = ['WON', 'USD'];

    validInputs.forEach((input) => {
      expect(isCurrency(input)).toEqual(true);
    });
  });

  it('should return false when invalid', () => {
    const invalidInputs = [3332255555, '', 'Sumin', null, undefined, true];

    invalidInputs.forEach((input) => {
      expect(isCurrency(input)).toEqual(false);
    });
  });
});
