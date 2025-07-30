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

class ECC {
  constructor(privateKey = 2) {
    this.privateKey = privateKey;
    this.publicKey = scalarMultiply(this.privateKey, G);
    this.ephemeralKey = 3;
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
