import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

export function startREPL() {
  rl.prompt();
  rl.on("line", (input) => {
    const [command] = cleanInput(input);
    if (!command) {
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
