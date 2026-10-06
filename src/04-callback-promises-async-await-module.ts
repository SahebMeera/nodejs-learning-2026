type User = {
  id: number;
  name: string;
  role: "user" | "super-admin";
};

const users: User[] = [
  { id: 1, name: "Alice", role: "user" },
  { id: 2, name: "Bob", role: "super-admin" },
  { id: 3, name: "Charlie", role: "user" },
];

// callback is a function that is passed as an argument to another function and is executed after some operation is completed. In this case, we will create a function that takes a callback to filter users based on their role.

// function findUserWithCallback(
//   userId: number,
//   callback: (error: Error | null, user?: User) => void,
// ) {
//   setTimeout(() => {
//     const user = users.find((u) => u.id === userId);
//     if (!user) {
//       callback(new Error(`User with id ${userId} not found`), undefined);
//       return;
//     }
//     callback(null, user);
//   }, 1000);
// }

// findUserWithCallback(20, (error, user) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }
//   console.log(`User found: ${user?.name} with role ${user?.role}`);
// });

// promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected. In this case, we will create a function that returns a promise to filter users based on their role.
function findUserWithPromise(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        reject(new Error(`User with id ${userId} not found`));
        return;
      }
      resolve(user);
    }, 1000);
  });
}

// findUserWithPromise(20)
//   .then((user) => {
//     console.log(`User found Promise: ${user.name} with role ${user.role}`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// async/await is a syntactic sugar over promises that allows us to write asynchronous code in a synchronous manner. It makes the code more readable and easier to understand.

async function findUserWithAsyncAwait(userId: number): Promise<void> {
  try {
    const user = await findUserWithPromise(userId);
    console.log(`User found Async/Await: ${user.name} with role ${user.role}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unknown error occurred");
    }
  }
}

findUserWithAsyncAwait(1);
