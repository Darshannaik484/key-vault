class XOR {
  xorCipher(text, key) {
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

  Xorencrypt = (inputText, key) => {
    const encrypted = this.xorCipher(inputText, key);
    console.log(toHex(encrypted));
  };

  Xordecrypt = (inputText, key) => {
    const decrypted = this.xorCipher(fromHex(inputText), key);
    console.log(decrypted);
  };
}
export { XOR };
