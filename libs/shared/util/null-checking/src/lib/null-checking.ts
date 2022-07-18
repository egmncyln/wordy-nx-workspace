/**
 * Checks whether given object is null
 *
 * @export
 * @template T
 * @param {T} obj
 * @return {*}  {boolean}
 */
export function isNull<T>(obj: T): boolean { return obj === null; }

/**
 * Checks whether given object is undefined
 *
 * @export
 * @template T
 * @param {T} obj
 * @return {*}  {boolean}
 */
export function isUndefined<T>(obj: T): boolean { return obj === undefined; }

/**
 * Checks whether given object is null or undefined
 * 
 * @export
 * @param {object} obj
 * @return {*}  {boolean}
 */
export const isNullOrUndefined = (obj: object): boolean => isNull(obj) || isUndefined(obj);

/**
 * Checks whether given string is null, undefined or emtpy
 * 
 * @export 
 * @param {string} str
 * @return {*}  {boolean}
 */
export const isNullOrEmptyString = (str: string): boolean => isNull(str) || isUndefined(str) || str.length === 0;

/**
 * Checks whether given string is null, undefined, empty or contains empty strings
 * 
 * @export
 * @param {string} str
 * @return {*}  {boolean}
 */
export const isNullOrWhiteSpace = (str: string): boolean => isNull(str) || isUndefined(str) || str.trim().length === 0;

/**
 * Checks whether given array is null, undefined or empty
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @return {*}  {boolean}
 */
export function isNullOrEmptyArray<T>(arr: T[]): boolean { return isNull(arr) || isUndefined(arr) || arr.length === 0; }