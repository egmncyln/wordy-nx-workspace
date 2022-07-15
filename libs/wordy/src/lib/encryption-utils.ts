import * as base64 from "base-64";

import * as utf8 from "utf8";

export const encryptString = (plainText: string): string => base64.encode(utf8.encode(plainText));

export const decryptString = (encryptedText: string): string => utf8.decode(base64.decode(encryptedText));