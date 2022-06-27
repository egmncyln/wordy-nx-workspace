import base64 = require('base-64');
import utf8 = require('utf8');

export function encryptString(plainText: string): string {
  return base64.encode(utf8.encode(plainText));
}

export function decryptString(encryptedText: string): string {
  return utf8.decode(base64.decode(encryptedText));
}
