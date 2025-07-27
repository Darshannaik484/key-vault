// import React, { useState } from "react";
// class EE{
// const a = 1, b = 6, p = 257; // p must be > 127 (ASCII max)
// const G = { x: 5, y: 1 };

// const mod = (n) => ((n % p) + p) % p;

// const inverseMod = (k) => {
//   for (let i = 1; i < p; i++) {
//     if ((k * i) % p === 1) return i;
//   }
//   return 1;
// };

// function pointAdd(P, Q) {
//   if (!P) return Q;
//   if (!Q) return P;

//   let m;
//   if (P.x === Q.x && P.y === Q.y) {
//     m = mod((3 * P.x * P.x + a) * inverseMod(2 * P.y));
//   } else {
//     m = mod((Q.y - P.y) * inverseMod(Q.x - P.x));
//   }

//   const x = mod(m * m - P.x - Q.x);
//   const y = mod(m * (P.x - x) - P.y);
//   return { x, y };
// }

// function scalarMultiply(k, P) {
//   let result = null;
//   let temp = P;
//   while (k > 0) {
//     if (k % 2 === 1) result = pointAdd(result, temp);
//     temp = pointAdd(temp, temp);
//     k = Math.floor(k / 2);
//   }
//   return result;
// }
// }
// export default function SimpleECC() {
//   const [privateKey, setPrivateKey] = useState(2); // d
//   const [message, setMessage] = useState("");
//   const [publicKey, setPublicKey] = useState(null);
//   const [encrypted, setEncrypted] = useState([]);
//   const [decrypted, setDecrypted] = useState("");

//   const generateKeys = () => {
//     const Q = scalarMultiply(privateKey, G);
//     setPublicKey(Q);
//     alert(🔑 Public Key: (${Q.x}, ${Q.y}));
//   };

//   const encrypt = () => {
//     if (!publicKey || !message) return;

//     const k = 3; // Ephemeral key (static for demo)
//     const result = [];

//     for (let char of message) {
//       const ascii = char.charCodeAt(0); // FULL ASCII
//       const C1 = scalarMultiply(k, G);
//       const kQ = scalarMultiply(k, publicKey);
//       const C2 = mod(ascii + kQ.x); // Encrypt with x only
//       result.push({ C1, C2 });
//     }

//     setEncrypted(result);
//     setDecrypted(""); // Reset
//   };

//    const decrypt = () => {
//     const plain = encrypted.map(({ C1, C2 }) => {
//       const dC1 = scalarMultiply(privateKey, C1);
//       const ascii = mod(C2 - dC1.x);
//       return String.fromCharCode(ascii);
//     });

//     setDecrypted(plain.join(""));
//   };

//   return (
//     <div style={{ fontFamily: "Arial", padding: 20 }}>
//       <h2>🔐 ECC Encryption & Decryption (Simple)</h2>

//       <div>
//         <label>Private Key: </label>
//         <input
//           type="number"
//           value={privateKey}
//           onChange={(e) => setPrivateKey(Number(e.target.value))}
//         />
//         <button onClick={generateKeys}>Generate Public Key</button>
//       </div>

//       <div style={{ marginTop: 10 }}>
//         <label>Enter Message: </label>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={encrypt}>Encrypt</button>
//       </div>

//       {encrypted.length > 0 && (
//         <div style={{ marginTop: 20 }}>
//           <h3>🔒 Encrypted Output</h3>
//           {encrypted.map(({ C1, C2 }, i) => (
//             <p key={i}>
//               <b>{message[i]}</b> → C1: ({C1.x}, {C1.y}), C2: {C2}
//             </p>
//           ))}
//           <button onClick={decrypt}>Decrypt</button>
//         </div>
//       )}

//       {decrypted && (
//         <div style={{ marginTop: 20 }}>
//           <h3>✅ Decrypted Message</h3>
//           <p>{decrypted}</p>
//         </div>
//       )}
//     </div>
//   );
// }

const a = 1,
  b = 6,
  p = 257; // Elliptic curve parameters
const G = { x: 5, y: 1 }; // Generator point

const mod = (n) => ((n % p) + p) % p;

const inverseMod = (k) => {
  for (let i = 1; i < p; i++) {
    if ((k * i) % p === 1) return i;
  }
  return 1;
};

function pointAdd(P, Q) {
  if (!P) return Q;
  if (!Q) return P;

  let m;
  if (P.x === Q.x && P.y === Q.y) {
    m = mod((3 * P.x * P.x + a) * inverseMod(2 * P.y));
  } else {
    m = mod((Q.y - P.y) * inverseMod(Q.x - P.x));
  }

  const x = mod(m * m - P.x - Q.x);
  const y = mod(m * (P.x - x) - P.y);
  return { x, y };
}

function scalarMultiply(k, P) {
  let result = null;
  let temp = P;
  while (k > 0) {
    if (k % 2 === 1) result = pointAdd(result, temp);
    temp = pointAdd(temp, temp);
    k = Math.floor(k / 2);
  }
  return result;
}

// Core ECC class
class ECC {
  constructor(privateKey = 2) {
    this.privateKey = privateKey;
    this.publicKey = scalarMultiply(this.privateKey, G);
    this.ephemeralKey = 3; // fixed for demo
  }

  setPrivateKey(newKey) {
    this.privateKey = newKey;
    this.publicKey = scalarMultiply(this.privateKey, G);
  }

  encrypt(message) {
    const encrypted = [];
    for (let char of message) {
      const ascii = char.charCodeAt(0);
      const C1 = scalarMultiply(this.ephemeralKey, G);
      const kQ = scalarMultiply(this.ephemeralKey, this.publicKey);
      const C2 = mod(ascii + kQ.x);
      encrypted.push({ C1, C2 });
    }
    return encrypted;
  }

  decrypt(encryptedData) {
    const decrypted = encryptedData.map(({ C1, C2 }) => {
      const dC1 = scalarMultiply(this.privateKey, C1);
      const ascii = mod(C2 - dC1.x);
      return String.fromCharCode(ascii);
    });
    return decrypted.join("");
  }

  getPublicKey() {
    return this.publicKey;
  }
}

export default ECC;
