import * as faker from 'faker';

import { isGoPayMethodString } from '../../lib/decorators/validations/is-go-pay-method-string';
import { GoPayMethod } from '../../lib/interfaces';

describe('isGoPayMethodString', () => {
  it('should return true when valid', () => {
    const goPayMethodString = [...Array(faker.datatype.number(10))]
      .map(() => {
        const values = Object.values(GoPayMethod);
        return values[faker.datatype.number(values.length / 2 - 1)];
      })
      .join(':');

    expect(isGoPayMethodString(goPayMethodString)).toEqual(true);
  });

  it('should return false when invalid', () => {
    const invalidInputs = [3332255555, '', 'Sumin', null, undefined, true];

    invalidInputs.forEach((input) => {
      expect(isGoPayMethodString(input)).toEqual(false);
    });
  });
});
