// user registered event emitter example
// send a notification to the user when they register successfully
// notify some other services when a user registers successfully
// This example demonstrates how to use the EventEmitter class from the Node.js events module to handle custom events in a TypeScript project.

// emit one event - listen to that event - trigger that event - pass some data to the event listener
// .on() - listen to an event
// .once -- register a one-time listener for an event
// .emit() - trigger an event and pass data to the event listener

import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("customEvent", (data) => {
  console.log("Custom event triggered with data:", data);
});

emitter.emit("customEvent", { message: "Hello, World!" });

type UserRegistrationPayload = {
  id: number;
  email: string;
};

emitter.on("userRegistered", (payload: UserRegistrationPayload) => {
  console.log(
    `User registered with ID: ${payload.id} and email: ${payload.email}`,
  );
});

emitter.emit("userRegistered", { id: 1, email: "user@example.com" });
