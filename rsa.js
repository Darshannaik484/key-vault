class RSA {
  constructor() {
    this.p = 61;
    this.q = 53;
    this.n = this.p * this.q;
    this.phi = (this.p - 1) * (this.q - 1);
    this.e = 17;
    this.d = this.modInverse(this.e, this.phi);
  }

  modInverse(a, m) {
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

  modExp(base, exp, mod) {
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

  rsaencrypt = (message) => {
    const messageCode = message.split("").map((char) => char.charCodeAt(0));
    const encrypted = messageCode.map((m) => this.modExp(m, this.e, this.n));
    return encrypted;
  };

  rsadecrypt = (encryptedArray) => {
    const decrypted = encryptedArray.map((c) => this.modExp(c, this.d, this.n));
    const decryptedMessage = decrypted
      .map((code) => String.fromCharCode(code))
      .join("");
    return decryptedMessage;
  };
}
export { RSA };
