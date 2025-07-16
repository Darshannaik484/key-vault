const key = 3;

function encrypt(text) {
  let output = "";

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

function decrypt(text) {
  let output = "";

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
