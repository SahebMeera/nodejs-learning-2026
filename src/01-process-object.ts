import process from "node:process";

// process.on("exit", (code) => {

//   console.log(`Process is exiting with code: ${code}`);
// });

const command = process.argv[2] ?? "start";

//fail
// carsh flag

const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");

// if (shouldFail) {
//   console.error("Process failed");
//   process.exit(1);
// }

// if (shouldCrash) {
//   console.error("Process crashed");
//   process.exit(1);
// }

process.on("exit", (code) => {
  console.log(`Process is exiting with code: ${code}`);
});

function runApp() {
  console.log({ command });
  console.log({ shouldFail });
  console.log({ shouldCrash });
  console.log("Running the application...", process.argv);

  if (shouldFail) {
    console.error("Process failed");
    process.exit(1);
  }

  if (shouldCrash) {
    console.error("Process crashed");
    process.exit(1);
  }
}
runApp();
