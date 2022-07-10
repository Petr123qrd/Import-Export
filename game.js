import { Character } from "./domain.js";

class Game {
  start() {
    console.log("game started");
  }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export default { Game, GameSavingData, readGameSaving, writeGameSaving };

// export default class Game {
//   start() {
//     console.log("game started");
//   }
// }

// export default class GameSavingData {}

// export default function readGameSaving() {}
// export default function writeGameSaving() {}
