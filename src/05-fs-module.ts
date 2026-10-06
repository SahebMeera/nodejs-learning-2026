// fs-file system
// create,write, read, update, delete files and directories

import fs from "node:fs";

function runSyncExample() {
  // create a file
  fs.writeFileSync("example.txt", "Hello, World!");
  console.log("File created");
  const data = fs.readFileSync("example.txt", "utf8");
  console.log(`File content: ${data}`);
  // update a file
  fs.appendFileSync("example.txt", "\nThis is an appended text.");
  console.log("File updated");
  const updatedData = fs.readFileSync("example.txt", "utf8");
  console.log(`Updated file content: ${updatedData}`);
  // delete a file
  fs.unlinkSync("example.txt");
  console.log("File deleted");
}

runSyncExample();
