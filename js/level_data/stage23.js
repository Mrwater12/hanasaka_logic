import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage23 = {
  id:23,
  map: [
    [4, 5, 5, 3, 5, 5, 3, 4],
    [1, 5, 3, 5, 5, 5, 6, 0],
    [1, 5, 5, 6, 3, 5, 5, 0],
    [1, 5, 7, 5, 5, 5, 5, 0],
    [2, 5, 5, 5, 3, 5, 5, 0],
    [1, 5, 5, 6, 5, 5, 5, 1],
    [1, 1, 0, 0, 1, 1, 2, 1]
  ],
  objects: [
    { type: "glass", x: 1, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 5, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 1, y: 0, dir: "UP", isSafe: true },
    { type: "glass", x: 2, y: 0, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 0, dir: "UP", isSafe: true },
    { type: "glass", x: 5, y: 0, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 1, dir: "UP", isSafe: true },
    { type: "glass", x: 3, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 4, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 2, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 3, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 4, dir: "UP", isSafe: true },
    { type: "glass", x: 6, y: 5, dir: "UP", isSafe: true },
    { type: "warp", x: 7, y: 0, dir: "LEFT", color: "#e91e63" },
    { type: "warp", x: 0, y: 0, dir: "RIGHT", color: "#e91e63" },
    { type: "arrow", x: 6, y: 0, dir: "UP" },
    { type: "arrow", x: 3, y: 0, dir: "LEFT" },
    { type: "arrow", x: 2, y: 1, dir: "DOWN" },
    { type: "glass", x: 5, y: 2, dir: "UP", isSafe: true },
    { type: "arrow", x: 4, y: 2, dir: "DOWN" },
    { type: "arrow", x: 4, y: 4, dir: "LEFT" },
    { type: "switch", x: 2, y: 3, dir: "UP" }
  ],
  items: [
    { type: "can", x: 1, y: 0 },
    { type: "can", x: 3, y: 4 }
  ],
  characters: [
    DIR.LEFT,
    DIR.LEFT,
    DIR.UP
  ]
};