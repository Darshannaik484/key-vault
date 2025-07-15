const p = 61;
const q = 53;
const n = p * q;
const phi = (p - 1) * (q - 1);
const e = 17;
const d = modInverse(e, phi);

function modInverse(a, m) {
  let m0 = m,
    t,
    q;
  let x0 = 0,
    x1 = 1;

  if (m === 1) return 0;

  while (a > 1) {
    q = Math.floor(a / m);
    t = m;

    m = a % m;
    a = t;
    t = x0;

    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) x1 += m0;

  return x1;
}

function rsaencrypt(message) {
  const messageCode = message.split("").map((char) => char.charCodeAt(0));
  const encrypted = messageCode.map((m) => modExp(m, e, n));
  console.log(encrypted);
  return encrypted;
}

function rsadecrypt(encrypted) {
  const encryptedArray = encrypted.split(",").map(Number);
  const decrypted = encryptedArray.map((c) => modExp(c, d, n));
  const decryptedMessage = decrypted
    .map((code) => String.fromCharCode(code))
    .join("");
  return decryptedMessage;
}

function modExp(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

export { rsadecrypt, rsaencrypt };

const res = rsaencrypt("HEllo");
console.log("Encrypted:", res);

const re = rsadecrypt("3000, 28, 745, 745, 218");
console.log("Decrypted:", re);
