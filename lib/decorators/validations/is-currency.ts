import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';

export const IS_CURRENCY = 'isCurrency';
const PATTERN = /WON|USD/;

export function isCurrency(value: unknown): value is string {
  return typeof value === 'string' && PATTERN.test(value);
}

/**
 * Check if the value is a gopaymethod string
 * If given value is not a string, then it returns false.
 */
export function IsCurrency(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_CURRENCY,
      validator: {
        validate: (value): boolean => isCurrency(value),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + '$property must be a currency (WON|USD)',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
