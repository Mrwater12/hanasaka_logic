import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage20 = {
  id:20,
  map: [
    [2, 0, 3, 0, 3, 1],
    [1, 1, 1, 1, 0, 1],
    [3, 0, 6, 1, 5, 2],
    [0, 1, 0, 1, 0, 1],
    [3, 0, 0, 0, 0, 3],
    [1, 1, 0, 1, 1, 0]
  ],
  objects: [
    { type: "glass", x: 4, y: 2, dir: "UP", isSafe: true },
    { type: "arrow", x: 2, y: 0, dir: "LEFT" },
    { type: "arrow", x: 4, y: 0, dir: "LEFT" },
    { type: "arrow", x: 5, y: 4, dir: "LEFT" },
    { type: "arrow", x: 0, y: 2, dir: "RIGHT" },
    { type: "arrow", x: 0, y: 4, dir: "UP" }
  ],
  items: [
    { type: "can", x: 4, y: 2 },
    { type: "can", x: 2, y: 4 }
  ],
  characters: [
    DIR.UP,
    DIR.LEFT
  ]

};