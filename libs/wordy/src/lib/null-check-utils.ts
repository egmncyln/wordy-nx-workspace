export function isNull<T>(obj: T): boolean { return obj === null; }

export function isUndefined<T>(obj: T): boolean { return obj === undefined; }

export const isNullOrUndefined = (obj: object): boolean => isNull(obj) || isUndefined(obj);

export const isNullOrEmptyString = (str: string): boolean => isNull(str) || isUndefined(str) || str.length === 0;

export const isNullOrWhiteSpace = (str: string): boolean => isNull(str) || isUndefined(str) || str.trim().length === 0;

export function isNullOrEmptyArray<T>(arr: T[]): boolean { return isNull(arr) || isUndefined(arr) || arr.length === 0; }