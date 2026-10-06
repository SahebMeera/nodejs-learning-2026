import crypto from "node:crypto";

const requestId = crypto.randomUUID();
console.log({ requestId });

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text: string) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encrypted: string) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

console.log("Key:", key.toString("hex"));
console.log("IV:", iv.toString("hex"));
const encryptedText = encrypt("Hello, World!");
console.log("Encrypted:", encryptedText);
console.log("Decrypted:", decrypt(encryptedText));
