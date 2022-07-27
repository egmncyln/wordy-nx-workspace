import * as base64 from "base-64";
import * as utf8 from "utf8";

/**
 * Encrypts given plainText by using utf8 and base64 packages
 *
 * @export
 * @param {string} plainText
 * @return {*}  {string}
 */
export function encryptString(plainText: string): string { return base64.encode(utf8.encode(plainText)); }

/**
 * Decrypts given encryptedText by using utf8 and base64 packages
 *
 * @export
 * @param {string} encryptedText
 * @return {*}  {string}
 */
export function decryptString(encryptedText: string): string { return utf8.decode(base64.decode(encryptedText)); }