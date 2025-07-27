// import { rsaencrypt, rsadecrypt } from "./rsa";
// import { tripleDESDecrypt, tripleDESEncrypt } from "./trippleDES";
// import { aes256Encrypt, aes256Decrypt } from "./aes256";
// import { XorEncrypt, XorDecrypt } from "./xor";
// import {
//   encrypt as caesarEncrypt,
//   decrypt as caesarDecrypt,
// } from "./CaesarCipher";
import { rsaencrypt, rsaencrypt } from "./rsa.js";
import { tripleDESDecrypt, tripleDESEncrypt } from "./trippleDES";
import { aes256Encrypt, aes256Decrypt } from "./aes256.js";
import { XorEncrypt, XorDecrypt } from "./xor";
import { caesardecrypt, caesarencrypt } from "./CaesarCipher.js";
export {
  rsaencrypt,
  rsaencrypt,
  tripleDESDecrypt,
  tripleDESEncrypt,
  aes256Encrypt,
  aes256Decrypt,
  XorEncrypt,
  XorDecrypt,
  caesardecrypt,
  caesarencrypt,
};

// const obj = new CaeserCipher();
// const res1 = obj.caesarencrypt("Darshan");
// const res2 = obj.caesardecrypt(res1);
// console.log(res1);
// console.log(res2);
// import CaeserCipher from "./CaesarCipher.js";
// import AES256 from "./aes256.js";
// import RSA from "./rsa.js";
// import TrippleDES from "./trippleDES.js";
// import XOR from "./xor.js";

// const caeser = new CaeserCipher();
// const res = caeser.caesarencrypt("Darshan");
// console.log("Caesar Cipher Encrypted:", res);
