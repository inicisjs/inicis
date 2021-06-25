import { createHash } from 'crypto';

const sortObj = (obj: Record<string, unknown>): Record<string, unknown> =>
  Object.keys(obj)
    .sort()
    .reduce((acc, currKey) => ({ ...acc, [currKey]: obj[currKey] }), {});

const objToQs = (obj: Record<string, unknown>): string =>
  Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

export const hash = (data: string, algorithm: string): string =>
  createHash(algorithm).update(data).digest('hex');

export const sign = (
  obj: Record<string, unknown>,
  algorithm = 'sha256'
): string => hash(objToQs(sortObj(obj)), algorithm);
