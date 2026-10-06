// streams pipelines - a sequence of data processing steps, where the output of one step is the input of the next step

// A stream pipeline is a sequence of data processing steps, where the output of one step is the input of the next step. In Node.js, streams are used to handle large amounts of data efficiently, without having to load the entire data set into memory at once. Streams can be used for reading and writing files, handling network requests and responses, and processing data in real-time.

// memory efficient - process data in chunks, piece by piece, without loading the entire data set into memory at once
// piece by piece
// not loading the entire data set into memory at once
// reading and writing files using streams
// handling network requests and responses using streams
// processing data in real-time using streams
// downloading and uploading large files using streams
// compression and decompression of data using streams

import { createReadStream, createWriteStream } from "node:fs";
import { pipeline, Readable, Transform, Writable } from "node:stream";
import { promisify } from "node:util";

// CHUNKS

const readableStream = Readable.from(["Hello ", "World!", " How are you?"]);

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const uppercasedChunk = chunk.toString().toUpperCase();
    callback(null, uppercasedChunk);
  },
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("Received chunk:", chunk.toString());
    callback();
  },
});

async function main(): Promise<void> {
  try {
    await promisify(pipeline)(
      readableStream,
      uppercaseTransform,
      writableStream,
    );
    console.log("Pipeline completed successfully.");
  } catch (error) {
    console.error("Pipeline failed:", error);
  }
}

main();
