// import { rsaencrypt, rsadecrypt } from "./rsa";
// import { tripleDESDecrypt, tripleDESEncrypt } from "./trippleDES";
// import { aes256Encrypt, aes256Decrypt } from "./aes256";
// import { XorEncrypt, XorDecrypt } from "./xor";
// import {
//   encrypt as caesarEncrypt,
//   decrypt as caesarDecrypt,
// } from "./CaesarCipher";

// const obj = new CaeserCipher();
// const res1 = obj.caesarencrypt("Darshan");
// const res2 = obj.caesardecrypt(res1);
// console.log(res1);
// console.log(res2);
import CaeserCipher from "./CaesarCipher.js";
import AES256 from "./aes256.js";
import RSA from "./rsa.js";
import TrippleDES from "./trippleDES.js";
import XOR from "./xor.js";

export default { CaeserCipher, AES256, RSA, TrippleDES, XOR };
