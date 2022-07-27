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
 * @template T
 * @param {T} obj
 * @return {*}  {boolean}
 */
export function isNullOrUndefined<T>(obj: T): boolean { return isNull(obj) || isUndefined(obj); }

/**
 * Checks whether given string is null, undefined or emtpy
 *
 * @export
 * @param {string} str
 * @return {*}  {boolean}
 */
export function isNullOrEmptyString(str: string): boolean { return isNullOrUndefined(str) || str.length === 0; }

/**
 * Checks whether given string is null, undefined, empty or consists of empty strings
 *
 * @export
 * @param {string} str
 * @return {*}  {boolean}
 */
export function isNullOrWhiteSpace(str: string): boolean { return isNullOrUndefined(str) || str.trim().length === 0; }

/**
 * Checks whether given array is null, undefined or empty
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @return {*}  {boolean}
 */
export function isNullOrEmptyArray<T>(arr: T[]): boolean { return isNullOrUndefined(arr) || arr.length === 0; }

/**
 * Checks whether given object is null, undefined or empty
 *
 * @export
 * @template T
 * @param {T} obj
 * @return {*} 
 */
export function isNullOrEmptyObject<T>(obj: T) { return isNullOrUndefined(obj) || Object.keys(obj).length === 0; }