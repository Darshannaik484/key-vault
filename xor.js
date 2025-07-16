function xorCipher(text, key) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const keyCharCode = key.charCodeAt(i % key.length);
    const xorCode = charCode ^ keyCharCode;
    output += String.fromCharCode(xorCode);
  }
  return output;
}

function toHex(str) {
  return Array.from(str)
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join(" ");
}

function fromHex(hexStr) {
  return hexStr
    .split(" ")
    .map((h) => String.fromCharCode(parseInt(h, 16)))
    .join("");
}

const XorEncrypt = (inputText, key) => {
  const encrypted = xorCipher(inputText, key);
  console.log(toHex(encrypted));
};

const XorDecrypt = (inputText, key) => {
  const decrypted = xorCipher(fromHex(inputText), key);
  console.log(decrypted);
};

XorEncrypt("Hello", "5");

XorDecrypt("7d 50 59 59 5a", "5");
