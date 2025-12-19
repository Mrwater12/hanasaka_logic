import { TILE, DIR } from '../constants.js';

//変数名も変更
export const stage27 = {
  id:27,

  map: [
    [1, 1, 4, 1, 1, 2, 1, 1, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 3, 1, 1, 1, 8, 3],
    [0, 3, 0, 0, 1, 6, 0, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 3, 0, 3, 8, 1, 1, 1, 7],
    [0, 1, 0, 1, 1, 6, 1, 1, 1],
    [3, 5, 3, 0, 0, 3, 0, 3, 4]
  ],
  objects: [
    { type: "glass", x: 1, y: 7, dir: "UP", isSafe: true },
    { type: "warp", x: 2, y: 0, dir: "DOWN", color: "#e91e63" },
    { type: "warp", x: 8, y: 7, dir: "LEFT", color: "#e91e63" },
    { type: "switch", x: 8, y: 5, dir: "UP" },
    { type: "arrow", x: 0, y: 7, dir: "RIGHT" },
    { type: "arrow", x: 2, y: 7, dir: "LEFT" },
    { type: "arrow", x: 5, y: 7, dir: "DOWN" },
    { type: "arrow", x: 7, y: 7, dir: "RIGHT" },
    { type: "arrow", x: 1, y: 5, dir: "RIGHT" },
    { type: "arrow", x: 3, y: 5, dir: "RIGHT" },
    { type: "arrow", x: 1, y: 3, dir: "DOWN" },
    { type: "arrow", x: 3, y: 2, dir: "DOWN" },
    { type: "arrow", x: 0, y: 1, dir: "DOWN" },
    { type: "arrow", x: 8, y: 2, dir: "LEFT" }
  ],
  items: [
    { type: "can", x: 2, y: 1 }
  ],
  characters: [
    DIR.DOWN,
    DIR.LEFT
  ]

};