import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';

import { GoPayMethod } from '../..//interfaces/stdpay.interface';

export const IS_GO_PAY_METHOD_STRING = 'isGoPayMethodString';

export function isGoPayMethodString(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.split(':').every((chunk) => chunk in GoPayMethod)
  );
}

/**
 * Check if the value is a gopaymethod string
 * If given value is not a string, then it returns false.
 */
export function IsGoPayMethodString(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_GO_PAY_METHOD_STRING,
      validator: {
        validate: (value): boolean => isGoPayMethodString(value),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + '$property must be a gopaymethod string',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
