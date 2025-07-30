class TrippleDES {
  pad(text) {
    const padLength = 8 - (text.length % 8);
    return text + "~".repeat(padLength === 8 ? 0 : padLength);
  }
  unpad(text) {
    return text.replace(/~+$/, "");
  }
  addMod256(block, key) {
    let result = "";
    for (let i = 0; i < block.length; i++) {
      const m = block.charCodeAt(i);
      const k = key.charCodeAt(i % key.length);
      result += String.fromCharCode((m + k) % 256);
    }
    return result;
  }

  subMod256(block, key) {
    let result = "";
    for (let i = 0; i < block.length; i++) {
      const c = block.charCodeAt(i);
      const k = key.charCodeAt(i % key.length);
      result += String.fromCharCode((c - k + 256) % 256);
    }
    return result;
  }

  tripledesencrypt(text, key1, key2, key3) {
    const padded = this.pad(text);
    let encrypted = "";
    for (let i = 0; i < padded.length; i += 8) {
      let block = padded.slice(i, i + 8);
      block = this.addMod256(block, key1);
      block = this.subMod256(block, key2);
      block = this.addMod256(block, key3);
      encrypted += block;
    }
    return encrypted;
  }

  tripledesdecrypt(text, key1, key2, key3) {
    let decrypted = "";
    for (let i = 0; i < text.length; i += 8) {
      let block = text.slice(i, i + 8);
      block = this.subMod256(block, key3);
      block = this.addMod256(block, key2);
      block = this.subMod256(block, key1);
      decrypted += block;
    }
    return this.unpad(decrypted);
  }
}
module.exports = TrippleDES;
// // export { tripleDESDecrypt, tripleDESEncrypt };
// // const res = tripleDESEncrypt("hello", "2", "AudioWorkletNode", "3");
// // console.log(res);
// // const re = tripleDESDecrypt("hello", "2", "AudioWorkletNode", "3");
// // console.log(re);
// // const obj = new tripplrdes();
// // const res = obj.tripleDESEncrypt("hello", "2", "AudioWorkletNode", "3");
// // console.log("Encrypted:", res);
// // const re = obj.tripleDESDecrypt("hello", "2", "AudioWorkletNode", "3");
// // console.log("Decrypted:", re);

// function pad(text) {
//   const padLength = 8 - (text.length % 8);
//   return text + "~".repeat(padLength === 8 ? 0 : padLength);
// }
// function unpad(text) {
//   return text.replace(/~+$/, "");
// }
// function addMod256(block, key) {
//   let result = "";
//   for (let i = 0; i < block.length; i++) {
//     const m = block.charCodeAt(i);
//     const k = key.charCodeAt(i % key.length);
//     result += String.fromCharCode((m + k) % 256);
//   }
//   return result;
// }

// function subMod256(block, key) {
//   let result = "";
//   for (let i = 0; i < block.length; i++) {
//     const c = block.charCodeAt(i);
//     const k = key.charCodeAt(i % key.length);
//     result += String.fromCharCode((c - k + 256) % 256);
//   }
//   return result;
// }

// function tripleDESEncrypt(text, key1, key2, key3) {
//   const padded = pad(text);
//   let encrypted = "";
//   for (let i = 0; i < padded.length; i += 8) {
//     let block = padded.slice(i, i + 8);
//     block = addMod256(block, key1);
//     block = subMod256(block, key2);
//     block = addMod256(block, key3);
//     encrypted += block;
//   }
//   return encrypted;
// }

// function tripleDESDecrypt(text, key1, key2, key3) {
//   let decrypted = "";
//   for (let i = 0; i < text.length; i += 8) {
//     let block = text.slice(i, i + 8);
//     block = subMod256(block, key3);
//     block = addMod256(block, key2);
//     block = subMod256(block, key1);
//     decrypted += block;
//   }
//   return unpad(decrypted);
// }

// // export { tripleDESDecrypt, tripleDESEncrypt };
// const res = tripleDESEncrypt("hello", "2", "AudioWorkletNode", "3");
// console.log(res);
// const re = tripleDESDecrypt("hello", "2", "AudioWorkletNode", "3");
// console.log(re);
