// buffers - raw binary data, fixed size, mutable, can be converted to string and vice versa

// A buffer is a temporary storage area for data that is being transferred from one place to another. In Node.js, buffers are used to handle binary data, such as images, audio files, and other types of media. Buffers are also used to handle data that is being read from or written to a file or network socket.

// Buffers are instances of the Buffer class, which is a global class in Node.js. The Buffer class provides methods for creating, manipulating, and converting buffers.

// reading files and writing files using buffers
// receiving data from a network socket using buffers
// working with streams of data using buffers
// handling images, audio files, and other types of media using buffers
// converting data between different formats using buffers
// encrypting and decrypting data using buffers

const buffer = Buffer.from("Hello, World!");
console.log(buffer);
console.log(buffer.toString());

const buffer2 = Buffer.alloc(3);
console.log(buffer2);
console.log(buffer2.toString());

buffer2.write("Hello");

console.log(buffer2);
console.log(buffer2.toString());

const buffer3 = Buffer.concat([buffer, buffer2]);
console.log(buffer3);
console.log(buffer3.toString());

const chunks = [
  Buffer.from("Hello "),
  Buffer.from("World!"),
  Buffer.from(" How are you?"),
];
const buffer4 = Buffer.concat(chunks);
console.log(buffer4);
console.log(buffer4.toString());
