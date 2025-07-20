class CaeserCipher {
  key = 3;

  caesarencrypt(text) {
    let output = "";
    const key = this.key;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char >= "A" && char <= "Z") {
        let code = char.charCodeAt(0) - 65;
        let shifted = (code + key) % 26;
        output += String.fromCharCode(shifted + 65);
      } else if (char >= "a" && char <= "z") {
        let code = char.charCodeAt(0) - 97;
        let shifted = (code + key) % 26;
        output += String.fromCharCode(shifted + 97);
      } else {
        output += char;
      }
    }
    return output;
  }

  caesardecrypt(text) {
    let output = "";
    const key = this.key;

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char >= "A" && char <= "Z") {
        let code = char.charCodeAt(0) - 65;
        let shifted = (code - key + 26) % 26;
        output += String.fromCharCode(shifted + 65);
      } else if (char >= "a" && char <= "z") {
        let code = char.charCodeAt(0) - 97;
        let shifted = (code - key + 26) % 26;
        output += String.fromCharCode(shifted + 97);
      } else {
        output += char;
      }
    }

    return output;
  }
}

// console.log(caesarencrypt("HEllo world"));
// console.log(caesardecrypt(caesarencrypt("HEllo world")));
const obj = new CaeserCipher();
const encrypted = obj.caesarencrypt("Hello World");
const decrypted = obj.caesardecrypt(encrypted);
console.log("Encrypted message is ", encrypted);
console.log("Decrypted message is ", decrypted);
