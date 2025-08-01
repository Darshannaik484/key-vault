class XOR {
  xorCipher(text, key) {
    if (!key || key.length === 0) {
      throw new Error("Key must not be empty");
    }

    let output = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const keyCharCode = key.charCodeAt(i % key.length);
      const xorCode = charCode ^ keyCharCode;
      output += String.fromCharCode(xorCode);
    }
    return output;
  }

  toHex(str) {
    return Array.from(str)
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join(" ");
  }

  fromHex(hexStr) {
    return hexStr
      .split(" ")
      .map((h) => String.fromCharCode(parseInt(h, 16)))
      .join("");
  }

  XorEncrypt(inputText, key) {
    const encrypted = this.xorCipher(inputText, key);
    return this.toHex(encrypted);
  }

  XorDecrypt(inputText, key) {
    const decrypted = this.xorCipher(this.fromHex(inputText), key);
    return decrypted;
  }
}

export { XOR };
