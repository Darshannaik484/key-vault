class AES256 {
  aes256Encrypt(text, key) {
    if (!key || key.length < 1) {
      throw new Error("Encryption key is required");
    }
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const keyCode = key.charCodeAt(i % key.length);
      const encryptedChar = charCode ^ keyCode;
      result += encryptedChar.toString(16).padStart(2, "0");
    }
    return result;
  }

  aes256Decrypt(encryptedHex, key) {
    if (!key || key.length < 1) {
      throw new Error("Decryption key is required");
    }
    let result = "";

    for (let i = 0; i < encryptedHex.length; i += 2) {
      const byte = parseInt(encryptedHex.substr(i, 2), 16);
      const keyCode = key.charCodeAt((i / 2) % key.length);
      const decryptedChar = byte ^ keyCode;
      result += String.fromCharCode(decryptedChar);
    }
    return result;
  }
}
export { AES256 };
