# 🔐 project-key-vault

A lightweight and modular JavaScript library that provides popular encryption, decryption, and hashing algorithms including:

- AES (Advanced Encryption Standard)
- RSA (Rivest–Shamir–Adleman)
- Caesar Cipher
- Triple DES
- SHA-256 Hashing

> Built and maintained for secure web applications and educational purposes.

---

## 📦 Installation

Install the library via npm:

bash/command prompt
npm install project-key-vault

Usage
import { RSA } from "project-key-vault";
const rsaobj = new RSA();
console.log(rsaobj.rsaencrypt("Hello World"));
console.log(rsaobj.rsadecrypt(rsaobj.rsaencrypt("Hello World")));

Project Links

GitHub: github.com/Darshannaik484/key-vault-project

NPM: npmjs.com/package/project-key-vault
