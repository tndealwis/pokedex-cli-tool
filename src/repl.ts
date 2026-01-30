import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

export function startREPL() {
  rl.prompt();
  rl.on("line", (input) => {
    const userInput = cleanInput(input);
    if (userInput.length === 0) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${userInput[0]}`);
      rl.prompt();
    }
  });
}

export function cleanInput(input: string) {
  return input
    .trim()
    .split(" ")
    .map((word) => word.toLowerCase());
}
