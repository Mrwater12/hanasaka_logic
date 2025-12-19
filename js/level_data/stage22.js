import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage22 = {
  id:22,

  map: [
    [1, 3, 0, 0, 0, 2, 1],
    [0, 5, 5, 3, 5, 1, 0],
    [0, 5, 5, 5, 5, 1, 0],
    [0, 3, 5, 1, 1, 8, 0],
    [0, 5, 5, 5, 5, 5, 3],
    [0, 5, 5, 5, 5, 3, 0],
    [1, 2, 0, 3, 0, 0, 3]
  ],
  objects: [
    { type: "glass", x: 4, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 5, dir: "UP", isSafe: true },
    { type: "arrow", x: 1, y: 0, dir: "RIGHT" },
    { type: "arrow", x: 6, y: 6, dir: "LEFT" },
    { type: "arrow", x: 5, y: 5, dir: "UP" },
    { type: "arrow", x: 6, y: 4, dir: "DOWN" },
    { type: "arrow", x: 3, y: 6, dir: "LEFT" },
    { type: "arrow", x: 1, y: 3, dir: "UP" },
    { type: "arrow", x: 3, y: 1, dir: "DOWN" }
  ],
  items: [
    { type: "can", x: 3, y: 4 },
    { type: "can", x: 1, y: 2 }
  ],
  characters: [
    DIR.LEFT,
    DIR.RIGHT
  ]

};