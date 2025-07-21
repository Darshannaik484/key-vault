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
module.exports = XOR;
// // XorEncrypt("Hello", "5");
// // XorDecrypt("7d 50 59 59 5a", "5");
// const obj = new xor();
// const res = obj.xorCipher("Hello", "5");
// console.log("Encrypted:", res);
// const res2 = obj.xorCipher(res, "5");
// console.log("Decrypted:", res2);
